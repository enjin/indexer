import { FuelTank, FuelTankRuleSet } from '~/model'
import { connectionManager } from '~/contexts'
import { Job } from 'bullmq'
import Rpc from '~/util/rpc'
import { IsNull, Or, Equal } from 'typeorm'

function requireSignatureFromRulesJson(rules: unknown[]): string | undefined {
    for (const rule of rules) {
        if (Array.isArray(rule) && rule.length >= 2) {
            const tag = String(rule[0])
            if (tag === 'RequireSignature' || tag === 'requireSignature') {
                const v = rule[1]
                if (v !== undefined && v !== null) return typeof v === 'string' ? v : String(v)
            }
            continue
        }
        if (!rule || typeof rule !== 'object' || Array.isArray(rule)) continue
        const r = rule as Record<string, unknown>
        const v = r.requireSignature ?? r.RequireSignature
        if (v !== undefined && v !== null) {
            return typeof v === 'string' ? v : String(v)
        }
    }
    return undefined
}

function ruleSetsFromTankJson(tankJson: Record<string, unknown>): Map<number, string | undefined> {
    const sigByIndex = new Map<number, string | undefined>()
    const ruleSets = tankJson.ruleSets
    if (!Array.isArray(ruleSets)) return sigByIndex

    for (const entry of ruleSets) {
        if (!Array.isArray(entry) || entry.length < 2) continue
        const index = Number(entry[0])
        const second = entry[1]
        const rules = Array.isArray(second) ? second : (second as { rules?: unknown[] })?.rules
        if (!Array.isArray(rules)) continue
        sigByIndex.set(index, requireSignatureFromRulesJson(rules))
    }
    return sigByIndex
}

/**
 * Backfills `requireSignature` on `FuelTankRuleSet` rows where it was never stored (e.g. old createFuelTank indexing).
 * Values are read from chain storage `fuelTanks.tanks`.
 */
export async function syncFuelTankRuleSets(job: Job) {
    try {
        const em = await connectionManager()
        const { api } = await Rpc.getInstance()

        await job.updateProgress(5)

        const needingFix = await em.find(FuelTankRuleSet, {
            where: { requireSignature: Or(IsNull(), Equal('')) },
            relations: { tank: { tankAccount: true } },
        })

        const tankIds = [...new Set(needingFix.map((rs) => rs.tank.id))]
        await job.log(`Found ${needingFix.length} rule set row(s) with null requireSignature across ${tankIds.length} tank(s)`)

        if (tankIds.length === 0) {
            await job.updateProgress(100)
            return
        }

        await job.updateProgress(15)

        let tanksUpdated = 0
        let ruleSetsUpdated = 0

        for (let ti = 0; ti < tankIds.length; ti++) {
            const tankId = tankIds[ti]
            const fuelTank = await em.findOneOrFail(FuelTank, {
                where: { id: tankId },
                relations: { tankAccount: true },
            })
            const address = fuelTank.tankAccount.address

            const tankCodec = await api.query.fuelTanks.tanks(address)
            const tankJson = tankCodec.toJSON() as Record<string, unknown> | null
            if (!tankJson || !Array.isArray(tankJson.ruleSets)) {
                await job.log(`Tank ${tankId} (${address}) missing in chain or has no ruleSets, skipping`)
                continue
            }

            const sigByIndex = ruleSetsFromTankJson(tankJson)

            const rowsForTank = needingFix.filter((r) => r.tank.id === tankId)
            const toPersist: FuelTankRuleSet[] = []

            for (const row of rowsForTank) {
                const sig = sigByIndex.get(row.index)
                if (sig !== undefined) {
                    row.requireSignature = sig
                    toPersist.push(row)
                }
            }

            if (toPersist.length > 0) {
                await em.save(toPersist)
                ruleSetsUpdated += toPersist.length
                tanksUpdated++
            }

            const progress = Math.min(95, 15 + Math.floor(((ti + 1) / tankIds.length) * 80))
            await job.updateProgress(progress)
        }

        await job.log(`Updated requireSignature on ${ruleSetsUpdated} rule set(s) from ${tanksUpdated} tank(s)`)
        await job.updateProgress(100)
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error)
        const errorStack = error instanceof Error ? error.stack : undefined
        await job.log(`Error in syncFuelTankRuleSets: ${errorMessage}`)
        if (errorStack) await job.log(`Stack: ${errorStack}`)
        throw new Error(`Failed to sync fuel tank rule sets: ${errorMessage}`)
    }
}
