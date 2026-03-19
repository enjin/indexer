import { FuelTank, FuelTankRuleSet, PermittedExtrinsics } from '~/model'
import { connectionManager } from '~/contexts'
import { Job } from 'bullmq'
import Rpc from '~/util/rpc'
import { rulesToMap } from '~/pallet/fuel-tanks/utils'
import type { DispatchRuleDescriptor } from '~/pallet/common/types'

function num(
    v: { toNumber?: () => number; toString?: () => string } | number | bigint | null | undefined
): number {
    if (v == null) return 0
    if (typeof v === 'number') return Number.isFinite(v) ? v : 0
    if (typeof v === 'bigint') {
        const n = Number(v)
        return Number.isFinite(n) ? n : 0
    }
    if (typeof v === 'object' && typeof (v as { toNumber?: () => number }).toNumber === 'function') {
        const n = (v as { toNumber: () => number }).toNumber()
        return Number.isFinite(n) ? n : 0
    }
    const n = Number(String(v))
    return Number.isFinite(n) ? n : 0
}

/** Safe for RPC/JSON: missing or invalid values become 0n so sync does not throw. */
function big(v: { toString?: () => string } | bigint | number | string | null | undefined): bigint {
    if (typeof v === 'bigint') return v
    if (v == null) return 0n
    if (typeof v === 'number') {
        if (!Number.isFinite(v)) return 0n
        return BigInt(Math.trunc(v))
    }
    const s = String(v).trim()
    if (s === '' || s === 'undefined' || s === 'null' || s === 'NaN') return 0n
    try {
        return BigInt(s)
    } catch {
        return 0n
    }
}

function asPlainTank(chainTank: unknown): Record<string, unknown> {
    if (chainTank && typeof (chainTank as { toJSON?: () => unknown }).toJSON === 'function') {
        const j = (chainTank as { toJSON: () => unknown }).toJSON()
        if (j && typeof j === 'object') return j as Record<string, unknown>
    }
    return chainTank as Record<string, unknown>
}

/**
 * Substrate storage JSON: rules are a map of variant → payload, e.g.
 * `{ "RequireSignature": { "requireSignature": "0x..." }, "UserFuelBudget": { "userFuelBudget": { "budget": {...} } } }`
 * (often only one key per rule set).
 */
function jsonVariantToDescriptor(kind: string, raw: unknown): DispatchRuleDescriptor {
    const v = (raw && typeof raw === 'object' ? raw : {}) as Record<string, unknown>

    switch (kind) {
        case 'RequireSignature': {
            const inner = (v.requireSignature ?? v) as string
            return { __kind: 'RequireSignature', value: String(inner) }
        }
        case 'UserFuelBudget': {
            const ub = (v.userFuelBudget ?? v) as Record<string, unknown>
            const budget = (ub.budget ?? ub) as Record<string, unknown>
            const amount = budget.amount ?? ub.amount ?? v.amount
            const resetPeriod = budget.resetPeriod ?? ub.resetPeriod ?? v.resetPeriod
            return {
                __kind: 'UserFuelBudget',
                value: {
                    amount: big(amount as string),
                    resetPeriod: num(resetPeriod as number),
                },
            }
        }
        case 'TankFuelBudget': {
            const tb = (v.tankFuelBudget ?? v) as Record<string, unknown>
            const budget = (tb.budget ?? tb) as Record<string, unknown>
            const amount = budget.amount ?? tb.amount ?? v.amount
            const resetPeriod = budget.resetPeriod ?? tb.resetPeriod ?? v.resetPeriod
            return {
                __kind: 'TankFuelBudget',
                value: {
                    amount: big(amount as string),
                    resetPeriod: num(resetPeriod as number),
                },
            }
        }
        case 'WhitelistedCallers': {
            const arr = (Array.isArray(v) ? v : ((v.value as string[]) ?? [])) as string[]
            return { __kind: 'WhitelistedCallers', value: arr.map(String) }
        }
        case 'WhitelistedCollections': {
            const arr = (Array.isArray(v) ? v : ((v.value as unknown[]) ?? [])) as unknown[]
            return { __kind: 'WhitelistedCollections', value: arr.filter((c) => c != null).map((c) => big(String(c))) }
        }
        case 'WhitelistedPallets': {
            const arr = (Array.isArray(v) ? v : ((v.value as unknown[]) ?? [])) as {
                type?: string
                value?: { type?: string }
            }[]
            return {
                __kind: 'WhitelistedPallets',
                value: arr.map((p) => ({
                    __kind: (p.type ?? 'Unknown').charAt(0).toUpperCase() + (p.type ?? 'unknown').slice(1),
                    value: {
                        __kind: (p.value?.type ?? 'Unknown').charAt(0).toUpperCase() + (p.value?.type ?? 'x').slice(1),
                    },
                })),
            }
        }
        case 'MaxFuelBurnPerTransaction': {
            const inner = (v.value ?? v.maxFuelBurnPerTransaction ?? v) as string | undefined
            return { __kind: 'MaxFuelBurnPerTransaction', value: big(inner) }
        }
        case 'RequireToken': {
            const inner = (v.value ?? v.requireToken ?? v) as Record<string, unknown> | undefined
            const tok = (inner ?? v) as Record<string, unknown>
            const tokenId = tok.tokenId ?? tok.token_id
            const collectionId = tok.collectionId ?? tok.collection_id
            return {
                __kind: 'RequireToken',
                value: {
                    tokenId: big(tokenId as string),
                    collectionId: big(collectionId as string),
                },
            }
        }
        case 'PermittedCalls': {
            const arr = (Array.isArray(v) ? v : ((v.value as string[]) ?? [])) as string[]
            return { __kind: 'PermittedCalls', value: arr.map(String) }
        }
        case 'PermittedExtrinsics': {
            const arr = (Array.isArray(v) ? v : ((v.value as unknown[]) ?? [])) as {
                type?: string
                value?: { type?: string }
            }[]
            return {
                __kind: 'PermittedExtrinsics',
                value: arr.map((call) => ({
                    __kind: (call.type ?? 'X').charAt(0).toUpperCase() + (call.type ?? 'x').slice(1),
                    value: {
                        __kind: (call.value?.type ?? 'X').charAt(0).toUpperCase() + (call.value?.type ?? 'x').slice(1),
                    },
                })),
            }
        }
        case 'MinimumInfusion': {
            const inner = (v.value ?? v.minimumInfusion ?? v) as string | undefined
            return { __kind: 'MinimumInfusion', value: big(inner) }
        }
        default:
            throw new Error(`Unknown dispatch rule variant in storage JSON: ${kind}`)
    }
}

