import { SubstrateBlock } from '@subsquid/substrate-processor'
import * as Sentry from '@sentry/node'
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

    if (!data.isExists) {
        return 0n
    }

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

    if (data.isV102) {
        return data.asV102.get()
    }

    if (data.isV101) {
        return data.asV101.get()
    }

    throw new UnknownVersionError(data.constructor.name)
}

export async function updateClaimDetails(ctx: CommonContext, block: SubstrateBlock) {
    try {
        const rate = await getExchangeRate(ctx, block)
        const claimDetails = new ClaimDetails({
            id: '0',
            totalUnclaimedAmount: await getTotalUnclaimedAmount(ctx, block),
            delayClaimsPeriod: await getDelayPeriod(ctx, block),
            exchangeRate: typeof rate === 'bigint' ? null : rate,
        })

        await ctx.store.save(ClaimDetails, claimDetails as any)
    } catch (error) {
        Sentry.captureMessage(`Error: in claims/common.ts: ${error}`, 'fatal')
    }
}
