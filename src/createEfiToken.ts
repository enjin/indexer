import { BlockHandlerContext } from './mappings/types/contexts'
import { CapType, Collection, CollectionStats, MintPolicy, Token, TokenCapSupply, TransferPolicy } from './model'
import { getOrCreateAccount } from './mappings/util/entities'

export async function createEfiToken(ctx: BlockHandlerContext) {
    const efi = await ctx.store.findOneBy(Token, { id: '0-0' })

    if (!efi) {
        const account = await getOrCreateAccount(ctx, 'rf8YmxhSe9WGJZvCH8wtzAndweEmz6dTV6DjmSHgHvPEFNLAJ')

        const collection = new Collection({
            id: '0',
            owner: account,
            mintPolicy: new MintPolicy({
                maxTokenCount: 1n,
                maxTokenSupply: 2_000_000_000n,
                forceSingleMint: true,
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
                rank: 0,
                marketCap: 0n,
                volume: 0n,
            }),
            burnPolicy: null,
            attributePolicy: null,
            attributeCount: 0,
            totalDeposit: 0n,
            createdAt: new Date(ctx.block.timestamp),
        })

        await ctx.store.insert(Collection, collection as any)

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
            listingForbidden: true,
            unitPrice: 1n,
            mintDeposit: 1n,
            attributeCount: 0,
            collection,
            nonFungible: false,
            createdAt: new Date(ctx.block.timestamp),
        })

        await ctx.store.insert(Token, token as any)
    }
}
