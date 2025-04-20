import { Block, CommonContext } from '../contexts'
import Rpc from '../utils/rpc'
import { Bytes, Runtime } from '@subsquid/substrate-runtime'
import * as fs from 'fs'
import * as readline from 'readline'
import * as path from 'path'
import { ParentBlockHeader } from '@subsquid/substrate-processor'
import * as multiTokens from './multi-tokens'
import * as system from './system'
import { chainState } from '../chain-state'

export async function syncState(ctx: CommonContext): Promise<void> {
    const api = Rpc.getInstance().client
    const header = await api.getFinalizedBlock()
    const specData = await api.getChainSpecData()
    const runtimeVersion = {
        specName: specData.properties.specName,
        specVersion: specData.properties.specVersion,
        implName: specData.properties.implName,
        implVersion: specData.properties.implVersion,
    }

    const metadata = await getSpecMetadata('enjin-matrix', runtimeVersion.specVersion)
    const runtime = new Runtime(runtimeVersion, metadata, undefined, ctx._chain.rpc)

    const block: Block = {
        id: header.hash,
        height: header.number,
        hash: header.hash,
        parentHash: header.parent,
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

    ctx.log.info(`Syncing block ${header.number} with hash ${header.hash}`)

    console.time('syncHeaderChainState')
    await multiTokens.collections(ctx, block)
    await multiTokens.tokens(ctx, block)
    await multiTokens.tokenAccounts(ctx, block)
    await multiTokens.collectionAccounts(ctx, block)
    await multiTokens.attributes(ctx, block)
    await system.balances(ctx, block)
    await chainState(ctx as unknown as CommonContext, block)
    console.timeEnd('syncHeaderChainState')
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
