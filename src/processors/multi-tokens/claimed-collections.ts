import { Collection, Event as EventModel, Extrinsic, MultiTokensClaimedCollections } from '../../model'
import { BlockHeader, CommonContext, EventItem } from '../../common/types/contexts'
import { getOrCreateAccount } from '../../common/util/entities'
import { Sns } from '../../common/sns'
import * as mappings from './../../mappings'

export async function claimedCollections(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem
): Promise<EventModel | undefined> {
    const data = mappings.multiTokens.events.claimedCollections(item)

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
        await Sns.getInstance().send({
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
