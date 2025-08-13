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
    signer: string
}

const attemptedSpecs: AttemptedSpec[] = []

export function collect(eventItem: EventItem): void {
    try {
        if (eventItem.name !== events.xcmPallet.attempted.name) return
        if (eventItem.call === undefined || !eventItem.extrinsic) return

        const call = mappings.xcmPallet.utils.anyTeleportAssets(eventItem.call)
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
            const signer = unwrapSigner(eventItem.extrinsic)
            attemptedSpecs.push({
                id: eventItem.id,
                extrinsicId: eventItem.extrinsic.id,
                destination,
                beneficiary,
                amount,
                signer,
            })
        }
    } catch {}
}

export async function processBatch(ctx: CommonContext, _lastBlock: BlockHeader): Promise<void> {
    if (attemptedSpecs.length === 0) return

    const eventsToSave: EventModel[] = []
    const accountCache = new Map<string, string>()
    const resolveAccount = async (id: Uint8Array | string): Promise<string> => {
        const key = typeof id === 'string' ? id : Buffer.from(id as Uint8Array).toString('hex')
        const cached = accountCache.get(key)
        if (cached) return cached
        const acc = await getOrCreateAccount(ctx, id)
        accountCache.set(key, acc.id)
        return acc.id
    }

    for (const s of attemptedSpecs) {
        const accountId = await resolveAccount(s.signer)
        const beneficiaryId = await resolveAccount(s.beneficiary)

        eventsToSave.push(
            new EventModel({
                id: s.id,
                name: TeleportBalanceWithdrawn.name,
                extrinsic: s.extrinsicId ? new Extrinsic({ id: s.extrinsicId }) : null,
                data: new TeleportBalanceWithdrawn({
                    beneficiary: beneficiaryId,
                    destination: s.destination,
                    amount: s.amount,
                    account: accountId,
                }),
            })
        )
    }

    if (eventsToSave.length) await ctx.store.save(eventsToSave)
    attemptedSpecs.length = 0
}
