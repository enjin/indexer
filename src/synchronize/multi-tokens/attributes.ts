import { Block, CommonContext } from '~/contexts'
import { multiTokens } from '~/pallet'
import { safeString } from '~/util/tools'
import { hexToString } from '@polkadot/util'
import { Attribute, Collection, Token } from '~/model'
import { BATCH_SIZE } from '~/synchronize/common'
import { In } from 'typeorm'

export async function attributes(ctx: CommonContext, block: Block) {
    ctx.log.info('Syncing attributes...')

    const iterable = (await multiTokens.storage.attributes(block, { batchSize: BATCH_SIZE })) ?? []

    for await (const attributePairs of iterable) {
        const collectionIds = attributePairs.filter(([k]) => k[1] === undefined).map(([k]) => k[0].toString())
        const tokenIds = attributePairs.filter(([k]) => k[1] !== undefined).map(([k]) => `${k[0]}-${k[1]}`)
        const [collections, tokens] = await Promise.all([
            collectionIds.length === 0
                ? Promise.resolve([])
                : ctx.store.find(Collection, { where: { id: In(collectionIds) } }),
            tokenIds.length === 0 ? Promise.resolve([]) : ctx.store.find(Token, { where: { id: In(tokenIds) } }),
        ])
        const collectionMap = new Map(collections.map((collection) => [collection.id, collection]))
        const tokenMap = new Map(tokens.map((token) => [token.id, token]))

        const attributes = attributePairs.flatMap(([k, data]) => {
            if (!data) {
                throw new Error('Attribute Data not found')
            }
            const collectionId = k[0]
            const tokenId = k[1]
            const key = safeString(hexToString(k[2]))
            const value = safeString(hexToString(data.value))
            const id = tokenId !== undefined ? `${collectionId}-${tokenId}` : collectionId.toString()

            const attributeId = `${id}-${k[2]}`

            if (tokenId !== undefined) {
                const token = tokenMap.get(id)
                if (!token) return []

                return [
                    new Attribute({
                        id: attributeId,
                        token,
                        key,
                        value,
                        deposit: data.deposit,
                        isFrozen: data.isFrozen,
                        createdAt: new Date(block.timestamp ?? 0),
                        updatedAt: new Date(block.timestamp ?? 0),
                    }),
                ]
            }

            const collection = collectionMap.get(id)
            if (!collection) return []

            return [
                new Attribute({
                    id: attributeId,
                    key,
                    value,
                    deposit: data.deposit,
                    isFrozen: data.isFrozen,
                    collection,
                    createdAt: new Date(block.timestamp ?? 0),
                    updatedAt: new Date(block.timestamp ?? 0),
                }),
            ]
        })

        await ctx.store.insert(attributes)
    }

    ctx.log.info(`Successfully imported ${await ctx.store.count(Attribute)} attributes`)
}
