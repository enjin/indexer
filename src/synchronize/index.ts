import { Block, CommonContext } from '~/contexts'
import Rpc from '~/util/rpc'
import { Bytes, Runtime } from '@subsquid/substrate-runtime'
import * as fs from 'fs'
import * as readline from 'readline'
import * as path from 'path'
import { ParentBlockHeader } from '@subsquid/substrate-processor'
import * as multiTokens from '~/synchronize/multi-tokens' 
import * as system from '~/synchronize/system'
import config from '~/util/config'
import { DataService } from '~/util/data'

export async function syncState(ctx: CommonContext): Promise<void> {
    if (config.skipSync) {
        ctx.log.info('Skipping initial sync as SKIP_SYNC is set to true')
        return
    }

    const { api } = await Rpc.getInstance()
    const head = await api.rpc.chain.getFinalizedHead()
    const headBlock = await api.rpc.chain.getBlock(head)
    const version = await api.rpc.state.getRuntimeVersion(head)
    const runtimeVersion = {
        specName: version.specName.toString(),
        specVersion: version.specVersion.toNumber(),
        implName: version.implName.toString(),
        implVersion: version.implVersion.toNumber(),
    }

    const metadata = await getSpecMetadata(config.chainName, runtimeVersion.specVersion)
    const runtime = new Runtime(runtimeVersion, metadata, undefined, ctx._chain.rpc)

    const block: Block = {
        id: headBlock.block.hash.toString(),
        height: headBlock.block.header.number.toNumber(),
        hash: headBlock.block.hash.toString(),
        parentHash: headBlock.block.header.parentHash.toString(),
        ...runtimeVersion,
        _runtime: runtime,
        _runtimeOfPrevBlock: runtime,
        getParent(): ParentBlockHeader {
            return {
                hash: '0x0',
                height: 0,
                _runtime: runtime,
            }
        },
    }

    ctx.log.info(
        `Syncing block ${headBlock.block.header.number.toNumber()} with hash ${headBlock.block.hash.toString()}`
    )

    console.time('syncHeaderChainState')
    await multiTokens.collections(ctx, block)
    await multiTokens.tokens(ctx, block)
    await multiTokens.collectionAccounts(ctx, block)
    await multiTokens.tokenAccounts(ctx, block)
    await multiTokens.attributes(ctx, block)
    await system.balances(ctx, block)
    console.timeEnd('syncHeaderChainState')

    const dataService = DataService.getInstance()
    await dataService.setLastBlockNumber(headBlock.block.header.number.toNumber())
}

function getProjectRoot(): string {
    let currentDir = process.cwd()
    while (currentDir !== path.parse(currentDir).root) {
        if (fs.existsSync(path.join(currentDir, 'package.json'))) {
            return currentDir
        }
        currentDir = path.dirname(currentDir)
    }
    return process.cwd()
}

// TODO: If the file is not found, we should try to fetch from the RPC node
async function getSpecMetadata(network: string, specVersion: number): Promise<Bytes> {
    const path = getProjectRoot()
    const fileStream = fs.createReadStream(`${path}/typegen/${network}.jsonl`)
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
    })

    for await (const line of rl) {
        if (!line.trim()) continue
        try {
            const jsonObject = JSON.parse(line)
            if (jsonObject.specVersion === specVersion) {
                return jsonObject.metadata
            }
        } catch (error) {
            throw new Error(`Error parsing JSON line: ${error}`)
        }
    }

    throw new Error(`No metadata found for specVersion ${specVersion}`)
}
