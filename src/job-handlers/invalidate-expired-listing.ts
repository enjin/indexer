import Queue from 'bull'
import connection from '../connection'
import { Listing, ListingType } from '../model'

export default async (job: Queue.Job, done: Queue.DoneCallback) => {
    if (!connection.isInitialized) {
        await connection.initialize().catch((err) => {
            throw err
        })
    }

    const em = connection.manager

    const status: { height: number }[] = await em.query(`SELECT height FROM squid_processor.status WHERE id = 0`)
    if (status.length === 0) {
        done(null, null)
    }
    const { height } = status[0]

    const ff = await em
        .getRepository(Listing)
        .createQueryBuilder('listing')
        .update()
        .set({ isActive: false })
        .where('listing.type = :type', { type: ListingType.Auction })
        .andWhere('listing.data < :block', { block: block.height - period })

    done(null, { at: height, updated: 0 })
}
