import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as enjinV100 from '../enjinV100'
import * as v100 from '../v100'
import * as enjinV101 from '../enjinV101'
import * as v101 from '../v101'
import * as v102 from '../v102'
import * as v103 from '../v103'
import * as v104 from '../v104'
import * as v105 from '../v105'
import * as v106 from '../v106'
import * as enjinV110 from '../enjinV110'
import * as v110 from '../v110'
import * as enjinV120 from '../enjinV120'
import * as v120 from '../v120'
import * as matrixV500 from '../matrixV500'
import * as matrixV600 from '../matrixV600'
import * as matrixV601 from '../matrixV601'
import * as matrixV602 from '../matrixV602'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as matrixV604 from '../matrixV604'
import * as matrixEnjinV1000 from '../matrixEnjinV1000'
import * as matrixV1000 from '../matrixV1000'
import * as matrixEnjinV1003 from '../matrixEnjinV1003'
import * as matrixV1003 from '../matrixV1003'
import * as matrixEnjinV1004 from '../matrixEnjinV1004'
import * as matrixV1004 from '../matrixV1004'
import * as matrixEnjinV1005 from '../matrixEnjinV1005'
import * as matrixV1005 from '../matrixV1005'
import * as matrixV1010 from '../matrixV1010'
import * as matrixV1011 from '../matrixV1011'
import * as matrixEnjinV1012 from '../matrixEnjinV1012'
import * as matrixV1012 from '../matrixV1012'
import * as matrixV1020 from '../matrixV1020'
import * as enjinV1021 from '../enjinV1021'
import * as v1021 from '../v1021'
import * as matrixEnjinV1022 from '../matrixEnjinV1022'
import * as matrixV1022 from '../matrixV1022'
import * as enjinV1022 from '../enjinV1022'
import * as v1022 from '../v1022'
import * as enjinV1023 from '../enjinV1023'
import * as v1023 from '../v1023'
import * as enjinV1026 from '../enjinV1026'
import * as v1026 from '../v1026'
import * as v1030 from '../v1030'
import * as v1031 from '../v1031'
import * as enjinV1032 from '../enjinV1032'
import * as v1032 from '../v1032'
import * as enjinV1050 from '../enjinV1050'
import * as v1050 from '../v1050'

export const schedule =  {
    name: 'Scheduler.schedule',
    /**
     * Anonymously schedule a task.
     */
    matrixEnjinV603: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixEnjinV603.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    matrixEnjinV1000: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixEnjinV1000.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    matrixEnjinV1003: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixEnjinV1003.Call,
        })
    ),
    /**
     * See [`Pallet::schedule`].
     */
    matrixEnjinV1004: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixEnjinV1004.Call,
        })
    ),
    /**
     * See [`Pallet::schedule`].
     */
    matrixEnjinV1005: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixEnjinV1005.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    matrixEnjinV1012: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixEnjinV1012.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    matrixEnjinV1022: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixEnjinV1022.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    matrixV500: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixV500.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    matrixV600: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixV600.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    matrixV601: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixV601.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    matrixV602: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixV602.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    matrixV604: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixV604.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    matrixV1000: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixV1000.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    matrixV1003: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixV1003.Call,
        })
    ),
    /**
     * See [`Pallet::schedule`].
     */
    matrixV1004: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixV1004.Call,
        })
    ),
    /**
     * See [`Pallet::schedule`].
     */
    matrixV1005: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixV1005.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    matrixV1010: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixV1010.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    matrixV1011: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixV1011.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    matrixV1012: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixV1012.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    matrixV1020: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixV1020.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    matrixV1022: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixV1022.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    enjinV100: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: enjinV100.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    enjinV101: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: enjinV101.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    enjinV110: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: enjinV110.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    enjinV120: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: enjinV120.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    enjinV1021: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: enjinV1021.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    enjinV1022: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: enjinV1022.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    enjinV1023: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: enjinV1023.Call,
        })
    ),
    /**
     * See [`Pallet::schedule`].
     */
    enjinV1026: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: enjinV1026.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    enjinV1032: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: enjinV1032.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    enjinV1050: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: enjinV1050.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v100: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v100.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v101: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v101.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v102: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v102.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v103: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v103.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v104: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v104.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v105: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v105.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v106: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v106.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v110: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v110.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v120: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v120.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v1021: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1021.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v1022: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1022.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v1023: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1023.Call,
        })
    ),
    /**
     * See [`Pallet::schedule`].
     */
    v1026: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1026.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v1030: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1030.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v1031: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1031.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v1032: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1032.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v1050: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1050.Call,
        })
    ),
}

