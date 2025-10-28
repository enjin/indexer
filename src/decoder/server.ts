import express, { Application, Request, Response } from 'express'
import { createLogger } from '@subsquid/logger'
import { blake2AsHex } from '@polkadot/util-crypto'
import { isHex } from '@polkadot/util'
import { getRuntimeCached } from './metadata'
import type { DecodeRequest, DecodeResponse, ErrorResponse, Network, DecodedEventRecord } from './types'
import { NETWORKS, NETWORK_ALIASES } from './types'
import { transformToCompatibleFormat, transformEventToCompatibleFormat } from './compatibility'
import { Src } from '@subsquid/scale-codec'

const log = createLogger('sqd:decoder')

// Convert BigInt values to strings for JSON serialization
function bigIntReplacer(_key: string, value: unknown): unknown {
    if (typeof value === 'bigint') {
        return value.toString()
    }
    return value
}

const DEFAULT_NETWORK: Network = 'enjin-matrixchain'
const DEFAULT_SPEC_VERSION: number = 1022

const LATEST_SPEC_VERSIONS: Record<Network, number> = {
    // enjin
    'enjin-relaychain': 1050,
    'enjin-matrixchain': 1022,
    // canary
    'canary-relaychain': 1060,
    'canary-matrixchain': 1030,
}

function getLatestSpecVersion(network: Network): number {
    return LATEST_SPEC_VERSIONS[network] || DEFAULT_SPEC_VERSION
}

function resolveNetwork(networkInput: string): Network | null {
    // Check if it's a direct match
    if (NETWORKS.includes(networkInput as Network)) {
        return networkInput as Network
    }

    // Check if it's an alias
    if (networkInput in NETWORK_ALIASES) {
        return NETWORK_ALIASES[networkInput]
    }

    return null
}

function validateRequest(body: unknown): { valid: true; data: DecodeRequest } | { valid: false; error: string } {
    if (!body || typeof body !== 'object') {
        return { valid: false, error: 'Request body must be an object' }
    }

    const req = body as Record<string, unknown>

    // Check if at least one of extrinsic/extrinsics/events is present
    const hasExtrinsic = req.extrinsic !== undefined
    const hasExtrinsics = req.extrinsics !== undefined
    const hasEvents = req.events !== undefined

    if (!hasExtrinsic && !hasExtrinsics && !hasEvents) {
        return { valid: false, error: 'Missing "extrinsic", "extrinsics", or "events" field' }
    }

    // Validate single extrinsic
    if (hasExtrinsic) {
        if (typeof req.extrinsic !== 'string') {
            return { valid: false, error: '"extrinsic" must be a string' }
        }
        if (!isHex(req.extrinsic)) {
            return { valid: false, error: 'Extrinsic must be a valid hex string (0x followed by hex characters)' }
        }
    }

    // Validate extrinsics array
    if (hasExtrinsics) {
        if (!Array.isArray(req.extrinsics)) {
            return { valid: false, error: '"extrinsics" must be an array' }
        }
        const extrinsics = req.extrinsics as unknown[]
        if (extrinsics.some((e) => typeof e !== 'string' || !isHex(e))) {
            return { valid: false, error: 'All extrinsics must be valid hex strings' }
        }
    }

    // Validate events (single hex string)
    if (hasEvents) {
        if (typeof req.events !== 'string') {
            return { valid: false, error: '"events" must be a hex string' }
        }
        if (!isHex(req.events)) {
            return { valid: false, error: 'Events must be a valid hex string' }
        }
    }

    // Validate network (including aliases)
    if (req.network !== undefined) {
        if (typeof req.network !== 'string') {
            return { valid: false, error: 'Invalid "network" field (must be string)' }
        }
        if (!resolveNetwork(req.network)) {
            return {
                valid: false,
                error: `Invalid network. Must be one of: ${NETWORKS.join(', ')}, canary`,
            }
        }
    }

    // Validate spec_version
    if (req.spec_version !== undefined && typeof req.spec_version !== 'number') {
        return { valid: false, error: 'Invalid "spec_version" field (must be number)' }
    }

    return {
        valid: true,
        data: {
            extrinsic: req.extrinsic as string | undefined,
            extrinsics: req.extrinsics as string[] | undefined,
            events: req.events as string | undefined,
            network: req.network as string | undefined,
            spec_version: req.spec_version as number | undefined,
        },
    }
}

