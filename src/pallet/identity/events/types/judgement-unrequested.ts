import { AccountId32 } from '~/pallet/common/types'

export type JudgementUnrequested = {
    who: AccountId32
    registrarIndex: number
}
