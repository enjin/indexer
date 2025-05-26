import { SubstrateBatchProcessor } from '@subsquid/substrate-processor'
import config from './util/config'
import { events } from './type'
import { isRelay } from './util/tools'

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

const ignoreEvents: string[] = [
    events.staking.bonded.name,
    events.staking.unbonded.name,
    events.staking.payoutStarted.name,
    events.staking.rewarded.name,
    events.staking.stakersElected.name,
    events.staking.withdrawn.name,
    events.staking.stakingElectionFailed.name,
    events.imOnline.allGood.name,
    events.imOnline.heartbeatReceived.name,
    events.claims.ethereumBlocksProcessed.name,
    events.fuelTanks.callDispatched.name,
    events.fuelTanks.dispatchFailed.name,
    events.fuelTanks.migrationStep.name,
    events.marketplace.migrationStep.name,
    events.multiTokens.nextCollectionIdUpdated.name,
    events.multiTokens.migrationStep.name,
    events.multiTokens.tokenAccountDepositUpdated.name,
    events.polkadotXcm.versionNotifyStarted.name,
    events.polkadotXcm.feesPaid.name,
    events.polkadotXcm.sent.name,
]

const eventItems: string[] = [
    ...new Set(
        [...commonEvents, ...(isRelay() ? relayEvents : matrixEvents)].filter((event) => !ignoreEvents.includes(event))
    ),
]

export const processorConfig = new SubstrateBatchProcessor()
    .setRpcEndpoint(config.dataSource.chain)
    .setBlockRange({ from: config.dataSource.fromBlock })
    // .addCall({
    //     name: [calls.identity.setSubs.name, calls.identity.renameSub.name],
    //     stack: true,
    // })
    .addEvent({
        name: eventItems,
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
    processorConfig.setGateway(config.dataSource.archive)
}
