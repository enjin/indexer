import '@polkadot/api-augment/substrate'
import { TypeormDatabase } from '@subsquid/typeorm-store'
import { hexStripPrefix } from '@polkadot/util'
import * as Sentry from '@sentry/node'
import config from './config'
import { AccountTokenEvent, Event, Extrinsic, Fee, FuelTank, FuelTankData, Listing } from './model'
import { createDefaultData } from './create-default-data'
import { chainState } from './chain-state'
import { processors } from './processors'
import * as mappings from './mappings'
import { getOrCreateAccount, unwrapAccount, unwrapSigner } from './utils/entities'
import { events, calls } from './types'
import { BlockHeader, CallItem, CommonContext, EventItem } from './contexts'
import { updateClaimDetails } from './processors/claims/common'
// import { syncAllCollections } from './jobs/collection-stats'
// import { metadataQueue } from './jobs/process-metadata'
import { processor } from './processor'
// import { syncAllBalances } from './jobs/fetch-balance'
import { Json } from '@subsquid/substrate-processor'

Sentry.init({
    dsn: config.sentryDsn,
    tracesSampleRate: 1.0,
    profilesSampleRate: 1.0,
})

async function handleEvents(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem,
    skipSave = false
): Promise<Event | [Event, AccountTokenEvent] | undefined> {
    switch (item.name) {
        case events.multiTokens.approved.name:
            return processors.multiTokens.approved(ctx, item, skipSave)
        case events.multiTokens.attributeRemoved.name:
            return processors.multiTokens.attributeRemoved(ctx, block, item, skipSave)
        case events.multiTokens.attributeSet.name:
            return processors.multiTokens.attributeSet(ctx, block, item, skipSave)
        case events.multiTokens.burned.name:
            return processors.multiTokens.burned(ctx, block, item, skipSave)
        case events.multiTokens.collectionAccountCreated.name:
            return processors.multiTokens.collectionAccountCreated(ctx, block, item, skipSave)
        case events.multiTokens.collectionAccountDestroyed.name:
            return processors.multiTokens.collectionAccountDestroyed(ctx, block, item, skipSave)
        case events.multiTokens.collectionCreated.name:
            return processors.multiTokens.collectionCreated(ctx, block, item, skipSave)
        case events.multiTokens.collectionDestroyed.name:
            return processors.multiTokens.collectionDestroyed(ctx, block, item, skipSave)
        case events.multiTokens.collectionMutated.name:
            return processors.multiTokens.collectionMutated(ctx, block, item, skipSave)
        case events.multiTokens.collectionTransferred.name:
            return processors.multiTokens.collectionTransferred(ctx, block, item, skipSave)
        case events.multiTokens.frozen.name:
            return processors.multiTokens.frozen(ctx, block, item, skipSave)
        case events.multiTokens.minted.name:
            return processors.multiTokens.minted(ctx, block, item, skipSave)
        case events.multiTokens.infused.name:
            return processors.multiTokens.infused(ctx, block, item, skipSave)
        case events.multiTokens.reserved.name:
            return processors.multiTokens.reserved(ctx, block, item, skipSave)
        case events.multiTokens.thawed.name:
            return processors.multiTokens.thawed(ctx, block, item, skipSave)
        case events.multiTokens.tokenAccountCreated.name:
            return processors.multiTokens.tokenAccountCreated(ctx, block, item, skipSave)
        case events.multiTokens.tokenAccountDestroyed.name:
            return processors.multiTokens.tokenAccountDestroyed(ctx, block, item, skipSave)
        case events.multiTokens.tokenCreated.name:
            return processors.multiTokens.tokenCreated(ctx, block, item, skipSave)
        case events.multiTokens.tokenDestroyed.name:
            return processors.multiTokens.tokenDestroyed(ctx, block, item, skipSave)
        case events.multiTokens.tokenMutated.name:
            return processors.multiTokens.tokenMutated(ctx, block, item, skipSave)
        case events.multiTokens.transferred.name:
            return processors.multiTokens.transferred(ctx, block, item, skipSave)
        case events.multiTokens.unapproved.name:
            return processors.multiTokens.unapproved(ctx, block, item, skipSave)
        case events.multiTokens.unreserved.name:
            return processors.multiTokens.unreserved(ctx, block, item, skipSave)
        case events.multiTokens.claimedCollections.name:
            return processors.multiTokens.claimedCollections(ctx, block, item)
        case events.multiTokens.claimTokensInitiated.name:
            return processors.multiTokens.claimTokensInitiated(ctx, block, item)
        case events.multiTokens.claimTokensCompleted.name:
            return processors.multiTokens.claimTokensCompleted(ctx, block, item)
        case events.balances.balanceSet.name:
        case events.balances.burned.name:
        case events.balances.deposit.name:
        case events.balances.dustLost.name:
        case events.balances.endowed.name:
        case events.balances.frozen.name:
        case events.balances.locked.name:
        case events.balances.minted.name:
        case events.balances.reserveRepatriated.name:
        case events.balances.reserved.name:
        case events.balances.restored.name:
        case events.balances.slashed.name:
        case events.balances.suspended.name:
        case events.balances.thawed.name:
        case events.balances.unlocked.name:
        case events.balances.unreserved.name:
        case events.balances.withdraw.name:
            return processors.balances.save(item)
        case events.balances.transfer.name:
            return processors.balances.save(item)
        case events.claims.claimRequested.name:
            return processors.claims.claimRequested(ctx, block, item)
        case events.claims.claimRejected.name:
            return processors.claims.claimRejected(ctx, block, item)
        case events.claims.claimMinted.name:
            return processors.claims.claimMinted(ctx, block, item)
        case events.claims.claimed.name:
            return processors.claims.claimed(ctx, block, item)
        case events.claims.exchangeRateSet.name:
            return processors.claims.exchangeRateSet(ctx, block, item)
        case events.claims.delayTimeForClaimSet.name:
            return processors.claims.delayTimeForClaimSet(ctx, block, item)
        case events.marketplace.listingCreated.name:
            return processors.marketplace.listingCreated(ctx, block, item)
        case events.marketplace.listingCancelled.name:
            return processors.marketplace.listingCancelled(ctx, block, item)
        case events.marketplace.listingFilled.name:
            return processors.marketplace.listingFilled(ctx, block, item)
        case events.marketplace.bidPlaced.name:
            return processors.marketplace.bidPlaced(ctx, block, item)
        case events.marketplace.auctionFinalized.name:
            return processors.marketplace.auctionFinalized(ctx, block, item)
        case events.marketplace.counterOfferPlaced.name:
            return processors.marketplace.counterOfferPlaced(ctx, block, item)
        case events.marketplace.counterOfferAnswered.name:
            return processors.marketplace.counterOfferAnswered(ctx, block, item)
        case events.marketplace.counterOfferRemoved.name:
            return processors.marketplace.counterOfferRemoved(ctx, block, item)
        case events.marketplace.listingRemovedUnderMinimum.name:
            return processors.marketplace.listingRemovedUnderMinimum(ctx, block, item)
        case events.polkadotXcm.attempted.name:
            return processors.xcm.attempted(ctx, block, item)
        case events.fuelTanks.accountAdded.name:
            return processors.fuelTanks.accountAdded(ctx, block, item)
        case events.fuelTanks.accountRemoved.name:
            return processors.fuelTanks.accountRemoved(ctx, block, item)
        case events.fuelTanks.accountRuleDataRemoved.name:
            return processors.fuelTanks.accountRuleDataRemoved(ctx, block, item)
        case events.fuelTanks.freezeStateMutated.name:
            return processors.fuelTanks.freezeStateMutated(ctx, block, item)
        case events.fuelTanks.fuelTankCreated.name:
            return processors.fuelTanks.fuelTankCreated(ctx, block, item)
        case events.fuelTanks.fuelTankDestroyed.name:
            return processors.fuelTanks.fuelTankDestroyed(ctx, block, item)
        case events.fuelTanks.fuelTankMutated.name:
            return processors.fuelTanks.fuelTankMutated(ctx, block, item)
        case events.fuelTanks.ruleSetInserted.name:
            return processors.fuelTanks.ruleSetInserted(ctx, block, item)
        case events.fuelTanks.ruleSetRemoved.name:
            return processors.fuelTanks.ruleSetRemoved(ctx, block, item)
        case events.identity.identityCleared.name:
            return processors.identity.identityCleared(ctx, block, item)
        case events.identity.identityKilled.name:
            return processors.identity.identityKilled(ctx, block, item)
        case events.identity.identitySet.name:
            return processors.identity.identitySet(ctx, block, item)
        case events.identity.judgementGiven.name:
            return processors.identity.judgementGiven(ctx, block, item)
        case events.identity.judgementRequested.name:
            return processors.identity.judgementRequested(ctx, block, item)
        case events.identity.judgementUnrequested.name:
            return processors.identity.judgementUnrequested(ctx, block, item)
        case events.identity.registrarAdded.name:
            return processors.identity.registrarAdded(ctx, block, item)
        case events.identity.subIdentityAdded.name:
            return processors.identity.subIdentityAdded(ctx, block, item)
        case events.identity.subIdentityRemoved.name:
            return processors.identity.subIdentityRemoved(ctx, block, item)
        case events.identity.subIdentityRevoked.name:
            return processors.identity.subIdentityRevoked(ctx, block, item)
        default: {
            ctx.log.error(`Event not handled: ${item.name}`)
            return undefined
        }
    }
}

