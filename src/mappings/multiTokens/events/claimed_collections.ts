import { UnsupportedEventError } from '../../../common/errors'
import { events } from '../../../types/generated'
import { Collection, Event as EventModel, Extrinsic, MultiTokensClaimedCollections } from '../../../model'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'
import { Sns } from '../../../common/sns'

function getEventData(ctx: CommonContext, event: EventItem) {
    if (events.multiTokens.claimedCollections.matrixEnjinV1000.is(event)) {
        return events.multiTokens.claimedCollections.matrixEnjinV1000.decode(event)
    }

    throw new UnsupportedEventError(events.multiTokens.claimedCollections.name)
}

export async function claimedCollections(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem
): Promise<EventModel | undefined> {
    const data = getEventData(ctx, item)
    if (!data) return undefined

    const account = await getOrCreateAccount(ctx, data.accountId)

    const promises = data.collectionIds.map((id) => {
        return ctx.store.findOneBy(Collection, { id: id.toString() })
    })

    const collections = await Promise.all(promises)

    const savePromises = collections.map((collection) => {
        if (collection) {
            collection.owner = account

            return ctx.store.save(collection)
        }

        return Promise.resolve()
    })

    await Promise.all(savePromises)

    if (item.extrinsic) {
        Sns.getInstance().send({
            id: item.id,
            name: item.name,
            body: {
                account: data.accountId,
                ethAccount: data.ethereumAddress,
                extrinsic: item.extrinsic.id,
            },
        })
    }

    return new EventModel({
        id: item.id,
        name: MultiTokensClaimedCollections.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new MultiTokensClaimedCollections({
            account: data.accountId,
            ethAccount: data.ethereumAddress,
            collectionIds: data.collectionIds.map((id) => id),
        }),
    })
}
