import { dataHandlerContext } from '~/contexts'
import { fetchCollectionsExtra } from '~/util/marketplace'
import { Collection, CollectionFlags, EntitySocials, Metadata } from '~/model'
import { Job } from 'bullmq'
import { isNotNullOrEmpty } from '~/worker/utils'

export async function computeExtras(_job: Job, ids: string[]): Promise<void> {
    const ctx = await dataHandlerContext()

    await _job.updateProgress(10)

    const data = await fetchCollectionsExtra(ids)

    await _job.updateProgress(40)

    const collections = await Promise.all(
        data.filter(isNotNullOrEmpty).map(async (_c) => {
            const collection = await ctx.store.findOneByOrFail<Collection>(Collection, { id: _c.collectionId })

            collection.hidden = _c.hidden
            collection.category = _c.category
            collection.flags = new CollectionFlags({
                featured: _c.featured,
                hiddenForLegalReasons: _c.hiddenForLegalReasons,
            })

            collection.verifiedAt = _c.verifiedAt ? new Date(_c.verifiedAt) : null
            if (!collection.storedMetadata) {
                collection.storedMetadata = new Metadata()
            }
            if (_c.website) {
                collection.storedMetadata.externalUrl = _c.website
            }
            collection.storedMetadata.socials = new EntitySocials({
                discord: _c.discord,
                x: _c.twitter,
                instagram: _c.instagram,
                medium: _c.medium,
                tiktok: _c.tiktok,
            })

            return collection
        })
    )

    await _job.updateProgress(80)

    await ctx.store.save<Collection>(collections)

    await _job.updateProgress(100)
}
