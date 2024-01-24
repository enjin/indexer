import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { UnknownVersionError } from '../../../common/errors'
import { IdentityJudgementRequestedEvent } from '../../../types/generated/events'
import { Event as EventModel, IdentityInfo, Judgement, JudgementType } from '../../../model'
import { Event } from '../../../types/generated/support'
import { CommonContext } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'

function getEventData(ctx: CommonContext, event: Event) {
    const data = new IdentityJudgementRequestedEvent(ctx, event)

    if (data.isMatrixEnjinV1000) {
        return data.asMatrixEnjinV1000
    }

    throw new UnknownVersionError(data.constructor.name)
}

export async function JudgementRequested(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'Identity.JudgementRequested', { event: { args: true; extrinsic: true } }>
): Promise<EventModel | undefined> {
    const eventData = getEventData(ctx, item.event)

    const account = await getOrCreateAccount(ctx, eventData.who)

    const identity = await ctx.store.findOneByOrFail(IdentityInfo, { id: account.id })

    identity.currentJudgement = JudgementType.FeePaid
    const existing = identity.judgements?.find((i) => i.index === eventData.registrarIndex)
    if (existing) {
        existing.value = JudgementType.FeePaid
    } else {
        identity.judgements?.push(
            new Judgement({
                index: eventData.registrarIndex,
                value: JudgementType.FeePaid,
                createdAt: new Date(block.timestamp),
            })
        )
    }

    await ctx.store.save(identity)

    return undefined
}
