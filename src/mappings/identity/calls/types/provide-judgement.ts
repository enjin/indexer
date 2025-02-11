import { MultiAddress, H256, Judgement } from '../../../common/types'

export type ProvideJudgement = {
    regIndex: number
    target: MultiAddress
    judgement: Judgement
    identity: H256
}
