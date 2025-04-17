import { Job } from 'bullmq'
import { ProcessorDef } from '../processor.def'
import { JobsEnum } from '../../constants'
import { computeRarity } from '../../jobs/compute-rarity'

export class TokensProcessor implements ProcessorDef {
    async handle(job: Job): Promise<void> {
        switch (job.name as JobsEnum) {
            case JobsEnum.COMPUTE_RARITY:
                await computeRarity(job.data.collectionId)
                break
            default:
                throw new Error(`${job.name} is not a valid job for this processor`)
        }
    }

    async failed(job?: Job) {
        if (!job) {
            return
        }

        await job.log('Failed to compute collections')
    }

    async completed(job: Job) {
        await job.log('Finished computing collections')
    }
}

export default new TokensProcessor()
