import { hexToString } from '@polkadot/util'
import { NativeTokenMetadata } from '~/model'
import { safeString } from '~/util/tools'

type TokenMetadata = { __kind: string } | { decimalCount: number; name: string; symbol: string }

// Only the current `{ decimalCount, name, symbol }` layout carries native metadata; legacy `Native`/`Foreign` kinds do not.
export function toNativeTokenMetadata(metadata: TokenMetadata | undefined): NativeTokenMetadata | null {
    if (metadata === undefined || '__kind' in metadata) return null
    return new NativeTokenMetadata({
        decimalCount: metadata.decimalCount,
        symbol: safeString(hexToString(metadata.symbol)),
        name: safeString(hexToString(metadata.name)),
    })
}
