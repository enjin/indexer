import { TypeormDatabase } from '@subsquid/typeorm-store'
import _ from 'lodash'
import * as Sentry from '@sentry/node'
import config from './util/config'
import { AccountTokenEvent, Event, Extrinsic, Fee, FuelTank, FuelTankData, Listing } from './model'
import { genesisData } from './genesis-data'
import { chainState } from './chain-state'
import * as p from './pallet'
import { getOrCreateAccount, unwrapAccount, unwrapSigner } from './util/entities'
import { CommonContext, EventItem } from './contexts'
import { updateClaimDetails } from './pallet/claims/processors/common'
import { processorConfig } from './processor.config'
import { Json } from '@subsquid/substrate-processor'
import { hexStripPrefix } from '@polkadot/util'
import { syncState } from './synchronize'
import { callHandler, eventHandler } from './processor.handler'
import { DataService } from './util/data'
import { calls, events } from './type'
import { createLogger } from '@subsquid/logger'

async function bootstrap() {
    Sentry.init({
        dsn: config.sentryDsn,
        tracesSampleRate: 1.0,
    })

    const dataService = DataService.getInstance()
    await dataService.initialize()
    await dataService.createMetadataSchema()

    const log = createLogger('sqd:processor')
    log.info(`Last block on config: ${dataService.lastBlockNumber}`)

    processorConfig.run(
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
                    const extrinsics: Extrinsic[] = []
                    const signers = new Set<string>()
                    const eventsCollection: Event[] = []
                    const accountTokenEvents: AccountTokenEvent[] = []

                    if (block.header.height === 0) {
                        ctx.log.info(`Starting chain-state sync`)

                        await genesisData(ctx, block.header)
                        await chainState(ctx, block.header)

                        if (Number(config.prefix) === 1110) {
                            await updateClaimDetails(ctx, block.header)
                        }

                        // await metadataQueue.pause().catch(() => {})
                        await syncState(ctx as unknown as CommonContext)
                    }

                    // if (block.header.height === dataService.lastBlockNumber) {
                    //     ctx.log.error('WE HAVE REACHED THIS NOW WE WILL START TO SAVE SHIT!')
                    //
                    //     // await syncAllBalances(ctx, block.header)
                    //     // metadataQueue.resume().catch(() => {})
                    //     ctx.log.warn('WE ARE CALLING DISPATCH COMPUTE COLLECTIONS')
                    //     QueueUtils.dispatchComputeCollections()
                    // }

                    ctx.log.info(
                        `Processing block ${block.header.height}, ${block.events.length} events, ${block.calls.length} calls to process`
                    )

                    for (const extrinsic of block.extrinsics) {
                        const { id, fee, hash, success, tip, call, error } = extrinsic

                        let fuelTank = null
                        if (!call) {
                            continue
                        }
                        if (
                            [calls.parachainSystem.setValidationData.name, calls.timestamp.set.name].includes(call.name)
                        ) {
                            continue
                        }

                        if (
                            call.name === calls.fuelTanks.dispatch.name ||
                            call.name === calls.fuelTanks.dispatchAndTouch.name
                        ) {
                            const tankData = p.fuelTanks.utils.anyDispatch(call)
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
                                if (
                                    eventItem.name !== events.balances.withdraw.name ||
                                    eventItem.extrinsic?.id !== id
                                ) {
                                    continue
                                }

                                const transfer = p.balances.events.withdraw(eventItem)

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
                            call.name === calls.marketplace.fillListing.name ||
                            call.name === calls.marketplace.finalizeAuction.name ||
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

                        signers.add(signer.id)
                        extrinsics.push(extrinsicM)
                        // if (block.header.height > config.lastBlockHeight) {
                        //     processors.balances.addAccountsToSet([signer.id])
                        //     await processors.balances.saveAccounts(ctx as unknown as CommonContext, block.header)
                        // }
                        //
                        // await ctx.store.insert(extrinsicM)
                    }

                    for (const call of block.calls) {
                        await callHandler(ctx as unknown as CommonContext, block.header, call)
                    }
                    for (const eventItem of block.events) {
                        const event = await eventHandler(
                            ctx as unknown as CommonContext,
                            block.header,
                            eventItem,
                            block.header.height <= dataService.lastBlockNumber
                        )

                        if (event) {
                            if (Array.isArray(event)) {
                                eventsCollection.push(event[0])
                                accountTokenEvents.push(event[1])
                                // await ctx.store.insert(event[0])
                                // await ctx.store.insert(event[1])
                            } else {
                                eventsCollection.push(event)
                                // await ctx.store.insert(event)
                            }
                        }
                    }

                    if (block.header.height > dataService.lastBlockNumber) {
                        p.balances.processors.addAccountsToSet(Array.from(signers))
                        await p.balances.processors.saveAccounts(ctx as unknown as CommonContext, block.header)
                    }

                    for (const chunk of _.chunk(extrinsics, 1000)) {
                        void ctx.store.insert(chunk)
                    }
                    for (const chunk of _.chunk(eventsCollection, 1000)) {
                        void ctx.store.insert(chunk)
                    }
                    for (const chunk of _.chunk(accountTokenEvents, 1000)) {
                        void ctx.store.insert(chunk)
                    }
                }

                const lastBlock = ctx.blocks[ctx.blocks.length - 1].header
                if (lastBlock.height > dataService.lastBlockNumber) {
                    await chainState(ctx as unknown as CommonContext, lastBlock)
                }
            } catch (error) {
                // await metadataQueue.resume()
                Sentry.captureException(error)
                throw error
            }
        }
    )
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

bootstrap().catch((error: unknown) => {
    Sentry.captureException(error)
    console.error(error)
})
