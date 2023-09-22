import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { u8aToHex } from '@polkadot/util'
import { UnknownVersionError } from '../../../common/errors'
import { FuelTanksAccountAddedEvent } from '../../../types/generated/events'
import { Event as EventModel, FuelTank, FuelTankUserAccounts } from '../../../model'
import { Event } from '../../../types/generated/support'
import { CommonContext } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'

function getEventData(ctx: CommonContext, event: Event) {
    const data = new FuelTanksAccountAddedEvent(ctx, event)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603
    }

    throw new UnknownVersionError(data.constructor.name)
}

export async function accountAdded(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'FuelTanks.AccountAdded', { event: { args: true; extrinsic: true } }>
): Promise<EventModel | undefined> {
    const eventData = getEventData(ctx, item.event)

    if (!eventData) return undefined

    const tankId = u8aToHex(eventData.tankId)
    const account = await getOrCreateAccount(ctx, eventData.userId)

    const fuelAccount = new FuelTankUserAccounts({
        id: `${tankId}-${account.id}`,
        tank: new FuelTank({ id: tankId }),
        account,
        tankDeposit: eventData.tankDeposit,
        userDeposit: eventData.userDeposit,
    })

    ctx.store.save(fuelAccount)

    return undefined
}
