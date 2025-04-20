import { randomBytes } from 'crypto'
import {
    CoveragePolicy,
    Event as EventModel,
    FuelTank,
    FuelTankAccountRules,
    FuelTankUserAccountManagement,
    RequireToken,
    WhitelistedCallers,
} from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import * as mappings from '../../index'

export async function fuelTankMutated(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<EventModel | undefined> {
    const eventData = mappings.fuelTanks.events.fuelTankMutated(item)
    const { tankId } = eventData

    const tank = await ctx.store.findOneByOrFail<FuelTank>(FuelTank, { id: tankId })

    if (eventData.mutation.userAccountManagement.__kind === 'SomeMutation') {
        if (eventData.mutation.userAccountManagement.value) {
            tank.userAccountManagement = new FuelTankUserAccountManagement({
                tankReservesAccountCreationDeposit:
                    eventData.mutation.userAccountManagement.value.tankReservesAccountCreationDeposit,
                tankReservesExistentialDeposit:
                    'tankReservesExistentialDeposit' in eventData.mutation.userAccountManagement.value
                        ? eventData.mutation.userAccountManagement.value.tankReservesExistentialDeposit
                        : eventData.mutation.userAccountManagement.value.tankReservesAccountCreationDeposit,
            })
        } else {
            tank.userAccountManagement = null
        }
    }

    if ('providesDeposit' in eventData.mutation && eventData.mutation.providesDeposit !== undefined) {
        tank.providesDeposit = eventData.mutation.providesDeposit
    }

    if ('coveragePolicy' in eventData.mutation && eventData.mutation.coveragePolicy !== undefined) {
        tank.coveragePolicy = CoveragePolicy[eventData.mutation.coveragePolicy.__kind]
    }

    if (eventData.mutation.accountRules !== undefined) {
        const accountRules = await ctx.store.find<FuelTankAccountRules>(FuelTankAccountRules, {
            where: { tank: { id: tank.id } },
        })
        await ctx.store.remove(accountRules)

        for (const rule of eventData.mutation.accountRules) {
            let accountRule: WhitelistedCallers | RequireToken
            if (rule.__kind === 'WhitelistedCallers') {
                accountRule = new WhitelistedCallers({
                    value: rule.value.map((account) => account),
                })
            } else {
                accountRule = new RequireToken({
                    tokenId: rule.value.tokenId,
                    collectionId: rule.value.collectionId,
                })
            }

            const accountRuleModel = new FuelTankAccountRules({
                tank,
                rule: accountRule,
                id: `${tank.id}-${accountRule.constructor.name}-${randomBytes(5).toString('hex')}`,
            })

            await ctx.store.save(accountRuleModel)
        }
    }

    await ctx.store.save(tank)

    return undefined
}
