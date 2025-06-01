import { throwFatalError } from '../../../utils/errors'
import {
    Collection,
    CollectionAccount,
    Token,
    TokenAccount,
    TransferPolicy,
} from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import { match } from 'ts-pattern'
import { QueueUtils } from '../../../queues'
import { EventProcessor } from '../../event-processor.def'
import { Frozen } from './frozen.type'
import { multiTokens } from '../../../types/events'
import { thawedMap, ThawedProcessData } from './thawed.map'

export class ThawedProcessor extends EventProcessor<Frozen, ThawedProcessData> {
    constructor() {
        super(multiTokens.thawed.name, thawedMap)
    }

    protected decodeEventItem(item: EventItem): Frozen {
        return thawedMap.decode(item)
    }

    protected async prepareSkipSaveData(ctx: CommonContext, data: Frozen): Promise<any> {
        return undefined
    }

    protected async loadRequiredData(
        ctx: CommonContext,
        item: EventItem,
        data: Frozen
    ): Promise<ThawedProcessData | undefined> {
        const result: ThawedProcessData = {}

        if (data.freezeType.__kind === 'TokenAccount') {
            const tokenAccount = await ctx.store.findOne<TokenAccount>(TokenAccount, {
                where: { id: `${data.freezeType.accountId}-${data.collectionId}-${data.freezeType.tokenId}` },
            })

            if (!tokenAccount) {
                throwFatalError(
                    `[Thawed] We have not found token account ${data.freezeType.accountId}-${data.collectionId}-${data.freezeType.tokenId}.`
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
                throwFatalError(`[Thawed] We have not found collection account ${data.collectionId}-${address}.`)
                return undefined
            }

            result.collectionAccount = collectionAccount
        } else if (data.freezeType.__kind === 'Token') {
            const token = await ctx.store.findOne<Token>(Token, {
                where: { id: `${data.collectionId}-${data.freezeType.tokenId}` },
            })

            if (!token) {
                throwFatalError(
                    `[Thawed] We have not found collection account ${data.collectionId}-${data.freezeType.tokenId}.`
                )
                return undefined
            }

            result.token = token
        } else {
            const collection = await ctx.store.findOne<Collection>(Collection, {
                where: { id: data.collectionId.toString() },
            })

            if (!collection) {
                throwFatalError(`[Thawed] We have not found collection ${data.collectionId.toString()}.`)
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
        processData: ThawedProcessData
    ): Promise<ThawedProcessData> {
        const { tokenAccount, collectionAccount, token, collection } = processData

        if (tokenAccount) {
            tokenAccount.isFrozen = false
            tokenAccount.updatedAt = new Date(block.timestamp ?? 0)
            await ctx.store.save(tokenAccount)
        } else if (collectionAccount) {
            collectionAccount.isFrozen = false
            collectionAccount.updatedAt = new Date(block.timestamp ?? 0)
            await ctx.store.save(collectionAccount)
        } else if (token) {
            token.isFrozen = false
            await ctx.store.save(token)
        } else if (collection) {
            collection.transferPolicy = new TransferPolicy({ isFrozen: false })
            await ctx.store.save(collection)
        }

        return processData
    }

    protected async dispatchTasks(ctx: CommonContext, data: Frozen, result: ThawedProcessData): Promise<void> {
        QueueUtils.dispatchComputeStats(data.collectionId.toString())
    }

}
