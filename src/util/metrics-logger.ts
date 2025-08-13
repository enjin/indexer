import { Logger } from '~/util/logger'
import config from '~/util/config'
import fs from 'node:fs'
import path from 'node:path'

type EventStat = {
    count: number
    totalMs: number
    maxMs: number
}

type BatchPhaseStat = {
    name: string
    ms: number
}

let batchFrom = 0
let batchTo = 0
let batchStartMs = 0
const statsByEvent: Map<string, EventStat> = new Map()
let batchPhases: BatchPhaseStat[] = []

export function startBatchMetrics(fromHeight: number, toHeight: number) {
    batchFrom = fromHeight
    batchTo = toHeight
    batchStartMs = Date.now()
    statsByEvent.clear()
    batchPhases = []
}

export function recordEventMetric(eventName: string, durationMs: number) {
    const stat = statsByEvent.get(eventName) ?? { count: 0, totalMs: 0, maxMs: 0 }
    stat.count += 1
    stat.totalMs += durationMs
    if (durationMs > stat.maxMs) stat.maxMs = durationMs
    statsByEvent.set(eventName, stat)
}

export function recordBatchPhase(name: string, durationMs: number) {
    batchPhases.push({ name, ms: durationMs })
}

export function endBatchMetrics(log: Logger) {
    const elapsed = Date.now() - batchStartMs
    const entries = Array.from(statsByEvent.entries())
    const totalEvents = entries.reduce((sum, [, s]) => sum + s.count, 0)

    const topByCountArr = entries.sort((a, b) => b[1].count - a[1].count)
    const topByAvgArr = entries.map(([name, s]) => ({ name, avg: s.totalMs })).sort((a, b) => b.avg - a.avg)

    const topByCount = topByCountArr.map(([name, s]) => `${name}:${s.count}`).join(', ')
    const topByAvg = topByAvgArr.map(({ name, avg }) => `${name}:${avg.toFixed(1)}ms`).join(', ')

    const line = {
        batchFrom,
        batchTo,
        elapsedMs: elapsed,
        totalEvents,
        topByCount: topByCountArr.map(([name, s]) => ({ name, count: s.count })),
        topByAvg: topByAvgArr,
        processors: batchPhases,
    }

    if (config.metricsLogFile) {
        try {
            const file = path.resolve(config.metricsLogFile)
            fs.mkdirSync(path.dirname(file), { recursive: true })
            fs.appendFileSync(file, JSON.stringify(line) + '\n')
        } catch (e) {
            log.error(`Failed to write metrics file: ${e}`)
        }
    }

    log.info(
        `Batch ${batchFrom}-${batchTo} done in ${elapsed}ms | events: ${totalEvents} | top events: ${topByCount} | slowest(avg): ${topByAvg}`
    )
}
