import { BlockHeader } from '@subsquid/substrate-processor'
import chunk from 'lodash/chunk'
import { Account, Balance, Event as EventModel } from '../../model'
import { encodeId } from '../../common/tools'
import { balances } from '../../types/generated/events'
import { CommonContext, EventItem } from 'matrixchain-indexer/common/types/contexts'

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

    for (const chunked of chunk(accountIds, 100)) {
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
