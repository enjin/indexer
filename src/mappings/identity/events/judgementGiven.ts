import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { CallNotDefinedError, UnknownVersionError } from '../../../common/errors'
import { IdentityJudgementGivenEvent } from '../../../types/generated/events'
import { Event as EventModel, Judgement, JudgementType, Registration } from '../../../model'
import { Call, Event } from '../../../types/generated/support'
import { CommonContext } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'
import { IdentityProvideJudgementCall } from '../../../types/generated/calls'

function getEventData(ctx: CommonContext, event: Event) {
    const data = new IdentityJudgementGivenEvent(ctx, event)

    if (data.isMatrixEnjinV1000) {
        return data.asMatrixEnjinV1000
    }

    throw new UnknownVersionError(data.constructor.name)
}

function getCallData(ctx: CommonContext, call: Call) {
    const data = new IdentityProvideJudgementCall(ctx, call)

    if (data.isMatrixEnjinV1000) {
        return data.asMatrixEnjinV1000
    }

    throw new UnknownVersionError(data.constructor.name)
}

export async function judgementGiven(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'Identity.JudgementGiven', { event: { args: true; extrinsic: true } }>
): Promise<EventModel | undefined> {
    if (!item.event.call) throw new CallNotDefinedError()

    const eventData = getEventData(ctx, item.event)
    const callData = getCallData(ctx, item.event.call)

    const account = await getOrCreateAccount(ctx, eventData.target)

    const registeration = await ctx.store.findOneByOrFail(Registration, { id: account.id })

    registeration.currentJudgement = JudgementType[callData.judgement.__kind]
    const existing = registeration.judgements?.find((i) => i.index === eventData.registrarIndex)
    if (existing) {
        existing.value = JudgementType[callData.judgement.__kind]
        existing.createdAt = new Date(block.timestamp)
    } else {
        registeration.judgements?.push(
            new Judgement({
                index: eventData.registrarIndex,
                value: JudgementType[callData.judgement.__kind],
                createdAt: new Date(block.timestamp),
            })
        )
    }

    await ctx.store.save(registeration)

    return undefined
}
