import { ArrayContains } from 'typeorm'
import {
    Account,
    AccountTransfer,
    Fee,
    Transfer,
    TransferAssetToken,
    TransferDirection,
    TransferLocationAccount,
    TransferType,
} from '../../model'
import { CommonHandlerContext } from '../types/contexts'
import { getMeta } from './actions'
import { ActionData } from '../types/data'

export async function getOrCreateAccount(ctx: CommonHandlerContext, id: string): Promise<Account> {
    let account = await ctx.store.get(Account, id)
    if (!account) {
        account = new Account({
            id,
            lastUpdateBlock: ctx.block.height - 1,
        })
        await ctx.store.insert(account)
    }

    return account
}

export async function getOrCreateAccounts(ctx: CommonHandlerContext, ids: string[]): Promise<Account[]> {
    const query = await ctx.store.findBy(Account, { id: ArrayContains(ids) })

    const accountsMap: Map<string, Account> = new Map()
    // eslint-disable-next-line no-restricted-syntax
    for (const q of query) accountsMap.set(q.id, q)

    const newAccounts: Set<Account> = new Set()
    // eslint-disable-next-line no-restricted-syntax
    for (const id of ids) {
        if (!accountsMap.has(id)) {
            const account = new Account({
                id,
                lastUpdateBlock: ctx.block.height - 1,
            })
            newAccounts.add(account)
        }
    }

    if (newAccounts.size > 0) await ctx.store.save([...newAccounts])

    return [...accountsMap.values(), ...newAccounts]
}

export interface TransferData extends ActionData {
    fromId: string
    toId: string | null
    amount: bigint
    tip: bigint | undefined
    error: string
    success: boolean
    type: TransferType
}

export async function saveTransfer(ctx: CommonHandlerContext, data: TransferData) {
    const { fromId, toId, amount, success, type } = data

    const from = await getOrCreateAccount(ctx, fromId)
    const to = toId ? await getOrCreateAccount(ctx, toId) : null

    const fee = await ctx.store.findOne(Fee, {
        where: { id: data.id },
        relations: {
            who: true,
        },
    })

    const transfer = new Transfer({
        ...getMeta(data),
        from: new TransferLocationAccount({
            id: fromId,
        }),
        to: toId
            ? new TransferLocationAccount({
                  id: toId,
              })
            : null,
        asset: new TransferAssetToken({
            symbol: 'RFI',
            amount,
        }),
        fee,
        tip: data.tip,
        error: data.error,
        success,
        type,
    })

    await ctx.store.insert(transfer)

    await ctx.store.insert(
        new AccountTransfer({
            id: `${transfer.id}-from`,
            transfer,
            account: from,
            direction: TransferDirection.From,
        })
    )

    if (to) {
        await ctx.store.insert(
            new AccountTransfer({
                id: `${transfer.id}-to`,
                transfer,
                account: to,
                direction: TransferDirection.To,
            })
        )
    }
}
