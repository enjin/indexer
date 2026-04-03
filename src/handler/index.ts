import 'reflect-metadata'
import express from 'express'
import { dispatchHasuraAction } from '~/hasura-actions/dispatch'
import { serializeSquidResult } from '~/hasura-actions/serialize'
import { Logger } from '~/util/logger'

const LOGGER_NAMESPACE = 'sqd:hasura-actions'

interface HasuraActionRequestBody {
    action?: { name?: string }
    input?: Record<string, unknown> | null
    session_variables?: Record<string, string>
    request_query?: string
}

const app = express()
const PORT = process.env.ACTION_HANDLER_PORT || 3001

app.use(express.json({ limit: '2mb' }))

app.get('/health', (_req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.post('/hasura-actions', (req, res) => {
    void (async () => {
        try {
            const raw = req.body
            if (!raw || typeof raw !== 'object') {
                res.status(400).json({ message: 'Invalid request body' })
                return
            }
            const body = raw as HasuraActionRequestBody
            const actionName = body.action?.name
            if (!actionName) {
                res.status(400).json({ message: 'Missing action name' })
                return
            }

            Logger.info(`Hasura action: ${actionName}`, LOGGER_NAMESPACE)

            const result = await dispatchHasuraAction({
                action: { name: actionName },
                input: body.input ?? {},
            })

            res.json({
                data: serializeSquidResult(result),
            })
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error)
            Logger.error(`Hasura action failed: ${message}`, LOGGER_NAMESPACE)
            res.status(500).json({
                message,
                extensions: {
                    code: 'SQUID_ACTION_ERROR',
                },
            })
        }
    })()
})

app.use((_req, res) => {
    res.status(404).json({ message: 'Not found' })
})

app.listen(Number(PORT), '0.0.0.0', () => {
    Logger.info(`Hasura action handler on 0.0.0.0:${PORT} (POST /hasura-actions)`, LOGGER_NAMESPACE)
})

export default app
