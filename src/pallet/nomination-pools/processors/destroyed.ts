import {
    EarlyBirdShares,
    EraReward,
    Event as EventModel,
    NominationPool,
    PoolMember,
    PoolMemberRewards,
    PoolValidator,
} from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import * as mappings from '~/pallet/index'
import { Sns } from '~/util/sns'

export async function destroyed(ctx: CommonContext, block: Block, item: EventItem): Promise<EventModel | undefined> {
    const eventData = mappings.nominationPools.events.destroyed(item)

    const earlyBirdShares = await ctx.store.findBy(EarlyBirdShares, { pool: { id: eventData.poolId.toString() } })
    const poolMemberRewards = await ctx.store.findBy(PoolMemberRewards, { pool: { id: eventData.poolId.toString() } })
    const poolMembers = await ctx.store.findBy(PoolMember, { pool: { id: eventData.poolId.toString() } })
    const eraRewards = await ctx.store.findBy(EraReward, { pool: { id: eventData.poolId.toString() } })
    const poolValidators = await ctx.store.findBy(PoolValidator, { pool: { id: eventData.poolId.toString() } })
    const nominationPool = await ctx.store.findOne(NominationPool, {
        where: {
            id: eventData.poolId.toString(),
            degenToken: {
                tokenAccounts: {
                    balance: 1n,
                },
            },
        },
        relations: {
            degenToken: {
                tokenAccounts: {
                    account: true,
                },
            },
        },
    })

    await Sns.getInstance().send({
        id: item.id,
        name: item.name,
        body: {
            pool: eventData.poolId.toString(),
            extrinsic: item.extrinsic?.id,
            name: nominationPool?.name,
            tokenId: nominationPool?.degenToken.id,
            owner: nominationPool?.degenToken.tokenAccounts[0].account.id,
        },
    })

    const tokenId = nominationPool?.degenToken.tokenId ?? 0n

    if (earlyBirdShares.length) await ctx.store.remove(earlyBirdShares)
    if (poolMemberRewards.length) await ctx.store.remove(poolMemberRewards)
    if (poolMembers.length) await ctx.store.remove(poolMembers)
    if (eraRewards.length) await ctx.store.remove(eraRewards)
    if (poolValidators.length) await ctx.store.remove(poolValidators)
    if (nominationPool) await ctx.store.remove(nominationPool)

    return mappings.nominationPools.events.destroyedEventModel(item, eventData, tokenId)
}
