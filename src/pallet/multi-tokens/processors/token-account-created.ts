import { throwFatalError } from '~/util/errors'
import { AccountStats, Collection, CollectionAccount, NominationPool, PoolMember, Token, TokenAccount } from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import { getOrCreateAccount } from '~/util/entities'
import * as mappings from '~/pallet/index'
import { getActiveEra } from '~/pallet/nomination-pools/processors/bonded'
import { EventHandlerResult } from '~/processor.handler'
import { dispatchComputeAccountStats } from '~/queue/queue-utils'

export async function tokenAccountCreated(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave: boolean
): Promise<EventHandlerResult> {
    const data = mappings.multiTokens.events.tokenAccountCreated(item)

    if (skipSave && data.collectionId.toString() != '1') {
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

    dispatchComputeAccountStats(account.id)

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
                accumulatedRewards: 0n,
                isStash: pool.totalMembers === 0,
                isActive: true,
                joinedEra: activeEra,
            })
            pool.totalMembers += 1
            await ctx.store.save(pool)
            await ctx.store.insert(newMember)
        } else if (pool && member) {
            member.tokenAccount = tokenAccount
            if (!member.isActive) {
                member.isActive = true
                pool.totalMembers += 1
            }

            await ctx.store.save(member)
            await ctx.store.save(pool)
        }
    }

    return mappings.multiTokens.events.tokenAccountCreatedEventModel(item, data)
}
