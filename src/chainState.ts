import { ApiPromise, WsProvider } from '@polkadot/api'
import { ChainInfo, Marketplace } from './model'
import config from './config'
import { BlockHandlerContext } from './mappings/types/contexts'

const wsProvider = new WsProvider(config.dataSource.chain)
const apiPromise = ApiPromise.create({ provider: wsProvider })

async function saveChainState(ctx: BlockHandlerContext) {
    const state = new ChainInfo({ id: ctx.block.hash })
    const api = await apiPromise
    const apiAt = await api.at(ctx.block.hash)

    const [runtime, marketplace] = await Promise.all<any>([
        api.rpc.state.getRuntimeVersion(ctx.block.hash),
        apiAt.query.marketplace.info(),
    ])

    state.genesisHash = config.genesisHash
    state.transactionVersion = runtime.transactionVersion
    state.specVersion = Number(ctx.block.specId.split('@')[1])
    state.blockNumber = ctx.block.height
    state.blockHash = ctx.block.hash
    state.existentialDeposit = 1n
    state.timestamp = new Date(ctx.block.timestamp)
    state.marketplace = new Marketplace({
        protocolFee: marketplace.protocolFee,
        fixedPriceListingCount: marketplace.fixedPriceListingCount,
        auctionListingCount: marketplace.auctionListingCount,
    })

    await ctx.store.save(state)
}

export async function handleChainState(ctx: BlockHandlerContext) {
    await saveChainState(ctx)
}
