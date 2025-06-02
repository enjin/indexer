import { connectionManager } from '../../contexts'
import { AccountTokenEvent, AccountTokenEventAttribute, Attribute, Token } from '../../model'
import { Job } from 'bullmq'

export async function syncAttributes(_job: Job, tokenId: string) {
    const em = await connectionManager()

    const token = await em
        .getRepository(Token)
        .createQueryBuilder('token')
        .select('token.id')
        .innerJoin(Attribute, 'attribute', 'attribute.token_id = token.id')
        .addSelect('attribute.id')
        .addSelect('attribute.key')
        .addSelect('attribute.value')
        .where('token.id = :tokenId', { tokenId })
        .getOne()

    const events = await em
        .getRepository(AccountTokenEvent)
        .createQueryBuilder('event')
        .select('event.token_id')
        .where('event.token_id = :tokenId', { tokenId })
        .getMany()

    await _job.log(`Found ${events.length} events for token ${tokenId}`)
    await _job.log(`Found ${token?.attributes?.length} attributes for token ${tokenId}`)

    if (!token) {
        return
    }

    events.forEach((event) => {
        if (token.attributes?.length) {
            event.attributes = token.attributes.map((attribute) => {
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
