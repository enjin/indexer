import { throwFatalError } from '~/util/errors'
import {
    Event as EventModel,
    NativeTokenMetadata,
    RoyaltyBeneficiary,
    Token,
    TokenBehaviorHasRoyalty,
    TokenBehaviorIsCurrency,
    TokenBehaviorType,
} from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import * as mappings from '~/pallet/index'
import { isNonFungible } from '~/util/helpers'
import { QueueUtils } from '~/queue'
import { getOrCreateAccount } from '~/util/entities'
import { TokenMarketBehavior as TokenMarketBehavior500 } from '~/type/matrixV500'
import { TokenMarketBehavior as TokenMarketBehavior1020 } from '~/type/matrixV1020'

type TokenMarketBehavior = TokenMarketBehavior500 | TokenMarketBehavior1020

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

    return new TokenBehaviorHasRoyalty({
        type: TokenBehaviorType.HasRoyalty,
        beneficiaries: beneficiariesWithAccount,
    })
}

export async function tokenMutated(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const data = mappings.multiTokens.events.tokenMutated(item)
    if (skipSave) return mappings.multiTokens.events.tokenMutatedEventModel(item, data)

    const token = await ctx.store.findOne<Token>(Token, {
        where: { id: `${data.collectionId}-${data.tokenId}` },
        relations: {
            collection: true,
        },
    })

    if (!token) {
        throwFatalError(`[TokenMutated] We have not found token ${data.collectionId}-${data.tokenId}.`)
        return mappings.multiTokens.events.tokenMutatedEventModel(item, data)
    }

    if (data.mutation.listingForbidden.__kind === 'SomeMutation') {
        token.listingForbidden = data.mutation.listingForbidden.value
    }

    if (data.mutation.name !== undefined && data.mutation.name.__kind === 'SomeMutation') {
        token.nativeMetadata = new NativeTokenMetadata({
            decimalCount: token.nativeMetadata?.decimalCount ?? 0,
            symbol: token.nativeMetadata?.symbol ?? '',
            name: data.mutation.name.value,
        })
    }

    if (data.mutation.anyoneCanInfuse !== undefined && data.mutation.anyoneCanInfuse.__kind === 'SomeMutation') {
        token.anyoneCanInfuse = data.mutation.anyoneCanInfuse.value
    }

    if (data.mutation.behavior.__kind === 'SomeMutation') {
        if (data.mutation.behavior.value === undefined) {
            token.behavior = null
        } else {
            token.behavior = await getBehavior(ctx, data.mutation.behavior.value as TokenMarketBehavior)
        }
    }

    token.nonFungible = isNonFungible(token)
    token.updatedAt = new Date(block.timestamp ?? 0)
    await ctx.store.save(token)

    // console.log('Dispatching from token mutated')
    QueueUtils.dispatchComputeStats(data.collectionId.toString())

    return mappings.multiTokens.events.tokenMutatedEventModel(item, data)
}
