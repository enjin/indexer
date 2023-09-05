import { SubstrateBlock } from '@subsquid/substrate-processor'
import { CommonContext } from '../types/contexts'
import { ClaimsTotalUnclaimedAmountStorage } from '../../types/generated/storage'
import { UnknownVersionError } from '../../common/errors'

export function getTotalUnclaimedAmount(ctx: CommonContext, block: SubstrateBlock) {
    const data = new ClaimsTotalUnclaimedAmountStorage(ctx, block)

    if (data.isV602) {
        return data.asV602.get()
    }

    throw new UnknownVersionError(data.constructor.name)
}
