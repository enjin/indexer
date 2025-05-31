import { MultiAddress, FuelTankDescriptor } from '../../../common/types'

export type ForceCreateFuelTank = {
    owner: MultiAddress
    descriptor: FuelTankDescriptor
}
