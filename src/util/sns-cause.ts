import { Block, EventItem } from '~/contexts'

/**
 * Why a base SNS event happened.
 *
 * The chain reports a runtime-initiated variant of a user action as its own event, next to the generic one (an
 * expired ephemeral token is `Burned` + `EphemeralTokenDestroyed`) or instead of it (a listing that cannot settle
 * at its minimum is `ListingRemovedUnderMinimum`, never `ListingCancelled`). Every consumer would have to know the
 * pairs, so the indexer folds them: SNS carries the generic name with a `cause` and the variant's data, and the
 * chain-level variants are not published. Their `Event` rows stay for the GraphQL history.
 */
export const SnsCause = {
    burn: 'burn',
    ephemeralExpiry: 'ephemeralExpiry',
    transfer: 'transfer',
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
