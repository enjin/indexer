import { DispatchRuleDescriptor } from '@enjin/indexer/mappings/fuel-tanks/types/dispatch-rules'

export type RuleSetDescriptor =
    | DispatchRuleDescriptor[]
    | {
          rules: DispatchRuleDescriptor[]
          requireAccount: boolean
      }
