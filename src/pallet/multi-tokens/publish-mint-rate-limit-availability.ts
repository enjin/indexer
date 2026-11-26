import { TypeormDatabase, type TypeormDatabaseOptions } from '@subsquid/typeorm-store'
import type { EntityManager } from 'typeorm'
import { connectionManager } from '~/contexts'
import { MintRateLimitState } from '~/model'
import {
    mintRateLimitAvailable,
    mintRateLimitQuietReopening,
} from '~/pallet/multi-tokens/mint-rate-limit-notifications'
import config from '~/util/config'
import { DataService } from '~/util/data'
import { finalizedIndexedHeight } from '~/util/finalized-indexed-height'
import { Sns } from '~/util/sns'
import { isRelay } from '~/util/tools'

const PAGE_SIZE = 100

type SubjectTable = 'token' | 'collection'

async function publishDue(
    manager: EntityManager,
    table: SubjectTable,
    height: number,
    afterBlock: number,
    sns: Pick<Sns, 'sendFinalized'>
): Promise<Error | undefined> {
    return manager.transaction(async (transaction) => {
        const rows = await transaction.query<{ id: string; state: unknown }[]>(
            `SELECT id, mint_rate_limit AS state FROM "${table}"
             WHERE (mint_rate_limit #>> '{mintBlockedUntil}') IS NOT NULL
               AND (mint_rate_limit #>> '{mintBlockedUntil}')::bigint > $1
               AND (mint_rate_limit #>> '{mintBlockedUntil}')::bigint <= $2
             ORDER BY (mint_rate_limit #>> '{mintBlockedUntil}')::bigint, id
             LIMIT $3
             FOR UPDATE SKIP LOCKED`,
            [afterBlock, height, PAGE_SIZE]
        )
        const delivered: string[] = []
        let failure: Error | undefined
        for (const { id, state } of rows) {
            try {
                const mintRateLimit = new MintRateLimitState(undefined, state)
                const block = mintRateLimit.mintBlockedUntil
                if (block == null) continue
                if (mintRateLimitQuietReopening(mintRateLimit, block - 1n) === block) {
                    const [collectionId, tokenId] = id.split('-')
                    const event = mintRateLimitAvailable({ collectionId, tokenId }, block, mintRateLimit.limit)
                    if (!(await sns.sendFinalized(event, block))) continue
                }
                delivered.push(id)
            } catch (error) {
                failure ??= error instanceof Error ? error : new Error(String(error))
            }
        }
        if (delivered.length > 0) {
            await transaction.query(
                `UPDATE "${table}" SET mint_rate_limit = mint_rate_limit - 'mintBlockedUntil' WHERE id = ANY($1::varchar[])`,
                [delivered]
            )
        }
        return failure
    })
}

export async function publishMintRateLimitAvailability(
    manager: EntityManager,
    height: number,
    afterBlock: number,
    sns: Pick<Sns, 'sendFinalized'>
): Promise<void> {
    let failure: Error | undefined
    for (const table of ['token', 'collection'] as const) {
        const error = await publishDue(manager, table, height, afterBlock, sns)
        failure ??= error
    }
    if (failure !== undefined) throw failure
}

export class MintRateLimitAvailabilityDatabase extends TypeormDatabase {
    constructor(
        options: TypeormDatabaseOptions,
        private readonly logFailure: (error: unknown) => void
    ) {
        super(options)
    }

    override async transact(...args: Parameters<TypeormDatabase['transact']>): Promise<void> {
        await super.transact(...args)
        await this.publishAfterCommit()
    }

    override async transactHot2(...args: Parameters<TypeormDatabase['transactHot2']>): Promise<void> {
        await super.transactHot2(...args)
        await this.publishAfterCommit()
    }

    private async publishAfterCommit(): Promise<void> {
        if (!config.amazonSns.topicArn || isRelay()) return

        try {
            const manager = await connectionManager()
            const height = await finalizedIndexedHeight(manager)
            const afterBlock = DataService.getInstance().lastBlockNumber
            if (height !== null && height > afterBlock) {
                await publishMintRateLimitAvailability(manager, height, afterBlock, Sns.getInstance())
            }
        } catch (error) {
            this.logFailure(error)
        }
    }
}
