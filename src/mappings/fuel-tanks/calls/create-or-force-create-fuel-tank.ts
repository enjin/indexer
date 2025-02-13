import { CallItem } from '../../../contexts'
import { CreateFuelTank, ForceCreateFuelTank } from './types'
import { match } from 'ts-pattern'
import { UnsupportedCallError } from '../../../utils/errors'
import { createFuelTank } from './create-fuel-tank'
import { forceCreateFuelTank } from './force-create-fuel-tank'
import { calls } from '../../../types'

export function createOrForceCreateFuelTank(call: CallItem): CreateFuelTank | ForceCreateFuelTank {
    return match(call.name)
        .returnType<CreateFuelTank | ForceCreateFuelTank>()
        .with(calls.fuelTanks.createFuelTank.name, () => createFuelTank(call))
        .with(calls.fuelTanks.forceCreateFuelTank.name, () => forceCreateFuelTank(call))
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
