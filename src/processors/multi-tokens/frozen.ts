import { throwError } from '../../utils/errors'
import {
    Collection,
    CollectionAccount,
    Event as EventModel,
    FreezeState,
    Token,
    TokenAccount,
    TransferPolicy,
} from '../../model'
import { Block, CommonContext, EventItem } from '../../contexts'
import { Sns } from '../../utils/sns'
import * as mappings from './../../mappings'
import { match } from 'ts-pattern'
import { QueueUtils } from '../../queues'

export async function frozen(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const event = mappings.multiTokens.events.frozen(item)
    if (skipSave) return mappings.multiTokens.events.frozenEventModel(item, event)

    if (event.freezeType.__kind === 'TokenAccount') {
        const address = event.freezeType.accountId
        const tokenAccount = await ctx.store.findOne<TokenAccount>(TokenAccount, {
            where: { id: `${address}-${event.collectionId}-${event.freezeType.tokenId}` },
        })

        if (!tokenAccount) {
            throwError(
                `[Frozen] We have not found collection ${address}-${event.collectionId}-${event.freezeType.tokenId}`,
                'fatal'
            )
            return mappings.multiTokens.events.frozenEventModel(item, event)
        }

        tokenAccount.isFrozen = true
        tokenAccount.updatedAt = new Date(block.timestamp ?? 0)
        await ctx.store.save(tokenAccount)
    } else if (event.freezeType.__kind === 'CollectionAccount') {
        const address = event.freezeType.value
        const collectionAccount = await ctx.store.findOne<CollectionAccount>(CollectionAccount, {
            where: { id: `${event.collectionId}-${address}` },
        })

        if (!collectionAccount) {
            throwError(`[Frozen] We have not found collection ${event.collectionId}-${address}`, 'fatal')
            return mappings.multiTokens.events.frozenEventModel(item, event)
        }

        collectionAccount.isFrozen = true
        collectionAccount.updatedAt = new Date(block.timestamp ?? 0)
        await ctx.store.save(collectionAccount)
    } else if (event.freezeType.__kind === 'Token') {
        const token = await ctx.store.findOne<Token>(Token, {
            where: { id: `${event.collectionId}-${event.freezeType.tokenId}` },
        })

        if (!token) {
            throwError(
                `[Frozen] We have not found collection ${event.collectionId}-${event.freezeType.tokenId}`,
                'fatal'
            )
            return mappings.multiTokens.events.frozenEventModel(item, event)
        }

        switch (event.freezeType.freezeState?.__kind) {
            case 'Permanent':
                token.freezeState = FreezeState.Permanent
                break
            case 'Temporary':
                token.freezeState = FreezeState.Temporary
                break
            case 'Never':
                token.freezeState = FreezeState.Never
                break
            default:
                token.freezeState = null
                break
        }

        // TODO: Fix this
        // token.isFrozen = isTokenFrozen(token.freezeState)

        await ctx.store.save(token)
    } else {
        const collection = await ctx.store.findOne<Collection>(Collection, {
            where: { id: event.collectionId.toString() },
        })

        if (!collection) {
            throwError(`[Frozen] We have not found collection ${event.collectionId.toString()}`, 'fatal')
            return mappings.multiTokens.events.frozenEventModel(item, event)
        }

        collection.transferPolicy = new TransferPolicy({ isFrozen: true })
        await ctx.store.save(collection)
    }

    if (item.extrinsic) {
        const { address, tokenId } = match(event.freezeType)
            .returnType<{ address: string | null; tokenId: bigint | null }>()
            .with({ __kind: 'CollectionAccount' }, (t) => ({ address: t.value, tokenId: null }))
            .with({ __kind: 'TokenAccount' }, (t) => ({ address: t.accountId, tokenId: t.tokenId }))
            .with({ __kind: 'Token' }, (t) => ({ address: null, tokenId: t.tokenId }))
            .otherwise(() => ({ address: null, tokenId: null }))

        await Sns.getInstance().send({
            id: item.id,
            name: item.name,
            body: {
                kind: event.freezeType,
                address: address,
                collectionId: event.collectionId.toString(),
                tokenId: tokenId,
                token: tokenId ? `${event.collectionId}-${tokenId}` : null,
                extrinsic: item.extrinsic.id,
            },
        })
    }

    // console.log('Dispatching from frozen')
    QueueUtils.dispatchComputeStats(event.collectionId.toString())

    return mappings.multiTokens.events.frozenEventModel(item, event)
}
