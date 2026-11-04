import { Block } from '~/contexts'
import { Token } from '~/model'

/** What a wallet or marketplace shows for a token: its name and one image, resolved from the indexed metadata. */
export type TokenDisplay = {
    name: string | null
    image: string | null
}

/**
 * The display name is the metadata name (also copied to `Token.name` by the metadata service), else the on-chain
 * native name of a fungible token. The display image is the first media url, else the metadata fallback image.
 */
export function tokenDisplay(token: Token): TokenDisplay {
    const media = token.metadata?.media?.find((entry) => entry?.url)

    return {
        name: token.metadata?.name ?? token.name ?? token.nativeMetadata?.name ?? null,
        image: media?.url ?? token.metadata?.fallbackImage ?? null,
    }
}

let destroyed: { hash: string; tokens: Map<string, TokenDisplay> } | undefined

/**
 * Keeps the display data of a token the current block destroys, so that a processor running later in the same block
 * can still read it after the Token row is gone. The chain burns an expired ephemeral token after it destroyed it
 * (canary block 13550470: TokenDestroyed, then Burned, then EphemeralTokenDestroyed), and the store deletes the row
 * at once. Only the current block is kept; a block processed again (hot blocks) remembers it again.
 */
export function rememberDestroyedTokenDisplay(block: Pick<Block, 'hash'>, token: Token): void {
    if (!destroyed || destroyed.hash !== block.hash) destroyed = { hash: block.hash, tokens: new Map() }
    destroyed.tokens.set(token.id, tokenDisplay(token))
}

export function recallDestroyedTokenDisplay(block: Pick<Block, 'hash'>, tokenId: string): TokenDisplay | undefined {
    return destroyed && destroyed.hash === block.hash ? destroyed.tokens.get(tokenId) : undefined
}
