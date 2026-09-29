import { MultiAddress, DispatchSettings, Call } from '~/pallet/common/types'

export type Dispatch = {
    tankId: MultiAddress
    ruleSetId?: number // Optional since matrixV1040; undefined auto-selects a matching rule set
    call: Call
    paysRemainingFee?: boolean // Removed on v106
    settings?: DispatchSettings // Added on v106
}
