import { SubstrateBlock } from '@subsquid/substrate-processor'
import { CallItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { hexToU8a, u8aToString } from '@polkadot/util'
import { UnknownVersionError } from '../../../common/errors'
import { Event as EventModel, Identity, Registration } from '../../../model'
import { Call } from '../../../types/generated/support'
import { CommonContext } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'
import { IdentitySetSubsCall } from '../../../types/generated/calls'

function getCallData(ctx: CommonContext, call: Call) {
    const data = new IdentitySetSubsCall(ctx, call)

    if (data.isMatrixEnjinV1000) {
        return data.asMatrixEnjinV1000
    }

    throw new UnknownVersionError(data.constructor.name)
}

export async function setSubs(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: CallItem<'Identity.set_subs', { call: true; extrinsic: true }>
): Promise<EventModel | undefined> {
    const callData = getCallData(ctx, item.call)

    if (!item.extrinsic.signature) {
        throw new Error('No signature')
    }

    const pk =
        item.extrinsic.signature.address.__kind === 'Id' || item.extrinsic.signature.address.__kind === 'AccountId'
            ? item.extrinsic.signature.address.value
            : item.extrinsic.signature.address

    const signer = await getOrCreateAccount(ctx as unknown as CommonContext, hexToU8a(pk))

    const identities = await Promise.all(
        callData.subs.map(async (sub) => {
            const account = await getOrCreateAccount(ctx, sub[0])

            const identity = new Identity({
                id: account.id,
                account,
                name: sub[1].__kind !== 'None' ? u8aToString(sub[1].value) : null,
                super: new Identity({ id: signer.id }),
                isSub: true,
                info: new Registration({ id: signer.id }),
                createdAt: new Date(block.timestamp),
            })

            return identity
        })
    )

    await ctx.store.save(identities)

    return undefined
}
