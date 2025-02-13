import { sts, Block, Bytes, Option, Result, EventType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'

export const invalidFormat = {
    name: 'Ump.InvalidFormat',
    /**
     * Upward message is invalid XCM.
     * \[ id \]
     */
    enjinV100: new EventType('Ump.InvalidFormat', sts.bytes()),
}

export const unsupportedVersion = {
    name: 'Ump.UnsupportedVersion',
    /**
     * Upward message is unsupported version of XCM.
     * \[ id \]
     */
    enjinV100: new EventType('Ump.UnsupportedVersion', sts.bytes()),
}

export const executedUpward = {
    name: 'Ump.ExecutedUpward',
    /**
     * Upward message executed with the given outcome.
     * \[ id, outcome \]
     */
    enjinV100: new EventType('Ump.ExecutedUpward', sts.tuple([sts.bytes(), enjinV100.V3Outcome])),
}

export const weightExhausted = {
    name: 'Ump.WeightExhausted',
    /**
     * The weight limit for handling upward messages was reached.
     * \[ id, remaining, required \]
     */
    enjinV100: new EventType('Ump.WeightExhausted', sts.tuple([sts.bytes(), enjinV100.Weight, enjinV100.Weight])),
}

export const upwardMessagesReceived = {
    name: 'Ump.UpwardMessagesReceived',
    /**
     * Some upward messages have been received and will be processed.
     * \[ para, count, size \]
     */
    enjinV100: new EventType('Ump.UpwardMessagesReceived', sts.tuple([enjinV100.Id, sts.number(), sts.number()])),
}

export const overweightEnqueued = {
    name: 'Ump.OverweightEnqueued',
    /**
     * The weight budget was exceeded for an individual upward message.
     *
     * This message can be later dispatched manually using `service_overweight` dispatchable
     * using the assigned `overweight_index`.
     *
     * \[ para, id, overweight_index, required \]
     */
    enjinV100: new EventType(
        'Ump.OverweightEnqueued',
        sts.tuple([enjinV100.Id, sts.bytes(), sts.bigint(), enjinV100.Weight])
    ),
}

export const overweightServiced = {
    name: 'Ump.OverweightServiced',
    /**
     * Upward message from the overweight queue was executed with the given actual weight
     * used.
     *
     * \[ overweight_index, used \]
     */
    enjinV100: new EventType('Ump.OverweightServiced', sts.tuple([sts.bigint(), enjinV100.Weight])),
}
