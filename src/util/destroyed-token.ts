import { Block } from '~/contexts'
import { Metadata, NativeTokenMetadata, Token } from '~/model'

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
