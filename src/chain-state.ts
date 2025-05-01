import { BlockHeader } from '@subsquid/substrate-processor'
import * as Sentry from '@sentry/node'
import { ChainInfo, Marketplace } from './model'
import processorConfig from './util/config'
import { CommonContext } from './contexts'
import Rpc from './util/rpc'
import { DataService } from './util/data'

export async function chainState(
    ctx: CommonContext,
    block: BlockHeader<{ block: { timestamp: true; validator: true } }>
) {
    try {
        const api = Rpc.getInstance().client.getUnsafeApi()
        const [
            { transaction_version: transactionVersion },
            existentialDeposit,
            listingActiveDelay,
            listingDeposit,
            maxRoundingError,
            maxSaltLength,
            minimumBidIncreasePercentage,
        ] = await Promise.all([
            api.constants.System.Version(),
            api.constants.Balances.ExistentialDeposit(),
            api.constants.Marketplace.ListingActiveDelay(),
            api.constants.Marketplace.ListingDeposit(),
            api.constants.Marketplace.MaxRoundingError(),
            api.constants.Marketplace.MaxSaltLength(),
            api.constants.Marketplace.MinimumBidIncreasePercentage(),
        ])

        const state = new ChainInfo({
            id: block.hash,
            genesisHash: processorConfig.genesisHash,
            transactionVersion,
            specVersion: Number(block.specVersion),
            blockNumber: block.height,
            blockHash: block.hash,
            existentialDeposit,
            timestamp: new Date(block.timestamp ?? 0),
            validator: block.validator ?? null,
            marketplace: new Marketplace({
                protocolFee: 25_000000,
                listingActiveDelay,
                listingDeposit,
                maxRoundingError,
                maxSaltLength,
                minimumBidIncreasePercentage,
            }),
        })

        await ctx.store.save<ChainInfo>(state)
    } catch (error) {
        Sentry.captureException(error)
    }
}
