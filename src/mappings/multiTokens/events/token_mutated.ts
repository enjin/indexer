import { hexToString } from '@polkadot/util'
import { UnknownVersionError, throwError } from '../../../common/errors'
import { events } from '../../../types/generated'
import {
    Event as EventModel,
    Extrinsic,
    MultiTokensTokenMutated,
    NativeTokenMetadata,
    Royalty,
    Token,
    TokenBehaviorHasRoyalty,
    TokenBehaviorIsCurrency,
    TokenBehaviorType,
} from '../../../model'
import { isNonFungible } from '../utils/helpers'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'
import { TokenMarketBehavior } from '../../../types/generated/v500'
import { syncCollectionStats } from '../../../jobs/collection-stats'

function getEventData(event: EventItem) {
    if (events.multiTokens.tokenMutated.matrixEnjinV1012.is(event)) {
        const { collectionId, tokenId, mutation } = events.multiTokens.tokenMutated.matrixEnjinV1012.decode(event)

        return {
            collectionId,
            tokenId,
            behavior: mutation.behavior,
            name: mutation.name,
            anyoneCanInfuse: mutation.anyoneCanInfuse,
            listingForbidden: mutation.listingForbidden,
        }
    }

    if (events.multiTokens.tokenMutated.v1010.is(event)) {
        const { collectionId, tokenId, mutation } = events.multiTokens.tokenMutated.v1010.decode(event)

        return {
            collectionId,
            tokenId,
            behavior: mutation.behavior,
            name: mutation.name,
            anyoneCanInfuse: mutation.anyoneCanInfuse,
            listingForbidden: mutation.listingForbidden,
        }
    }

    if (events.multiTokens.tokenMutated.matrixEnjinV603.is(event)) {
        const { collectionId, tokenId, mutation } = events.multiTokens.tokenMutated.matrixEnjinV603.decode(event)

        return {
            collectionId,
            tokenId,
            metadata: mutation.metadata,
            behavior: mutation.behavior,
            listingForbidden: mutation.listingForbidden,
        }
    }

    throw new UnknownVersionError(events.multiTokens.tokenMutated.name)
}

async function getBehavior(
    ctx: CommonContext,
    behavior: TokenMarketBehavior
): Promise<TokenBehaviorIsCurrency | TokenBehaviorHasRoyalty> {
    if (behavior.__kind === TokenBehaviorType.IsCurrency) {
        return new TokenBehaviorIsCurrency({
            type: TokenBehaviorType.IsCurrency,
        })
    }

    const account = await getOrCreateAccount(ctx, behavior.value.beneficiary)
    return new TokenBehaviorHasRoyalty({
        type: TokenBehaviorType.HasRoyalty,
        royalty: new Royalty({
            beneficiary: account.id,
            percentage: behavior.value.percentage,
        }),
    })
}

function getEvent(item: EventItem, data: ReturnType<typeof getEventData>) {
    return new EventModel({
        id: item.id,
        name: MultiTokensTokenMutated.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: `${data.collectionId}-${data.tokenId}`,
        data: new MultiTokensTokenMutated(),
    })
}

export async function tokenMutated(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const data = getEventData(item)
    if (!data) return undefined

    if (skipSave) return getEvent(item, data)

    const token = await ctx.store.findOne<Token>(Token, {
        where: { id: `${data.collectionId}-${data.tokenId}` },
        relations: {
            collection: true,
        },
    })

    if (!token) {
        throwError(`[TokenMutated] We have not found token ${data.collectionId}-${data.tokenId}.`, 'fatal')
        return getEvent(item, data)
    }

    if (data.listingForbidden.__kind === 'SomeMutation') {
        token.listingForbidden = data.listingForbidden.value
    }

    if (data.name && data.name.__kind === 'SomeMutation') {
        token.nativeMetadata = new NativeTokenMetadata({
            decimalCount: token.nativeMetadata?.decimalCount ?? 0,
            symbol: hexToString(token.nativeMetadata?.symbol) ?? '',
            name: hexToString(data.name.value),
        })
    }

    if (data.anyoneCanInfuse && data.anyoneCanInfuse.__kind === 'SomeMutation') {
        token.anyoneCanInfuse = data.anyoneCanInfuse.value
    }

    if (data.behavior.__kind === 'SomeMutation') {
        if (!data.behavior.value) {
            token.behavior = null
        } else {
            token.behavior = await getBehavior(ctx, data.behavior.value)
        }
    }

    token.nonFungible = isNonFungible(token)
    token.updatedAt = new Date(block.timestamp ?? 0)
    await ctx.store.save(token)

    syncCollectionStats(data.collectionId.toString())

    return getEvent(item, data)
}
