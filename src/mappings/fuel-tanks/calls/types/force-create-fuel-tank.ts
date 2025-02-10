import { MultiAddress, FuelTankDescriptor } from '@enjin/indexer/mappings/common/types'

export type ForceCreateFuelTank = {
    owner: MultiAddress
    descriptor: FuelTankDescriptor
}
