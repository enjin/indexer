import { UnknownVersionError } from '../../../common/errors'
import { BalancesWithdrawEvent } from '../../../types/generated/events'
import { EventHandlerContext } from '../../types/contexts'
import { Fee } from '../../../model'
import { getOrCreateAccount } from '../../util/entities'
import { encodeId } from '../../../common/tools'

interface EventData {
    who: Uint8Array
    amount: bigint
}

function getEventData(ctx: EventHandlerContext): EventData {
    const event = new BalancesWithdrawEvent(ctx)
    console.log(`Block: ${ctx.block.height}, event: ${ctx.event.name}`)

    if (event.isRocfinityV5) {
        const { who, amount } = event.asRocfinityV5
        return { who, amount }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleWithdraw(ctx: EventHandlerContext) {
    const eventData = getEventData(ctx as EventHandlerContext)

    if (!eventData) return
    if (!ctx.event.extrinsic?.call?.id) return

    const who = await getOrCreateAccount(ctx, encodeId(eventData.who))
    const fee = new Fee({
        id: ctx.event.extrinsic.call.id,
        amount: eventData.amount,
        who: who,
    })

    await ctx.store.insert(fee)
}
