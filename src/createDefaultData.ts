import { BlockHeader, CommonContext } from './mappings/types/contexts'
import {
    CapType,
    Collection,
    CollectionFlags,
    CollectionSocials,
    CollectionStats,
    Era,
    Metadata,
    MintPolicy,
    Token,
    TokenCapSupply,
    TransferPolicy,
} from './model'
import { multiTokens } from './types/generated/storage'
import { getOrCreateAccount } from './mappings/util/entities'
import { UnknownVersionError } from './common/errors'

async function getDegenCollectionData(block: BlockHeader) {
    if (multiTokens.collections.enjinV100.is(block)) {
        return multiTokens.collections.enjinV100.get(block, 2n)
    }

    if (multiTokens.collections.v100.is(block)) {
        return multiTokens.collections.v100.get(block, 2n)
    }

    throw new UnknownVersionError('collections')
}

export async function createDefaultData(ctx: CommonContext, block: BlockHeader) {
    const account = await getOrCreateAccount(ctx, new Uint8Array(32).fill(0))

    const enj = await ctx.store.findOneBy(Token, { id: '0-0' })

    if (!enj) {
        const enjCollection = new Collection({
            id: '0',
            collectionId: 0n,
            owner: account,
            mintPolicy: new MintPolicy({
                maxTokenCount: null,
                maxTokenSupply: null,
                forceSingleMint: false,
            }),
            metadata: new Metadata({
                name: 'Enjin Token (ENJ)',
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
                supply: 0n,
                marketCap: 0n,
                volume: 0n,
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

        const sEnjCollection = new Collection({
            id: '1',
            collectionId: 1n,
            owner: account,
            mintPolicy: new MintPolicy({
                maxTokenCount: null,
                maxTokenSupply: null,
                forceSingleMint: false,
            }),
            metadata: new Metadata({
                name: 'Staked Enjin Token (sENJ)',
            }),
            transferPolicy: new TransferPolicy({
                isFrozen: false,
            }),
            stats: new CollectionStats({
                lastSale: null,
                floorPrice: null,
                highestSale: null,
                tokenCount: 0,
                salesCount: 0,
                supply: 0n,
                marketCap: 0n,
                volume: 0n,
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
        const degenCollectionData = await getDegenCollectionData(block)
        if (!degenCollectionData) {
            throw new Error('Degen collection data not found')
        }
        const degenCollection = new Collection({
            id: '2',
            collectionId: 2n,
            owner: await getOrCreateAccount(ctx, degenCollectionData.owner),
            mintPolicy: new MintPolicy({
                maxTokenCount: degenCollectionData.policy.mint.maxTokenCount,
                maxTokenSupply: degenCollectionData.policy.mint.maxTokenSupply,
                forceSingleMint: degenCollectionData.policy.mint.forceSingleMint,
            }),
            metadata: new Metadata({
                name: 'Degen',
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
                supply: degenCollectionData.tokenCount,
                marketCap: 0n,
                volume: 0n,
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

        await ctx.store.insert([enjCollection, sEnjCollection, degenCollection])

        const token = new Token({
            id: `0-0`,
            tokenId: 0n,
            supply: 2_000_000_000n,
            isFrozen: false,
            minimumBalance: 1n,
            cap: new TokenCapSupply({
                type: CapType.Supply,
                supply: 2_000_000_000n,
            }),
            accountDepositCount: 0,
            anyoneCanInfuse: false,
            listingForbidden: true,
            unitPrice: 1n,
            infusion: 0n,
            mintDeposit: 1n,
            attributeCount: 0,
            collection: enjCollection,
            nonFungible: false,
            createdAt: new Date(block.timestamp ?? 0),
        })

        await ctx.store.insert(token)

        const era = new Era({
            id: `0`,
            index: 0,
            startAt: new Date(block.timestamp ?? 0),
            endAt: new Date(block.timestamp ?? 0),
            startBlock: block.height,
            endBlock: block.height,
        })

        await ctx.store.insert(era)

        ctx.log.info('Default data created')
    }
}
