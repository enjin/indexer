import { dataHandlerContext } from '~/contexts'
import { Token, Event as EventModel, MultiTokensTokenCreated } from '~/model'
import { Job } from 'bullmq'

export async function computeTokenBestListing(_job: Job, id: string): Promise<void> {
    const ctx = await dataHandlerContext()

    const token = await ctx.store.findOne<Token>(Token, { where: { id }, relations: { collection: true } })
    if (!token) {
        await _job.log(`Token ${id} not found`)
        return
    }

    const tokenMintEvent = await ctx.store.findOneByOrFail<EventModel>(EventModel, {
        name: 'MultiTokensTokenCreated',
        collectionId: token.collection.id,
        tokenId: token.tokenId.toString(),
    })

    token.creationSupply =
        tokenMintEvent.data instanceof MultiTokensTokenCreated ? tokenMintEvent.data.initialSupply : 0n

    await ctx.store.save(token)

    await _job.log(`Token ${token.id} creation supply computed`)
}
