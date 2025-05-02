'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.putInFrontOfOther = exports.putInFrontOf = exports.rebag = void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var enjinV1032 = require('../enjinV1032')
exports.rebag = {
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
    enjinV100: new support_1.CallType(
        'VoterList.rebag',
        support_1.sts.struct({
            dislocated: enjinV100.MultiAddress,
        })
    ),
}
exports.putInFrontOf = {
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
    enjinV100: new support_1.CallType(
        'VoterList.put_in_front_of',
        support_1.sts.struct({
            lighter: enjinV100.MultiAddress,
        })
    ),
}
exports.putInFrontOfOther = {
    name: 'VoterList.put_in_front_of_other',
    /**
     * Same as [`Pallet::put_in_front_of`], but it can be called by anyone.
     *
     * Fee is paid by the origin under all circumstances.
     */
    enjinV1032: new support_1.CallType(
        'VoterList.put_in_front_of_other',
        support_1.sts.struct({
            heavier: enjinV1032.MultiAddress,
            lighter: enjinV1032.MultiAddress,
        })
    ),
}
