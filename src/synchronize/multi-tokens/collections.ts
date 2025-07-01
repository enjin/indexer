import { Block, CommonContext } from '~/contexts'
import { multiTokens } from '~/pallet'
import {
    Collection,
    CollectionFlags,
    CollectionSocials,
    CollectionStats,
    MarketPolicy,
    MintPolicy,
    RoyaltyBeneficiary,
    TransferPolicy,
} from '~/model'
import { BATCH_SIZE, getAccountMap } from '~/synchronize/common'

export async function collections(ctx: CommonContext, block: Block) {
    ctx.log.info('Syncing collections...')

    const iterable = (await multiTokens.storage.collections(block, { batchSize: BATCH_SIZE })) ?? []

    for await (const collectionPairs of iterable) {
        const accountMap = await getAccountMap(
            ctx,
            collectionPairs.map(([, data]) => {
                if (!data) {
                    throw new Error('Collection Data not found')
                }

                let beneficiares: string[] = []
                if (data.policy.market.royalty !== undefined && 'beneficiaries' in data.policy.market.royalty) {
                    beneficiares = data.policy.market.royalty.beneficiaries.map((b) => b.beneficiary)
                }

                return [data.owner, ...beneficiares]
            })
        )

        const collections = collectionPairs.map(([id, data]) => {
            if (!data) {
                throw new Error('Collection data not found')
            }

            const owner = accountMap.get(data.owner)
            let market: MarketPolicy | null = null
            if (data.policy.market.royalty !== undefined && 'beneficiaries' in data.policy.market.royalty) {
                const beneficiares = data.policy.market.royalty.beneficiaries
                const account = accountMap.get(beneficiares[0].beneficiary)
                if (!account) throw new Error('Market beneficiary not found')

                market = new MarketPolicy({
                    beneficiaries: beneficiares.map(
                        (b) =>
                            new RoyaltyBeneficiary({
                                accountId: b.beneficiary,
                                percentage: b.percentage,
                            })
                    ),
                })
            }

            return new Collection({
                id: id.toString(),
                owner,
                mintPolicy: new MintPolicy({
                    maxTokenCount: data.policy.mint.maxTokenCount,
                    maxTokenSupply: data.policy.mint.maxTokenSupply,
                    forceSingleMint: data.policy.mint.forceSingleMint ?? data.policy.mint.forceCollapsingSupply,
                }),
                marketPolicy: market,
                transferPolicy: new TransferPolicy({
                    isFrozen: data.policy.transfer.isFrozen,
                }),
                stats: new CollectionStats({
                    lastSale: null,
                    floorPrice: null,
                    highestSale: null,
                    tokenCount: Number(data.tokenCount),
                    salesCount: 0,
                    supply: 0n,
                    marketCap: 0n,
                    volume: 0n,
                }),
                flags: new CollectionFlags({
                    featured: false,
                    hiddenForLegalReasons: false,
                    // verified: false,
                }),
                socials: new CollectionSocials({
                    discord: null,
                    twitter: null,
                    instagram: null,
                    medium: null,
                    tiktok: null,
                    website: null,
                }),
                hidden: false,
                burnPolicy: null,
                attributePolicy: null,
                attributeCount: data.attributeCount,
                totalDeposit: data.totalDeposit,
                createdAt: new Date(block.timestamp ?? 0),
                collectionId: id,
            })
        })

        await ctx.store.insert(collections)
        // TODO: Should we process the metadata here?
    }

    ctx.log.info(`Successfully imported ${await ctx.store.count(Collection)} collections`)
}
