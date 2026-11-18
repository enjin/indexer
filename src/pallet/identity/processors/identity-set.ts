import { hexToString } from '@polkadot/util'
import { CallNotDefinedError } from '~/util/errors'
import { Event as EventModel, Identity, JudgementType, Registration } from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import { getOrCreateAccount } from '~/util/entities'
import * as mappings from '~/pallet/index'
import { Data } from '~/pallet/common/types'
import { safeString } from '~/util/tools'

const dataToValue = (raw: Data) => {
    if (raw.__kind !== 'None') {
        return safeString(hexToString(raw.value))
    }

    return null
}

export async function identitySet(ctx: CommonContext, block: Block, item: EventItem): Promise<EventModel | undefined> {
    if (!item.call) throw new CallNotDefinedError()

    const event = mappings.identity.events.identitySet(item)
    const { info } = mappings.identity.calls.setIdentity(item.call)

    const account = await getOrCreateAccount(ctx, event.who)

    const isLegacy = 'additional' in info
    const additional = isLegacy
        ? info.additional.map(([key, value]) => ({ key: dataToValue(key), value: dataToValue(value) }))
        : [
              { key: 'github', value: dataToValue(info.github) },
              { key: 'discord', value: dataToValue(info.discord) },
          ].filter(({ value }) => value !== null)

    const registration = new Registration({
        id: account.id,
        account,
        additional,
        display: dataToValue(info.display),
        legal: dataToValue(info.legal),
        web: dataToValue(info.web),
        riot: dataToValue(isLegacy ? info.riot : info.matrix),
        email: dataToValue(info.email),
        twitter: dataToValue(info.twitter),
        image: dataToValue(info.image),
        pgpFingerprint: info.pgpFingerprint,
        currentJudgement: JudgementType.Unknown,
        judgements: [],
        deposit: 0n,
        createdAt: new Date(block.timestamp ?? 0),
    })

    const identity = new Identity({
        id: account.id,
        account,
        isSub: false,
        name: registration.display || registration.legal,
        info: registration,
        createdAt: new Date(block.timestamp ?? 0),
    })

    await ctx.store.save(registration)
    await ctx.store.save(identity)

    return undefined
}
