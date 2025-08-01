import { LessThan } from 'typeorm'
import { Claim, ClaimDetails, ClaimRequest, ClaimsClaimed, Event as EventModel, Extrinsic } from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import { getOrCreateAccount } from '~/util/entities'
import * as mappings from '~/pallet/index'

export async function claimed(ctx: CommonContext, block: Block, item: EventItem): Promise<EventModel | undefined> {
    if (!item.extrinsic) return undefined

    const event = mappings.claims.events.claimed(item)
    const account = await getOrCreateAccount(ctx, event.who)
    const claimAccount = event.ethereumAddress?.toLowerCase()

    const claimDetails = await ctx.store.findOneByOrFail<ClaimDetails>(ClaimDetails, { id: '0' })
    const period = claimDetails.delayClaimsPeriod || (await mappings.claims.storage.delayClaimsPeriod(block))

    if (!period) {
        throw new Error('Delay period is not set')
    }

    const [totalUnclaimedAmount, claimRequests, claim] = await Promise.all([
        mappings.claims.storage.totalUnclaimedAmount(block),
        ctx.store.find<ClaimRequest>(ClaimRequest, {
            where: {
                who: claimAccount,
                isClaimed: false,
                createdBlock: LessThan(block.height - period),
            },
        }),
        ctx.store.findOneBy<Claim>(Claim, { account: { id: account.id } }),
    ])

    claimDetails.totalUnclaimedAmount = totalUnclaimedAmount ?? 0n

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
    updatedClaim.amount += event.amount
    updatedClaim.count += 1

    await Promise.all([
        ctx.store.save(updatedClaim),
        ctx.store.save(claimDetails),
        ctx.store.save(
            claimRequests.map((request) => {
                request.isClaimed = true
                return request
            })
        ),
    ])

    return new EventModel({
        id: item.id,
        name: ClaimsClaimed.name,
        extrinsic: item.extrinsic.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new ClaimsClaimed({
            account: account.id,
            ethAccount: claimAccount,
            amount: event.amount,
            efiSum,
            enjSum,
            efiBurned,
        }),
    })
}
