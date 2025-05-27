import { AccountClaim, ClaimRequest, ClaimsClaimRequested, Event as EventModel, Extrinsic } from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import { Sns } from '../../../util/sns'
import * as mappings from '../../index'
import { unwrapAccount } from '../../../util/entities'

export async function claimRequested(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<EventModel | undefined> {
    if (!item.extrinsic) return undefined

    const event = mappings.claims.events.claimRequested(item)
    const who = unwrapAccount(event.who)

    const claim = new ClaimRequest({
        id: `${who}-${event.transactionHash}`,
        who: who,
        acountType: AccountClaim.EVM,
        amountClaimable: event.amountClaimable,
        amountBurned: event.amountBurned,
        hash: event.transactionHash.toString(),
        isEfiToken: event.isEfiToken,
        extrinsicIndex: item.extrinsic.index,
        isClaimed: false,
        isRejected: false,
        createdBlock: block.height,
        createdAt: new Date(block.timestamp ?? 0),
    })

    await Promise.all([ctx.store.save(claim)])

    await Sns.getInstance().send({
        id: item.id,
        name: item.name,
        body: {
            who: who,
            accountType: AccountClaim.EVM,
            amountClaimable: event.amountClaimable,
            amountBurned: event.amountBurned,
            hash: event.transactionHash.toString(),
            isEfiToken: event.isEfiToken,
            extrinsic: item.extrinsic.id,
        },
    })

    return new EventModel({
        id: item.id,
        name: ClaimsClaimRequested.name,
        extrinsic: item.extrinsic.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new ClaimsClaimRequested({
            who,
            accountType: AccountClaim.EVM,
            amountClaimable: event.amountClaimable,
            amountBurned: event.amountBurned,
            hash: event.transactionHash.toString(),
            isEfiToken: event.isEfiToken,
        }),
    })
}
