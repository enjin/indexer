import { throwFatalError } from '../../../util/errors'
import { AccountTokenEvent, Event as EventModel, PoolMember, Token, TokenAccount } from '../../../model'
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
    const issuer = await getOrCreateAccount(ctx, data.issuer)
    const recipient = await getOrCreateAccount(ctx, data.recipient)

    const token = await ctx.store.findOne(Token, {
        where: { id: `${data.collectionId}-${data.tokenId}` },
        relations: {
            collection: true,
            attributes: true,
        },
    })
    if (skipSave || !token || data.amount === 0n) {
        return mappings.multiTokens.events.mintedEventModel(
            item,
            data,
            issuer,
            recipient,
            token?.collection ?? null,
            token ?? null
        )
    }

    token.supply += data.amount
    token.nonFungible = isNonFungible(token)
    await ctx.store.save(token)

    const tokenAccount = await ctx.store.findOne<TokenAccount>(TokenAccount, {
        where: { id: `${data.recipient}-${data.collectionId}-${data.tokenId}` },
    })

    if (!tokenAccount) {
        throwFatalError(
            `[Minted] We have not found token account ${data.recipient}-${data.collectionId}-${data.tokenId}.`
        )
        return mappings.multiTokens.events.mintedEventModel(item, data, issuer, recipient, token.collection, token)
    }

    tokenAccount.balance += data.amount
    tokenAccount.totalBalance += data.amount
    tokenAccount.updatedAt = new Date(block.timestamp ?? 0)
    await ctx.store.save(tokenAccount)

    if (data.collectionId === 1n) {
        // This means the user got sENJ in that case we should associate the tokenAccount to PoolMember again if it is not
        const poolMember = await ctx.store.findOneBy<PoolMember>(PoolMember, {
            id: `${data.tokenId}-${data.recipient}`,
        })
        if (poolMember) {
            ctx.log.debug(`Adding tokenAccount ${tokenAccount.id} to poolMember ${poolMember.id}.`)
            poolMember.tokenAccount = tokenAccount
            await ctx.store.save(poolMember)
        }
    }

    if (item.extrinsic) {
        await Sns.getInstance().send({
            id: item.id,
            name: item.name,
            body: {
                collectionId: data.collectionId,
                tokenId: data.tokenId,
                token: token.id,
                issuer: issuer.id,
                recipient: recipient.id,
                amount: data.amount,
                extrinsic: item.extrinsic.id,
            },
        })
    }

    QueueUtils.dispatchComputeMetadata(token.id, 'token')
    QueueUtils.dispatchComputeTraits(data.collectionId.toString())
    QueueUtils.dispatchComputeStats(data.collectionId.toString())

    return mappings.multiTokens.events.mintedEventModel(item, data, issuer, recipient, token.collection, token)
}
