import { EventHandlerContext } from '@subsquid/substrate-processor'
import { Account, AccountBalance } from '../model'
import { Manager } from './Manager'

import storage from '../storage'
import { createPrevStorageContext } from '../common/helpers'
import { AccountInfo } from '../types/generated/v4'

class AccountManager extends Manager<Account> {
    async get(ctx: EventHandlerContext, id: string): Promise<Account>
    async get(ctx: EventHandlerContext, ids: string[]): Promise<Account[]>
    async get(ctx: EventHandlerContext, idOrIds: string | string[]) {
        const ids = Array.isArray(idOrIds) ? idOrIds : [idOrIds]

        const accounts = await super.get(ctx, ids)

        const idsWithoutAccount = ids.filter((id) => accounts.findIndex((a) => a.id === id) < 0)
        accounts.push(...(await this.create(ctx, idsWithoutAccount)))

        return Array.isArray(idOrIds) ? accounts : accounts[0]
    }

    async create(ctx: EventHandlerContext, id: string): Promise<Account>
    async create(ctx: EventHandlerContext, ids: string[]): Promise<Account[]>
    async create(ctx: EventHandlerContext, idOrIds: string | string[]) {
        const ids = Array.isArray(idOrIds) ? idOrIds : [idOrIds]
        const prevCtx = createPrevStorageContext(ctx)

        // // query ledger to check if the account has already bonded balance
        const accountsMap: { [key: string]: AccountInfo | undefined } = await storage.system.account.getMany(
            prevCtx,
            ids
        )

        const accounts = ids.map((id) => {
            const info = accountsMap[id]
            if (info) {
                return new Account({
                    id,
                    balance: new AccountBalance({
                        free: info.data.free,
                        reserved: info.data.reserved,
                        miscFrozen: info.data.miscFrozen,
                        feeFrozen: info.data.feeFrozen,
                    }),
                    nonce: info.nonce,
                    collectionAccounts: [],
                    tokenAccounts: [],
                    lastUpdateBlock: ctx.block.height - 1,
                })
            }

            return new Account({
                id,
                balance: new AccountBalance({
                    free: 0n,
                    reserved: 0n,
                    miscFrozen: 0n,
                    feeFrozen: 0n,
                }),
                nonce: 0,
                collectionAccounts: [],
                tokenAccounts: [],
                lastUpdateBlock: ctx.block.height - 1,
            })
        })

        await ctx.store.insert(Account, accounts)

        return Array.isArray(idOrIds) ? accounts : accounts[0]
    }

    async update(ctx: EventHandlerContext, item: Account): Promise<Account>
    async update(ctx: EventHandlerContext, items: Account[]): Promise<Account[]>
    async update(ctx: EventHandlerContext, item: Account | Account[]): Promise<Account | Account[]> {
        if (Array.isArray(item)) {
            item.forEach((i) => (i.lastUpdateBlock = ctx.block.height))
            return await super.update(ctx, item)
        } else {
            item.lastUpdateBlock = ctx.block.height
            return await super.update(ctx, item)
        }
    }
}

export const accountManager = new AccountManager(Account)
