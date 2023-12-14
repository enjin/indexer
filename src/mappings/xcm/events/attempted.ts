import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { hexToU8a } from '@polkadot/util'
import { UnknownVersionError } from '../../../common/errors'
import { Event as EventModel, Extrinsic, TeleportBalanceWithdrawn } from '../../../model'
import { Call } from '../../../types/generated/support'
import { CommonContext } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'
import {
    FuelTanksDispatchAndTouchCall,
    FuelTanksDispatchCall,
    PolkadotXcmLimitedReserveTransferAssetsCall,
    PolkadotXcmLimitedTeleportAssetsCall,
    PolkadotXcmTeleportAssetsCall,
} from '../../../types/generated/calls'
import config from '../../../config'

async function getCallData(ctx: CommonContext, call: Call) {
    if (call.name === 'PolkadotXcm.limited_teleport_assets') {
        const data = new PolkadotXcmLimitedTeleportAssetsCall(ctx, call)
        if (data.isMatrixEnjinV603) {
            return data.asMatrixEnjinV603
        }
        throw new UnknownVersionError(data.constructor.name)
    } else if (call.name === 'PolkadotXcm.teleport_assets') {
        const data = new PolkadotXcmTeleportAssetsCall(ctx, call)
        if (data.isMatrixEnjinV603) {
            return data.asMatrixEnjinV603
        }
        throw new UnknownVersionError(data.constructor.name)
    } else if (call.name === 'FuelTanks.dispatch_and_touch' || call.name === 'FuelTanks.dispatch') {
        let data: FuelTanksDispatchCall | FuelTanksDispatchAndTouchCall
        if (call.name === 'FuelTanks.dispatch') {
            data = new FuelTanksDispatchCall(ctx, call)
        } else {
            data = new FuelTanksDispatchAndTouchCall(ctx, call)
        }

        if (
            data.isMatrixEnjinV1000 &&
            data.asMatrixEnjinV1000.call.__kind === 'PolkadotXcm' &&
            (data.asMatrixEnjinV1000.call.value.__kind === 'teleport_assets' ||
                data.asMatrixEnjinV1000.call.value.__kind === 'limited_teleport_assets')
        ) {
            return data.asMatrixEnjinV1000.call.value
        }

        if (
            data.isMatrixEnjinV603 &&
            data.asMatrixEnjinV603.call.__kind === 'PolkadotXcm' &&
            (data.asMatrixEnjinV603.call.value.__kind === 'teleport_assets' ||
                data.asMatrixEnjinV603.call.value.__kind === 'limited_teleport_assets')
        ) {
            return data.asMatrixEnjinV603.call.value
        }
        if (
            data.isV1003 &&
            data.asV1003.call.__kind === 'PolkadotXcm' &&
            (data.asV1003.call.value.__kind === 'teleport_assets' || data.asV1003.call.value.__kind === 'limited_teleport_assets')
        ) {
            return data.asV1003.call.value
        }

        if (
            data.isV1000 &&
            data.asV1000.call.__kind === 'PolkadotXcm' &&
            (data.asV1000.call.value.__kind === 'teleport_assets' || data.asV1000.call.value.__kind === 'limited_teleport_assets')
        ) {
            return data.asV1000.call.value
        }

        throw new UnknownVersionError(data.constructor.name)
    } else if (call.name === 'PolkadotXcm.limited_reserve_transfer_assets') {
        const data = new PolkadotXcmLimitedReserveTransferAssetsCall(ctx, call)
        if (data.isMatrixEnjinV603) {
            return data.asMatrixEnjinV603
        }

        throw new UnknownVersionError(data.constructor.name)
    } else {
        throw new Error(`Invalid call ${call.name}`)
    }
}

export async function attempted(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'PolkadotXcm.Attempted', { event: { args: true; call: true; extrinsic: true } }>
): Promise<EventModel | undefined> {
    if (!item.event.call) return undefined

    const callData = await getCallData(ctx, item.event.call)

    let destination: string | null = null
    let beneficiary: Uint8Array | null = null
    let amount: bigint | null = null

    const destInterior = callData.dest.value.interior
    const beneficiaryInterior = callData.beneficiary.value.interior
    const assetsInterior = callData.assets.value.at(0)

    if (destInterior.__kind === 'Here') {
        destination = config.chainName.startsWith('canary') ? 'canary-relaychain' : 'enjin-relaychain'
    }

    if (beneficiaryInterior.__kind === 'X1' && beneficiaryInterior.value.__kind === 'AccountId32') {
        beneficiary = beneficiaryInterior.value.id
    }

    if (
        assetsInterior &&
        assetsInterior.fun.__kind === 'Fungible' &&
        assetsInterior.id.__kind === 'Concrete' &&
        assetsInterior.id.value.interior.__kind === 'Here'
    ) {
        amount = assetsInterior.fun.value
    }

    if (destination === null || beneficiary === null || amount === null) {
        throw new Error('Invalid call data')
    }

    const account = await getOrCreateAccount(ctx, hexToU8a(item.event.extrinsic.signature?.address.value))
    const beneficiaryAccount = await getOrCreateAccount(ctx, beneficiary)

    return new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        data: new TeleportBalanceWithdrawn({
            beneficiary: beneficiaryAccount.id,
            destination,
            amount,
            account: account.id,
        }),
    })
}
