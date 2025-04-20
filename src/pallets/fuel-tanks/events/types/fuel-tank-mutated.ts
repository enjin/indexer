import { DefaultTankMutation, AccountId32 } from '../../../common/types'

export type FuelTankMutated = {
    tankId: AccountId32
    mutation: DefaultTankMutation
}
