import { UnknownVersionError } from './common/errors'
import { Account, Balance } from './model'
import { decodeId, encodeId } from './common/tools'
import {
    BalancesBalanceSetEvent,
    BalancesDepositEvent,
    BalancesEndowedEvent,
    BalancesReservedEvent,
    BalancesReserveRepatriatedEvent,
    BalancesSlashedEvent,
    BalancesTransferEvent,
    BalancesUnreservedEvent,
    BalancesWithdrawEvent,
} from './types/generated/events'
import { BalancesAccountStorage, SystemAccountStorage } from './types/generated/storage'
import { CommonHandlerContext, EventHandlerContext } from './mappings/types/contexts'

export function getBalanceSetAccount(ctx: EventHandlerContext) {
    const data = new BalancesBalanceSetEvent(ctx)

    if (data.isEfinityV1) {
        return data.asEfinityV1[0]
    }
    if (data.isEfinityV2) {
        return data.asEfinityV2.who
    }
    throw new UnknownVersionError(data.constructor.name)
}

export function getTransferAccounts(ctx: EventHandlerContext): [Uint8Array, Uint8Array] {
    const data = new BalancesTransferEvent(ctx)

    if (data.isEfinityV1) {
        return [data.asEfinityV1[0], data.asEfinityV1[1]]
    }
    if (data.isEfinityV2) {
        return [data.asEfinityV2.from, data.asEfinityV2.to]
    }
    throw new UnknownVersionError(data.constructor.name)
}

export function getEndowedAccount(ctx: EventHandlerContext) {
    const data = new BalancesEndowedEvent(ctx)

    if (data.isEfinityV1) {
        return data.asEfinityV1[0]
    }
    if (data.isEfinityV2) {
        return data.asEfinityV2.account
    }
    throw new UnknownVersionError(data.constructor.name)
}

export function getDepositAccount(ctx: EventHandlerContext) {
    const data = new BalancesDepositEvent(ctx)

    if (data.isEfinityV1) {
        return data.asEfinityV1[0]
    }
    if (data.isEfinityV2) {
        return data.asEfinityV2.who
    }
    throw new UnknownVersionError(data.constructor.name)
}

export function getReservedAccount(ctx: EventHandlerContext) {
    const data = new BalancesReservedEvent(ctx)

    if (data.isEfinityV1) {
        return data.asEfinityV1[0]
    }
    if (data.isEfinityV2) {
        return data.asEfinityV2.who
    }
    throw new UnknownVersionError(data.constructor.name)
}

export function getUnreservedAccount(ctx: EventHandlerContext) {
    const data = new BalancesUnreservedEvent(ctx)

    if (data.isEfinityV1) {
        return data.asEfinityV1[0]
    }
    if (data.isEfinityV2) {
        return data.asEfinityV2.who
    }
    throw new UnknownVersionError(data.constructor.name)
}

export function getWithdrawAccount(ctx: EventHandlerContext) {
    const data = new BalancesWithdrawEvent(ctx)

    if (data.isEfinityV2) {
        return data.asEfinityV2.who
    }
    throw new UnknownVersionError(data.constructor.name)
}

export function getSlashedAccount(ctx: EventHandlerContext) {
    const data = new BalancesSlashedEvent(ctx)

    if (data.isEfinityV2) {
        return data.asEfinityV2.who
    }
    throw new UnknownVersionError(data.constructor.name)
}

export function getReserveRepatriatedAccounts(ctx: EventHandlerContext): [Uint8Array, Uint8Array] {
    const data = new BalancesReserveRepatriatedEvent(ctx)

    if (data.isEfinityV1) {
        return [data.asEfinityV1[0], data.asEfinityV1[1]]
    }
    if (data.isEfinityV2) {
        return [data.asEfinityV2.from, data.asEfinityV2.to]
    }
    throw new UnknownVersionError(data.constructor.name)
}

