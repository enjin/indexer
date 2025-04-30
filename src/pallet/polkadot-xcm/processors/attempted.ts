import { Event as EventModel, Extrinsic, TeleportBalanceWithdrawn } from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import { getOrCreateAccount, unwrapSigner } from '../../../util/entities'
import processorConfig from '../../../util/config'
import * as mappings from '../../index'

export async function attempted(ctx: CommonContext, block: Block, item: EventItem): Promise<EventModel | undefined> {
    if (item.call === undefined || !item.extrinsic) return undefined

    const call = mappings.polkadotXcm.utils.anyTeleportAssets(item.call)
    if (!('dest' in call) || !('beneficiary' in call) || !('assets' in call)) {
        return undefined
    }

    let destination: string | null = null
    let beneficiary: Uint8Array | string | null = null
    let amount: bigint | null = null

    const destInterior = call.dest.value.interior
    const beneficiaryInterior = call.beneficiary.value.interior
    const assetInterior = call.assets.value.at(0)

    if (destInterior.__kind === 'Here') {
        destination = processorConfig.chainName.startsWith('canary') ? 'canary-relaychain' : 'enjin-relaychain'
    }

    if (
        beneficiaryInterior.__kind === 'X1' &&
        '__kind' in beneficiaryInterior.value &&
        beneficiaryInterior.value.__kind === 'AccountId32'
    ) {
        beneficiary = beneficiaryInterior.value.id
    }

    if (
        assetInterior &&
        assetInterior.fun.__kind === 'Fungible' &&
        '__kind' in assetInterior.id &&
        assetInterior.id.__kind === 'Concrete' &&
        assetInterior.id.value.interior.__kind === 'Here'
    ) {
        amount = assetInterior.fun.value
    }

    if (destination === null || beneficiary === null || amount === null) {
        return undefined
    }

    const account = await getOrCreateAccount(ctx, unwrapSigner(item.extrinsic))
    const beneficiaryAccount = await getOrCreateAccount(ctx, beneficiary)

    return new EventModel({
        id: item.id,
        name: TeleportBalanceWithdrawn.name,
        extrinsic: new Extrinsic({ id: item.extrinsic.id }),
        data: new TeleportBalanceWithdrawn({
            beneficiary: beneficiaryAccount.id,
            destination,
            amount,
            account: account.id,
        }),
    })
}
