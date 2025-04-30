import { Block, CommonContext } from '../contexts'
import Rpc from '../util/rpc'
import { Bytes, Runtime } from '@subsquid/substrate-runtime'
import * as fs from 'fs'
import * as readline from 'readline'
import * as path from 'path'
import { ParentBlockHeader } from '@subsquid/substrate-processor'
import * as multiTokens from './multi-tokens'
import * as system from './system'
import { chainState } from '../chain-state'
import config from '../util/config'

interface RuntimeVersion {
    spec_name: string
    impl_name: string
    authoring_version: number
    spec_version: number
    impl_version: number
    apis: never
    transaction_version: number
    state_version: number
}

export async function syncState(ctx: CommonContext): Promise<void> {
    const api = Rpc.getInstance().client
    const header = await api.getFinalizedBlock()

    const version: RuntimeVersion = await api.getUnsafeApi().constants.System.Version()
    const runtimeVersion = {
        specName: version.spec_name,
        specVersion: version.spec_version,
        implName: version.impl_name,
        implVersion: version.impl_version,
    }

    const metadata = await getSpecMetadata(config.chainName, runtimeVersion.specVersion)
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
