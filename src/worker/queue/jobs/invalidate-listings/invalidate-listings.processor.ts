import { Job } from 'bullmq'
import { ProcessorDef } from '../processor.def'
import { connectionManager } from '../../../../contexts'
import { Listing, ListingType } from '../../../../model'
import { Brackets } from 'typeorm'

export class InvalidateListingsProcessor implements ProcessorDef {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async handle(job: Job): Promise<void> {
        const con = await connectionManager()

        await con.transaction('READ COMMITTED', async (em) => {
            const status: { height: number }[] = await em.query(
                `SELECT height FROM squid_processor.status WHERE id = 0`
            )
            if (status.length === 0) {
                // done(null, null)
            }

            const { height } = status[0]
            await em
                .getRepository(Listing)
                .createQueryBuilder('listing')
                .update()
                .set({ isActive: false })
                .where('listing.is_active = true')
                .andWhere('listing.type IN (:...types)', { types: [ListingType.Auction, ListingType.Offer] })
                .andWhere(
                    new Brackets((qb) => {
                        qb.where("listing.type = :auctionType AND (listing.data->>'endHeight')::int < :height", {
                            auctionType: ListingType.Auction,
                            height,
                        }).orWhere("listing.type = :offerType AND (listing.data->>'expiration')::int < :height", {
                            offerType: ListingType.Offer,
                            height,
                        })
                    })
                )
                .returning('id')
                .execute()

            // done(null, { at: height, affected: q.affected, raw: q.raw })
        })
    }

    async failed(job?: Job) {
        if (!job) {
            return
        }

        await job.log('Failed to compute collections')
    }

    async completed(job: Job) {
        await job.log('Finished computing collections')
    }
}

export default new InvalidateListingsProcessor()
