import { BlockHeader, CommonContext } from './mappings/types/contexts'
import { MoreThan } from 'typeorm'
import { Token } from './model'
import { multiTokens } from './types/generated/storage'

const syncToken = async (ctx: CommonContext, block: BlockHeader, token: Token) => {
    if (multiTokens.tokens.matrixEnjinV1012.is(block)) {
        const [collectionId, tokenId] = token.id.split('-')
        const data = await multiTokens.tokens.matrixEnjinV1012.get(block, BigInt(collectionId), BigInt(tokenId))
        if (!data) throw new Error(`Data not found for token ${token.id}`)
        token.infusion = data.infusion
        await ctx.store.save(token)
    }
}

export default async function reSyncInfusion(ctx: CommonContext, block: BlockHeader): Promise<void> {
    const assetsWithInfusion = await ctx.store.find(Token, { where: { infusion: MoreThan(0n) } })

    for (const asset of assetsWithInfusion) {
        await syncToken(ctx, block, asset)
    }

    console.log(`[reSyncInfusion] Updated ${assetsWithInfusion.length} assets with infusion`)
}
