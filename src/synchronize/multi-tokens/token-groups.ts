import { In } from 'typeorm'
import { Block, CommonContext } from '~/contexts'
import { Collection, TokenGroup } from '~/model'
import { multiTokens } from '~/pallet'
import { BATCH_SIZE } from '~/synchronize/common'

export async function tokenGroups(ctx: CommonContext, block: Block) {
    const iterable = (await multiTokens.storage.tokenGroups(block, { batchSize: BATCH_SIZE })) ?? []
    ctx.log.info('Syncing token groups...')

    for await (const pairs of iterable) {
        const collectionIds = [...new Set(pairs.flatMap(([, data]) => (data ? [data.collectionId.toString()] : [])))]
        const collections = await ctx.store.find(Collection, { where: { id: In(collectionIds) } })
        const collectionMap = new Map(collections.map((collection) => [collection.id, collection]))
        const groups = pairs.flatMap(([id, data]) => {
            if (!data) throw new Error('Token group data not found')

            const collection = collectionMap.get(data.collectionId.toString())
            if (!collection) return []

            return [
                new TokenGroup({
                    id: id.toString(),
                    collection,
                    attributes: [],
                    metadata: null,
                    tokenGroupTokens: [],
                    createdAt: new Date(block.timestamp ?? 0),
                }),
            ]
        })

        await ctx.store.insert(groups)
    }

    ctx.log.info(`Successfully imported ${await ctx.store.count(TokenGroup)} token groups`)
}
