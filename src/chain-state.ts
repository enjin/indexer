import { BlockHeader } from '@subsquid/substrate-processor'
import * as Sentry from '@sentry/node'
import { ChainInfo, Marketplace } from './model'
import processorConfig from './utils/config'
import { CommonContext } from './contexts'
import Rpc from './utils/rpc'

export async function chainState(
    ctx: CommonContext,
    block: BlockHeader<{ block: { timestamp: true; validator: true } }>
) {
    try {
        const { api } = await Rpc.getInstance()
        const [
            { transactionVersion },
            existentialDeposit,
            listingActiveDelay,
            listingDeposit,
            maxRoundingError,
            maxSaltLength,
            minimumBidIncreasePercentage,
        ] = await Promise.all([
            api.consts.system.version,
            api.consts.balances.existentialDeposit,
            api.consts.marketplace.listingActiveDelay,
            api.consts.marketplace.listingDeposit,
            api.consts.marketplace.maxRoundingError,
            api.consts.marketplace.maxSaltLength,
            api.consts.marketplace.minimumBidIncreasePercentage,
        ])

        const state = new ChainInfo({
            id: block.hash,
            genesisHash: processorConfig.genesisHash,
            transactionVersion: transactionVersion.toNumber(),
            specVersion: Number(block.specVersion),
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
        })

        await ctx.store.save<ChainInfo>(state)
    } catch (error) {
        Sentry.captureException(error)
    }
}
