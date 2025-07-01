import { UnsupportedCallError } from '~/util/errors'
import { calls } from '~/type'
import { CallItem } from '~/contexts'
import { match } from 'ts-pattern'
import { AddSub } from '~/pallet/identity/calls/types'
import { withDispatchCheck } from '~/pallet/fuel-tanks/utils'

export const addSub = withDispatchCheck((call: CallItem): AddSub => {
    return match(call)
        .returnType<AddSub>()
        .when(
            () => calls.identity.addSub.matrixEnjinV1000.is(call),
            () => calls.identity.addSub.matrixEnjinV1000.decode(call)
        )
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
})
