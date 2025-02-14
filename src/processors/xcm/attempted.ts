import { Event as EventModel, Extrinsic, TeleportBalanceWithdrawn } from '../../model'
import { BlockHeader, CallItem, CommonContext, EventItem } from '../../contexts'
import { getOrCreateAccount, unwrapSigner } from '../../utils/entities'
import config from '../../config'
import * as mappings from './../../mappings'
import { calls } from '../../types'
import { match } from 'ts-pattern'
import { UnsupportedCallError } from '../../utils/errors'

export async function attempted(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem
): Promise<EventModel | undefined> {
    if (item.call === undefined || !item.extrinsic) return undefined

    // const call = match(item.call)
    //     .returnType<unknown>()
    //     .with({ name: calls.xcmPallet.limitedTeleportAssets.name }, (call) =>
    //         mappings.xcmPallet.calls.limitedTeleportAssets(call)
    //     )
    //     .with({ name: calls.polkadotXcm.limitedTeleportAssets.name }, (call) =>
    //         mappings.polkadotXcm.calls.limitedTeleportAssets(call)
    //     )
    //     .with({ name: calls.xcmPallet.teleportAssets.name }, (call) => mappings.xcmPallet.calls.teleportAssets(call))
    //     .with({ name: calls.polkadotXcm.teleportAssets.name }, (call) =>
    //         mappings.polkadotXcm.calls.teleportAssets(call)
    //     )
    //     .otherwise(() => {
    //         throw new UnsupportedCallError(item.call as CallItem)
    //     })
    //
    // console.log(call)
    //
    // if (!('dest' in call) || !('beneficiary' in call) || !('assets' in call)) {
    //     return undefined
    // }
    //
    // let destination: string | null = null
    // let beneficiary: Uint8Array | string | null = null
    // let amount: bigint | null = null
    //
    // const destInterior = call.dest.value.interior
    // const beneficiaryInterior = call.beneficiary.value.interior
    // const assetInterior = call.assets.value.at(0)
    //
    // if (destInterior.__kind === 'Here') {
    //     destination = config.chainName.startsWith('canary') ? 'canary-relay' : 'enjin-relay'
    // }
    //
    // if (
    //     beneficiaryInterior.__kind === 'X1' &&
    //     '__kind' in beneficiaryInterior.value &&
    //     beneficiaryInterior.value.__kind === 'AccountId32'
    // ) {
    //     beneficiary = beneficiaryInterior.value.id
    // }
    //
    // if (
    //     assetInterior &&
    //     assetInterior.fun.__kind === 'Fungible' &&
    //     '__kind' in assetInterior.id &&
    //     assetInterior.id.__kind === 'Concrete' &&
    //     assetInterior.id.value.interior.__kind === 'Here'
    // ) {
    //     amount = assetInterior.fun.value
    // }
    //
    // if (destination === null || beneficiary === null || amount === null) {
    //     return undefined
    // }
    //
    // const account = await getOrCreateAccount(ctx, unwrapSigner(item.extrinsic))
    // const beneficiaryAccount = await getOrCreateAccount(ctx, beneficiary)
    //
    // return new EventModel({
    //     id: item.id,
    //     name: TeleportBalanceWithdrawn.name,
    //     extrinsic: new Extrinsic({ id: item.extrinsic.id }),
    //     data: new TeleportBalanceWithdrawn({
    //         beneficiary: beneficiaryAccount.id,
    //         destination,
    //         amount,
    //         account: account.id,
    //     }),
    // })

    return undefined
}
