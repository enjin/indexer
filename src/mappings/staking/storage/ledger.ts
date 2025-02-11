import { BlockHeader } from '../../../common/types/contexts'
import { UnsupportedStorageError } from '../../../common/errors'
import { storage } from '../../../types/generated'
import { match } from 'ts-pattern'
import { StakingLedger } from '../../../mappings/staking/storage/types'

export async function ledger(block: BlockHeader, account: string): Promise<StakingLedger | undefined> {
    return match(block)
        .returnType<Promise<StakingLedger | undefined>>()
        .when(storage.staking.ledger.enjinV1032.is, () => storage.staking.ledger.enjinV1032.get(block, account))
        .when(storage.staking.ledger.enjinV100.is, () => storage.staking.ledger.enjinV100.get(block, account))
        .when(storage.staking.ledger.v1030.is, () => storage.staking.ledger.v1030.get(block, account))
        .when(storage.staking.ledger.v100.is, () => storage.staking.ledger.v100.get(block, account))
        .otherwise(() => {
            throw new UnsupportedStorageError('Staking.Ledger')
        })
}
