/* eslint-disable no-console */
import {
    BatchContext,
    BatchProcessorCallItem,
    BatchProcessorEventItem,
    BatchProcessorItem,
    SubstrateBatchProcessor,
} from '@subsquid/substrate-processor'
import { Store, TypeormDatabase } from '@subsquid/typeorm-store'
import { hexToU8a, u8aToHex } from '@polkadot/util'
import config from './config'
// import { handleChainState } from './chainState'
import { DEFAULT_PORT } from './common/consts'
import { getOrCreateAccount } from './mappings/util/entities'
import { Account, Balance, Extrinsic, Fee } from './model'
import {
    BlockHandlerContext,
    CallHandlerContext,
    CommonHandlerContext,
    EventHandlerContext,
} from './mappings/types/contexts'
import { encodeId, isAdressSS58 } from './common/tools'
// import * as map from './mappings'
// import { createEfiToken } from './createEfiToken'

const processor = new SubstrateBatchProcessor()
    .setDataSource(config.dataSource)
    .setPrometheusPort(config.port || DEFAULT_PORT)
    .setBlockRange(config.blockRange || { from: 0 })
    .addCall('*', {
        data: {
            call: true,
            extrinsic: true,
        } as const,
    } as const)

export type Item = BatchProcessorItem<typeof processor>
export type EventItem = BatchProcessorEventItem<typeof processor>
export type CallItem = BatchProcessorCallItem<typeof processor>
export type Context = BatchContext<Store, Item>

async function getAccount(ctx: Context, publicKey: Uint8Array): Promise<Account> {
    const pkHex = u8aToHex(publicKey)
    let account = await ctx.store.findOneBy(Account, {
        id: pkHex,
    })

    if (!account) {
        account = new Account({
            id: pkHex,
            address: isAdressSS58(publicKey) ? encodeId(publicKey) : pkHex,
            balance: new Balance({
                free: 0n,
                reserved: 0n,
                miscFrozen: 0n,
                feeFrozen: 0n,
            }),
            nonce: 0,
        })
        await ctx.store.insert(account)
    }

    return account
}

// eslint-disable-next-line sonarjs/cognitive-complexity
processor.run(new TypeormDatabase(), async (ctx) => {
    const extrinsics: Extrinsic[] = []

    // eslint-disable-next-line no-restricted-syntax
    for (const block of ctx.blocks) {
        // eslint-disable-next-line no-restricted-syntax
        for (const item of block.items) {
            if (item.kind === 'call') {
                // eslint-disable-next-line no-continue
                if (item.call.parent != null || item.extrinsic.signature?.address == null) continue

                const { id, fee, hash, call, signature, success, tip } = item.extrinsic

                const publicKey = (
                    signature.address.__kind === 'Id' || signature.address.__kind === 'AccountId'
                        ? signature.address.value
                        : signature.address
                ) as string

                // eslint-disable-next-line no-await-in-loop
                const signer = await getAccount(ctx, hexToU8a(publicKey))
                const callName = call.name.split('.')
                const extrinsic = new Extrinsic({
                    id,
                    hash,
                    blockNumber: block.header.height,
                    blockHash: block.header.hash,
                    success,
                    pallet: callName[0],
                    method: callName[1],
                    args: call.args,
                    signature,
                    signer,
                    nonce: signer.nonce,
                    tip,
                    fee: new Fee({
                        amount: fee,
                        who: signer.id,
                    }),
                    createdAt: new Date(block.header.timestamp),
                })
            }
        }
    }

    await ctx.store.insert(extrinsics)
})
//
//
// processor.addPreHook(
//     {
//         range: { from: 1, to: 1 },
//     },
//     createEfiToken
// )
//
// // Saves all extrinsics to user account
// processor.addCallHandler('*', { triggerForFailedCalls: true }, map.extrinsics.processor.save)
//
// // Saves MultiTokens information
// processor.addEventHandler('MultiTokens.CollectionCreated', map.multiTokens.events.collectionCreated)
// processor.addEventHandler('MultiTokens.CollectionDestroyed', map.multiTokens.events.collectionDestroyed)
// processor.addEventHandler('MultiTokens.CollectionMutated', map.multiTokens.events.collectionMutated)
// processor.addEventHandler('MultiTokens.CollectionAccountCreated', map.multiTokens.events.collectionAccountCreated)
// processor.addEventHandler('MultiTokens.CollectionAccountDestroyed', map.multiTokens.events.collectionAccountDestroyed)
// processor.addEventHandler('MultiTokens.TokenCreated', map.multiTokens.events.tokenCreated)
// processor.addEventHandler('MultiTokens.TokenDestroyed', map.multiTokens.events.tokenDestroyed)
// processor.addEventHandler('MultiTokens.TokenMutated', map.multiTokens.events.tokenMutated)
// processor.addEventHandler('MultiTokens.TokenAccountCreated', map.multiTokens.events.tokenAccountCreated)
// processor.addEventHandler('MultiTokens.TokenAccountDestroyed', map.multiTokens.events.tokenAccountDestroyed)
// processor.addEventHandler('MultiTokens.Minted', map.multiTokens.events.minted)
// processor.addEventHandler('MultiTokens.Burned', map.multiTokens.events.burned)
// processor.addEventHandler('MultiTokens.AttributeSet', map.multiTokens.events.attributeSet)
// processor.addEventHandler('MultiTokens.AttributeRemoved', map.multiTokens.events.attributeRemoved)
// processor.addEventHandler('MultiTokens.Frozen', map.multiTokens.events.frozen)
// processor.addEventHandler('MultiTokens.Thawed', map.multiTokens.events.thawed)
// processor.addEventHandler('MultiTokens.Approved', map.multiTokens.events.approved)
// processor.addEventHandler('MultiTokens.Unapproved', map.multiTokens.events.unapproved)
// processor.addEventHandler('MultiTokens.Transferred', map.multiTokens.events.transferred)
//
// // Saves Marketplace information
// processor.addEventHandler('Marketplace.ListingCreated', map.marketplace.events.listingCreated)
// processor.addEventHandler('Marketplace.ListingCancelled', map.marketplace.events.listingCancelled)
// processor.addEventHandler('Marketplace.ListingFilled', map.marketplace.events.listingFilled)
// processor.addEventHandler('Marketplace.BidPlaced', map.marketplace.events.bidPlaced)
// processor.addEventHandler('Marketplace.AuctionFinalized', map.marketplace.events.auctionFinalized)
//
// // Updates balances
// processor.addEventHandler('Balances.DustLost', map.balances.processor.save)
// processor.addEventHandler('Balances.Endowed', map.balances.processor.save)
// processor.addEventHandler('Balances.ReserveRepatriated', map.balances.processor.save)
// processor.addEventHandler('Balances.Reserved', map.balances.processor.save)
// processor.addEventHandler('Balances.Slashed', map.balances.processor.save)
// processor.addEventHandler('Balances.Transfer', map.balances.processor.save)
// processor.addEventHandler('Balances.Unreserved', map.balances.processor.save)
// processor.addEventHandler('Balances.Withdraw', map.balances.processor.save)
// processor.addEventHandler('Balances.BalanceSet', map.balances.processor.save)
// processor.addEventHandler('Balances.Deposit', map.balances.processor.save)
//
// processor.addPostHook(
//     {
//         range: {
//             from: config.chainStateHeight,
//         },
//     },
//     handleChainState
// )
//
// processor.run()
