import { UnsupportedCallError } from '~/util/errors'
import { CallItem } from '~/contexts'
import { calls } from '~/type'
import { match } from 'ts-pattern'
import { UnbondDeposit } from '~/pallet/nomination-pools/calls/types'
import { withDispatchCheck } from '~/pallet/fuel-tanks/utils'

export const unbondDeposit = withDispatchCheck((call: CallItem): UnbondDeposit => {
    return match(call)
        .returnType<UnbondDeposit>()
        .when(
            () => calls.nominationPools.unbondDeposit.enjinV100.is(call),
            () => calls.nominationPools.unbondDeposit.enjinV100.decode(call)
        )
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
})