function rulesFieldToDescriptors(rules: unknown): DispatchRuleDescriptor[] {
    if (rules == null) return []
    if (Array.isArray(rules)) {
        if (rules.length === 0) return []
        const first = rules[0] as { type?: string }
        if (typeof first?.type === 'string' && !first.type.match(/^[A-Z]/)) {
            return rules.map((r) => ruleCodecToDescriptor(r as { type: string; value: unknown }))
        }
        return rules.flatMap((r) => {
            if (r && typeof r === 'object' && !Array.isArray(r)) {
                const o = r as Record<string, unknown>
                const keys = Object.keys(o)
                if (keys.length === 1 && /^[A-Z]/.test(keys[0])) {
                    return [jsonVariantToDescriptor(keys[0], o[keys[0]])]
                }
            }
            return []
        })
    }
    if (typeof rules === 'object') {
        return Object.entries(rules as Record<string, unknown>).map(([k, val]) => jsonVariantToDescriptor(k, val))
    }
    return []
}

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
            throw new Error(`Unknown fuel tank dispatch rule type from RPC codec: ${t}`)
    }
}

function tankRuleSetEntries(chainTank: unknown): Array<{ index: number; descriptors: DispatchRuleDescriptor[] }> {
    const tank = asPlainTank(chainTank)
    const rs = tank.ruleSets
    if (rs == null) return []

    if (!Array.isArray(rs) && typeof rs === 'object') {
        return Object.entries(rs as Record<string, unknown>)
            .filter(([k]) => /^\d+$/.test(k))
            .map(([k, desc]) => {
                const d = desc as { rules?: unknown }
                return {
                    index: Number(k),
                    descriptors: rulesFieldToDescriptors(d.rules ?? desc),
                }
            })
            .sort((a, b) => a.index - b.index)
    }

    if (Array.isArray(rs)) {
        const out: Array<{ index: number; descriptors: DispatchRuleDescriptor[] }> = []
        for (const tuple of rs) {
            if (!Array.isArray(tuple) || tuple.length < 2) continue
            const index = Number(tuple[0])
            const second = tuple[1] as { rules?: unknown }
            const rules = second.rules !== undefined && second.rules !== null ? second.rules : second
            let descriptors: DispatchRuleDescriptor[]
            if (Array.isArray(rules) && rules.length > 0) {
                const first = rules[0] as { type?: string }
                if (typeof first?.type === 'string' && first.type[0] === first.type[0].toLowerCase()) {
                    descriptors = rules.map((r) => ruleCodecToDescriptor(r as { type: string; value: unknown }))
                } else {
                    descriptors = rulesFieldToDescriptors(rules)
                }
            } else {
                descriptors = rulesFieldToDescriptors(rules)
            }
            out.push({ index, descriptors })
        }
        return out
    }

    return []
}

