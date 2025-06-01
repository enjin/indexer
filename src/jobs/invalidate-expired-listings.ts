// import Queue from 'bull'
// import { redisConfig } from './common'
//
// export const invalidateExpiredListings = new Queue('InvalidateListings', {
//     defaultJobOptions: { repeat: { cron: '* * * * *' }, attempts: 5, removeOnComplete: 300, removeOnFail: false },
//     redis: redisConfig,
//     settings: {
//         maxStalledCount: 0,
//     },
// })
//
// invalidateExpiredListings.add({})
