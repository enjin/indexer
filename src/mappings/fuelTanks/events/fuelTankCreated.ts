import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { u8aToString } from '@polkadot/util'
import { UnknownVersionError } from '../../../common/errors'
import { FuelTanksFuelTankCreatedEvent } from '../../../types/generated/events'
import { Event as EventModel, FuelTank, FuelTankAccountRules, FuelTankUserAccountManagement } from '../../../model'
import { Call, Event } from '../../../types/generated/support'
import { CommonContext } from '../../types/contexts'
import { FuelTanksCreateFuelTankCall } from '../../../types/generated/calls'
import { getOrCreateAccount } from '../../util/entities'

function getEventData(ctx: CommonContext, event: Event) {
    const data = new FuelTanksFuelTankCreatedEvent(ctx, event)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603
    }

    throw new UnknownVersionError(data.constructor.name)
}

function getCallData(ctx: CommonContext, call: Call) {
    const data = new FuelTanksCreateFuelTankCall(ctx, call)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603
    }

    if (data.isV604) {
        return data.asV604
    }

    if (data.isV602) {
        return data.asV602
    }

    throw new UnknownVersionError(data.constructor.name)
}

export async function fuelTankCreated(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'FuelTanks.FuelTankCreated', { event: { args: true; call: true; extrinsic: true } }>
): Promise<EventModel | undefined> {
    if (!item.event.call) throw new Error('Call is not defined')

    const eventData = getEventData(ctx, item.event)

    const callData = getCallData(ctx, item.event.call)
    if (!eventData || !callData) return undefined

    const [tankAccount, owner] = await Promise.all([
        getOrCreateAccount(ctx, eventData.tankId),
        getOrCreateAccount(ctx, eventData.owner),
    ])

    let userAccountManagement: FuelTankUserAccountManagement | undefined
    if (callData.descriptor.userAccountManagement) {
        userAccountManagement = new FuelTankUserAccountManagement({
            tankReservesAccountCreationDeposit: callData.descriptor.userAccountManagement.tankReservesAccountCreationDeposit,
            tankReservesExistentialDeposit: callData.descriptor.userAccountManagement.tankReservesExistentialDeposit,
        })
    }

    const fuelTank = new FuelTank({
        id: tankAccount.id,
        tankAccount,
        name: u8aToString(eventData.name),
        owner,
        isFrozen: false,
        providesDeposit: callData.descriptor.providesDeposit,
        userAccountManagement,
    })

    await ctx.store.save(fuelTank)

    if (callData.descriptor.ruleSets.length > 0) {
        callData.descriptor.accountRules.forEach(async (rule) => {
            rule.__kind = 'FuelTankAccountRule'
            new FuelTankAccountRules({
                ru
            })
        })
    }

    return undefined
}
