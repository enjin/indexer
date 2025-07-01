import { MultiAddress, H256, Judgement } from '~/pallet/common/types'

export type ProvideJudgement = {
    regIndex: number
    target: MultiAddress
    judgement: Judgement
    identity: H256
}
