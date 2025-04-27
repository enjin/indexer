import { throwFatalError } from '../../../util/errors'
import { Collection, Event as EventModel, NativeTokenMetadata, Token } from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import * as mappings from '../../index'
import { CreatePool } from '../../nomination-pools/calls'
import { ForceMint, Mint } from '../calls'
import { TokenCreated } from '../events'

async function tokenFromCall(
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
        const call = mappings.multiTokens.utils.anyMint(item.call, event.collectionId, event.tokenId)
        const token = await tokenFromCall(ctx, block, event, call)
        await ctx.store.save(token)
    }

    return mappings.multiTokens.events.tokenCreatedEventModel(item, event)
}
