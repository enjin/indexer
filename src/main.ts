import { TypeormDatabase } from '@subsquid/typeorm-store'
import _ from 'lodash'
import * as Sentry from '@sentry/node'
import config from '~/util/config'
import {
    AccountTokenEvent,
    AuctionState,
    Event,
    Extrinsic,
    Fee,
    FuelTank,
    FuelTankData,
    Listing,
    ListingType,
    OfferState,
} from '~/model'
import { genesisData } from '~/genesis-data'
import { chainState } from '~/chain-state'
import * as p from '~/pallet'
import { getOrCreateAccount, unwrapAccount, unwrapSigner } from '~/util/entities'
import { Block, CommonContext, EventItem, ExtrinsicItem } from '~/contexts'
import { updateClaimDetails } from '~/pallet/claims/processors/common'
import { processorConfig } from '~/processor.config'
import { Json } from '@subsquid/substrate-processor'
import { hexStripPrefix } from '@polkadot/util'
import { syncState } from '~/synchronize'
import { callHandler, eventHandler } from '~/processor.handler'
import { DataService } from '~/util/data'
import { calls, events } from '~/type'
import { QueueUtils } from '~/queue'
import { QueuesEnum } from '~/queue/constants'
import { Logger } from '~/util/logger'
import { getEventCacheKey, isRelay } from '~/util/tools'
import { In } from 'typeorm'
import { isSnsEvent, Sns, SnsEvent } from '~/util/sns'

const logger = new Logger('sqd:processor', config.logLevel)

async function bootstrap() {
    Sentry.init({
        dsn: config.sentryDsn,
        tracesSampleRate: 1.0,
    })

    const dataService = DataService.getInstance()
    await dataService.initialize()

    logger.info(`last block number on config: ${dataService.lastBlockNumber}`)

    const snsEvents: SnsEvent[] = []
    let snsEventsCache: Map<string, { value: SnsEvent; expiresAt: number }> = new Map()

    processorConfig.run(
        new TypeormDatabase({
            isolationLevel: 'READ COMMITTED',
            supportHotBlocks: true,
        }),
        async (ctx) => {
            try {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                ctx.log = logger as any

                if (ctx.blocks[0].header.height === 0) {
                    await startWarpSync(ctx, ctx.blocks[0].header)
                }

                ctx.log.debug(
                    `Processing batch of blocks from ${ctx.blocks[0].header.height} to ${ctx.blocks[ctx.blocks.length - 1].header.height}`
                )

                for (const block of ctx.blocks) {
                    const blockStart = Date.now()
                    ctx.log.debug(
                        `Processing block ${block.header.height}, ${block.events.length} events, ${block.calls.length} calls to process`
                    )

                    const extrinsics: Extrinsic[] = []
                    const signers = new Set<string>()
                    const eventsCollection: Event[] = []
                    const accountTokenEvents: AccountTokenEvent[] = []

                    for (const extrinsic of block.extrinsics) {
                        const [s, e] = await processExtrinsics(ctx, block.header, block.events, extrinsic)
                        if (s) signers.add(s)
                        if (e) extrinsics.push(e)
                    }

                    for (const call of block.calls) {
                        await callHandler(ctx, block.header, call)
                    }

                    for (const eventItem of block.events) {
                        const [e, a, s] = await processEvents(ctx, block.header, eventItem, dataService.lastBlockNumber)
                        if (e) eventsCollection.push(e)
                        if (a) accountTokenEvents.push(a)
                        if (s) {
                            const cachedSnsEvent = getEventCacheKey(s.body)
                            if (cachedSnsEvent && !snsEventsCache.has(cachedSnsEvent)) {
                                snsEventsCache.set(cachedSnsEvent, { value: s, expiresAt: Date.now() + 120_000 })
                                snsEvents.push(s)
                            } else {
                                snsEvents.push({
                                    ...s,
                                    body: {
                                        ...s.body,
                                        isReorganized: true,
                                    },
                                })
                            }
                        }
                    }

                    if (block.header.height > dataService.lastBlockNumber) {
                        p.balances.processors.addAccountsToSet(Array.from(signers))
                        await p.balances.processors.saveAccounts(ctx, block.header)
                    }

                    for (const chunk of _.chunk(extrinsics, 1000)) {
                        await ctx.store.save(chunk)
                    }
                    for (const chunk of _.chunk(eventsCollection, 1000)) {
                        await ctx.store.save(chunk)
                    }
                    for (const chunk of _.chunk(accountTokenEvents, 1000)) {
                        await ctx.store.save(chunk)
                    }

                    if (snsEvents.length > 0) {
                        for (const snsEvent of snsEvents) {
                            if (await isValidEvent(ctx, snsEvent.id)) {
                                await Sns.getInstance().send(snsEvent)
                            }
                        }
                        snsEventsCache = clearExpiredCache(snsEventsCache)
                        snsEvents.length = 0
                    }

                    const blockEnd = Date.now()
                    const durationMs = blockEnd - blockStart
                    if (durationMs > 1000) {
                        ctx.log.warn(`Block ${block.header.height} took ${durationMs}ms to process`)
                    }
                }

                const lastBlock = ctx.blocks[ctx.blocks.length - 1].header

                if (lastBlock.height === dataService.lastBlockNumber) {
                    QueueUtils.dispatchComputeCollections()
                    QueueUtils.dispatchFetchAllBalances()
                    await QueueUtils.resumeQueue(QueuesEnum.METADATA)
                    await QueueUtils.resumeQueue(QueuesEnum.COLLECTIONS)
                }

                // save chain state for the last 28 days
                if (lastBlock.height < dataService.lastBlockNumber - 28 * 10 * 60 * 24 && isRelay()) {
                    await chainState(ctx, lastBlock)
                }

                if (lastBlock.height > dataService.lastBlockNumber) {
                    await chainState(ctx, lastBlock)
                    await checkListingState(ctx, lastBlock)
                }
            } catch (error) {
                await QueueUtils.resumeQueue(QueuesEnum.COLLECTIONS)
                await QueueUtils.resumeQueue(QueuesEnum.METADATA)

                logger.fatal(error)
                Sentry.captureException(error)

                throw error
            }
        }
    )
}

