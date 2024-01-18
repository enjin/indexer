import Queue from 'bull'
import { redisConfig } from './common'

export const invalidateExpiredListings = new Queue('InvalidateListings', {
    defaultJobOptions: { repeat: { cron: '*/1 * * * *' }, attempts: 5, removeOnComplete: 300 },
    redis: redisConfig,
    settings: {
        maxStalledCount: 0,
    },
})

invalidateExpiredListings.add({})
