import { BlockHeader, CommonContext } from '@enjin/indexer/common/types/contexts'
import { claims } from '../../../types/generated/storage'

export function delayClaimsPeriod(ctx: CommonContext, block: BlockHeader) {
    if (claims.delayClaimsPeriod.matrixEnjinV603.is(block)) {
        return claims.delayClaimsPeriod.matrixEnjinV603.get(block)
    }

    // In case the delay period doesn't match the type, this could happen at genesis for example
    // We just return the current default value for the blockchain
    return 7200
}
