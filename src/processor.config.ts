import { SubstrateBatchProcessor } from '@subsquid/substrate-processor'
import config from '~/util/config'
import { events } from '~/type'
import { isRelay } from '~/util/tools'

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
    events.balances.rescinded.name,
    events.balances.upgraded.name,
    events.claims.ethereumBlocksProcessed.name,
    events.imOnline.allGood.name,
    events.imOnline.heartbeatReceived.name,
    events.fuelTanks.callDispatched.name,
    events.fuelTanks.dispatchFailed.name,
    events.fuelTanks.migrationStep.name,
    events.fuelTanks.mutateFreezeStateScheduled.name,
    events.fuelTanks.scheduleMutateFreezeStateFailed.name,
    events.marketplace.listingUpgraded.name,
    events.marketplace.migrationStep.name,
    events.marketplace.listingConverted.name,
    events.multiTokens.nextCollectionIdUpdated.name,
    events.multiTokens.migrationStep.name,
    events.multiTokens.tokenAccountDepositUpdated.name,
    events.multiTokens.tokenAccountUpgraded.name,
    events.multiTokens.tokenUpgraded.name,
    events.multiTokens.tokenUpdated.name,
    events.multiTokens.collectionUpgraded.name,
    events.polkadotXcm.versionNotifyStarted.name,
    events.polkadotXcm.feesPaid.name,
    events.polkadotXcm.sent.name,
    events.staking.bonded.name,
    events.staking.unbonded.name,
    events.staking.payoutStarted.name,
    events.staking.rewarded.name,
    events.staking.stakersElected.name,
    events.staking.withdrawn.name,
    events.staking.stakingElectionFailed.name,
    events.xcmPallet.versionNotifyRequested.name,
    events.xcmPallet.supportedVersionChanged.name,
    events.xcmPallet.sent.name,
    events.xcmPallet.feesPaid.name,
    events.xcmPallet.assetsTrapped.name,
    // TODO: This should probably be used if we don't use warp sync as we would need to update the info
    events.multiTokens.collectionAccountApprovalsUpdated.name,
    events.multiTokens.collectionDepositRecalculationInProgress.name,
    events.multiTokens.collectionDepositUpdateCompleted.name,
]

const eventItems: string[] = [
    ...new Set(
        [...commonEvents, ...(isRelay() ? relayEvents : matrixEvents)].filter((event) => !ignoreEvents.includes(event))
    ),
]

export const processorConfig = new SubstrateBatchProcessor()
    .setRpcEndpoint(config.dataSource.chain)
    .setBlockRange({ from: config.dataSource.fromBlock })
    .addEvent({
        name: eventItems,
        call: true,
        extrinsic: true,
    })
    .setFields({
        block: {
            timestamp: true,
            validator: true,
        },
        call: {
            origin: true,
            args: true,
            name: true,
        },
        extrinsic: {
            fee: true,
            hash: true,
            tip: true,
            signature: true,
            success: true,
            error: true,
        },
    })

if (config.dataSource.archive) {
    processorConfig.setGateway(config.dataSource.archive)
}
