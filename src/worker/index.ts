import { Server } from 'http'

import app from './app'
import { QueueUtils } from './queue'
import { gracefulShutdown } from '../utils/tools'
import worker from './queue/jobs/compute-collections/compute-collections.worker'

const PORT = process.env.PORT || 9090
let server: Server | undefined

const listen = () => {
    server = app.listen(PORT, () => {
        QueueUtils.initializeJobs()
        console.log(`Server running at port ${PORT}`)
    })
}

process.on('SIGINT', () => void gracefulShutdown('SIGINT', worker))
process.on('SIGTERM', () => {
    if (server) {
        server.close()
    }

    void gracefulShutdown('SIGTERM', worker)
})

listen()
