import { UnsupportedCallError } from '../../../utils/errors'
import { CallItem } from '../../../contexts'
import { calls } from '../../../types'
import { match } from 'ts-pattern'
import { Unbond } from './types'

export function unbond(call: CallItem): Unbond {
    return match(call)
        .returnType<Unbond>()
        .when(
            () => calls.nominationPools.unbond.enjinV100.is(call),
            () => calls.nominationPools.unbond.enjinV100.decode(call)
        )
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
