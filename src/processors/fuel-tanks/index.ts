import { accountAdded } from './account-added'
import { accountRemoved } from './account-removed'
import { accountRuleDataRemoved } from './account-rule-data-removed'
import { freezeStateMutated } from './freeze-state-mutated'
import { fuelTankCreated } from './fuel-tank-created'
import { fuelTankDestroyed } from './fuel-tank-destroyed'
import { fuelTankMutated } from './fuel-tank-mutated'
import { ruleSetInserted } from './rule-set-inserted'
import { ruleSetRemoved } from './rule-set-removed'

export const fuelTanks = {
    accountAdded,
    accountRemoved,
    accountRuleDataRemoved,
    freezeStateMutated,
    fuelTankCreated,
    fuelTankDestroyed,
    fuelTankMutated,
    ruleSetInserted,
    ruleSetRemoved,
}

export default fuelTanks
