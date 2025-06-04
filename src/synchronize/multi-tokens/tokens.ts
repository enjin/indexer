import { Block, CommonContext } from '../../contexts'
import { multiTokens } from '../../pallet'
import {
    Collection,
    FreezeState,
    RoyaltyBeneficiary,
    Token,
    TokenBehaviorHasRoyalty,
    TokenBehaviorIsCurrency,
    TokenBehaviorType,
} from '../../model'
import { isNonFungible } from '../../util/helpers'
import { BATCH_SIZE, getCapType, getFreezeState, isTokenFrozen } from '../common'

export async function tokens(ctx: CommonContext, block: Block) {
    ctx.log.info('Syncing tokens...')

    const iterable = (await multiTokens.storage.tokens(block, { batchSize: BATCH_SIZE })) ?? []

    for await (const tokenPairs of iterable) {
        const tokens = []

        for (const [key, data] of tokenPairs) {
            if (!data) continue

            const collectionId = key[0].toString()
            const tokenId = key[1].toString()
            const collection = await ctx.store.findOneOrFail(Collection, { where: { id: collectionId.toString() } })

            let behavior: TokenBehaviorIsCurrency | TokenBehaviorHasRoyalty | null = null
            if ('marketBehavior' in data && data.marketBehavior) {
                if (data.marketBehavior.__kind === TokenBehaviorType.IsCurrency) {
                    behavior = new TokenBehaviorIsCurrency({
                        type: TokenBehaviorType.IsCurrency,
                    })
                } else {
                    if ('beneficiaries' in data.marketBehavior.value) {
                        behavior = new TokenBehaviorHasRoyalty({
                            type: TokenBehaviorType.HasRoyalty,
                            beneficiaries: data.marketBehavior.value.beneficiaries.map(
                                (b) =>
                                    new RoyaltyBeneficiary({
                                        accountId: b.beneficiary,
                                        percentage: b.percentage,
                                    })
                            ),
                        })
                    }
                }
            }

            const freezeState = data.freezeState ? getFreezeState(data.freezeState) : undefined
            let unitPrice: bigint | null = 10_000_000_000_000_000n
            let minBalance = 1n

            if ('sufficiency' in data) {
                unitPrice = data.sufficiency?.__kind === 'Insufficient' ? data.sufficiency.unitPrice : 1n
                minBalance = BigInt(Math.max(1, Number(10n ** 16n / unitPrice)))
            }

            const token = new Token({
                id: `${collectionId}-${tokenId}`,
                tokenId: BigInt(tokenId),
                supply: data.supply,
                cap: data.cap ? getCapType(data.cap) : null,
                behavior,
                isFrozen: isTokenFrozen(freezeState),
                freezeState: data.freezeState != undefined ? FreezeState[data.freezeState.__kind] : null,
                minimumBalance: minBalance,
                unitPrice,
                mintDeposit: data.mintDeposit ?? 1n,
                attributeCount: data.attributeCount,
                collection,
                metadata: null,
                listingForbidden: 'listingForbidden' in data ? data.listingForbidden : false,
                accountDepositCount: 0,
                anyoneCanInfuse: false,
                nativeMetadata: null,
                infusion: data.infusion,
                createdAt: new Date(block.timestamp ?? 0),
            })

            token.nonFungible = isNonFungible(token)
            tokens.push(token)
            // TODO: Should we process the metadata here?
        }

        await ctx.store.insert(tokens)
    }

    ctx.log.info(`Successfully imported ${await ctx.store.count(Token)} tokens`)
}
