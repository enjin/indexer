import { Job } from 'bullmq'
import { connectionManager } from '~/contexts'
import { Attribute } from '~/model'

export async function fixAttributes(job: Job, id: string) {
    const em = await connectionManager()

    const attribute = await em.findOne(Attribute, {
        where: { id },
    })

    if (!attribute) {
        await job.log(`Attribute ${id} not found`)
        return
    }

    await em.remove(attribute)
}
