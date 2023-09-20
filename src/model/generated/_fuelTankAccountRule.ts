import {FuelTankWhitelistedCallers} from "./_fuelTankWhitelistedCallers"
import {FuelTankRequireToken} from "./_fuelTankRequireToken"

export type FuelTankAccountRule = FuelTankWhitelistedCallers | FuelTankRequireToken

export function fromJsonFuelTankAccountRule(json: any): FuelTankAccountRule {
    switch(json?.isTypeOf) {
        case 'FuelTankWhitelistedCallers': return new FuelTankWhitelistedCallers(undefined, json)
        case 'FuelTankRequireToken': return new FuelTankRequireToken(undefined, json)
        default: throw new TypeError('Unknown json object passed as FuelTankAccountRule')
    }
}
