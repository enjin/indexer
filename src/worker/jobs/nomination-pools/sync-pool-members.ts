import { connectionManager } from '~/contexts'
import { Job } from 'bullmq'
import { PoolMember } from '~/model'
import { IsNull } from 'typeorm'

export async function syncPoolMembers(job: Job): Promise<void> {
    const em = await connectionManager()
    const promises: Promise<any>[] = []

    let count = 0

    const members = await em.find(PoolMember, {
        relations: {
            tokenAccount: true,
        },
        where: {
            tokenAccount: IsNull(),
            isActive: true,
        },
    })

    for (const member of members) {
        if (member.isActive && member.tokenAccount === null && member.unbondingEras === undefined) {
            member.isActive = false
            promises.push(em.save(member))
            count++
        }
    }

    await Promise.all(promises)

    await job.log(`Synced ${count} members`)
}
