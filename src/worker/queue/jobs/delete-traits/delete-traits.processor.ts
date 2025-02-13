import { Job } from 'bullmq'
import { ProcessorDef } from '../processor.def'

export default class DeleteTraitsProcessor implements ProcessorDef {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async handle(job: Job): Promise<void> {}
}
