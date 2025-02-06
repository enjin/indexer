import { UnsupportedCallError } from '@enjin/indexer/common/errors'
import { calls } from '../../../types/generated'
import { CallItem } from '@enjin/indexer/common/types/contexts'
import { match } from 'ts-pattern'

type ProvideJudgementCall = {
    regIndex: number
    target: any
    judgement: any
    identity: any
}

export function provideJudgement(call: CallItem): ProvideJudgementCall {
    return match(call)
        .returnType<ProvideJudgementCall>()
        .when(calls.identity.provideJudgement.matrixEnjinV1000.is, () =>
            calls.identity.provideJudgement.matrixEnjinV1000.decode(call)
        )
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
