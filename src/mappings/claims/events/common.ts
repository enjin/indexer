import { CommonContext, BlockHeader } from 'matrixchain-indexer/common/types/contexts'
import { UnsupportedEventError } from '../../common/errors'
import { claims } from '../../types/generated/storage'
import { ClaimDetails } from '../../model'

export async function getTotalUnclaimedAmount(block: BlockHeader) {
    if (claims.totalUnclaimedAmount.matrixEnjinV603.is(block)) {
        const data = await claims.totalUnclaimedAmount.matrixEnjinV603.get(block)
        if (data === undefined) {
            return 0n
        }

        return data
    }

    return BigInt(0)
}

async function getDelayPeriod(block: BlockHeader) {
    if (claims.delayClaimsPeriod.matrixEnjinV603.is(block)) {
        return claims.delayClaimsPeriod.matrixEnjinV603.get(block)
    }

    // In case the delay period doesn't match the type, this could happen at genesis for example
    // We just return the current default value for the blockchain
    return 7200
}

async function getExchangeRate(block: BlockHeader) {
    if (claims.exchangeRate.matrixEnjinV603.is(block)) {
        return claims.exchangeRate.matrixEnjinV603.get(block)
    }

    if (claims.exchangeRate.v604.is(block)) {
        return claims.exchangeRate.v604.get(block)
    }

    if (claims.exchangeRate.v500.is(block)) {
        return claims.exchangeRate.v500.get(block)
    }

    throw new UnsupportedEventError('Claims.ExchangeRate')
}

export async function updateClaimDetails(block: BlockHeader) {
    const rate = await getExchangeRate(ctx, block)
    const claimDetails = new ClaimDetails({
        id: '0',
        totalUnclaimedAmount: await getTotalUnclaimedAmount(ctx, block),
        delayClaimsPeriod: await getDelayPeriod(ctx, block),
        exchangeRate: typeof rate === 'bigint' ? null : rate,
    })

    await ctx.store.save(claimDetails)
}
