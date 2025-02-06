import { AccountClaimType, ClaimRequest, ClaimsClaimRequested, Event as EventModel, Extrinsic } from '../../model'
import { BlockHeader, CommonContext, EventItem } from '../../common/types/contexts'
import { Sns } from '../../common/sns'
import * as mappings from './../../mappings'

export async function claimRequested(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<EventModel | undefined> {
    if (!item.extrinsic) return undefined

    const eventData = mappings.claims.events.claimRequested(item)

    if (!eventData) return undefined

    const claim = new ClaimRequest({
        id: `${eventData.who}-${eventData.transactionHash}`,
        account: eventData.who,
        acountType: AccountClaimType.EVM,
        amountClaimable: eventData.amountClaimable,
        amountBurned: eventData.amountBurned,
        hash: eventData.transactionHash.toString(),
        isEfiToken: eventData.isEfiToken,
        extrinsicIndex: item.extrinsic.index,
        isClaimed: false,
        isRejected: false,
        createdBlock: block.height,
        createdAt: new Date(block.timestamp ?? 0),
    })

    await Promise.all([ctx.store.save(claim)])

    if (item.extrinsic) {
        await Sns.getInstance().send({
            id: item.id,
            name: item.name,
            body: {
                who: eventData.who,
                accountType: AccountClaimType.EVM,
                amountClaimable: eventData.amountClaimable,
                amountBurned: eventData.amountBurned,
                hash: eventData.transactionHash.toString(),
                isEfiToken: eventData.isEfiToken,
                extrinsic: item.extrinsic.id,
            },
        })
    }

    return new EventModel({
        id: item.id,
        name: ClaimsClaimRequested.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new ClaimsClaimRequested({
            who: eventData.who,
            accountType: AccountClaimType.EVM,
            amountClaimable: eventData.amountClaimable,
            amountBurned: eventData.amountBurned,
            hash: eventData.transactionHash.toString(),
            isEfiToken: eventData.isEfiToken,
        }),
    })
}
