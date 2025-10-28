import express, { Application, Request, Response } from 'express'
import { createLogger } from '@subsquid/logger'
import { blake2AsHex } from '@polkadot/util-crypto'
import { getRuntimeCached } from './metadata'
import type { DecodeRequest, DecodeResponse, ErrorResponse, Network } from './types'

const log = createLogger('sqd:decoder')

// Convert BigInt values to strings for JSON serialization
function bigIntReplacer(_key: string, value: unknown): unknown {
    if (typeof value === 'bigint') {
        return value.toString()
    }
    return value
}
const DEFAULT_NETWORK: Network = 'enjin-matrixchain'

const LATEST_SPEC_VERSIONS: Record<Network, number> = {
    'enjin-matrixchain': 1022,
    'canary-matrixchain': 1022,
    'enjin-relaychain': 1050,
    'canary-relaychain': 1050,
}

function getLatestSpecVersion(network: Network): number {
    return LATEST_SPEC_VERSIONS[network] || 1022
}

function isValidNetwork(network: string): network is Network {
    return ['enjin-matrixchain', 'canary-matrixchain', 'enjin-relaychain', 'canary-relaychain'].includes(
        network
    )
}

function validateRequest(body: unknown): { valid: true; data: DecodeRequest } | { valid: false; error: string } {
    if (!body || typeof body !== 'object') {
        return { valid: false, error: 'Request body must be an object' }
    }

    const req = body as Record<string, unknown>

    if (!req.extrinsic || typeof req.extrinsic !== 'string') {
        return { valid: false, error: 'Missing or invalid "extrinsic" field (must be hex string)' }
    }

    if (!req.extrinsic.startsWith('0x')) {
        return { valid: false, error: 'Extrinsic must start with 0x' }
    }

    if (req.network !== undefined && typeof req.network !== 'string') {
        return { valid: false, error: 'Invalid "network" field (must be string)' }
    }

    if (req.network && !isValidNetwork(req.network)) {
        return {
            valid: false,
            error: `Invalid network. Must be one of: enjin-matrixchain, canary-matrixchain, enjin-relaychain, canary-relaychain`,
        }
    }

    if (req.spec_version !== undefined && typeof req.spec_version !== 'number') {
        return { valid: false, error: 'Invalid "spec_version" field (must be number)' }
    }

    return {
        valid: true,
        data: {
            extrinsic: req.extrinsic,
            network: (req.network as Network) || DEFAULT_NETWORK,
            spec_version: req.spec_version as number | undefined,
        },
    }
}

async function handleDecode(req: Request, res: Response<DecodeResponse | ErrorResponse>): Promise<void> {
    try {
        const validation = validateRequest(req.body)
        if (!validation.valid) {
            res.status(400).json({ error: validation.error })
            return
        }

        const { extrinsic, network = DEFAULT_NETWORK, spec_version } = validation.data
        const specVersion = spec_version ?? getLatestSpecVersion(network)

        log.info(`Decoding extrinsic for network: ${network}, spec: ${specVersion}`)

        const runtime = await getRuntimeCached(network, specVersion)
        const decoded = runtime.decodeExtrinsic(extrinsic)

        // Calculate extrinsic hash using blake2b (matches Substrate)
        const hash = blake2AsHex(extrinsic, 256)

        const response: DecodeResponse = {
            version: decoded.version,
            signature: decoded.signature,
            call: decoded.call,
            hash,
            extrinsic_hash: hash,
        }

        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(response, bigIntReplacer))
    } catch (error) {
        log.error(`Failed to decode extrinsic: ${error}`)
        res.status(400).json({ error: error instanceof Error ? error.message : 'Failed to decode extrinsic' })
    }
}

const server: Application = express()

server.use(express.json())

server.get('/', (_req, res) => {
    res.send('Ok')
})

server.get('/health', (_req, res) => {
    res.json({ status: 'healthy' })
})

server.post('/', handleDecode)

const port = process.env.DECODER_PORT || 8090

server.listen(port, () => {
    log.info(`Decoder server started on port ${port}`)
})
