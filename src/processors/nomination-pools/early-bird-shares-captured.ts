import { BlockHeader, CommonContext, EventItem } from '../../contexts'
import { Account, EarlyBirdShares, NominationPool } from '../../model'
import { Sns } from '../../utils/sns'
import * as mappings from './../../mappings'

export async function earlyBirdSharesCaptured(ctx: CommonContext, block: BlockHeader, item: EventItem) {
    if (!item.extrinsic) return undefined
    const eventData = mappings.nominationPools.events.earlyBirdSharesCaptured(item)

    const data = await mappings.nominationPools.storage.earlyBirdShares(block, eventData.poolId)

    const toSave = data.map((s) => {
        return new EarlyBirdShares({
            id: `${eventData.poolId}-${s[0][1]}`,
            pool: new NominationPool({ id: eventData.poolId.toString() }),
            account: new Account({ id: s[0][1] }),
            shares: s[1],
        })
    })

    await ctx.store.save(toSave)

    await Sns.getInstance().send({
        id: item.id,
        name: item.name,
        body: {
            pool: eventData.poolId.toString(),
            totalAccounts: eventData.totalAccounts,
            extrinsic: item.extrinsic.id,
        },
    })

    return mappings.nominationPools.events.earlyBirdSharesCapturedEventModel(item, eventData)
}
