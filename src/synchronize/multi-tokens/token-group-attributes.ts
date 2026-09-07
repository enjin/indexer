import { In } from 'typeorm'
import { hexToString } from '@polkadot/util'
import { Block, CommonContext } from '~/contexts'
import { Attribute, TokenGroup } from '~/model'
import { multiTokens } from '~/pallet'
import { BATCH_SIZE } from '~/synchronize/common'
import { safeString } from '~/util/tools'

export async function tokenGroupAttributes(ctx: CommonContext, block: Block) {
    const iterable = (await multiTokens.storage.tokenGroupAttributes(block, { batchSize: BATCH_SIZE })) ?? []
    ctx.log.info('Syncing token group attributes...')

    for await (const pairs of iterable) {
        const groupIds = [...new Set(pairs.map(([key]) => key[0].toString()))]
        const groups = await ctx.store.find(TokenGroup, { where: { id: In(groupIds) } })
        const groupMap = new Map(groups.map((group) => [group.id, group]))
        const attributes = pairs.flatMap(([key, data]) => {
            if (!data) throw new Error('Token group attribute data not found')

            const tokenGroup = groupMap.get(key[0].toString())
            if (!tokenGroup) return []

            return [
                new Attribute({
                    id: `${key[0]}-${key[1]}-tg`,
                    tokenGroup,
                    key: safeString(hexToString(key[1])),
                    value: safeString(hexToString(data.value)),
                    deposit: data.deposit,
                    isFrozen: data.isFrozen,
                    createdAt: new Date(block.timestamp ?? 0),
                    updatedAt: new Date(block.timestamp ?? 0),
                }),
            ]
        })

        await ctx.store.insert(attributes)
    }
}
