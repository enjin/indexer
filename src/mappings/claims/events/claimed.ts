import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { u8aToHex } from '@polkadot/util'
import { UnknownVersionError } from '../../../common/errors'
import { ClaimsClaimedEvent } from '../../../types/generated/events'
import { ClaimsDelayClaimsPeriodStorage } from '../../../types/generated/storage'
import {
    AccountClaimType,
    ClaimDetails,
    Event as EventModel,
    Extrinsic,
    ClaimRequest,
    Claim,
    ClaimsClaimed,
} from '../../../model'
import { Event } from '../../../types/generated/support'
import { CommonContext } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'
import { getTotalUnclaimedAmount } from '../common'

function getEventData(ctx: CommonContext, event: Event) {
    const data = new ClaimsClaimedEvent(ctx, event)

    if (data.isV500) {
        return data.asV500
    }

    throw new UnknownVersionError(data.constructor.name)
}

function getDelayPeriod(ctx: CommonContext, block: SubstrateBlock) {
    const data = new ClaimsDelayClaimsPeriodStorage(ctx, block)

    if (data.isEnjinV100) {
        return data.asEnjinV100.get()
    }

    throw new UnknownVersionError(data.constructor.name)
}

export async function claimed(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'Claims.Claimed', { event: { args: true; extrinsic: true } }>
): Promise<EventModel | undefined> {
    if (!item.event.extrinsic) return undefined

    const eventData = getEventData(ctx, item.event)

    if (!eventData) return undefined

    const account = await getOrCreateAccount(ctx, eventData.who)

    const claimAccount = u8aToHex(eventData.ethereumAddress || eventData.who).toString()

    const claimDetails = await ctx.store.findOneByOrFail(ClaimDetails, { id: '0' })

    claimDetails.totalUnclaimedAmount = await getTotalUnclaimedAmount(ctx, block)

    const period = claimDetails.delayClaimsPeriod || (await getDelayPeriod(ctx, block))

    if (!period) {
        throw new Error('Delay period is not set')
    }

    const claimRequests = await ctx.store
        .getRepository(ClaimRequest)
        .createQueryBuilder('request')
        .where('request.account ::jsonb @> :account', {
            account: { type: AccountClaimType.EVM, account: claimAccount },
        })
        .andWhere('request.isClaimed = false')
        .andWhere('request.createdBlock < :block', { block: block.height - period })
        .getMany()

    if (claimRequests.length === 0) {
        throw new Error(`No claim requests found for ${claimAccount}`)
    }

    const efiSum = claimRequests.filter((request) => request.isEfiToken).reduce((sum, request) => sum + request.amount, 0n)
    const enjSum = claimRequests.filter((request) => !request.isEfiToken).reduce((sum, request) => sum + request.amount, 0n)

    let claim = await ctx.store.findOneBy(Claim, { account: { id: account.id } })

    if (!claim) {
        claim = new Claim({
            id: account.id,
            account,
            enjSum: 0n,
            efiSum: 0n,
            amount: 0n,
            count: 0,
        })
    }

    claim.efiSum += efiSum
    claim.enjSum += enjSum
    claim.amount += eventData.amount
    claim.count += 1

    await Promise.all([
        ctx.store.save(claim),
        ctx.store.save(claimDetails),
        ctx.store.save(
            ClaimRequest,
            claimRequests.map((request) => ({ ...request, isClaimed: true }))
        ),
    ])

    return new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        data: new ClaimsClaimed({
            account: account.id,
            amount: eventData.amount,
            efiSum,
            enjSum,
            exchangeRate: claimDetails.exchangeRate,
        }),
    })
}
