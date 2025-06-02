import { connectionManager } from '../../contexts'
import { AccountTokenEvent, AccountTokenEventAttribute, Token } from '../../model'
import { Job } from 'bullmq'

export async function syncAttributes(_job: Job, tokenId: string) {
    const em = await connectionManager()

    const token = await em
        .getRepository(Token)
        .createQueryBuilder('token')
        .select('token.id')
        .addSelect('token.attributes')
        .where('token.id = :tokenId', { tokenId })
        .getOne()

    const events = await em
        .getRepository(AccountTokenEvent)
        .createQueryBuilder('event')
        .select('event.tokenId')
        .where('event.tokenId = :tokenId', { tokenId })
        .getMany()

    if (!token) {
        return
    }

    const attributes = token.attributes

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
