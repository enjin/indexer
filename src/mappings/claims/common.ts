import { SubstrateBlock } from '@subsquid/substrate-processor'
import { CommonContext } from '../types/contexts'
import { ClaimsTotalUnclaimedAmountStorage } from '../../types/generated/storage'
import { ClaimsEarlyBirdRewardRateConstant, ClaimsMinEarlyBirdDelayConstant } from '../../types/generated/constants'
import { UnknownVersionError } from '../../common/errors'

export function getTotalUnclaimedAmount(ctx: CommonContext, block: SubstrateBlock) {
    const data = new ClaimsTotalUnclaimedAmountStorage(ctx, block)

    if (data.isEnjinV100) {
        return data.asEnjinV100.get()
    }

    throw new UnknownVersionError(data.constructor.name)
}

export function getMinEarlyBirdDelay(ctx: CommonContext) {
    const data = new ClaimsMinEarlyBirdDelayConstant(ctx)

    if (data.isEnjinV100) {
        return data.asEnjinV100
    }

    throw new UnknownVersionError(data.constructor.name)
}

export function getEarlyBirdRewardRate(ctx: CommonContext) {
    const data = new ClaimsEarlyBirdRewardRateConstant(ctx)

    if (data.isV104) {
        return data.asV104
    }

    throw new UnknownVersionError(data.constructor.name)
}
