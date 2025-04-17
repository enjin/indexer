import { throwError } from '../../utils/errors'
import { Collection, Event as EventModel, NativeTokenMetadata, Token } from '../../model'
import { Block, CommonContext, EventItem } from '../../contexts'
import * as mappings from './../../mappings'

export async function tokenCreated(
    ctx: CommonContext,
    block: Block,
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

        const call = mappings.multiTokens.utils.anyMint(item.call, event.collectionId, event.tokenId)

        // TODO: This needs to be refactored
        let minBalance = 1n
        let unitPrice = 1n
        let listingForbidden = false
        let accountDepositCount = 0
        let anyoneCanInfuse = false
        let nativeMetadata = null
        let infusion = 0n

        if ('sufficiency' in call.params) {
            minBalance = call.params.sufficiency?.__kind === 'Sufficient' ? call.params.sufficiency.minimumBalance : 1n
            unitPrice =
                call.params.sufficiency?.__kind === 'Insufficient' ? (call.params.sufficiency.unitPrice ?? 1n) : 1n
        }

        if ('listingForbidden' in call.params) {
            listingForbidden = call.params.listingForbidden
        }

        if ('accountDepositCount' in call.params) {
            accountDepositCount = call.params.accountDepositCount ?? 0
        }

        if ('anyoneCanInfuse' in call.params) {
            anyoneCanInfuse = call.params.anyoneCanInfuse === undefined ? false : call.params.anyoneCanInfuse
        }

        if ('metadata' in call.params) {
            nativeMetadata = call.params.metadata !== undefined ? new NativeTokenMetadata(call.params.metadata) : null
        }

        if ('infusion' in call.params) {
            infusion = call.params.infusion ?? 0n
        }

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
            unitPrice,
            mintDeposit: 0n, // TODO: Fixed for now
            attributeCount: 0,
            collection,
            metadata: null,
            nonFungible: false,
            listingForbidden,
            accountDepositCount,
            anyoneCanInfuse,
            nativeMetadata,
            infusion,
            createdAt: new Date(block.timestamp ?? 0),
        })

        await ctx.store.save(token)
    }

    return mappings.multiTokens.events.tokenCreatedEventModel(item, event)
}
