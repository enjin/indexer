/* eslint-disable no-continue */
/* eslint-disable no-await-in-loop */
import { BlockHeader } from '@subsquid/substrate-processor'
import chunk from 'lodash/chunk'
import { UnknownVersionError } from '../../common/errors'
import { Balance, Event as EventModel, Account } from '../../model'
import { encodeId } from '../../common/tools'
import { balances } from '../../types/generated/events'
import { account as systemAccount } from '../../types/generated/system/storage'
import { CommonContext, EventItem } from '../types/contexts'

function getBurnedAccount(ctx: CommonContext, event: EventItem) {
    if (balances.burned.matrixEnjinV603.is(event)) {
        return balances.burned.matrixEnjinV603.decode(event).who
    }
    throw new UnknownVersionError(balances.burned.name)
}

function getFrozenAccount(ctx: CommonContext, event: EventItem) {
    if (balances.frozen.matrixEnjinV603.is(event)) {
        return balances.frozen.matrixEnjinV603.decode(event).who
    }
    throw new UnknownVersionError(balances.frozen.name)
}

function getLockedAccount(ctx: CommonContext, event: EventItem) {
    if (balances.locked.matrixEnjinV603.is(event)) {
        return balances.locked.matrixEnjinV603.decode(event).who
    }
    throw new UnknownVersionError(balances.locked.name)
}

function getMintedAccount(ctx: CommonContext, event: EventItem) {
    if (balances.minted.matrixEnjinV603.is(event)) {
        return balances.minted.matrixEnjinV603.decode(event).who
    }
    throw new UnknownVersionError(balances.minted.name)
}

function getRestoredAccount(ctx: CommonContext, event: EventItem) {
    if (balances.restored.matrixEnjinV603.is(event)) {
        return balances.restored.matrixEnjinV603.decode(event).who
    }
    throw new UnknownVersionError(balances.restored.name)
}

function getSuspendedAccount(ctx: CommonContext, event: EventItem) {
    if (balances.suspended.matrixEnjinV603.is(event)) {
        return balances.suspended.matrixEnjinV603.decode(event).who
    }
    throw new UnknownVersionError(balances.suspended.name)
}

function getThawedAccount(ctx: CommonContext, event: EventItem) {
    if (balances.thawed.matrixEnjinV603.is(event)) {
        return balances.thawed.matrixEnjinV603.decode(event).who
    }
    throw new UnknownVersionError(balances.thawed.name)
}

function getUnlockedAccount(ctx: CommonContext, event: EventItem) {
    if (balances.unlocked.matrixEnjinV603.is(event)) {
        return balances.unlocked.matrixEnjinV603.decode(event).who
    }

    throw new UnknownVersionError(balances.unlocked.name)
}

function getDustLostAccount(ctx: CommonContext, event: EventItem) {
    if (balances.dustLost.matrixEnjinV603.is(event)) {
        return balances.dustLost.matrixEnjinV603.decode(event).account
    }

    throw new UnknownVersionError(balances.dustLost.name)
}

function getBalanceSetAccount(ctx: CommonContext, event: EventItem) {
    if (balances.balanceSet.matrixEnjinV603.is(event)) {
        return balances.balanceSet.matrixEnjinV603.decode(event).who
    }

    if (balances.balanceSet.v602.is(event)) {
        return balances.balanceSet.v602.decode(event).who
    }

    if (balances.balanceSet.v500.is(event)) {
        return balances.balanceSet.v500.decode(event).who
    }

    throw new UnknownVersionError(balances.balanceSet.name)
}

function getTransferAccounts(ctx: CommonContext, event: EventItem) {
    if (balances.transfer.matrixEnjinV603.is(event)) {
        return [balances.transfer.matrixEnjinV603.decode(event).from, balances.transfer.matrixEnjinV603.decode(event).to]
    }
    throw new UnknownVersionError(balances.transfer.name)
}

function getEndowedAccount(ctx: CommonContext, event: EventItem) {
    if (balances.endowed.matrixEnjinV603.is(event)) {
        return balances.endowed.matrixEnjinV603.decode(event).account
    }
    throw new UnknownVersionError(balances.endowed.name)
}

function getDepositAccount(ctx: CommonContext, event: EventItem) {
    if (balances.deposit.matrixEnjinV603.is(event)) {
        return balances.deposit.matrixEnjinV603.decode(event).who
    }

    throw new UnknownVersionError(balances.deposit.name)
}

function getReservedAccount(ctx: CommonContext, event: EventItem) {
    if (balances.reserved.matrixEnjinV603.is(event)) {
        return balances.reserved.matrixEnjinV603.decode(event).who
    }

    throw new UnknownVersionError(balances.reserved.name)
}

function getUnreservedAccount(ctx: CommonContext, event: EventItem) {
    if (balances.unreserved.matrixEnjinV603.is(event)) {
        return balances.unreserved.matrixEnjinV603.decode(event).who
    }

    throw new UnknownVersionError(balances.unreserved.name)
}

function getWithdrawAccount(ctx: CommonContext, event: EventItem) {
    if (balances.withdraw.matrixEnjinV603.is(event)) {
        return balances.withdraw.matrixEnjinV603.decode(event).who
    }

    throw new UnknownVersionError(balances.withdraw.name)
}

function getSlashedAccount(ctx: CommonContext, event: EventItem) {
    if (balances.slashed.matrixEnjinV603.is(event)) {
        return balances.slashed.matrixEnjinV603.decode(event).who
    }
    throw new UnknownVersionError(balances.slashed.name)
}

