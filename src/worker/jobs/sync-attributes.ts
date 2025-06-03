import { connectionManager } from '../../contexts'
import { AccountTokenEvent, AccountTokenEventAttribute, Attribute, Token } from '../../model'
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
        .select('event.token_id')
        .addSelect('event.attributes')
        .where('event.token_id = :tokenId', { tokenId })
        .getMany()

    await _job.log(`Found ${events.length} events for token ${tokenId}`)
    await _job.log(`Found ${attributes?.length} attributes for token ${tokenId}`)

    events.forEach((event) => {
        if (attributes?.length) {
            event.attributes = attributes.map((attribute) => {
                return new AccountTokenEventAttribute({
                    id: attribute.id,
                    key: attribute.key,
                    value: attribute.value,
                })
            })
        } else {
            event.attributes = []
        }
    })

    await em.save(events)
}
