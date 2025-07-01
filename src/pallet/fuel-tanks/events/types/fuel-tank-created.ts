import { AccountId32, Bytes } from '~/pallet/common/types'

export type FuelTankCreated = {
    tankId: AccountId32
    owner: AccountId32
    name: Bytes
}
