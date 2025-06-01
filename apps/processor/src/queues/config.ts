import { ConnectionOptions } from 'bullmq'
import processorConfig from '../utils/config'

export const connection: ConnectionOptions = {
    host: processorConfig.redis.host,
    port: processorConfig.redis.port,
    db: processorConfig.redis.db,
}

export default {
    connection,
}
