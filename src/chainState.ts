import { ChainInfo } from './model'
import { PERIOD } from './common/consts'
import { Chain as ProcessorChain } from '@subsquid/substrate-processor/lib/chain'
import { ResilientRpcClient } from '@subsquid/rpc-client/lib/resilient'
import config from './config'
import { BlockHandlerContext, CommonHandlerContext } from './mappings/types/contexts'

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

    const chain = ctx._chain as ProcessorChain
    const client = (chain as any).client as ResilientRpcClient
    const runtime = await client.call('state_getRuntimeVersion')

    state.genesisHash = config.genesisHash
    state.transactionVersion = runtime['transactionVersion']
    state.specVersion = Number(ctx.block.specId.split('@')[1])
    state.blockNumber = ctx.block.height
    state.blockHash = ctx.block.hash
    state.existentialDeposit = 1n
    state.timestamp = new Date(ctx.block.timestamp)
    state.marketplace = null

    await ctx.store.save(state)
}

async function getLastChainState(ctx: CommonHandlerContext) {
    return await ctx.store.find(ChainInfo, {
        take: 1,
        order: {
            timestamp: 'DESC',
        },
    })
}
