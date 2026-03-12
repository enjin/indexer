import express, { Application, Request, Response } from 'express'
import { createLogger } from '@subsquid/logger'
import { hexToU8a, isHex, stringToU8a } from '@polkadot/util'
import { blake2AsHex } from '@polkadot/util-crypto'
import { decode, bigIntReplacer, resolveNetwork } from './core'
import type { DecodeRequest } from './types'
import { NETWORKS } from './types'
import { encode } from '../encoder/core'
import type { EncodeRequest } from '../encoder/types'

const log = createLogger('sqd:decoder')

function validateRequest(body: unknown): { valid: true; data: DecodeRequest } | { valid: false; error: string } {
    if (!body || typeof body !== 'object') {
        return { valid: false, error: 'Request body must be an object' }
    }

    const req = body as Record<string, unknown>

    const hasExtrinsic = req.extrinsic !== undefined
    const hasExtrinsics = req.extrinsics !== undefined
    const hasEvents = req.events !== undefined

    if (!hasExtrinsic && !hasExtrinsics && !hasEvents) {
        return { valid: false, error: 'Missing "extrinsic", "extrinsics", or "events" field' }
    }

    if (hasExtrinsic) {
        if (typeof req.extrinsic !== 'string') {
            return { valid: false, error: '"extrinsic" must be a string' }
        }
        if (!isHex(req.extrinsic)) {
            return { valid: false, error: 'Extrinsic must be a valid hex string (0x followed by hex characters)' }
        }
    }

    if (hasExtrinsics) {
        if (!Array.isArray(req.extrinsics)) {
            return { valid: false, error: '"extrinsics" must be an array' }
        }
        if (req.extrinsics.some((e: unknown) => typeof e !== 'string' || !isHex(e))) {
            return { valid: false, error: 'All extrinsics must be valid hex strings' }
        }
    }

    if (hasEvents) {
        if (typeof req.events !== 'string') {
            return { valid: false, error: '"events" must be a hex string' }
        }
        if (!isHex(req.events)) {
            return { valid: false, error: 'Events must be a valid hex string' }
        }
    }

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

    if (req.spec_version !== undefined && typeof req.spec_version !== 'number') {
        return { valid: false, error: 'Invalid "spec_version" field (must be number)' }
    }

    return {
        valid: true,
        data: {
            extrinsic: req.extrinsic as string | undefined,
            extrinsics: req.extrinsics as string[] | undefined,
            events: req.events as string | undefined,
            network: req.network,
            spec_version: req.spec_version,
        },
    }
}

async function handleDecode(req: Request, res: Response): Promise<void> {
    try {
        const validation = validateRequest(req.body)
        if (!validation.valid) {
            res.status(400).json({ error: validation.error })
            return
        }

        const result = await decode(validation.data)
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(result, bigIntReplacer))
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error)
        log.error(`Decode error: ${errorMessage}`)
        res.status(500).json({ error: errorMessage })
    }
}

function validateEncodeRequest(body: unknown): { valid: true; data: EncodeRequest } | { valid: false; error: string } {
    if (!body || typeof body !== 'object') {
        return { valid: false, error: 'Request body must be an object' }
    }

    const req = body as Record<string, unknown>

    if (req.call === undefined) {
        return { valid: false, error: 'Missing "call" field' }
    }

    if (!req.call || typeof req.call !== 'object' || Array.isArray(req.call)) {
        return { valid: false, error: '"call" must be an object' }
    }

    const call = req.call as Record<string, unknown>

    if (typeof call.pallet !== 'string' || !call.pallet) {
        return { valid: false, error: '"call.pallet" must be a non-empty string' }
    }

    if (typeof call.name !== 'string' || !call.name) {
        return { valid: false, error: '"call.name" must be a non-empty string' }
    }

    if (call.args !== undefined && (typeof call.args !== 'object' || Array.isArray(call.args))) {
        return { valid: false, error: '"call.args" must be an object' }
    }

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

    if (req.spec_version !== undefined && typeof req.spec_version !== 'number') {
        return { valid: false, error: 'Invalid "spec_version" field (must be number)' }
    }

    return {
        valid: true,
        data: {
            call: {
                pallet: call.pallet,
                name: call.name,
                args: call.args as Record<string, unknown> | undefined,
            },
            network: req.network,
            spec_version: req.spec_version,
        },
    }
}

async function handleEncode(req: Request, res: Response): Promise<void> {
    try {
        const validation = validateEncodeRequest(req.body)
        if (!validation.valid) {
            res.status(400).json({ error: validation.error })
            return
        }

        const result = await encode(validation.data)
        res.json(result)
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error)
        log.error(`Encode error: ${errorMessage}`)
        res.status(500).json({ error: errorMessage })
    }
}

function validateHashRequest(body: unknown): { valid: true; data: string } | { valid: false; error: string } {
    if (!body || typeof body !== 'object') {
        return { valid: false, error: 'Request body must be an object' }
    }

    const req = body as Record<string, unknown>
    if (req.data === undefined) {
        return { valid: false, error: 'Missing "data" field' }
    }
    if (typeof req.data !== 'string') {
        return { valid: false, error: '"data" must be a string' }
    }
    return { valid: true, data: req.data }
}

function handleHash(req: Request, res: Response): void {
    try {
        const validation = validateHashRequest(req.body)
        if (!validation.valid) {
            res.status(400).json({ error: validation.error })
            return
        }

        const { data } = validation
        const isHexData = isHex(data)
        const hash = blake2AsHex(isHexData ? hexToU8a(data) : stringToU8a(data), 256)
        res.json({ hash, isHexData })
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error)
        log.error(`Hash error: ${errorMessage}`)
        res.status(500).json({ error: errorMessage })
    }
}

const server: Application = express()

server.use(express.json({ limit: '1mb' }))

server.get('/decoder', (_req, res) => {
    res.set('Allow', 'POST')
    res.status(405).send('Method Not Allowed')
})

server.get('/encoder', (_req, res) => {
    res.set('Allow', 'POST')
    res.status(405).send('Method Not Allowed')
})

server.get('/hash', (_req, res) => {
    res.set('Allow', 'POST')
    res.status(405).send('Method Not Allowed')
})

server.get('/health', (_req, res) => {
    res.json({ status: 'healthy' })
})

server.post('/decoder', handleDecode)
server.post('/encoder', handleEncode)
server.post('/hash', handleHash)

const port = process.env.DECODER_PORT || 8090

server.listen(port, () => {
    log.info(`Decoder/Encoder server started on port ${port}`)
})
