import { Event as EventModel, Extrinsic, TeleportBalanceWithdrawn } from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import { getOrCreateAccount, unwrapSigner } from '~/util/entities'
import processorConfig from '~/util/config'
import * as mappings from '~/pallet/index'
import { EventHandlerResult } from '~/processor.handler'
import { nativeTeleportAmount, teleportBeneficiary } from '~/pallet/common/teleport'
import { calls } from '~/type'

export async function attempted(ctx: CommonContext, block: Block, item: EventItem): Promise<EventHandlerResult> {
    if (item.call === undefined || !item.extrinsic) return undefined

    // Only process teleport/transfer calls; other XCM calls (e.g., execute, send) can emit Attempted
    // but are not relevant to transfer indexing
    const supportedCalls = [
        calls.xcmPallet.limitedReserveTransferAssets.name,
        calls.xcmPallet.limitedTeleportAssets.name,
        calls.xcmPallet.teleportAssets.name,
        calls.xcmPallet.transferAssets.name,
    ]
    if (!supportedCalls.includes(item.call.name)) {
        return undefined
    }

    const call = mappings.xcmPallet.utils.anyTeleportAssets(item.call)
    if (!('dest' in call) || !('beneficiary' in call) || !('assets' in call)) {
        return undefined
    }

    let destination: string | null = null
    const destInterior = call.dest.value.interior
    const beneficiary = teleportBeneficiary(call.beneficiary)
    const amount = nativeTeleportAmount(call.assets)

    if (destInterior.__kind === 'X1') {
        destination = processorConfig.chainName.startsWith('canary') ? 'canary-matrixchain' : 'enjin-matrixchain'
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
