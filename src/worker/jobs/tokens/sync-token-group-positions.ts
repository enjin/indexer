import type { Job } from 'bullmq'
import { EntityManager, In, IsNull, Raw } from 'typeorm'
import { connectionManager } from '~/contexts'
import { Event, Token, TokenGroupToken } from '~/model'
import { isRelay } from '~/util/tools'
import { TOKEN_GROUP_HISTORY_NAMES, tokenGroupOrderFromEvents } from './token-group-event-order'

export type SyncTokenGroupPositionsData = {
    tokenIds: string[]
    dryRun?: boolean
}

const MAX_HISTORY_EVENTS = 10_000
type RepairResult = { changed: number; message: string }

function skipped(id: string, reason: string): RepairResult {
    return { changed: 0, message: `Skipped ${id}: ${reason}` }
}

async function repairToken(tx: EntityManager, id: string, dryRun: boolean): Promise<RepairResult> {
    const token = await tx.findOne(Token, {
        where: { id },
        relations: { tokenGroupTokens: { tokenGroup: true } },
    })
    if (!token) return skipped(id, 'token is not indexed')
    const memberships = token.tokenGroupTokens

    const [collectionId, tokenId] = id.split('-')
    // Added/GroupsUpdated historically omitted Event.tokenId; Removed stored the bare token ID.
    const events = await tx.find(Event, {
        where: {
            collectionId,
            name: In(TOKEN_GROUP_HISTORY_NAMES),
            data: Raw((column) => `${column} ->> 'tokenId' = :tokenId`, { tokenId }),
        },
        order: { id: 'DESC' },
        take: MAX_HISTORY_EVENTS + 1,
    })
    if (events.length > MAX_HISTORY_EVENTS) return skipped(id, 'event history exceeds 10000 events')
    const order = tokenGroupOrderFromEvents(events)
    if (!order) return skipped(id, 'group order cannot be determined from indexed events')

    const { groups, baselineEventId } = order
    const groupSet = new Set(groups)
    if (
        memberships.length !== groups.length ||
        new Set(memberships.map((membership) => membership.tokenGroup.id)).size !== groups.length ||
        memberships.some((membership) => !groupSet.has(membership.tokenGroup.id))
    ) {
        return skipped(id, 'indexed memberships differ from event history')
    }
    const changes = memberships
        .map((membership) => ({ membership, position: groups.indexOf(membership.tokenGroup.id) }))
        .filter(({ membership, position }) => membership.position !== position)
    if (!dryRun) {
        for (const { membership, position } of changes) {
            const result = await tx.update(
                TokenGroupToken,
                {
                    id: membership.id,
                    token: { id },
                    tokenGroup: { id: membership.tokenGroup.id },
                    position: membership.position ?? IsNull(),
                },
                { position }
            )
            if (result.affected !== 1) throw new Error(`Membership ${membership.id} changed during repair; retry`)
        }
    }
    return {
        changed: changes.length,
        message: `${id}: [${groups.join(', ')}] from ${baselineEventId}; ${changes.length} positions ${dryRun ? 'would change' : 'updated'}`,
    }
}

/** Correct membership positions from indexed assignment and reorder events. */
export async function syncTokenGroupPositions(job: Job<SyncTokenGroupPositionsData | undefined>): Promise<void> {
    const { tokenIds, dryRun = true } = job.data ?? {}
    if (
        !Array.isArray(tokenIds) ||
        tokenIds.length === 0 ||
        tokenIds.length > 100 ||
        tokenIds.some((id) => typeof id !== 'string' || !/^(0|[1-9]\d*)-(0|[1-9]\d*)$/.test(id)) ||
        typeof dryRun !== 'boolean'
    ) {
        throw new Error('Token group position repair requires 1-100 full tokenIds and optional boolean dryRun')
    }
    if (isRelay()) throw new Error('Token group position repair requires Matrixchain')

    const ids = [...new Set(tokenIds)]
    const em = await connectionManager()
    let changed = 0
    for (const [index, id] of ids.entries()) {
        // Events and memberships come from the same committed view. Conflicting row writes abort this token's repair.
        const result = await em.transaction('REPEATABLE READ', (tx) => repairToken(tx, id, dryRun))
        changed += result.changed
        await job.log(result.message)
        await job.updateProgress(Math.floor(((index + 1) / ids.length) * 100))
    }
    await job.log(
        `Token group position ${dryRun ? 'dry run' : 'repair'}: ${changed} positions ${dryRun ? 'would change' : 'updated'} across ${ids.length} requested tokens`
    )
}
