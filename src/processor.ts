import { BatchContext, BatchProcessorItem, SubstrateBatchProcessor, SubstrateBlock } from '@subsquid/substrate-processor'
import { FullTypeormDatabase } from '@subsquid/typeorm-store'
import { hexToU8a } from '@polkadot/util'
import { EntityManager } from 'typeorm'
import _ from 'lodash'
import config from './config'
import { Event, Extrinsic, Fee } from './model'
import { createEfiToken } from './createEfiToken'
import { chainState } from './chainState'
import * as map from './mappings'
import { getOrCreateAccount } from './mappings/util/entities'
import { CommonContext } from './mappings/types/contexts'

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
export type Context = BatchContext<EntityManager, Item>

async function handleEvents(ctx: CommonContext, block: SubstrateBlock, item: Item): Promise<Event | undefined> {
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
processor.run(new FullTypeormDatabase(), async (ctx) => {
    const extrinsics: Extrinsic[] = []
    const events: Event[] = []

    // eslint-disable-next-line no-restricted-syntax
    for (const block of ctx.blocks) {
        // console.log(`Processing block ${block.header.height}`)
        if (block.header.height === 1) {
            // eslint-disable-next-line no-await-in-loop
            await createEfiToken(ctx as unknown as CommonContext, block.header)
            // eslint-disable-next-line no-await-in-loop
            await chainState(ctx as unknown as CommonContext, block.header)
        }

        // eslint-disable-next-line no-restricted-syntax
        for (const item of block.items) {
            if (item.kind === 'event') {
                // eslint-disable-next-line no-await-in-loop
                const event = await handleEvents(ctx as unknown as CommonContext, block.header, item)
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
                const signer = await getOrCreateAccount(ctx as unknown as CommonContext, hexToU8a(publicKey)) // TODO: Get or create accounts on batches
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
                extrinsics.push(extrinsic)
            }
        }
    }

    _.chunk(extrinsics, 500).forEach((chunk: any) => ctx.store.insert(Extrinsic, chunk as any))
    _.chunk(events, 500).forEach((chunk: any) => ctx.store.insert(Event, chunk as any))

    const lastBlock = ctx.blocks[ctx.blocks.length - 1].header
    if (lastBlock.height > config.chainStateHeight) {
        await chainState(ctx as unknown as CommonContext, lastBlock)
    }
})
