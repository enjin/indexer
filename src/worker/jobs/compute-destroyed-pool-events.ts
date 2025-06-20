import { dataHandlerContext } from '../../contexts'
import { Job } from 'bullmq'

export async function computeDestroyedPoolsEvents(_job: Job): Promise<void> {
    const ctx = await dataHandlerContext()
}
