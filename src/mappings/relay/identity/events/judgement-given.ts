import { CallNotDefinedError, UnknownVersionError } from '../../../common/errors'
import { events, calls } from '../../../types/generated'
import { Event as EventModel, Judgement, JudgementType, Registration } from '../../../model'
import { CommonContext, BlockHeader, EventItem, CallItem } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'

function getEventData(event: EventItem) {
    if (events.identity.judgementGiven.enjinV110.is(event)) {
        return events.identity.judgementGiven.enjinV110.decode(event)
    }

    throw new UnknownVersionError(events.identity.judgementGiven.name)
}

function getCallData(call: CallItem) {
    if (calls.identity.provideJudgement.enjinV110.is(call)) {
        return calls.identity.provideJudgement.enjinV110.decode(call)
    }

    throw new UnknownVersionError(calls.identity.provideJudgement.name)
}

export async function judgementGiven(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<EventModel | undefined> {
    if (!item.call) throw new CallNotDefinedError()

    const eventData = getEventData(item)
    const callData = getCallData(item.call)

    const account = await getOrCreateAccount(ctx, eventData.target)

    const registeration = await ctx.store.findOneByOrFail(Registration, { id: account.id })

    registeration.currentJudgement = JudgementType[callData.judgement.__kind]
    const existing = registeration.judgements?.find((i) => i.index === eventData.registrarIndex)
    if (existing) {
        existing.value = JudgementType[callData.judgement.__kind]
        existing.createdAt = new Date(block.timestamp ?? 0)
    } else {
        registeration.judgements?.push(
            new Judgement({
                index: eventData.registrarIndex,
                value: JudgementType[callData.judgement.__kind],
                createdAt: new Date(block.timestamp ?? 0),
            })
        )
    }

    await ctx.store.save(registeration)

    return undefined
}
