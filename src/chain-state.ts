import { BlockHeader } from '@subsquid/substrate-processor'
import * as Sentry from '@sentry/node'
import { ChainInfo, Config, Marketplace } from '~/model'
import processorConfig from '~/util/config'
import { CommonContext } from '~/contexts'
import Rpc from '~/util/rpc'
import { Between, IsNull } from 'typeorm'

const INITIAL_FINALITY_LOOKBACK = 256
const FINALITY_PAGE_SIZE = 64
const FINALITY_BATCH_SIZE = 32
const FINALITY_CHECKPOINT = 'chain-info-finality-checkpoint'

/**
 * A finalized head can skip several heights between processor callbacks. Reconcile the recent
 * ChainInfo rows rather than marking only the block at the exact finalized-head hash.
 */
export async function finalizeChainInfos(
    ctx: CommonContext,
    finalizedHeight: number,
    processedHeight: number,
    getCanonicalHash: (height: number) => Promise<string>
): Promise<void> {
    // Matrix warp sync writes genesis before jumping to its imported snapshot height.
    if (processedHeight === 0) return

    const upper = Math.min(finalizedHeight, processedHeight)
    const checkpoint = await ctx.store.findOneBy(Config, { id: FINALITY_CHECKPOINT })
    if (checkpoint && checkpoint.stateBlock >= upper) return

    // Start near the current head on upgrade; the explicit backfill repairs older stale rows.
    const lower = checkpoint ? checkpoint.stateBlock + 1 : Math.max(0, upper - INITIAL_FINALITY_LOOKBACK)
    const rows = await ctx.store.find(ChainInfo, {
        where: [
            { genesisHash: processorConfig.genesisHash, blockNumber: Between(lower, upper), finalized: false },
            { genesisHash: processorConfig.genesisHash, blockNumber: Between(lower, upper), finalized: IsNull() },
        ],
        order: { blockNumber: 'ASC' },
        take: FINALITY_PAGE_SIZE,
    })

    for (let offset = 0; offset < rows.length; offset += FINALITY_BATCH_SIZE) {
        const batch = rows.slice(offset, offset + FINALITY_BATCH_SIZE)
        const hashes = await Promise.all(batch.map((row) => getCanonicalHash(row.blockNumber)))
        batch.forEach((row, index) => {
            if (row.blockHash !== hashes[index]) {
                ctx.log.warn(
                    `ChainInfo ${row.blockNumber} ${row.blockHash} is not canonical; finalized hash is ${hashes[index]}`
                )
            }
        })
        const canonical = batch.filter((row, index) => row.blockHash === hashes[index])
        for (const row of canonical) row.finalized = true
        await ctx.store.save(canonical)
    }

    await ctx.store.save(
        new Config({
            id: FINALITY_CHECKPOINT,
            stateBlock: rows.length === FINALITY_PAGE_SIZE ? rows[rows.length - 1].blockNumber : upper,
        })
    )
}

export async function chainState(
    ctx: CommonContext,
    block: BlockHeader<{ block: { timestamp: true; validator: true } }>
) {
    try {
        const { api } = await Rpc.getInstance()
        const { transactionVersion } = api.consts.system.version
        const existentialDeposit = api.consts.balances.existentialDeposit
        const listingActiveDelay = api.consts.marketplace.listingActiveDelay
        const listingDeposit = api.consts.marketplace.listingDeposit
        const maxRoundingError = api.consts.marketplace.maxRoundingError
        const maxSaltLength = api.consts.marketplace.maxSaltLength
        const minimumBidIncreasePercentage = api.consts.marketplace.minimumBidIncreasePercentage
        const finalizedHead = await api.rpc.chain.getFinalizedHead()
        const finalizedHeight = (await api.rpc.chain.getHeader(finalizedHead)).number.toNumber()

        const finalized = !ctx.isHead

        const state = new ChainInfo({
            id: block.hash,
            genesisHash: processorConfig.genesisHash,
            transactionVersion: transactionVersion.toNumber(),
            specVersion: block.specVersion,
            blockNumber: block.height,
            blockHash: block.hash,
            existentialDeposit: existentialDeposit.toBigInt(),
            timestamp: new Date(block.timestamp ?? 0),
            validator: block.validator ?? null,
            marketplace: new Marketplace({
                protocolFee: 25_000000,
                listingActiveDelay: Number(listingActiveDelay.toString()),
                listingDeposit: BigInt(listingDeposit.toString()),
                maxRoundingError: BigInt(maxRoundingError.toString()),
                maxSaltLength: Number(maxSaltLength.toString()),
                minimumBidIncreasePercentage: Number(minimumBidIncreasePercentage.toString()),
            }),
            finalized,
        })

        await ctx.store.save<ChainInfo>(state)
        await finalizeChainInfos(ctx, finalizedHeight, block.height, async (height) =>
            (await api.rpc.chain.getBlockHash(height)).toString()
        )
    } catch (error) {
        Sentry.captureException(error)
        throw error
    }
}
