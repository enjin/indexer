import { DispatchRuleDescriptor, MultiAddress, RuleSetDescriptor } from '~/pallet/common/types'

export type InsertRuleSet = {
    tankId: MultiAddress
    ruleSetId: number
    rules?: DispatchRuleDescriptor[] // Removed on v1032
    ruleSet?: RuleSetDescriptor // Added on v1032
}
