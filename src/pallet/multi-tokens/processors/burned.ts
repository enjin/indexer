import { Collection, Event as EventModel, MultiTokensBurned, Token, TokenAccount, UserInfusion } from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import { SnsEvent } from '~/util/sns'
import { findSiblingEvent, SnsCause } from '~/util/sns-cause'
import { Burned, EphemeralTokenDestroyed } from '~/pallet/multi-tokens/events/types'
import { extrinsicDestroysToken, recallDestroyedToken, TokenSnapshot, tokenSnapshot } from '~/util/destroyed-token'
import { multiTokens } from '~/type/events'
import * as mappings from '~/pallet/index'
import { getOrCreateAccount } from '~/util/entities'
import { QueueUtils } from '~/queue'
import { EventHandlerResult } from '~/processor.handler'
import Big from 'big.js'

export async function burned(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave: boolean
): Promise<EventHandlerResult> {
    const data = mappings.multiTokens.events.burned(item)
    const account = await getOrCreateAccount(ctx, data.accountId)

    const tokenKey = `${data.collectionId}-${data.tokenId}`
    const token = await ctx.store.findOne(Token, {
        where: { id: tokenKey },
        relations: { collection: true },
    })

    // An ephemeral token that reached its expiration block is burned by the chain itself, which says so in an
    // EphemeralTokenDestroyed next to the Burned; that event is not published on its own. The stored event row
    // carries the cause too, so GraphQL consumers can tell an expiry from a user burn.
    const expiry = findSiblingEvent(
        block,
        item,
        multiTokens.ephemeralTokenDestroyed.name,
        mappings.multiTokens.events.ephemeralTokenDestroyed,
        (e) => e.collectionId === data.collectionId && e.tokenId === data.tokenId
    )

    // A burn that destroys the token keeps a snapshot of its metadata on the stored event: the Token row and the
    // AccountTokenEvent link are gone afterwards, so history read later has nothing else to show. The chain destroys
    // an expired ephemeral token before burning it, so the row is already gone and the TokenDestroyed processor's
    // stash for this block is the only source; a holder's burn that removes the token storage comes before the
    // TokenDestroyed of its own extrinsic, so the row is still here. A burn of a surviving token stores no snapshot.
    const destroyed = token ? undefined : recallDestroyedToken(block, tokenKey)
    const destroyedLater =
        token && extrinsicDestroysToken(block, item, tokenKey, mappings.multiTokens.events.tokenDestroyed)
    // A replay (skipSave) finds neither: the original run deleted the row and TokenDestroyed stashes nothing on
    // replay. The Event row is saved again by id, so carry over the snapshot the original run stored.
    const snapshot =
        destroyed ??
        (token && destroyedLater ? tokenSnapshot(token) : undefined) ??
        (skipSave && !token ? await storedSnapshot(ctx, item.id) : undefined)

    // Every ephemeral expiry lands here: the chain destroys the token (and its accounts) before it burns it, so there
    // is no row left to update, but the burn is still published and kept in the holder's history.
    if (!skipSave && !token && destroyed && data.amount !== 0n) {
        await QueueUtils.dispatchComputeStats(data.collectionId.toString())
        await QueueUtils.dispatchComputeTraits(data.collectionId.toString())

        return [
            ...mappings.multiTokens.events.burnedEventModel(
                item,
                data,
                account,
                new Collection({ id: data.collectionId.toString() }),
                null,
                expiry,
                snapshot
            ),
            burnedSnsEvent(item, data, destroyed.decimalCount, destroyed.infusion, expiry),
        ]
    }

    if (skipSave || !token || data.amount === 0n) {
        return [
            ...mappings.multiTokens.events.burnedEventModel(
                item,
                data,
                account,
                token?.collection ?? null,
                token ?? null,
                expiry,
                snapshot
            ),
            undefined,
        ]
    }

    const tokenAccount = await ctx.store.findOne(TokenAccount, {
        where: { id: `${account.id}-${data.collectionId}-${data.tokenId}` },
        relations: { account: true },
    })

    if (tokenAccount) {
        tokenAccount.balance -= data.amount
        tokenAccount.totalBalance -= data.amount
        tokenAccount.updatedAt = new Date(block.timestamp ?? 0)
        await ctx.store.save(tokenAccount)
    }

    // saving history for SNS event
    const infusionBeforeBurn = token.infusion

    const supplyBeforeBurn = token.supply
    token.supply -= data.amount
    if (token.supply < 1n) {
        token.infusion = 0n
    }

    if (token.cap && token.cap.isTypeOf === 'TokenCapSingleMint') {
        token.cap.supply -= data.amount
    }

    await ctx.store.save(token)

    const tokenInfusions = await ctx.store.find(UserInfusion, {
        where: {
            token: {
                id: token.id,
            },
        },
    })

    try {
        // User infusion tracks remaining tokens: scale by newSupply / oldSupply (integer math, no decimals).
        if (supplyBeforeBurn !== 0n) {
            const newUserInfusionsPromises = []
            for (const tokenInfusion of tokenInfusions) {
                tokenInfusion.amount = (tokenInfusion.amount * token.supply) / supplyBeforeBurn
                newUserInfusionsPromises.push(ctx.store.save(tokenInfusion))
            }
            await Promise.all(newUserInfusionsPromises)
        }
    } catch (error) {
        ctx.log.error(`Error processing burned event ${item.id} : ${error}`)
    }

    await QueueUtils.dispatchComputeStats(data.collectionId.toString())
    await QueueUtils.dispatchComputeTraits(data.collectionId.toString())

    return [
        ...mappings.multiTokens.events.burnedEventModel(item, data, account, token.collection, token, expiry, snapshot),
        burnedSnsEvent(item, data, token.nativeMetadata?.decimalCount, infusionBeforeBurn, expiry),
    ]
}

function burnedSnsEvent(
    item: EventItem,
    data: Burned,
    decimalCount: number | undefined,
    infusion: bigint,
    expiry: EphemeralTokenDestroyed | undefined
): SnsEvent {
    return {
        id: item.id,
        name: item.name,
        body: {
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            token: `${data.collectionId}-${data.tokenId}`,
            account: data.accountId,
            amount: Big(data.amount.toString())
                .div(10 ** (decimalCount ?? 0))
                .toNumber(),
            decimalCount,
            extrinsic: item.extrinsic?.id,
            infusion,
            totalBurntInfusion: infusion * data.amount,
            cause: expiry ? SnsCause.ephemeralExpiry : SnsCause.burn,
            expiration: expiry?.expiration,
        },
    }
}

async function storedSnapshot(ctx: CommonContext, eventId: string): Promise<TokenSnapshot | undefined> {
    const stored = await ctx.store.findOneBy(EventModel, { id: eventId })
    if (!(stored?.data instanceof MultiTokensBurned)) return undefined

    const { tokenMetadata, tokenNativeMetadata } = stored.data
    if (!tokenMetadata && !tokenNativeMetadata) return undefined

    return { metadata: tokenMetadata ?? null, nativeMetadata: tokenNativeMetadata ?? null }
}
