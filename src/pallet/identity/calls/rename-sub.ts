import { UnsupportedCallError } from '~/util/errors'
import { calls } from '~/type'
import { CallItem } from '~/contexts'
import { match } from 'ts-pattern'
import { RenameSub } from '~/pallet/identity/calls/types'
import { withDispatchCheck } from '~/pallet/fuel-tanks/utils'

export const renameSub = withDispatchCheck((call: CallItem): RenameSub => {
    return match(call)
        .returnType<RenameSub>()
        .when(
            () => calls.identity.renameSub.matrixEnjinV1000.is(call),
            () => calls.identity.renameSub.matrixEnjinV1000.decode(call)
        )
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
})
