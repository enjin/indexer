import { BlockHeader } from '@subsquid/substrate-processor'
import { Event as EventModel, Extrinsic, TeleportBalanceWithdrawn } from '~/model'
import { CommonContext, EventItem } from '~/contexts'
import * as mappings from '~/pallet/index'
import { getOrCreateAccount, unwrapSigner } from '~/util/entities'
import processorConfig from '~/util/config'
import { events } from '~/type'

interface AttemptedSpec {
    id: string
    extrinsicId?: string
    destination: string
    beneficiary: Uint8Array | string
    amount: bigint
}

const attemptedSpecs: AttemptedSpec[] = []

export function collect(eventItem: EventItem): void {
    try {
        if (eventItem.name !== events.polkadotXcm.attempted.name) return
        if (eventItem.call === undefined || !eventItem.extrinsic) return

        const call = mappings.polkadotXcm.utils.anyTeleportAssets(eventItem.call)
        if (!('dest' in call) || !('beneficiary' in call) || !('assets' in call)) return

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

        if (destination && beneficiary && amount !== null) {
            attemptedSpecs.push({
                id: eventItem.id,
                extrinsicId: eventItem.extrinsic.id,
                destination,
                beneficiary,
                amount,
            })
        }
    } catch {}
}

export async function processBatch(ctx: CommonContext, _lastBlock: BlockHeader): Promise<void> {
    if (attemptedSpecs.length === 0) return

    const eventsToSave: EventModel[] = []
    for (const s of attemptedSpecs) {
        const account = await getOrCreateAccount(ctx, unwrapSigner({ id: s.extrinsicId } as any))
        const beneficiaryAccount = await getOrCreateAccount(ctx, s.beneficiary)

        eventsToSave.push(
            new EventModel({
                id: s.id,
                name: TeleportBalanceWithdrawn.name,
                extrinsic: s.extrinsicId ? new Extrinsic({ id: s.extrinsicId }) : null,
                data: new TeleportBalanceWithdrawn({
                    beneficiary: beneficiaryAccount.id,
                    destination: s.destination,
                    amount: s.amount,
                    account: account.id,
                }),
            })
        )
    }

    if (eventsToSave.length) await ctx.store.save(eventsToSave)
    attemptedSpecs.length = 0
}
