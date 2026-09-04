import { SubstrateBatchProcessor } from '@subsquid/substrate-processor'
import config from '~/util/config'
import { calls, events } from '~/type'
import { isRelay } from '~/util/tools'

const getEventNames = (pallet: object): string[] => Object.values(pallet).map((event) => event.name)

const getCallNames = (pallet: object): string[] => Object.values(pallet).map((call) => call.name)

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
    ...getEventNames(events.utility),
    events.migrations.upgradeCompleted.name,
]

const ignoreEvents: string[] = [
    events.balances.rescinded.name,
    events.balances.upgraded.name,
    events.claims.ethereumBlocksProcessed.name,
    events.imOnline.allGood.name,
    events.imOnline.heartbeatReceived.name,
    events.fuelTanks.callDispatched.name,
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
    events.utility.batchCompleted.name,
    events.utility.dispatchedAs.name,
    events.utility.ifElseMainSuccess.name,
    events.utility.ifElseFallbackCalled.name,
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
    events.multiTokens.attributeUpgraded.name,
    events.balances.released.name,
    events.balances.held.name,
    events.balances.mintedCredit.name,
]

const eventItems: string[] = [
    ...new Set(
        [...commonEvents, ...(isRelay() ? relayEvents : matrixEvents)].filter((event) => !ignoreEvents.includes(event))
    ),
]

// Calls are subscribed by name (not only through their events) so that extrinsics
// which fail on-chain — and therefore emit none of the subscribed events — still
// arrive with their call data and get indexed with pallet/method/args populated.
const matrixCalls: string[] = [
    ...getCallNames(calls.claims),
    ...getCallNames(calls.matrixUtility),
    ...getCallNames(calls.polkadotXcm),
]

const relayCalls: string[] = [
    ...getCallNames(calls.nominationPools),
    ...getCallNames(calls.stakeExchange),
    ...getCallNames(calls.staking),
    ...getCallNames(calls.xcmPallet),
]

const commonCalls: string[] = [
    ...getCallNames(calls.balances),
    ...getCallNames(calls.fuelTanks),
    ...getCallNames(calls.identity),
    ...getCallNames(calls.marketplace),
    ...getCallNames(calls.multiTokens),
    ...getCallNames(calls.utility),
]

const callItems: string[] = [...new Set([...commonCalls, ...(isRelay() ? relayCalls : matrixCalls)])]

export const processorConfig = new SubstrateBatchProcessor()
    .setRpcEndpoint(config.dataSource.chain)
    .setBlockRange({ from: config.dataSource.fromBlock })
    .addEvent({
        name: eventItems,
        call: true,
        extrinsic: true,
    })
    .addCall({
        name: callItems,
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
            success: true,
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
    processorConfig.setGateway({ url: config.dataSource.archive, apiKey: config.dataSource.archiveApiKey })
}
