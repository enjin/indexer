import { hexToString } from '@polkadot/util'
import { Event as EventModel, Identity, Registration } from '../../../model'
import { Block, CallItem, CommonContext } from '../../../contexts'
import { getOrCreateAccount, unwrapSigner } from '../../../util/entities'
import * as mappings from '../../index'

export async function setSubs(ctx: CommonContext, block: Block, item: CallItem): Promise<EventModel | undefined> {
    if (!item.extrinsic?.signature) {
        throw new Error('No signature')
    }

    // This is set on sub-identity set
    const call = mappings.identity.calls.setSubs(item)
    const pk = unwrapSigner(item.extrinsic)
    const signer = await getOrCreateAccount(ctx, pk)

    const subIdentities = await ctx.store.find<Identity>(Identity, {
        where: { super: { id: signer.id } },
        relations: {
            info: true,
        },
    })

    await Promise.all(
        subIdentities.map(async (sub) => {
            if (sub.isSub) return ctx.store.remove(sub)
            sub.super = null
            sub.name = sub.info.display || sub.info.legal
            return ctx.store.save(sub)
        })
    )

    const identities = await Promise.all(
        call.subs.map(async (sub) => {
            const [account, existing] = await Promise.all([
                getOrCreateAccount(ctx, sub[0]),
                ctx.store.findOneBy<Identity>(Identity, { id: sub[0] }),
            ])

            if (existing) {
                existing.super = new Identity({ id: signer.id })
                existing.name = sub[1].__kind !== 'None' ? hexToString(sub[1].value) : null
                return existing
            }

            return new Identity({
                id: account.id,
                account,
                name: sub[1].__kind !== 'None' ? hexToString(sub[1].value) : null,
                super: new Identity({ id: signer.id }),
                isSub: true,
                info: new Registration({ id: signer.id }),
                createdAt: new Date(block.timestamp ?? 0),
            })
        })
    )

    await ctx.store.save(identities)

    return undefined
}
