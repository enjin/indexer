import { hexToU8a } from '@polkadot/util'
import { Event as EventModel, Extrinsic, TeleportBalanceWithdrawn } from '../../model'
import { BlockHeader, CommonContext, EventItem } from '../../common/types/contexts'
import { getOrCreateAccount } from '../../common/util/entities'
import config from '../../config'
import * as mappings from './../../mappings'

export async function attempted(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<EventModel | undefined> {
    if (!item.call) return undefined

    const callData = mappings.xcm.calls.teleportAssets(item.call)
    if (!('dest' in callData) || !('beneficiary' in callData) || !('assets' in callData)) {
        return undefined
    }
    let destination: string | null = null
    const beneficiary: Uint8Array | null = null
    const amount: bigint | null = null

    const destInterior = callData.dest.value.interior
    const beneficiaryInterior = callData.beneficiary.value.interior
    const assetInterior = callData.assets.value.at(0)

    if (destInterior.__kind === 'Here') {
        destination = config.chainName.startsWith('canary') ? 'canary-relay' : 'enjin-relay'
    }

    // TODO: FIX THIS
    // if (beneficiaryInterior.value.__kind === 'X1' && '__kind' in beneficiaryInterior.value && beneficiaryInterior.value.__kind === 'AccountId32') {
    //     beneficiary = beneficiaryInterior.value
    // }
    //
    // if (
    //     assetInterior &&
    //     assetInterior.fun.__kind === 'Fungible' &&
    //     assetInterior.id.__kind === 'Concrete' &&
    //     assetInterior.id.value.interior.__kind === 'Here'
    // ) {
    //     amount = assetInterior.fun.value
    // }
    //
    // if (destination === null || beneficiary === null || amount === null) {
    //     return undefined
    // }

    const account = await getOrCreateAccount(ctx, hexToU8a(item.extrinsic.signature.address))
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
