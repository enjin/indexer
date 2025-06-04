import { connectionManager } from '../../contexts'
import { AccountTokenEvent, Attribute } from '../../model'
import { Job } from 'bullmq'

export async function syncAttributes(_job: Job, tokenId: string | undefined, collectionId: string | undefined) {
    const em = await connectionManager()

    const tokenAttributes = tokenId
        ? await em
              .getRepository(Attribute)
              .createQueryBuilder('attribute')
              .addSelect('attribute.id')
              .addSelect('attribute.key')
              .addSelect('attribute.value')
              .where('attribute.token_id = :tokenId', { tokenId })
              .getMany()
        : []

    const collectionAttributes = collectionId
        ? await em
              .getRepository(Attribute)
              .createQueryBuilder('attribute')
              .addSelect('attribute.id')
              .addSelect('attribute.key')
              .addSelect('attribute.value')
              .where('attribute.collection_id = :collectionId', { collectionId })
              .getMany()
        : []

    const events = await em
        .getRepository(AccountTokenEvent)
        .createQueryBuilder('event')
        .select('event.id')
        .addSelect('event.token_id')
        .addSelect('event.attributes')
        .where('event.token_id = :tokenId', { tokenId })
        .getMany()

    events.forEach((event) => {
        // if (tokenId) {
        //     if (tokenAttributes?.length && event.token) {
        //         event.token.attributes = tokenAttributesData
        //     } else if (event.token) {
        //         event.token.attributes = []
        //     }
        // }
        //
        // if (collectionAttributes?.length && event.collection) {
        //     event.collection.attributes = collectionAttributesData
        // } else if (event.collection) {
        //     event.collection.attributes = []
        // }
    })

    await em.save(events)
}
