import { UnknownVersionError } from '../../../common/errors'
import {
    Collection,
    Era,
    Event as EventModel,
    Extrinsic,
    NominationPoolsBonded,
    PoolMember,
    Token,
    TokenAccount,
} from '../../../model'
import { Sns } from '../../../common/sns'
import { events } from '../../../types/generated'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'
import { updatePool } from '../pool'

function getEventData(event: EventItem) {
    if (events.nominationPools.bonded.enjinV101.is(event)) {
        return events.nominationPools.bonded.enjinV101.decode(event)
    }

    if (events.nominationPools.bonded.enjinV100.is(event)) {
        return events.nominationPools.bonded.enjinV100.decode(event)
    }

    throw new UnknownVersionError(events.nominationPools.bonded.name)
}

export function getActiveEra(ctx: CommonContext) {
    return ctx.store.find(Era, {
        order: {
            index: 'DESC',
        },
        take: 1,
    })
}

function getEvent(item: EventItem, data: ReturnType<typeof getEventData>) {
    return new EventModel({
        id: item.id,
        name: NominationPoolsBonded.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new NominationPoolsBonded({
            pool: data.poolId.toString(),
            account: data.member,
            bonded: data.bonded,
        }),
    })
}

export async function bonded(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<EventModel | undefined> {
    if (!item.extrinsic) return undefined

    const eventData = getEventData(item)
    if (!eventData) return undefined

    const [pool, account] = await Promise.all([
        updatePool(ctx, block, eventData.poolId.toString()),
        getOrCreateAccount(ctx, eventData.member),
    ])

    const [alreadyExist, tAExist, tokenExist, [activeEra]] = await Promise.all([
        ctx.store.findOneBy(PoolMember, { id: `${pool.id}-${account.id}` }),
        ctx.store.findOne(TokenAccount, { where: { id: `${account.id}-1-${pool.id}` } }),
        ctx.store.findOne(Token, { where: { id: `1-${pool.id}` } }),
        getActiveEra(ctx),
    ])

    if (!tAExist) {
        if (!tokenExist) {
            const token = new Token({
                id: `1-${pool.id}`,
                tokenId: BigInt(eventData.poolId),
                supply: 0n,
                cap: null,
                behavior: null,
                isFrozen: false,
                freezeState: null,
                accountDepositCount: 0,
                infusion: 0n,
                anyoneCanInfuse: false,
                minimumBalance: 1n,
                unitPrice: null,
                mintDeposit: 0n,
                attributeCount: 0,
                collection: new Collection({ id: '1' }),
                metadata: null,
                nonFungible: true,
                listingForbidden: false,
                createdAt: new Date(block.timestamp ?? 0),
            })
            await ctx.store.insert(token)
        }

        const tokenAccount = new TokenAccount({
            id: `${account.id}-1-${pool.id}`,
            balance: 0n,
            totalBalance: 0n,
            reservedBalance: 0n,
            lockedBalance: 0n,
            namedReserves: null,
            locks: null,
            approvals: null,
            isFrozen: false,
            account,
            collection: new Collection({ id: '1' }),
            token: new Token({ id: `1-${pool.id}` }),
            createdAt: new Date(block.timestamp ?? 0),
            updatedAt: new Date(block.timestamp ?? 0),
        })

        await ctx.store.insert(tokenAccount)
    }

    if (!alreadyExist) {
        const memeber = new PoolMember({
            id: `${pool.id}-${account.id}`,
            pool,
            account,
            bonded: eventData.bonded,
            tokenAccount: new TokenAccount({ id: `${account.id}-1-${pool.id}` }),
            joinedEra: activeEra,
        })

        await ctx.store.insert(memeber)
        pool.totalMembers += 1
    } else {
        const member = await ctx.store.findOneByOrFail(PoolMember, { id: `${pool.id}-${account.id}` })
        member.bonded += eventData.bonded
        member.tokenAccount = new TokenAccount({ id: `${account.id}-1-${pool.id}` })

        await ctx.store.save(member)
    }

    await ctx.store.save(pool)

    if (item.extrinsic) {
        await Sns.getInstance().send({
            id: item.id,
            name: item.name,
            body: {
                pool: eventData.poolId.toString(),
                account: eventData.member,
                bonded: eventData.bonded.toString(),
                extrinsic: item.extrinsic.id,
            },
        })
    }

    return getEvent(item, eventData)
}
