import { ApiPromise, WsProvider } from '@polkadot/api'
import { SubstrateBlock } from '@subsquid/substrate-processor'
import * as Sentry from '@sentry/node'
import { ChainInfo, Marketplace } from './model'
import config from './config'
import { CommonContext } from './mappings/types/contexts'

export async function chainState(ctx: CommonContext, block: SubstrateBlock) {
    try {
        const wsProvider = new WsProvider(config.dataSource.chain)
        const api = await ApiPromise.create({ provider: wsProvider })

        const state = new ChainInfo({ id: block.hash })
        const runtime = await api.rpc.state.getRuntimeVersion(block.hash)

        state.genesisHash = config.genesisHash
        state.transactionVersion = runtime.transactionVersion.toNumber()
        state.specVersion = Number(block.specId.split('@')[1])
        state.blockNumber = block.height
        state.blockHash = block.hash
        state.existentialDeposit = BigInt(api.consts.balances.existentialDeposit.toString())
        state.timestamp = new Date(block.timestamp)
        state.marketplace = new Marketplace({
            protocolFee: 25_000000,
            listingActiveDelay: Number(api.consts.marketplace.listingActiveDelay.toString()),
            listingDeposit: BigInt(api.consts.marketplace.listingDeposit.toString()),
            maxRoundingError: BigInt(api.consts.marketplace.maxRoundingError.toString()),
            maxSaltLength: Number(api.consts.marketplace.maxSaltLength.toString()),
            minimumBidIncreasePercentage: Number(api.consts.marketplace.minimumBidIncreasePercentage.toString()),
        })

        await ctx.store.save(state)
    } catch (error) {
        Sentry.captureException(error)
    }
}
