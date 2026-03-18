import { FuelTank, FuelTankRuleSet, PermittedExtrinsics } from '~/model'
import { connectionManager } from '~/contexts'
import { Job } from 'bullmq'
import Rpc from '~/util/rpc'
import { rulesToMap } from '~/pallet/fuel-tanks/utils'
import type { DispatchRuleDescriptor } from '~/pallet/common/types'

function num(v: { toNumber?: () => number; toString?: () => string } | number | bigint): number {
    if (typeof v === 'number') return v
    if (typeof v === 'bigint') return Number(v)
    if (v && typeof (v as { toNumber?: () => number }).toNumber === 'function') {
        return (v as { toNumber: () => number }).toNumber()
    }
    return Number((v as { toString: () => string }).toString())
}

function big(v: { toString?: () => string } | bigint | number | string): bigint {
    if (typeof v === 'bigint') return v
    return BigInt(String(v))
}

/**
 * Polkadot codec for a single dispatch rule enum → indexer `DispatchRuleDescriptor`.
 */
function ruleCodecToDescriptor(rule: { type: string; value: unknown }): DispatchRuleDescriptor {
    const t = rule.type
    const v = rule.value as Record<string, unknown> & { type?: string; toHex?: () => string; toString?: () => string }

    switch (t) {
        case 'whitelistedCallers':
            return {
                __kind: 'WhitelistedCallers',
                value: [...(v as unknown as Iterable<{ toString: () => string }>)].map((a) => a.toString()),
            }
        case 'whitelistedCollections':
            return {
                __kind: 'WhitelistedCollections',
                value: [...(v as unknown as Iterable<{ toString: () => string }>)].map((c) => big(c.toString())),
            }
        case 'whitelistedPallets':
            return {
                __kind: 'WhitelistedPallets',
                value: [...(v as unknown as Iterable<{ type: string; value: { type: string } }>)].map((p) => ({
                    __kind: p.type.charAt(0).toUpperCase() + p.type.slice(1),
                    value: {
                        __kind: p.value.type.charAt(0).toUpperCase() + p.value.type.slice(1),
                    },
                })),
            }
        case 'maxFuelBurnPerTransaction':
            return { __kind: 'MaxFuelBurnPerTransaction', value: big(v as { toString: () => string }) }
        case 'userFuelBudget':
            return {
                __kind: 'UserFuelBudget',
                value: {
                    amount: big((v as { amount: { toString: () => string } }).amount),
                    resetPeriod: num(
                        (v as { resetPeriod: number | bigint | { toNumber?: () => number; toString?: () => string } })
                            .resetPeriod
                    ),
                },
            }
        case 'tankFuelBudget':
            return {
                __kind: 'TankFuelBudget',
                value: {
                    amount: big((v as { amount: { toString: () => string } }).amount),
                    resetPeriod: num(
                        (v as { resetPeriod: number | bigint | { toNumber?: () => number; toString?: () => string } })
                            .resetPeriod
                    ),
                },
            }
        case 'requireToken':
            return {
                __kind: 'RequireToken',
                value: {
                    tokenId: big((v as { tokenId: { toString: () => string } }).tokenId),
                    collectionId: big((v as { collectionId: { toString: () => string } }).collectionId),
                },
            }
        case 'requireSignature': {
            const bytes = v as { toHex?: () => string }
            return {
                __kind: 'RequireSignature',
                value: (typeof bytes.toHex === 'function' ? bytes.toHex() : String(v)) as string,
            }
        }
        case 'permittedCalls':
            return {
                __kind: 'PermittedCalls',
                value: [...(v as unknown as Iterable<{ toHex?: () => string; toString: () => string }>)].map((b) =>
                    typeof b.toHex === 'function' ? b.toHex()! : b.toString()
                ),
            }
        case 'permittedExtrinsics':
            return {
                __kind: 'PermittedExtrinsics',
                value: [...(v as unknown as Iterable<{ type: string; value: { type: string } }>)].map((call) => ({
                    __kind: call.type.charAt(0).toUpperCase() + call.type.slice(1),
                    value: {
                        __kind: call.value.type.charAt(0).toUpperCase() + call.value.type.slice(1),
                    },
                })),
            }
        case 'minimumInfusion':
            return { __kind: 'MinimumInfusion', value: big(v as { toString: () => string }) }
        default:
            throw new Error(`Unknown fuel tank dispatch rule type from RPC: ${t}`)
    }
}

function descriptorsFromRuleCodecs(rules: Iterable<{ type: string; value: unknown }>): DispatchRuleDescriptor[] {
    return [...rules].map((r) => ruleCodecToDescriptor(r))
}

function iterTankRuleSets(tank: { ruleSets: { length: number; [i: number]: unknown } }): Array<{
    index: number
    rules: Iterable<{ type: string; value: unknown }>
}> {
    const out: Array<{ index: number; rules: Iterable<{ type: string; value: unknown }> }> = []
    const rs = tank.ruleSets
    if (!rs?.length) return out

    for (let i = 0; i < rs.length; i++) {
        const tuple = rs[i] as unknown[]
        if (!Array.isArray(tuple) || tuple.length < 2) continue
        const idx0 = tuple[0] as { toNumber?: () => number }
        const index = typeof idx0?.toNumber === 'function' ? idx0.toNumber() : Number(tuple[0])
        const second = tuple[1] as { rules?: Iterable<{ type: string; value: unknown }> }
        const rules = second.rules !== undefined && second.rules !== null ? second.rules : (second as Iterable<{ type: string; value: unknown }>)
        if (!rules || typeof (rules as { length?: number }).length !== 'number') continue
        out.push({ index, rules: rules as Iterable<{ type: string; value: unknown }> })
    }
    return out
}

