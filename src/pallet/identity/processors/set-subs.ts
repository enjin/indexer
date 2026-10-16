import { hexToString } from '@polkadot/util'
import { Event as EventModel, Identity, Registration } from '~/model'
import { Block, CallItem, CommonContext, EventItem } from '~/contexts'
import { getOrCreateAccount, unwrapSigner } from '~/util/entities'
import * as mappings from '~/pallet/index'
import { safeString } from '~/util/tools'
import { Data } from '~/pallet/common/types'

export const SUB_IDENTITIES_SET_EVENT = 'Identity.SubIdentitiesSet'

export function subIdentityName(data: Data | undefined): string | null {
    if (!data || data.__kind === 'None') return null
    return safeString(hexToString(data.value))
}

/**
 * Account a call was dispatched as. Archive call origins look like
 * `{ __kind: 'system', value: { __kind: 'Signed', value: '0x…' } }`; under a proxy or multisig this is
 * the real/multisig account rather than the extrinsic signer. Returns `null` for any other origin.
 */
export function signedOrigin(origin: unknown): string | null {
    if (typeof origin !== 'object' || origin === null) return null
    const { __kind: kind, value } = origin as { __kind?: unknown; value?: unknown }
    if (kind !== 'system' || typeof value !== 'object' || value === null) return null
    const inner = value as { __kind?: unknown; value?: unknown }
    return inner.__kind === 'Signed' && typeof inner.value === 'string' ? inner.value : null
}

/**
 * Makes `subs` (account, name) the complete list of sub-identities of `main`: subs no longer listed are
 * detached (a plain sub is removed, an account with its own identity just loses its `super`), listed ones
 * are created or re-pointed at `main` with the given name (a plain sub also takes `main`'s registration).
 */
export async function applySubIdentities(
    ctx: CommonContext,
    block: Block,
    main: string,
    subs: [string, string | null][]
): Promise<void> {
    const listed = new Set(subs.map(([id]) => id))
    const current = await ctx.store.find<Identity>(Identity, {
        where: { super: { id: main } },
        relations: {
            info: true,
        },
    })

    await Promise.all(
        current
            .filter((sub) => !listed.has(sub.id))
            .map(async (sub) => {
                if (sub.isSub) return ctx.store.remove(sub)
                sub.super = null
                sub.name = sub.info.display || sub.info.legal
                return ctx.store.save(sub)
            })
    )

    const identities = await Promise.all(
        subs.map(async ([id, name]) => {
            const [account, existing] = await Promise.all([
                getOrCreateAccount(ctx, id),
                ctx.store.findOneBy<Identity>(Identity, { id }),
            ])

            if (existing) {
                existing.super = new Identity({ id: main })
                existing.name = name
                // A plain sub inherits its registration from its super; one with its own identity keeps it.
                if (existing.isSub) existing.info = new Registration({ id: main })
                return existing
            }

            return new Identity({
                id: account.id,
                account,
                name,
                super: new Identity({ id: main }),
                isSub: true,
                info: new Registration({ id: main }),
                createdAt: new Date(block.timestamp ?? 0),
            })
        })
    )

    await ctx.store.save(identities)
}

/**
 * `Identity.SubIdentitiesSet { main, number_of_subs, new_deposit }`: the event carries no sub list, so
 * the subs and their names are read from `SubsOf(main)` / `SuperOf(sub)` at the block.
 */
export async function subIdentitiesSet(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<EventModel | undefined> {
    const { main } = mappings.identity.events.subIdentitiesSet(item)

    const subIds = await mappings.identity.storage.subsOf(block, main)
    const supers = subIds.length > 0 ? await mappings.identity.storage.superOfMany(block, subIds) : []

    await applySubIdentities(
        ctx,
        block,
        main,
        subIds.map((id, i) => [id, subIdentityName(supers[i]?.[1])])
    )

    return undefined
}

/**
 * `set_subs` for runtimes that predate `SubIdentitiesSet`; newer runtimes are handled by the event.
 * The main account is the call's origin, not the extrinsic signer (they differ under proxy/multisig).
 */
export async function setSubs(ctx: CommonContext, block: Block, item: CallItem): Promise<EventModel | undefined> {
    if (block._runtime.hasEvent(SUB_IDENTITIES_SET_EVENT)) return undefined

    const main = item.origin !== undefined ? signedOrigin(item.origin) : item.extrinsic && unwrapSigner(item.extrinsic)
    if (!main) {
        ctx.log.warn(`Identity.set_subs ${item.id}: no signed origin, skipping`)
        return undefined
    }

    const call = mappings.identity.calls.setSubs(item)
    const signer = await getOrCreateAccount(ctx, main)

    await applySubIdentities(
        ctx,
        block,
        signer.id,
        call.subs.map(([id, data]) => [id, subIdentityName(data)])
    )

    return undefined
}
