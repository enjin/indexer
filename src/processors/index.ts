import { balances } from './balances'
import { claims } from './claims'
import { identity } from './identity'
import { multiTokens } from './multi-tokens'
import { marketplace } from './marketplace'
import { xcm } from './xcm'
import { fuelTanks } from './fuel-tanks'

export const processors = {
    balances,
    claims,
    identity,
    multiTokens,
    marketplace,
    xcm,
    fuelTanks,
}

export default processors
