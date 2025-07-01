import { system } from '~/type/storage'
import { UnsupportedStorageError } from '~/util/errors'
import { match } from 'ts-pattern'
import { AccountInfo } from '~/pallet/system/storage/types'
import { Block } from '~/contexts'
import { AccountId32 } from '~/pallet/common/types'

export async function accounts(block: Block, params: { account: string }): Promise<AccountInfo | undefined>
export async function accounts(block: Block, params: { accounts: string[] }): Promise<(AccountInfo | undefined)[]>
export async function accounts(block: Block, params?: { batchSize?: number }): Promise<AsyncIterable<AccountId32[]>>
export async function accounts(
    block: Block,
    params?: { account?: string; accounts?: string[]; batchSize?: number }
): Promise<AccountInfo | (AccountInfo | undefined)[] | AsyncIterable<AccountId32[]> | undefined> {
    const getAccounts = async (version: (typeof system.account)[keyof typeof system.account]) => {
        if (params?.account) {
            return version.get(block, params.account)
        }

        if (params?.accounts) {
            return version.getMany(block, params.accounts)
        }

        return version.getKeysPaged(params?.batchSize ?? 1000, block)
    }

    return match(block)
        .returnType<Promise<AccountInfo | (AccountInfo | undefined)[] | AsyncIterable<AccountId32[]> | undefined>>()
        .when(
            () => system.account.matrixEnjinV603.is(block),
            () => getAccounts(system.account.matrixEnjinV603)
        )
        .when(
            () => system.account.matrixV602.is(block),
            () => getAccounts(system.account.matrixV602)
        )
        .when(
            () => system.account.matrixV500.is(block),
            () => getAccounts(system.account.matrixV500)
        )
        .when(
            () => system.account.v104.is(block),
            () => getAccounts(system.account.v104)
        )
        .when(
            () => system.account.v100.is(block),
            () => getAccounts(system.account.v100)
        )
        .otherwise(() => {
            throw new UnsupportedStorageError('system.account')
        })
}
