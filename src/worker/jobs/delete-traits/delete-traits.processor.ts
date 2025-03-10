import { Job } from 'bullmq'
import { ProcessorDef } from '../processor.def'
import { connectionManager } from '../../../contexts'

export default class DeleteTraitsProcessor implements ProcessorDef {
    async handle(job: Job): Promise<void> {
        const con = await connectionManager()
        await con.query(`DELETE FROM trait_token WHERE token_id = $1`, [job.data.id])
        await con.query(`DELETE FROM token_rarity WHERE token_id = $1`, [job.data.id])
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
