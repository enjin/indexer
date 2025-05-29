import { dataHandlerContext } from '../../contexts'
import { fetchCollectionsExtra } from '../../util/marketplace'
import { Collection, CollectionFlags, CollectionSocials } from '../../model'
import { Job } from 'bullmq'

function isNotNull<T>(input: null | T): input is T {
    return input != null
}

export async function fetchExtra(_job: Job, ids: string[]): Promise<void> {
    const ctx = await dataHandlerContext()
    const data = await fetchCollectionsExtra(ids)

    const collections = await Promise.all(
        data.filter(isNotNull).map(async (_c) => {
            const collection = await ctx.store.findOneByOrFail<Collection>(Collection, { id: _c.collectionId })

            collection.hidden = _c.hidden
            collection.category = _c.category
            collection.flags = new CollectionFlags({
                featured: _c.featured,
                hiddenForLegalReasons: _c.hiddenForLegalReasons,
            })

            collection.verifiedAt = _c.verifiedAt ? new Date(_c.verifiedAt) : null
            collection.socials = new CollectionSocials({
                discord: _c.discord,
                twitter: _c.twitter,
                instagram: _c.instagram,
                medium: _c.medium,
                tiktok: _c.tiktok,
                website: _c.website,
            })

            return collection
        })
    )

    await ctx.store.save<Collection>(collections)
}
