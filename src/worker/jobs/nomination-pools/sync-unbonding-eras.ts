import { Job } from 'bullmq'
import { IsNull, Not } from 'typeorm'
import { connectionManager } from '~/contexts'
import { PoolMember, UnbondingEras } from '~/model'
import Rpc from '~/util/rpc'
import { unbondingErasFromChain } from '~/worker/jobs/nomination-pools/sync-account-unbonding-eras'

const BATCH_SIZE = 200

function sameEras(a: UnbondingEras[] | null | undefined, b: UnbondingEras[] | null): boolean {
    const key = (eras: UnbondingEras[] | null | undefined) =>
        (eras ?? [])
            .map((e) => `${e.era}:${e.balance}`)
            .sort()
            .join(',')

    return key(a) === key(b)
}

/**
 * Re-reads `NominationPools.UnbondingMembers` for every member the indexer still shows as unbonding and
 * overwrites rows that disagree with the chain. Dispatched on `EraPaid`, so drift (WAPI-2101) is bounded to
 * an era instead of lasting until the member's next withdrawal.
 */
export async function syncUnbondingEras(job: Job): Promise<void> {
    const em = await connectionManager()
    const rpc = await Rpc.getInstance()
    await rpc.ensureConnected()
    const { api } = rpc

    const members = await em.find(PoolMember, {
        where: { unbondingEras: Not(IsNull()) },
        relations: { pool: true, account: true },
    })

    const toSave: PoolMember[] = []

    for (let i = 0; i < members.length; i += BATCH_SIZE) {
        const batch = members.slice(i, i + BATCH_SIZE)
        const storage = await api.query.nominationPools.unbondingMembers.multi(
            batch.map((member) => [Number.parseInt(member.pool.id, 10), member.account.address])
        )

        batch.forEach((member, j) => {
            const eras = unbondingErasFromChain(storage[j])
            if (!sameEras(member.unbondingEras, eras)) {
                member.unbondingEras = eras
                toSave.push(member)
            }
        })

        await job.updateProgress(Math.round(((i + batch.length) / members.length) * 90))
    }

    if (toSave.length > 0) {
        await em.save(toSave)
    }

    await job.updateProgress(100)
    await job.log(`syncUnbondingEras: ${members.length} unbonding member(s) checked, ${toSave.length} corrected`)
}
