import { LessThanOrEqual } from 'typeorm'
import { Claim, ClaimDetails, ClaimRequest, ClaimsClaimed, Event as EventModel, Extrinsic } from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import { getOrCreateAccount } from '~/util/entities'
import * as mappings from '~/pallet/index'

/**
 * The newest `createdBlock` a claim request may have to be paid by a `claim` in `height`. `process_claim` pays an
 * entry when `start_block_number <= current_block - delay`, so the cutoff is inclusive.
 */
export function claimMaturityCutoff(height: number, delay: number | bigint): number {
    return height - Number(delay)
}

export async function claimed(ctx: CommonContext, block: Block, item: EventItem): Promise<EventModel | undefined> {
    if (!item.extrinsic) return undefined

    const event = mappings.claims.events.claimed(item)
    const account = await getOrCreateAccount(ctx, event.who)
    const claimAccount = event.ethereumAddress?.toLowerCase()

    // ClaimDetails is only seeded during warp sync on Enjin Matrixchain; elsewhere it may not exist yet.
    const claimDetails =
        (await ctx.store.findOneBy<ClaimDetails>(ClaimDetails, { id: '0' })) ??
        new ClaimDetails({ id: '0', totalUnclaimedAmount: 0n })
    const period = claimDetails.delayClaimsPeriod || (await mappings.claims.storage.delayClaimsPeriod(block))

    if (period === undefined) {
        throw new Error('Delay period is not set')
    }

    const blockDiff = claimMaturityCutoff(block.height, period)

    const [totalUnclaimedAmount, claimRequests, claim] = await Promise.all([
        mappings.claims.storage.totalUnclaimedAmount(block),
        ctx.store.find<ClaimRequest>(ClaimRequest, {
            where: {
                who: claimAccount,
                isClaimed: false,
                // `reject_claims` removes the entry from chain storage, so it is never paid.
                isRejected: false,
                createdBlock: LessThanOrEqual(blockDiff),
            },
        }),
        ctx.store.findOneBy<Claim>(Claim, { account: { id: account.id } }),
    ])

    claimDetails.totalUnclaimedAmount = totalUnclaimedAmount ?? 0n

    // The chain paid `event.amount` regardless, so record the claim even if the indexer holds no matching request
    // (e.g. claims seeded through the Claims genesis config, which emit no request event).
    if (claimRequests.length === 0) {
        ctx.log.warn(`No claim requests found for ${claimAccount} in block ${block.height}`)
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
