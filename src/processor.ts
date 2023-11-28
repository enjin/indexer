/* eslint-disable no-await-in-loop */
import { BlockHeader, Event as EventItem, SubstrateBatchProcessor } from '@subsquid/substrate-processor'
import { TypeormDatabase } from '@subsquid/typeorm-store'
import { hexStripPrefix, hexToU8a, u8aToHex } from '@polkadot/util'
import _ from 'lodash'
import * as Sentry from '@sentry/node'
import { RewriteFrames } from '@sentry/integrations'
import config from './config'
import { AccountTokenEvent, Event, Extrinsic, Fee, FuelTank, FuelTankData, Listing } from './model'
import { createEnjToken } from './createEnjToken'
import { chainState } from './chainState'
import * as map from './mappings'
import { getOrCreateAccount } from './mappings/util/entities'
import { CommonContext } from './mappings/types/contexts'
import { populateBlock } from './populateBlock'
import { updateClaimDetails } from './mappings/claims/common'
import { syncAllCollections } from './jobs/collection-stats'
import { metadataQueue } from './jobs/process-metadata'
import { getTankDataFromCall } from './mappings/fuelTanks/common'
import { fetchNonces } from './mappings/util/nonce'

Sentry.init({
    dsn: config.sentryDsn,
    tracesSampleRate: 1.0,
    integrations: [
        new RewriteFrames({
            root: global.__dirname,
        }),
    ],
})

const processor = new SubstrateBatchProcessor()
    .setDataSource(config.dataSource)
    .setBlockRange(config.blockRange || { from: 0 })
    .addCall({
        extrinsic: true,
        stack: true,
    })
    .addEvent({
        name: [
            'MultiTokens.CollectionCreated',
            'MultiTokens.CollectionDestroyed',
            'MultiTokens.CollectionMutated',
            'MultiTokens.CollectionAccountCreated',
            'MultiTokens.CollectionAccountDestroyed',
            'MultiTokens.TokenCreated',
            'MultiTokens.TokenDestroyed',
            'MultiTokens.TokenMutated',
            'MultiTokens.TokenAccountCreated',
            'MultiTokens.TokenAccountDestroyed',
            'MultiTokens.Minted',
            'MultiTokens.Burned',
            'MultiTokens.AttributeSet',
            'MultiTokens.AttributeRemoved',
            'MultiTokens.Frozen',
            'MultiTokens.Thawed',
            'MultiTokens.Approved',
            'MultiTokens.Reserved',
            'MultiTokens.Unapproved',
            'MultiTokens.Unreserved',
            'MultiTokens.Transferred',
            'Balances.BalanceSet',
            'Balances.Deposit',
            'Balances.DustLost',
            'Balances.Endowed',
            'Balances.ReserveRepatriated',
            'Balances.Reserved',
            'Balances.Slashed',
            'Balances.Transfer',
            'Balances.Unreserved',
            'Balances.Withdraw',
            'Claims.Claimed',
            'Claims.ClaimRequested',
            'Claims.DelayTimeForClaimSet',
            'Claims.ExchangeRateSet',
            'Claims.ClaimRejected',
            'Claims.ClaimMinted',
            'Marketplace.ListingCreated',
            'Marketplace.ListingCancelled',
            'Marketplace.ListingFilled',
            'Marketplace.BidPlaced',
            'Marketplace.AuctionFinalized',
            'PolkadotXcm.Attempted',
            'FuelTanks.AccountAdded',
            'FuelTanks.AccountRemoved',
            'FuelTanks.AccountRuleDataRemoved',
            'FuelTanks.FreezeStateMutated',
            'FuelTanks.FuelTankCreated',
            'FuelTanks.FuelTankDestroyed',
            'FuelTanks.FuelTankMutated',
            'FuelTanks.RuleSetInserted',
            'FuelTanks.RuleSetRemoved',
        ],
        extrinsic: true,
        stack: true,
        call: true,
    })
    .setFields({
        block: {
            timestamp: true,
        },
        call: {
            origin: true,
            success: true,
            args: true,
            name: true,
        },
        extrinsic: {
            fee: true,
            hash: true,
            tip: true,
            signature: true,
            version: true,
            success: true,
            error: true,
        },
    })

