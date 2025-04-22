import { ConnectionOptions } from 'bullmq'
import config from '../util/config'

export const connection: ConnectionOptions = {
    host: config.redis.host,
    port: config.redis.port,
    db: config.redis.db,
}

export default {
    connection,
}
