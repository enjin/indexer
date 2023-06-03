import { u8aToHex } from '@polkadot/util'
import { Account, Balance, Listing, ListingStatus, ListingStatusType } from '../../model'
import { BlockHandlerContext, CallHandlerContext, CommonContext, EventHandlerContext } from '../types/contexts'
import { encodeId, isAdressSS58 } from '../../common/tools'

export async function getOrCreateAccount(
    ctx: EventHandlerContext | CallHandlerContext | BlockHandlerContext | CommonContext,
    publicKey: Uint8Array
): Promise<Account> {
    const pkHex = u8aToHex(publicKey)
    let account = await ctx.store.findOneBy(Account, {
        id: pkHex,
    })

    if (!account) {
        account = new Account({
            id: pkHex,
            address: isAdressSS58(publicKey) ? encodeId(publicKey) : pkHex,
            balance: new Balance({
                transferable: 0n,
                free: 0n,
                reserved: 0n,
                miscFrozen: 0n,
                feeFrozen: 0n,
            }),
            nonce: 0,
            tokenValues: 0n,
        })
        await ctx.store.insert(Account, account as any)
    }

    return account
}

export async function getBestListing(ctx: CommonContext, tokenId: string) {
    return ctx.store
        .getRepository(Listing)
        .createQueryBuilder('listing')
        .select('listing.id')
        .addSelect('listing.price')
        .innerJoin(ListingStatus, 'status', 'status.type = :type', { type: ListingStatusType.Active })
        .where('listing.makeAssetId = :tokenId', { tokenId })
        .orderBy('listing.price', 'ASC')
        .getOne()
}