async function handleEvents(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem,
    skipSave = false
): Promise<Event | [Event, AccountTokenEvent] | undefined> {
    switch (item.name) {
        case 'MultiTokens.Approved':
            return map.multiTokens.events.approved(ctx, block, item, skipSave)
        case 'MultiTokens.AttributeRemoved':
            return map.multiTokens.events.attributeRemoved(ctx, block, item, skipSave)
        case 'MultiTokens.AttributeSet':
            return map.multiTokens.events.attributeSet(ctx, block, item, skipSave)
        case 'MultiTokens.Burned':
            return map.multiTokens.events.burned(ctx, block, item, skipSave)
        case 'MultiTokens.CollectionAccountCreated':
            return map.multiTokens.events.collectionAccountCreated(ctx, block, item, skipSave)
        case 'MultiTokens.CollectionAccountDestroyed':
            return map.multiTokens.events.collectionAccountDestroyed(ctx, block, item, skipSave)
        case 'MultiTokens.CollectionCreated':
            return map.multiTokens.events.collectionCreated(ctx, block, item, skipSave)
        case 'MultiTokens.CollectionDestroyed':
            return map.multiTokens.events.collectionDestroyed(ctx, block, item, skipSave)
        case 'MultiTokens.CollectionMutated':
            return map.multiTokens.events.collectionMutated(ctx, block, item, skipSave)
        case 'MultiTokens.Frozen':
            return map.multiTokens.events.frozen(ctx, block, item, skipSave)
        case 'MultiTokens.Minted':
            return map.multiTokens.events.minted(ctx, block, item, skipSave)
        case 'MultiTokens.Reserved':
            return map.multiTokens.events.reserved(ctx, block, item, skipSave)
        case 'MultiTokens.Thawed':
            return map.multiTokens.events.thawed(ctx, block, item, skipSave)
        case 'MultiTokens.TokenAccountCreated':
            return map.multiTokens.events.tokenAccountCreated(ctx, block, item, skipSave)
        case 'MultiTokens.TokenAccountDestroyed':
            return map.multiTokens.events.tokenAccountDestroyed(ctx, block, item, skipSave)
        case 'MultiTokens.TokenCreated':
            return map.multiTokens.events.tokenCreated(ctx, block, item, skipSave)
        case 'MultiTokens.TokenDestroyed':
            return map.multiTokens.events.tokenDestroyed(ctx, block, item, skipSave)
        case 'MultiTokens.TokenMutated':
            return map.multiTokens.events.tokenMutated(ctx, block, item, skipSave)
        case 'MultiTokens.Transferred':
            return map.multiTokens.events.transferred(ctx, block, item, skipSave)
        case 'MultiTokens.Unapproved':
            return map.multiTokens.events.unapproved(ctx, block, item, skipSave)
        case 'MultiTokens.Unreserved':
            return map.multiTokens.events.unreserved(ctx, block, item, skipSave)
        case 'MultiTokens.ClaimedCollections':
            return map.multiTokens.events.claimedCollections(ctx, block, item)
        case 'MultiTokens.ClaimTokensInitiated':
            return map.multiTokens.events.claimTokensInitiated(ctx, block, item)
        case 'MultiTokens.ClaimTokensCompleted':
            return map.multiTokens.events.claimTokensCompleted(ctx, block, item)
        case 'Balances.Transfer':
            await map.balances.processor.save(ctx, block, item, skipSave)
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
            return map.balances.processor.save(ctx, block, item, skipSave)
        case 'Claims.ClaimRequested':
            return map.claims.events.claimRequested(ctx, block, item)
        case 'Claims.ClaimRejected':
            return map.claims.events.claimRejected(ctx, block, item)
        case 'Claims.ClaimMinted':
            return map.claims.events.claimMinted(ctx, block, item)
        case 'Claims.DelayTimeForClaimSet':
            return map.claims.events.delayTimeForClaimSet(ctx, block, item)
        case 'Claims.Claimed':
            return map.claims.events.claimed(ctx, block, item)
        case 'Claims.ExchangeRateSet':
            return map.claims.events.exchangeRateSet(ctx, block, item)
        case 'Marketplace.ListingCreated':
            return map.marketplace.events.listingCreated(ctx, block, item, skipSave)
        case 'Marketplace.ListingCancelled':
            return map.marketplace.events.listingCancelled(ctx, block, item, skipSave)
        case 'Marketplace.ListingFilled':
            return map.marketplace.events.listingFilled(ctx, block, item, skipSave)
        case 'Marketplace.BidPlaced':
            return map.marketplace.events.bidPlaced(ctx, block, item, skipSave)
        case 'Marketplace.AuctionFinalized':
            return map.marketplace.events.auctionFinalized(ctx, block, item, skipSave)
        case 'PolkadotXcm.Attempted':
            return map.xcm.events.attempted(ctx, block, item)
        case 'FuelTanks.AccountAdded':
            return map.fuelTanks.events.accountAdded(ctx, block, item)
        case 'FuelTanks.AccountRemoved':
            return map.fuelTanks.events.accountRemoved(ctx, block, item)
        case 'FuelTanks.AccountRuleDataRemoved':
            return map.fuelTanks.events.accountRuleDataRemoved(ctx, block, item)
        case 'FuelTanks.FreezeStateMutated':
            return map.fuelTanks.events.freezeStateMutated(ctx, block, item)
        case 'FuelTanks.FuelTankCreated':
            return map.fuelTanks.events.fuelTankCreated(ctx, block, item)
        case 'FuelTanks.FuelTankDestroyed':
            return map.fuelTanks.events.fuelTankDestroyed(ctx, block, item)
        case 'FuelTanks.FuelTankMutated':
            return map.fuelTanks.events.fuelTankMutated(ctx, block, item)
        case 'FuelTanks.RuleSetInserted':
            return map.fuelTanks.events.ruleSetInserted(ctx, block, item)
        case 'FuelTanks.RuleSetRemoved':
            return map.fuelTanks.events.ruleSetRemoved(ctx, block, item)
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
processor.run(
    new TypeormDatabase({
        isolationLevel: 'READ COMMITTED',
    }),
    async (ctx) => {
        try {
            // eslint-disable-next-line no-restricted-syntax
            for (const block of ctx.blocks) {
                const extrinsics: Extrinsic[] = []
                const signers = new Set<string>()
                const events: Event[] = []
                const accountTokenEvents: AccountTokenEvent[] = []

                if (block.header.height === 1) {
                    await createEnjToken(ctx as unknown as CommonContext, block.header)
                    await chainState(ctx as unknown as CommonContext, block.header)

                    if (Number(config.prefix) === 1110) {
                        await updateClaimDetails(ctx as unknown as CommonContext, block.header)
                    }

                    await metadataQueue.pause().catch(() => {})

                    await populateBlock(ctx as unknown as CommonContext, config.lastBlockHeight)
                }

                if (block.header.height === config.lastBlockHeight) {
                    metadataQueue.resume().catch(() => {})
                    syncAllCollections()
                }

                // eslint-disable-next-line no-console
                console.log(`Processing block ${block.header.height}, ${block.items.length} items to process`)

                // eslint-disable-next-line no-restricted-syntax
                for (const item of block.events) {
                    // eslint-disable-next-line no-await-in-loop
                    const event = await handleEvents(
                        ctx as unknown as CommonContext,
                        block.header,
                        item,
                        block.header.height <= config.lastBlockHeight
                    )

                    if (event) {
                        if (Array.isArray(event)) {
                            events.push(event[0])
                            accountTokenEvents.push(event[1])
                        } else {
                            events.push(event)
                        }
                    }
                }
                // eslint-disable-next-line no-restricted-syntax
                for (const item of block.calls) {
                    /*
                    TODO: Fix this
                     if (item.parentCall !== undefined || (item.parentCall !== undefined && item.parentCall 'Claims.claim')) {
                        // eslint-disable-next-line no-continue
                        continue
                    } */

                    const { id, fee, hash, call, signature, success, tip, error } = item.extrinsic

                    let publicKey = ''
                    let extrinsicSignature: any = {}
                    let fuelTank = null

                    if (!signature) {
                        publicKey = item.call.args.dest
                        extrinsicSignature = {
                            address: item.call.args.dest,
                            signature: item.call.args.ethereumSignature,
                        }
                    } else {
                        publicKey = (
                            signature.address.__kind === 'Id' || signature.address.__kind === 'AccountId'
                                ? signature.address.value
                                : signature.address
                        ) as string
                        extrinsicSignature = signature
                    }

                    if (call.name === 'FuelTanks.dispatch' || call.name === 'FuelTanks.dispatch_and_touch') {
                        const tankData = getTankDataFromCall(ctx as unknown as CommonContext, call)
                        const tank = await ctx.store.findOneByOrFail(FuelTank, { id: u8aToHex(tankData.tankId.value) })

                        fuelTank = new FuelTankData({
                            id: tank.id,
                            name: tank.name,
                            feePaid: 0n,
                            ruleSetId: tankData.ruleSetId,
                            paysRemainingFee:
                                'settings' in tankData && tankData.settings !== undefined
                                    ? tankData.settings.paysRemainingFee
                                    : null,
                            useNoneOrigin:
                                'settings' in tankData && tankData.settings !== undefined
                                    ? tankData.settings.useNoneOrigin
                                    : null,
                        })

                        // eslint-disable-next-line no-restricted-syntax
                        for (const eventItem of block.events) {
                            if (eventItem.name !== 'Balances.Withdraw' || eventItem.extrinsic?.id !== id) {
                                // eslint-disable-next-line no-continue
                                continue
                            }

                            // eslint-disable-next-line no-await-in-loop
                            const transfer = await map.balances.events.withdraw(
                                ctx as unknown as CommonContext,
                                block.header,
                                eventItem
                            )

                            if (transfer && u8aToHex(transfer.who) === tank.id) {
                                fuelTank.feePaid = transfer.amount
                            }
                        }
                    }

                    // eslint-disable-next-line no-await-in-loop
                    const signer = await getOrCreateAccount(ctx as unknown as CommonContext, hexToU8a(publicKey)) // TODO: Get or create accounts on batches
                    const callName = call.name.split('.')
                    const txFee = (fee ?? 0n) + (fuelTank?.feePaid ?? 0n)

                    const extrinsic = new Extrinsic({
                        id,
                        hash,
                        blockNumber: block.header.height,
                        blockHash: block.header.hash,
                        success,
                        pallet: callName[0],
                        method: callName[1],
                        args: call.args,
                        signature: extrinsicSignature,
                        signer,
                        nonce: signer.nonce,
                        tip,
                        error,
                        fee: new Fee({
                            amount: txFee,
                            who: signer.id,
                        }),
                        fuelTank,
                        createdAt: new Date(block.header.timestamp ?? 0),
                        participants: getParticipants(call.args, publicKey),
                    })

                    // If fee empty search for the withdrawal event
                    if (!fee) {
                        // eslint-disable-next-line no-restricted-syntax
                        for (const eventItem of block.events) {
                            if (eventItem.name !== 'Balances.Withdraw') {
                                // eslint-disable-next-line no-continue
                                continue
                            }

                            if (eventItem.event.extrinsic?.id !== extrinsic.id) {
                                // eslint-disable-next-line no-continue
                                continue
                            }

                            // eslint-disable-next-line no-await-in-loop
                            const transfer = await map.balances.events.withdraw(
                                ctx as unknown as CommonContext,
                                block.header,
                                eventItem
                            )

                            if (extrinsic.fee && transfer) {
                                extrinsic.fee.amount = transfer.amount
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

                await map.balances.processor.saveAccounts(ctx as unknown as CommonContext, block.header)
                _.chunk(extrinsics, 2000).forEach((chunk) => ctx.store.insert(chunk))
                _.chunk(events, 2000).forEach((chunk) => ctx.store.insert(chunk))
                _.chunk(accountTokenEvents, 2000).forEach((chunk) => ctx.store.insert(chunk))
            }

            const lastBlock = ctx.blocks[ctx.blocks.length - 1].header
            if (lastBlock.height > config.lastBlockHeight - 200) {
                await chainState(ctx as unknown as CommonContext, lastBlock)
            }
        } catch (error) {
            metadataQueue.resume()
            Sentry.captureException(error)
            throw error
        }
    }
)
