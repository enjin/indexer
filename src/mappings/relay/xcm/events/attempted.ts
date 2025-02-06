import { UnknownVersionError, UnsupportedCallError } from '../../../common/errors'
import { Event as EventModel, Extrinsic, TeleportBalanceWithdrawn } from '../../../model'
import { calls } from '../../../types/generated'
import { CommonContext, BlockHeader, CallItem, EventItem } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'
import config from '../../../config'

async function getCallData(call: CallItem) {
    if (call.name === 'XcmPallet.limited_teleport_assets') {
        if (calls.xcmPallet.limitedTeleportAssets.enjinV1032.is(call)) {
            return calls.xcmPallet.limitedTeleportAssets.enjinV1032.decode(call)
        }
        if (calls.xcmPallet.limitedTeleportAssets.enjinV100.is(call)) {
            return calls.xcmPallet.limitedTeleportAssets.enjinV100.decode(call)
        }

        if (calls.xcmPallet.limitedTeleportAssets.v1030.is(call)) {
            return calls.xcmPallet.limitedTeleportAssets.v1030.decode(call)
        }

        throw new UnknownVersionError(calls.xcmPallet.limitedTeleportAssets.name)
    }

    if (call.name === 'XcmPallet.teleport_assets') {
        if (calls.xcmPallet.teleportAssets.enjinV1032.is(call)) {
            return calls.xcmPallet.teleportAssets.enjinV1032.decode(call)
        }

        if (calls.xcmPallet.teleportAssets.enjinV100.is(call)) {
            return calls.xcmPallet.teleportAssets.enjinV100.decode(call)
        }

        if (calls.xcmPallet.teleportAssets.v1030.is(call)) {
            return calls.xcmPallet.teleportAssets.v1030.decode(call)
        }

        if (calls.xcmPallet.teleportAssets.v100.is(call)) {
            return calls.xcmPallet.teleportAssets.v100.decode(call)
        }

        throw new UnknownVersionError(calls.xcmPallet.teleportAssets.name)
    }

    if (call.name === 'FuelTanks.dispatch_and_touch' || call.name === 'FuelTanks.dispatch') {
        const data = call.name === 'FuelTanks.dispatch' ? calls.fuelTanks.dispatch : calls.fuelTanks.dispatchAndTouch

        let callData = null

        if (data.enjinV1032.is(call)) {
            callData = data.enjinV1032.decode(call)
        }

        if (data.enjinV1026.is(call)) {
            callData = data.enjinV1026.decode(call)
        }

        if (data.enjinV1023.is(call)) {
            callData = data.enjinV1023.decode(call)
        }

        if (data.enjinV1022.is(call)) {
            callData = data.enjinV1022.decode(call)
        }

        if (data.enjinV1021.is(call)) {
            callData = data.enjinV1021.decode(call)
        }

        if (data.enjinV120.is(call)) {
            callData = data.enjinV120.decode(call)
        }

        if (data.enjinV110.is(call)) {
            callData = data.enjinV110.decode(call)
        }

        if (data.enjinV101.is(call)) {
            callData = data.enjinV101.decode(call)
        }

        if (data.enjinV100.is(call)) {
            callData = data.enjinV100.decode(call)
        }

        if (data.v1032.is(call)) {
            callData = data.v1032.decode(call)
        }

        if (data.v1031.is(call)) {
            callData = data.v1031.decode(call)
        }

        if (data.v1030.is(call)) {
            callData = data.v1030.decode(call)
        }

        if (data.v1026.is(call)) {
            callData = data.v1026.decode(call)
        }

        if (data.v1023.is(call)) {
            callData = data.v1023.decode(call)
        }

        if (data.v1022.is(call)) {
            callData = data.v1022.decode(call)
        }

        if (data.v1021.is(call)) {
            callData = data.v1021.decode(call)
        }

        if (
            callData?.call.__kind === 'XcmPallet' &&
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

    const callData = await getCallData(item.call)
    if (!callData || !('dest' in callData) || !('beneficiary' in callData) || !('assets' in callData)) {
        return undefined
    }
    let destination: string | null = null
    let beneficiary: string | null = null
    let amount: bigint | null = null

    const destInterior = callData.dest.value.interior
    const beneficiaryInterior = callData.beneficiary.value.interior
    const assetInterior = callData.assets.value.at(0)

    if (destInterior.__kind === 'X1') {
        if ('__kind' in destInterior.value && destInterior.value.__kind === 'Parachain') {
            destination = config.chainName.startsWith('canary') ? 'canary-matrixchain' : 'enjin-matrixchain'
        }
        if (!('__kind' in destInterior.value) && destInterior.value[0].__kind === 'Parachain') {
            destination = config.chainName.startsWith('canary') ? 'canary-matrixchain' : 'enjin-matrixchain'
        }
    }

    if (beneficiaryInterior.__kind === 'X1') {
        if ('__kind' in beneficiaryInterior.value && beneficiaryInterior.value.__kind === 'AccountId32') {
            beneficiary = beneficiaryInterior.value.id
        }
        if (!('__kind' in beneficiaryInterior.value) && beneficiaryInterior.value[0].__kind === 'AccountId32') {
            beneficiary = beneficiaryInterior.value[0].id
        }

        if (assetInterior && assetInterior.fun.__kind === 'Fungible') {
            if ('__kind' in assetInterior.id && assetInterior.id.__kind === 'Concrete') {
                if (assetInterior.id.value.parents === 0) {
                    amount = assetInterior.fun.value
                }
            }
            if (!('__kind' in assetInterior.id)) {
                if (assetInterior.id.parents === 0) {
                    amount = assetInterior.fun.value
                }
            }
        }
    }

    if (destination === null || beneficiary === null || amount === null) {
        return undefined
    }

    const account = await getOrCreateAccount(ctx, (item.extrinsic!.signature!.address as any).value as string)
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
