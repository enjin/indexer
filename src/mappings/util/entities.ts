import { u8aToHex } from '@polkadot/util'
import { Account, Balance, Listing } from '../../model'
import { CommonContext } from '../types/contexts'
import { encodeId } from '../../common/tools'

export async function getOrCreateAccount(ctx: CommonContext, publicKey: Uint8Array | string): Promise<Account> {
    const pkHex = publicKey instanceof Uint8Array ? u8aToHex(publicKey) : publicKey
    let account = await ctx.store.findOneBy(Account, {
        id: pkHex,
    })

    if (!account) {
        account = new Account({
            id: pkHex,
            address: encodeId(publicKey),
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

        await ctx.store.save(account)
    }

    return account
}

export async function getBestListing(ctx: CommonContext, tokenId: string) {
    return ctx.store.findOne(Listing, { where: { makeAssetId: { id: tokenId }, isActive: true }, order: { highestPrice: 'ASC' } })
}
