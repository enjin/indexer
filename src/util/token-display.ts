import { Block } from '~/contexts'
import { Token } from '~/model'

/** What a wallet or marketplace shows for a token: its name and one image, resolved from the indexed metadata. */
export type TokenDisplay = {
    name: string | null
    image: string | null
}

/**
 * Resolved the way Enjin Wallet displays an asset (walletapi `app/EnjinChain/Asset.php`, `getDisplayName` and
 * `getDefaultImage`), so a row kept after the token is gone shows what the asset showed: the name is the on-chain
 * native name unless it is empty or `0x`, else the metadata name; the image is the metadata fallback image. A missing
 * value stays null so the consumer applies its own default (`#<tokenId>`, its placeholder image).
 */
export function tokenDisplay(token: Token): TokenDisplay {
    const nativeName = token.nativeMetadata?.name

    return {
        name: (nativeName && nativeName !== '0x' ? nativeName : token.metadata?.name) || null,
        image: token.metadata?.fallbackImage || null,
    }
}

/** What a Burned processed after its token was destroyed in the same block still needs from the Token row. */
export type DestroyedToken = TokenDisplay & {
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
        ...tokenDisplay(token),
        decimalCount: token.nativeMetadata?.decimalCount,
        infusion: token.infusion,
    })
}

export function recallDestroyedToken(block: Pick<Block, 'hash'>, tokenId: string): DestroyedToken | undefined {
    return destroyed && destroyed.hash === block.hash ? destroyed.tokens.get(tokenId) : undefined
}
