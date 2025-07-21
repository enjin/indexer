import { connectionManager } from '~/contexts'
import { Job } from 'bullmq'
import { AccountTokenEvent, Listing, MarketplaceOfferCancelled, MarketplaceOfferCreated, NominationPool } from '~/model'

export async function syncPoolMembers(job: Job): Promise<void> {
    const em = await connectionManager()
    const promises: Promise<any>[] = []

    const pools = await em.find(NominationPool, {
        select: ['id', 'name', 'degenToken', 'members'],
        relations: {
            degenToken: true,
            members: true,
        },
    })

    for (const pool of pools) {
        const member = pool.members.find((member) => member.bonded === 2500000000000000000000n)
        if (member) {
            member.isStash = true
            promises.push(em.save(member))
        }
    }

    await Promise.all(promises)

    await job.log(`Synced ${pools.length} pools`)
}
