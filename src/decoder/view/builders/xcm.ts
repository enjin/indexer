import { TransactionViewBuilder } from '../builder'
import { displayValue, getArg } from '../call'
import { UnsafeTransactionViewError } from '~/decoder/view/errors'
import type { ViewBuilderFn } from '../types'

export const buildTeleportView: ViewBuilderFn = ({ call, network, coinId }) => {
    const assets = getArg(call.params, 'assets')
    if (!assets || typeof assets !== 'object' || Array.isArray(assets)) {
        throw new UnsafeTransactionViewError('Cannot safely display teleport amount')
    }
    const versions = Object.keys(assets)
    const version = versions[0]
    if (versions.length !== 1 || !['V2', 'V3', 'V4', 'V5'].includes(version)) {
        throw new UnsafeTransactionViewError('Cannot safely display teleport amount')
    }
    const items = getArg(call.params, `assets.${version}`)
    // This view only renders one ENJ amount; extra assets must not be hidden or mislabeled.
    if (!Array.isArray(items) || items.length !== 1) {
        throw new UnsafeTransactionViewError('Cannot safely display teleport amount')
    }
    const asset = items[0] as Record<string, unknown>
    const amount = getArg(asset, 'fun.Fungible')
    const location = getArg(asset, version === 'V2' || version === 'V3' ? 'id.Concrete' : 'id')
    const parents = getArg({ location }, 'location.parents')
    const interior = getArg({ location }, 'location.interior')
    const isHere =
        interior === 'Here' ||
        (!!interior &&
            typeof interior === 'object' &&
            !Array.isArray(interior) &&
            Object.keys(interior).length === 1 &&
            'Here' in interior &&
            interior.Here === null)
    const nativeParents = network.endsWith('Matrixchain') ? 1 : 0
    if (
        parents !== nativeParents ||
        !isHere ||
        (typeof amount !== 'string' && typeof amount !== 'bigint') ||
        !/^\d+$/.test(amount.toString())
    ) {
        throw new UnsafeTransactionViewError('Cannot safely display teleport amount')
    }
    return TransactionViewBuilder.create('Teleport ENJ')
        .withNetwork(network)
        .withCoin('Amount', displayValue(amount), coinId)
        .build()
}
