/* eslint-disable no-console */
import { BatchContext, BatchProcessorItem, SubstrateBatchProcessor, SubstrateBlock } from '@subsquid/substrate-processor'
import { Store, TypeormDatabase } from '@subsquid/typeorm-store'
import { hexToU8a, u8aToHex } from '@polkadot/util'
import config from './config'
// import { handleChainState } from './chainState'
import { DEFAULT_PORT } from './common/consts'
import { Account, Balance, Extrinsic, Fee, Event } from './model'
import { BlockHandlerContext, CallHandlerContext, CommonHandlerContext, EventHandlerContext } from './mappings/types/contexts'
import { encodeId, isAdressSS58 } from './common/tools'
// eslint-disable-next-line import/no-cycle
import {
    approved,
    attributeRemoved,
    attributeSet,
    burned,
    collectionAccountCreated,
    collectionAccountDestroyed,
    collectionCreated,
    collectionDestroyed,
    collectionMutated,
    frozen,
    minted,
    thawed,
    tokenAccountCreated,
    tokenAccountDestroyed,
    tokenCreated,
    tokenDestroyed,
    tokenMutated,
    transferred,
    unapproved,
} from './mappings/multiTokens/events'
import { createEfiToken } from './createEfiToken'
// import * as map from './mappings'
// import { createEfiToken } from './createEfiToken'

const eventOptions = {
    data: {
        event: {
            args: true,
            extrinsic: true,
            call: true,
        },
    } as const,
} as const

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
    .addEvent('MultiTokens.CollectionCreated', eventOptions)
    .addEvent('MultiTokens.CollectionDestroyed', eventOptions)
    .addEvent('MultiTokens.CollectionMutated', eventOptions)
    .addEvent('MultiTokens.CollectionAccountCreated', eventOptions)
    .addEvent('MultiTokens.CollectionAccountDestroyed', eventOptions)
    .addEvent('MultiTokens.TokenCreated', eventOptions)
    .addEvent('MultiTokens.TokenDestroyed', eventOptions)
    .addEvent('MultiTokens.TokenMutated', eventOptions)
    .addEvent('MultiTokens.TokenAccountCreated', eventOptions)
    .addEvent('MultiTokens.TokenAccountDestroyed', eventOptions)
    .addEvent('MultiTokens.Minted', eventOptions)
    .addEvent('MultiTokens.Burned', eventOptions)
    .addEvent('MultiTokens.AttributeSet', eventOptions)
    .addEvent('MultiTokens.AttributeRemoved', eventOptions)
    .addEvent('MultiTokens.Frozen', eventOptions)
    .addEvent('MultiTokens.Thawed', eventOptions)
    .addEvent('MultiTokens.Approved', eventOptions)
    .addEvent('MultiTokens.Unapproved', eventOptions)
    .addEvent('MultiTokens.Transferred', eventOptions)

export type Item = BatchProcessorItem<typeof processor>
export type Context = BatchContext<Store, Item>

export async function getAccount(ctx: Context, publicKey: Uint8Array): Promise<Account> {
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

async function handleEvents(ctx: Context, block: SubstrateBlock, item: Item) {
    switch (item.name) {
        case 'MultiTokens.Approved':
            await approved(ctx, block, item)
            break
        case 'MultiTokens.AttributeRemoved':
            await attributeRemoved(ctx, block, item)
            break
        case 'MultiTokens.AttributeSet':
            await attributeSet(ctx, block, item)
            break
        case 'MultiTokens.Burned':
            await burned(ctx, block, item)
            break
        case 'MultiTokens.CollectionAccountCreated':
            await collectionAccountCreated(ctx, block, item)
            break
        case 'MultiTokens.CollectionAccountDestroyed':
            await collectionAccountDestroyed(ctx, block, item)
            break
        case 'MultiTokens.CollectionCreated':
            await collectionCreated(ctx, block, item)
            break
        case 'MultiTokens.CollectionDestroyed':
            await collectionDestroyed(ctx, block, item)
            break
        case 'MultiTokens.CollectionMutated':
            await collectionMutated(ctx, block, item)
            break
        case 'MultiTokens.Frozen':
            await frozen(ctx, block, item)
            break
        case 'MultiTokens.Minted':
            await minted(ctx, block, item)
            break
        case 'MultiTokens.Thawed':
            await thawed(ctx, block, item)
            break
        case 'MultiTokens.TokenAccountCreated':
            await tokenAccountCreated(ctx, block, item)
            break
        case 'MultiTokens.TokenAccountDestroyed':
            await tokenAccountDestroyed(ctx, block, item)
            break
        case 'MultiTokens.TokenCreated':
            await tokenCreated(ctx, block, item)
            break
        case 'MultiTokens.TokenDestroyed':
            await tokenDestroyed(ctx, block, item)
            break
        case 'MultiTokens.TokenMutated':
            await tokenMutated(ctx, block, item)
            break
        case 'MultiTokens.Transferred':
            await transferred(ctx, block, item)
            break
        case 'MultiTokens.Unapproved':
            await unapproved(ctx, block, item)
            break
        default: {
            console.log('Event not handled', item.name)
        }
    }
}

// eslint-disable-next-line sonarjs/cognitive-complexity
processor.run(new TypeormDatabase(), async (ctx) => {
    const extrinsics: Extrinsic[] = []
    const events: Event[] = []

    // eslint-disable-next-line no-restricted-syntax
    for (const block of ctx.blocks) {
        if (block.header.height === 0) {
            createEfiToken(ctx, block.header)
        }

        // eslint-disable-next-line no-restricted-syntax
        for (const item of block.items) {
            if (item.kind === 'event') {
                // eslint-disable-next-line no-await-in-loop
                await handleEvents(ctx, block.header, item)

                // if (!item.event.name || !item.event.extrinsic) continue
                //
                // events.push(
                //     new Event({
                //         id: item.event.id,
                //         extrinsic: new Extrinsic({ id: item.event.extrinsic.id }),
                //     })
                // )
            } else if (item.kind === 'call') {
                // eslint-disable-next-line no-continue
                if (item.call.parent != null || item.extrinsic.signature?.address == null) continue

                const { id, fee, hash, call, signature, success, tip, error } = item.extrinsic

                const publicKey = (
                    signature.address.__kind === 'Id' || signature.address.__kind === 'AccountId'
                        ? signature.address.value
                        : signature.address
                ) as string

                // eslint-disable-next-line no-await-in-loop
                const signer = await getAccount(ctx, hexToU8a(publicKey)) // TODO: Get or create accounts on batches
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
                    error,
                    fee: new Fee({
                        amount: fee,
                        who: signer.id,
                    }),
                    createdAt: new Date(block.header.timestamp),
                })
                extrinsics.push(extrinsic)
            }
        }
    }

    await ctx.store.insert(extrinsics)
    await ctx.store.insert(events)
})

// // Saves all extrinsics to user account
// processor.addCallHandler('*', { triggerForFailedCalls: true }, map.extrinsics.processor.save)
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