async function isValidEvent(ctx: CommonContext, id: string): Promise<boolean> {
    const event = await ctx.store.findOne(Event, {
        where: { id },
    })

    return event !== undefined
}

function clearExpiredCache(snsEventsCache: Map<string, { value: SnsEvent; expiresAt: number }>) {
    snsEventsCache.forEach((value: { value: SnsEvent; expiresAt: number }, key: string) => {
        if (value.expiresAt < Date.now()) {
            snsEventsCache.delete(key)
        }
    })

    return snsEventsCache
}

async function startWarpSync(ctx: CommonContext, block: Block) {
    ctx.log.info(`Starting warp sync...`)

    await QueueUtils.pauseQueue(QueuesEnum.COLLECTIONS)
    await QueueUtils.pauseQueue(QueuesEnum.METADATA)

    await genesisData(ctx, block)
    await chainState(ctx, block)

    if (Number(config.prefix) === 1110) {
        await updateClaimDetails(ctx, block)
    }

    await syncState(ctx)
}

async function processEvents(
    ctx: CommonContext,
    block: Block,
    eventItem: EventItem,
    lastBlockNumber: number
): Promise<[Event | undefined, AccountTokenEvent | undefined, SnsEvent | undefined]> {
    const event = await eventHandler(ctx, block, eventItem, block.height <= lastBlockNumber)

    if (event) {
        if (Array.isArray(event)) {
            const tokenAccountEvent = event[1] instanceof AccountTokenEvent ? event[1] : undefined
            const snsEvent = event[2] ? event[2] : isSnsEvent(event[1]) ? event[1] : undefined

            return [event[0], tokenAccountEvent, snsEvent]
        } else {
            return [event, undefined, undefined]
        }
    }

    return [undefined, undefined, undefined]
}

