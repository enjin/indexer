import { u8aToHex } from '@polkadot/util'
import { SubstrateBlock } from '@subsquid/substrate-processor'
import { UnknownVersionError } from '../../common/errors'
import { Account, Balance, Event as EventModel } from '../../model'
import { encodeId, isAdressSS58 } from '../../common/tools'
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
} from '../../types/generated/events'
import { SystemAccountStorage } from '../../types/generated/storage'
import { AccountInfo } from '../../types/generated/efinityV1'
import { Event } from '../../types/generated/support'
import { CommonHandlerContext } from '../types/contexts'

function getDustLostAccount(ctx: CommonHandlerContext, event: Event) {
    const data = new BalancesDustLostEvent(ctx, event)

    if (data.isEfinityV1) {
        return data.asEfinityV1[0]
    }
    if (data.isEfinityV2) {
        return data.asEfinityV2.account
    }
    throw new UnknownVersionError(data.constructor.name)
}

function getBalanceSetAccount(ctx: CommonHandlerContext, event: Event) {
    const data = new BalancesBalanceSetEvent(ctx, event)

    if (data.isEfinityV1) {
        return data.asEfinityV1[0]
    }
    if (data.isEfinityV2) {
        return data.asEfinityV2.who
    }
    throw new UnknownVersionError(data.constructor.name)
}

function getTransferAccounts(ctx: CommonHandlerContext, event: Event): [Uint8Array, Uint8Array] {
    const data = new BalancesTransferEvent(ctx, event)

    if (data.isEfinityV1) {
        return [data.asEfinityV1[0], data.asEfinityV1[1]]
    }
    if (data.isEfinityV2) {
        return [data.asEfinityV2.from, data.asEfinityV2.to]
    }
    throw new UnknownVersionError(data.constructor.name)
}

function getEndowedAccount(ctx: CommonHandlerContext, event: Event) {
    const data = new BalancesEndowedEvent(ctx, event)

    if (data.isEfinityV1) {
        return data.asEfinityV1[0]
    }
    if (data.isEfinityV2) {
        return data.asEfinityV2.account
    }
    throw new UnknownVersionError(data.constructor.name)
}

function getDepositAccount(ctx: CommonHandlerContext, event: Event) {
    const data = new BalancesDepositEvent(ctx, event)

    if (data.isEfinityV1) {
        return data.asEfinityV1[0]
    }
    if (data.isEfinityV2) {
        return data.asEfinityV2.who
    }
    throw new UnknownVersionError(data.constructor.name)
}

function getReservedAccount(ctx: CommonHandlerContext, event: Event) {
    const data = new BalancesReservedEvent(ctx, event)

    if (data.isEfinityV1) {
        return data.asEfinityV1[0]
    }
    if (data.isEfinityV2) {
        return data.asEfinityV2.who
    }
    throw new UnknownVersionError(data.constructor.name)
}

function getUnreservedAccount(ctx: CommonHandlerContext, event: Event) {
    const data = new BalancesUnreservedEvent(ctx, event)

    if (data.isEfinityV1) {
        return data.asEfinityV1[0]
    }
    if (data.isEfinityV2) {
        return data.asEfinityV2.who
    }
    throw new UnknownVersionError(data.constructor.name)
}

function getWithdrawAccount(ctx: CommonHandlerContext, event: Event) {
    const data = new BalancesWithdrawEvent(ctx, event)

    if (data.isEfinityV2) {
        return data.asEfinityV2.who
    }
    throw new UnknownVersionError(data.constructor.name)
}

function getSlashedAccount(ctx: CommonHandlerContext, event: Event) {
    const data = new BalancesSlashedEvent(ctx, event)

    if (data.isEfinityV2) {
        return data.asEfinityV2.who
    }
    throw new UnknownVersionError(data.constructor.name)
}

function getReserveRepatriatedAccounts(ctx: CommonHandlerContext, event: Event): [Uint8Array, Uint8Array] {
    const data = new BalancesReserveRepatriatedEvent(ctx, event)

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
    block: SubstrateBlock,
    accounts: Uint8Array[]
): Promise<AccountInfo[] | undefined> {
    const storage = new SystemAccountStorage(ctx, block)
    if (!storage.isExists) return undefined

    if (storage.isEfinityV1) {
        return storage.getManyAsEfinityV1(accounts)
    }
    throw new UnknownVersionError(storage.constructor.name)
}

function processBalancesEventItem(ctx: CommonHandlerContext, event: Event) {
    const ids: Uint8Array[] = []
    switch (event.name) {
        case 'Balances.DustLost': {
            const account = getDustLostAccount(ctx, event)
            ids.push(account)
            break
        }
        case 'Balances.BalanceSet': {
            const account = getBalanceSetAccount(ctx, event)
            ids.push(account)
            break
        }
        case 'Balances.Endowed': {
            const account = getEndowedAccount(ctx, event)
            ids.push(account)
            break
        }
        case 'Balances.Deposit': {
            const account = getDepositAccount(ctx, event)
            ids.push(account)
            break
        }
        case 'Balances.Reserved': {
            const account = getReservedAccount(ctx, event)
            ids.push(account)
            break
        }
        case 'Balances.Unreserved': {
            const account = getUnreservedAccount(ctx, event)
            ids.push(account)
            break
        }
        case 'Balances.Withdraw': {
            const account = getWithdrawAccount(ctx, event)
            ids.push(account)
            break
        }
        case 'Balances.Slashed': {
            const account = getSlashedAccount(ctx, event)
            ids.push(account)
            break
        }
        case 'Balances.Transfer': {
            const accounts = getTransferAccounts(ctx, event)
            ids.push(...accounts)
            break
        }
        case 'Balances.ReserveRepatriated': {
            const accounts = getReserveRepatriatedAccounts(ctx, event)
            ids.push(...accounts)
            break
        }
        default: {
            break
        }
    }
    return ids
}

async function getBalances(
    ctx: CommonHandlerContext,
    block: SubstrateBlock,
    accountIds: Uint8Array[]
): Promise<AccountInfo[] | undefined> {
    return getSystemAccountBalances(ctx, block, accountIds)
}

async function saveAccounts(ctx: CommonHandlerContext, block: SubstrateBlock, accountIds: Uint8Array[]) {
    const accountInfos = await getBalances(ctx, block, accountIds)
    if (!accountInfos) {
        return
    }

    const accounts: Account[] = []

    for (let i = 0; i < accountIds.length; i += 1) {
        const id = u8aToHex(accountIds[i])
        const accountInfo = accountInfos[i]

        if (accountInfo) {
            accounts.push(
                new Account({
                    id,
                    address: isAdressSS58(accountIds[i]) ? encodeId(accountIds[i]) : u8aToHex(accountIds[i]),
                    nonce: accountInfo.nonce,
                    balance: new Balance({
                        free: accountInfo.data.free,
                        reserved: accountInfo.data.reserved,
                        feeFrozen: accountInfo.data.feeFrozen,
                        miscFrozen: accountInfo.data.miscFrozen,
                    }),
                })
            )
        }
    }

    await ctx.store.save(accounts)
}

export async function save(ctx: CommonHandlerContext, block: SubstrateBlock, event: Event): Promise<EventModel | undefined> {
    const accountIds = new Set<Uint8Array>()
    processBalancesEventItem(ctx, event).forEach((id) => accountIds.add(id))
    await saveAccounts(ctx, block, [...accountIds])
    accountIds.clear()

    return undefined
}
