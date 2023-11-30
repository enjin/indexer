import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { u8aToHex } from '@polkadot/util'
import { UnknownVersionError } from '../../../common/errors'
import { FuelTanksAccountRuleDataRemovedEvent } from '../../../types/generated/events'
import { Event as EventModel, FuelTankRuleSet, PermittedExtrinsics } from '../../../model'
import { Event } from '../../../types/generated/support'
import { CommonContext } from '../../types/contexts'

function getEventData(ctx: CommonContext, event: Event) {
    const data = new FuelTanksAccountRuleDataRemovedEvent(ctx, event)

    if (data.isMatrixEnjinV1000) {
        return data.asMatrixEnjinV1000
    }

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603
    }

    if (data.isV1000) {
        return data.asV1000
    }

    throw new UnknownVersionError(data.constructor.name)
}

const uc = <T extends string>(x: T) => (x.charAt(0).toLowerCase() + x.slice(1)) as Uncapitalize<T>

export async function accountRuleDataRemoved(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'FuelTanks.AccountRuleDataRemoved', { event: { args: true; extrinsic: true } }>
): Promise<EventModel | undefined> {
    const eventData = getEventData(ctx, item.event)

    if (!eventData) return undefined

    const ruleId = `${u8aToHex(eventData.tankId)}-${eventData.ruleSetId}`

    const ruleSet = await ctx.store.findOneByOrFail(FuelTankRuleSet, { id: ruleId })

    if (eventData.ruleKind) {
        const kind = eventData.ruleKind.__kind
        if (kind === 'PermittedExtrinsics') {
            ctx.store.delete(PermittedExtrinsics, { ruleSet: { id: ruleId } })
        } else {
            ruleSet[uc(kind)] = undefined
        }
    }

    await ctx.store.save(ruleSet)

    return undefined
}
