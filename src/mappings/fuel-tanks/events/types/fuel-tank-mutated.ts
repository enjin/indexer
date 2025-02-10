import { DefaultTankMutation, AccountId32 } from '@enjin/indexer/mappings/common/types'

export type FuelTankMutated = {
    tankId: AccountId32
    mutation: DefaultTankMutation
}
