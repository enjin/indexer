import { EntityManager, In } from 'typeorm'
import { NominationPool, PoolValidator, Validator } from '~/model'
import { decodePoolId } from '~/pallet/nomination-pools/pool-account'
import { decodeAddress } from '~/util/tools'

export type ChainNominations = Map<string, string[]> // nominator stash (hex) -> validator stashes (hex)

/**
 * Reconciles PoolValidator rows with on-chain `Staking.Nominators` of each pool's bonded account. It repairs pool
 * validator sets that changed without a `NominationPools.Nominated` event (validator kicks, chills) before those
 * events were indexed, and removes Validator rows that were created for pool bonded accounts on pool chill.
 */
export async function syncPoolValidators(em: EntityManager, palletId: string, chainNominations: ChainNominations) {
    const targetsByPool = new Map<string, string[]>()
    for (const [nominator, targets] of chainNominations) {
        const poolId = decodePoolId(palletId, nominator)
        if (poolId !== undefined) targetsByPool.set(poolId, targets)
    }

    const pools = await em.getRepository(NominationPool).find({ select: { id: true } })
    const poolValidators = await em.getRepository(PoolValidator).find({ relations: { pool: true, validator: true } })

    const stale = poolValidators.filter((pv) => !(targetsByPool.get(pv.pool.id) ?? []).includes(pv.validator.id))
    if (stale.length > 0) await em.remove(stale)

    const existing = new Set(poolValidators.map((pv) => pv.id))
    const wanted = pools.flatMap((pool) =>
        (targetsByPool.get(pool.id) ?? []).map((validatorId) => ({ poolId: pool.id, validatorId }))
    )
    const missing = wanted.filter(({ poolId, validatorId }) => !existing.has(`${poolId}-${validatorId}`))

    let added = 0
    if (missing.length > 0) {
        // Only link validators that are already indexed; unknown ones are picked up by the processor on next nominate.
        const knownValidators = await em
            .getRepository(Validator)
            .find({ select: { id: true }, where: { id: In([...new Set(missing.map((m) => m.validatorId))]) } })
        const known = new Set(knownValidators.map((v) => v.id))
        const toInsert = missing
            .filter((m) => known.has(m.validatorId))
            .map(
                ({ poolId, validatorId }) =>
                    new PoolValidator({
                        id: `${poolId}-${validatorId}`,
                        pool: new NominationPool({ id: poolId }),
                        validator: new Validator({ id: validatorId }),
                    })
            )
        if (toInsert.length > 0) await em.save(toInsert)
        added = toInsert.length
    }

    const validators = await em.getRepository(Validator).find({ select: { id: true } })
    const poolAccountValidators = validators.filter((v) => decodePoolId(palletId, v.id) !== undefined)
    if (poolAccountValidators.length > 0) await em.remove(poolAccountValidators)

    return { removed: stale.length, added, removedPoolAccountValidators: poolAccountValidators.length }
}

export function toChainNominations(entries: [{ args: { toString(): string }[] }, { toString(): string }][]) {
    const chainNominations: ChainNominations = new Map()
    for (const [storageKey, nominations] of entries) {
        const raw = nominations.toString()
        if (!raw) continue
        const targets = (JSON.parse(raw) as { targets?: string[] } | null)?.targets ?? []
        chainNominations.set(
            decodeAddress(storageKey.args[0].toString()),
            targets.map((target) => decodeAddress(target))
        )
    }
    return chainNominations
}
