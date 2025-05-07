import { hexToString } from '@polkadot/util'
import { UnsupportedEventError, throwError } from '../../../common/errors'
import { events } from '../../../types/generated'
import {
    Event as EventModel,
    Extrinsic,
    MultiTokensTokenMutated,
    NativeTokenMetadata,
    Royalty,
    RoyaltyBeneficiary,
    Token,
    TokenBehaviorHasRoyalty,
    TokenBehaviorIsCurrency,
    TokenBehaviorType,
} from '../../../model'
import { isNonFungible } from '../utils/helpers'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'
import { TokenMarketBehavior as TokenMarketBehavior500 } from '../../../types/generated/v500'
import { TokenMarketBehavior as TokenMarketBehavior1020 } from '../../../types/generated/v1020'
import { syncCollectionStats } from '../../../jobs/collection-stats'

type TokenMarketBehavior = TokenMarketBehavior500 | TokenMarketBehavior1020

function getEventData(event: EventItem) {
    if (events.multiTokens.tokenMutated.v1020.is(event)) {
        const { collectionId, tokenId, mutation } = events.multiTokens.tokenMutated.v1020.decode(event)

        return {
            collectionId,
            tokenId,
            behavior: mutation.behavior,
            name: mutation.name,
            anyoneCanInfuse: mutation.anyoneCanInfuse,
            listingForbidden: mutation.listingForbidden,
        }
    }

    if (events.multiTokens.tokenMutated.matrixEnjinV1022.is(event)) {
        const { collectionId, tokenId, mutation } = events.multiTokens.tokenMutated.matrixEnjinV1022.decode(event)

        return {
            collectionId,
            tokenId,
            behavior: mutation.behavior,
            name: mutation.name,
            anyoneCanInfuse: mutation.anyoneCanInfuse,
            listingForbidden: mutation.listingForbidden,
        }
    }

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

    throw new UnsupportedEventError(events.multiTokens.tokenMutated.name)
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
            return new RoyaltyBeneficiary({
                accountId: (await getOrCreateAccount(ctx, v.beneficiary)).id,
                percentage: v.percentage,
            })
        })
    )

    let firstBeneficiary: Royalty | null = null
    if (beneficiariesWithAccount.length > 0) {
        firstBeneficiary = new Royalty({
            beneficiary: beneficiariesWithAccount[0].accountId,
            percentage: beneficiariesWithAccount[0].percentage,
        })
    }

    return new TokenBehaviorHasRoyalty({
        type: TokenBehaviorType.HasRoyalty,
        royalty: firstBeneficiary,
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
