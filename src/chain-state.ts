import { BlockHeader } from '@subsquid/substrate-processor'
import * as Sentry from '@sentry/node'
import { ChainInfo, Marketplace } from '~/model'
import processorConfig from '~/util/config'
import { CommonContext } from '~/contexts'
import Rpc from '~/util/rpc'

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

        const finalized = !ctx.isHead
        const blockToFinalize = await ctx.store.findOneBy(ChainInfo, {
            id: finalizedHead.toString(),
        })

        if (blockToFinalize) {
            blockToFinalize.finalized = true
            await ctx.store.save(blockToFinalize)
        }

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
    } catch (error) {
        Sentry.captureException(error)
        throw error
    }
}