async function handleCalls(ctx: CommonContext, block: BlockHeader, item: CallItem) {
    switch (item.name) {
        case calls.identity.setSubs.name:
            return processors.identity.setSubs(ctx, block, item)
        case calls.identity.renameSub.name:
            return processors.identity.renameSub(ctx, block, item)
        default: {
            return undefined
        }
    }
}

function getParticipants(args: Json, _events: EventItem[], signer: string): string[] {
    const accounts = new Set<string>([signer])
    if (args) {
        const accountsFromArgs = JSON.stringify(args).match(/\b0x[0-9a-fA-F]{64}\b/g)
        if (accountsFromArgs) {
            accountsFromArgs.forEach(accounts.add, accounts)
        }
    }

    if (_events.length > 0) {
        for (const eventItem of _events) {
            if (!eventItem.args) continue
            const accountsFromEventArgs = JSON.stringify(eventItem.args).match(/\b0x[0-9a-fA-F]{64}\b/g)
            if (accountsFromEventArgs && accountsFromEventArgs.length > 0) {
                accountsFromEventArgs.forEach(accounts.add, accounts)
            }
        }
    }

    return Array.from(accounts)
}

processor.run(
    new TypeormDatabase({
        isolationLevel: 'READ COMMITTED',
        supportHotBlocks: true,
    }),
    async (ctx) => {
        try {
            ctx.log.info(
                `Processing batch of blocks from ${ctx.blocks[0].header.height} to ${ctx.blocks[ctx.blocks.length - 1].header.height}`
            )

            for (const block of ctx.blocks) {
                // const extrinsics: Extrinsic[] = []
                // const signers = new Set<string>()
                // const eventsCollection: Event[] = []
                // const accountTokenEvents: AccountTokenEvent[] = []

                if (block.header.height === 0) {
                    await createDefaultData(ctx, block.header)
                    await chainState(ctx, block.header)

                    if (Number(config.prefix) === 1110) {
                        await updateClaimDetails(ctx, block.header)
                    }

                    // await metadataQueue.pause().catch(() => {})
                    // await populateBlock(ctx as unknown as CommonContext, config.lastBlockHeight)
                }

                if (block.header.height === config.lastBlockHeight) {
                    // await syncAllBalances(ctx, block.header)
                    // metadataQueue.resume().catch(() => {})
                    // await syncAllCollections()
                }

                ctx.log.info(
                    `Processing block ${block.header.height}, ${block.events.length} events, ${block.calls.length} calls to process`
                )

                for (const extrinsic of block.extrinsics) {
                    const { id, fee, hash, success, tip, call, error } = extrinsic

                    let fuelTank = null
                    if (!call) {
                        continue
                    }
                    if (['ParachainSystem.set_validation_data', 'Timestamp.set'].includes(call.name)) {
                        continue
                    }

                    if (call.name === 'FuelTanks.dispatch' || call.name === 'FuelTanks.dispatch_and_touch') {
                        const tankData = mappings.fuelTanks.utils.anyDispatch(call)
                        const tank = await ctx.store.findOneByOrFail<FuelTank>(FuelTank, {
                            id: unwrapAccount(tankData.tankId),
                        })

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

                        for (const eventItem of block.events) {
                            if (eventItem.name !== 'Balances.Withdraw' || eventItem.extrinsic?.id !== id) {
                                continue
                            }

                            const transfer = mappings.balances.events.withdraw(eventItem)

                            if (transfer.who === tank.id) {
                                fuelTank.feePaid = transfer.amount
                            }
                        }
                    }

                    const signer = await getOrCreateAccount(ctx, unwrapSigner(extrinsic))
                    const callName = call.name.split('.')
                    const txFee = (fee ?? 0n) + (fuelTank?.feePaid ?? 0n)

                    const extrinsicM = new Extrinsic({
                        id,
                        hash,
                        blockNumber: block.header.height,
                        blockHash: block.header.hash,
                        success,
                        pallet: callName[0],
                        method: callName[1],
                        args: call.args,
                        // signature: extrinsicSignature,
                        signer,
                        nonce: signer.nonce,
                        tip,
                        error: error as string,
                        fee: new Fee({
                            amount: txFee,
                            who: signer.id,
                        }),
                        fuelTank,
                        createdAt: new Date(block.header.timestamp ?? 0),
                        participants: getParticipants(call.args, extrinsic.events, signer.id),
                    })

                    // Hotfix for adding listing seller to participant
                    if (
                        call.name === 'Marketplace.fill_listing' ||
                        call.name === 'Marketplace.finalize_auction' ||
                        (fuelTank &&
                            call.args.call?.__kind === 'Marketplace' &&
                            call.args.call?.value?.__kind === 'fill_listing') ||
                        (fuelTank &&
                            call.args.call?.__kind === 'Marketplace' &&
                            call.args.call?.value?.__kind === 'finalize_auction')
                    ) {
                        const listingId = call.args.call?.value?.listingId ?? call.args.listingId

                        const listing = await ctx.store.findOne<Listing>(Listing, {
                            where: { id: hexStripPrefix(listingId) },
                            relations: { seller: true },
                        })
                        if (listing?.seller && !extrinsicM.participants.includes(listing.seller.id)) {
                            extrinsicM.participants.push(listing.seller.id)
                        }
                    }

                    // signers.add(publicKey)
                    // extrinsics.push(extrinsicM)
                    if (block.header.height > config.lastBlockHeight) {
                        processors.balances.addAccountsToSet([signer.id])
                        await processors.balances.saveAccounts(ctx as unknown as CommonContext, block.header)
                    }

                    await ctx.store.insert(extrinsicM)
                }

                for (const call of block.calls) {
                    await handleCalls(ctx as unknown as CommonContext, block.header, call)
                }
                for (const eventItem of block.events) {
                    const event = await handleEvents(ctx as unknown as CommonContext, block.header, eventItem, false)

                    if (event) {
                        if (Array.isArray(event)) {
                            // eventsCollection.push(event[0])
                            // accountTokenEvents.push(event[1])
                            await ctx.store.insert(event[0])
                            await ctx.store.insert(event[1])
                        } else {
                            // eventsCollection.push(event)
                            await ctx.store.insert(event)
                        }
                    }
                }

                // if (block.header.height > config.lastBlockHeight) {
                //     processors.balances.addAccountsToSet(Array.from(signers))
                //     await processors.balances.saveAccounts(ctx as unknown as CommonContext, block.header)
                // }

                // _.chunk(extrinsics, 1000).forEach((chunk) => ctx.store.insert(chunk))
                // _.chunk(eventsCollection, 1000).forEach((chunk) => ctx.store.insert(chunk))
                //  _.chunk(accountTokenEvents, 1000).forEach((chunk) => ctx.store.insert(chunk))
            }

            const lastBlock = ctx.blocks[ctx.blocks.length - 1].header
            if (lastBlock.height > config.lastBlockHeight - 200) {
                await chainState(ctx as unknown as CommonContext, lastBlock)
            }
        } catch (error) {
            // await metadataQueue.resume()
            Sentry.captureException(error)
            throw error
        }
    }
)
