import { Job } from 'bullmq'
import { dataHandlerContext } from '~/contexts'
import { Account, UnbondingEras } from '~/model'
import Rpc from '~/util/rpc'

type UnbondingMembersJson = {
    unbondingEras?: [number, string | number][]
}

function unbondingErasFromChain(raw: unknown): UnbondingEras[] | null {
    const opt = raw as {
        isSome?: boolean
        isNone?: boolean
        isEmpty?: boolean
        unwrap?: () => { unbondingEras: unknown[] }
        toJSON?: () => UnbondingMembersJson | null
    }

    if (opt.isSome === true && typeof opt.unwrap === 'function') {
        const pm = opt.unwrap()
        const eras = pm.unbondingEras ?? []
        if (eras.length === 0) {
            return null
        }
        const out: UnbondingEras[] = []
        for (const tuple of eras) {
            const t = tuple as [unknown, unknown]
            const eraCodec = t[0] as { toNumber?: () => number } | number
            const balCodec = t[1] as { toString?: () => string } | string | number | bigint
            const era =
                typeof eraCodec === 'object' && eraCodec != null && 'toNumber' in eraCodec && typeof eraCodec.toNumber === 'function'
                    ? eraCodec.toNumber()
                    : Number(eraCodec)
            const balance =
                typeof balCodec === 'object' && balCodec != null && 'toString' in balCodec && typeof balCodec.toString === 'function'
                    ? BigInt(balCodec.toString())
                    : BigInt(String(balCodec))
            out.push(new UnbondingEras({ era, balance }))
        }
        return out
    }

    if (opt.isNone === true || opt.isEmpty === true || opt.isSome === false) {
        return null
    }

    const json = typeof opt.toJSON === 'function' ? opt.toJSON() : null
    if (json == null || !Array.isArray(json.unbondingEras) || json.unbondingEras.length === 0) {
        return null
    }
    return json.unbondingEras.map(
        ([era, bal]) => new UnbondingEras({ era: Number(era), balance: BigInt(String(bal)) })
    )
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

    const joined = account.joinedPools ?? []
    if (joined.length === 0) {
        await job.log(`Account ${id} has no joined pools`)
        return
    }

    let saved = 0

    for (let i = 0; i < joined.length; i++) {
        const member = joined[i]!
        const poolId = Number.parseInt(member.pool.id, 10)
        if (Number.isNaN(poolId)) {
            await job.log(`Skipping ${member.id}: invalid pool id ${member.pool.id}`)
            continue
        }

        await job.updateProgress(Math.round((i / joined.length) * 90))

        const storage = await api.query.nominationPools.unbondingMembers(poolId, account.address)
        member.unbondingEras = unbondingErasFromChain(storage)

        await ctx.store.save(member)
        saved++
        await job.log(`Pool member ${member.id}: unbonding eras set from chain (pool ${poolId})`)
    }

    await job.updateProgress(100)
    await job.log(`syncAccountUnbondingEras done for ${id}: ${saved} pool member row(s) saved from RPC`)
}
