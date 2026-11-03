import { Block, EventItem } from '~/contexts'

/**
 * Why a base SNS event happened.
 *
 * The chain reports a runtime-initiated variant of a user action as its own event, next to the generic one (an
 * expired ephemeral token is `Burned` + `EphemeralTokenDestroyed`) or instead of it (a listing that cannot settle
 * at its minimum is `ListingRemovedUnderMinimum`, never `ListingCancelled`). Every consumer would have to know the
 * pairs, so the indexer folds them: SNS carries the generic name with a `cause` and the variant's data, and the
 * chain-level variants are not published. Their `Event` rows stay for the GraphQL history. Loan starts keep the
 * dedicated TokenLent message and tag its paired Transferred with loanStart so consumers can suppress duplicates.
 */
export const SnsCause = {
    burn: 'burn',
    ephemeralExpiry: 'ephemeralExpiry',
    transfer: 'transfer',
    loanStart: 'loanStart',
    loanReturn: 'loanReturn',
    cancelled: 'cancelled',
    expired: 'expired',
    underMinimum: 'underMinimum',
    abandoned: 'abandoned',
    fill: 'fill',
    match: 'match',
} as const

export type SnsCause = (typeof SnsCause)[keyof typeof SnsCause]

let current: { hash: string; events: EventItem[] } | undefined

/**
 * Called once per block before its events are processed, so that a processor can read the block's other events.
 * Only the current block is kept; a block processed again (hot blocks) is remembered again.
 */
export function rememberBlockEvents(hash: string, events: EventItem[]): void {
    current = { hash, events }
}

export function rememberedBlockEvents(block: Pick<Block, 'hash'>): readonly EventItem[] {
    return current?.hash === block.hash ? current.events : []
}

/**
 * The decoded data of the first event named `name` in `item`'s block, other than `item`, whose data satisfies
 * `matches`. With `sameExtrinsic`, only events of `item`'s extrinsic qualify, and none when `item` has no extrinsic
 * (a sweep from `on_idle`). Events before and after `item` both count: the chain deposits the variant event before
 * the generic one in some paths and after it in others.
 */
export function findSiblingEvent<T>(
    block: Pick<Block, 'hash'>,
    item: EventItem,
    name: string,
    decode: (event: EventItem) => T,
    matches: (data: T) => boolean,
    sameExtrinsic = false
): T | undefined {
    if (current?.hash !== block.hash) return undefined

    for (const event of current.events) {
        if (event.name !== name || event.id === item.id) continue
        if (sameExtrinsic && (!item.extrinsic || event.extrinsic?.id !== item.extrinsic.id)) continue
        const data = decode(event)
        if (matches(data)) return data
    }

    return undefined
}

/**
 * Pair each sibling with its nearest preceding, unmatched item of the same name as `item`. Only events in the
 * same non-empty extrinsic qualify. Unlike a broad sibling match, this identifies the specific transfer emitted by
 * a loan when an extrinsic also transfers the same token between the same accounts in other calls.
 * Matching is recomputed from chain order, so repeated processing never consumes a different pair.
 */
export function findPairedFollowingEvent<T, S>(
    block: Pick<Block, 'hash'>,
    item: EventItem,
    name: string,
    decodeItem: (event: EventItem) => T,
    decodeSibling: (event: EventItem) => S,
    matches: (itemData: T, siblingData: S) => boolean
): S | undefined {
    if (!item.extrinsic?.id || current?.hash !== block.hash) return undefined
    if (!current.events.some((event) => event.name === name && event.extrinsic?.id === item.extrinsic?.id)) {
        return undefined
    }

    const unmatched: { event: EventItem; data: T }[] = []
    for (const event of current.events) {
        if (event.extrinsic?.id !== item.extrinsic.id) continue
        if (event.name === item.name) {
            unmatched.push({ event, data: decodeItem(event) })
            continue
        }
        if (event.name !== name) continue

        const data = decodeSibling(event)
        for (let index = unmatched.length - 1; index >= 0; index--) {
            if (!matches(unmatched[index].data, data)) continue
            const [paired] = unmatched.splice(index, 1)
            if (paired.event.id === item.id) return data
            break
        }
    }

    return undefined
}
