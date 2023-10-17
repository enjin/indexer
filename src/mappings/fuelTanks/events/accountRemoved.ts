import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { u8aToHex } from '@polkadot/util'
import { UnknownVersionError } from '../../../common/errors'
import { FuelTanksAccountRemovedEvent } from '../../../types/generated/events'
import { Event as EventModel, FuelTankUserAccounts, FuelTank } from '../../../model'
import { Event } from '../../../types/generated/support'
import { CommonContext } from '../../types/contexts'

function getEventData(ctx: CommonContext, event: Event) {
    const data = new FuelTanksAccountRemovedEvent(ctx, event)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603
    }

    throw new UnknownVersionError(data.constructor.name)
}

export async function accountRemoved(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'FuelTanks.AccountRemoved', { event: { args: true; extrinsic: true } }>
): Promise<EventModel | undefined> {
    const eventData = getEventData(ctx, item.event)

    if (!eventData) return undefined

    const tankAccountId = `${u8aToHex(eventData.tankId)}-${u8aToHex(eventData.userId)}`

    ctx.store.delete(FuelTankUserAccounts, { id: tankAccountId })

    const tank = await ctx.store.findOneByOrFail(FuelTank, { id: u8aToHex(eventData.tankId) })
    tank.accountCount -= 1
    await ctx.store.save(tank)

    return undefined
}
