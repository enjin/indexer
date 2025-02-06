import { hexToString, hexToU8a } from '@polkadot/util'
import { UnsupportedEventError } from '../../../common/errors'
import { Event as EventModel, Identity, Registration } from '../../../model'
import { CommonContext, BlockHeader, CallItem } from 'matrixchain-indexer/common/types/contexts'
import { getOrCreateAccount } from '../../common/util/entities'
import { identity } from '../../../types/generated/calls'

export async function setSubs(ctx: CommonContext, block: BlockHeader, item: CallItem): Promise<EventModel | undefined> {
    const callData = mappings.identity.calls.setSubs(item)

    if (!item.extrinsic!.signature) {
        throw new Error('No signature')
    }

    const pk =
        (item.extrinsic!.signature.address as any).__kind === 'Id' ||
        (item.extrinsic!.signature.address as any).__kind === 'AccountId'
            ? (item.extrinsic!.signature.address as any).value
            : item.extrinsic!.signature.address

    const signer = await getOrCreateAccount(ctx as unknown as CommonContext, hexToU8a(pk))

    const subIdentities = await ctx.store.find(Identity, {
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
        callData.subs.map(async (sub) => {
            const [account, existing] = await Promise.all([
                getOrCreateAccount(ctx, sub[0]),
                ctx.store.findOneBy(Identity, { id: sub[0] }),
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
