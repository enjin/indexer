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

        const state = new ChainInfo({ id: block.hash })

        const { transaction_version: transactionVersion } = await api.constants.System.Version()
        const existentialDeposit = await api.constants.Balances.ExistentialDeposit()
        const listingActiveDelay: number = await api.constants.Marketplace.ListingActiveDelay()
        const listingDeposit: bigint = await api.constants.Marketplace.ListingDeposit()
        const maxRoundingError: bigint = await api.constants.Marketplace.MaxRoundingError()
        const maxSaltLength: number = await api.constants.Marketplace.MaxSaltLength()
        const minimumBidIncreasePercentage: number = await api.constants.Marketplace.MinimumBidIncreasePercentage()

        state.genesisHash = processorConfig.genesisHash
        state.transactionVersion = transactionVersion
        state.specVersion = Number(block.specVersion)
        state.blockNumber = block.height
        state.blockHash = block.hash
        state.existentialDeposit = existentialDeposit
        state.timestamp = new Date(block.timestamp ?? 0)
        state.validator = block.validator ?? null
        state.marketplace = new Marketplace({
            protocolFee: 25_000000,
            listingActiveDelay,
            listingDeposit,
            maxRoundingError,
            maxSaltLength,
            minimumBidIncreasePercentage,
        })

        await ctx.store.save<ChainInfo>(state)

        const data = DataService.getInstance()
        data.chainInfo = state
    } catch (error) {
        Sentry.captureException(error)
    }
}
