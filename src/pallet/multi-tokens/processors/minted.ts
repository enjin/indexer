import { throwFatalError } from '../../../util/errors'
import { AccountTokenEvent, Event as EventModel, Token, TokenAccount } from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import { getOrCreateAccount } from '../../../util/entities'
import { Sns } from '../../../util/sns'
import * as mappings from '../../index'
import { isNonFungible } from '../../../util/helpers'
import { QueueUtils } from '../../../queue'

export async function minted(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave: boolean
): Promise<[EventModel, AccountTokenEvent] | EventModel | undefined> {
    const data = mappings.multiTokens.events.minted(item)

    const promises: Promise<void>[] = []

    const token = await ctx.store.findOne(Token, {
        where: { id: `${data.collectionId}-${data.tokenId}` },
        relations: {
            collection: true,
        },
    })

    if (data.amount === 0n) {
        return undefined
    }

    await Promise.all([getOrCreateAccount(ctx, data.recipient), getOrCreateAccount(ctx, data.issuer)])

    if (skipSave) {
        return mappings.multiTokens.events.mintedEventModel(item, data, token)
    }

    if (!token) {
        throwFatalError(`[Minted] We have not found token ${data.collectionId}-${data.tokenId}.`)
        return mappings.multiTokens.events.mintedEventModel(item, data, token)
    }

    token.supply += data.amount
    token.nonFungible = isNonFungible(token)
    promises.push(ctx.store.save(token))

    const tokenAccount = await ctx.store.findOne<TokenAccount>(TokenAccount, {
        where: { id: `${data.recipient}-${data.collectionId}-${data.tokenId}` },
    })

    if (!tokenAccount) {
        throwFatalError(
            `[Minted] We have not found token account ${data.recipient}-${data.collectionId}-${data.tokenId}.`
        )

        await Promise.all(promises)
        return mappings.multiTokens.events.mintedEventModel(item, data, token)
    }

    tokenAccount.balance += data.amount
    tokenAccount.totalBalance += data.amount
    tokenAccount.updatedAt = new Date(block.timestamp ?? 0)
    promises.push(ctx.store.save(tokenAccount))

    await Promise.all(promises)

    // console.log('Dispatching from minted')
    QueueUtils.dispatchComputeMetadata(token.id, 'token')
    QueueUtils.dispatchComputeTraits(data.collectionId.toString())
    QueueUtils.dispatchComputeStats(data.collectionId.toString())

    if (item.extrinsic) {
        await Sns.getInstance().send({
            id: item.id,
            name: item.name,
            body: {
                collectionId: data.collectionId,
                tokenId: data.tokenId,
                token: `${data.collectionId}-${data.tokenId}`,
                issuer: data.issuer,
                recipient: data.recipient,
                amount: data.amount,
                extrinsic: item.extrinsic.id,
            },
        })
    }

    return mappings.multiTokens.events.mintedEventModel(item, data, token)
}
