import { throwFatalError } from '../../../utils/errors'
import {
    Collection,
    Event as EventModel,
    Extrinsic,
    MultiTokensTokenCreated,
    NativeTokenMetadata,
    Token,
} from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import * as mappings from '../../index'
import { CreatePool } from '../../nomination-pools/calls'
import { ForceMint, Mint } from '../calls'
import { TokenCreated } from './token-created.type'
import { EventProcessor, EventResult } from '../../event-processor.def'
import { multiTokens } from '../../../types/events'
import { unwrapAccount } from '../../../utils/entities'
import { tokenCreated } from './token-created.map'

interface TokenCreatedProcessData {
    token?: Token
    call?: Mint | ForceMint | CreatePool
}

export class TokenCreatedProcessor extends EventProcessor<TokenCreated> {
    constructor() {
        super(multiTokens.tokenCreated.name)
    }

    protected decodeEventItem(item: EventItem): TokenCreated {
        return tokenCreated(item)
    }

    protected async prepareSkipSaveData(ctx: CommonContext, data: TokenCreated): Promise<any> {
        const token = await ctx.store.findOne<Token>(Token, {
            where: { id: `${data.collectionId}-${data.tokenId}` },
        })

        return { token }
    }

    protected async loadRequiredData(
        ctx: CommonContext,
        item: EventItem,
        data: TokenCreated
    ): Promise<TokenCreatedProcessData | undefined> {
        // Handle skipSave case
        const token = await ctx.store.findOne<Token>(Token, {
            where: { id: `${data.collectionId}-${data.tokenId}` },
        })

        if (token) {
            return { token }
        }

        if (!item.call) {
            return {}
        }

        const call = mappings.multiTokens.utils.anyMint(item.call, data.collectionId, data.tokenId)
        return { call }
    }

    protected async processEvent(
        ctx: CommonContext,
        block: Block,
        item: EventItem,
        data: TokenCreated,
        processData: TokenCreatedProcessData
    ): Promise<TokenCreatedProcessData> {
        // Handle skipSave case
        if (processData.token) {
            processData.token.createdAt = new Date(block.timestamp ?? 0)
            await ctx.store.save(processData.token)
            return processData
        }

        if (processData.call) {
            const token = await this.tokenFromCall(ctx, block, data, processData.call)
            await ctx.store.save(token)
            processData.token = token
        }

        return processData
    }

    private async tokenFromCall(
        ctx: CommonContext,
        block: Block,
        event: TokenCreated,
        call: Mint | ForceMint | CreatePool
    ): Promise<Token> {
        const collection = await ctx.store.findOne<Collection>(Collection, {
            where: { id: event.collectionId.toString() },
        })

        if (!collection) {
            throwFatalError(`[TokenCreated] We have not found collection ${event.collectionId.toString()}.`)
        }

        const token = new Token({
            id: `${event.collectionId}-${event.tokenId}`,
            tokenId: event.tokenId,
            supply: 0n, // Updated on `Minted`
            cap: null, //params.cap,
            behavior: null, //params.behavior,
            isFrozen: false, // isTokenFrozen(params.freezeState),
            freezeState: null, // params.freezeState != undefined ? FreezeState[params.freezeState.__kind] : null,
            minimumBalance: 1n,
            unitPrice: 1n,
            mintDeposit: 0n, // TODO: Fixed for now
            attributeCount: 0,
            collection,
            metadata: null,
            nonFungible: false,
            listingForbidden: false,
            accountDepositCount: 0,
            anyoneCanInfuse: false,
            nativeMetadata: null,
            infusion: 0n, // Updated on `Infused`
            createdAt: new Date(block.timestamp ?? 0),
        })

        let tokenParams = null

        if ('capacity' in call) {
            const data = await mappings.multiTokens.storage.tokens(block, {
                collectionId: event.collectionId,
                tokenId: event.tokenId,
            })

            if (data) {
                tokenParams = data
            }
        }

        if ('params' in call) {
            tokenParams = call.params

            if ('sufficiency' in tokenParams) {
                token.minimumBalance =
                    tokenParams.sufficiency?.__kind === 'Sufficient' ? tokenParams.sufficiency.minimumBalance : 1n
                token.unitPrice =
                    tokenParams.sufficiency?.__kind === 'Insufficient' ? (tokenParams.sufficiency.unitPrice ?? 1n) : 1n
            }

            if ('listingForbidden' in tokenParams) {
                token.listingForbidden = tokenParams.listingForbidden
            }

            if ('accountDepositCount' in tokenParams) {
                token.accountDepositCount = tokenParams.accountDepositCount ?? 0
            }

            if ('anyoneCanInfuse' in tokenParams) {
                token.anyoneCanInfuse = tokenParams.anyoneCanInfuse === undefined ? false : tokenParams.anyoneCanInfuse
            }

            if ('metadata' in tokenParams) {
                token.nativeMetadata =
                    tokenParams.metadata !== undefined ? new NativeTokenMetadata(tokenParams.metadata) : null
            }
        }

        return token
    }

    protected async dispatchTasks(
        ctx: CommonContext,
        data: TokenCreated,
        result: TokenCreatedProcessData
    ): Promise<void> {
        // No tasks to dispatch
    }

    protected getNotificationBody(item: EventItem, data: TokenCreated, result: TokenCreatedProcessData): any {
        return {
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            token: `${data.collectionId}-${data.tokenId}`,
            issuer: unwrapAccount(data.issuer),
            initialSupply: data.initialSupply,
            extrinsic: item.extrinsic?.id,
        }
    }

    protected getEventModel(item: EventItem, data: TokenCreated, result?: TokenCreatedProcessData): EventResult {
        return new EventModel({
            id: item.id,
            name: MultiTokensTokenCreated.name,
            extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
            collectionId: data.collectionId.toString(),
            tokenId: `${data.collectionId}-${data.tokenId}`,
            data: new MultiTokensTokenCreated({
                collectionId: data.collectionId,
                tokenId: data.tokenId,
                issuer: unwrapAccount(data.issuer),
                initialSupply: data.initialSupply,
            }),
        })
    }
}
