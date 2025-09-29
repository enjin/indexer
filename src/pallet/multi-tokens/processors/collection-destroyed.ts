import {
    AccountStats,
    AccountTokenEvent,
    Attribute,
    Collection,
    CollectionAccount,
    RoyaltyCurrency,
    Trait,
} from '~/model'
import { SnsEvent } from '~/util/sns'
import * as mappings from '~/pallet/index'
import { Block, CommonContext, EventItem } from '~/contexts'
import { EventHandlerResult } from '~/processor.handler'

export async function collectionDestroyed(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave: boolean
): Promise<EventHandlerResult> {
    const data = mappings.multiTokens.events.collectionDestroyed(item)
    if (skipSave) return [mappings.multiTokens.events.collectionDestroyedEventModel(item, data), undefined]

    const collectionId = data.collectionId.toString()
    const collection = await ctx.store.findOne(Collection, { where: { id: collectionId }, relations: { owner: true } })

    if (!collection) {
        return [mappings.multiTokens.events.collectionDestroyedEventModel(item, data), undefined]
    }

    const [accountTokenEvents, collectionAccounts, traits, royaltyCurrencies, attributes] = await Promise.all([
        ctx.store.find(AccountTokenEvent, {
            where: {
                collection: {
                    id: collection.id,
                },
            },
        }),
        ctx.store.find(CollectionAccount, {
            where: {
                collection: {
                    id: collection.id,
                },
            },
        }),
        ctx.store.find(Trait, { where: { collection: { id: collectionId } } }),
        ctx.store.find(RoyaltyCurrency, { where: { collection: { id: collectionId } } }),
        ctx.store.find(Attribute, { where: { collection: { id: collectionId } } }),
    ])

    const events = accountTokenEvents.map((e: AccountTokenEvent): AccountTokenEvent => {
        e.token = null
        return e
    })

    await Promise.all([
        ctx.store.remove(events),
        ctx.store.remove(collectionAccounts),
        ctx.store.remove(traits),
        ctx.store.remove(royaltyCurrencies),
        ctx.store.remove(attributes),
        ctx.store.remove(collection),
    ])

    const account = collection.owner
    if (!account.stats) {
        account.stats = new AccountStats({
            totalCollections: 0,
            totalTokens: 0,
            volume: 0n,
        })
    }

    account.stats.totalCollections--
    await ctx.store.save(account)

    const snsEvent: SnsEvent = {
        id: item.id,
        name: item.name,
        body: {
            collectionId: data.collectionId,
            caller: data.caller,
            extrinsic: item.extrinsic?.id,
        },
    }

    return [mappings.multiTokens.events.collectionDestroyedEventModel(item, data), snsEvent]
}
