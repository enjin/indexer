import { Bytes, Runtime } from '@subsquid/substrate-runtime'
import * as fs from 'fs'
import * as readline from 'readline'
import * as path from 'path'
import type { Network } from './types'

const runtimeCache = new Map<string, Runtime>()

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

async function getSpecMetadata(network: Network, specVersion: number): Promise<Bytes> {
    const projectRoot = getProjectRoot()
    const filePath = `${projectRoot}/typegen/${network}.jsonl`

    if (!fs.existsSync(filePath)) {
        throw new Error(`JSONL file not found for network: ${network}`)
    }

    const fileStream = fs.createReadStream(filePath)
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

    throw new Error(`No metadata found for network ${network} with specVersion ${specVersion}`)
}

export async function getRuntimeCached(network: Network, specVersion: number): Promise<Runtime> {
    const cacheKey = `${network}:${specVersion}`

    if (runtimeCache.has(cacheKey)) {
        return runtimeCache.get(cacheKey)!
    }

    const metadata = await getSpecMetadata(network, specVersion)
    const runtimeVersion = {
        specName: network,
        specVersion,
        implName: network,
        implVersion: specVersion,
    }

    const runtime = new Runtime(runtimeVersion, metadata)
    runtimeCache.set(cacheKey, runtime)

    return runtime
}
