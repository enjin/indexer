import type { Job } from 'bullmq'
import { In } from 'typeorm'
import { connectionManager } from '~/contexts'
import { ChainInfo, Token, TokenGroupToken } from '~/model'
import Rpc from '~/util/rpc'
import { isRelay } from '~/util/tools'
import { FinalizedTokenStorageReader } from './token-storage-reader'

export type SyncTokenGroupPositionsData = {
    tokenIds: string[]
    blockHash: string
    dryRun?: boolean
}

/** Repair positions only, using a bounded token list at the latest indexed finalized block. */
export async function syncTokenGroupPositions(job: Job<SyncTokenGroupPositionsData>): Promise<void> {
    const { tokenIds, blockHash, dryRun = true } = job.data ?? {}
    if (
        !Array.isArray(tokenIds) ||
        tokenIds.length === 0 ||
        tokenIds.length > 100 ||
        tokenIds.some((id) => typeof id !== 'string' || !/^(0|[1-9]\d*)-(0|[1-9]\d*)$/.test(id)) ||
        typeof blockHash !== 'string' ||
        !/^0x[0-9a-fA-F]{64}$/.test(blockHash) ||
        typeof dryRun !== 'boolean'
    ) {
        throw new Error(
            'Token group position repair requires 1-100 full tokenIds, a blockHash and optional boolean dryRun'
        )
    }
    if (isRelay()) throw new Error('Token group position repair requires Matrixchain')

    const ids = [...new Set(tokenIds)]
    const em = await connectionManager()
    const { api } = await Rpc.getInstance()

    // A concurrent update/delete of a membership aborts the transaction instead of overwriting newer positions.
    // Pause the processor for write runs; ChainInfo is persisted only at the end of a processor batch.
    await em.transaction('REPEATABLE READ', async (tx) => {
        const [latest] = await tx.find(ChainInfo, { order: { blockNumber: 'DESC' }, take: 1 })
        if (!latest || latest.blockHash.toLowerCase() !== blockHash.toLowerCase()) {
            throw new Error('Token group position repair blockHash must match the latest indexed block')
        }
        if (latest.genesisHash.toLowerCase() !== api.genesisHash.toString().toLowerCase()) {
            throw new Error('Token group position repair RPC and database genesis hashes differ')
        }

        const finalizedHash = await api.rpc.chain.getFinalizedHead()
        const [finalized, canonicalHash] = await Promise.all([
            api.rpc.chain.getHeader(finalizedHash),
            api.rpc.chain.getBlockHash(latest.blockNumber),
        ])
        if (
            latest.blockNumber > finalized.number.toNumber() ||
            canonicalHash.toString().toLowerCase() !== blockHash.toLowerCase()
        ) {
            throw new Error('Token group position repair requires a canonical finalized indexed block')
        }

        const tokens = await tx.find(Token, {
            where: { id: In(ids) },
            relations: { tokenGroupTokens: { tokenGroup: true } },
        })
        const storage = await FinalizedTokenStorageReader.create(api, blockHash)
        if (storage.height !== latest.blockNumber) throw new Error('Token group position repair block height mismatch')

        let changed = 0
        for (const [index, id] of ids.entries()) {
            const token = tokens.find((candidate) => candidate.id === id)
            if (!token) {
                await job.log(`Skipped ${id}: token is not indexed`)
                continue
            }

            const stored = await storage.token(BigInt(id.split('-')[0]), token.tokenId)
            if (!stored?.groups) {
                await job.log(`Skipped ${id}: token or group storage is unavailable`)
                continue
            }

            const groups = stored.groups.map(String)
            const memberships = token.tokenGroupTokens
            const groupSet = new Set(groups)
            if (
                groupSet.size !== groups.length ||
                memberships.length !== groups.length ||
                new Set(memberships.map((membership) => membership.tokenGroup.id)).size !== groups.length ||
                memberships.some((membership) => !groupSet.has(membership.tokenGroup.id))
            ) {
                await job.log(`Skipped ${id}: indexed memberships differ from the snapshot`)
                continue
            }

            for (const membership of memberships) {
                const position = groups.indexOf(membership.tokenGroup.id)
                if (membership.position === position) continue
                if (!dryRun) await tx.update(TokenGroupToken, { id: membership.id }, { position })
                changed++
            }
            await job.updateProgress(Math.floor(((index + 1) / ids.length) * 90))
        }
        await job.log(
            `Token group position ${dryRun ? 'dry run' : 'repair'} at ${blockHash}: ${changed} positions ${dryRun ? 'would change' : 'updated'} across ${ids.length} requested tokens`
        )
    })
    await job.updateProgress(100)
}
