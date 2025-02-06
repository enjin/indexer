import { CommonContext, EventItem } from 'matrixchain-indexer/common/types/contexts'
import { UnsupportedEventError } from 'matrixchain-indexer/common/errors'
import { BlockHeader } from '@subsquid/substrate-processor'
import { account as systemAccount } from 'matrixchain-indexer/types/generated/system/storage'

async function getSystemAccountBalances(ctx: CommonContext, block: BlockHeader, accounts: string[]) {
    if (systemAccount.matrixEnjinV603.is(block)) {
        return systemAccount.matrixEnjinV603.getMany(block, accounts)
    }

    if (systemAccount.v602.is(block)) {
        return systemAccount.v602.getMany(block, accounts)
    }

    if (systemAccount.v500.is(block)) {
        return systemAccount.v500.getMany(block, accounts)
    }

    throw new UnsupportedEventError('system.account')
}
