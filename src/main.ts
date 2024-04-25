/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
import { TypeormDatabase } from '@subsquid/typeorm-store'
import { hexStripPrefix } from '@polkadot/util'
import _ from 'lodash'
import * as Sentry from '@sentry/node'
import { rewriteFramesIntegration } from '@sentry/integrations'
import config from './config'
import { AccountTokenEvent, Event, Extrinsic, Fee, FuelTank, FuelTankData, Listing } from './model'
import { createEnjToken } from './createEnjToken'
import { chainState } from './chainState'
import * as map from './mappings'
import { getOrCreateAccount } from './mappings/util/entities'
import { events } from './types/generated'
import { identity as identityCall } from './types/generated/calls'
import { BlockHeader, CallItem, CommonContext, EventItem } from './mappings/types/contexts'
import { updateClaimDetails } from './mappings/claims/common'
import { syncAllCollections } from './jobs/collection-stats'
import { metadataQueue } from './jobs/process-metadata'
import { getTankDataFromCall } from './mappings/fuelTanks/common'
import { processor } from './processor'

Sentry.init({
    dsn: config.sentryDsn,
    tracesSampleRate: 1.0,
    integrations: [rewriteFramesIntegration()],
})

async function handleEvents(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem,
    skipSave = false
): Promise<Event | [Event, AccountTokenEvent] | undefined> {
    switch (item.name) {
        case events.multiTokens.approved.name:
            return map.multiTokens.events.approved(ctx, block, item, skipSave)
        case events.multiTokens.attributeRemoved.name:
            return map.multiTokens.events.attributeRemoved(ctx, block, item, skipSave)
        case events.multiTokens.attributeSet.name:
            return map.multiTokens.events.attributeSet(ctx, block, item, skipSave)
        case events.multiTokens.burned.name:
            return map.multiTokens.events.burned(ctx, block, item, skipSave)
        case events.multiTokens.collectionAccountCreated.name:
            return map.multiTokens.events.collectionAccountCreated(ctx, block, item, skipSave)
        case events.multiTokens.collectionAccountDestroyed.name:
            return map.multiTokens.events.collectionAccountDestroyed(ctx, block, item, skipSave)
        case events.multiTokens.collectionCreated.name:
            return map.multiTokens.events.collectionCreated(ctx, block, item, skipSave)
        case events.multiTokens.collectionDestroyed.name:
            return map.multiTokens.events.collectionDestroyed(ctx, block, item, skipSave)
        case events.multiTokens.collectionMutated.name:
            return map.multiTokens.events.collectionMutated(ctx, block, item, skipSave)
        case events.multiTokens.collectionTransferred.name:
            return map.multiTokens.events.collectionTransferred(ctx, block, item, skipSave)
        case events.multiTokens.frozen.name:
            return map.multiTokens.events.frozen(ctx, block, item, skipSave)
        case events.multiTokens.minted.name:
            return map.multiTokens.events.minted(ctx, block, item, skipSave)
        case events.multiTokens.reserved.name:
            return map.multiTokens.events.reserved(ctx, block, item, skipSave)
        case events.multiTokens.thawed.name:
            return map.multiTokens.events.thawed(ctx, block, item, skipSave)
        case events.multiTokens.tokenAccountCreated.name:
            return map.multiTokens.events.tokenAccountCreated(ctx, block, item, skipSave)
        case events.multiTokens.tokenAccountDestroyed.name:
            return map.multiTokens.events.tokenAccountDestroyed(ctx, block, item, skipSave)
        case events.multiTokens.tokenCreated.name:
            return map.multiTokens.events.tokenCreated(ctx, block, item, skipSave)
        case events.multiTokens.tokenDestroyed.name:
            return map.multiTokens.events.tokenDestroyed(ctx, block, item, skipSave)
        case events.multiTokens.tokenMutated.name:
            return map.multiTokens.events.tokenMutated(ctx, block, item, skipSave)
        case events.multiTokens.transferred.name:
            return map.multiTokens.events.transferred(ctx, block, item, skipSave)
        case events.multiTokens.unapproved.name:
            return map.multiTokens.events.unapproved(ctx, block, item, skipSave)
        case events.multiTokens.unreserved.name:
            return map.multiTokens.events.unreserved(ctx, block, item, skipSave)
        case events.multiTokens.claimedCollections.name:
            return map.multiTokens.events.claimedCollections(ctx, block, item)
        case events.multiTokens.claimTokensInitiated.name:
            return map.multiTokens.events.claimTokensInitiated(ctx, block, item)
        case events.multiTokens.claimTokensCompleted.name:
            return map.multiTokens.events.claimTokensCompleted(ctx, block, item)
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
            return map.balances.processor.save(ctx, block, item)
        case events.balances.transfer.name:
            await map.balances.processor.save(ctx, block, item)
            return map.balances.events.transfer(ctx, block, item)
        case events.claims.claimRequested.name:
            return map.claims.events.claimRequested(ctx, block, item)
        case events.claims.claimRejected.name:
            return map.claims.events.claimRejected(ctx, block, item)
        case events.claims.claimMinted.name:
            return map.claims.events.claimMinted(ctx, block, item)
        case events.claims.delayTimeForClaimSet.name:
            return map.claims.events.delayTimeForClaimSet(ctx, block, item)
        case events.claims.claimed.name:
            return map.claims.events.claimed(ctx, block, item)
        case events.claims.exchangeRateSet.name:
            return map.claims.events.exchangeRateSet(ctx, block, item)
        case events.marketplace.listingCreated.name:
            return map.marketplace.events.listingCreated(ctx, block, item)
        case events.marketplace.listingCancelled.name:
            return map.marketplace.events.listingCancelled(ctx, block, item)
        case events.marketplace.listingFilled.name:
            return map.marketplace.events.listingFilled(ctx, block, item)
        case events.marketplace.bidPlaced.name:
            return map.marketplace.events.bidPlaced(ctx, block, item)
        case events.marketplace.auctionFinalized.name:
            return map.marketplace.events.auctionFinalized(ctx, block, item)
        case events.polkadotXcm.attempted.name:
            return map.xcm.events.attempted(ctx, block, item)
        case events.fuelTanks.accountAdded.name:
            return map.fuelTanks.events.accountAdded(ctx, block, item)
        case events.fuelTanks.accountRemoved.name:
            return map.fuelTanks.events.accountRemoved(ctx, block, item)
        case events.fuelTanks.accountRuleDataRemoved.name:
            return map.fuelTanks.events.accountRuleDataRemoved(ctx, block, item)
        case events.fuelTanks.freezeStateMutated.name:
            return map.fuelTanks.events.freezeStateMutated(ctx, block, item)
        case events.fuelTanks.fuelTankCreated.name:
            return map.fuelTanks.events.fuelTankCreated(ctx, block, item)
        case events.fuelTanks.fuelTankDestroyed.name:
            return map.fuelTanks.events.fuelTankDestroyed(ctx, block, item)
        case events.fuelTanks.fuelTankMutated.name:
            return map.fuelTanks.events.fuelTankMutated(ctx, block, item)
        case events.fuelTanks.ruleSetInserted.name:
            return map.fuelTanks.events.ruleSetInserted(ctx, block, item)
        case events.fuelTanks.ruleSetRemoved.name:
            return map.fuelTanks.events.ruleSetRemoved(ctx, block, item)
        case events.identity.identityCleared.name:
            return map.identity.events.identityCleared(ctx, block, item)
        case events.identity.identityKilled.name:
            return map.identity.events.identityKilled(ctx, block, item)
        case events.identity.identitySet.name:
            return map.identity.events.identitySet(ctx, block, item)
        case events.identity.judgementGiven.name:
            return map.identity.events.judgementGiven(ctx, block, item)
        case events.identity.judgementRequested.name:
            return map.identity.events.judgementRequested(ctx, block, item)
        case events.identity.judgementUnrequested.name:
            return map.identity.events.judgementUnrequested(ctx, block, item)
        case events.identity.registrarAdded.name:
            return map.identity.events.registrarAdded(ctx, block, item)
        case events.identity.subIdentityAdded.name:
            return map.identity.events.subIdentityAdded(ctx, block, item)
        case events.identity.subIdentityRemoved.name:
            return map.identity.events.subIdentityRemoved(ctx, block, item)
        case events.identity.subIdentityRevoked.name:
            return map.identity.events.subIdentityRevoked(ctx, block, item)
        default: {
            ctx.log.error(`Event not handled: ${item.name}`)
            return undefined
        }
    }
}

