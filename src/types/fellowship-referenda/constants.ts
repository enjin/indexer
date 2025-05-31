import {sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx} from '../support'
import * as enjinV100 from '../enjinV100'

export const submissionDeposit =  {
    /**
     *  The minimum amount to be used as a deposit for a public referendum proposal.
     */
    enjinV100: new ConstantType(
        'FellowshipReferenda.SubmissionDeposit',
        sts.bigint()
    ),
}

export const maxQueued =  {
    /**
     *  Maximum size of the referendum queue for a single track.
     */
    enjinV100: new ConstantType(
        'FellowshipReferenda.MaxQueued',
        sts.number()
    ),
}

export const undecidingTimeout =  {
    /**
     *  The number of blocks after submission that a referendum must begin being decided by.
     *  Once this passes, then anyone may cancel the referendum.
     */
    enjinV100: new ConstantType(
        'FellowshipReferenda.UndecidingTimeout',
        sts.number()
    ),
}

export const alarmInterval =  {
    /**
     *  Quantization level for the referendum wakeup scheduler. A higher number will result in
     *  fewer storage reads/writes needed for smaller voters, but also result in delays to the
     *  automatic referendum status changes. Explicit servicing instructions are unaffected.
     */
    enjinV100: new ConstantType(
        'FellowshipReferenda.AlarmInterval',
        sts.number()
    ),
}

export const tracks =  {
    /**
     *  Information concerning the different referendum tracks.
     */
    enjinV100: new ConstantType(
        'FellowshipReferenda.Tracks',
        sts.array(() => sts.tuple(() => [sts.number(), enjinV100.TrackInfo]))
    ),
}
