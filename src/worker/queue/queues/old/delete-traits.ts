// import Queue from 'bullmq'
// import { redisConfig } from '../../config'
//
// export type JobData = { id: string }
//
// export const deleteTraitsQueue = new Queue<JobData>('deleteTraits', {
//     defaultJobOptions: { removeOnComplete: true },
//     redis: redisConfig,
//     settings: {
//         maxStalledCount: 1,
//     },
// })
//
// export const deleteTokenTraits = (id: string) => {
//     deleteTraitsQueue.add({ id }).catch(async () => {
//         console.log('Closing connection as Redis is not available')
//         await deleteTraitsQueue.close(true)
//     })
// }
