import { Job } from 'bullmq'
import { dataHandlerContext } from '~/contexts'
import { Account, UnbondingEras } from '~/model'
import { unbondingErasFromPoints } from '~/pallet/nomination-pools/processors/unbonding-eras'
import { SubPools, UnbondPool } from '~/pallet/nomination-pools/storage/types'
import Rpc from '~/util/rpc'

type OptionCodec = {
    isSome?: boolean
    isNone?: boolean
    isEmpty?: boolean
    unwrap?: () => unknown
    toJSON?: () => unknown
}

/** The value inside a polkadot.js `Option`, or `undefined` for `None`. Falls back to `toJSON` for plain values. */
function unwrapOption(raw: unknown): Record<string, unknown> | undefined {
    const opt = raw as OptionCodec | null | undefined
    if (opt == null || opt.isNone === true || opt.isEmpty === true || opt.isSome === false) {
        return undefined
    }
    if (opt.isSome === true && typeof opt.unwrap === 'function') {
        return opt.unwrap() as Record<string, unknown>
    }
    const json = typeof opt.toJSON === 'function' ? opt.toJSON() : raw
    return json == null ? undefined : (json as Record<string, unknown>)
}

/** `[key, value]` pairs of a `BTreeMap`: a polkadot.js `Map`, its `toJSON` object, or a list of tuples. */
function entriesOf(value: unknown): [unknown, unknown][] {
    if (value == null) return []
    if (Array.isArray(value)) return value as [unknown, unknown][]
    if (value instanceof Map) return [...(value as Map<unknown, unknown>).entries()]
    return Object.entries(value as Record<string, unknown>)
}

// Codec `toString` is decimal; `toJSON` renders a `u128` as a number or a hex string. `BigInt` parses all of them.
const toBigInt = (value: unknown): bigint => BigInt(String(value))
const toEra = (value: unknown): number => Number(String(value))

/** `NominationPools.UnbondingMembers` as `[era, points]` pairs. */
export function unbondingPointsFromChain(raw: unknown): [number, bigint][] {
    const member = unwrapOption(raw)
    return entriesOf(member?.unbondingEras).map(([era, points]) => [toEra(era), toBigInt(points)])
}

/** `NominationPools.SubPoolsStorage` for a pool, `undefined` when the pool has none. */
export function subPoolsFromChain(raw: unknown): SubPools | undefined {
    const subPools = unwrapOption(raw)
    if (subPools?.noEra == null) {
        return undefined
    }

    const pool = (value: unknown): UnbondPool => {
        const { points, balance } = value as { points: unknown; balance: unknown }
        return { points: toBigInt(points), balance: toBigInt(balance) }
    }

    return {
        noEra: pool(subPools.noEra),
        withEra: entriesOf(subPools.withEra).map(([era, value]) => [toEra(era), pool(value)]),
    }
}

/**
 * A member's unbonding chunks from RPC, converted to ENJ exactly as the processors do (`unbondingErasFromPoints`).
 * `unbonding` and `subPools` must be read at the same block hash.
 */
export function unbondingErasFromChain(unbonding: unknown, subPools: unknown): UnbondingEras[] | null {
    return unbondingErasFromPoints(unbondingPointsFromChain(unbonding), subPoolsFromChain(subPools))
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

    // Read every pool at one block so the unbonding points and the sub-pools they are priced against agree.
    const apiAt = await api.at(await api.rpc.chain.getFinalizedHead())
    let saved = 0

    for (let i = 0; i < joined.length; i++) {
        const member = joined[i]!
        const poolId = Number.parseInt(member.pool.id, 10)
        if (Number.isNaN(poolId)) {
            await job.log(`Skipping ${member.id}: invalid pool id ${member.pool.id}`)
            continue
        }

        await job.updateProgress(Math.round((i / joined.length) * 90))

        const [unbonding, subPools] = await Promise.all([
            apiAt.query.nominationPools.unbondingMembers(poolId, account.address),
            apiAt.query.nominationPools.subPoolsStorage(poolId),
        ])
        member.unbondingEras = unbondingErasFromChain(unbonding, subPools)

        await ctx.store.save(member)
        saved++
        await job.log(`Pool member ${member.id}: unbonding eras set from chain (pool ${poolId})`)
    }

    await job.updateProgress(100)
    await job.log(`syncAccountUnbondingEras done for ${id}: ${saved} pool member row(s) saved from RPC`)
}