function getReserveRepatriatedAccounts(ctx: CommonContext, event: EventItem) {
    if (balances.reserveRepatriated.matrixEnjinV603.is(event)) {
        return [
            balances.reserveRepatriated.matrixEnjinV603.decode(event).from,
            balances.reserveRepatriated.matrixEnjinV603.decode(event).to,
        ]
    }
    throw new UnknownVersionError(balances.reserveRepatriated.name)
}

async function getSystemAccountBalances(ctx: CommonContext, block: BlockHeader, accounts: string[]) {
    if (systemAccount.matrixEnjinV603.is(block)) {
        return systemAccount.matrixEnjinV603.getMany(block, accounts)
    }

    if (systemAccount.v602.is(block)) {
        return systemAccount.v602.getMany(block, accounts)
    }

    if (systemAccount.v500.is(block)) {
        return systemAccount.v500.getMany(block, accounts)
    }

    throw new UnknownVersionError('system.account')
}

function processBalancesEventItem(ctx: CommonContext, event: EventItem) {
    const ids: string[] = []
    switch (event.name) {
        case balances.burned.name: {
            const account = getBurnedAccount(ctx, event)
            ids.push(account)
            break
        }
        case balances.frozen.name: {
            const account = getFrozenAccount(ctx, event)
            ids.push(account)
            break
        }
        case balances.locked.name: {
            const account = getLockedAccount(ctx, event)
            ids.push(account)
            break
        }
        case balances.minted.name: {
            const account = getMintedAccount(ctx, event)
            ids.push(account)
            break
        }
        case balances.restored.name: {
            const account = getRestoredAccount(ctx, event)
            ids.push(account)
            break
        }
        case balances.suspended.name: {
            const account = getSuspendedAccount(ctx, event)
            ids.push(account)
            break
        }
        case balances.thawed.name: {
            const account = getThawedAccount(ctx, event)
            ids.push(account)
            break
        }
        case balances.unlocked.name: {
            const account = getUnlockedAccount(ctx, event)
            ids.push(account)
            break
        }
        case balances.dustLost.name: {
            const account = getDustLostAccount(ctx, event)
            ids.push(account)
            break
        }
        case balances.balanceSet.name: {
            const account = getBalanceSetAccount(ctx, event)
            ids.push(account)
            break
        }
        case balances.transfer.name: {
            const accounts = getTransferAccounts(ctx, event)
            ids.push(...accounts)
            break
        }
        case balances.endowed.name: {
            const account = getEndowedAccount(ctx, event)
            ids.push(account)
            break
        }
        case balances.deposit.name: {
            const account = getDepositAccount(ctx, event)
            ids.push(account)
            break
        }
        case balances.reserved.name: {
            const account = getReservedAccount(ctx, event)
            ids.push(account)
            break
        }
        case balances.unreserved.name: {
            const account = getUnreservedAccount(ctx, event)
            ids.push(account)
            break
        }
        case balances.withdraw.name: {
            const account = getWithdrawAccount(ctx, event)
            ids.push(account)
            break
        }
        case balances.slashed.name: {
            const account = getSlashedAccount(ctx, event)
            ids.push(account)
            break
        }
        case balances.reserveRepatriated.name: {
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

async function getBalances(ctx: CommonContext, block: BlockHeader, accountIds: string[]) {
    return getSystemAccountBalances(ctx, block, accountIds)
}

const accountsSet = new Set<string>()

export async function saveAccounts(ctx: CommonContext, block: BlockHeader) {
    const accountIds = Array.from(accountsSet)
    if (accountIds.length === 0) return

    // eslint-disable-next-line no-restricted-syntax
    for (const chunked of chunk(accountIds, 100)) {
        // eslint-disable-next-line no-await-in-loop
        const accountInfos = await getBalances(ctx, block, chunked)

        if (accountInfos === undefined || accountInfos.length === 0) {
            continue
        }

        const accounts: any[] = []

        for (let i = 0; i < chunked.length; i += 1) {
            const id = chunked[i]
            const accountInfo = accountInfos[i]

            if (accountInfo === undefined) {
                accounts.push(
                    new Account({
                        id,
                        address: encodeId(id),
                        nonce: 0,
                        verified: false,
                        balance: new Balance({
                            transferable: 0n,
                            free: 0n,
                            reserved: 0n,
                            frozen: 0n,
                            miscFrozen: 0n,
                            feeFrozen: 0n,
                        }),
                    })
                )

                continue
            }

            const accountData = accountInfo.data

            if ('frozen' in accountData) {
                accounts.push(
                    new Account({
                        id,
                        address: encodeId(id),
                        nonce: accountInfo!.nonce,
                        verified: false,
                        balance: new Balance({
                            transferable: accountData.free - accountData.frozen,
                            free: accountData.free,
                            reserved: accountData.reserved,
                            frozen: accountData.frozen,
                            miscFrozen: accountData.frozen,
                            feeFrozen: 0n,
                        }),
                    })
                )
            } else if ('miscFrozen' in accountData) {
                accounts.push(
                    new Account({
                        id,
                        address: encodeId(id),
                        nonce: accountInfo!.nonce,
                        verified: false,
                        balance: new Balance({
                            transferable: accountData.free - accountData.miscFrozen,
                            free: accountData.free,
                            reserved: accountData.reserved,
                            frozen: accountData.miscFrozen,
                            miscFrozen: accountData.miscFrozen,
                            feeFrozen: accountData.feeFrozen,
                        }),
                    })
                )
            }
        }

        await ctx.store.upsert(accounts)
    }

    accountsSet.clear()
}

export async function save(ctx: CommonContext, block: BlockHeader, event: EventItem): Promise<EventModel | undefined> {
    processBalancesEventItem(ctx, event).forEach((id) => accountsSet.add(id))

    return undefined
}

export const addAccountsToSet = (accounts: string[]) => {
    accounts.forEach((id) => accountsSet.add(id))
}
