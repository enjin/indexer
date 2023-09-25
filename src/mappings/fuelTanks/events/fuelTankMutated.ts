import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { u8aToHex } from '@polkadot/util'
import { randomBytes } from 'crypto'
import { UnknownVersionError } from '../../../common/errors'
import { FuelTanksFuelTankMutatedEvent } from '../../../types/generated/events'
import {
    Event as EventModel,
    FuelTank,
    FuelTankAccountRules,
    FuelTankUserAccountManagement,
    RequireToken,
    WhitelistedCallers,
} from '../../../model'
import { Event } from '../../../types/generated/support'
import { CommonContext } from '../../types/contexts'

function getEventData(ctx: CommonContext, event: Event) {
    const data = new FuelTanksFuelTankMutatedEvent(ctx, event)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603
    }

    throw new UnknownVersionError(data.constructor.name)
}

export async function fuelTankMutated(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'FuelTanks.FuelTankMutated', { event: { args: true; extrinsic: true } }>
): Promise<EventModel | undefined> {
    const eventData = getEventData(ctx, item.event)
    if (!eventData) return undefined

    const tankId = u8aToHex(eventData.tankId)

    const tank = await ctx.store.findOneByOrFail(FuelTank, { id: tankId })

    if (eventData.mutation.userAccountManagement && eventData.mutation.userAccountManagement.__kind === 'SomeMutation') {
        if (eventData.mutation.userAccountManagement.value) {
            tank.userAccountManagement = new FuelTankUserAccountManagement({
                tankReservesAccountCreationDeposit:
                    eventData.mutation.userAccountManagement.value.tankReservesAccountCreationDeposit,
                tankReservesExistentialDeposit: eventData.mutation.userAccountManagement.value.tankReservesExistentialDeposit,
            })
        } else {
            tank.userAccountManagement = undefined
        }
    }

    if (eventData.mutation.providesDeposit !== undefined) {
        tank.providesDeposit = eventData.mutation.providesDeposit
    }

    if (eventData.mutation.accountRules !== undefined) {
        await ctx.store.delete(FuelTankAccountRules, { tank: tank.id })

        eventData.mutation.accountRules.forEach(async (rule) => {
            let accountRule: WhitelistedCallers | RequireToken
            if (rule.__kind === 'WhitelistedCallers') {
                accountRule = new WhitelistedCallers({
                    value: rule.value.map((account) => u8aToHex(account)),
                })
            } else if (rule.__kind === 'RequireToken') {
                accountRule = new RequireToken({
                    tokenId: rule.value.tokenId,
                    collectionId: rule.value.collectionId,
                })
            } else {
                throw new Error('Unknown rule type')
            }

            const accountRuleModel = new FuelTankAccountRules({
                tank,
                rule: accountRule,
                id: `${tank.id}-${accountRule.constructor.name}-${randomBytes(5).toString('hex')}`,
            })

            ctx.store.save(accountRuleModel)
        })
    }

    await ctx.store.save(tank)

    return undefined
}
