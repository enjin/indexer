import { Block, CommonContext, EventItem } from '~/contexts'
import { EphemeralCleanupFailure, Token } from '~/model'
import * as mappings from '~/pallet/index'
import { EventHandlerResult } from '~/processor.handler'
import { readableDispatchError } from '~/util/dispatch-error'

export async function ephemeralCleanupFailed(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave: boolean
): Promise<EventHandlerResult> {
    const data = mappings.multiTokens.events.ephemeralCleanupFailed(item)
    const error = readableDispatchError(data.error, block._runtime)
    const event = mappings.multiTokens.events.ephemeralCleanupFailedEventModel(item, data, error)
    if (skipSave) return event

    const token = await ctx.store.findOneBy(Token, { id: `${data.collectionId}-${data.tokenId}` })
    const expirationBlock = BigInt(data.expiration)
    if (token?.ephemeralExpiration === expirationBlock) {
        token.ephemeralCleanupFailure = new EphemeralCleanupFailure({ expirationBlock, error })
        await ctx.store.save(token)
    }
    return event
}
