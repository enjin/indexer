import { SubstrateBlock } from '@subsquid/substrate-processor'
import { CommonContext } from '../types/contexts'
import { UnknownVersionError } from '../../common/errors'
import {
    ClaimsDelayClaimsPeriodStorage,
    ClaimsExchangeRateStorage,
    ClaimsTotalUnclaimedAmountStorage,
} from '../../types/generated/storage'
import { ClaimDetails } from '../../model'

export async function getTotalUnclaimedAmount(ctx: CommonContext, block: SubstrateBlock) {
    const data = new ClaimsTotalUnclaimedAmountStorage(ctx, block)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603.get()
    }

    throw new UnknownVersionError(data.constructor.name)
}

async function getDelayPeriod(ctx: CommonContext, block: SubstrateBlock) {
    const data = new ClaimsDelayClaimsPeriodStorage(ctx, block)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603.get()
    }

    throw new UnknownVersionError(data.constructor.name)
}

async function getExchangeRate(ctx: CommonContext, block: SubstrateBlock) {
    const data = new ClaimsExchangeRateStorage(ctx, block)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603.get()
    }

    if (data.isV604) {
        return data.asV604.get()
    }

    if (data.isV500) {
        return data.asV500.get()
    }

    throw new UnknownVersionError(data.constructor.name)
}

export async function updateClaimDetails(ctx: CommonContext, block: SubstrateBlock) {
    const rate = await getExchangeRate(ctx, block)
    const claimDetails = new ClaimDetails({
        id: '0',
        totalUnclaimedAmount: await getTotalUnclaimedAmount(ctx, block),
        delayClaimsPeriod: await getDelayPeriod(ctx, block),
        exchangeRate: typeof rate === 'bigint' ? null : rate,
    })

    await ctx.store.save(ClaimDetails, claimDetails as any)
}
