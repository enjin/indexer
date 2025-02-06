import { BlockHeader, CommonContext } from '@enjin/indexer/common/types/contexts'
import { UnsupportedStorageError } from '../../../common/errors'
import { claims } from '../../../types/generated/storage'

export async function totalUnclaimedAmount(ctx: CommonContext, block: BlockHeader) {
    if (claims.totalUnclaimedAmount.matrixEnjinV603.is(block)) {
        const data = await claims.totalUnclaimedAmount.matrixEnjinV603.get(block)
        if (data === undefined) {
            return 0n
        }

        return data
    }

    return BigInt(0)
}
