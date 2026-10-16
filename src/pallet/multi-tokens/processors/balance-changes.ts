import { hexToString } from '@polkadot/util'
import { match, P } from 'ts-pattern'
import { TokenAccount, TokenNamedReserve } from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import * as mappings from '~/pallet/index'
import { QueueUtils } from '~/queue'
import { EventHandlerResult } from '~/processor.handler'
import { throwFatalError } from '~/util/errors'
import { safeString } from '~/util/tools'

function reserveName(reserveId: unknown): string | undefined {
    return match(reserveId)
        .with(P.string, (v) => safeString(hexToString(v)))
        .with({ __kind: P.string }, (v) => v.__kind)
        .otherwise(() => undefined)
}

function adjustNamedReserve(tokenAccount: TokenAccount, reserve: string | undefined, delta: bigint) {
    if (reserve === undefined) return

    const existing = tokenAccount.namedReserves?.find((nr) => nr.pallet === reserve)
    if (existing) {
        existing.amount += delta
        if (existing.amount <= 0n) {
            tokenAccount.namedReserves = tokenAccount.namedReserves?.filter((nr) => nr.pallet !== reserve) ?? null
        }
        return
    }

    if (delta <= 0n) return
    tokenAccount.namedReserves = [
        ...(tokenAccount.namedReserves ?? []),
        new TokenNamedReserve({ pallet: reserve, amount: delta }),
    ]
}

async function findTokenAccount(ctx: CommonContext, accountId: string, collectionId: bigint, tokenId: bigint) {
    return ctx.store.findOne<TokenAccount>(TokenAccount, {
        where: { id: `${accountId}-${collectionId}-${tokenId}` },
    })
}

/**
 * `MultiCurrency::slash_reserved` takes the amount from the account's reserved balance only and leaves the token
 * supply untouched. The event carries no hold reason, so named reserves are not adjusted.
 */
export async function slashed(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave: boolean
): Promise<EventHandlerResult> {
    const data = mappings.multiTokens.events.slashed(item)
    if (skipSave) return undefined

    const tokenAccount = await findTokenAccount(ctx, data.accountId, data.collectionId, data.tokenId)
    if (!tokenAccount) {
        throwFatalError(
            `[Slashed] We have not found token account ${data.accountId}-${data.collectionId}-${data.tokenId}.`
        )
        return undefined
    }

    tokenAccount.reservedBalance -= data.amount
    tokenAccount.totalBalance -= data.amount
    tokenAccount.updatedAt = new Date(block.timestamp ?? 0)
    await ctx.store.save(tokenAccount)

    await QueueUtils.dispatchComputeStats(data.collectionId.toString())
    return undefined
}

/**
 * `repatriate_reserved` moves `amount` from the source's hold to the destination's hold under the same reason. A
 * missing destination account is created on chain first and announced by `TokenAccountCreated`.
 */
export async function reserveRepatriated(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave: boolean
): Promise<EventHandlerResult> {
    const data = mappings.multiTokens.events.reserveRepatriated(item)
    if (skipSave) return undefined

    const reserve = reserveName(data.reserveId)
    const [source, destination] = await Promise.all([
        findTokenAccount(ctx, data.source, data.collectionId, data.tokenId),
        findTokenAccount(ctx, data.destination, data.collectionId, data.tokenId),
    ])

    if (!source || !destination) {
        const missing = source ? data.destination : data.source
        throwFatalError(
            `[ReserveRepatriated] We have not found token account ${missing}-${data.collectionId}-${data.tokenId}.`
        )
        return undefined
    }

    const updatedAt = new Date(block.timestamp ?? 0)
    source.reservedBalance -= data.amount
    source.totalBalance -= data.amount
    adjustNamedReserve(source, reserve, -data.amount)
    source.updatedAt = updatedAt

    destination.reservedBalance += data.amount
    destination.totalBalance += data.amount
    adjustNamedReserve(destination, reserve, data.amount)
    destination.updatedAt = updatedAt

    await ctx.store.save([source, destination])

    await QueueUtils.dispatchComputeStats(data.collectionId.toString())
    return undefined
}

/**
 * `Locked`/`Unlocked` carry the change of the account's `locked_balance` (the largest lock), not a lock amount, and
 * no lock id, so only `lockedBalance` is moved.
 */
async function applyLockDelta(
    ctx: CommonContext,
    block: Block,
    name: string,
    data: { collectionId: bigint; tokenId: bigint; accountId: string; amount: bigint },
    sign: 1n | -1n
): Promise<EventHandlerResult> {
    const tokenAccount = await findTokenAccount(ctx, data.accountId, data.collectionId, data.tokenId)
    if (!tokenAccount) {
        throwFatalError(
            `[${name}] We have not found token account ${data.accountId}-${data.collectionId}-${data.tokenId}.`
        )
        return undefined
    }

    tokenAccount.lockedBalance += sign * data.amount
    tokenAccount.updatedAt = new Date(block.timestamp ?? 0)
    await ctx.store.save(tokenAccount)
    return undefined
}

export async function locked(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave: boolean
): Promise<EventHandlerResult> {
    const data = mappings.multiTokens.events.locked(item)
    if (skipSave) return undefined
    return applyLockDelta(ctx, block, 'Locked', data, 1n)
}

export async function unlocked(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave: boolean
): Promise<EventHandlerResult> {
    const data = mappings.multiTokens.events.unlocked(item)
    if (skipSave) return undefined
    return applyLockDelta(ctx, block, 'Unlocked', data, -1n)
}
