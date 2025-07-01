import { AccountId32 } from '~/pallet/common/types'

export type JudgementGiven = {
    target: AccountId32
    registrarIndex: number
}
