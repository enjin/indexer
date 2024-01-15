import Queue from 'bull'
import { redisConfig } from './common'

export const invalidateExpiredListings = new Queue('InvalidateListings', {
    defaultJobOptions: { repeat: { every: 300_000 }, attempts: 3, removeOnComplete: 500 },
    redis: redisConfig,
    settings: {
        maxStalledCount: 3,
    },
})
