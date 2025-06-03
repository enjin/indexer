import rootConfig from '../../config'
import { WorkerConfigType } from '../../types'
import { QueuesEnum } from '../../constants'

const config: WorkerConfigType = {
    ...rootConfig,
    connection: {
        ...rootConfig.connection,
        enableOfflineQueue: false,
    },
    queueName: QueuesEnum.LISTINGS,
    isSandboxed: true,
}

export default config
