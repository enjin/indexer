import client from 'prom-client'
import config from '../config'

const registry = new client.Registry()

registry.setDefaultLabels({
    name: `${config.chainName}-indexer`,
})

export default registry
