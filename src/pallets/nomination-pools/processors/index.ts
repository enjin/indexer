import { bonded } from './bonded'
import { created } from './created'
import { destroyed } from './destroyed'
import { eraRewardsProcessed } from './era-rewards-processed'
import { nominated } from './nominated'
import { poolMutated } from './pool-mutated'
import { poolSlashed } from './pool-slashed'
import { rewardPaid } from './reward-paid'
import { stateChanged } from './state-changed'
import { unbonded } from './unbonded'
import { withdrawn } from './withdrawn'
import { earlyBirdBonusPaymentUnlocked } from './early-bird-bonus-payment-unlocked'
import { earlyBirdBonusCalculated } from './early-bird-bonus-calculated'
import { earlyBirdSharesCaptured } from './early-bird-shares-captured'
import { earlyBirdBonusPaid } from './early-bird-bonus-paid'

export const nominationPools = {
    bonded,
    created,
    destroyed,
    eraRewardsProcessed,
    nominated,
    poolMutated,
    poolSlashed,
    rewardPaid,
    stateChanged,
    unbonded,
    withdrawn,
    earlyBirdBonusPaymentUnlocked,
    earlyBirdBonusCalculated,
    earlyBirdSharesCaptured,
    earlyBirdBonusPaid,
}

export default nominationPools
