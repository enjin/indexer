import { UnknownVersionError } from '../../../common/errors'
import { identity } from '../../../types/generated/events'
import { Event as EventModel, JudgementType, Registration } from '../../../model'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'

function getEventData(event: EventItem) {
    if (identity.judgementUnrequested.matrixEnjinV1000.is(event)) {
        return identity.judgementUnrequested.matrixEnjinV1000.decode(event)
    }

    throw new UnknownVersionError(identity.judgementUnrequested.name)
}

export async function judgementUnrequested(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem
): Promise<EventModel | undefined> {
    const eventData = getEventData(item)

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
