import { throwError } from '../../common/errors'
import { AccountTokenEvent, Event as EventModel, Token, TokenAccount } from '../../model'
import { BlockHeader, CommonContext, EventItem } from '../../common/types/contexts'
import { computeTraits } from '../../jobs/compute-traits'
import { getOrCreateAccount } from '../../common/util/entities'
import { syncCollectionStats } from '../../jobs/collection-stats'
import { Sns } from '../../common/sns'
import * as mappings from './../../mappings'
import { processMetadata } from '../../jobs/process-metadata'
import { isNonFungible } from '@enjin/indexer/processors/multi-tokens/utils/helpers'

export async function minted(
    ctx: CommonContext,
    block: BlockHeader,
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

    if (skipSave) {
        await Promise.all([getOrCreateAccount(ctx, data.recipient), getOrCreateAccount(ctx, data.issuer)])
        return mappings.multiTokens.events.mintedEventModel(item, data, token)
    }

    if (!token) {
        throwError(`[Minted] We have not found token ${data.collectionId}-${data.tokenId}.`, 'fatal')
        return mappings.multiTokens.events.mintedEventModel(item, data, token)
    }

    token.supply += data.amount
    token.nonFungible = isNonFungible(token)
    promises.push(ctx.store.save(token))

    const tokenAccount = await ctx.store.findOne<TokenAccount>(TokenAccount, {
        where: { id: `${data.recipient}-${data.collectionId}-${data.tokenId}` },
    })

    if (!tokenAccount) {
        throwError(`[Minted] We have not found token account ${data.recipient}-${data.collectionId}-${data.tokenId}.`, 'fatal')

        await Promise.all(promises)
        return mappings.multiTokens.events.mintedEventModel(item, data, token)
    }

    tokenAccount.balance += data.amount
    tokenAccount.totalBalance += data.amount
    tokenAccount.updatedAt = new Date(block.timestamp ?? 0)
    promises.push(ctx.store.save(tokenAccount))

    await Promise.all(promises)

    await processMetadata(token.id, 'token')
    computeTraits(data.collectionId.toString())
    syncCollectionStats(data.collectionId.toString())

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
