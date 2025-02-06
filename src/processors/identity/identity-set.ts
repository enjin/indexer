import { hexToString } from '@polkadot/util'
import { CallNotDefinedError, UnsupportedEventError } from '../../common/errors'
import { calls, events } from '../../types/generated'
import { Event as EventModel, Identity, JudgementType, Registration } from '../../model'
import { CommonContext, BlockHeader, CallItem, EventItem } from 'matrixchain-indexer/common/types/contexts'
import { getOrCreateAccount } from 'matrixchain-indexer/common/util/entities'
import { Data } from '../../types/generated/v1003'

function getEventData(event: EventItem) {
    if (events.identity.identitySet.matrixEnjinV1000.is(event)) {
        return events.identity.identitySet.matrixEnjinV1000.decode(event)
    }

    throw new UnsupportedEventError(events.identity.identitySet.name)
}

function getCallData(call: CallItem) {
    if (calls.identity.setIdentity.matrixEnjinV1000.is(call)) {
        return calls.identity.setIdentity.matrixEnjinV1000.decode(call)
    }

    throw new UnsupportedEventError(calls.identity.setIdentity.name)
}

const dataToValue = (raw: Data) => {
    if (raw.__kind !== 'None') {
        return hexToString(raw.value)
    }

    return null
}

export async function identitySet(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<EventModel | undefined> {
    if (!item.call) throw new CallNotDefinedError()

    const eventData = getEventData(item)
    const callData = getCallData(item.call)

    const account = await getOrCreateAccount(ctx, eventData.who)
    let additional: { key: string | null; value: string | null }[] = []
    if (callData.info.additional.length) {
        additional = callData.info.additional.map((i) => {
            return {
                key: dataToValue(i[0]),
                value: dataToValue(i[1]),
            }
        })
    }

    const registeration = new Registration({
        id: account.id,
        account,
        additional,
        display: dataToValue(callData.info.display),
        legal: dataToValue(callData.info.legal),
        web: dataToValue(callData.info.web),
        riot: dataToValue(callData.info.riot),
        email: dataToValue(callData.info.email),
        twitter: dataToValue(callData.info.twitter),
        image: dataToValue(callData.info.image),
        pgpFingerprint: callData.info.pgpFingerprint,
        currentJudgement: JudgementType.Unknown,
        judgements: [],
        deposit: 0n,
        createdAt: new Date(block.timestamp ?? 0),
    })

    const identity = new Identity({
        id: account.id,
        account,
        isSub: false,
        name: dataToValue(callData.info.display) || dataToValue(callData.info.legal),
        info: registeration,
        createdAt: new Date(block.timestamp ?? 0),
    })

    await ctx.store.save(registeration)
    await ctx.store.save(identity)

    return undefined
}
