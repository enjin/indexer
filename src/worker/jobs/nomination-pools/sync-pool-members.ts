import { connectionManager } from '~/contexts'
import { Job } from 'bullmq'
import { NominationPool } from '~/model'
import { IsNull } from 'typeorm'

export async function syncPoolMembers(job: Job): Promise<void> {
    const em = await connectionManager()
    const promises: Promise<any>[] = []

    let count = 0;

    const pools = await em.find(NominationPool, {
        select: ['id', 'name', 'members'],
        relations: {
            members: {
                tokenAccount: true,
            },
        },
        where: {
            members: {
                tokenAccount: IsNull(),
                isActive: true,
            },
        },
    })

    for (const pool of pools) {
        for (const member of pool.members) {
            if (member.isActive && member.tokenAccount === null) {
                member.isActive = false
                promises.push(em.save(member))
                count++
            }
        }
    }

    await Promise.all(promises)

    await job.log(`Synced ${count} members`)
}
