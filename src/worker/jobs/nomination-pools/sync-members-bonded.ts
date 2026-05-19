import { connectionManager } from '~/contexts'
import { Job } from 'bullmq'
import { PoolMember } from '~/model'

export async function syncMembersBonded(job: Job): Promise<void> {
    const em = await connectionManager()

    await job.updateProgress(10)

    const members = await em.find(PoolMember, {
        relations: {
            tokenAccount: true,
            pool: true,
        },
        where: {
            isActive: true,
        },
    })

    await job.updateProgress(30)

    const toSave: PoolMember[] = []

    for (const member of members) {
        if (!member.tokenAccount || !member.pool || member.pool.rate === 0n) {
            continue
        }

        member.bonded = (member.tokenAccount.balance / 10n ** 18n) * member.pool.rate
        toSave.push(member)
    }

    await job.updateProgress(70)

    if (toSave.length > 0) {
        await em.save(toSave)
    }

    await job.updateProgress(100)

    await job.log(`Updated bonded value for ${toSave.length} / ${members.length} members`)
}
