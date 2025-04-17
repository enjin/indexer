import { hexToString } from '@polkadot/util'
import { CallNotDefinedError } from '../../utils/errors'
import { Event as EventModel, Identity, JudgementType, Registration } from '../../model'
import { Block, CommonContext, EventItem } from '../../contexts'
import { getOrCreateAccount } from '../../utils/entities'
import * as mappings from './../../mappings'
import { Data } from '../../mappings/common/types'

const dataToValue = (raw: Data) => {
    if (raw.__kind !== 'None') {
        return hexToString(raw.value)
    }

    return null
}

export async function identitySet(ctx: CommonContext, block: Block, item: EventItem): Promise<EventModel | undefined> {
    if (!item.call) throw new CallNotDefinedError()

    const event = mappings.identity.events.identitySet(item)
    const call = mappings.identity.calls.setIdentity(item.call)

    const account = await getOrCreateAccount(ctx, event.who)

    let additional: { key: string | null; value: string | null }[] = []
    if (call.info.additional.length) {
        additional = call.info.additional.map((i) => {
            return {
                key: dataToValue(i[0]),
                value: dataToValue(i[1]),
            }
        })
    }

    const registration = new Registration({
        id: account.id,
        account,
        additional,
        display: dataToValue(call.info.display),
        legal: dataToValue(call.info.legal),
        web: dataToValue(call.info.web),
        riot: dataToValue(call.info.riot),
        email: dataToValue(call.info.email),
        twitter: dataToValue(call.info.twitter),
        image: dataToValue(call.info.image),
        pgpFingerprint: call.info.pgpFingerprint,
        currentJudgement: JudgementType.Unknown,
        judgements: [],
        deposit: 0n,
        createdAt: new Date(block.timestamp ?? 0),
    })

    const identity = new Identity({
        id: account.id,
        account,
        isSub: false,
        name: dataToValue(call.info.display) || dataToValue(call.info.legal),
        info: registration,
        createdAt: new Date(block.timestamp ?? 0),
    })

    await ctx.store.save(registration)
    await ctx.store.save(identity)

    return undefined
}
