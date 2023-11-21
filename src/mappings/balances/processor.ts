import { hexToU8a, u8aToHex } from '@polkadot/util'
import { SubstrateBlock } from '@subsquid/substrate-processor'
import { UnknownVersionError } from '../../common/errors'
import { Account, Balance, Event as EventModel } from '../../model'
import { encodeId, isAddressSS58 } from '../../common/tools'
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
import { Event } from '../../types/generated/support'
import { CommonContext } from '../types/contexts'

function getDustLostAccount(ctx: CommonContext, event: Event) {
    const data = new BalancesDustLostEvent(ctx, event)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603.account
    }
    throw new UnknownVersionError(data.constructor.name)
}

function getBalanceSetAccount(ctx: CommonContext, event: Event) {
    const data = new BalancesBalanceSetEvent(ctx, event)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603.who
    }
    if (data.isV602) {
        return data.asV602.who
    }
    if (data.isV500) {
        return data.asV500.who
    }

    throw new UnknownVersionError(data.constructor.name)
}

function getTransferAccounts(ctx: CommonContext, event: Event): [Uint8Array, Uint8Array] {
    const data = new BalancesTransferEvent(ctx, event)

    if (data.isMatrixEnjinV603) {
        return [data.asMatrixEnjinV603.from, data.asMatrixEnjinV603.to]
    }
    throw new UnknownVersionError(data.constructor.name)
}

function getEndowedAccount(ctx: CommonContext, event: Event) {
    const data = new BalancesEndowedEvent(ctx, event)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603.account
    }
    throw new UnknownVersionError(data.constructor.name)
}

function getDepositAccount(ctx: CommonContext, event: Event) {
    const data = new BalancesDepositEvent(ctx, event)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603.who
    }
    throw new UnknownVersionError(data.constructor.name)
}

function getReservedAccount(ctx: CommonContext, event: Event) {
    const data = new BalancesReservedEvent(ctx, event)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603.who
    }
    throw new UnknownVersionError(data.constructor.name)
}

function getUnreservedAccount(ctx: CommonContext, event: Event) {
    const data = new BalancesUnreservedEvent(ctx, event)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603.who
    }
    throw new UnknownVersionError(data.constructor.name)
}

function getWithdrawAccount(ctx: CommonContext, event: Event) {
    const data = new BalancesWithdrawEvent(ctx, event)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603.who
    }
    throw new UnknownVersionError(data.constructor.name)
}

function getSlashedAccount(ctx: CommonContext, event: Event) {
    const data = new BalancesSlashedEvent(ctx, event)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603.who
    }
    throw new UnknownVersionError(data.constructor.name)
}

function getReserveRepatriatedAccounts(ctx: CommonContext, event: Event): [Uint8Array, Uint8Array] {
    const data = new BalancesReserveRepatriatedEvent(ctx, event)

    if (data.isMatrixEnjinV603) {
        return [data.asMatrixEnjinV603.from, data.asMatrixEnjinV603.to]
    }
    throw new UnknownVersionError(data.constructor.name)
}

async function getSystemAccountBalances(ctx: CommonContext, block: SubstrateBlock, accounts: Uint8Array[]) {
    const storage = new SystemAccountStorage(ctx, block)
    if (!storage.isExists) return undefined

    if (storage.isMatrixEnjinV603) {
        return storage.asMatrixEnjinV603.getMany(accounts)
    }
    if (storage.isV602) {
        return storage.asV602.getMany(accounts)
    }

    if (storage.isV500) {
        return storage.asV500.getMany(accounts)
    }

    throw new UnknownVersionError(storage.constructor.name)
}

function processBalancesEventItem(ctx: CommonContext, event: Event) {
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

async function getBalances(ctx: CommonContext, block: SubstrateBlock, accountIds: Uint8Array[]) {
    return getSystemAccountBalances(ctx, block, accountIds)
}

const accountsSet = new Set<string>()

// eslint-disable-next-line sonarjs/cognitive-complexity
export async function saveAccounts(ctx: CommonContext, block: SubstrateBlock) {
    const accountIds = Array.from(accountsSet)
    if (accountIds.length === 0) return

    const accountsU8a: Uint8Array[] = accountIds.map((id) => hexToU8a(id))
    const accountInfos = await getBalances(ctx, block, accountsU8a)
    if (!accountInfos) {
        return
    }

    const accounts: any[] = []

    for (let i = 0; i < accountIds.length; i += 1) {
        const id = accountIds[i]
        const accountInfo = accountInfos[i]
        const accountData = accountInfo.data

        if ('frozen' in accountData) {
            accounts.push({
                id,
                address: isAddressSS58(accountsU8a[i]) ? encodeId(accountsU8a[i]) : u8aToHex(accountsU8a[i]),
                nonce: accountInfo.nonce,
                balance: new Balance({
                    transferable: accountData.free - accountData.frozen,
                    free: accountData.free,
                    reserved: accountData.reserved,
                    feeFrozen: 0n,
                    miscFrozen: 0n,
                }),
            })
        } else if ('miscFrozen' in accountData) {
            accounts.push({
                id,
                address: isAddressSS58(accountsU8a[i]) ? encodeId(accountsU8a[i]) : u8aToHex(accountsU8a[i]),
                nonce: accountInfo.nonce,
                balance: new Balance({
                    transferable: accountData.free - accountData.miscFrozen,
                    free: accountData.free,
                    reserved: accountData.reserved,
                    feeFrozen: accountData.feeFrozen,
                    miscFrozen: accountData.miscFrozen,
                }),
            })
        }
    }

    await ctx.store.createQueryBuilder().insert().into(Account).values(accounts).orUpdate(['balance', 'nonce'], ['id']).execute()
    accountsSet.clear()
}

export async function save(
    ctx: CommonContext,
    block: SubstrateBlock,
    event: Event,
    skipSave: boolean
): Promise<EventModel | undefined> {
    if (skipSave) return undefined

    processBalancesEventItem(ctx, event).forEach((id) => accountsSet.add(u8aToHex(id)))

    return undefined
}

export const addAccountsToSet = (accounts: string[]) => {
    accounts.forEach((id) => accountsSet.add(id))
}
