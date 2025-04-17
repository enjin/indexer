import { Collection, Era, Event as EventModel, PoolMember, Token, TokenAccount } from '../../model'
import { Sns } from '../../utils/sns'
import { Block, CommonContext, EventItem } from '../../contexts'
import { getOrCreateAccount } from '../../utils/entities'
import { updatePool } from './pool'
import * as mappings from './../../mappings'

export function getActiveEra(ctx: CommonContext) {
    return ctx.store.find(Era, {
        order: {
            index: 'DESC',
        },
        take: 1,
    })
}

export async function bonded(ctx: CommonContext, block: Block, item: EventItem): Promise<EventModel | undefined> {
    if (!item.extrinsic) return undefined

    const eventData = mappings.nominationPools.events.bonded(item)

    const [pool, account] = await Promise.all([
        updatePool(ctx, block, eventData.poolId.toString()),
        getOrCreateAccount(ctx, eventData.member),
    ])

    const [alreadyExist, tAExist, tokenExist, [activeEra]] = await Promise.all([
        ctx.store.findOneBy<PoolMember>(PoolMember, { id: `${pool.id}-${account.id}` }),
        ctx.store.findOne<TokenAccount>(TokenAccount, { where: { id: `${account.id}-1-${pool.id}` } }),
        ctx.store.findOne<Token>(Token, { where: { id: `1-${pool.id}` } }),
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
        const member = await ctx.store.findOneByOrFail<PoolMember>(PoolMember, { id: `${pool.id}-${account.id}` })
        member.bonded += eventData.bonded
        member.tokenAccount = new TokenAccount({ id: `${account.id}-1-${pool.id}` })

        await ctx.store.save(member)
    }

    await ctx.store.save(pool)

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

    return mappings.nominationPools.events.bondedEventModel(item, eventData)
}
