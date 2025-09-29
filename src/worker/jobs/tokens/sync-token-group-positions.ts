import { Job } from 'bullmq'
import { connectionManager, dataHandlerContext } from '~/contexts'
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
        await job.log(`Syncing token group position for ${tokenGroup.id}`)
        for (const [index, tokenGroupToken] of tokenGroup.tokenGroupTokens.entries()) {
            await job.log(`--- Syncing token group token position for ${tokenGroupToken.id}`)
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
                await job.log(`--- --- Updating token group token id for ${tokenGroupToken.id}`)
            } else {
                tokenGroupToken.position = index
                await ctx.store.save(tokenGroupToken)
            }
            await job.log(`>>>>>>>>>>>>>>>>> Token group token position synced for ${tokenGroupToken.id}`)
        }
    }

    await job.log(`Dispatched computeTokenGroupPositions for ${tokenGroups.length} token groups`)
}
