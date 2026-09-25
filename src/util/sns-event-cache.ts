import type { Block, EventItem } from '~/contexts'
import type { SnsEvent } from '~/util/sns'

type BlockIdentity = Pick<Block, 'height' | 'hash'>
type CachedEvent = {
    eventId: string
    blockHeight: number
    blockHash: string
    replayKey?: string
    orphaned: boolean
    expiresAt: number
}

export class SnsEventCache {
    private readonly blocks = new Map<number, { hash: string; expiresAt: number }>()
    private readonly events = new Map<string, CachedEvent>()
    private readonly orphaned = new Map<string, CachedEvent>()
    private readonly replayKeys = new WeakMap<NonNullable<EventItem['extrinsic']>, Map<number, string>>()

    constructor(
        private readonly now: () => number = Date.now,
        private readonly ttlMs = 30_000
    ) {}

    public beginBlock(block: BlockIdentity): void {
        this.prune()
        const previous = this.blocks.get(block.height)
        if (previous && previous.hash !== block.hash) {
            // Subsquid replays from the fork point. Every cached descendant of
            // the replaced block belongs to the old branch, even empty blocks.
            for (const height of this.blocks.keys()) {
                if (height >= block.height) this.blocks.delete(height)
            }
            for (const event of this.events.values()) {
                if (event.blockHeight >= block.height && !event.orphaned) {
                    event.orphaned = true
                    if (event.replayKey) this.orphaned.set(event.replayKey, event)
                }
            }
        }
        this.blocks.set(block.height, { hash: block.hash, expiresAt: this.now() + this.ttlMs })
    }

    public prepare(block: BlockIdentity, item: EventItem, notification: SnsEvent): SnsEvent | undefined {
        const cached = this.events.get(this.eventKey(block, item))
        if (cached && cached.expiresAt > this.now() && !cached.orphaned) return

        const key = this.replayKey(item)
        if (key) {
            // Only a transaction event on an observed orphaned branch can be a
            // reorganization. Equal payloads on canonical blocks prove nothing.
            const previous = this.orphaned.get(key)
            if (previous && previous.expiresAt > this.now() && previous.blockHash !== block.hash) {
                return {
                    ...notification,
                    body: { ...notification.body, isReorganized: true, reorganizedId: previous.eventId },
                }
            }
        }
        return notification
    }

    public record(block: BlockIdentity, item: EventItem, notification: SnsEvent): void {
        const key = this.eventKey(block, item)
        const replayKey = this.replayKey(item)
        if (replayKey) this.orphaned.delete(replayKey)
        // Refresh insertion order when a formerly orphaned block is canonical again.
        this.events.delete(key)
        this.events.set(key, {
            eventId: notification.id,
            blockHeight: block.height,
            blockHash: block.hash,
            replayKey,
            orphaned: false,
            expiresAt: this.now() + this.ttlMs,
        })
    }

    private replayKey(item: EventItem): string | undefined {
        const extrinsic = item.extrinsic
        // Unsigned extrinsics can have identical bytes in independent executions.
        if (!extrinsic?.hash || !extrinsic.signature) return
        let keys = this.replayKeys.get(extrinsic)
        if (!keys) {
            keys = new Map()
            const occurrences = new Map<string, number>()
            // The transaction hash survives reinclusion; block-wide indices do not.
            // Call address and occurrence distinguish repeated events in a batch.
            for (const event of extrinsic.events) {
                const path = JSON.stringify([event.name, event.callAddress ?? []])
                const occurrence = occurrences.get(path) ?? 0
                keys.set(event.index, JSON.stringify([extrinsic.hash, path, occurrence]))
                occurrences.set(path, occurrence + 1)
            }
            this.replayKeys.set(extrinsic, keys)
        }
        return keys.get(item.index)
    }

    private eventKey(block: BlockIdentity, item: EventItem): string {
        return `${block.hash}:${item.index}`
    }

    private prune(): void {
        const now = this.now()
        for (const [height, block] of this.blocks) {
            if (block.expiresAt <= now) this.blocks.delete(height)
        }
        for (const [key, event] of this.events) {
            if (event.expiresAt <= now) this.events.delete(key)
        }
        for (const [key, event] of this.orphaned) {
            if (event.expiresAt <= now) this.orphaned.delete(key)
        }
    }
}
