import { AccountTokenEvent, Collection, Event as EventModel, Extrinsic, MultiTokensClaimedCollections } from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import { getOrCreateAccount } from '~/util/entities'
import { SnsEvent } from '~/util/sns'
import * as mappings from '~/pallet/index'

export async function claimedCollections(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<[EventModel, AccountTokenEvent | SnsEvent | undefined]> {
    const data = mappings.multiTokens.events.claimedCollections(item)
    const account = await getOrCreateAccount(ctx, data.accountId)

    const promises = data.collectionIds.map((id) => {
        const collectionId = typeof id == 'bigint' ? id : id.native
        return ctx.store.findOneBy<Collection>(Collection, { id: collectionId.toString() })
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

    const snsEvent: SnsEvent = {
        id: item.id,
        name: item.name,
        body: {
            id: item.id,
            name: item.name,
            body: {
                account: data.accountId,
                ethAccount: data.ethereumAddress,
                extrinsic: item.extrinsic?.id,
            },
        },
    }

    return [
        new EventModel({
            id: item.id,
            name: MultiTokensClaimedCollections.name,
            extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
            data: new MultiTokensClaimedCollections({
                account: data.accountId,
                ethAccount: data.ethereumAddress,
                collectionIds: data.collectionIds.map((id) => {
                    return typeof id == 'bigint' ? id : id.native
                }),
            }),
        }),
        snsEvent,
    ]
}