async function getBalancesAccountBalances(
    ctx: CommonHandlerContext,
    accounts: Uint8Array[]
): Promise<Balance[] | undefined> {
    const storage = new BalancesAccountStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isEfinityV1) {
        return storage.getManyAsEfinityV1(accounts).then((data) =>
            data.map(
                (a) =>
                    new Balance({
                        free: a.free,
                        reserved: a.reserved,
                        feeFrozen: a.feeFrozen,
                        miscFrozen: a.miscFrozen,
                    })
            )
        )
    }
    throw new UnknownVersionError(storage.constructor.name)
}

async function getSystemAccountBalances(
    ctx: CommonHandlerContext,
    accounts: Uint8Array[]
): Promise<Balance[] | undefined> {
    const storage = new SystemAccountStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isEfinityV1) {
        return storage.getManyAsEfinityV1(accounts).then((data) =>
            data.map(
                (a) =>
                    new Balance({
                        free: a.data.free,
                        reserved: a.data.reserved,
                        feeFrozen: a.data.feeFrozen,
                        miscFrozen: a.data.miscFrozen,
                    })
            )
        )
    }
    throw new UnknownVersionError(storage.constructor.name)
}

function processBalancesEventItem(ctx: EventHandlerContext) {
    const ids: Uint8Array[] = []
    switch (ctx.event.name) {
        case 'Balances.BalanceSet': {
            const account = getBalanceSetAccount(ctx)
            ids.push(account)
            break
        }
        case 'Balances.Endowed': {
            const account = getEndowedAccount(ctx)
            ids.push(account)
            break
        }
        case 'Balances.Deposit': {
            const account = getDepositAccount(ctx)
            ids.push(account)
            break
        }
        case 'Balances.Reserved': {
            const account = getReservedAccount(ctx)
            ids.push(account)
            break
        }
        case 'Balances.Unreserved': {
            const account = getUnreservedAccount(ctx)
            ids.push(account)
            break
        }
        case 'Balances.Withdraw': {
            const account = getWithdrawAccount(ctx)
            ids.push(account)
            break
        }
        case 'Balances.Slashed': {
            const account = getSlashedAccount(ctx)
            ids.push(account)
            break
        }
        case 'Balances.Transfer': {
            const accounts = getTransferAccounts(ctx)
            ids.push(...accounts)
            break
        }
        case 'Balances.ReserveRepatriated': {
            const accounts = getReserveRepatriatedAccounts(ctx)
            ids.push(...accounts)
            break
        }
        default: {
            break
        }
    }
    return ids.map((id) => encodeId(id))
}

async function getBalances(ctx: CommonHandlerContext, accountIds: string[]): Promise<Balance[] | undefined> {
    const accountIdsU8 = [...accountIds].map((id) => decodeId(id))
    return (await getSystemAccountBalances(ctx, accountIdsU8)) || (await getBalancesAccountBalances(ctx, accountIdsU8))
}

async function saveAccounts(ctx: CommonHandlerContext, accountIds: string[]) {
    const balances = await getBalances(ctx, accountIds)
    if (!balances) {
        ctx.log.warn('No balances')
        return
    }

    const accounts: Account[] = []

    for (let i = 0; i < accountIds.length; i += 1) {
        const id = accountIds[i]
        const balance = balances[i]

        if (balance) {
            accounts.push(
                new Account({
                    id,
                    nonce: 0,
                    balance,
                    lastUpdateBlock: ctx.block.height,
                })
            )
        }
    }

    await ctx.store
        .getRepository(Account)
        .createQueryBuilder()
        .insert()
        .into(Account)
        .values(accounts as any)
        .orUpdate(['balance', 'last_update_block'], ['id'])
        .execute()
}

export async function processBalances(ctx: EventHandlerContext): Promise<void> {
    const accountIds = new Set<string>()
    processBalancesEventItem(ctx).forEach((id) => accountIds.add(id))
    await saveAccounts(ctx, [...accountIds])
    accountIds.clear()
}
