import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as enjinV100 from '../enjinV100'
import * as enjinV1032 from '../enjinV1032'

export const rebag =  {
    name: 'VoterList.rebag',
    /**
     * Declare that some `dislocated` account has, through rewards or penalties, sufficiently
     * changed its score that it should properly fall into a different bag than its current
     * one.
     * 
     * Anyone can call this function about any potentially dislocated account.
     * 
     * Will always update the stored score of `dislocated` to the correct score, based on
     * `ScoreProvider`.
     * 
     * If `dislocated` does not exists, it returns an error.
     */
    enjinV100: new CallType(
        'VoterList.rebag',
        sts.struct({
            dislocated: enjinV100.MultiAddress,
        })
    ),
}

export const putInFrontOf =  {
    name: 'VoterList.put_in_front_of',
    /**
     * Move the caller's Id directly in front of `lighter`.
     * 
     * The dispatch origin for this call must be _Signed_ and can only be called by the Id of
     * the account going in front of `lighter`.
     * 
     * Only works if
     * - both nodes are within the same bag,
     * - and `origin` has a greater `Score` than `lighter`.
     */
    enjinV100: new CallType(
        'VoterList.put_in_front_of',
        sts.struct({
            lighter: enjinV100.MultiAddress,
        })
    ),
}

export const putInFrontOfOther =  {
    name: 'VoterList.put_in_front_of_other',
    /**
     * Same as [`Pallet::put_in_front_of`], but it can be called by anyone.
     * 
     * Fee is paid by the origin under all circumstances.
     */
    enjinV1032: new CallType(
        'VoterList.put_in_front_of_other',
        sts.struct({
            heavier: enjinV1032.MultiAddress,
            lighter: enjinV1032.MultiAddress,
        })
    ),
}
