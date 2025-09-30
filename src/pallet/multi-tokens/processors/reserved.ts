import { hexToString } from '@polkadot/util'
import { TokenAccount, TokenNamedReserve } from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import { QueueUtils } from '~/queue'
import { throwFatalError } from '~/util/errors'
import * as mappings from '~/pallet/index'
import { match, P } from 'ts-pattern'
import { EventHandlerResult } from '~/processor.handler'

export async function reserved(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave: boolean
): Promise<EventHandlerResult> {
    const data = mappings.multiTokens.events.reserved(item)
    if (skipSave) return undefined

    const tokenAccount = await ctx.store.findOne<TokenAccount>(TokenAccount, {
        where: { id: `${data.accountId}-${data.collectionId}-${data.tokenId}` },
        relations: { account: true },
    })

    const reserveId = match(data.reserveId)
        .with(P.string, (v) => hexToString(v))
        .with({ __kind: P.string }, (v) => v.__kind)
        .otherwise(() => {
            throw new Error('Unknown reserve id')
        })

    if (tokenAccount) {
        tokenAccount.balance -= data.amount
        tokenAccount.reservedBalance += data.amount
        const pallet = tokenAccount.namedReserves?.find((nr) => nr.pallet === reserveId)

        if (pallet) {
            pallet.amount += data.amount
        } else if (tokenAccount.namedReserves) {
            tokenAccount.namedReserves.push(new TokenNamedReserve({ pallet: reserveId, amount: data.amount }))
        } else {
            tokenAccount.namedReserves = [new TokenNamedReserve({ pallet: reserveId, amount: data.amount })]
        }

        tokenAccount.updatedAt = new Date(block.timestamp ?? 0)

        await ctx.store.save(tokenAccount)
    } else {
        throwFatalError(
            `[Reserved] We have not found token account ${data.accountId}-${data.collectionId}-${data.tokenId}.`
        )
    }

    await QueueUtils.dispatchComputeStats(data.collectionId.toString())
}
