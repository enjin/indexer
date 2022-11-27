import { UnknownVersionError } from './common/errors'
import { Account, Balance } from './model'
import { decodeId, encodeId } from './common/tools'
import {
    BalancesBalanceSetEvent,
    BalancesDepositEvent,
    BalancesDustLostEvent,
    BalancesEndowedEvent,
    BalancesReservedEvent,
    BalancesReserveRepatriatedEvent,
    BalancesSlashedEvent,
    BalancesTransferEvent,
    BalancesUnreservedEvent,
    BalancesWithdrawEvent,
} from './types/generated/events'
import { SystemAccountStorage } from './types/generated/storage'
import { CommonHandlerContext, EventHandlerContext } from './mappings/types/contexts'
import { AccountInfo } from './types/generated/efinityV1'

function getDustLostAccount(ctx: EventHandlerContext) {
    const data = new BalancesDustLostEvent(ctx)

    if (data.isEfinityV1) {
        return data.asEfinityV1[0]
    }
    if (data.isEfinityV2) {
        return data.asEfinityV2.account
    }
    throw new UnknownVersionError(data.constructor.name)
}

function getBalanceSetAccount(ctx: EventHandlerContext) {
    const data = new BalancesBalanceSetEvent(ctx)

    if (data.isEfinityV1) {
        return data.asEfinityV1[0]
    }
    if (data.isEfinityV2) {
        return data.asEfinityV2.who
    }
    throw new UnknownVersionError(data.constructor.name)
}

function getTransferAccounts(ctx: EventHandlerContext): [Uint8Array, Uint8Array] {
    const data = new BalancesTransferEvent(ctx)

    if (data.isEfinityV1) {
        return [data.asEfinityV1[0], data.asEfinityV1[1]]
    }
    if (data.isEfinityV2) {
        return [data.asEfinityV2.from, data.asEfinityV2.to]
    }
    throw new UnknownVersionError(data.constructor.name)
}

function getEndowedAccount(ctx: EventHandlerContext) {
    const data = new BalancesEndowedEvent(ctx)

    if (data.isEfinityV1) {
        return data.asEfinityV1[0]
    }
    if (data.isEfinityV2) {
        return data.asEfinityV2.account
    }
    throw new UnknownVersionError(data.constructor.name)
}

function getDepositAccount(ctx: EventHandlerContext) {
    const data = new BalancesDepositEvent(ctx)

    if (data.isEfinityV1) {
        return data.asEfinityV1[0]
    }
    if (data.isEfinityV2) {
        return data.asEfinityV2.who
    }
    throw new UnknownVersionError(data.constructor.name)
}

function getReservedAccount(ctx: EventHandlerContext) {
    const data = new BalancesReservedEvent(ctx)

    if (data.isEfinityV1) {
        return data.asEfinityV1[0]
    }
    if (data.isEfinityV2) {
        return data.asEfinityV2.who
    }
    throw new UnknownVersionError(data.constructor.name)
}

function getUnreservedAccount(ctx: EventHandlerContext) {
    const data = new BalancesUnreservedEvent(ctx)

    if (data.isEfinityV1) {
        return data.asEfinityV1[0]
    }
    if (data.isEfinityV2) {
        return data.asEfinityV2.who
    }
    throw new UnknownVersionError(data.constructor.name)
}

function getWithdrawAccount(ctx: EventHandlerContext) {
    const data = new BalancesWithdrawEvent(ctx)

    if (data.isEfinityV2) {
        return data.asEfinityV2.who
    }
    throw new UnknownVersionError(data.constructor.name)
}

function getSlashedAccount(ctx: EventHandlerContext) {
    const data = new BalancesSlashedEvent(ctx)

    if (data.isEfinityV2) {
        return data.asEfinityV2.who
    }
    throw new UnknownVersionError(data.constructor.name)
}

function getReserveRepatriatedAccounts(ctx: EventHandlerContext): [Uint8Array, Uint8Array] {
    const data = new BalancesReserveRepatriatedEvent(ctx)

    if (data.isEfinityV1) {
        return [data.asEfinityV1[0], data.asEfinityV1[1]]
    }
    if (data.isEfinityV2) {
        return [data.asEfinityV2.from, data.asEfinityV2.to]
    }
    throw new UnknownVersionError(data.constructor.name)
}

async function getSystemAccountBalances(
    ctx: CommonHandlerContext,
    accounts: Uint8Array[]
): Promise<AccountInfo[] | undefined> {
    const storage = new SystemAccountStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isEfinityV1) {
        return storage.getManyAsEfinityV1(accounts)
    }
    throw new UnknownVersionError(storage.constructor.name)
}

function processBalancesEventItem(ctx: EventHandlerContext) {
    const ids: Uint8Array[] = []
    switch (ctx.event.name) {
        case 'Balances.DustLost': {
            const account = getDustLostAccount(ctx)
            ids.push(account)
            break
        }
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

async function getBalances(ctx: CommonHandlerContext, accountIds: string[]): Promise<AccountInfo[] | undefined> {
    const accountIdsU8 = [...accountIds].map((id) => decodeId(id))
    return getSystemAccountBalances(ctx, accountIdsU8)
}

async function saveAccounts(ctx: CommonHandlerContext, accountIds: string[]) {
    const accountInfos = await getBalances(ctx, accountIds)
    if (!accountInfos) {
        return
    }

    const accounts: Account[] = []

    for (let i = 0; i < accountIds.length; i += 1) {
        const id = accountIds[i]
        const accountInfo = accountInfos[i]

        if (accountInfo) {
            accounts.push(
                new Account({
                    id,
                    nonce: accountInfo.nonce,
                    balance: new Balance({
                        free: accountInfo.data.free,
                        reserved: accountInfo.data.reserved,
                        feeFrozen: accountInfo.data.feeFrozen,
                        miscFrozen: accountInfo.data.miscFrozen,
                    }),
                    lastUpdateBlock: ctx.block.height,
                })
            )
        }
    }

    await ctx.store.save<Account>(accounts)
}

export async function processBalances(ctx: EventHandlerContext): Promise<void> {
    const accountIds = new Set<string>()
    processBalancesEventItem(ctx).forEach((id) => accountIds.add(id))
    await saveAccounts(ctx, [...accountIds])
    accountIds.clear()
}
