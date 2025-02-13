import { isU8a, u8aToHex } from '@polkadot/util'
import { Account, Balance, Listing } from '../model'
import { CommonContext, ExtrinsicItem } from '../contexts'
import { encodeId } from './tools'
import { AccountNotParsableError } from './errors'
import { RootOrSigned, MultiAddress } from '../mappings/common/types'

interface AddressWithKind {
    __kind: 'Id' | 'AccountId'
    value: string
}

export function unwrapSigner(extrinsic: ExtrinsicItem): string | undefined {
    const { signature } = extrinsic

    if (signature === undefined) {
        return extrinsic.call?.args.dest ?? extrinsic.call?.args.destination
    }

    const address = signature.address as AddressWithKind
    return typeof address === 'object' && '__kind' in address ? address.value : (address as string)
}

export function unwrapAccount(
    account: Uint8Array | string | { __kind: string; value?: string } | MultiAddress | RootOrSigned | undefined
): string {
    if (!account) {
        throw new AccountNotParsableError('undefined')
    }

    if (isU8a(account)) {
        return u8aToHex(account)
    }

    if (typeof account === 'string') {
        return account
    }

    if ('value' in account && account.value !== undefined) {
        return typeof account.value === 'string' ? account.value : account.value.toString()
    }

    throw new AccountNotParsableError(account.__kind)
}

export async function getOrCreateAccount(
    ctx: CommonContext,
    id: Uint8Array | string | { __kind: string; value?: string } | undefined
): Promise<Account> {
    const publicKey = unwrapAccount(id)
    let account = await ctx.store.findOneBy<Account>(Account, { id: publicKey })

    if (!account) {
        account = new Account({
            id: publicKey,
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

export async function getBestListing(ctx: CommonContext, tokenId: string): Promise<Listing | undefined> {
    return ctx.store.findOne<Listing>(Listing, {
        where: { makeAssetId: { id: tokenId }, isActive: true },
        order: { highestPrice: 'ASC' },
    })
}
