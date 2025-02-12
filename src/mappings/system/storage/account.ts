import { system } from '../../../types/generated/storage'
import { UnsupportedStorageError } from '../../../common/errors'
import { BlockHeader } from '@subsquid/substrate-processor'
import { match } from 'ts-pattern'
import { AccountInfo } from './types'

export async function account(block: BlockHeader, accounts: string[]): Promise<(AccountInfo | undefined)[]> {
    return match(block)
        .returnType<Promise<(AccountInfo | undefined)[]>>()
        .when(
            () => system.account.matrixEnjinV603.is(block),
            () => system.account.matrixEnjinV603.getMany(block, accounts)
        )
        .when(
            () => system.account.matrixV602.is(block),
            () => system.account.matrixV602.getMany(block, accounts)
        )
        .when(
            () => system.account.matrixV500.is(block),
            () => system.account.matrixV500.getMany(block, accounts)
        )
        .when(
            () => system.account.v104.is(block),
            () => system.account.v104.getMany(block, accounts)
        )
        .when(
            () => system.account.v100.is(block),
            () => system.account.v100.getMany(block, accounts)
        )
        .otherwise(() => {
            throw new UnsupportedStorageError('system.account')
        })
}
