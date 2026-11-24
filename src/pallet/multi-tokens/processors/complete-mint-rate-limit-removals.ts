import { Raw, type FindManyOptions, type FindOneOptions } from 'typeorm'
import { Block, CommonContext } from '~/contexts'
import { Collection, Token } from '~/model'
import { hasV6CollectionLayout } from '~/pallet/multi-tokens/storage/collection-values'
import { hasV6TokenLayout } from '~/pallet/multi-tokens/storage/token-values'

const BATCH_SIZE = 1000

export async function completeMintRateLimitRemovals(ctx: CommonContext, block: Block): Promise<void> {
    if (!hasV6TokenLayout(block._runtime) || !hasV6CollectionLayout(block._runtime)) return

    const mintRateLimit = Raw(
        (column) =>
            `(${column} #>> '{pending,effectiveBlock}')::bigint <= :effectiveHeight
             AND (${column} #>> '{pending,effectiveBlock}') IS NOT NULL
             AND COALESCE(${column} #> '{pending,newLimit}', 'null'::jsonb) = 'null'::jsonb`,
        { effectiveHeight: block.height }
    )
    const candidateQuery = {
        select: { id: true },
        where: { mintRateLimit },
        order: { id: 'ASC' },
        take: BATCH_SIZE,
    } satisfies FindManyOptions<Token | Collection>

    for (const entity of [Token, Collection]) {
        for (;;) {
            const candidates = await ctx.store.find<Token | Collection>(entity, candidateQuery)

            for (const { id } of candidates) {
                // Lock and recheck before saving a row that workers can also update.
                const lockedQuery = {
                    where: { id, mintRateLimit },
                    lock: { mode: 'pessimistic_write' },
                } satisfies FindOneOptions<Token | Collection>
                const current = await ctx.store.findOne<Token | Collection>(entity, lockedQuery)
                if (!current) continue
                current.mintRateLimit = null
                await ctx.store.save(current)
            }

            if (candidates.length < BATCH_SIZE) break
        }
    }
}