async function handleDecode(req: Request, res: Response): Promise<void> {
    try {
        const validation = validateRequest(req.body)
        if (!validation.valid) {
            // Return 200 OK with error object (matches platform-decoder)
            res.json({ error: validation.error })
            return
        }

        const { extrinsic, extrinsics, events, network: networkInput, spec_version } = validation.data
        const network = networkInput ? resolveNetwork(networkInput)! : DEFAULT_NETWORK
        const specVersion = spec_version ?? getLatestSpecVersion(network)

        // Handle single extrinsic
        if (extrinsic) {
            try {
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

                // Transform to platform-decoder compatible format
                const compatibleResponse = transformToCompatibleFormat(response)

                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify(compatibleResponse, bigIntReplacer))
            } catch (error) {
                log.error(`Failed to decode extrinsic: ${error}`)
                res.json({ error: 'Failed to decode extrinsic' })
            }
            return
        }

        // Handle batch extrinsics
        if (extrinsics && extrinsics.length > 0) {
            try {
                log.info(`Decoding ${extrinsics.length} extrinsics for network: ${network}, spec: ${specVersion}`)
                const runtime = await getRuntimeCached(network, specVersion)

                const results = extrinsics.map((ext) => {
                    const decoded = runtime.decodeExtrinsic(ext)
                    const hash = blake2AsHex(ext, 256)

                    const response = {
                        version: decoded.version,
                        signature: decoded.signature,
                        call: decoded.call,
                        hash,
                        extrinsic_hash: hash,
                    }

                    // Transform to platform-decoder compatible format
                    return transformToCompatibleFormat(response)
                })

                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify(results, bigIntReplacer))
            } catch (error) {
                log.error(`Failed to decode extrinsics: ${error}`)
                res.json({ error: 'Failed to decode extrinsics' })
            }
            return
        }

        // Handle events
        if (events) {
            try {
                log.info(`Decoding events for network: ${network}, spec: ${specVersion}`)
                const runtime = await getRuntimeCached(network, specVersion)

                // Decode Vec<EventRecord> using Src for manual SCALE parsing
                // Convert hex string to Uint8Array
                const hexString = events.startsWith('0x') ? events.slice(2) : events
                const bytes = new Uint8Array(Buffer.from(hexString, 'hex'))
                const src = new Src(bytes)
                const length = src.compact()
                log.info(`Decoding ${length} events from SCALE bytes`)

                const results: DecodedEventRecord[] = []

                for (let i = 0; i < length; i++) {
                    // Decode Phase enum
                    const phaseVariant = src.u8()
                    let phase: { [key: string]: number | null } = {}

                    if (phaseVariant === 0) {
                        // ApplyExtrinsic(u32)
                        phase.ApplyExtrinsic = src.u32()
                    } else if (phaseVariant === 1) {
                        // Finalization
                        phase.Finalization = null
                    } else if (phaseVariant === 2) {
                        // Initialization
                        phase.Initialization = null
                    }

                    // Decode Event using runtime
                    // Use decode() instead of decodeBinary() to work with existing Src
                    const decodedEvent = runtime.scaleCodec.decode(runtime.description.event, src)

                    // Decode topics Vec<Hash>
                    const topicsLength = src.compact()
                    const topics: string[] = []
                    for (let j = 0; j < topicsLength; j++) {
                        const hash = src.bytes(32)
                        topics.push('0x' + Buffer.from(hash).toString('hex'))
                    }

                    results.push({
                        phase,
                        event: transformEventToCompatibleFormat(decodedEvent),
                        topics,
                    })
                }

                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify(results, bigIntReplacer))
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : String(error)
                const stack = error instanceof Error ? error.stack : ''
                log.error(`Failed to decode events: ${errorMessage}`)
                log.error(`Stack trace: ${stack}`)
                res.json({ error: 'Failed to decode events', details: errorMessage })
            }
            return
        }

        // Should not reach here due to validation
        res.json({ error: 'Invalid request' })
    } catch (error) {
        log.error(`Unexpected error: ${error}`)
        res.json({ error: 'Internal server error' })
    }
}

const server: Application = express()

server.use(express.json({ limit: '1mb' }))

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
