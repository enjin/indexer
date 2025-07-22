import {
    Event as EventModel,
    NominationPool,
    PoolState,
    StakeExchangeOffer,
    StakeExchangeOfferState,
    Token,
} from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import { connectionManager } from '~/contexts'
import * as mappings from '~/pallet/index'
import { Sns } from '~/util/sns'

export async function destroyed(ctx: CommonContext, block: Block, item: EventItem): Promise<EventModel | undefined> {
    const eventData = mappings.nominationPools.events.destroyed(item)
    const em = await connectionManager()

    const stakeExchangeOffers = await em
        .createQueryBuilder(StakeExchangeOffer, 'offer')
        .leftJoinAndSelect('offer.tokenFilter', 'tokenFilter')
        .where(':poolId = ANY(tokenFilter.value)', { poolId: eventData.poolId.toString() })
        .getMany()

    const nominationPool = await ctx.store.findOneOrFail(NominationPool, {
        where: {
            id: eventData.poolId.toString(),
            degenToken: {
                tokenAccounts: {
                    balance: 1n,
                },
            },
        },
        relations: {
            members: true,
            degenToken: {
                tokenAccounts: {
                    account: true,
                },
            },
        },
    })

    const owner = nominationPool.degenToken?.tokenAccounts[0].account.id

    if (stakeExchangeOffers.length) {
        for (const stakeExchangeOffer of stakeExchangeOffers) {
            if (stakeExchangeOffer.tokenFilter?.value) {
                if (stakeExchangeOffer.tokenFilter.value.length === 1) {
                    stakeExchangeOffer.state = StakeExchangeOfferState.Cancelled
                    await ctx.store.save(stakeExchangeOffer)
                }
            }
        }
    }

    if (nominationPool.members.length) {
        for (const member of nominationPool.members) {
            member.unbondingEras = null
            member.bonded = 0n
            member.isActive = false

            await ctx.store.save(member)
        }
    }

    nominationPool.state = PoolState.Destroyed
    nominationPool.degenToken = null
    await ctx.store.save(nominationPool)

    const token = await ctx.store.findOneOrFail(Token, {
        where: {
            id: `2-${nominationPool.tokenId}`,
        },
    })

    token.nominationPool = null
    await ctx.store.save(token)

    await Sns.getInstance().send({
        id: item.id,
        name: item.name,
        body: {
            pool: eventData.poolId.toString(),
            extrinsic: item.extrinsic?.id,
            name: nominationPool.name,
            tokenId: `2-${nominationPool.tokenId}`,
            owner,
            amount: nominationPool.deposit,
        },
    })

    return mappings.nominationPools.events.destroyedEventModel(item, eventData, nominationPool.tokenId, owner)
}
