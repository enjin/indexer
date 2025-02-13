import { claimMinted } from './claim-minted'
import { claimRejected } from './claim-rejected'
import { claimRequested } from './claim-requested'
import { claimed } from './claimed'
import { exchangeRateSet } from './exchange-rate-set'
import { delayTimeForClaimSet } from './delay-time-for-claim-set'

export const claims = {
    claimMinted,
    claimRejected,
    claimRequested,
    claimed,
    exchangeRateSet,
    delayTimeForClaimSet,
}

export default claims
