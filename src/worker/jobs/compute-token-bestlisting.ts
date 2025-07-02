import { dataHandlerContext } from '~/contexts'
import { Token } from '~/model'
import { Job } from 'bullmq'
import { getBestListing } from '~/util/entities'

export async function computeTokenBestListing(_job: Job, id: string): Promise<void> {
    const ctx = await dataHandlerContext()

    const token = await ctx.store.findOneByOrFail<Token>(Token, { id })

    const bestListing = await getBestListing(ctx, token.id)

    if (bestListing) {
        token.bestListing = bestListing
        await ctx.store.save(token)
    }

    await _job.log(`Token ${token.id} best listing computed`)
}