export type SyncFuelTankRuleSetsJobData = {
    /** Fuel tank account id (`FuelTank.id`). Omit to sync every tank in the DB. */
    tankId?: string
}

/**
 * Reads `fuelTanks.tanks` over RPC and overwrites indexed rule sets in the DB (same fields as `ruleSetInserted`).
 * Does not filter by missing fields — always applies chain state.
 */
export async function syncFuelTankRuleSets(job: Job<SyncFuelTankRuleSetsJobData>) {
    try {
        const em = await connectionManager()
        const { api } = await Rpc.getInstance()
        const tankIdFilter = job.data?.tankId?.trim() || undefined

        await job.updateProgress(5)

        let tanks: FuelTank[]
        if (tankIdFilter) {
            const t = await em.findOne(FuelTank, {
                where: { id: tankIdFilter },
                relations: { tankAccount: true },
            })
            if (!t) {
                throw new Error(`Fuel tank not found: ${tankIdFilter}`)
            }
            tanks = [t]
        } else {
            tanks = await em.find(FuelTank, { relations: { tankAccount: true } })
        }

        await job.log(`Syncing rule sets from chain for ${tanks.length} fuel tank(s)`)

        let ruleSetsSynced = 0
        let tanksTouched = 0

        for (let ti = 0; ti < tanks.length; ti++) {
            const fuelTank = tanks[ti]
            const tankId = fuelTank.id
            const address = fuelTank.tankAccount.address

            const opt = await api.query.fuelTanks.tanks(address)
            const codec = opt as unknown as {
                isNone?: boolean
                isEmpty?: boolean
                unwrap: () => { ruleSets: { length: number; [i: number]: unknown } }
            }
            if (codec.isNone || codec.isEmpty) {
                await job.log(`Tank ${tankId} not in chain storage, skipping`)
                continue
            }

            const chainTank = codec.unwrap()
            const entries = iterTankRuleSets(chainTank)
            if (entries.length === 0) {
                await job.log(`Tank ${tankId} has no rule sets on chain, skipping`)
                continue
            }

            for (const { index: setIndex, rules } of entries) {
                const ruleSetId = `${tankId}-${setIndex}`
                let descriptors: DispatchRuleDescriptor[]
                try {
                    descriptors = descriptorsFromRuleCodecs(rules)
                } catch (e) {
                    await job.log(
                        `Rule set ${ruleSetId}: failed to decode rules (${e instanceof Error ? e.message : String(e)}), skipping`
                    )
                    continue
                }

                const [pE, existing] = await Promise.all([
                    em.find(PermittedExtrinsics, { where: { ruleSet: { id: ruleSetId } } }),
                    em.findOne(FuelTankRuleSet, { where: { id: ruleSetId } }),
                ])
                await em.remove(pE)

                const {
                    whitelistedCallers,
                    whitelistedCollections,
                    whitelistedPallets,
                    maxFuelBurnPerTransaction,
                    userFuelBudget,
                    tankFuelBudget,
                    requireToken,
                    permittedCalls,
                    permittedExtrinsics,
                    requireSignature,
                    minimumInfusion,
                } = rulesToMap(ruleSetId, descriptors)

                const ruleSet = new FuelTankRuleSet({
                    id: ruleSetId,
                    index: setIndex,
                    isPermittedExtrinsicsEmpty:
                        permittedExtrinsics === undefined || permittedExtrinsics.length === 0,
                    isPermittedExtrinsicsNull: permittedExtrinsics === undefined,
                    tank: new FuelTank({ id: tankId }),
                    isFrozen: existing?.isFrozen ?? false,
                    whitelistedCallers,
                    whitelistedCollections,
                    whitelistedPallets,
                    maxFuelBurnPerTransaction,
                    userFuelBudget,
                    tankFuelBudget,
                    requireToken,
                    permittedCalls,
                    minimumInfusion,
                    requireSignature,
                })
                await em.save(ruleSet)
                if (permittedExtrinsics?.length) {
                    await em.save(permittedExtrinsics)
                }
                ruleSetsSynced++
            }
            tanksTouched++

            const progress = Math.min(95, 5 + Math.floor(((ti + 1) / tanks.length) * 90))
            await job.updateProgress(progress)
        }

        await job.log(`Synced ${ruleSetsSynced} rule set(s) from ${tanksTouched} tank(s)`)
        await job.updateProgress(100)
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error)
        const errorStack = error instanceof Error ? error.stack : undefined
        await job.log(`Error in syncFuelTankRuleSets: ${errorMessage}`)
        if (errorStack) await job.log(`Stack: ${errorStack}`)
        throw new Error(`Failed to sync fuel tank rule sets: ${errorMessage}`)
    }
}
