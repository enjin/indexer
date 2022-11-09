import { ChainInfo } from './model'
import { PERIOD } from './common/consts'
import config from './config'
import { BlockHandlerContext, CommonHandlerContext } from './mappings/types/contexts'
import { ApiPromise, WsProvider } from '@polkadot/api'
import { Marketplace } from './model'

let lastStateTimestamp = 0

export async function handleChainState(ctx: BlockHandlerContext) {
    if (!lastStateTimestamp) {
        const lastChainState = await getLastChainState(ctx)
        if (lastChainState[0]) lastStateTimestamp = lastChainState[0].timestamp.getTime() || 0
    }

    if (ctx.block.timestamp - lastStateTimestamp >= PERIOD) {
        await saveChainState(ctx)
        lastStateTimestamp = ctx.block.timestamp
        console.log(`Chain state updated at block ${ctx.block.height}`)
    }
}

async function saveChainState(ctx: BlockHandlerContext) {
    const state = new ChainInfo({ id: ctx.block.hash })

    const wsProvider = new WsProvider(config.dataSource.chain)
    const api = await ApiPromise.create({ provider: wsProvider })
    const apiAt = await api.at(ctx.block.hash)

    const [runtime, marketplace] = await Promise.all<any>([
        api.rpc.state.getRuntimeVersion(ctx.block.hash),
        apiAt.query.marketplace.info(),
    ])

    state.genesisHash = config.genesisHash
    state.transactionVersion = runtime['transactionVersion']
    state.specVersion = Number(ctx.block.specId.split('@')[1])
    state.blockNumber = ctx.block.height
    state.blockHash = ctx.block.hash
    state.existentialDeposit = 1n
    state.timestamp = new Date(ctx.block.timestamp)
    state.marketplace = new Marketplace({
        protocolFee: marketplace['protocolFee'],
        fixedPriceListingCount: marketplace['fixedPriceListingCount'],
        auctionListingCount: marketplace['auctionListingCount'],
    })

    await ctx.store.save(state)
}

function getLastChainState(ctx: CommonHandlerContext) {
    return ctx.store.find(ChainInfo, {
        take: 1,
        order: {
            timestamp: 'DESC',
        },
    })
}
