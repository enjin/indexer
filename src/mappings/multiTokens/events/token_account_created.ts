import { UnknownVersionError, throwError } from '../../../common/errors'
import { events } from '../../../types/generated'
import {
    Collection,
    CollectionAccount,
    Event as EventModel,
    Extrinsic,
    MultiTokensTokenAccountCreated,
    Token,
    TokenAccount,
} from '../../../model'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'

function getEventData(event: EventItem) {
    if (events.multiTokens.tokenAccountCreated.matrixEnjinV603.is(event)) {
        return events.multiTokens.tokenAccountCreated.matrixEnjinV603.decode(event)
    }

    throw new UnknownVersionError(events.multiTokens.tokenAccountCreated.name)
}

function getEvent(item: EventItem, data: ReturnType<typeof getEventData>) {
    return new EventModel({
        id: item.id,
        name: MultiTokensTokenAccountCreated.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: data.tokenId ? `${data.collectionId}-${data.tokenId}` : null,
        data: new MultiTokensTokenAccountCreated({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            account: data.accountId,
            balance: data.balance,
        }),
    })
}

export async function tokenAccountCreated(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const data = getEventData(item)

    if (skipSave) {
        const tokenAccount = await ctx.store.findOne(TokenAccount, {
            where: { id: `${data.accountId}-${data.collectionId}-${data.tokenId}` },
        })

        if (tokenAccount) {
            tokenAccount.createdAt = new Date(block.timestamp ?? 0)
            tokenAccount.updatedAt = new Date(block.timestamp ?? 0)
            ctx.store.save(tokenAccount)
        }

        return getEvent(item, data)
    }

    const collection = new Collection({ id: data.collectionId.toString() })
    const token = await ctx.store.findOneBy(Token, { id: `${data.collectionId}-${data.tokenId}` })

    if (!token) {
        throwError(`[TokenAccountCreated] We have not found token ${data.collectionId}-${data.tokenId}.`, 'fatal')
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

    return getEvent(item, data)
}
