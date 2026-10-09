import { Event as EventModel, Extrinsic, TeleportBalanceWithdrawn } from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import { getOrCreateAccount, unwrapSigner } from '~/util/entities'
import processorConfig from '~/util/config'
import * as mappings from '~/pallet/index'
import { EventHandlerResult } from '~/processor.handler'
import { nativeTeleportAmount, teleportBeneficiary } from '~/pallet/common/teleport'

export async function attempted(ctx: CommonContext, block: Block, item: EventItem): Promise<EventHandlerResult> {
    if (item.call === undefined || !item.extrinsic) return undefined

    const call = mappings.polkadotXcm.utils.anyTeleportAssets(item.call)
    if (!('dest' in call) || !('beneficiary' in call) || !('assets' in call)) {
        return undefined
    }

    let destination: string | null = null
    const destInterior = call.dest.value.interior
    const beneficiary = teleportBeneficiary(call.beneficiary)
    const amount = nativeTeleportAmount(call.assets)

    if (destInterior.__kind === 'Here') {
        destination = processorConfig.chainName.startsWith('canary') ? 'canary-relaychain' : 'enjin-relaychain'
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
