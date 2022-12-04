/* eslint-disable no-console */
import { BatchContext, BatchProcessorItem, SubstrateBatchProcessor, SubstrateBlock } from '@subsquid/substrate-processor'
import { Store, TypeormDatabase } from '@subsquid/typeorm-store'
import { hexToU8a, u8aToHex } from '@polkadot/util'
import config from './config'
import { DEFAULT_PORT } from './common/consts'
import { Account, Balance, Extrinsic, Fee, Event } from './model'
import { encodeId, isAdressSS58 } from './common/tools'
// eslint-disable-next-line import/no-cycle
import { createEfiToken } from './createEfiToken'
import { chainState } from './chainState'
import * as map from './mappings'

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
    .addEvent('Balances.DustLost', eventOptions)
    .addEvent('Balances.Endowed', eventOptions)
    .addEvent('Balances.ReserveRepatriated', eventOptions)
    .addEvent('Balances.Reserved', eventOptions)
    .addEvent('Balances.Slashed', eventOptions)
    .addEvent('Balances.Transfer', eventOptions)
    .addEvent('Balances.Unreserved', eventOptions)
    .addEvent('Balances.Withdraw', eventOptions)
    .addEvent('Balances.BalanceSet', eventOptions)
    .addEvent('Balances.Deposit', eventOptions)
    .addEvent('Marketplace.ListingCreated', eventOptions)
    .addEvent('Marketplace.ListingCancelled', eventOptions)
    .addEvent('Marketplace.ListingFilled', eventOptions)
    .addEvent('Marketplace.BidPlaced', eventOptions)
    .addEvent('Marketplace.AuctionFinalized', eventOptions)

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

