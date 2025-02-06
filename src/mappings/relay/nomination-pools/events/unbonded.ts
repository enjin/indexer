import { events, calls } from '../../../types/generated'
import { CommonContext, BlockHeader, EventItem, CallItem } from '../../types/contexts'
import { UnknownVersionError } from '../../../common/errors'
import { Event as EventModel, Extrinsic, PoolMember, UnbondingEras, NominationPoolsUnBonded } from '../../../model'
import { getOrCreateAccount } from '../../util/entities'
import { updatePool } from '../pool'
import { Sns } from '../../../common/sns'

function getUnboundDepositCall(call: CallItem) {
    if (calls.nominationPools.unbondDeposit.enjinV100.is(call)) {
        return calls.nominationPools.unbondDeposit.enjinV100.decode(call)
    }

    throw new UnknownVersionError(calls.nominationPools.unbondDeposit.name)
}

function getCallData(call: CallItem) {
    if (call.name === 'NominationPools.unbond_deposit') {
        return getUnboundDepositCall(call)
    }

    if (calls.nominationPools.unbond.enjinV100.is(call)) {
        return calls.nominationPools.unbond.enjinV100.decode(call)
    }

    throw new UnknownVersionError(calls.nominationPools.unbond.name)
}

function getEventData(event: EventItem) {
    if (events.nominationPools.unbonded.enjinV100.is(event)) {
        return events.nominationPools.unbonded.enjinV100.decode(event)
    }

    throw new UnknownVersionError(events.nominationPools.unbonded.name)
}

function getEvent(item: EventItem, data: ReturnType<typeof getEventData>) {
    return new EventModel({
        id: item.id,
        name: NominationPoolsUnBonded.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new NominationPoolsUnBonded({
            pool: data.poolId.toString(),
            account: data.member,
            unbondingPoints: data.points,
            balance: data.balance,
            era: data.era,
        }),
    })
}

export async function unbonded(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<EventModel | undefined> {
    if (!item.extrinsic) return undefined
    if (!item.extrinsic.call) return undefined

    const eventData = getEventData(item)
    const callData = getCallData(item.extrinsic.call)

    if (!eventData || !callData) return undefined

    const pool = await updatePool(ctx, block, eventData.poolId.toString())
    const account = await getOrCreateAccount(ctx, eventData.member)
    const poolMember = await ctx.store.findOne(PoolMember, {
        relations: { tokenAccount: true },
        where: { id: `${pool.id}-${account.id}` },
    })
    // TODO: prefer findOrfail but using findOne because of a weird case in canary,
    // when pool deposit is unbonded, the member becomes stash account but on bonded it's pool creator

    if (!poolMember) return undefined

    poolMember.bonded -= eventData.balance
    if (poolMember.tokenAccount?.totalBalance === 0n) {
        poolMember.bonded = 0n
    }

    poolMember.unbondingEras = (poolMember.unbondingEras || []).concat([
        new UnbondingEras({ era: eventData.era, balance: eventData.balance }),
    ])

    await Promise.all([ctx.store.save(pool), ctx.store.save(poolMember)])
    await Sns.getInstance().send({
        id: item.id,
        name: item.name,
        body: {
            pool: pool.id,
            account: account.id,
            balance: eventData.balance,
            unbondingPoints: eventData.points,
            extrinsic: item.extrinsic.id,
        },
    })

    return getEvent(item, eventData)
}
