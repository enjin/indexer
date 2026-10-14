import { Bytes, Runtime } from '@subsquid/substrate-runtime'
import * as fs from 'fs'
import * as readline from 'readline'
import * as path from 'path'
import { NETWORKS, type Network } from './types'
import DecoderRpc, { withRpcTimeout } from './rpc'
import { CodecLimitError } from './limits'

const runtimeCache = new Map<string, Runtime>()
const pendingLoads = new Map<string, Promise<Runtime>>()
const liveRuntimeCache = new Map<string, Runtime>()
const pendingLiveLoads = new Map<Network, Promise<Runtime>>()
const preferredVersions = new Map<Network, number>()
const bundledMetadata = new Map<Network, Promise<Map<number, Bytes>>>()
const rpcSnapshots = new Map<Network, { expiresAt: number; runtime?: Runtime; error?: unknown }>()
export const RPC_LOOKUP_COOLDOWN_MS = 30_000

function assertNetwork(network: Network): void {
    if (!NETWORKS.includes(network)) throw new Error('Invalid codec network')
}

export const DEFAULT_SPEC_VERSIONS: Record<Network, number> = {
    'enjin-relaychain': 1070,
    'enjin-matrixchain': 1031,
    'canary-relaychain': 1080,
    'canary-matrixchain': 1041,
}

async function loadCurrentRuntime(network: Network): Promise<Runtime> {
    const rpc = await DecoderRpc.getInstance(network)
    await rpc.ensureConnected()

    // Pin both reads to the best block's state, where pending transactions will execute.
    const blockHash = await rpc.api.rpc.chain.getBlockHash()
    const version = await rpc.api.rpc.state.getRuntimeVersion(blockHash)
    const specVersion = version.specVersion.toNumber()
    const cacheKey = `${network}:${specVersion}`
    const cached = liveRuntimeCache.get(cacheKey)
    if (cached?.specName === version.specName.toString()) return cached

    const metadata = await rpc.api.rpc.state.getMetadata(blockHash)
    const runtime = new Runtime(
        {
            specName: version.specName.toString(),
            specVersion,
            implName: version.implName.toString(),
            implVersion: version.implVersion.toNumber(),
        },
        metadata.toHex()
    )
    return runtime
}

export async function getRpcRuntime(network: Network): Promise<Runtime> {
    assertNetwork(network)
    const pending = pendingLiveLoads.get(network)
    if (pending) return pending
    const snapshot = rpcSnapshots.get(network)
    if (snapshot && snapshot.expiresAt > Date.now()) {
        if (snapshot.runtime) return snapshot.runtime
        throw snapshot.error
    }
    const load = withRpcTimeout(loadCurrentRuntime(network))
    pendingLiveLoads.set(network, load)
    try {
        const runtime = await load
        liveRuntimeCache.set(`${network}:${runtime.specVersion}`, runtime)
        rpcSnapshots.set(network, { expiresAt: Date.now() + RPC_LOOKUP_COOLDOWN_MS, runtime })
        return runtime
    } catch (error) {
        rpcSnapshots.set(network, { expiresAt: Date.now() + RPC_LOOKUP_COOLDOWN_MS, error })
        throw error
    } finally {
        pendingLiveLoads.delete(network)
    }
}

export function rememberRuntime(network: Network, runtime: Runtime): void {
    preferredVersions.set(network, runtime.specVersion)
}

export function clearRuntimeCache(): void {
    runtimeCache.clear()
    liveRuntimeCache.clear()
    preferredVersions.clear()
    bundledMetadata.clear()
    rpcSnapshots.clear()
}

export async function withRuntime<T>(
    network: Network,
    specVersion: number | undefined,
    operation: (runtime: Runtime) => T
): Promise<T> {
    try {
        const runtime = await getRuntimeCached(network, specVersion)
        return await operation(runtime)
    } catch (error) {
        if (specVersion !== undefined || error instanceof CodecLimitError) throw error
        let runtime: Runtime
        try {
            runtime = await getRpcRuntime(network)
        } catch {
            // The selected runtime already failed; an unavailable node cannot repair that failure.
            throw error
        }
        const result = await operation(runtime)
        rememberRuntime(network, runtime)
        return result
    }
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

async function readBundledMetadata(network: Network): Promise<Map<number, Bytes>> {
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

    const versions = new Map<number, Bytes>()
    try {
        let lineNumber = 0
        for await (const line of rl) {
            lineNumber++
            if (!line.trim()) continue
            try {
                const jsonObject = JSON.parse(line)
                versions.set(jsonObject.specVersion, jsonObject.metadata)
            } catch (error) {
                throw new Error(`Error parsing JSON at ${filePath}:${lineNumber}: ${error}`)
            }
        }

        return versions
    } finally {
        rl.close()
        fileStream.destroy()
    }
}

async function getSpecMetadata(network: Network, specVersion: number): Promise<Bytes> {
    let loaded = bundledMetadata.get(network)
    if (!loaded) {
        // Index once per network. Unknown versions do not create unbounded negative-cache entries.
        loaded = readBundledMetadata(network)
        bundledMetadata.set(network, loaded)
    }
    const metadata = (await loaded).get(specVersion)
    if (metadata === undefined) {
        throw new Error(`No metadata found for network ${network} with specVersion ${specVersion}`)
    }
    return metadata
}

export async function getRuntimeCached(network: Network, specVersion?: number): Promise<Runtime> {
    assertNetwork(network)
    specVersion ??= preferredVersions.get(network) ?? DEFAULT_SPEC_VERSIONS[network]
    if (!Number.isSafeInteger(specVersion) || specVersion < 0) {
        throw new Error('Invalid spec_version: expected a non-negative safe integer')
    }
    const cacheKey = `${network}:${specVersion}`

    // Check if already cached
    const cached = liveRuntimeCache.get(cacheKey) ?? runtimeCache.get(cacheKey)
    if (cached) {
        return cached
    }

    // Check if load is in progress
    const pending = pendingLoads.get(cacheKey)
    if (pending) {
        return pending
    }

    // Start new load
    const loadPromise = (async () => {
        try {
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
        } finally {
            pendingLoads.delete(cacheKey)
        }
    })()

    pendingLoads.set(cacheKey, loadPromise)
    return loadPromise
}
