import { DefaultMintParams, FlexibleMintParams } from '~/pallet/common/types'
import { normalizeOptionalMintRateLimit } from '~/pallet/multi-tokens/storage/mint-rate-limit'

export function normalizeDefaultMintParams(value: unknown): DefaultMintParams {
    const params = value as DefaultMintParams & { mintRateLimit?: unknown }
    if (params.__kind !== 'CreateToken') return params

    return {
        ...params,
        mintRateLimit: normalizeOptionalMintRateLimit(params.mintRateLimit),
    }
}

export function normalizeFlexibleMintParams(value: unknown): FlexibleMintParams {
    const params = value as FlexibleMintParams & { mintRateLimit?: unknown }
    if ('__kind' in params) {
        if (params.__kind === 'CreateToken') return normalizeDefaultMintParams(params)
        if (params.__kind === 'Mint') return params
        return {
            ...params,
            value: {
                ...params.value,
                mintRateLimit: normalizeOptionalMintRateLimit(
                    (params.value as typeof params.value & { mintRateLimit?: unknown }).mintRateLimit
                ),
            },
        }
    }

    return {
        ...params,
        mintRateLimit: normalizeOptionalMintRateLimit(params.mintRateLimit),
    }
}
