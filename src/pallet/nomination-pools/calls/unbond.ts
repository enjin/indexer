import { UnsupportedCallError } from '../../../util/errors'
import { CallItem } from '../../../contexts'
import { calls } from '../../../type'
import { match } from 'ts-pattern'
import { Unbond } from './types'
import { withDispatchCheck } from '../../fuel-tanks/utils'

export const unbond = withDispatchCheck((call: CallItem): Unbond => {
    return match(call)
        .returnType<Unbond>()
        .when(
            () => calls.nominationPools.unbond.enjinV100.is(call),
            () => calls.nominationPools.unbond.enjinV100.decode(call)
        )
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
})
