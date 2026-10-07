import { Job } from 'bullmq'
import { connectionManager } from '~/contexts'
import { ChainInfo } from '~/model'
import { JobsEnum } from '~/queue/constants'
import ValidatorsQueue from '~/queue/validators/validators.queue'
import Rpc from '~/util/rpc'

const BATCH_SIZE = 32
const DEFAULT_BLOCK_SPAN = 10_000

export type BackfillChainFinalityData = {
    fromBlock?: number
    toBlock?: number
    blockSpan?: number
}

/** Repair old ChainInfo.finalized values without trusting block height alone for orphaned hashes. */
export async function backfillChainFinality(job: Job<BackfillChainFinalityData>): Promise<void> {
    const { fromBlock, toBlock } = job.data ?? {}
    const { api } = await Rpc.getInstance()
    const finalizedHead = await api.rpc.chain.getFinalizedHead()
    const finalizedHeight = (await api.rpc.chain.getHeader(finalizedHead)).number.toNumber()
    const genesisHash = api.genesisHash.toString()

    if (fromBlock === undefined && toBlock === undefined) {
        await dispatchRanges(job, finalizedHeight, genesisHash)
        return
    }
    if (
        typeof fromBlock !== 'number' ||
        typeof toBlock !== 'number' ||
        !Number.isSafeInteger(fromBlock) ||
        !Number.isSafeInteger(toBlock) ||
        fromBlock < 0 ||
        fromBlock > toBlock
    ) {
        throw new Error('backfillChainFinality requires a valid inclusive fromBlock/toBlock range')
    }

    const upper = Math.min(toBlock, finalizedHeight)
    if (fromBlock > upper) return

    const em = await connectionManager()
    let cursorHeight = fromBlock - 1
    let cursorId = ''
    let updated = 0
    let nonCanonical = 0

    while (true) {
        const rows = await em
            .getRepository(ChainInfo)
            .createQueryBuilder('block')
            .where('block.block_number BETWEEN :fromBlock AND :upper', { fromBlock, upper })
            .andWhere('block.genesis_hash = :genesisHash', { genesisHash })
            .andWhere('block.finalized IS NOT TRUE')
            .andWhere(
                '(block.block_number > :cursorHeight OR (block.block_number = :cursorHeight AND block.id > :cursorId))',
                {
                    cursorHeight,
                    cursorId,
                }
            )
            .orderBy('block.block_number', 'ASC')
            .addOrderBy('block.id', 'ASC')
            .take(BATCH_SIZE)
            .getMany()

        if (rows.length === 0) break

        const hashes = await Promise.all(rows.map((row) => api.rpc.chain.getBlockHash(row.blockNumber)))
        const canonical = rows.filter((row, index) => row.blockHash === hashes[index].toString())
        nonCanonical += rows.length - canonical.length
        for (const row of canonical) row.finalized = true
        await em.save(canonical)
        updated += canonical.length

        const last = rows[rows.length - 1]
        cursorHeight = last.blockNumber
        cursorId = last.id
    }

    await job.log(`Checked blocks ${fromBlock}–${upper}: finalized ${updated}, non-canonical ${nonCanonical}`)
    await job.updateProgress(100)
}

async function dispatchRanges(
    job: Job<BackfillChainFinalityData>,
    finalizedHeight: number,
    genesisHash: string
): Promise<void> {
    const requestedSpan = job.data?.blockSpan
    const blockSpan =
        typeof requestedSpan === 'number' && Number.isSafeInteger(requestedSpan) && requestedSpan > 0
            ? Math.min(requestedSpan, 100_000)
            : DEFAULT_BLOCK_SPAN
    const em = await connectionManager()
    const bounds = await em.query<{ min: string | null; max: string | null }[]>(
        `SELECT MIN(block_number)::text AS min, MAX(block_number)::text AS max
         FROM chain_info WHERE finalized IS NOT TRUE AND block_number <= $1 AND genesis_hash = $2`,
        [finalizedHeight, genesisHash]
    )
    const min = Number(bounds[0]?.min)
    const max = Number(bounds[0]?.max)
    if (bounds[0]?.min == null || bounds[0]?.max == null || !Number.isSafeInteger(min) || !Number.isSafeInteger(max)) {
        await job.log('No stale ChainInfo finality values to repair')
        return
    }

    let dispatched = 0
    for (let start = min; start <= max; start += blockSpan) {
        const end = Math.min(max, start + blockSpan - 1)
        await ValidatorsQueue.add(
            JobsEnum.BACKFILL_CHAIN_FINALITY,
            { fromBlock: start, toBlock: end },
            { jobId: `validators.backfill-chain-finality.${start}-${end}` }
        )
        dispatched += 1
    }
    await job.log(`Queued ${dispatched} bounded finality repair jobs through block ${finalizedHeight}`)
    await job.updateProgress(100)
}
