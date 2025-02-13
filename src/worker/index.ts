import { Server } from 'http'

import app from './app'
import { QueueUtils } from './queue'

const PORT = process.env.PORT || 9090
let server: Server | undefined

const listen = () => {
    server = app.listen(PORT, () => {
        QueueUtils.initializeJobs()
        console.log(`Server running at port ${PORT}`)
    })
}

process.on('SIGTERM', () => {
    console.log('SIGTERM received')
    if (server) {
        server.close()
    }
})

listen()
