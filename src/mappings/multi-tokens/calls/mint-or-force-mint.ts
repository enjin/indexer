import { CallItem } from '../../../common/types/contexts'
import { UnsupportedCallError } from '../../../common/errors'
import { calls } from '../../../types/generated'
import { match } from 'ts-pattern'
import { Mint, ForceMint } from './types'
import { mint } from './mint'
import { forceMint } from './force-mint'

export function mintOrForceMint(call: CallItem): Mint | ForceMint {
    return match(call.name)
        .returnType<Mint | ForceMint>()
        .with(calls.multiTokens.mint.name, () => mint(call))
        .with(calls.multiTokens.forceMint.name, () => forceMint(call))
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
