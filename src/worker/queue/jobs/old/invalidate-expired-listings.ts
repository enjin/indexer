// import Queue from 'bullmq'
// import { Brackets } from 'typeorm'
// import connection from '../../../../connection'
// import { Listing, ListingType } from '../../../../model'
//
// export default async (job: Queue.Job, done: Queue.DoneCallback) => {
//     if (!connection.isInitialized) {
//         await connection.initialize().catch((err) => {
//             throw err
//         })
//     }
//
//     connection.manager.transaction('READ COMMITTED', async (em) => {
//         const status: { height: number }[] = await em.query(`SELECT height FROM squid_processor.status WHERE id = 0`)
//         if (status.length === 0) {
//             done(null, null)
//         }
//
//         const { height } = status[0]
//         const q = await em
//             .getRepository(Listing)
//             .createQueryBuilder('listing')
//             .update()
//             .set({ isActive: false })
//             .where('listing.is_active = true')
//             .andWhere('listing.type IN (:...types)', { types: [ListingType.Auction, ListingType.Offer] })
//             .andWhere(
//                 new Brackets((qb) => {
//                     qb.where("listing.type = :auctionType AND (listing.data->>'endHeight')::int < :height", {
//                         auctionType: ListingType.Auction,
//                         height,
//                     }).orWhere("listing.type = :offerType AND (listing.data->>'expiration')::int < :height", {
//                         offerType: ListingType.Offer,
//                         height,
//                     })
//                 })
//             )
//             .returning('id')
//             .execute()
//
//         done(null, { at: height, affected: q.affected, raw: q.raw })
//     })
// }
