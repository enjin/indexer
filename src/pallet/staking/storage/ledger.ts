import { Block } from '../../../contexts'
import { UnsupportedStorageError } from '../../../util/errors'
import { storage } from '../../../type'
import { match } from 'ts-pattern'
import { StakingLedger } from './types'

export async function ledger(block: Block, account: string): Promise<StakingLedger | undefined> {
    return match(block)
        .returnType<Promise<StakingLedger | undefined>>()
        .when(
            () => storage.staking.ledger.enjinV1032.is(block),
            () => storage.staking.ledger.enjinV1032.get(block, account)
        )
        .when(
            () => storage.staking.ledger.enjinV100.is(block),
            () => storage.staking.ledger.enjinV100.get(block, account)
        )
        .when(
            () => storage.staking.ledger.v1030.is(block),
            () => storage.staking.ledger.v1030.get(block, account)
        )
        .when(
            () => storage.staking.ledger.v100.is(block),
            () => storage.staking.ledger.v100.get(block, account)
        )
        .otherwise(() => {
            throw new UnsupportedStorageError('Staking.Ledger')
        })
}
