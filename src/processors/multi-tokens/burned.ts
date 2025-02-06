import { UnsupportedEventError, throwError } from '../../common/errors'
import { events } from '../../types/generated'
import { Account, AccountTokenEvent, Event as EventModel, Extrinsic, MultiTokensBurned, Token, TokenAccount } from '../../model'
import { CommonContext, BlockHeader, EventItem } from '../../common/types/contexts'
import { Sns } from '../../common/sns'
import * as mappings from './../../mappings'
import { computeTraits } from '../../jobs/compute-traits'
import { getOrCreateAccount } from '../../common/util/entities'
import { syncCollectionStats } from '../../jobs/collection-stats'

export async function burned(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem,
    skipSave: boolean
): Promise<[EventModel, AccountTokenEvent] | undefined | EventModel> {
    const data = mappings.multiTokens.events.burned(item)
    if (!data || data.amount === 0n) return undefined

    const address = data.accountId

    const token = await ctx.store.findOne(Token, {
        where: { id: `${data.collectionId}-${data.tokenId}` },
    })

    if (skipSave) {
        await getOrCreateAccount(ctx, data.accountId)
        return mappings.multiTokens.events.burnedEventModel(item, data, token)
    }

    const tokenAccount = await ctx.store.findOne(TokenAccount, {
        where: { id: `${address}-${data.collectionId}-${data.tokenId}` },
        relations: { account: true },
    })

    if (tokenAccount) {
        tokenAccount.balance -= data.amount
        tokenAccount.totalBalance -= data.amount
        tokenAccount.updatedAt = new Date(block.timestamp ?? 0)
        await ctx.store.save(tokenAccount)
    } else {
        throwError(`[Burned] We have not found token account ${address}-${data.collectionId}-${data.tokenId}.`, 'log')
    }

    if (token) {
        token.supply -= data.amount
        if (token.supply < 1n) {
            token.infusion = 0n
        }
        await ctx.store.save(token)
        computeTraits(data.collectionId.toString())
        syncCollectionStats(data.collectionId.toString())
    } else {
        throwError(`[Burned] We have not found token ${data.collectionId}-${data.tokenId}.`, 'log')
    }

    if (item.extrinsic) {
        await Sns.getInstance().send({
            id: item.id,
            name: item.name,
            body: {
                collectionId: data.collectionId,
                tokenId: data.tokenId,
                token: `${data.collectionId}-${data.tokenId}`,
                account: data.accountId,
                amount: data.amount,
                extrinsic: item.extrinsic.id,
            },
        })
    }

    return mappings.multiTokens.events.burnedEventModel(item, data, token)
}
