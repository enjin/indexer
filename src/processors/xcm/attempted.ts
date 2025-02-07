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
    let beneficiary: Uint8Array | null = null
    let amount: bigint | null = null

    const destInterior = callData.dest.value.interior
    const beneficiaryInterior = callData.beneficiary.value.interior
    const assetInterior = callData.assets.value.at(0)

    if (destInterior.__kind === 'Here') {
        destination = config.chainName.startsWith('canary') ? 'canary-relay' : 'enjin-relay'
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
