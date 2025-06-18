import express from 'express'
import { QueueUtils } from '../queue'
import { Logger } from '../util/logger'

const LOGGER_NAMESPACE = 'sqd:action-handler'

// Define the expected request body structure for Hasura actions
interface HasuraActionRequest {
    input: {
        id: string
    }
    session_variables?: Record<string, string>
}

// Initialize Express app
const app = express()
const PORT = process.env.ACTION_HANDLER_PORT || 3001

// Middleware
app.use(express.json())

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Refresh Pool action handler
app.post('/refreshPool', (req: any, res: any) => {
    try {
        const body = req.body as HasuraActionRequest
        const { input } = body

        if (!input || !input.id) {
            Logger.error('Missing required parameter: id', LOGGER_NAMESPACE)
            return res.status(400).json({
                message: 'Missing required parameter: id',
            })
        }

        const { id } = input

        Logger.info(`Refreshing pool with id: ${id}`, LOGGER_NAMESPACE)

        // Use the same logic as the GraphQL resolver
        QueueUtils.dispatchRefreshPool(id)

        // Return success response (Boolean as defined in the GraphQL schema)
        res.json(true)
    } catch (error) {
        Logger.error(`Error refreshing pool: ${error}`, LOGGER_NAMESPACE)
        res.status(500).json({
            message: 'Internal server error while refreshing pool',
        })
    }
})

// Error handling middleware
app.use((error: any, req: any, res: any, next: any) => {
    Logger.error(`Unhandled error: ${error.message}`, LOGGER_NAMESPACE)
    res.status(500).json({
        message: 'Internal server error',
    })
})

// 404 handler
app.use((req: any, res: any) => {
    res.status(404).json({
        message: 'Endpoint not found',
    })
})

// Start server
app.listen(PORT, () => {
    Logger.info(`Action handler server running on port ${PORT}`, LOGGER_NAMESPACE)
    Logger.info(`Health check available at: http://localhost:${PORT}/health`, LOGGER_NAMESPACE)
    Logger.info(`RefreshPool handler available at: http://localhost:${PORT}/refreshPool`, LOGGER_NAMESPACE)
})

export default app
