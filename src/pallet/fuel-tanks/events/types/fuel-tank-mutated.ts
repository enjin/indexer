import { DefaultTankMutation, AccountId32 } from '~/pallet/common/types'

export type FuelTankMutated = {
    tankId: AccountId32
    mutation: DefaultTankMutation
}
