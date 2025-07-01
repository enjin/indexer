import { BlockHeader } from '@subsquid/substrate-processor'
import chunk from 'lodash/chunk'
import { Account, Balance, Event as EventModel } from '~/model'
import { balances } from '~/type/events'
import { CommonContext, EventItem } from '~/contexts'
import * as mappings from '~/pallet/index'
import { encodeAddress } from '~/util/tools'

function processBalancesEventItem(event: EventItem) {
    const ids: string[] = []
    switch (event.name) {
        case balances.burned.name: {
            const data = mappings.balances.events.burned(event)
            ids.push(data.who)
            break
        }
        case balances.frozen.name: {
            const data = mappings.balances.events.frozen(event)
            ids.push(data.who)
            break
        }
        case balances.locked.name: {
            const data = mappings.balances.events.locked(event)
            ids.push(data.who)
            break
        }
        case balances.minted.name: {
            const data = mappings.balances.events.minted(event)
            ids.push(data.who)
            break
        }
        case balances.restored.name: {
            const data = mappings.balances.events.restored(event)
            ids.push(data.who)
            break
        }
        case balances.suspended.name: {
            const data = mappings.balances.events.suspended(event)
            ids.push(data.who)
            break
        }
        case balances.thawed.name: {
            const data = mappings.balances.events.thawed(event)
            ids.push(data.who)
            break
        }
        case balances.unlocked.name: {
            const data = mappings.balances.events.unlocked(event)
            ids.push(data.who)
            break
        }
        case balances.dustLost.name: {
            const data = mappings.balances.events.dustLost(event)
            ids.push(data.account)
            break
        }
        case balances.balanceSet.name: {
            const data = mappings.balances.events.balanceSet(event)
            ids.push(data.who)
            break
        }
        case balances.transfer.name: {
            const data = mappings.balances.events.transfer(event)
            ids.push(...[data.from, data.to])
            break
        }
        case balances.endowed.name: {
            const data = mappings.balances.events.endowed(event)
            ids.push(data.account)
            break
        }
        case balances.deposit.name: {
            const data = mappings.balances.events.deposit(event)
            ids.push(data.who)
            break
        }
        case balances.reserved.name: {
            const data = mappings.balances.events.reserved(event)
            ids.push(data.who)
            break
        }
        case balances.unreserved.name: {
            const data = mappings.balances.events.unreserved(event)
            ids.push(data.who)
            break
        }
        case balances.withdraw.name: {
            const data = mappings.balances.events.withdraw(event)
            ids.push(data.who)
            break
        }
        case balances.slashed.name: {
            const data = mappings.balances.events.slashed(event)
            ids.push(data.who)
            break
        }
        case balances.reserveRepatriated.name: {
            const data = mappings.balances.events.reserveRepatriated(event)
            ids.push(...[data.from, data.to])
            break
        }

        default: {
            break
        }
    }
    return ids
}

async function getBalances(block: BlockHeader, accountIds: string[]) {
    return await mappings.system.storage.accounts(block, { accounts: accountIds })
}

const accountsSet = new Set<string>()

export async function saveAccounts(ctx: CommonContext, block: BlockHeader) {
    const accountIds = Array.from(accountsSet)
    if (accountIds.length === 0) return

    for (const chunked of chunk(accountIds, 100)) {
        const accountInfos = await getBalances(block, chunked)

        if (accountInfos.length === 0) {
            continue
        }

        const accounts = []

        for (let i = 0; i < chunked.length; i += 1) {
            const id = chunked[i]
            const accountInfo = accountInfos[i]

            if (accountInfo === undefined) {
                accounts.push(
                    new Account({
                        id,
                        address: encodeAddress(id),
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

            if ('frozen' in accountData && accountData.frozen !== undefined) {
                accounts.push(
                    new Account({
                        id,
                        address: encodeAddress(id),
                        nonce: accountInfo.nonce,
                        verified: false,
                        balance: new Balance({
                            transferable: BigInt(accountData.free - accountData.frozen),
                            free: accountData.free,
                            reserved: accountData.reserved,
                            frozen: accountData.frozen,
                            miscFrozen: accountData.frozen,
                            feeFrozen: 0n,
                        }),
                    })
                )
            } else if ('miscFrozen' in accountData && accountData.miscFrozen !== undefined) {
                accounts.push(
                    new Account({
                        id,
                        address: encodeAddress(id),
                        nonce: accountInfo.nonce,
                        verified: false,
                        balance: new Balance({
                            transferable: BigInt(accountData.free - accountData.miscFrozen),
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

export function save(event: EventItem): EventModel | undefined {
    processBalancesEventItem(event).forEach((id) => accountsSet.add(id))

    return undefined
}

export const addAccountsToSet = (accounts: string[]) => {
    accounts.forEach((id) => accountsSet.add(id))
}
