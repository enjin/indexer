import { Block } from '../../../contexts'
import { UnsupportedStorageError } from '../../../util/errors'
import { multiTokens } from '../../../type/storage'
import { match } from 'ts-pattern'
import { TokenAccount } from './types'
import { AccountId32 } from '../../common/types'
import { TokenAccountsV100 } from '../../../type/multi-tokens/storage'

// Probably better to refactor this and use multiple different functions instead of overloading
export async function tokenAccounts(
    block: Block,
    params: { collectionId: bigint; tokenId: bigint }
): Promise<[k: [bigint, bigint, string], v: TokenAccount | undefined][]>
export async function tokenAccounts(
    block: Block,
    params: { collectionId: bigint; tokenId: bigint; accountId: string }
): Promise<TokenAccount | undefined>
export async function tokenAccounts(
    block: Block,
    params?: { batchSize?: number }
): Promise<AsyncIterable<[k: [bigint, bigint, AccountId32], v: TokenAccount | undefined][]> | undefined>
export async function tokenAccounts(
    block: Block,
    params?: { collectionId?: bigint; tokenId?: bigint; accountId?: string; batchSize?: number }
): Promise<
    | TokenAccount
    | [k: [bigint, bigint, string], v: TokenAccount | undefined][]
    | AsyncIterable<[k: [bigint, bigint, AccountId32] | [string, bigint, bigint], v: TokenAccount | undefined][]>
    | undefined
> {
    const getTokenAccounts = async (
        version: (typeof multiTokens.tokenAccounts)[keyof typeof multiTokens.tokenAccounts]
    ) => {
        if (params?.collectionId && params.tokenId && params.accountId) {
            // The order on v100 storage is different, so we need to check the version
            if (version === multiTokens.tokenAccounts.v100) {
                return version.get(block, params.accountId, params.collectionId, params.tokenId)
            }

            type TokenAccountExceptV100 = Exclude<typeof version, TokenAccountsV100>
            const storage = version as TokenAccountExceptV100

            return storage.get(block, params.collectionId, params.tokenId, params.accountId)
        }

        if (params?.collectionId && params.tokenId) {
            // The order on v100 storage is different, so we need to check the version
            if (version === multiTokens.tokenAccounts.v100) {
                throw new Error('Not possible to retrieve a token account without the AccountId on v100')
            }

            type TokenAccountExceptV100 = Exclude<typeof version, TokenAccountsV100>
            const storage = version as TokenAccountExceptV100

            return storage.getPairs(block, params.collectionId, params.tokenId)
        }

        return version.getPairsPaged(params?.batchSize ?? 1000, block)
    }

    return match(block)
        .returnType<
            Promise<
                | TokenAccount
                | [k: [bigint, bigint, string], v: TokenAccount | undefined][]
                | AsyncIterable<
                      [k: [bigint, bigint, AccountId32] | [string, bigint, bigint], v: TokenAccount | undefined][]
                  >
                | undefined
            >
        >()
        .when(
            () => multiTokens.tokenAccounts.matrixEnjinV1022.is(block),
            () => getTokenAccounts(multiTokens.tokenAccounts.matrixEnjinV1022)
        )
        .when(
            () => multiTokens.tokenAccounts.matrixEnjinV1012.is(block),
            () => getTokenAccounts(multiTokens.tokenAccounts.matrixEnjinV1012)
        )
        .when(
            () => multiTokens.tokenAccounts.matrixEnjinV603.is(block),
            () => getTokenAccounts(multiTokens.tokenAccounts.matrixEnjinV603)
        )
        .when(
            () => multiTokens.tokenAccounts.matrixV1020.is(block),
            () => getTokenAccounts(multiTokens.tokenAccounts.matrixV1020)
        )
        .when(
            () => multiTokens.tokenAccounts.matrixV1010.is(block),
            () => getTokenAccounts(multiTokens.tokenAccounts.matrixV1010)
        )
        .when(
            () => multiTokens.tokenAccounts.matrixV500.is(block),
            () => getTokenAccounts(multiTokens.tokenAccounts.matrixV500)
        )
        .when(
            () => multiTokens.tokenAccounts.enjinV1050.is(block),
            () => getTokenAccounts(multiTokens.tokenAccounts.enjinV1050)
        )
        .when(
            () => multiTokens.tokenAccounts.enjinV1032.is(block),
            () => getTokenAccounts(multiTokens.tokenAccounts.enjinV1032)
        )
        .when(
            () => multiTokens.tokenAccounts.enjinV100.is(block),
            () => getTokenAccounts(multiTokens.tokenAccounts.enjinV100)
        )
        .when(
            () => multiTokens.tokenAccounts.v1050.is(block),
            () => getTokenAccounts(multiTokens.tokenAccounts.v1050)
        )
        .when(
            () => multiTokens.tokenAccounts.v1030.is(block),
            () => getTokenAccounts(multiTokens.tokenAccounts.v1030)
        )
        .when(
            () => multiTokens.tokenAccounts.v101.is(block),
            () => getTokenAccounts(multiTokens.tokenAccounts.v101)
        )
        .when(
            () => multiTokens.tokenAccounts.v100.is(block),
            () => getTokenAccounts(multiTokens.tokenAccounts.v100)
        )
        .otherwise(() => {
            throw new UnsupportedStorageError(tokenAccounts.name)
        })
}
