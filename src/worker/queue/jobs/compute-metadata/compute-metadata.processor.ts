import { Job } from 'bullmq'
import { ProcessorDef } from '../processor.def'

export default class ComputeMetadataProcessor implements ProcessorDef {
    // eslint-disable-next-line @typescript-eslint/require-await
    async handle(job: Job): Promise<void> {
        console.log(job.data)
    }
}
