import { hexToString } from '@polkadot/util'
import { TokenAccount } from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import { throwFatalError } from '../../../utils/errors'
import * as mappings from '../../index'
import { match, P } from 'ts-pattern'

export async function unreserved(ctx: CommonContext, block: Block, item: EventItem, skipSave: boolean) {
    const data = mappings.multiTokens.events.unreserved(item)

    if (skipSave) return undefined

    const tokenAccount = await ctx.store.findOne(TokenAccount, {
        where: { id: `${data.accountId}-${data.collectionId}-${data.tokenId}` },
        relations: { account: true },
    })

    if (!tokenAccount) {
        throwFatalError(
            `[Unreserved] We have not found token account ${data.accountId}-${data.collectionId}-${data.tokenId}.`
        )
    } else {
        const reserveId = match(data.reserveId)
            .with(P.string, (v) => hexToString(v))
            .with({ __kind: P.string }, (v) => v.__kind)
            .otherwise(() => {
                throw new Error('Unknown reserve id')
            })

        tokenAccount.balance += data.amount
        tokenAccount.reservedBalance -= data.amount
        const pallet = tokenAccount.namedReserves?.find((nr) => nr.pallet === reserveId)

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
