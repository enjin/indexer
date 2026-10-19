import { Event as EventModel, Identity, Registration } from '~/model'
import { Block, CallItem, CommonContext, EventItem } from '~/contexts'
import { getOrCreateAccount } from '~/util/entities'
import * as mappings from '~/pallet/index'
import { subIdentityName } from '~/pallet/identity/processors/set-subs'

export const SUB_IDENTITY_RENAMED_EVENT = 'Identity.SubIdentityRenamed'

async function setSubName(
    ctx: CommonContext,
    block: Block,
    subId: string,
    main: string | null,
    name: string | null
): Promise<void> {
    const sub = await ctx.store.findOneBy<Identity>(Identity, { id: subId })

    if (sub) {
        sub.name = name
        if (main) sub.super = new Identity({ id: main })
        await ctx.store.save(sub)
        return
    }

    if (!main) {
        ctx.log.warn(`Identity.rename_sub: sub-identity ${subId} is not indexed, skipping`)
        return
    }

    const account = await getOrCreateAccount(ctx, subId)
    await ctx.store.save(
        new Identity({
            id: account.id,
            account,
            name,
            super: new Identity({ id: main }),
            isSub: true,
            info: new Registration({ id: main }),
            createdAt: new Date(block.timestamp ?? 0),
        })
    )
}

/** `Identity.SubIdentityRenamed { sub, main }`: the new name is read from `SuperOf(sub)` at the block. */
export async function subIdentityRenamed(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<EventModel | undefined> {
    const { sub, main } = mappings.identity.events.subIdentityRenamed(item)
    const [superOf] = await mappings.identity.storage.superOfMany(block, [sub])

    if (!superOf) {
        ctx.log.warn(`Identity.SubIdentityRenamed ${item.id}: SuperOf(${sub}) is empty, skipping`)
        return undefined
    }

    await setSubName(ctx, block, sub, main, subIdentityName(superOf[1]))

    return undefined
}

/** `rename_sub` for runtimes that predate `SubIdentityRenamed`; newer runtimes are handled by the event. */
export async function renameSub(ctx: CommonContext, block: Block, item: CallItem): Promise<EventModel | undefined> {
    if (block._runtime.hasEvent(SUB_IDENTITY_RENAMED_EVENT)) return undefined

    const call = mappings.identity.calls.renameSub(item)

    const id = call.sub.__kind !== 'Index' ? call.sub.value : null

    if (!id) return undefined

    await setSubName(ctx, block, id, null, subIdentityName(call.data))

    return undefined
}
