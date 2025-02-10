import { isU8a, u8aToHex } from '@polkadot/util'
import { Account, Balance, Listing } from '../../model'
import { CommonContext } from '../types/contexts'
import { encodeId } from '../tools'
import { ExtrinsicSignature } from '@subsquid/substrate-runtime'
import { AccountNotParsableError } from '@enjin/indexer/common/errors'

interface AddressWithKind {
    __kind: 'Id' | 'AccountId'
    value: string
}

// if (!signatureUnknown) {
//     publicKey = call.args.dest ?? call.args.destination
//     extrinsicSignature = {
//         address: call.args.dest ?? call.args.destination,
//         signature: call.args.ethereumSignature,
//     }
// } else {
//     publicKey = (
//         signatureUnknown.address.__kind === 'Id' || signatureUnknown.address.__kind === 'AccountId'
//             ? signatureUnknown.address.value
//             : signatureUnknown.address
//     ) as string
//     extrinsicSignature = signatureUnknown
// }

export function unwrapSignatureSigner(signature: ExtrinsicSignature | undefined): string | undefined {
    if (!signature?.address) {
        return undefined
    }

    const address = signature.address as AddressWithKind
    return typeof address === 'object' && '__kind' in address ? address.value : (address as string)
}

export function unwrapAccount(account: Uint8Array | string | { __kind: string; value?: string } | undefined): string {
    if (!account) {
        throw new AccountNotParsableError('undefined')
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
