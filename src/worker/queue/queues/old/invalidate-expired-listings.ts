// import Queue from 'bullmq'
// import { redisConfig } from '../../config'
//
// export const invalidateExpiredListings = new Queue('InvalidateListings', {
//     defaultJobOptions: { repeat: { cron: '* * * * *' }, attempts: 5, removeOnComplete: 300 },
//     redis: redisConfig,
//     settings: {
//         maxStalledCount: 0,
//     },
// })
//
// invalidateExpiredListings.add({})
