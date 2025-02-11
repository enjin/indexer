import { system } from '../../../types/generated/storage'
import { UnsupportedStorageError } from '../../../common/errors'
import { BlockHeader } from '@subsquid/substrate-processor'
import { match } from 'ts-pattern'
import { AccountInfo } from '../../../mappings/system/storage/types'

export async function account(block: BlockHeader, accounts: string[]): Promise<(AccountInfo | undefined)[]> {
    return match(block)
        .returnType<Promise<(AccountInfo | undefined)[]>>()
        .when(system.account.matrixEnjinV603.is, () => system.account.matrixEnjinV603.getMany(block, accounts))
        .when(system.account.matrixV602.is, () => system.account.matrixV602.getMany(block, accounts))
        .when(system.account.matrixV500.is, () => system.account.matrixV500.getMany(block, accounts))
        .when(system.account.v104.is, () => system.account.v104.getMany(block, accounts))
        .when(system.account.v100.is, () => system.account.v100.getMany(block, accounts))
        .otherwise(() => {
            throw new UnsupportedStorageError('system.account')
        })
}
