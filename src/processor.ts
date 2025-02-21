import { SubstrateBatchProcessor } from '@subsquid/substrate-processor'
import config from './config'
import { calls, events } from './types'
import { isRelay } from './utils/tools'

const getEventNames = (pallet: object): string[] => Object.values(pallet).map((event) => event.name)

const matrixEvents: string[] = [...getEventNames(events.claims), ...getEventNames(events.polkadotXcm)]

const relayEvents: string[] = [
    ...getEventNames(events.imOnline),
    ...getEventNames(events.nominationPools),
    ...getEventNames(events.stakeExchange),
    ...getEventNames(events.staking),
    ...getEventNames(events.xcmPallet),
]

const commonEvents: string[] = [
    ...getEventNames(events.balances),
    ...getEventNames(events.fuelTanks),
    ...getEventNames(events.identity),
    ...getEventNames(events.marketplace),
    ...getEventNames(events.multiTokens),
]

export const processor = new SubstrateBatchProcessor()
    .setRpcEndpoint(config.dataSource.chain)
    .setBlockRange({ from: config.dataSource.fromBlock })
    .addCall({
        name: [calls.identity.setSubs.name, calls.identity.renameSub.name],
        stack: true,
    })
    .addEvent({
        name: [...commonEvents, ...(isRelay() ? relayEvents : matrixEvents)],
        extrinsic: true,
        stack: true,
        call: true,
    })
    .setFields({
        block: {
            timestamp: true,
            validator: true,
        },
        call: {
            origin: true,
            success: true,
            args: true,
            name: true,
            error: true,
        },
        extrinsic: {
            fee: true,
            hash: true,
            tip: true,
            signature: true,
            version: true,
            success: true,
            error: true,
            name: true,
        },
    })

if (config.dataSource.archive) {
    processor.setGateway(config.dataSource.archive)
}
