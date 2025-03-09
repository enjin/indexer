import {sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx} from '../support'

export const maxVotes =  {
    /**
     *  The maximum number of concurrent votes an account may have.
     * 
     *  Also used to compute weight, an overly large value can lead to extrinsics with large
     *  weight estimation: see `delegate` for instance.
     */
    enjinV100: new ConstantType(
        'ConvictionVoting.MaxVotes',
        sts.number()
    ),
}

export const voteLockingPeriod =  {
    /**
     *  The minimum period of vote locking.
     * 
     *  It should be no shorter than enactment period to ensure that in the case of an approval,
     *  those successful voters are locked into the consequences that their votes entail.
     */
    enjinV100: new ConstantType(
        'ConvictionVoting.VoteLockingPeriod',
        sts.number()
    ),
}