async function handleCalls(ctx: CommonContext, block: BlockHeader, item: CallItem) {
    switch (item.name) {
        case identityCall.setSubs.name:
            return map.identity.calls.setSubs(ctx, block, item)
        case identityCall.renameSub.name:
            return map.identity.calls.renameSub(ctx, block, item)
        default: {
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

processor.run(
    new TypeormDatabase({
        isolationLevel: 'READ COMMITTED',
        supportHotBlocks: true,
    }),
    async (ctx) => {
        try {
            ctx.log.info(`last block of batch: ${ctx.blocks[ctx.blocks.length - 1].header.height}`)

            // eslint-disable-next-line no-restricted-syntax
            for (const block of ctx.blocks) {
                const extrinsics: Extrinsic[] = []
                const signers = new Set<string>()
                const eventsCollection: Event[] = []
                const accountTokenEvents: AccountTokenEvent[] = []

                if (block.header.height === 0) {
                    await createEnjToken(ctx as unknown as CommonContext, block.header)
                    await chainState(ctx as unknown as CommonContext, block.header)

                    if (Number(config.prefix) === 1110) {
                        await updateClaimDetails(ctx as unknown as CommonContext, block.header)
                    }

                    await metadataQueue.pause().catch(() => {})
                    // await populateBlock(ctx as unknown as CommonContext, config.lastBlockHeight)
                }

                if (block.header.height === config.lastBlockHeight) {
                    metadataQueue.resume().catch(() => {})
                    syncAllCollections()
                }

                ctx.log.info(
                    `Processing block ${block.header.height}, ${block.events.length} events, ${block.calls.length} calls to process`
                )

                for (const extrinsic of block.extrinsics) {
                    const { id, fee, hash, signature: signatureUnknown, success, tip, call, error } = extrinsic
                    let publicKey = ''
                    let extrinsicSignature: any = {}
                    let fuelTank = null

                    if (!call) {
                        // eslint-disable-next-line no-continue
                        continue
                    }

                    if (['ParachainSystem.set_validation_data', 'Timestamp.set'].includes(call.name)) {
                        // eslint-disable-next-line no-continue
                        continue
                    }

                    const signature = signatureUnknown as any

                    if (!signature) {
                        publicKey = call.args.dest ?? call.args.destination
                        extrinsicSignature = {
                            address: call.args.dest ?? call.args.destination,
                            signature: call.args.ethereumSignature,
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
                        const tank = await ctx.store.findOneByOrFail(FuelTank, { id: (tankData.tankId as any).value })

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

                            if (transfer && transfer.who === tank.id) {
                                fuelTank.feePaid = transfer.amount
                            }
                        }
                    }

                    // eslint-disable-next-line no-await-in-loop
                    const signer = await getOrCreateAccount(ctx as unknown as CommonContext, publicKey)
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
                        signature: extrinsicSignature,
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
                        participants: getParticipants(call.args, publicKey),
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
                        // eslint-disable-next-line no-await-in-loop
                        const listing = await ctx.store.findOne(Listing, {
                            where: { id: hexStripPrefix(listingId) },
                            relations: { seller: true },
                        })
                        if (listing?.seller && !extrinsicM.participants.includes(listing.seller.id)) {
                            extrinsicM.participants.push(listing.seller.id)
                        }
                    }

                    signers.add(publicKey)
                    extrinsics.push(extrinsicM)
                }

                for (const call of block.calls) {
                    await handleCalls(ctx as unknown as CommonContext, block.header, call)
                }
                for (const eventItem of block.events) {
                    // eslint-disable-next-line no-await-in-loop

                    const event = await handleEvents(
                        ctx as unknown as CommonContext,
                        block.header,
                        eventItem,
                        block.header.height <= config.lastBlockHeight
                    )

                    if (event) {
                        if (Array.isArray(event)) {
                            eventsCollection.push(event[0])
                            accountTokenEvents.push(event[1])
                        } else {
                            eventsCollection.push(event)
                        }
                    }
                }

                map.balances.processor.addAccountsToSet(Array.from(signers))

                if (block.header.height > config.lastBlockHeight) {
                    await map.balances.processor.saveAccounts(ctx as unknown as CommonContext, block.header)
                }

                _.chunk(extrinsics, 1000).forEach((chunk) => ctx.store.insert(chunk))
                _.chunk(eventsCollection, 1000).forEach((chunk) => ctx.store.insert(chunk))
                _.chunk(accountTokenEvents, 1000).forEach((chunk) => ctx.store.insert(chunk))
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
