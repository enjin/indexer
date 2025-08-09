import { In, Not } from 'typeorm'
import { BlockHeader } from '@subsquid/substrate-processor'
import { CommonContext, EventItem } from '~/contexts'
import * as mappings from '~/pallet/index'
import { NominationPool, PoolsOffers, PoolState, StakeExchangeOffer, StakeExchangeTokenFilterType } from '~/model'

interface OfferPoolsSpec {
    offerId: string
    whitelist?: string[]
    blockList?: string[]
    allOpen: boolean
}
const offerPoolsSpecs = new Map<string, OfferPoolsSpec>()

export function collect(eventItem: EventItem): void {
    try {
        // Only interested in offerCreated events with tokenFilter specified
        const isOfferCreated = mappings.stakeExchange.events.offerCreated(eventItem)
        const offerId = isOfferCreated.offerId.toString()
        const tf: any = isOfferCreated.offer.tokenFilter
        if (!tf) return
        if (tf.__kind === StakeExchangeTokenFilterType.Whitelist) {
            offerPoolsSpecs.set(offerId, {
                offerId,
                whitelist: tf.value.map((v: bigint) => v.toString()),
                allOpen: false,
            })
        } else if (tf.__kind === StakeExchangeTokenFilterType.BlockList) {
            offerPoolsSpecs.set(offerId, {
                offerId,
                blockList: tf.value.map((v: bigint) => v.toString()),
                allOpen: false,
            })
        } else if (tf.__kind === StakeExchangeTokenFilterType.All) {
            offerPoolsSpecs.set(offerId, { offerId, allOpen: true })
        }
    } catch {}
}

export async function processBatch(ctx: CommonContext, _lastBlock: BlockHeader): Promise<void> {
    const entries = Array.from(offerPoolsSpecs.values())
    if (entries.length === 0) return

    // Load offers once
    const offerIds = entries.map((e) => e.offerId)
    const offers = await ctx.store.find(StakeExchangeOffer, { where: { id: In(offerIds) } })
    const offerById = new Map(offers.map((o) => [o.id, o]))

    const toSave: PoolsOffers[] = []

    for (const spec of entries) {
        const offer = offerById.get(spec.offerId)
        if (!offer) continue

        let pools: NominationPool[] = []
        if (spec.whitelist && spec.whitelist.length) {
            pools = await ctx.store.find(NominationPool, { where: { state: PoolState.Open, id: In(spec.whitelist) } })
        } else if (spec.blockList && spec.blockList.length) {
            pools = await ctx.store.find(NominationPool, {
                where: { state: PoolState.Open, id: Not(In(spec.blockList)) },
            })
        } else if (spec.allOpen) {
            pools = await ctx.store.find(NominationPool, { where: { state: PoolState.Open } })
        }

        for (const pool of pools) {
            toSave.push(new PoolsOffers({ id: `${pool.id}-${offer.id}`, offer, pool }))
        }
    }

    if (toSave.length > 0) await ctx.store.save(toSave)

    offerPoolsSpecs.clear()
}
