import { Block, CommonContext } from '../../contexts'
import { multiTokens } from '../../pallets'
import { safeString } from '../../utils/tools'
import { hexToString } from '@polkadot/util'
import { Attribute, Collection, Token } from '../../model'
import { BATCH_SIZE } from '../common'

export async function attributes(ctx: CommonContext, block: Block) {
    ctx.log.info('Syncing attributes...')

    const iterable = (await multiTokens.storage.attributes(block, { batchSize: BATCH_SIZE })) ?? []

    for await (const attributePairs of iterable) {
        const attributePromise = attributePairs.map(([k, data]) => {
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
                return new Attribute({
                    id: attributeId,
                    token: new Token({ id }),
                    key,
                    value,
                    deposit: data.deposit,
                    createdAt: new Date(block.timestamp ?? 0),
                    updatedAt: new Date(block.timestamp ?? 0),
                })
            }

            return new Attribute({
                id: attributeId,
                key,
                value,
                deposit: data.deposit,
                collection: new Collection({ id }),
                createdAt: new Date(block.timestamp ?? 0),
                updatedAt: new Date(block.timestamp ?? 0),
            })
        })

        await Promise.all(attributePromise).then((attributes) => ctx.store.insert(attributes))
    }

    ctx.log.info(`Successfully imported ${await ctx.store.count(Attribute)} attributes`)
}
