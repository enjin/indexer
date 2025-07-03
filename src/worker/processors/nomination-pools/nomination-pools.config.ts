import rootConfig from '~/worker/config'
import { WorkerConfigType } from '~/worker/types'
import { QueuesEnum } from '~/queue/constants'

const config: WorkerConfigType = {
    ...rootConfig,
    connection: {
        ...rootConfig.connection,
        enableOfflineQueue: true,
    },
    queueName: QueuesEnum.NOMINATION_POOLS,
    isSandboxed: true,
}

export default config
