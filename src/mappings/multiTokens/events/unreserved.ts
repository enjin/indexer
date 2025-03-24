import { TokenAccount } from '../../../model'
import { events } from '../../../types/generated'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { UnsupportedEventError, throwError } from '../../../common/errors'
import { getReserveId } from './reserved'

function getEventData(eventItem: EventItem) {
    if (events.multiTokens.unreserved.matrixEnjinV1022.is(eventItem)) {
        return events.multiTokens.unreserved.matrixEnjinV1022.decode(eventItem)
    }

    if (events.multiTokens.unreserved.matrixEnjinV603.is(eventItem)) {
        return events.multiTokens.unreserved.matrixEnjinV603.decode(eventItem)
    }

    if (events.multiTokens.unreserved.v1020.is(eventItem)) {
        return events.multiTokens.unreserved.v1020.decode(eventItem)
    }

    throw new UnsupportedEventError(events.multiTokens.unreserved.name)
}

export async function unreserved(ctx: CommonContext, block: BlockHeader, item: EventItem, skipSave: boolean) {
    const data = getEventData(item)
    if (!data) return undefined

    if (skipSave) return undefined

    const tokenAccount = await ctx.store.findOne(TokenAccount, {
        where: { id: `${data.accountId}-${data.collectionId}-${data.tokenId}` },
        relations: { account: true },
    })

    if (!tokenAccount) {
        throwError(
            `[Unreserved] We have not found token account ${data.accountId}-${data.collectionId}-${data.tokenId}.`,
            'fatal'
        )
    } else {
        tokenAccount.balance += data.amount
        tokenAccount.reservedBalance -= data.amount
        const pallet = tokenAccount.namedReserves?.find((nr) => nr.pallet === getReserveId(data.reserveId))

        if (pallet) {
            pallet.amount -= data.amount

            if (pallet.amount <= BigInt(0)) {
                tokenAccount.namedReserves = tokenAccount.namedReserves?.filter((nr) => nr.pallet !== pallet.pallet)
            }
        }

        tokenAccount.updatedAt = new Date(block.timestamp ?? 0)

        await ctx.store.save(tokenAccount)
    }

    return undefined
}
