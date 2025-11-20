import { dataHandlerContext } from '~/contexts'
import { Listing, Token } from '~/model'
import { Job } from 'bullmq'
import { getBestListing } from '~/util/entities'

export async function computeTokenBestListing(_job: Job, id: string): Promise<void> {
    const ctx = await dataHandlerContext()

    const token: Token = await ctx.store.findOneByOrFail<Token>(Token, { id })

    const bestListing: Listing | undefined = await getBestListing(ctx, token.id)

    token.bestListing = null
    token.bestListingPrice = null

    if (bestListing) {
        token.bestListing = bestListing
        token.bestListingPrice = bestListing.highestPrice
    }

    await ctx.store.save(token)

    await _job.log(`Token ${token.id} best listing computed`)
}
