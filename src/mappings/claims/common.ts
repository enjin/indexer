import { CommonContext, BlockHeader } from '../types/contexts'
import { UnknownVersionError } from '../../common/errors'
import { claims } from '../../types/generated/storage'
import { ClaimDetails } from '../../model'

export async function getTotalUnclaimedAmount(ctx: CommonContext, block: BlockHeader) {
    if (claims.totalUnclaimedAmount.matrixEnjinV603.is(block)) {
        return claims.totalUnclaimedAmount.matrixEnjinV603.get(block)
    }

    return BigInt(0)
}

async function getDelayPeriod(ctx: CommonContext, block: BlockHeader) {
    if (claims.delayClaimsPeriod.matrixEnjinV603.is(block)) {
        return claims.delayClaimsPeriod.matrixEnjinV603.get(block)
    }

    throw new UnknownVersionError('Claims.TotalUnclaimedAmount')
}

async function getExchangeRate(ctx: CommonContext, block: BlockHeader) {
    if (claims.exchangeRate.matrixEnjinV603.is(block)) {
        return claims.exchangeRate.matrixEnjinV603.get(block)
    }

    if (claims.exchangeRate.v604.is(block)) {
        return claims.exchangeRate.v604.get(block)
    }

    if (claims.exchangeRate.v500.is(block)) {
        return claims.exchangeRate.v500.get(block)
    }

    throw new UnknownVersionError('Claims.ExchangeRate')
}

export async function updateClaimDetails(ctx: CommonContext, block: BlockHeader) {
    const rate = await getExchangeRate(ctx, block)
    const claimDetails = new ClaimDetails({
        id: '0',
        totalUnclaimedAmount: await getTotalUnclaimedAmount(ctx, block),
        delayClaimsPeriod: await getDelayPeriod(ctx, block),
        exchangeRate: typeof rate === 'bigint' ? null : rate,
    })

    await ctx.store.save(claimDetails)
}
