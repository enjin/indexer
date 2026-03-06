import { In } from 'typeorm'
import { connectionManager } from '~/contexts'
import { ChainInfo } from '~/model'
import { DataService } from '~/util/data'
import config from '~/util/config'
import { QueueUtils } from '~/queue'
import { createLogger } from '@subsquid/logger'

const logger = createLogger('sqd:migration:queue-missing-blocks')

const SCAN_CHUNK_SIZE = 5_000
const MAX_BLOCKS_PER_IMPORT_JOB = 100

function toContiguousRanges(numbers: number[]): Array<[number, number]> {
    if (numbers.length === 0) return []

    const ranges: Array<[number, number]> = []
    let start = numbers[0]
    let end = numbers[0]

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] === end + 1) {
            end = numbers[i]
        } else {
            ranges.push([start, end])
            start = numbers[i]
            end = numbers[i]
        }
    }
    ranges.push([start, end])
    return ranges
}

function splitRange(from: number, to: number, maxSize: number): Array<[number, number]> {
    const result: Array<[number, number]> = []
    let current = from
    while (current <= to) {
        const end = Math.min(current + maxSize - 1, to)
        result.push([current, end])
        current = end + 1
    }
    return result
}

/**
 * Passively queues import jobs for any blocks missing from ChainInfo in the range
 * [fromBlock, lastBlockNumber]. Runs without blocking; intended to be called at startup.
 */
export async function queueMissingBlocks(): Promise<void> {
    const dataService = DataService.getInstance()
    const fromBlock = config.dataSource.fromBlock
    const lastBlockNumber = dataService.lastBlockNumber

    if (lastBlockNumber <= fromBlock) {
        logger.info(`No block range to scan (fromBlock=${fromBlock}, lastBlockNumber=${lastBlockNumber})`)
        return
    }

    const em = await connectionManager()
    const chainInfoRepo = em.getRepository(ChainInfo)

    let totalMissing = 0
    let jobsDispatched = 0

    for (let chunkStart = fromBlock; chunkStart <= lastBlockNumber; chunkStart += SCAN_CHUNK_SIZE) {
        logger.info(`Scanning block range [${chunkStart}, ${lastBlockNumber}]`)
        const chunkEnd = Math.min(chunkStart + SCAN_CHUNK_SIZE - 1, lastBlockNumber)
        const blockNumbers = Array.from({ length: chunkEnd - chunkStart + 1 }, (_, i) => chunkStart + i)

        const existing = await chainInfoRepo.find({
            where: { blockNumber: In(blockNumbers) },
            select: ['blockNumber'],
        })
        const existingSet = new Set(existing.map((row) => row.blockNumber))
        const missing = blockNumbers.filter((n) => !existingSet.has(n))

        if (missing.length === 0) continue

        totalMissing += missing.length
        const ranges = toContiguousRanges(missing)

        for (const [rangeFrom, rangeTo] of ranges) {
            const subRanges = splitRange(rangeFrom, rangeTo, MAX_BLOCKS_PER_IMPORT_JOB)
            for (const [subFrom, subTo] of subRanges) {
                await QueueUtils.dispatchImportBlock(subFrom, subTo)
                jobsDispatched++
            }
        }
    }

    if (totalMissing > 0) {
        logger.info(
            `Queued ${jobsDispatched} import job(s) for ${totalMissing} missing blocks in range [${fromBlock}, ${lastBlockNumber}]`
        )
    } else {
        logger.debug(`No missing blocks in range [${fromBlock}, ${lastBlockNumber}]`)
    }
}
