import { SubstrateBlock } from '@subsquid/substrate-processor'
import { CommonContext } from '../types/contexts'
import { UnknownVersionError } from '../../common/errors'
import { ClaimsTotalUnclaimedAmountStorage } from '../../types/generated/storage'

export function getTotalUnclaimedAmount(ctx: CommonContext, block: SubstrateBlock) {
    const data = new ClaimsTotalUnclaimedAmountStorage(ctx, block)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603.get()
    }

    throw new UnknownVersionError(data.constructor.name)
}
