import { throwError } from '../../utils/errors'
import { Collection, Event as EventModel, NativeTokenMetadata, Token } from '../../model'
import { BlockHeader, CommonContext, EventItem } from '../../contexts'
import * as mappings from './../../mappings'
import { DefaultMintParams_CreateToken } from '../../mappings/common/types'

export async function tokenCreated(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const event = mappings.multiTokens.events.tokenCreated(item)

    if (skipSave && item.call) {
        const token = await ctx.store.findOne<Token>(Token, {
            where: { id: `${event.collectionId}-${event.tokenId}` },
        })

        if (token) {
            token.createdAt = new Date(block.timestamp ?? 0)
            await ctx.store.save(token)
        }

        return mappings.multiTokens.events.tokenCreatedEventModel(item, event)
    }

    if (item.call) {
        const collection = await ctx.store.findOne<Collection>(Collection, {
            where: { id: event.collectionId.toString() },
        })

        if (!collection) {
            throwError(`[TokenCreated] We have not found collection ${event.collectionId.toString()}.`, 'fatal')
            return mappings.multiTokens.events.tokenCreatedEventModel(item, event)
        }

        const call = mappings.multiTokens.calls.mintOrForceMint(item.call, event.tokenId)
        const params = call.params as DefaultMintParams_CreateToken
        const minBalance = params.sufficiency?.__kind === 'Sufficient' ? params.sufficiency.minimumBalance : 1n
        const unitPrice = params.sufficiency?.__kind === 'Insufficient' ? (params.sufficiency.unitPrice ?? 1n) : 1n

        const token = new Token({
            id: `${event.collectionId}-${event.tokenId}`,
            tokenId: event.tokenId,
            supply: 0n, // Supply is updated on Mint/Burn events
            cap: null, //params.cap,
            behavior: null, //params.behavior,
            isFrozen: false, // isTokenFrozen(params.freezeState),
            // TODO: Fix this
            freezeState: null, // params.freezeState != undefined ? FreezeState[params.freezeState.__kind] : null,
            minimumBalance: minBalance,
            unitPrice: unitPrice,
            mintDeposit: 0n, // TODO: Fixed for now
            attributeCount: 0,
            collection,
            metadata: null,
            nonFungible: false,
            listingForbidden: params.listingForbidden,
            accountDepositCount: params.accountDepositCount ?? 0,
            anyoneCanInfuse: params.anyoneCanInfuse ?? false,
            nativeMetadata: params.metadata !== undefined ? new NativeTokenMetadata(params.metadata) : null,
            infusion: params.infusion ?? 0n,
            createdAt: new Date(block.timestamp ?? 0),
        })

        await ctx.store.save(token)
    }

    return mappings.multiTokens.events.tokenCreatedEventModel(item, event)
}
