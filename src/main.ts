import { TypeormDatabase } from '@subsquid/typeorm-store'
import _ from 'lodash'
import * as Sentry from '@sentry/node'
import config from './util/config'
import { AccountTokenEvent, Event, Extrinsic, Fee, FuelTank, FuelTankData, Listing } from './model'
import { genesisData } from './genesis-data'
import { chainState } from './chain-state'
import * as p from './pallet'
import { getOrCreateAccount, unwrapAccount, unwrapSigner } from './util/entities'
import { Block, CommonContext, EventItem, ExtrinsicItem } from './contexts'
import { updateClaimDetails } from './pallet/claims/processors/common'
import { processorConfig } from './processor.config'
import { Json } from '@subsquid/substrate-processor'
import { hexStripPrefix } from '@polkadot/util'
import { syncState } from './synchronize'
import { callHandler, eventHandler } from './processor.handler'
import { DataService } from './util/data'
import { calls, events } from './type'
import { QueueUtils } from './queue'
import { QueuesEnum } from './queue/constants'
import { Logger } from './util/logger'

const logger = new Logger('sqd:processor', config.logLevel)

async function bootstrap() {
    Sentry.init({
        dsn: config.sentryDsn,
        tracesSampleRate: 1.0,
    })

    const dataService = DataService.getInstance()
    await dataService.initialize()

    logger.info(`last block number on config: ${dataService.lastBlockNumber}`)

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
                        const [e, a] = await processEvents(ctx, block.header, eventItem, dataService.lastBlockNumber)
                        if (e) eventsCollection.push(e)
                        if (a) accountTokenEvents.push(a)
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
                }

                const lastBlock = ctx.blocks[ctx.blocks.length - 1].header

                if (lastBlock.height === dataService.lastBlockNumber) {
                    QueueUtils.dispatchComputeCollections()
                    QueueUtils.dispatchFetchAllBalances()
                    await QueueUtils.resumeQueue(QueuesEnum.METADATA)
                    await QueueUtils.resumeQueue(QueuesEnum.COLLECTIONS)
                }

                if (lastBlock.height > dataService.lastBlockNumber) {
                    await chainState(ctx, lastBlock)
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

/// This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason:
// QueryFailedError: insert or update on table "account_token_event" violates foreign key constraint "FK_aaa1cf924ed392764b0bace1ad1"
//     at PostgresQueryRunner.query (/squid/node_modules/.pnpm/typeorm@0.3.24_ioredis@5.6.1_pg-query-stream@4.10.0_pg@8.16.0__pg@8.16.0_reflect-metadata@0.2.2/node_modules/typeorm/driver/postgres/PostgresQueryRunner.js:216:19)
//     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
//     at async InsertQueryBu

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
): Promise<[Event | undefined, AccountTokenEvent | undefined]> {
    const event = await eventHandler(ctx, block, eventItem, block.height <= lastBlockNumber)

    if (event) {
        if (Array.isArray(event)) {
            return [event[0], event[1]]
        } else {
            return [event, undefined]
        }
    }

    return [undefined, undefined]
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

bootstrap().catch((error: unknown) => {
    logger.fatal(error)
    Sentry.captureException(error)
})
