import { Job } from 'bullmq'
import { dataHandlerContext } from '~/contexts'
import { Account, UnbondingEras } from '~/model'
import Rpc from '~/util/rpc'

function normalizeUnbonding(x: UnbondingEras[] | null | undefined): UnbondingEras[] | null {
    if (x == null || x.length === 0) {
        return null
    }
    return x
}

function sameUnbondingList(a: UnbondingEras[] | null | undefined, b: UnbondingEras[] | null | undefined): boolean {
    const na = normalizeUnbonding(a)
    const nb = normalizeUnbonding(b)
    if (na === null && nb === null) {
        return true
    }
    if (na === null || nb === null || na.length !== nb.length) {
        return false
    }
    return na.every((x, i) => x.era === nb[i]!.era && x.balance === nb[i]!.balance)
}

type UnbondingMembersJson = {
    unbondingEras?: [number, string | number][]
}

export async function syncAccountUnbondingEras(job: Job, id: string): Promise<void> {
    const ctx = await dataHandlerContext()
    const rpc = await Rpc.getInstance()
    await rpc.ensureConnected()
    const { api } = rpc

    const account = await ctx.store.findOne(Account, {
        where: { id },
        relations: { joinedPools: { pool: true } },
    })

    if (!account) {
        throw new Error(`Account not found: ${id}`)
    }

    const members = (account.joinedPools ?? []).filter((m) => m.unbondingEras != null && m.unbondingEras.length > 0)

    if (members.length === 0) {
        await job.log(`No pool members with unbonding data for account ${id}`)
        return
    }

    let updated = 0

    for (let i = 0; i < members.length; i++) {
        const member = members[i]!
        const local = member.unbondingEras
        if (local == null || local.length === 0) {
            continue
        }

        const poolId = Number.parseInt(member.pool.id, 10)
        if (Number.isNaN(poolId)) {
            await job.log(`Skipping ${member.id}: invalid pool id ${member.pool.id}`)
            continue
        }

        await job.updateProgress(Math.round((i / members.length) * 90))

        const raw = await api.query.nominationPools.unbondingMembers(poolId, account.id)
        const json = raw.toJSON() as UnbondingMembersJson | null

        let next: UnbondingEras[] | null = null

        if (json != null && Array.isArray(json.unbondingEras)) {
            const validEras = new Set<number>()
            for (const tuple of json.unbondingEras) {
                validEras.add(Number(tuple[0]))
            }

            const kept: UnbondingEras[] = []
            for (const u of local) {
                if (validEras.has(u.era)) {
                    kept.push(new UnbondingEras({ era: u.era, balance: u.balance }))
                }
            }
            next = kept.length > 0 ? kept : null
        } else {
            next = null
        }

        if (!sameUnbondingList(member.unbondingEras, next)) {
            member.unbondingEras = next
            await ctx.store.save(member)
            updated++
            await job.log(`Updated ${member.id}: reconciled unbonding eras with chain (pool ${poolId})`)
        }
    }

    await job.updateProgress(100)
    await job.log(`syncAccountUnbondingEras done for ${id}: ${updated} pool member(s) updated`)
}
