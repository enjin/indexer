import { BlockHeader, CommonContext } from './contexts'
import {
    Collection,
    CollectionFlags,
    CollectionSocials,
    CollectionStats,
    Metadata,
    MintPolicy,
    Token,
    TransferPolicy,
} from './model'
import { getOrCreateAccount } from './utils/entities'
import { isMainnet } from './utils/tools'

export async function createDefaultData(ctx: CommonContext, block: BlockHeader) {
    const enjinCoin = await ctx.store.findOneBy<Token>(Token, { id: '0-0' })

    if (enjinCoin === undefined) {
        const supply = isMainnet() ? 1_550_001_200_000_000_000_000_000n : 3_000_002_000_000_000_000_000_000n
        const root = await getOrCreateAccount(ctx, new Uint8Array(32).fill(0))

        const enjinCoinCollection = new Collection({
            id: '0',
            collectionId: 0n,
            owner: root,
            mintPolicy: new MintPolicy({
                forceSingleMint: false,
            }),
            transferPolicy: new TransferPolicy({
                isFrozen: false,
            }),
            stats: new CollectionStats({
                lastSale: null,
                floorPrice: null,
                highestSale: null,
                tokenCount: 1,
                salesCount: 0,
                supply,
                marketCap: 0n,
                volume: 0n,
            }),
            metadata: new Metadata({
                name: 'Enjin Token (ENJ)',
            }),

            flags: new CollectionFlags({
                featured: false,
                hiddenForLegalReasons: false,
            }),
            verifiedAt: null,
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
            attributeCount: 0,
            totalDeposit: 0n,
            createdAt: new Date(block.timestamp ?? 0),
        })

        await ctx.store.insert(enjinCoinCollection)

        // const sEnjCollection = new Collection({
        //     id: '1',
        //     collectionId: 1n,
        //     owner: root,
        //     mintPolicy: new MintPolicy({
        //         maxTokenCount: null,
        //         maxTokenSupply: null,
        //         forceSingleMint: false,
        //     }),
        //     metadata: new Metadata({
        //         name: 'Staked Enjin Token (sENJ)',
        //     }),
        //     transferPolicy: new TransferPolicy({
        //         isFrozen: false,
        //     }),
        //     stats: new CollectionStats({
        //         lastSale: null,
        //         floorPrice: null,
        //         highestSale: null,
        //         tokenCount: 0,
        //         salesCount: 0,
        //         supply: 0n,
        //         marketCap: 0n,
        //         volume: 0n,
        //     }),
        //     flags: new CollectionFlags({
        //         featured: false,
        //         hiddenForLegalReasons: false,
        //     }),
        //     verifiedAt: null,
        //     socials: new CollectionSocials({
        //         discord: null,
        //         twitter: null,
        //         instagram: null,
        //         medium: null,
        //         tiktok: null,
        //         website: null,
        //     }),
        //     hidden: false,
        //     burnPolicy: null,
        //     attributePolicy: null,
        //     attributeCount: 0,
        //     totalDeposit: 0n,
        //     createdAt: new Date(block.timestamp ?? 0),
        // })
        //
        // const degenCollectionData = await mappings.multiTokens.storage.collections(block, 2n)
        // if (!degenCollectionData) {
        //     throw new Error('Degen collection data not found')
        // }
        //
        // const degenCollection = new Collection({
        //     id: '2',
        //     collectionId: 2n,
        //     owner: await getOrCreateAccount(ctx, degenCollectionData.owner),
        //     mintPolicy: new MintPolicy({
        //         maxTokenCount: degenCollectionData.policy.mint.maxTokenCount,
        //         maxTokenSupply: degenCollectionData.policy.mint.maxTokenSupply,
        //         forceSingleMint: degenCollectionData.policy.mint.forceSingleMint,
        //     }),
        //     metadata: new Metadata({
        //         name: 'Degen',
        //     }),
        //     transferPolicy: new TransferPolicy({
        //         isFrozen: false,
        //     }),
        //     stats: new CollectionStats({
        //         lastSale: null,
        //         floorPrice: null,
        //         highestSale: null,
        //         tokenCount: 1,
        //         salesCount: 0,
        //         supply: degenCollectionData.tokenCount,
        //         marketCap: 0n,
        //         volume: 0n,
        //     }),
        //     flags: new CollectionFlags({
        //         featured: false,
        //         hiddenForLegalReasons: false,
        //     }),
        //     verifiedAt: null,
        //     socials: new CollectionSocials({
        //         discord: null,
        //         twitter: null,
        //         instagram: null,
        //         medium: null,
        //         tiktok: null,
        //         website: null,
        //     }),
        //     hidden: false,
        //     burnPolicy: null,
        //     attributePolicy: null,
        //     attributeCount: 0,
        //     totalDeposit: 0n,
        //     createdAt: new Date(block.timestamp ?? 0),
        // })
        //
        // await ctx.store.insert([enjCollection, sEnjCollection, degenCollection])

        const enjinCoinToken = new Token({
            id: `0-0`,
            tokenId: 0n,
            supply,
            isFrozen: false,
            minimumBalance: 1n,
            cap: null,
            accountDepositCount: 0,
            anyoneCanInfuse: false,
            listingForbidden: true,
            unitPrice: 1n,
            infusion: 0n,
            mintDeposit: 1n,
            attributeCount: 0,
            collection: enjinCoinCollection,
            nonFungible: false,
            createdAt: new Date(block.timestamp ?? 0),
        })

        await ctx.store.insert(enjinCoinToken)

        // const era = new Era({
        //     id: `0`,
        //     index: 0,
        //     startAt: new Date(block.timestamp ?? 0),
        //     endAt: new Date(block.timestamp ?? 0),
        //     startBlock: block.height,
        //     endBlock: block.height,
        // })
        //
        // await ctx.store.insert(era)

        ctx.log.info('Default data created')
    }
}
