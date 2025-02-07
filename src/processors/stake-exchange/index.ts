import { offerCreated } from './offer-created'
import { offerCancelled } from './offer-cancelled'
import { liquidityWithdrawn } from './liquidity-withdrawn'
import { liquidityAdded } from './liquidity-added'
import { buyOrderCompleted } from './buy-order-completed'
import { offerCompleted } from './offer-completed'
import { liquidityConfigUpdated } from './liquidity-config-updated'

export const stakeExchange = {
    offerCreated,
    offerCancelled,
    liquidityWithdrawn,
    liquidityAdded,
    buyOrderCompleted,
    offerCompleted,
    liquidityConfigUpdated,
}

export default stakeExchange
