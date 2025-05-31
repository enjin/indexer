import { throwFatalError } from '../../../utils/errors'
import {
    Collection,
    CollectionAccount,
    Event as EventModel,
    Extrinsic,
    FreezeState,
    MultiTokensFrozen,
    Token,
    TokenAccount,
    TransferPolicy,
} from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import { match } from 'ts-pattern'
import { QueueUtils } from '../../../queues'
import { EventProcessor, EventResult } from '../../event-processor.def'
import { Frozen } from './frozen.type'
import { multiTokens } from '../../../types/events'
import { frozen } from './frozen.map'

interface FrozenProcessData {
    tokenAccount?: TokenAccount
    collectionAccount?: CollectionAccount
    token?: Token
    collection?: Collection
    address?: string | null
    tokenId?: bigint | null
}

export class FrozenProcessor extends EventProcessor<Frozen> {
    constructor() {
        super(multiTokens.frozen.name)
    }

    protected decodeEventItem(item: EventItem): Frozen {
        return frozen(item)
    }

    protected async prepareSkipSaveData(ctx: CommonContext, data: Frozen): Promise<any> {
        return undefined
    }

    protected async loadRequiredData(
        ctx: CommonContext,
        item: EventItem,
        data: Frozen
    ): Promise<FrozenProcessData | undefined> {
        const result: FrozenProcessData = {}

        if (data.freezeType.__kind === 'TokenAccount') {
            const address = data.freezeType.accountId
            const tokenAccount = await ctx.store.findOne<TokenAccount>(TokenAccount, {
                where: { id: `${address}-${data.collectionId}-${data.freezeType.tokenId}` },
            })

            if (!tokenAccount) {
                throwFatalError(
                    `[Frozen] We have not found collection ${address}-${data.collectionId}-${data.freezeType.tokenId}`
                )
                return undefined
            }

            result.tokenAccount = tokenAccount
        } else if (data.freezeType.__kind === 'CollectionAccount') {
            const address = data.freezeType.value
            const collectionAccount = await ctx.store.findOne<CollectionAccount>(CollectionAccount, {
                where: { id: `${data.collectionId}-${address}` },
            })

            if (!collectionAccount) {
                throwFatalError(`[Frozen] We have not found collection ${data.collectionId}-${address}`)
                return undefined
            }

            result.collectionAccount = collectionAccount
        } else if (data.freezeType.__kind === 'Token') {
            const token = await ctx.store.findOne<Token>(Token, {
                where: { id: `${data.collectionId}-${data.freezeType.tokenId}` },
            })

            if (!token) {
                throwFatalError(`[Frozen] We have not found collection ${data.collectionId}-${data.freezeType.tokenId}`)
                return undefined
            }

            result.token = token
        } else {
            const collection = await ctx.store.findOne<Collection>(Collection, {
                where: { id: data.collectionId.toString() },
            })

            if (!collection) {
                throwFatalError(`[Frozen] We have not found collection ${data.collectionId.toString()}`)
                return undefined
            }

            result.collection = collection
        }

        // Extract address and tokenId for notification
        const { address, tokenId } = match(data.freezeType)
            .returnType<{ address: string | null; tokenId: bigint | null }>()
            .with({ __kind: 'CollectionAccount' }, (t) => ({ address: t.value, tokenId: null }))
            .with({ __kind: 'TokenAccount' }, (t) => ({ address: t.accountId, tokenId: t.tokenId }))
            .with({ __kind: 'Token' }, (t) => ({ address: null, tokenId: t.tokenId }))
            .otherwise(() => ({ address: null, tokenId: null }))

        result.address = address
        result.tokenId = tokenId

        return result
    }

    protected async processEvent(
        ctx: CommonContext,
        block: Block,
        item: EventItem,
        data: Frozen,
        processData: FrozenProcessData
    ): Promise<FrozenProcessData> {
        const { tokenAccount, collectionAccount, token, collection } = processData
        const timestamp = new Date(block.timestamp ?? 0)

        if (tokenAccount) {
            tokenAccount.isFrozen = true
            tokenAccount.updatedAt = timestamp
            await ctx.store.save(tokenAccount)
        } else if (collectionAccount) {
            collectionAccount.isFrozen = true
            collectionAccount.updatedAt = timestamp
            await ctx.store.save(collectionAccount)
        } else if (token) {
            switch (data.freezeType.__kind === 'Token' ? data.freezeType.freezeState?.__kind : undefined) {
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
        } else if (collection) {
            collection.transferPolicy = new TransferPolicy({ isFrozen: true })
            await ctx.store.save(collection)
        }

        return processData
    }

    protected async dispatchTasks(ctx: CommonContext, data: Frozen, result: FrozenProcessData): Promise<void> {
        QueueUtils.dispatchComputeStats(data.collectionId.toString())
    }

    protected getNotificationBody(item: EventItem, data: Frozen, result: FrozenProcessData): any {
        return {
            kind: data.freezeType,
            address: result.address,
            collectionId: data.collectionId.toString(),
            tokenId: result.tokenId,
            token: result.tokenId ? `${data.collectionId}-${result.tokenId}` : null,
            extrinsic: item.extrinsic?.id,
        }
    }

    protected getEventModel(item: EventItem, data: Frozen, result?: FrozenProcessData): EventResult {
        let tokenId: null | string = null

        if (data.freezeType.__kind !== 'Collection' && data.freezeType.__kind !== 'CollectionAccount') {
            tokenId = `${data.collectionId}-${data.freezeType.tokenId}`
        }

        return new EventModel({
            id: item.id,
            name: MultiTokensFrozen.name,
            extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
            collectionId: data.collectionId.toString(),
            tokenId: tokenId,
            data: new MultiTokensFrozen(),
        })
    }
}
