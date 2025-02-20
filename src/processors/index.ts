import { balances } from './balances'
import { claims } from './claims'
import { identity } from './identity'
import { multiTokens } from './multi-tokens'
import { marketplace } from './marketplace'
import { xcmPallet } from './xcm-pallet'
import { polkadotXcm } from './polkadot-xcm'
import { fuelTanks } from './fuel-tanks'

export const processors = {
    balances,
    claims,
    identity,
    multiTokens,
    marketplace,
    xcmPallet,
    polkadotXcm,
    fuelTanks,
}

export default processors
