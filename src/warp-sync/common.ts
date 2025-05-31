import { FreezeState as FreezeStateType, TokenCap } from '../pallets/common/types'
import { Account, Balance, CapType, FreezeState, TokenCapSingleMint, TokenCapSupply } from '../model'
import { CommonContext } from '../contexts'
import { In } from 'typeorm'
import { encodeAddress } from '../utils/tools'

export const BATCH_SIZE = 1000

export function isNotNull<T>(input: null | undefined | T): input is T {
    return input !== undefined && input != null
}

export function getCapType(cap: TokenCap) {
    if (cap.__kind === 'Supply') {
        return new TokenCapSupply({
            type: CapType.Supply,
            supply: cap.value,
        })
    }

    return new TokenCapSingleMint({
        type: CapType.SingleMint,
        supply: cap.__kind === 'CollapsingSupply' ? cap.value : 0n,
    })
}

export function getFreezeState(state: FreezeStateType): FreezeState | null {
    switch (state.__kind) {
        case 'Permanent':
            return FreezeState.Permanent
        case 'Temporary':
            return FreezeState.Temporary
        case 'Never':
            return FreezeState.Never
        default:
            return null
    }
}

export function isTokenFrozen(freezeState: FreezeState | null | undefined): boolean {
    return freezeState === FreezeState.Permanent || freezeState === FreezeState.Temporary
}

export async function getAccountMap(
    ctx: CommonContext,
    accounts: (string | null | undefined)[] | (string | null | undefined)[][]
) {
    const uniqueAccounts = new Set<string>(accounts.flat().filter(isNotNull))
    const map = new Map<string, Account>()
    const existingAccounts = await ctx.store.findBy(Account, { id: In([...uniqueAccounts]) })
    existingAccounts.forEach((a) => map.set(a.id, a))
    const accountsPromise = Array.from(uniqueAccounts).map(async (a) => {
        const mapHasAccount = map.get(a)
        if (mapHasAccount) {
            return mapHasAccount
        }
        const account = new Account({
            id: a,
            address: encodeAddress(a),
            balance: new Balance({
                transferable: 0n,
                free: 0n,
                reserved: 0n,
                frozen: 0n,
                miscFrozen: 0n,
                feeFrozen: 0n,
            }),
            verified: false,
            nonce: 0,
        })

        await ctx.store.insert(account)
        return account
    })

    const accountsArr = await Promise.all(accountsPromise)
    accountsArr.forEach((a) => map.set(a.id, a))

    return map
}