async function processExtrinsics(
    ctx: CommonContext,
    block: Block,
    eventItems: EventItem[],
    extrinsic: ExtrinsicItem
): Promise<[string | undefined, Extrinsic | undefined]> {
    const { id, fee, hash, success, tip, call, error } = extrinsic

    let fuelTank = null
    if (!call) {
        return [undefined, undefined]
    }
    if ([calls.parachainSystem.setValidationData.name, calls.timestamp.set.name].includes(call.name)) {
        return [undefined, undefined]
    }

    if (call.name === calls.fuelTanks.dispatch.name || call.name === calls.fuelTanks.dispatchAndTouch.name) {
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
                'settings' in tankData && tankData.settings !== undefined ? tankData.settings.paysRemainingFee : null,
            useNoneOrigin:
                'settings' in tankData && tankData.settings !== undefined ? tankData.settings.useNoneOrigin : null,
        })

        for (const eventItem of eventItems) {
            if (eventItem.name !== events.balances.withdraw.name || eventItem.extrinsic?.id !== id) {
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
        blockNumber: block.height,
        blockHash: block.hash,
        success,
        pallet: callName[0],
        method: callName[1],
        args: call.args,
        signer,
        nonce: signer.nonce,
        tip,
        error: error as string,
        fee: new Fee({
            amount: txFee,
            who: signer.id,
        }),
        fuelTank,
        createdAt: new Date(block.timestamp ?? 0),
        participants: getParticipants(call.args, extrinsic.events, signer.id),
    })

    // Hotfix for adding listing seller to participant
    if (
        call.name === calls.marketplace.fillListing.name ||
        call.name === calls.marketplace.finalizeAuction.name ||
        (fuelTank &&
            calls.marketplace.fillListing.name === `${call.args.call?.__kind}.${call.args.call?.value?.__kind}`) ||
        (fuelTank &&
            calls.marketplace.finalizeAuction.name === `${call.args.call?.__kind}.${call.args.call?.value?.__kind}`)
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

    return [signer.id, extrinsicM]
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

async function checkListingState(ctx: CommonContext, block: Block) {
    const listings = await ctx.store.find(Listing, {
        where: { type: In([ListingType.Auction, ListingType.Offer]), isActive: true },
    })
    for (const listing of listings) {
        if (listing.data.isTypeOf === 'AuctionData') {
            const auctionData = listing.data
            if (
                auctionData.endHeight < block.height &&
                auctionData.endHeight > 0 &&
                listing.state.isTypeOf === 'AuctionState' &&
                (listing.state.isExpired === false || listing.state.isExpired === undefined)
            ) {
                const highBid = listing.state.highBid
                listing.state = new AuctionState({ listingType: ListingType.Auction, highBid, isExpired: true })
                listing.isActive = false
                await ctx.store.save(listing)
            } else if (listing.state.isTypeOf === 'AuctionState' && listing.state.isExpired === undefined) {
                const highBid = listing.state.highBid
                listing.state = new AuctionState({ listingType: ListingType.Auction, highBid, isExpired: false })
                await ctx.store.save(listing)
            }
        }

        if (listing.data.isTypeOf === 'OfferData') {
            const offerData = listing.data
            if (
                listing.state.isTypeOf === 'OfferState' &&
                ((offerData.expiration && offerData.expiration < block.height) || listing.state.isExpired === true)
            ) {
                listing.state = new OfferState({
                    listingType: ListingType.Offer,
                    counterOfferCount: listing.state.counterOfferCount,
                    isExpired: true,
                })
                listing.isActive = false
                await ctx.store.save(listing)
            } else if (listing.state.isTypeOf === 'OfferState' && listing.state.isExpired === undefined) {
                listing.state = new OfferState({
                    listingType: ListingType.Offer,
                    counterOfferCount: listing.state.counterOfferCount,
                    isExpired: false,
                })
                await ctx.store.save(listing)
            }
        }
    }
}

bootstrap().catch((error: unknown) => {
    logger.fatal(error)
    Sentry.captureException(error)
})
