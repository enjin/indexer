import { dataHandlerContext } from '~/contexts'
import { Listing, Token } from '~/model'
import { Job } from 'bullmq'
import { getBestListing } from '~/util/entities'

export async function computeTokenBestListing(_job: Job, id: string): Promise<void> {
    const ctx = await dataHandlerContext()

    await _job.updateProgress(20)

    const token = await ctx.store.findOneBy<Token>(Token, { id })

    if (!token) {
        await _job.log(`Token ${id} not found`)
        await _job.updateProgress(100)
        return
    }

    await _job.updateProgress(40)

    const bestListing: Listing | undefined = await getBestListing(ctx, token.id)

    await _job.updateProgress(70)

    token.bestListing = null
    token.bestListingPrice = null

    if (bestListing) {
        token.bestListing = bestListing
        token.bestListingPrice = bestListing.highestPrice
    }

    await ctx.store.save(token)

    await _job.log(`Token ${token.id} best listing computed`)
    await _job.updateProgress(100)
}