async function handleEvents(ctx: Context, block: SubstrateBlock, item: Item): Promise<Event | undefined> {
    switch (item.name) {
        case 'MultiTokens.Approved':
            await map.multiTokens.events.approved(ctx, block, item)
            return new Event({
                id: item.event.id,
                extrinsic: new Extrinsic({ id: item.event.extrinsic!.id }),
            })
            break
        case 'MultiTokens.AttributeRemoved':
            await map.multiTokens.events.attributeRemoved(ctx, block, item)
            return new Event({
                id: item.event.id,
                extrinsic: new Extrinsic({ id: item.event.extrinsic!.id }),
            })
            break
        case 'MultiTokens.AttributeSet':
            await map.multiTokens.events.attributeSet(ctx, block, item)
            return new Event({
                id: item.event.id,
                extrinsic: new Extrinsic({ id: item.event.extrinsic!.id }),
            })
            break
        case 'MultiTokens.Burned':
            await map.multiTokens.events.burned(ctx, block, item)
            return new Event({
                id: item.event.id,
                extrinsic: new Extrinsic({ id: item.event.extrinsic!.id }),
            })
            break
        case 'MultiTokens.CollectionAccountCreated':
            await map.multiTokens.events.collectionAccountCreated(ctx, block, item)
            return new Event({
                id: item.event.id,
                extrinsic: new Extrinsic({ id: item.event.extrinsic!.id }),
            })
            break
        case 'MultiTokens.CollectionAccountDestroyed':
            await map.multiTokens.events.collectionAccountDestroyed(ctx, block, item)
            return new Event({
                id: item.event.id,
                extrinsic: new Extrinsic({ id: item.event.extrinsic!.id }),
            })
            break
        case 'MultiTokens.CollectionCreated':
            await map.multiTokens.events.collectionCreated(ctx, block, item)
            return new Event({
                id: item.event.id,
                extrinsic: new Extrinsic({ id: item.event.extrinsic!.id }),
            })
            break
        case 'MultiTokens.CollectionDestroyed':
            await map.multiTokens.events.collectionDestroyed(ctx, block, item)
            return new Event({
                id: item.event.id,
                extrinsic: new Extrinsic({ id: item.event.extrinsic!.id }),
            })
            break
        case 'MultiTokens.CollectionMutated':
            await map.multiTokens.events.collectionMutated(ctx, block, item)
            return new Event({
                id: item.event.id,
                extrinsic: new Extrinsic({ id: item.event.extrinsic!.id }),
            })
            break
        case 'MultiTokens.Frozen':
            await map.multiTokens.events.frozen(ctx, block, item)
            return new Event({
                id: item.event.id,
                extrinsic: new Extrinsic({ id: item.event.extrinsic!.id }),
            })
            break
        case 'MultiTokens.Minted':
            await map.multiTokens.events.minted(ctx, block, item)
            return new Event({
                id: item.event.id,
                extrinsic: new Extrinsic({ id: item.event.extrinsic!.id }),
            })
            break
        case 'MultiTokens.Thawed':
            await map.multiTokens.events.thawed(ctx, block, item)
            return new Event({
                id: item.event.id,
                extrinsic: new Extrinsic({ id: item.event.extrinsic!.id }),
            })
            break
        case 'MultiTokens.TokenAccountCreated':
            await map.multiTokens.events.tokenAccountCreated(ctx, block, item)
            return new Event({
                id: item.event.id,
                extrinsic: new Extrinsic({ id: item.event.extrinsic!.id }),
            })
            break
        case 'MultiTokens.TokenAccountDestroyed':
            await map.multiTokens.events.tokenAccountDestroyed(ctx, block, item)
            return new Event({
                id: item.event.id,
                extrinsic: new Extrinsic({ id: item.event.extrinsic!.id }),
            })
            break
        case 'MultiTokens.TokenCreated':
            await map.multiTokens.events.tokenCreated(ctx, block, item)
            return new Event({
                id: item.event.id,
                extrinsic: new Extrinsic({ id: item.event.extrinsic!.id }),
            })
            break
        case 'MultiTokens.TokenDestroyed':
            await map.multiTokens.events.tokenDestroyed(ctx, block, item)
            return new Event({
                id: item.event.id,
                extrinsic: new Extrinsic({ id: item.event.extrinsic!.id }),
            })
            break
        case 'MultiTokens.TokenMutated':
            await map.multiTokens.events.tokenMutated(ctx, block, item)
            return new Event({
                id: item.event.id,
                extrinsic: new Extrinsic({ id: item.event.extrinsic!.id }),
            })
            break
        case 'MultiTokens.Transferred':
            await map.multiTokens.events.transferred(ctx, block, item)
            return new Event({
                id: item.event.id,
                extrinsic: new Extrinsic({ id: item.event.extrinsic!.id }),
            })
            break
        case 'MultiTokens.Unapproved':
            await map.multiTokens.events.unapproved(ctx, block, item)
            return new Event({
                id: item.event.id,
                extrinsic: new Extrinsic({ id: item.event.extrinsic!.id }),
            })
            break
        case 'Balances.BalanceSet':
        case 'Balances.Deposit':
        case 'Balances.Endowed':
        case 'Balances.Reserved':
        case 'Balances.Transfer':
        case 'Balances.Unreserved':
        case 'Balances.DustLost':
        case 'Balances.ReserveRepatriated':
        case 'Balances.Slashed':
        case 'Balances.Withdraw':
            await map.balances.processor.save(ctx, block, item.event)
            return undefined
            // return new Event({
            //     id: item.event.id,
            //     extrinsic: new Extrinsic({ id: item.event.extrinsic!.id }),
            // })
            break
        case 'Marketplace.ListingCreated':
            await map.marketplace.events.listingCreated(ctx, block, item)
            return new Event({
                id: item.event.id,
                extrinsic: new Extrinsic({ id: item.event.extrinsic!.id }),
            })
            break
        case 'Marketplace.ListingCancelled':
            await map.marketplace.events.listingCancelled(ctx, block, item)
            return new Event({
                id: item.event.id,
                extrinsic: new Extrinsic({ id: item.event.extrinsic!.id }),
            })
            break
        case 'Marketplace.ListingFilled':
            await map.marketplace.events.listingFilled(ctx, block, item)
            return new Event({
                id: item.event.id,
                extrinsic: new Extrinsic({ id: item.event.extrinsic!.id }),
            })
            break
        case 'Marketplace.BidPlaced':
            await map.marketplace.events.bidPlaced(ctx, block, item)
            return new Event({
                id: item.event.id,
                extrinsic: new Extrinsic({ id: item.event.extrinsic!.id }),
            })
            break
        case 'Marketplace.AuctionFinalized':
            await map.marketplace.events.auctionFinalized(ctx, block, item)
            return new Event({
                id: item.event.id,
                extrinsic: new Extrinsic({ id: item.event.extrinsic!.id }),
            })
            break
        default: {
            console.log('Event not handled', item.name)
            return undefined
        }
    }
}

// eslint-disable-next-line sonarjs/cognitive-complexity
processor.run(new TypeormDatabase(), async (ctx) => {
    const extrinsics: Extrinsic[] = []
    const events: Event[] = []

    // eslint-disable-next-line no-restricted-syntax
    for (const block of ctx.blocks) {
        if (block.header.height === 1) {
            // eslint-disable-next-line no-await-in-loop
            await createEfiToken(ctx, block.header)
        }

        // eslint-disable-next-line no-restricted-syntax
        for (const item of block.items) {
            if (item.kind === 'event') {
                // eslint-disable-next-line no-await-in-loop
                const event = await handleEvents(ctx, block.header, item)
                if (event) {
                    events.push(event)
                }
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
    await chainState(ctx, ctx.blocks[ctx.blocks.length - 1].header)
})
