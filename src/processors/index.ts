import { balances } from './balances'
import { claims } from './claims'
import { identity } from './identity'
import { multiTokens } from './multi-tokens'
import { marketplace } from './marketplace'
import { xcmPallet } from './xcm-pallet'
import { polkadotXcm } from './polkadot-xcm'
import { fuelTanks } from './fuel-tanks'
import { imOnline } from './im-online'
import { nominationPools } from './nomination-pools'
import { stakeExchange } from './stake-exchange'
import { staking } from './staking'

export const processors = {
    balances,
    claims,
    fuelTanks,
    identity,
    imOnline,
    marketplace,
    multiTokens,
    nominationPools,
    polkadotXcm,
    stakeExchange,
    staking,
    xcmPallet,
}

export default processors
