// import Queue from 'bullmq'
// import { redisConfig } from '../../config'
//
// export type JobData = { collectionId: string }
//
// export const rarityQueue = new Queue<JobData>('rarityQueue', {
//     defaultJobOptions: { delay: 1000, attempts: 2, removeOnComplete: true },
//     redis: redisConfig,
//     settings: {
//         maxStalledCount: 3,
//     },
// })
//
// export const computeRarityRank = (collectionId: string) => {
//     if (!collectionId) {
//         throw new Error('Collection ID not provided.')
//     }
//
//     if (collectionId === '0') {
//         return
//     }
//
//     rarityQueue.add({ collectionId }, { jobId: collectionId }).catch(async () => {
//         console.log('Closing connection as Redis is not available')
//         await rarityQueue.close(true)
//     })
// }
