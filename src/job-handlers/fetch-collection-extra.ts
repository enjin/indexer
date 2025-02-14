import Queue from 'bull'
import connection from '../connection'
import { JobData } from '../jobs/fetch-collection-extra'
import { fetchCollectionsExtra } from '../mappings/util/marketplace'
import { Collection, CollectionFlags, CollectionSocials } from '../model'
import { computeTraits } from '../jobs/compute-traits'
import { syncCollectionStats } from '../jobs/collection-stats'
import { safeJsonString } from '../common/tools'

function isNotNull<T>(input: null | T): input is T {
    return input != null
}

export default async (job: Queue.Job<JobData>, done: Queue.DoneCallback) => {
    if (!connection.isInitialized) {
        await connection.initialize().catch((err) => {
            throw err
        })
    }

    const em = connection.manager

    const { ids } = job.data

    try {
        const data = await fetchCollectionsExtra(ids)
        const collectionsPromise = data.filter(isNotNull).map(async (_c) => {
            const collection = new Collection({})
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

            await syncCollectionStats(_c.collectionId)
            await computeTraits(_c.collectionId)

            return em.update(Collection, { id: _c.collectionId }, collection as any)
        })

        await Promise.all(collectionsPromise)

        await job.log(`Data: ${safeJsonString(data)}`)

        done(null, data)
    } catch (err) {
        const error = err as Error
        await job.log(`Error: ${safeJsonString(error.message)}`)

        done(error)
    }
}
