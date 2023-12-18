import { SubstrateBlock } from '@subsquid/substrate-processor'
import { hexToU8a, u8aToHex } from '@polkadot/util'
import { CommonContext } from '../types/contexts'
import { encodeId, isAddressSS58 } from '../../common/tools'
import { Account, Balance } from '../../model'
import { UnknownVersionError } from '../../common/errors'
import { SystemAccountStorage } from '../../types/generated/storage'

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

async function getNonces(ctx: CommonContext, block: SubstrateBlock, accountIds: Uint8Array[]) {
    return getSystemAccountBalances(ctx, block, accountIds)
}

// eslint-disable-next-line sonarjs/cognitive-complexity
export async function fetchNonces(ctx: CommonContext, block: SubstrateBlock, accountIds: Set<string>) {
    if (accountIds.size === 0) return

    const accountsPublicKey = Array.from(accountIds)
    const accountsU8a: Uint8Array[] = accountsPublicKey.map((id) => hexToU8a(id))
    const accountInfos = await getNonces(ctx, block, accountsU8a)
    if (!accountInfos) {
        return
    }

    const accounts: any[] = []

    for (let i = 0; i < accountsPublicKey.length; i += 1) {
        const id = accountsPublicKey[i]
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

    ctx.store.createQueryBuilder().insert().into(Account).values(accounts).orUpdate(['nonce'], ['id']).execute()
}
