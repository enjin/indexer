import { AccountClaimType, ClaimRequest, ClaimsClaimRequested, Event as EventModel, Extrinsic } from '../../model'
import { BlockHeader, CommonContext, EventItem } from '../../common/types/contexts'
import { Sns } from '../../common/sns'
import * as mappings from './../../mappings'
import { getOrCreateAccount } from '@enjin/indexer/common/util/entities'

export async function claimRequested(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<EventModel | undefined> {
    if (!item.extrinsic) return undefined

    const event = mappings.claims.events.claimRequested(item)
    const who = await getOrCreateAccount(ctx, event.who)

    const claim = new ClaimRequest({
        id: `${who.id}-${event.transactionHash}`,
        account: who.id,
        acountType: AccountClaimType.EVM,
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
            who: event.who,
            accountType: AccountClaimType.EVM,
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
            who: who.id,
            accountType: AccountClaimType.EVM,
            amountClaimable: event.amountClaimable,
            amountBurned: event.amountBurned,
            hash: event.transactionHash.toString(),
            isEfiToken: event.isEfiToken,
        }),
    })
}
