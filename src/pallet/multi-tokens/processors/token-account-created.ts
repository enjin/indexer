import { throwFatalError } from '../../../util/errors'
import {
    Collection,
    CollectionAccount,
    Event as EventModel,
    NominationPool,
    PoolMember,
    Token,
    TokenAccount,
} from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import { getOrCreateAccount } from '../../../util/entities'
import * as mappings from '../../index'
import { getActiveEra } from '../../nomination-pools/processors/bonded'

export async function tokenAccountCreated(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const data = mappings.multiTokens.events.tokenAccountCreated(item)

    if (skipSave) {
        const tokenAccount = await ctx.store.findOne(TokenAccount, {
            where: { id: `${data.accountId}-${data.collectionId}-${data.tokenId}` },
        })

        if (tokenAccount) {
            tokenAccount.createdAt = new Date(block.timestamp ?? 0)
            tokenAccount.updatedAt = new Date(block.timestamp ?? 0)
            await ctx.store.save(tokenAccount)
        }

        return mappings.multiTokens.events.tokenAccountCreatedEventModel(item, data)
    }

    const collection = new Collection({ id: data.collectionId.toString() })
    const token = await ctx.store.findOneBy(Token, { id: `${data.collectionId}-${data.tokenId}` })

    if (!token) {
        throwFatalError(`[TokenAccountCreated] We have not found token ${data.collectionId}-${data.tokenId}.`)
        return undefined
    }

    const account = await getOrCreateAccount(ctx, data.accountId)
    const collectionAccount = await ctx.store.findOne<CollectionAccount>(CollectionAccount, {
        where: { id: `${data.collectionId}-${data.accountId}` },
    })

    if (collectionAccount) {
        collectionAccount.accountCount += 1
        await ctx.store.save(collectionAccount)
    } else {
        const newCollectionAccount = new CollectionAccount({
            id: `${data.collectionId}-${data.accountId}`,
            isFrozen: false,
            approvals: null,
            accountCount: 1,
            account,
            collection,
            createdAt: new Date(block.timestamp ?? 0),
            updatedAt: new Date(block.timestamp ?? 0),
        })
        await ctx.store.insert(newCollectionAccount)
    }

    const tokenAccount = new TokenAccount({
        id: `${data.accountId}-${data.collectionId}-${data.tokenId}`,
        balance: 0n, // The balance is updated on Mint event
        reservedBalance: 0n,
        totalBalance: 0n,
        lockedBalance: 0n,
        namedReserves: null,
        locks: null,
        approvals: null,
        isFrozen: false,
        account,
        collection,
        token,
        createdAt: new Date(block.timestamp ?? 0),
        updatedAt: new Date(block.timestamp ?? 0),
    })

    await ctx.store.save(tokenAccount)

    // for relay chain
    if (data.collectionId.toString() === '1') {
        const [pool, member] = await Promise.all([
            ctx.store.findOneBy(NominationPool, { id: data.tokenId.toString() }),
            ctx.store.findOneBy(PoolMember, { id: `${data.tokenId.toString()}-${account.id}` }),
        ])

        if (pool && !member) {
            const [activeEra] = await getActiveEra(ctx)
            const newMember = new PoolMember({
                id: `${pool.id}-${account.id}`,
                pool,
                account,
                bonded: 0n,
                tokenAccount,
                joinedEra: activeEra,
            })
            pool.totalMembers += 1
            await ctx.store.save(pool)
            await ctx.store.insert(newMember)
        } else if (pool && member) {
            const newMember = new PoolMember({
                id: `${pool.id}-${account.id}`,
                tokenAccount,
                bonded: member.bonded,
            })

            await ctx.store.save(newMember)
        }
    }

    return mappings.multiTokens.events.tokenAccountCreatedEventModel(item, data)
}
