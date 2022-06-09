import { EventHandlerContext } from '@subsquid/substrate-processor'
import { Account } from '../model'
import { Manager } from './Manager'

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

        const accounts = ids.map((id) => {
            return new Account({
                id,
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
