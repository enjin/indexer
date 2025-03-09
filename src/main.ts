import { TypeormDatabase } from '@subsquid/typeorm-store'
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
// import { metadataQueue } from './jobs/process-metadata'
import { processor } from './processor'
// import { syncAllBalances } from './jobs/fetch-balance'
import { Json } from '@subsquid/substrate-processor'
import { match } from 'ts-pattern'
import { QueueUtils } from './worker/queue'
import { hexStripPrefix } from '@polkadot/util'

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
    return match(item.name)
        .with(events.multiTokens.approved.name, () => processors.multiTokens.approved(ctx, item, skipSave))
        .with(events.multiTokens.attributeRemoved.name, () =>
            processors.multiTokens.attributeRemoved(ctx, block, item, skipSave)
        )
        .with(events.multiTokens.attributeSet.name, () =>
            processors.multiTokens.attributeSet(ctx, block, item, skipSave)
        )
        .with(events.multiTokens.burned.name, () => processors.multiTokens.burned(ctx, block, item, skipSave))
        .with(events.multiTokens.collectionAccountCreated.name, () =>
            processors.multiTokens.collectionAccountCreated(ctx, block, item, skipSave)
        )
        .with(events.multiTokens.collectionAccountDestroyed.name, () =>
            processors.multiTokens.collectionAccountDestroyed(ctx, block, item, skipSave)
        )
        .with(events.multiTokens.collectionCreated.name, () =>
            processors.multiTokens.collectionCreated(ctx, block, item, skipSave)
        )
        .with(events.multiTokens.collectionDestroyed.name, () =>
            processors.multiTokens.collectionDestroyed(ctx, block, item, skipSave)
        )
        .with(events.multiTokens.collectionMutated.name, () =>
            processors.multiTokens.collectionMutated(ctx, block, item, skipSave)
        )
        .with(events.multiTokens.collectionTransferred.name, () =>
            processors.multiTokens.collectionTransferred(ctx, block, item, skipSave)
        )
        .with(events.multiTokens.frozen.name, () => processors.multiTokens.frozen(ctx, block, item, skipSave))
        .with(events.multiTokens.minted.name, () => processors.multiTokens.minted(ctx, block, item, skipSave))
        .with(events.multiTokens.infused.name, () => processors.multiTokens.infused(ctx, block, item, skipSave))
        .with(events.multiTokens.reserved.name, () => processors.multiTokens.reserved(ctx, block, item, skipSave))
        .with(events.multiTokens.thawed.name, () => processors.multiTokens.thawed(ctx, block, item, skipSave))
        .with(events.multiTokens.tokenAccountCreated.name, () =>
            processors.multiTokens.tokenAccountCreated(ctx, block, item, skipSave)
        )
        .with(events.multiTokens.tokenAccountDestroyed.name, () =>
            processors.multiTokens.tokenAccountDestroyed(ctx, block, item, skipSave)
        )
        .with(events.multiTokens.tokenCreated.name, () =>
            processors.multiTokens.tokenCreated(ctx, block, item, skipSave)
        )
        .with(events.multiTokens.tokenDestroyed.name, () =>
            processors.multiTokens.tokenDestroyed(ctx, block, item, skipSave)
        )
        .with(events.multiTokens.tokenMutated.name, () =>
            processors.multiTokens.tokenMutated(ctx, block, item, skipSave)
        )
        .with(events.multiTokens.transferred.name, () => processors.multiTokens.transferred(ctx, block, item, skipSave))
        .with(events.multiTokens.unapproved.name, () => processors.multiTokens.unapproved(ctx, block, item, skipSave))
        .with(events.multiTokens.unreserved.name, () => processors.multiTokens.unreserved(ctx, block, item, skipSave))
        .with(events.multiTokens.claimedCollections.name, () =>
            processors.multiTokens.claimedCollections(ctx, block, item)
        )
        .with(events.multiTokens.claimTokensInitiated.name, () =>
            processors.multiTokens.claimTokensInitiated(ctx, block, item)
        )
        .with(events.multiTokens.claimTokensCompleted.name, () =>
            processors.multiTokens.claimTokensCompleted(ctx, block, item)
        )
        .with(
            events.balances.balanceSet.name,
            events.balances.burned.name,
            events.balances.deposit.name,
            events.balances.dustLost.name,
            events.balances.endowed.name,
            events.balances.frozen.name,
            events.balances.locked.name,
            events.balances.minted.name,
            events.balances.reserveRepatriated.name,
            events.balances.reserved.name,
            events.balances.restored.name,
            events.balances.slashed.name,
            events.balances.suspended.name,
            events.balances.thawed.name,
            events.balances.unlocked.name,
            events.balances.unreserved.name,
            events.balances.transfer.name,
            events.balances.withdraw.name,
            () => processors.balances.save(item)
        )
        .with(events.claims.claimRequested.name, () => processors.claims.claimRequested(ctx, block, item))
        .with(events.claims.claimRejected.name, () => processors.claims.claimRejected(ctx, block, item))
        .with(events.claims.claimMinted.name, () => processors.claims.claimMinted(ctx, block, item))
        .with(events.claims.claimed.name, () => processors.claims.claimed(ctx, block, item))
        .with(events.claims.exchangeRateSet.name, () => processors.claims.exchangeRateSet(ctx, block, item))
        .with(events.claims.delayTimeForClaimSet.name, () => processors.claims.delayTimeForClaimSet(ctx, block, item))
        .with(events.marketplace.listingCreated.name, () => processors.marketplace.listingCreated(ctx, block, item))
        .with(events.marketplace.listingCancelled.name, () => processors.marketplace.listingCancelled(ctx, block, item))
        .with(events.marketplace.listingFilled.name, () => processors.marketplace.listingFilled(ctx, block, item))
        .with(events.marketplace.bidPlaced.name, () => processors.marketplace.bidPlaced(ctx, block, item))
        .with(events.marketplace.auctionFinalized.name, () => processors.marketplace.auctionFinalized(ctx, block, item))
        .with(events.marketplace.counterOfferPlaced.name, () =>
            processors.marketplace.counterOfferPlaced(ctx, block, item)
        )
        .with(events.marketplace.counterOfferAnswered.name, () =>
            processors.marketplace.counterOfferAnswered(ctx, block, item)
        )
        .with(events.marketplace.counterOfferRemoved.name, () =>
            processors.marketplace.counterOfferRemoved(ctx, block, item)
        )
        .with(events.marketplace.listingRemovedUnderMinimum.name, () =>
            processors.marketplace.listingRemovedUnderMinimum(ctx, block, item)
        )
        .with(events.polkadotXcm.attempted.name, () => processors.polkadotXcm.attempted(ctx, block, item))
        .with(events.fuelTanks.accountAdded.name, () => processors.fuelTanks.accountAdded(ctx, block, item))
        .with(events.fuelTanks.accountRemoved.name, () => processors.fuelTanks.accountRemoved(ctx, block, item))
        .with(events.fuelTanks.accountRuleDataRemoved.name, () =>
            processors.fuelTanks.accountRuleDataRemoved(ctx, block, item)
        )
        .with(events.fuelTanks.freezeStateMutated.name, () => processors.fuelTanks.freezeStateMutated(ctx, block, item))
        .with(events.fuelTanks.fuelTankCreated.name, () => processors.fuelTanks.fuelTankCreated(ctx, block, item))
        .with(events.fuelTanks.fuelTankDestroyed.name, () => processors.fuelTanks.fuelTankDestroyed(ctx, block, item))
        .with(events.fuelTanks.fuelTankMutated.name, () => processors.fuelTanks.fuelTankMutated(ctx, block, item))
        .with(events.fuelTanks.ruleSetInserted.name, () => processors.fuelTanks.ruleSetInserted(ctx, block, item))
        .with(events.fuelTanks.ruleSetRemoved.name, () => processors.fuelTanks.ruleSetRemoved(ctx, block, item))
        .with(events.identity.identityCleared.name, () => processors.identity.identityCleared(ctx, block, item))
        .with(events.identity.identityKilled.name, () => processors.identity.identityKilled(ctx, block, item))
        .with(events.identity.identitySet.name, () => processors.identity.identitySet(ctx, block, item))
        .with(events.identity.judgementGiven.name, () => processors.identity.judgementGiven(ctx, block, item))
        .with(events.identity.judgementRequested.name, () => processors.identity.judgementRequested(ctx, block, item))
        .with(events.identity.judgementUnrequested.name, () =>
            processors.identity.judgementUnrequested(ctx, block, item)
        )
        .with(events.identity.registrarAdded.name, () => processors.identity.registrarAdded(ctx, block, item))
        .with(events.identity.subIdentityAdded.name, () => processors.identity.subIdentityAdded(ctx, block, item))
        .with(events.identity.subIdentityRemoved.name, () => processors.identity.subIdentityRemoved(ctx, block, item))
        .with(events.identity.subIdentityRevoked.name, () => processors.identity.subIdentityRevoked(ctx, block, item))
        .otherwise(() => {
            ctx.log.error(`Unsupported event on handle event: ${item.name}`)
            return undefined
        })
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
                    QueueUtils.dispatchComputeCollections()
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
