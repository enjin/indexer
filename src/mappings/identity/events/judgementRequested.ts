import { UnsupportedEventError } from '../../../common/errors'
import { identity } from '../../../types/generated/events'
import { Event as EventModel, Judgement, JudgementType, Registration } from '../../../model'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'

function getEventData(event: EventItem) {
    if (identity.judgementRequested.matrixEnjinV1000.is(event)) {
        return identity.judgementRequested.matrixEnjinV1000.decode(event)
    }

    throw new UnsupportedEventError(identity.judgementRequested.name)
}

export async function judgementRequested(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem
): Promise<EventModel | undefined> {
    const eventData = getEventData(item)

    const account = await getOrCreateAccount(ctx, eventData.who)

    const registeration = await ctx.store.findOneByOrFail(Registration, { id: account.id })

    registeration.currentJudgement = JudgementType.FeePaid
    const existing = registeration.judgements?.find((i) => i.index === eventData.registrarIndex)
    if (existing) {
        existing.value = JudgementType.FeePaid
    } else {
        registeration.judgements?.push(
            new Judgement({
                index: eventData.registrarIndex,
                value: JudgementType.FeePaid,
                createdAt: new Date(block.timestamp ?? 0),
            })
        )
    }

    await ctx.store.save(registeration)

    return undefined
}
