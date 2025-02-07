import { hexToString } from '@polkadot/util'
import { UnknownVersionError } from '../../../common/errors'
import {
    BonusCycle,
    Commission,
    Event as EventModel,
    Extrinsic,
    NominationPool,
    NominationPoolsCreated,
    PoolBalance,
    PoolState,
    Token,
} from '../../../model'
import { events, calls, storage } from '../../../types/generated'
import { CommonContext, BlockHeader, EventItem, CallItem } from '../../types/contexts'

function getCallData(call: CallItem) {
    if (calls.nominationPools.create.enjinV1023.is(call)) {
        return calls.nominationPools.create.enjinV1023.decode(call)
    }

    if (calls.nominationPools.create.enjinV110.is(call)) {
        return calls.nominationPools.create.enjinV110.decode(call)
    }

    if (calls.nominationPools.create.enjinV100.is(call)) {
        return calls.nominationPools.create.enjinV100.decode(call)
    }

    if (calls.nominationPools.create.v1023.is(call)) {
        return calls.nominationPools.create.v1023.decode(call)
    }

    if (calls.nominationPools.create.v110.is(call)) {
        return calls.nominationPools.create.v110.decode(call)
    }

    if (calls.nominationPools.create.v102.is(call)) {
        return calls.nominationPools.create.v102.decode(call)
    }

    if (calls.nominationPools.create.v101.is(call)) {
        return calls.nominationPools.create.v101.decode(call)
    }

    throw new UnknownVersionError(calls.nominationPools.create.name)
}

function getEventData(event: EventItem) {
    if (events.nominationPools.created.enjinV100.is(event)) {
        return events.nominationPools.created.enjinV100.decode(event)
    }

    if (events.nominationPools.created.v101.is(event)) {
        return events.nominationPools.created.v101.decode(event)
    }

    if (events.nominationPools.created.v100.is(event)) {
        return events.nominationPools.created.v100.decode(event)
    }

    throw new UnknownVersionError(events.nominationPools.created.name)
}

function getCurrentEra(ctx: CommonContext, block: BlockHeader) {
    if (storage.staking.currentEra.enjinV100.is(block)) {
        return storage.staking.currentEra.enjinV100.get(block)
    }

    throw new UnknownVersionError('Staking.CurrentEra')
}

function getEvent(item: EventItem, data: ReturnType<typeof getEventData>) {
    return new EventModel({
        id: item.id,
        name: NominationPoolsCreated.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new NominationPoolsCreated({
            pool: data.poolId.toString(),
        }),
    })
}

export async function created(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<EventModel | undefined> {
    if (!item.extrinsic || !item.call) return undefined

    const eventData = getEventData(item)
    const callData = getCallData(item.call)

    if (!eventData || !callData) return undefined

    const currentEraInfo = await getCurrentEra(ctx, block)

    if (!currentEraInfo) {
        throw new Error('Active era info is not provided')
    }

    const pool = new NominationPool({
        id: eventData.poolId.toString(),
        points: 0n, // update at bonded event
        state: PoolState.Open,
        name: 'name' in callData ? hexToString(callData.name as string) : '',
        commission: new Commission(),
        deposit: callData.deposit,
        tokenId: callData.tokenId,
        degenToken: new Token({ id: `2-${callData.tokenId}` }),
        capacity: eventData.capacity,
        saturation: 0n,
        availableStakeAmount: eventData.capacity,
        availableStakePoints: eventData.capacity,
        balance: new PoolBalance({
            stash: 0n,
            reward: 0n,
            bonus: 0n,
            active: 0n,
        }),
        bonusCycle: new BonusCycle({
            start: currentEraInfo,
            end: currentEraInfo + callData.duration,
        }),
        apy: 0,
        rate: 1000_000_000_000_000_000n,
        historicalApy: 0,
        slashes: [],
        totalMembers: 0,
        createdAt: new Date(block.timestamp ?? 0),
        createdBlock: block.height,
    })

    await ctx.store.insert(pool)

    return getEvent(item, eventData)
}
