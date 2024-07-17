import { hexToU8a } from '@polkadot/util'
import { UnknownVersionError, UnsupportedCallError } from '../../../common/errors'
import { Event as EventModel, Extrinsic, TeleportBalanceWithdrawn } from '../../../model'
import { calls } from '../../../types/generated'
import { CommonContext, BlockHeader, CallItem, EventItem } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'
import config from '../../../config'

async function getCallData(ctx: CommonContext, call: CallItem) {
    if (call.name === 'PolkadotXcm.limited_teleport_assets') {
        if (calls.polkadotXcm.limitedTeleportAssets.v1010.is(call)) {
            return calls.polkadotXcm.limitedTeleportAssets.v1010.decode(call)
        }

        if (calls.polkadotXcm.limitedTeleportAssets.matrixEnjinV603.is(call)) {
            return calls.polkadotXcm.limitedTeleportAssets.matrixEnjinV603.decode(call)
        }

        throw new UnknownVersionError(calls.polkadotXcm.limitedTeleportAssets.name)
    }

    if (call.name === 'PolkadotXcm.teleport_assets') {
        if (calls.polkadotXcm.teleportAssets.v1010.is(call)) {
            return calls.polkadotXcm.teleportAssets.v1010.decode(call)
        }

        if (calls.polkadotXcm.teleportAssets.matrixEnjinV603.is(call)) {
            return calls.polkadotXcm.teleportAssets.matrixEnjinV603.decode(call)
        }

        throw new UnknownVersionError(calls.polkadotXcm.teleportAssets.name)
    }

    if (call.name === 'PolkadotXcm.limited_reserve_transfer_assets') {
        if (calls.polkadotXcm.limitedReserveTransferAssets.v1010.is(call)) {
            return calls.polkadotXcm.limitedReserveTransferAssets.v1010.decode(call)
        }

        if (calls.polkadotXcm.limitedReserveTransferAssets.matrixEnjinV603.is(call)) {
            return calls.polkadotXcm.limitedReserveTransferAssets.matrixEnjinV603.decode(call)
        }

        throw new UnknownVersionError(calls.polkadotXcm.limitedReserveTransferAssets.name)
    }

    if (call.name === 'FuelTanks.dispatch_and_touch' || call.name === 'FuelTanks.dispatch') {
        const data = call.name === 'FuelTanks.dispatch' ? calls.fuelTanks.dispatch : calls.fuelTanks.dispatchAndTouch

        let callData: any = null

        if (data.matrixEnjinV1005.is(call)) {
            callData = data.matrixEnjinV1005.decode(call)
        }

        if (data.matrixEnjinV1004.is(call)) {
            callData = data.matrixEnjinV1004.decode(call)
        }

        if (data.matrixEnjinV1003.is(call)) {
            callData = data.matrixEnjinV1003.decode(call)
        }

        if (data.matrixEnjinV1000.is(call)) {
            callData = data.matrixEnjinV1000.decode(call)
        }

        if (data.matrixEnjinV603.is(call)) {
            callData = data.matrixEnjinV603.decode(call)
        }

        if (data.v1010.is(call)) {
            callData = data.v1010.decode(call)
        }

        if (data.v1005.is(call)) {
            callData = data.v1005.decode(call)
        }

        if (data.v1004.is(call)) {
            callData = data.v1004.decode(call)
        }

        if (data.v1003.is(call)) {
            callData = data.v1003.decode(call)
        }

        if (data.v1000.is(call)) {
            callData = data.v1000.decode(call)
        }

        if (data.v604.is(call)) {
            callData = data.v604.decode(call)
        }

        if (data.v602.is(call)) {
            callData = data.v602.decode(call)
        }

        if (data.v601.is(call)) {
            callData = data.v601.decode(call)
        }

        if (data.v600.is(call)) {
            callData = data.v600.decode(call)
        }

        if (data.v500.is(call)) {
            callData = data.v500.decode(call)
        }

        if (
            callData?.call.__kind === 'PolkadotXcm' &&
            callData?.call.value.__kind in ['teleport_assets', 'limited_teleport_assets']
        ) {
            return callData!.call.value
        }

        return undefined
    }

    throw new UnsupportedCallError(call.name)
}

export async function attempted(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<EventModel | undefined> {
    if (!item.call) return undefined

    const callData = await getCallData(ctx, item.call)
    if (!callData || !('dest' in callData) || !('beneficiary' in callData) || !('assets' in callData)) {
        return undefined
    }
    let destination: string | null = null
    let beneficiary: Uint8Array | null = null
    let amount: bigint | null = null

    const destInterior = callData.dest.value.interior
    const beneficiaryInterior = callData.beneficiary.value.interior
    const assetInterior = callData.assets.value.at(0)

    if (destInterior.__kind === 'Here') {
        destination = config.chainName.startsWith('canary') ? 'canary-relaychain' : 'enjin-relaychain'
    }

    if (beneficiaryInterior.__kind === 'X1' && beneficiaryInterior.value.__kind === 'AccountId32') {
        beneficiary = beneficiaryInterior.value.id
    }

    if (
        assetInterior &&
        assetInterior.fun.__kind === 'Fungible' &&
        assetInterior.id.__kind === 'Concrete' &&
        assetInterior.id.value.interior.__kind === 'Here'
    ) {
        amount = assetInterior.fun.value
    }

    if (destination === null || beneficiary === null || amount === null) {
        return undefined
    }

    const account = await getOrCreateAccount(ctx, hexToU8a((item.extrinsic?.signature?.address as any)?.value))
    const beneficiaryAccount = await getOrCreateAccount(ctx, beneficiary)

    return new EventModel({
        id: item.id,
        name: TeleportBalanceWithdrawn.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new TeleportBalanceWithdrawn({
            beneficiary: beneficiaryAccount.id,
            destination,
            amount,
            account: account.id,
        }),
    })
}
