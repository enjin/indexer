import express, { Application, Request, Response } from 'express'
import { createLogger } from '@subsquid/logger'
import { hexToU8a, isHex, stringToU8a } from '@polkadot/util'
import { blake2AsHex, signatureVerify } from '@polkadot/util-crypto'
import {
    decode,
    bigIntReplacer,
    resolveNetwork,
    decodeSignedExtrinsicsRaw,
    getLatestSpecVersion,
    DEFAULT_NETWORK,
} from './core'
import { encode } from '../encoder/core'
import {
    validateDecodeRequest,
    validateEncodeRequest,
    validateHashRequest,
    validateVerifyMessageRequest,
    validateDecodeSignedExtrinsicsRequest,
} from './validation'

const log = createLogger('sqd:decoder')

async function handleDecode(req: Request, res: Response): Promise<void> {
    try {
        const validation = validateDecodeRequest(req.body)
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

async function handleVerifyMessage(req: Request, res: Response): Promise<void> {
    try {
        const validation = validateVerifyMessageRequest(req.body)
        if (!validation.valid) {
            res.status(400).json({ error: validation.error })
            return
        }

        const results = validation.data.map(({ message, signature, publicKey }) => {
            const { isValid, isWrapped, crypto } = signatureVerify(message, signature, publicKey)
            return { isValid, isWrapped, crypto }
        })

        res.json(results)
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error)
        log.error(`Verify message error: ${errorMessage}`)
        res.status(500).json({ error: errorMessage })
    }
}

async function handleDecodeSignedExtrinsics(req: Request, res: Response): Promise<void> {
    try {
        const validation = validateDecodeSignedExtrinsicsRequest(req.body)
        if (!validation.valid) {
            res.status(400).json({ error: validation.error })
            return
        }

        const { inputs, network: networkInput, spec_version } = validation.data

        const resolved = networkInput ? resolveNetwork(networkInput) : null
        if (networkInput && !resolved) {
            res.status(400).json({ error: `Invalid network: ${networkInput}` })
            return
        }

        const network = resolved ?? DEFAULT_NETWORK
        const specVersion = spec_version ?? getLatestSpecVersion(network)

        const items = inputs.map((signedExtrinsic) => ({ signedExtrinsic }))
        const results = await decodeSignedExtrinsicsRaw(items, network, specVersion)

        res.json(results)
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error)
        log.error(`Decode signed extrinsics error: ${errorMessage}`)
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
server.get('/verify/messages', (_req, res) => {
    res.set('Allow', 'POST')
    res.status(405).send('Method Not Allowed')
})
server.get('/decode/extrinsics', (_req, res) => {
    res.set('Allow', 'POST')
    res.status(405).send('Method Not Allowed')
})
server.get('/health', (_req, res) => {
    res.json({ status: 'healthy' })
})

server.post('/decoder', handleDecode)
server.post('/encoder', handleEncode)
server.post('/hash', handleHash)
server.post('/verify/messages', handleVerifyMessage)
server.post('/decode/extrinsics', handleDecodeSignedExtrinsics)

const port = process.env.DECODER_PORT || 8090

server.listen(port, () => {
    log.info(`Decoder/Encoder server started on port ${port}`)
})
