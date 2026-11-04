import { Block, EventItem } from '~/contexts'
import { Metadata, NativeTokenMetadata, Token } from '~/model'
import { multiTokens } from '~/type/events'
import { rememberedBlockEvents } from '~/util/sns-cause'

/**
 * The token's metadata as indexed (`Token.metadata`, with group and collection inheritance applied, and the on-chain
 * `Token.nativeMetadata`), copied as-is onto a burn that destroys the token. Consumers apply their own display rules.
 */
export type TokenSnapshot = {
    metadata: Metadata | null
    nativeMetadata: NativeTokenMetadata | null
}

export function tokenSnapshot(token: Token): TokenSnapshot {
    return { metadata: token.metadata ?? null, nativeMetadata: token.nativeMetadata ?? null }
}

/** What a Burned processed after its token was destroyed in the same block still needs from the Token row. */
export type DestroyedToken = TokenSnapshot & {
    decimalCount: number | undefined
    infusion: bigint
}

let destroyed: { hash: string; tokens: Map<string, DestroyedToken> } | undefined

/**
 * Keeps what a later processor in the same block needs from a token the current block destroys, after the Token row
 * is gone. The chain burns an expired ephemeral token after it destroyed it (canary block 13550470: TokenDestroyed,
 * then Burned, then EphemeralTokenDestroyed), and the store deletes the row at once. Only the current block is kept;
 * a block processed again (hot blocks) remembers it again.
 */
export function rememberDestroyedToken(block: Pick<Block, 'hash'>, token: Token): void {
    if (!destroyed || destroyed.hash !== block.hash) destroyed = { hash: block.hash, tokens: new Map() }
    destroyed.tokens.set(token.id, {
        ...tokenSnapshot(token),
        decimalCount: token.nativeMetadata?.decimalCount,
        infusion: token.infusion,
    })
}

export function recallDestroyedToken(block: Pick<Block, 'hash'>, tokenId: string): DestroyedToken | undefined {
    return destroyed && destroyed.hash === block.hash ? destroyed.tokens.get(tokenId) : undefined
}

let destroyedByExtrinsic: { events: readonly EventItem[]; tokens: Map<string, Set<string>> } | undefined

/**
 * Whether `item`'s extrinsic also destroys token `tokenId` (`<collectionId>-<tokenId>`): a holder's burn that removes
 * the token storage emits Burned and then TokenDestroyed in the same extrinsic. A TokenDestroyed in another extrinsic
 * belongs to another holder's burn, and an event outside any extrinsic (on_idle) never matches; the expiry path uses
 * the TokenDestroyed stash instead. The block's TokenDestroyed events are decoded once per block, not once per burn.
 */
export function extrinsicDestroysToken(
    block: Pick<Block, 'hash'>,
    item: EventItem,
    tokenId: string,
    decode: (event: EventItem) => { collectionId: bigint; tokenId: bigint }
): boolean {
    const extrinsicId = item.extrinsic?.id
    if (!extrinsicId) return false

    const events = rememberedBlockEvents(block)
    if (!destroyedByExtrinsic || destroyedByExtrinsic.events !== events) {
        const tokens = new Map<string, Set<string>>()
        for (const event of events) {
            const eventExtrinsicId = event.extrinsic?.id
            if (event.name !== multiTokens.tokenDestroyed.name || !eventExtrinsicId) continue
            const data = decode(event)
            const destroyedTokens = tokens.get(eventExtrinsicId) ?? new Set<string>()
            destroyedTokens.add(`${data.collectionId}-${data.tokenId}`)
            tokens.set(eventExtrinsicId, destroyedTokens)
        }
        destroyedByExtrinsic = { events, tokens }
    }

    return destroyedByExtrinsic.tokens.get(extrinsicId)?.has(tokenId) ?? false
}