export type SyncFuelTankRuleSetsJobData = {
    /** When set, only this tank. When omitted, every `FuelTank` in the DB is synced. */
    tankId?: string
}

export async function syncFuelTankRuleSets(job: Job<SyncFuelTankRuleSetsJobData>) {
    try {
        const em = await connectionManager()
        const { api } = await Rpc.getInstance()
        const tankIdFilter = job.data?.tankId?.trim() || undefined

        await job.updateProgress(5)

        let tanks: FuelTank[]
        if (tankIdFilter) {
            const one = await em.findOne(FuelTank, {
                where: { id: tankIdFilter },
                relations: { tankAccount: true },
            })
            if (!one) {
                throw new Error(`Fuel tank not found: ${tankIdFilter}`)
            }
            tanks = [one]
            await job.log(`Syncing rule sets from chain for tank ${tankIdFilter}`)
        } else {
            tanks = await em.find(FuelTank, { relations: { tankAccount: true } })
            await job.log(`Syncing rule sets from chain for all ${tanks.length} fuel tank(s)`)
        }

        if (tanks.length === 0) {
            await job.updateProgress(100)
            return
        }

        const slice = 90 / tanks.length
        let totalRuleSetsSynced = 0

        for (let ti = 0; ti < tanks.length; ti++) {
            const fuelTank = tanks[ti]
            const tankId = fuelTank.id
            const address = fuelTank.tankAccount.address
            const progressBase = 5 + ti * slice

            if (tanks.length > 1) {
                await job.log(`Tank ${ti + 1}/${tanks.length}: ${tankId}`)
            }

            const opt = await api.query.fuelTanks.tanks(address)
            const codec = opt as unknown as {
                isNone?: boolean
                isEmpty?: boolean
                unwrap: () => unknown
            }
            if (codec.isNone || codec.isEmpty) {
                await job.log(`Tank ${tankId} not in chain storage, skipping`)
                await job.updateProgress(Math.min(95, progressBase + slice))
                continue
            }

            const entries = tankRuleSetEntries(codec.unwrap())
            if (entries.length === 0) {
                await job.log(`Tank ${tankId} has no rule sets on chain, skipping`)
                await job.updateProgress(Math.min(95, progressBase + slice))
                continue
            }

            const inner = entries.length

            for (let i = 0; i < entries.length; i++) {
                const { index: setIndex, descriptors } = entries[i]
                const ruleSetId = `${tankId}-${setIndex}`

                if (descriptors.length === 0) {
                    await job.log(`Rule set ${ruleSetId}: no rules decoded, skipping`)
                    await job.updateProgress(Math.min(95, progressBase + ((i + 1) / inner) * slice))
                    continue
                }

                let mapped: ReturnType<typeof rulesToMap>
                try {
                    mapped = rulesToMap(ruleSetId, descriptors)
                } catch (e) {
                    await job.log(
                        `Rule set ${ruleSetId}: rulesToMap failed (${e instanceof Error ? e.message : String(e)}), skipping`
                    )
                    await job.updateProgress(Math.min(95, progressBase + ((i + 1) / inner) * slice))
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
                } = mapped

                const ruleSet = new FuelTankRuleSet({
                    id: ruleSetId,
                    index: setIndex,
                    isPermittedExtrinsicsEmpty: permittedExtrinsics === undefined || permittedExtrinsics.length === 0,
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
                totalRuleSetsSynced++

                await job.updateProgress(Math.min(95, progressBase + ((i + 1) / inner) * slice))
            }
        }

        await job.log(
            tankIdFilter
                ? `Done: ${totalRuleSetsSynced} rule set(s) for tank ${tankIdFilter}`
                : `Done: ${totalRuleSetsSynced} rule set(s) across ${tanks.length} tank(s)`
        )
        await job.updateProgress(100)
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error)
        const errorStack = error instanceof Error ? error.stack : undefined
        await job.log(`Error in syncFuelTankRuleSets: ${errorMessage}`)
        if (errorStack) await job.log(`Stack: ${errorStack}`)
        throw new Error(`Failed to sync fuel tank rule sets: ${errorMessage}`)
    }
}
