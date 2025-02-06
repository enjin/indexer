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
import { TokenMarketBehavior as TokenMarketBehavior1032 } from '../../../types/generated/enjinV1032'
import { TokenMarketBehavior as TokenMarketBehavior1050 } from '../../../types/generated/v1050'
import { syncCollectionStats } from '../../../jobs/collection-stats'

type TokenMarketBehavior = TokenMarketBehavior1032 | TokenMarketBehavior1050

function getEventData(event: EventItem) {
    if (events.multiTokens.tokenMutated.enjinV1032.is(event)) {
        const { collectionId, tokenId, mutation } = events.multiTokens.tokenMutated.enjinV1032.decode(event)

        return {
            collectionId,
            tokenId,
            behavior: mutation.behavior,
            name: mutation.name,
            anyoneCanInfuse: mutation.anyoneCanInfuse,
            listingForbidden: mutation.listingForbidden,
        }
    }

    if (events.multiTokens.tokenMutated.enjinV100.is(event)) {
        const { collectionId, tokenId, mutation } = events.multiTokens.tokenMutated.enjinV100.decode(event)

        return {
            collectionId,
            tokenId,
            metadata: mutation.metadata,
            behavior: mutation.behavior,
            listingForbidden: mutation.listingForbidden,
        }
    }

    if (events.multiTokens.tokenMutated.v1050.is(event)) {
        const { collectionId, tokenId, mutation } = events.multiTokens.tokenMutated.v1050.decode(event)

        return {
            collectionId,
            tokenId,
            behavior: mutation.behavior,
            name: mutation.name,
            anyoneCanInfuse: mutation.anyoneCanInfuse,
            listingForbidden: mutation.listingForbidden,
        }
    }

    if (events.multiTokens.tokenMutated.v1030.is(event)) {
        const { collectionId, tokenId, mutation } = events.multiTokens.tokenMutated.v1030.decode(event)

        return {
            collectionId,
            tokenId,
            behavior: mutation.behavior,
            name: mutation.name,
            anyoneCanInfuse: mutation.anyoneCanInfuse,
            listingForbidden: mutation.listingForbidden,
        }
    }

    if (events.multiTokens.tokenMutated.v100.is(event)) {
        const { collectionId, tokenId, mutation } = events.multiTokens.tokenMutated.v100.decode(event)

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
    const beneficiaries =
        'beneficiaries' in behavior.value
            ? behavior.value.beneficiaries
            : [
                  {
                      beneficiary: behavior.value.beneficiary,
                      percentage: behavior.value.percentage,
                  },
              ]

    const beneficiariesWithAccount = await Promise.all(
        beneficiaries.map(async (v) => {
            return new Royalty({
                beneficiary: (await getOrCreateAccount(ctx, v.beneficiary)).id,
                percentage: v.percentage,
            })
        })
    )

    return new TokenBehaviorHasRoyalty({
        type: TokenBehaviorType.HasRoyalty,
        royalty: beneficiariesWithAccount[0],
        beneficiaries: beneficiariesWithAccount,
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