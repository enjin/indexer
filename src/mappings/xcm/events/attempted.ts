import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { hexToU8a } from '@polkadot/util'
import { UnknownVersionError } from '../../../common/errors'
import { Event as EventModel, Extrinsic, TeleportBalanceWithdrawn } from '../../../model'
import { Call } from '../../../types/generated/support'
import { CommonContext } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'
import { PolkadotXcmLimitedTeleportAssetsCall } from '../../../types/generated/calls'

async function getCallData(ctx: CommonContext, call: Call) {
    const data = new PolkadotXcmLimitedTeleportAssetsCall(ctx, call)

    if (data.isMatrixV603) {
        return data.asMatrixV603
    }

    throw new UnknownVersionError(data.constructor.name)
}

export async function attempted(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'XcmPallet.Attempted', { event: { args: true; call: true; extrinsic: true } }>
): Promise<EventModel | undefined> {
    if (!item.event.call) return undefined

    const callData = await getCallData(ctx, item.event.call)

    let destination: number | null = null
    let beneficiary: Uint8Array | null = null
    let amount: bigint | null = null

    const destInterior = callData.dest.value.interior
    const beneficiaryInterior = callData.beneficiary.value.interior
    const assetsInterior = callData.assets.value.at(0)

    if (destInterior.__kind === 'X1' && destInterior.value.__kind === 'Parachain') {
        destination = destInterior.value.value
    }

    if (beneficiaryInterior.__kind === 'X1' && beneficiaryInterior.value.__kind === 'AccountId32') {
        beneficiary = beneficiaryInterior.value.id
    }

    if (
        assetsInterior &&
        assetsInterior.fun.__kind === 'Fungible' &&
        assetsInterior.id.__kind === 'Concrete' &&
        assetsInterior.id.value.parents === 0
    ) {
        amount = assetsInterior.fun.value
    }

    if (destination === null || beneficiary === null || amount === null) {
        return undefined
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
