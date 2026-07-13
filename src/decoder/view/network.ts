import type { Network } from '../types'

const NETWORK_LABELS: Record<Network, string> = {
    'enjin-matrixchain': 'Enjin Matrixchain',
    'canary-matrixchain': 'Canary Matrixchain',
    'enjin-relaychain': 'Enjin Relaychain',
    'canary-relaychain': 'Canary Relaychain',
}

export function getNetworkLabel(network: Network): string {
    return NETWORK_LABELS[network]
}

export function getNativeCoinId(network: Network): string {
    if (network.startsWith('enjin-') || network.startsWith('canary-')) {
        return 'enjin'
    }
    return 'enjin'
}
