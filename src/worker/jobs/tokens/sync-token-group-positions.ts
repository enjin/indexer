import { Job } from 'bullmq'
import { dataHandlerContext } from '~/contexts'
import { TokenGroup, TokenGroupToken } from '~/model'

export async function syncTokenGroupPositions(job: Job) {
    const ctx = await dataHandlerContext()

    const tokenGroups = await ctx.store.find(TokenGroup, {
        relations: {
            tokenGroupTokens: {
                token: true,
            },
        },
    })

    for (const tokenGroup of tokenGroups) {
        for (const [index, tokenGroupToken] of tokenGroup.tokenGroupTokens.entries()) {
            if (tokenGroupToken.id !== `${tokenGroupToken.token.tokenId}-${tokenGroup.id}`) {
                const token = tokenGroupToken.token
                await ctx.store.remove(tokenGroupToken)

                const newTokenGroupToken = new TokenGroupToken({
                    id: `${token.tokenId}-${tokenGroup.id}`,
                    token,
                    tokenGroup,
                    position: index,
                })
                await ctx.store.save(newTokenGroupToken)
            } else {
                tokenGroupToken.position = index
                await ctx.store.save(tokenGroupToken)
            }
        }
    }

    await job.log(`Dispatched computeTokenGroupPositions for ${tokenGroups.length} token groups`)
}
