import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { UnknownVersionError } from '../../../common/errors'
import { IdentityJudgementUnrequestedEvent } from '../../../types/generated/events'
import { Event as EventModel, JudgementType, Registration } from '../../../model'
import { Event } from '../../../types/generated/support'
import { CommonContext } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'

function getEventData(ctx: CommonContext, event: Event) {
    const data = new IdentityJudgementUnrequestedEvent(ctx, event)

    if (data.isMatrixEnjinV1000) {
        return data.asMatrixEnjinV1000
    }

    throw new UnknownVersionError(data.constructor.name)
}

export async function judgementUnrequested(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'Identity.JudgementUnrequested', { event: { args: true; extrinsic: true } }>
): Promise<EventModel | undefined> {
    const eventData = getEventData(ctx, item.event)

    const account = await getOrCreateAccount(ctx, eventData.who)

    const registeration = await ctx.store.findOneByOrFail(Registration, { id: account.id })

    const judgements = registeration.judgements?.filter((i) => i.index !== eventData.registrarIndex)

    if (judgements?.length) {
        registeration.judgements = judgements
        registeration.currentJudgement = judgements[judgements.length - 1].value
    } else {
        registeration.currentJudgement = JudgementType.Unknown
    }

    await ctx.store.save(registeration)

    return undefined
}
