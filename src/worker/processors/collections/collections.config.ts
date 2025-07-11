import rootConfig from '~/worker/config'
import { WorkerConfigType } from '~/worker/types'
import { QueuesEnum } from '~/queue/constants'

const config: WorkerConfigType = {
    ...rootConfig,
    connection: {
        ...rootConfig.connection,
        enableOfflineQueue: true,
    },
    queueName: QueuesEnum.COLLECTIONS,
    isSandboxed: true,
}

export default config
