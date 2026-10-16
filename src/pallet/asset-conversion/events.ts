import { match } from 'ts-pattern'
import { EventItem } from '~/contexts'
import { assetConversion } from '~/type/events'
import { UnsupportedEventError } from '~/util/errors'

export type AssetId = { collectionId: bigint; tokenId: bigint }

/**
 * The multi-tokens assets and accounts an AssetConversion event moved. `pools` are pool ids (ordered asset pairs)
 * whose pool account changed; the processor derives the account from the pool id.
 */
export type AssetConversionEffect = {
    accounts: { accountId: string; assets: AssetId[] }[]
    pools: [AssetId, AssetId][]
    lpTokens: AssetId[]
}

function decode<T>(item: EventItem, type: { is(event: EventItem): boolean; decode(event: EventItem): T }): T {
    if (!type.is(item)) throw new UnsupportedEventError(item)
    return type.decode(item)
}

/** `Ascending` pool locator: a hop between two assets uses the pool keyed by the pair in ascending order. */
export function poolIdOf(a: AssetId, b: AssetId): [AssetId, AssetId] {
    const aFirst = a.collectionId < b.collectionId || (a.collectionId === b.collectionId && a.tokenId < b.tokenId)
    return aFirst ? [a, b] : [b, a]
}

export function assetConversionEffect(item: EventItem): AssetConversionEffect {
    return match(item.name)
        .returnType<AssetConversionEffect>()
        .with(assetConversion.poolCreated.name, () => {
            const e = decode(item, assetConversion.poolCreated.matrixEnjinV1041)
            return {
                accounts: [{ accountId: e.poolAccount, assets: [...e.poolId, e.lpToken] }],
                pools: [e.poolId],
                lpTokens: [e.lpToken],
            }
        })
        .with(assetConversion.liquidityAdded.name, () => {
            const e = decode(item, assetConversion.liquidityAdded.matrixEnjinV1041)
            return {
                accounts: [
                    { accountId: e.who, assets: [...e.poolId] },
                    { accountId: e.mintTo, assets: [e.lpToken] },
                ],
                pools: [e.poolId],
                lpTokens: [e.lpToken],
            }
        })
        .with(assetConversion.liquidityRemoved.name, () => {
            const e = decode(item, assetConversion.liquidityRemoved.matrixEnjinV1041)
            return {
                accounts: [
                    { accountId: e.who, assets: [e.lpToken] },
                    { accountId: e.withdrawTo, assets: [...e.poolId] },
                ],
                pools: [e.poolId],
                lpTokens: [e.lpToken],
            }
        })
        .with(assetConversion.swapExecuted.name, () => {
            const e = decode(item, assetConversion.swapExecuted.matrixEnjinV1041)
            const path = e.path.map(([asset]) => asset)
            return {
                accounts: [
                    { accountId: e.who, assets: path.slice(0, 1) },
                    { accountId: e.sendTo, assets: path.slice(-1) },
                ],
                pools: path.slice(1).map((asset, i) => poolIdOf(path[i], asset)),
                lpTokens: [],
            }
        })
        .with(assetConversion.swapCreditExecuted.name, () => {
            const e = decode(item, assetConversion.swapCreditExecuted.matrixEnjinV1041)
            const path = e.path.map(([asset]) => asset)
            return {
                accounts: [],
                pools: path.slice(1).map((asset, i) => poolIdOf(path[i], asset)),
                lpTokens: [],
            }
        })
        .with(assetConversion.touched.name, () => {
            const e = decode(item, assetConversion.touched.matrixEnjinV1041)
            return { accounts: [], pools: [e.poolId], lpTokens: [] }
        })
        .otherwise(() => {
            throw new UnsupportedEventError(item)
        })
}
