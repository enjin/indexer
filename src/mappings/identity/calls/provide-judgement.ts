import { UnsupportedCallError } from '@enjin/indexer/common/errors'
import { calls } from '../../../types/generated'
import { CallItem } from '@enjin/indexer/common/types/contexts'
import { match } from 'ts-pattern'

type ProvideJudgementCall = {
    regIndex: number
    target: {
        __kind: string
        value?: string
    }
    judgement: {
        __kind: string
        value?: bigint
    }
    identity: string
}

export function provideJudgement(call: CallItem): ProvideJudgementCall {
    return match(call)
        .returnType<ProvideJudgementCall>()
        .when(calls.identity.provideJudgement.matrixEnjinV1000.is, calls.identity.provideJudgement.matrixEnjinV1000.decode)
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
