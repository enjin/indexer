import { LessThan } from 'typeorm'
import { UnknownVersionError } from '../../../common/errors'
import { claims } from '../../../types/generated/events'
import { claims as claimsStorage } from '../../../types/generated/storage'
import { ClaimDetails, Event as EventModel, Extrinsic, ClaimRequest, Claim, ClaimsClaimed } from '../../../model'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'
import { getTotalUnclaimedAmount } from '../common'

function getEventData(ctx: CommonContext, event: EventItem) {
    if (claims.claimed.matrixEnjinV603.is(event)) {
        return claims.claimed.matrixEnjinV603.decode(event)
    }

    throw new UnknownVersionError(claims.claimed.name)
}

function getDelayPeriod(ctx: CommonContext, block: BlockHeader) {
    if (claimsStorage.delayClaimsPeriod.matrixEnjinV603.is(block)) {
        return claimsStorage.delayClaimsPeriod.matrixEnjinV603.get(block)
    }

    throw new UnknownVersionError('Claims.DelayClaimsPeriod')
}

export async function claimed(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<EventModel | undefined> {
    if (!item.extrinsic) return undefined

    const eventData = getEventData(ctx, item)
    if (!eventData) return undefined

    const account = await getOrCreateAccount(ctx, eventData.who)

    const claimAccount = eventData.ethereumAddress?.toLowerCase()

    const claimDetails = await ctx.store.findOneByOrFail(ClaimDetails, { id: '0' })
    const period = claimDetails.delayClaimsPeriod || (await getDelayPeriod(ctx, block))

    if (!period) {
        throw new Error('Delay period is not set')
    }

    const [totalUnclaimedAmount, claimRequests, claim] = await Promise.all([
        getTotalUnclaimedAmount(ctx, block),
        ctx.store.find(ClaimRequest, {
            where: {
                account: claimAccount,
                isClaimed: false,
                createdBlock: LessThan(block.height - period),
            },
        }),
        ctx.store.findOneBy(Claim, { account: { id: account.id } }),
    ])

    claimDetails.totalUnclaimedAmount = totalUnclaimedAmount

    if (claimRequests.length === 0) {
        throw new Error(`No claim requests found for ${claimAccount}`)
    }

    const efiSum = claimRequests
        .filter((request) => request.isEfiToken)
        .reduce((sum, request) => sum + request.amountClaimable, 0n)

    const enjSum = claimRequests
        .filter((request) => !request.isEfiToken)
        .reduce((sum, request) => sum + request.amountClaimable, 0n)

    const efiBurned = claimRequests
        .filter((request) => request.isEfiToken)
        .reduce((sum, request) => sum + request.amountBurned, 0n)

    let updatedClaim: Claim

    if (!claim) {
        updatedClaim = new Claim({
            id: account.id,
            account,
            enjSum: 0n,
            efiSum: 0n,
            amount: 0n,
            count: 0,
        })
    } else {
        updatedClaim = claim
    }

    updatedClaim.efiSum += efiSum
    updatedClaim.enjSum += enjSum
    updatedClaim.amount += eventData.amount
    updatedClaim.count += 1

    await Promise.all([
        ctx.store.save(updatedClaim),
        ctx.store.save(claimDetails),
        ctx.store.save(claimRequests.map((request: any) => new ClaimRequest({ ...request, isClaimed: true }))),
    ])

    return new EventModel({
        id: item.id,
        name: ClaimsClaimed.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new ClaimsClaimed({
            account: account.id,
            ethAccount: claimAccount,
            amount: eventData.amount,
            efiSum,
            enjSum,
            efiBurned,
        }),
    })
}
