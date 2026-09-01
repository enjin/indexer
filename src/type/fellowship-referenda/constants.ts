import { sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx } from '../support'
import * as matrixV1040 from '../matrixV1040'

export const submissionDeposit = {
    /**
     *  The minimum amount to be used as a deposit for a public referendum proposal.
     */
    matrixV1040: new ConstantType('FellowshipReferenda.SubmissionDeposit', sts.bigint()),
}

export const maxQueued = {
    /**
     *  Maximum size of the referendum queue for a single track.
     */
    matrixV1040: new ConstantType('FellowshipReferenda.MaxQueued', sts.number()),
}

export const undecidingTimeout = {
    /**
     *  The number of blocks after submission that a referendum must begin being decided by.
     *  Once this passes, then anyone may cancel the referendum.
     */
    matrixV1040: new ConstantType('FellowshipReferenda.UndecidingTimeout', sts.number()),
}

export const alarmInterval = {
    /**
     *  Quantization level for the referendum wakeup scheduler. A higher number will result in
     *  fewer storage reads/writes needed for smaller voters, but also result in delays to the
     *  automatic referendum status changes. Explicit servicing instructions are unaffected.
     */
    matrixV1040: new ConstantType('FellowshipReferenda.AlarmInterval', sts.number()),
}

export const tracks = {
    /**
     *  A list of tracks.
     *
     *  Note: if the tracks are dynamic, the value in the static metadata might be inaccurate.
     */
    matrixV1040: new ConstantType(
        'FellowshipReferenda.Tracks',
        sts.array(() => sts.tuple(() => [sts.number(), matrixV1040.TrackDetails]))
    ),
}
