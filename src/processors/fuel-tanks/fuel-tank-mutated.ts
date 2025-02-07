import { randomBytes } from 'crypto'
import {
    CoveragePolicy,
    Event as EventModel,
    FuelTank,
    FuelTankAccountRules,
    FuelTankUserAccountManagement,
    RequireToken,
    WhitelistedCallers,
} from '../../model'
import { BlockHeader, CommonContext, EventItem } from '../../common/types/contexts'
import * as mappings from './../../mappings'

export async function fuelTankMutated(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<EventModel | undefined> {
    // const eventData = mappings.fuelTanks.events.fuelTankMutated(item)
    // if (!eventData) return undefined
    //
    // const { tankId } = eventData
    //
    // const tank = await ctx.store.findOneByOrFail(FuelTank, { id: tankId })
    //
    // if (eventData.mutation.userAccountManagement && eventData.mutation.userAccountManagement.__kind === 'SomeMutation') {
    //     if (eventData.mutation.userAccountManagement.value) {
    //         tank.userAccountManagement = new FuelTankUserAccountManagement({
    //             tankReservesAccountCreationDeposit:
    //                 eventData.mutation.userAccountManagement.value.tankReservesAccountCreationDeposit,
    //             tankReservesExistentialDeposit:
    //                 'tankReservesExistentialDeposit' in eventData.mutation.userAccountManagement.value
    //                     ? eventData.mutation.userAccountManagement.value.tankReservesExistentialDeposit
    //                     : eventData.mutation.userAccountManagement.value.tankReservesAccountCreationDeposit,
    //         })
    //     } else {
    //         tank.userAccountManagement = null
    //     }
    // }
    //
    // if ('providesDeposit' in eventData.mutation && eventData.mutation.providesDeposit !== undefined) {
    //     tank.providesDeposit = eventData.mutation.providesDeposit
    // }
    //
    // if ('coveragePolicy' in eventData.mutation && eventData.mutation.coveragePolicy !== undefined) {
    //     tank.coveragePolicy = CoveragePolicy[eventData.mutation.coveragePolicy.__kind]
    // }
    //
    // if (eventData.mutation.accountRules !== undefined) {
    //     const accountRules = await ctx.store.find(FuelTankAccountRules, { where: { tank: { id: tank.id } } })
    //     await ctx.store.remove(accountRules)
    //
    //     eventData.mutation.accountRules.forEach(async (rule) => {
    //         let accountRule: WhitelistedCallers | RequireToken
    //         if (rule.__kind === 'WhitelistedCallers') {
    //             accountRule = new WhitelistedCallers({
    //                 value: rule.value.map((account) => account),
    //             })
    //         } else if (rule.__kind === 'RequireToken') {
    //             accountRule = new RequireToken({
    //                 tokenId: rule.value.tokenId,
    //                 collectionId: rule.value.collectionId,
    //             })
    //         } else {
    //             throw new Error('Unknown rule type')
    //         }
    //
    //         const accountRuleModel = new FuelTankAccountRules({
    //             tank,
    //             rule: accountRule,
    //             id: `${tank.id}-${accountRule.constructor.name}-${randomBytes(5).toString('hex')}`,
    //         })
    //
    //         ctx.store.save(accountRuleModel)
    //     })
    // }
    //
    // await ctx.store.save(tank)

    return undefined
}
