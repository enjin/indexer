import { MultiAddress, FuelTankDescriptor } from '~/pallet/common/types'

export type ForceCreateFuelTank = {
    owner: MultiAddress
    descriptor: FuelTankDescriptor
}
