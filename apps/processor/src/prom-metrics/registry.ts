import client from 'prom-client'
import processorConfig from '../utils/config'

const registry = new client.Registry()

registry.setDefaultLabels({
    name: `${processorConfig.chainName}-indexer`,
})

export default registry
