import { isU8a, u8aToHex } from '@polkadot/util'
import { Account, Balance, Listing } from '../../model'
import { CommonContext } from '../types/contexts'
import { encodeId } from '../tools'
import { ExtrinsicSignature } from '@subsquid/substrate-runtime'

interface AddressWithKind {
    __kind: 'Id' | 'AccountId'
    value: string
}

export function unwrapSignatureSigner(signature: ExtrinsicSignature | undefined): string | undefined {
    if (!signature?.address) {
        return undefined
    }

    const address = signature.address as AddressWithKind
    return typeof address === 'object' && '__kind' in address ? address.value : (address as string)
}

function unwrapAccountId(account: Uint8Array | string | { __kind: string; value?: string } | undefined) {
    if (!account) {
        return
    }

    if (isU8a(account)) {
        return u8aToHex(account)
    }

    if (typeof account === 'string') {
        return account
    }

    if (account.value) {
        return account.value
    }

    return
}

export async function getOrCreateAccount(
    ctx: CommonContext,
    publicKey: Uint8Array | string | { __kind: string; value?: string } | undefined
): Promise<Account | undefined> {
    const pk = unwrapAccountId(publicKey)
    if (!pk) {
        return
    }

    let account = await ctx.store.findOneBy(Account, {
        id: pk,
    })

    if (account) {
        return account
    }

    account = new Account({
        id: pk,
        address: encodeId(pk),
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

    return account
}

export async function getBestListing(ctx: CommonContext, tokenId: string): Promise<Listing | undefined> {
    return ctx.store.findOne<Listing>(Listing, {
        where: { makeAssetId: { id: tokenId }, isActive: true },
        order: { highestPrice: 'ASC' },
    })
}
