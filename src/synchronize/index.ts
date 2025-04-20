import { Block, CommonContext } from '../contexts'
import Rpc from '../utils/rpc'
import { Bytes, Runtime } from '@subsquid/substrate-runtime'
import * as fs from 'fs'
import * as readline from 'readline'
import * as path from 'path'
import { ParentBlockHeader } from '@subsquid/substrate-processor'
import * as sync from './storage'

function getProjectRoot(): string {
    let currentDir = process.cwd()
    // Keep going up the directory tree until we find package.json or hit the root
    while (currentDir !== path.parse(currentDir).root) {
        if (fs.existsSync(path.join(currentDir, 'package.json'))) {
            return currentDir
        }
        currentDir = path.dirname(currentDir)
    }
    // If package.json is not found, return the current working directory
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

export async function populateBlock(ctx: CommonContext) {
    const api = Rpc.getInstance().client
    const finalizedBlock = await api.getFinalizedBlock()

    const runtimeVersion = {
        specName: 'matrix-enjin',
        specVersion: 1022,
        implName: 'matrix-enjin',
        implVersion: 1,
    }

    const metadata = await getSpecMetadata('enjin-matrix', 1022)
    const runtime = new Runtime(runtimeVersion, metadata, undefined, ctx._chain.rpc)

    const block: Block = {
        id: finalizedBlock.hash,
        height: finalizedBlock.number,
        hash: finalizedBlock.hash,
        parentHash: finalizedBlock.parent,
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

    ctx.log.info(`Syncing block ${finalizedBlock.number} with hash ${finalizedBlock.hash}`)

    console.time('populateGenesis')
    await sync.collections(ctx, block)
    await sync.tokens(ctx, block)
    await sync.tokenAccounts(ctx, block)
    await sync.collectionAccounts(ctx, block)
    await sync.attributes(ctx, block)
    await sync.balances(ctx, block)
    console.timeEnd('populateGenesis')
}