export const cancel =  {
    name: 'Scheduler.cancel',
    /**
     * Cancel an anonymously scheduled task.
     */
    matrixEnjinV603: new CallType(
        'Scheduler.cancel',
        sts.struct({
            when: sts.number(),
            index: sts.number(),
        })
    ),
}

export const scheduleNamed =  {
    name: 'Scheduler.schedule_named',
    /**
     * Schedule a named task.
     */
    matrixEnjinV603: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixEnjinV603.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    matrixEnjinV1000: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixEnjinV1000.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    matrixEnjinV1003: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixEnjinV1003.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_named`].
     */
    matrixEnjinV1004: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixEnjinV1004.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_named`].
     */
    matrixEnjinV1005: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixEnjinV1005.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    matrixEnjinV1012: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixEnjinV1012.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    matrixEnjinV1022: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixEnjinV1022.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    matrixV500: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixV500.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    matrixV600: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixV600.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    matrixV601: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixV601.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    matrixV602: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixV602.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    matrixV604: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixV604.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    matrixV1000: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixV1000.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    matrixV1003: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixV1003.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_named`].
     */
    matrixV1004: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixV1004.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_named`].
     */
    matrixV1005: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixV1005.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    matrixV1010: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixV1010.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    matrixV1011: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixV1011.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    matrixV1012: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixV1012.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    matrixV1020: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixV1020.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    matrixV1022: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixV1022.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    enjinV100: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: enjinV100.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    enjinV101: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: enjinV101.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    enjinV110: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: enjinV110.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    enjinV120: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: enjinV120.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    enjinV1021: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: enjinV1021.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    enjinV1022: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: enjinV1022.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    enjinV1023: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: enjinV1023.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_named`].
     */
    enjinV1026: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: enjinV1026.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    enjinV1032: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: enjinV1032.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    enjinV1050: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: enjinV1050.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    v100: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v100.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    v101: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v101.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    v102: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v102.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    v103: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v103.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    v104: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v104.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    v105: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v105.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    v106: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v106.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    v110: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v110.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    v120: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v120.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    v1021: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1021.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    v1022: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1022.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    v1023: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1023.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_named`].
     */
    v1026: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1026.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    v1030: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1030.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    v1031: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1031.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    v1032: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1032.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    v1050: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1050.Call,
        })
    ),
}

export const cancelNamed =  {
    name: 'Scheduler.cancel_named',
    /**
     * Cancel a named scheduled task.
     */
    matrixEnjinV603: new CallType(
        'Scheduler.cancel_named',
        sts.struct({
            id: sts.bytes(),
        })
    ),
}

export const scheduleAfter =  {
    name: 'Scheduler.schedule_after',
    /**
     * Anonymously schedule a task after a delay.
     */
    matrixEnjinV603: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixEnjinV603.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    matrixEnjinV1000: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixEnjinV1000.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    matrixEnjinV1003: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixEnjinV1003.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_after`].
     */
    matrixEnjinV1004: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixEnjinV1004.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_after`].
     */
    matrixEnjinV1005: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixEnjinV1005.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    matrixEnjinV1012: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixEnjinV1012.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    matrixEnjinV1022: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixEnjinV1022.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    matrixV500: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixV500.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    matrixV600: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixV600.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    matrixV601: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixV601.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    matrixV602: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixV602.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    matrixV604: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixV604.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    matrixV1000: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixV1000.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    matrixV1003: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixV1003.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_after`].
     */
    matrixV1004: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixV1004.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_after`].
     */
    matrixV1005: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixV1005.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    matrixV1010: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixV1010.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    matrixV1011: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixV1011.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    matrixV1012: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixV1012.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    matrixV1020: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixV1020.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    matrixV1022: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixV1022.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    enjinV100: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: enjinV100.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    enjinV101: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: enjinV101.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    enjinV110: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: enjinV110.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    enjinV120: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: enjinV120.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    enjinV1021: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: enjinV1021.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    enjinV1022: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: enjinV1022.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    enjinV1023: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: enjinV1023.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_after`].
     */
    enjinV1026: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: enjinV1026.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    enjinV1032: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: enjinV1032.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    enjinV1050: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: enjinV1050.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    v100: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v100.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    v101: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v101.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    v102: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v102.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    v103: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v103.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    v104: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v104.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    v105: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v105.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    v106: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v106.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    v110: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v110.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    v120: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v120.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    v1021: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1021.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    v1022: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1022.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    v1023: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1023.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_after`].
     */
    v1026: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1026.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    v1030: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1030.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    v1031: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1031.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    v1032: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1032.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    v1050: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1050.Call,
        })
    ),
}

