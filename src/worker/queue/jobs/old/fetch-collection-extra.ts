// import Queue from 'bullmq'
// import connection from '../../../../connection'
// import { JobData } from '../../queues/old/fetch-collection-extra'
// import { fetchCollectionsExtra } from '../../../../common/util/marketplace'
// import { Collection, CollectionFlags, CollectionSocials } from '../../../../model'
// import { computeTraits } from '../../queues/old/compute-traits'
// import { syncCollectionStats } from '../../queues/old/collection-stats'
//
// function isNotNull<T>(input: null | T): input is T {
//     return input != null
// }
//
// export default async (job: Queue.Job<JobData>, done: Queue.DoneCallback) => {
//     if (!connection.isInitialized) {
//         await connection.initialize().catch((err) => {
//             throw err
//         })
//     }
//
//     const em = connection.manager
//
//     const { ids } = job.data
//
//     const data = await fetchCollectionsExtra(ids)
//
//     const collectionsPromise = data.filter(isNotNull).map(async (_c) => {
//         const collection = new Collection({})
//         collection.hidden = _c.hidden
//         collection.category = _c.category
//         collection.flags = new CollectionFlags({
//             featured: _c.featured,
//             hiddenForLegalReasons: _c.hiddenForLegalReasons,
//         })
//         collection.verifiedAt = _c.verifiedAt ? new Date(_c.verifiedAt) : null
//         collection.socials = new CollectionSocials({
//             discord: _c.discord,
//             twitter: _c.twitter,
//             instagram: _c.instagram,
//             medium: _c.medium,
//             tiktok: _c.tiktok,
//             website: _c.website,
//         })
//
//         syncCollectionStats(_c.collectionId)
//         computeTraits(_c.collectionId)
//
//         return em.update(Collection, { id: _c.collectionId }, collection as any)
//     })
//
//     await Promise.all(collectionsPromise)
//
//     done(null, data)
// }
