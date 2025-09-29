import { Job } from 'bullmq'
import { dataHandlerContext } from '~/contexts'
import { TokenGroup, TokenGroupToken } from '~/model'

export async function syncTokenGroupPositions(job: Job) {
    const ctx = await dataHandlerContext()

    const tokenGroupTokens = await ctx.store.find(TokenGroupToken, {
        relations: {
            token: true,
            tokenGroup: true,
        },
    })

    for (const tokenGroupToken of tokenGroupTokens) {
        if (!tokenGroupToken.tokenGroup) {
            await job.log(`Removing token group token ${tokenGroupToken.id} because it has no token group`)
            await ctx.store.remove(tokenGroupToken)
        }

        // for (const [index, tokenGroupToken] of tokenGroup.tokenGroupTokens.entries()) {
        //     if (tokenGroupToken.id !== `${tokenGroupToken.token.tokenId}-${tokenGroup.id}`) {
        //         const token = tokenGroupToken.token
        //         await ctx.store.remove(tokenGroupToken)

        //         const newTokenGroupToken = new TokenGroupToken({
        //             id: `${token.tokenId}-${tokenGroup.id}`,
        //             token,
        //             tokenGroup,
        //             position: index,
        //         })
        //         await ctx.store.save(newTokenGroupToken)
        //     } else {
        //         tokenGroupToken.position = index
        //         await ctx.store.save(tokenGroupToken)
        //     }
        // }
    }

    await job.log(`Dispatched computeTokenGroupPositions for ${tokenGroupTokens.length} token group tokens`)
}