export const scheduleNamedAfter =  {
    name: 'Scheduler.schedule_named_after',
    /**
     * Schedule a named task after a delay.
     */
    matrixEnjinV603: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixEnjinV603.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    matrixEnjinV1000: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixEnjinV1000.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    matrixEnjinV1003: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixEnjinV1003.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_named_after`].
     */
    matrixEnjinV1004: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixEnjinV1004.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_named_after`].
     */
    matrixEnjinV1005: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixEnjinV1005.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    matrixEnjinV1012: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixEnjinV1012.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    matrixEnjinV1022: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixEnjinV1022.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    matrixV500: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixV500.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    matrixV600: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixV600.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    matrixV601: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixV601.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    matrixV602: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixV602.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    matrixV604: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixV604.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    matrixV1000: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixV1000.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    matrixV1003: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixV1003.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_named_after`].
     */
    matrixV1004: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixV1004.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_named_after`].
     */
    matrixV1005: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixV1005.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    matrixV1010: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixV1010.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    matrixV1011: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixV1011.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    matrixV1012: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixV1012.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    matrixV1020: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixV1020.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    matrixV1022: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: matrixV1022.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    enjinV100: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: enjinV100.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    enjinV101: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: enjinV101.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    enjinV110: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: enjinV110.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    enjinV120: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: enjinV120.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    enjinV1021: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: enjinV1021.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    enjinV1022: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: enjinV1022.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    enjinV1023: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: enjinV1023.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_named_after`].
     */
    enjinV1026: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: enjinV1026.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    enjinV1032: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: enjinV1032.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    enjinV1050: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: enjinV1050.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    v100: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v100.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    v101: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v101.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    v102: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v102.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    v103: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v103.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    v104: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v104.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    v105: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v105.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    v106: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v106.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    v110: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v110.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    v120: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v120.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    v1021: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1021.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    v1022: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1022.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    v1023: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1023.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_named_after`].
     */
    v1026: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1026.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    v1030: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1030.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    v1031: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1031.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    v1032: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1032.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    v1050: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1050.Call,
        })
    ),
}

export const setRetry =  {
    name: 'Scheduler.set_retry',
    /**
     * Set a retry configuration for a task so that, in case its scheduled run fails, it will
     * be retried after `period` blocks, for a total amount of `retries` retries or until it
     * succeeds.
     * 
     * Tasks which need to be scheduled for a retry are still subject to weight metering and
     * agenda space, same as a regular task. If a periodic task fails, it will be scheduled
     * normally while the task is retrying.
     * 
     * Tasks scheduled as a result of a retry for a periodic task are unnamed, non-periodic
     * clones of the original task. Their retry configuration will be derived from the
     * original task's configuration, but will have a lower value for `remaining` than the
     * original `total_retries`.
     */
    matrixEnjinV1012: new CallType(
        'Scheduler.set_retry',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            retries: sts.number(),
            period: sts.number(),
        })
    ),
}

export const setRetryNamed =  {
    name: 'Scheduler.set_retry_named',
    /**
     * Set a retry configuration for a named task so that, in case its scheduled run fails, it
     * will be retried after `period` blocks, for a total amount of `retries` retries or until
     * it succeeds.
     * 
     * Tasks which need to be scheduled for a retry are still subject to weight metering and
     * agenda space, same as a regular task. If a periodic task fails, it will be scheduled
     * normally while the task is retrying.
     * 
     * Tasks scheduled as a result of a retry for a periodic task are unnamed, non-periodic
     * clones of the original task. Their retry configuration will be derived from the
     * original task's configuration, but will have a lower value for `remaining` than the
     * original `total_retries`.
     */
    matrixEnjinV1012: new CallType(
        'Scheduler.set_retry_named',
        sts.struct({
            id: sts.bytes(),
            retries: sts.number(),
            period: sts.number(),
        })
    ),
}

export const cancelRetry =  {
    name: 'Scheduler.cancel_retry',
    /**
     * Removes the retry configuration of a task.
     */
    matrixEnjinV1012: new CallType(
        'Scheduler.cancel_retry',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
        })
    ),
}

export const cancelRetryNamed =  {
    name: 'Scheduler.cancel_retry_named',
    /**
     * Cancel the retry configuration of a named task.
     */
    matrixEnjinV1012: new CallType(
        'Scheduler.cancel_retry_named',
        sts.struct({
            id: sts.bytes(),
        })
    ),
}
