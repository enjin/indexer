import { Event as EventModel, Extrinsic, FuelTank, FuelTankDestroyScheduled } from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import * as mappings from '~/pallet/index'

/**
 * destroy_fuel_tank on a tank that still has accounts sets its status to Destroyed (dispatch is blocked) and queues it
 * for on_idle, which removes the accounts and then emits FuelTankDestroyed. The tank stays indexed until then.
 */
export async function destroyFuelTankScheduled(ctx: CommonContext, block: Block, item: EventItem): Promise<EventModel> {
    const eventData = mappings.fuelTanks.events.destroyFuelTankScheduled(item)

    const tank = await ctx.store.findOneBy(FuelTank, { id: eventData.tankId })
    if (tank) {
        tank.destroyScheduledAt = block.height
        await ctx.store.save(tank)
    } else {
        ctx.log.warn(`DestroyFuelTankScheduled for unknown fuel tank ${eventData.tankId} at block ${block.height}`)
    }

    return new EventModel({
        id: item.id,
        name: FuelTankDestroyScheduled.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new FuelTankDestroyScheduled({ tank: eventData.tankId }),
    })
}
