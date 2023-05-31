import { BatchProcessorItem, DataHandlerContext, SubstrateBatchProcessor, SubstrateBlock } from '@subsquid/substrate-processor'
import { Store, TypeormDatabase } from '@subsquid/typeorm-store'
import { hexStripPrefix, hexToU8a } from '@polkadot/util'
import _ from 'lodash'
import config from './config'
import { AccountTokenEvent, Event, Extrinsic, Fee, Listing } from './model'
import { createEfiToken } from './createEfiToken'
import { chainState } from './chainState'
import * as map from './mappings'
import { getOrCreateAccount } from './mappings/util/entities'

const eventOptions = {
    data: {
        event: {
            args: true,
            extrinsic: true,
        },
    } as const,
} as const

const eventOptionsWithCall = {
    data: {
        event: {
            args: true,
            call: true,
            extrinsic: true,
        },
    } as const,
} as const

const processor = new SubstrateBatchProcessor()
    .setDataSource(config.dataSource)
    .setBlockRange(config.blockRange || { from: 0 })
    .addCall('*', {
        data: {
            call: true,
            extrinsic: true,
        } as const,
    } as const)
    .addEvent('MultiTokens.CollectionCreated', eventOptionsWithCall)
    .addEvent('MultiTokens.CollectionDestroyed', eventOptions)
    .addEvent('MultiTokens.CollectionMutated', eventOptions)
    .addEvent('MultiTokens.CollectionAccountCreated', eventOptions)
    .addEvent('MultiTokens.CollectionAccountDestroyed', eventOptions)
    .addEvent('MultiTokens.TokenCreated', eventOptionsWithCall)
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
    .addEvent('MultiTokens.Reserved', eventOptions)
    .addEvent('MultiTokens.Unapproved', eventOptions)
    .addEvent('MultiTokens.Unreserved', eventOptions)
    .addEvent('MultiTokens.Transferred', eventOptions)
    .addEvent('Balances.DustLost', eventOptions)
    .addEvent('Balances.Endowed', eventOptions)
    .addEvent('Balances.ReserveRepatriated', eventOptions)
    .addEvent('Balances.Reserved', eventOptions)
    .addEvent('Balances.Slashed', eventOptions)
    .addEvent('Balances.Transfer', eventOptions)
    .addEvent('Balances.Unreserved', eventOptions)
    // eslint-disable-next-line sonarjs/no-duplicate-string
    .addEvent('Balances.Withdraw', eventOptions)
    .addEvent('Balances.BalanceSet', eventOptions)
    .addEvent('Balances.Deposit', eventOptions)
    .addEvent('Marketplace.ListingCreated', eventOptions)
    .addEvent('Marketplace.ListingCancelled', eventOptions)
    .addEvent('Marketplace.ListingFilled', eventOptions)
    .addEvent('Marketplace.BidPlaced', eventOptions)
    .addEvent('Marketplace.AuctionFinalized', eventOptions)
    .addEvent('Claims.ClaimedEnj', eventOptions)

export type Item = BatchProcessorItem<typeof processor>
export type Context = DataHandlerContext<Store, Item>

async function handleEvents(
    ctx: Context,
    block: SubstrateBlock,
    item: Item
): Promise<Event | [Event, AccountTokenEvent] | undefined> {
    switch (item.name) {
        case 'MultiTokens.Approved':
            return map.multiTokens.events.approved(ctx, block, item)
        case 'MultiTokens.AttributeRemoved':
            return map.multiTokens.events.attributeRemoved(ctx, block, item)
        case 'MultiTokens.AttributeSet':
            return map.multiTokens.events.attributeSet(ctx, block, item)
        case 'MultiTokens.Burned':
            return map.multiTokens.events.burned(ctx, block, item)
        case 'MultiTokens.CollectionAccountCreated':
            return map.multiTokens.events.collectionAccountCreated(ctx, block, item)
        case 'MultiTokens.CollectionAccountDestroyed':
            return map.multiTokens.events.collectionAccountDestroyed(ctx, block, item)
        case 'MultiTokens.CollectionCreated':
            return map.multiTokens.events.collectionCreated(ctx, block, item)
        case 'MultiTokens.CollectionDestroyed':
            return map.multiTokens.events.collectionDestroyed(ctx, block, item)
        case 'MultiTokens.CollectionMutated':
            return map.multiTokens.events.collectionMutated(ctx, block, item)
        case 'MultiTokens.Frozen':
            return map.multiTokens.events.frozen(ctx, block, item)
        case 'MultiTokens.Minted':
            return map.multiTokens.events.minted(ctx, block, item)
        case 'MultiTokens.Reserved':
            return map.multiTokens.events.reserved(ctx, block, item)
        case 'MultiTokens.Thawed':
            return map.multiTokens.events.thawed(ctx, block, item)
        case 'MultiTokens.TokenAccountCreated':
            return map.multiTokens.events.tokenAccountCreated(ctx, block, item)
        case 'MultiTokens.TokenAccountDestroyed':
            return map.multiTokens.events.tokenAccountDestroyed(ctx, block, item)
        case 'MultiTokens.TokenCreated':
            return map.multiTokens.events.tokenCreated(ctx, block, item)
        case 'MultiTokens.TokenDestroyed':
            return map.multiTokens.events.tokenDestroyed(ctx, block, item)
        case 'MultiTokens.TokenMutated':
            return map.multiTokens.events.tokenMutated(ctx, block, item)
        case 'MultiTokens.Transferred':
            return map.multiTokens.events.transferred(ctx, block, item)
        case 'MultiTokens.Unapproved':
            return map.multiTokens.events.unapproved(ctx, block, item)
        case 'MultiTokens.Unreserved':
            return map.multiTokens.events.unreserved(ctx, block, item)
        case 'Balances.Transfer':
            await map.balances.processor.save(ctx, block, item.event)
            return map.balances.events.transfer(ctx, block, item)
        case 'Balances.BalanceSet':
        case 'Balances.Deposit':
        case 'Balances.Endowed':
        case 'Balances.Reserved':
        case 'Balances.Unreserved':
        case 'Balances.DustLost':
        case 'Balances.ReserveRepatriated':
        case 'Balances.Slashed':
        case 'Balances.Withdraw':
            return map.balances.processor.save(ctx, block, item.event)
        case 'Marketplace.ListingCreated':
            return map.marketplace.events.listingCreated(ctx, block, item)
        case 'Marketplace.ListingCancelled':
            return map.marketplace.events.listingCancelled(ctx, block, item)
        case 'Marketplace.ListingFilled':
            return map.marketplace.events.listingFilled(ctx, block, item)
        case 'Marketplace.BidPlaced':
            return map.marketplace.events.bidPlaced(ctx, block, item)
        case 'Marketplace.AuctionFinalized':
            return map.marketplace.events.auctionFinalized(ctx, block, item)
        case 'Claims.ClaimedEnj':
            return map.claims.events.claimedEnj(ctx, block, item)
        default: {
            ctx.log.error(`Event not handled: ${item.name}`)
            return undefined
        }
    }
}

