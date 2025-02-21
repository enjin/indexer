import { Job } from 'bullmq'
import { ProcessorDef } from '../processor.def'

export default class ComputeValidatorsProcessor implements ProcessorDef {
    async handle(job: Job): Promise<void> {}
}
