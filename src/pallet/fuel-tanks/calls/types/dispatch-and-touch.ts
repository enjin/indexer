import { DispatchSettings, MultiAddress, Call } from '~/pallet/common/types'

export type DispatchAndTouch = {
    tankId: MultiAddress
    ruleSetId: number
    call: Call
    paysRemainingFee?: boolean // Removed on v106
    settings?: DispatchSettings // Added on v106
}
