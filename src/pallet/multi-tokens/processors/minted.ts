import { throwFatalError } from '~/util/errors'
import {
    AccountTokenEvent,
    Event as EventModel,
    Extrinsic,
    PoolMember,
    PoolMemberRewards,
    Token,
    TokenAccount,
} from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import { getOrCreateAccount } from '~/util/entities'
import { Sns } from '~/util/sns'
import * as mappings from '~/pallet/index'
import { isNonFungible } from '~/util/helpers'
import { QueueUtils } from '~/queue'
import { calls } from '~/type'

async function processEarlyBirdBonus(
    ctx: CommonContext,
    data: { collectionId: bigint; tokenId: bigint; recipient: string; amount: bigint },
    item: EventItem
): Promise<void> {
    // Find the pool member associated with this sENJ token
    ctx.log.info(
        `Processing early bird bonus for ${data.recipient} with tokenId ${data.tokenId} in block ${item.block.height} in extrinsic ${item.extrinsic?.call?.name}`
    )
    const poolMember = await ctx.store.findOneBy<PoolMember>(PoolMember, {
        id: `${data.tokenId}-${data.recipient}`,
    })

    if (poolMember) {
        // Find the most recent PoolMemberRewards for this member
        // Use a simpler approach to get the latest reward record
        const recentReward = await ctx.store.findOne(PoolMemberRewards, {
            where: {
                member: { id: poolMember.id },
            },
            relations: {
                reward: {
                    era: true,
                },
            },
            order: {
                reward: {
                    era: {
                        index: 'DESC',
                    },
                },
            },
        })

        if (recentReward) {
            recentReward.earlyBirdReward += data.amount
            recentReward.accumulatedRewards += data.amount
            poolMember.accumulatedRewards = (poolMember.accumulatedRewards ?? 0n) + data.amount

            await ctx.store.save(recentReward)
            await ctx.store.save(poolMember)
        } else {
            ctx.log.info(
                `No recent reward found for member ${poolMember.id} in block ${item.block.height} in extrinsic ${item.extrinsic?.call?.name}`
            )
        }
    } else {
        throw new Error(`No pool member found for ${data.recipient} with tokenId ${data.tokenId}`)
    }
}

function isEarlyBirdBonus(item: EventItem): boolean {
    return !!(
        item.extrinsic?.call?.subcalls &&
        item.extrinsic?.call?.subcalls?.length > 0 &&
        item.extrinsic?.call?.subcalls?.every((subcall) => subcall.name == calls.nominationPools.payEarlyBirdBonus.name)
    )
}

export async function minted(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave: boolean
): Promise<[EventModel, AccountTokenEvent] | EventModel | undefined> {
    const data = mappings.multiTokens.events.minted(item)
    const issuer = await getOrCreateAccount(ctx, data.issuer)
    const recipient = await getOrCreateAccount(ctx, data.recipient)

    // Process early bird bonus detection BEFORE any early returns
    if (isEarlyBirdBonus(item)) {
        await processEarlyBirdBonus(ctx, data, item)
    }

    const token = await ctx.store.findOne(Token, {
        where: { id: `${data.collectionId}-${data.tokenId}` },
        relations: {
            collection: true,
        },
    })
    if (skipSave || !token || data.amount === 0n) {
        return mappings.multiTokens.events.mintedEventModel(item.id, data, {
            extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : undefined,
            issuer,
            recipient,
            collection: token?.collection,
            token: token,
        })
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
        return mappings.multiTokens.events.mintedEventModel(item.id, data, {
            extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : undefined,
            issuer,
            recipient,
            collection: token.collection,
            token: token,
        })
    }

    tokenAccount.balance += data.amount
    tokenAccount.totalBalance += data.amount
    tokenAccount.updatedAt = new Date(block.timestamp ?? 0)
    await ctx.store.save(tokenAccount)

    if (data.collectionId === 1n) {
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

    QueueUtils.dispatchComputeMetadata({ id: token.id, type: 'token', traits: true })
    QueueUtils.dispatchComputeStats(data.collectionId.toString())

    return mappings.multiTokens.events.mintedEventModel(item.id, data, {
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : undefined,
        issuer,
        recipient,
        collection: token.collection,
        token: token,
    })
}
