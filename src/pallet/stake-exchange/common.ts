import { CallItem } from '../../contexts'
import { match } from 'ts-pattern'
import { UnsupportedCallError } from '../../util/errors'
import { calls } from '../../type'
import * as mappings from '../index'
import { Buy } from './calls'
import { withDispatchCheck } from '../fuel-tanks/utils'
import { Batch } from '../utility/calls'

export function anyBuy(call: CallItem, tokenId: bigint, amount: bigint): Buy {
    const processCall = withDispatchCheck((call: CallItem): Buy => {
        return (
            match(call.name)
                .returnType<Buy>()
                .with(calls.stakeExchange.buy.name, () => mappings.stakeExchange.calls.buy(call))
                // TODO: We probably need some way to handle `utility.batchAll` calls automatically
                .with(calls.utility.batchAll.name, () =>
                    // We don't have an offer id before v1033, so we need to match by tokenId and amount
                    filterBatchCall(mappings.utility.calls.batchAll(call), tokenId, amount)
                )
                .otherwise(() => {
                    throw new UnsupportedCallError(call)
                })
        )
    })

    return processCall(call)
}

function filterBatchCall(call: Batch, tokenId: bigint, amount: bigint): Buy {
    for (const c of call.calls) {
        if (c.__kind !== 'StakeExchange') {
            continue
        }

        if (c.value.__kind === 'buy') {
            if (tokenId != c.value.tokenId || amount != c.value.amount) {
                continue
            }

            return {
                offerId: c.value.offerId,
                amount,
                tokenId,
            }
        }
    }

    throw new Error('Invalid offer')
}
