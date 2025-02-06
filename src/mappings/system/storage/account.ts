import { system } from '../../../types/generated/storage'
import { CommonContext } from '../../../common/types/contexts'
import { UnsupportedStorageError } from '../../../common/errors'
import { BlockHeader } from '@subsquid/substrate-processor'

export async function account(ctx: CommonContext, block: BlockHeader, accounts: string[]) {
    if (system.account.matrixEnjinV603.is(block)) {
        return system.account.matrixEnjinV603.getMany(block, accounts)
    }

    if (system.account.matrixV602.is(block)) {
        return system.account.matrixV602.getMany(block, accounts)
    }

    if (system.account.matrixV500.is(block)) {
        return system.account.matrixV500.getMany(block, accounts)
    }

    if (system.account.v104.is(block)) {
        return system.account.v104.getMany(block, accounts)
    }

    if (system.account.v100.is(block)) {
        return system.account.v100.getMany(block, accounts)
    }

    throw new UnsupportedStorageError('system.account')
}
