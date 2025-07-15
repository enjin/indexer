import { connectionManager } from '~/contexts'
import { Job } from 'bullmq'
import {
    Event,
    NominationPool,
    StakeExchangeBuyOrderCompleted,
    StakeExchangeLiquidityAdded,
    StakeExchangeLiquidityWithdrawn,
    StakeExchangeOffer,
    StakeExchangeOfferCancelled,
    StakeExchangeOfferCreated,
    StakeExchangeOfferState,
    StakeExchangeTokenFilterType,
} from '~/model'
import { In } from 'typeorm'

export async function syncStakeOffers(job: Job): Promise<void> {
    const em = await connectionManager()
    const promises: Promise<any>[] = []

    const stakeExchangeOffers = await em.find(StakeExchangeOffer, {
        select: ['id', 'offerId', 'amount', 'tokenFilter', 'state'],
        relations: {
            tokenFilter: true,
        }
    })

    await job.log(`Found ${stakeExchangeOffers.length} stake exchange offers`)

    const offerEvents = await em
        .createQueryBuilder(Event, 'event')
        .where('event.name IN (:...names)', {
            names: [
                StakeExchangeOfferCreated.name,
                StakeExchangeOfferCancelled.name,
                StakeExchangeBuyOrderCompleted.name,
                StakeExchangeLiquidityAdded.name,
                StakeExchangeLiquidityWithdrawn.name,
            ],
        })
        .orderBy('event.id', 'ASC')
        .getMany()

    await job.log(`Found ${offerEvents.length} offer events`)

    for (const stakeExchangeOffer of stakeExchangeOffers) {
        await job.log(`Processing offer ${stakeExchangeOffer.offerId.toString()}`)
        const offerIdEvents = offerEvents.filter(
            (offerEvent) =>
                (
                    offerEvent.data as
                        | StakeExchangeOfferCreated
                        | StakeExchangeOfferCancelled
                        | StakeExchangeBuyOrderCompleted
                        | StakeExchangeLiquidityAdded
                        | StakeExchangeLiquidityWithdrawn
                ).offerId === stakeExchangeOffer.offerId
        )
        await job.log(`Init amount `)
        stakeExchangeOffer.amount = 0n

        await job.log(`Processing offer pool`)
        const poolId =
            stakeExchangeOffer.tokenFilter?.type === StakeExchangeTokenFilterType.Whitelist
                ? stakeExchangeOffer.tokenFilter?.value?.map((v) => v?.toString())[0]
                : undefined

        if (poolId) {
            await job.log(`Syncing offer ${stakeExchangeOffer.offerId.toString()} for pool ${poolId}`)
        }

        for (const offerEvent of offerIdEvents) {
            await job.log(`Processing offer event ${offerEvent.id}`)

            if (offerEvent.data?.isTypeOf === StakeExchangeOfferCreated.name) {
                stakeExchangeOffer.amount = (offerEvent.data as StakeExchangeOfferCreated).total

                if (poolId) {
                    offerEvent.data = new StakeExchangeOfferCreated({
                        ...(offerEvent.data as StakeExchangeOfferCreated),
                        pool: poolId,
                    })
                    promises.push(em.save(offerEvent))
                }
            }

            if (poolId && offerEvent.data?.isTypeOf === StakeExchangeOfferCancelled.name) {
                offerEvent.data = new StakeExchangeOfferCancelled({
                    ...(offerEvent.data as StakeExchangeOfferCancelled),
                    total: stakeExchangeOffer.amount,
                    pool: poolId,
                })
                promises.push(em.save(offerEvent))
            }

            if (poolId && offerEvent.data?.isTypeOf === StakeExchangeBuyOrderCompleted.name) {
                offerEvent.data = new StakeExchangeBuyOrderCompleted({
                    ...(offerEvent.data as StakeExchangeBuyOrderCompleted),
                    pool: poolId,
                })
                promises.push(em.save(offerEvent))
            }

            if (offerEvent.data?.isTypeOf === StakeExchangeLiquidityAdded.name && stakeExchangeOffer.amount) {
                stakeExchangeOffer.amount += (offerEvent.data as StakeExchangeLiquidityAdded).amount
            }

            if (offerEvent.data?.isTypeOf === StakeExchangeLiquidityWithdrawn.name && stakeExchangeOffer.amount) {
                stakeExchangeOffer.amount -= (offerEvent.data as StakeExchangeLiquidityWithdrawn).amount
            }
        }

        // check offer pool is still valid
        if (stakeExchangeOffer.tokenFilter?.type === StakeExchangeTokenFilterType.Whitelist) {
            const poolId = stakeExchangeOffer.tokenFilter?.value?.map((v) => v?.toString())[0]
            if (poolId) {
                const pool = await em.findOne(NominationPool, {
                    where: {
                        id: poolId,
                    },
                })
                if (!pool && stakeExchangeOffer.tokenFilter?.value?.length === 1) {
                    stakeExchangeOffer.state = StakeExchangeOfferState.Cancelled
                }
            }
        }

        await job.log(`Saving offer ${stakeExchangeOffer.offerId.toString()}`)

        promises.push(em.save(stakeExchangeOffer))
    }

    await Promise.all(promises)

    await job.log(`Synced ${stakeExchangeOffers.length} stake exchange offers`)
}