function getParticipants(args: any, signer: string): string[] {
    const accountsFromArgs = JSON.stringify(args).match(/\b0x[0-9a-fA-F]{64}\b/g)
    if (accountsFromArgs) {
        const accounts = new Set<string>(accountsFromArgs)
        return Array.from(accounts.add(signer))
    }

    return [signer]
}

// eslint-disable-next-line sonarjs/cognitive-complexity
processor.run(new TypeormDatabase({ supportHotBlocks: true }), async (ctx) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const block of ctx.blocks) {
        const extrinsics: Extrinsic[] = []
        const events: Event[] = []
        const accountTokenEvents: AccountTokenEvent[] = []

        // console.log(`Processing block ${block.header.height} and events: ${block.items.length}`)

        if (block.header.height === 1) {
            // eslint-disable-next-line no-await-in-loop
            await createEfiToken(ctx, block.header)
            // eslint-disable-next-line no-await-in-loop
            await chainState(ctx, block.header)
        }

        // eslint-disable-next-line no-restricted-syntax
        for (const item of block.items) {
            if (item.kind === 'event') {
                // eslint-disable-next-line no-await-in-loop
                const event = await handleEvents(ctx, block.header, item)
                if (event) {
                    if (Array.isArray(event)) {
                        events.push(event[0])
                        accountTokenEvents.push(event[1])
                    } else {
                        events.push(event)
                    }
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
                const signer = await getOrCreateAccount(ctx, hexToU8a(publicKey)) // TODO: Get or create accounts on batches
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
                    participants: getParticipants(call.args, publicKey),
                })

                // If fee empty search for the withdrawal event
                if (!fee) {
                    // eslint-disable-next-line no-restricted-syntax
                    for (const eventItem of block.items) {
                        if (eventItem.name !== 'Balances.Withdraw') {
                            // eslint-disable-next-line no-continue
                            continue
                        }

                        if (eventItem.event.extrinsic?.id !== extrinsic.id) {
                            // eslint-disable-next-line no-continue
                            continue
                        }

                        // eslint-disable-next-line no-await-in-loop
                        const feeAmount = await map.balances.events.withdraw(ctx, block.header, eventItem)

                        if (extrinsic.fee && feeAmount) {
                            extrinsic.fee.amount = feeAmount
                            break
                        }
                    }
                }

                // Hotfix for adding listing seller to participant
                if (call.name === 'Marketplace.fill_listing' || call.name === 'Marketplace.finalize_auction') {
                    const listingId = call.args.listingId.toString()
                    // eslint-disable-next-line no-await-in-loop
                    const listing = await ctx.store.findOne(Listing, {
                        where: { id: hexStripPrefix(listingId) },
                        relations: { seller: true },
                    })
                    if (listing?.seller && !extrinsic.participants.includes(listing.seller.id)) {
                        extrinsic.participants.push(listing.seller.id)
                    }
                }

                extrinsics.push(extrinsic)
            }
        }

        // eslint-disable-next-line no-await-in-loop
        await map.balances.processor.saveAccounts(ctx, block.header)
        _.chunk(extrinsics, 500).forEach((chunk) => ctx.store.insert(chunk))
        _.chunk(events, 500).forEach((chunk) => ctx.store.insert(chunk))
        _.chunk(accountTokenEvents, 500).forEach((chunk) => ctx.store.insert(chunk as any))
    }

    const lastBlock = ctx.blocks[ctx.blocks.length - 1].header
    if (lastBlock.height > config.chainStateHeight) {
        import('./handleJobs')
        await chainState(ctx, lastBlock)
    }
})
