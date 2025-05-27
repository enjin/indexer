import { AccountClaim, ClaimDetails, ClaimRequest, Event as EventModel } from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import * as mappings from '../../index'
import { unwrapAccount } from '../../../util/entities'

export async function claimMinted(ctx: CommonContext, block: Block, item: EventItem): Promise<EventModel | undefined> {
    const event = mappings.claims.events.claimMinted(item)
    const who = unwrapAccount(event.who)
    const claim = new ClaimRequest({
        id: `${event.who}-${block.height}-minted`,
        who,
        acountType: AccountClaim.EVM,
        amountClaimable: event.amount,
        amountBurned: 0n,
        hash: null,
        isEfiToken: false,
        extrinsicIndex: block.height,
        isClaimed: false,
        isRejected: false,
        createdBlock: block.height,
        createdAt: new Date(block.timestamp ?? 0),
    })

    const claimDetails = new ClaimDetails({
        id: '0',
        totalUnclaimedAmount: await mappings.claims.storage.totalUnclaimedAmount(block),
    })

    await Promise.all([ctx.store.insert(claim), ctx.store.save(claimDetails)])

    return undefined
}
