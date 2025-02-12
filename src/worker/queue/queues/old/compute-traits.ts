// import Queue from 'bullmq'
// import { redisConfig } from '../../config'
//
// export type JobData = { collectionId: string }
//
// export const traitsQueue = new Queue<JobData>('traitsQueue', {
//     defaultJobOptions: { delay: 120_000, attempts: 2, removeOnComplete: true },
//     redis: redisConfig,
//     settings: {
//         maxStalledCount: 3,
//     },
// })
//
// export const computeTraits = (collectionId: string) => {
//     if (!collectionId) {
//         throw new Error('Collection ID not provided.')
//     }
//
//     if (collectionId === '0') {
//         return
//     }
//
//     traitsQueue.add({ collectionId }, { jobId: collectionId }).catch(async () => {
//         console.log('Closing connection as Redis is not available')
//         await traitsQueue.close(true)
//     })
// }
