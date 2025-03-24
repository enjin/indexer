import { hexToString } from '@polkadot/util'
import { TokenAccount, TokenNamedReserve } from '../../../model'
import { events } from '../../../types/generated'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { syncCollectionStats } from '../../../jobs/collection-stats'
import { UnsupportedEventError, throwError } from '../../../common/errors'
import { RuntimeHoldReason } from '../../../types/generated/v1020'

function getEventData(ctx: CommonContext, event: EventItem) {
    if (events.multiTokens.reserved.matrixEnjinV1022.is(event)) {
        return events.multiTokens.reserved.matrixEnjinV1022.decode(event)
    }

    if (events.multiTokens.reserved.matrixEnjinV603.is(event)) {
        return events.multiTokens.reserved.matrixEnjinV603.decode(event)
    }

    if (events.multiTokens.reserved.v1020.is(event)) {
        return events.multiTokens.reserved.v1020.decode(event)
    }

    throw new UnsupportedEventError(events.multiTokens.reserved.name)
}

export function getReserveId(reserveId: RuntimeHoldReason | string | undefined): string | undefined {
    if (!reserveId) return undefined
    if (typeof reserveId == 'string') {
        return hexToString(reserveId)
    }

    return reserveId.__kind
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
        const pallet = tokenAccount.namedReserves?.find((nr) => nr.pallet === getReserveId(data.reserveId))

        if (pallet) {
            pallet.amount += data.amount
        } else if (tokenAccount.namedReserves) {
            tokenAccount.namedReserves.push(new TokenNamedReserve({ pallet: getReserveId(data.reserveId), amount: data.amount }))
        } else {
            tokenAccount.namedReserves = [new TokenNamedReserve({ pallet: getReserveId(data.reserveId), amount: data.amount })]
        }

        tokenAccount.updatedAt = new Date(block.timestamp ?? 0)

        await ctx.store.save(tokenAccount)
    } else {
        throwError(`[Reserved] We have not found token account ${data.accountId}-${data.collectionId}-${data.tokenId}.`, 'fatal')
    }

    syncCollectionStats(data.collectionId.toString())

    return undefined
}
