import { generateAccountTokenEventAttributes } from '../../util/event'
import { connectionManager } from '../../contexts'
import { AccountTokenEvent, Attribute } from '../../model'
import { Job } from 'bullmq'

export async function syncAttributes(_job: Job, tokenId: string) {
    const em = await connectionManager()

    const attributes = await em
        .getRepository(Attribute)
        .createQueryBuilder('attribute')
        .addSelect('attribute.id')
        .addSelect('attribute.key')
        .addSelect('attribute.value')
        .where('attribute.token_id = :tokenId', { tokenId })
        .getMany()

    const events = await em
        .getRepository(AccountTokenEvent)
        .createQueryBuilder('event')
        .select('event.id')
        .addSelect('event.token_id')
        .addSelect('event.attributes')
        .where('event.token_id = :tokenId', { tokenId })
        .getMany()

    const tokenAttributes = generateAccountTokenEventAttributes(attributes)
    events.forEach((event) => {
        if (attributes?.length) {
            event.attributes = tokenAttributes;
        } else {
            event.attributes = [];
        }
    })

    await em.save(events)
}
