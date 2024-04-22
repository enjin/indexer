import { hexToString } from '@polkadot/util'
import { TokenAccount, TokenNamedReserve } from '../../../model'
import { events } from '../../../types/generated'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { syncCollectionStats } from '../../../jobs/collection-stats'
import { UnknownVersionError, throwError } from '../../../common/errors'

function getEventData(ctx: CommonContext, event: EventItem) {
    if (events.multiTokens.reserved.matrixEnjinV603.is(event)) {
        return events.multiTokens.reserved.matrixEnjinV603.decode(event)
    }

    throw new UnknownVersionError(events.multiTokens.reserved.name)
}

export async function reserved(ctx: CommonContext, block: BlockHeader, item: EventItem, skipSave: boolean) {
    const data = getEventData(ctx, item)
    if (!data) return undefined
    if (skipSave) return undefined

    const tokenAccount = await ctx.store.findOne(TokenAccount, {
        where: { id: `${data.accountId}-${data.collectionId}-${data.tokenId}` },
        relations: { account: true },
    })

    if (tokenAccount) {
        tokenAccount.balance -= data.amount
        tokenAccount.reservedBalance += data.amount
        const pallet = tokenAccount.namedReserves?.find((nr) => nr.pallet === hexToString(data.reserveId))

        if (pallet) {
            pallet.amount += data.amount
        } else if (tokenAccount.namedReserves) {
            tokenAccount.namedReserves.push(new TokenNamedReserve({ pallet: hexToString(data.reserveId), amount: data.amount }))
        } else {
            tokenAccount.namedReserves = [new TokenNamedReserve({ pallet: hexToString(data.reserveId), amount: data.amount })]
        }

        tokenAccount.updatedAt = new Date(block.timestamp ?? 0)

        await ctx.store.save(tokenAccount)
    } else {
        throwError(`[Reserved] We have not found token account ${data.accountId}-${data.collectionId}-${data.tokenId}.`, 'fatal')
    }

    syncCollectionStats(data.collectionId.toString())

    return undefined
}
