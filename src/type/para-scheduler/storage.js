'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.claimQueue =
    exports.scheduled =
    exports.sessionStartBlock =
    exports.parathreadClaimIndex =
    exports.availabilityCores =
    exports.parathreadQueue =
    exports.validatorGroups =
        void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var v100 = require('../v100')
var v1030 = require('../v1030')
var enjinV1032 = require('../enjinV1032')
exports.validatorGroups = {
    /**
     *  All the validator groups. One for each core. Indices are into `ActiveValidators` - not the
     *  broader set of Polkadot validators, but instead just the subset used for parachains during
     *  this session.
     *
     *  Bound: The number of cores is the sum of the numbers of parachains and parathread multiplexers.
     *  Reasonably, 100-1000. The dominant factor is the number of validators: safe upper bound at 10k.
     */
    enjinV100: new support_1.StorageType(
        'ParaScheduler.ValidatorGroups',
        'Default',
        [],
        support_1.sts.array(function () {
            return support_1.sts.array(function () {
                return enjinV100.V4ValidatorIndex
            })
        })
    ),
}
exports.parathreadQueue = {
    /**
     *  A queue of upcoming claims and which core they should be mapped onto.
     *
     *  The number of queued claims is bounded at the `scheduling_lookahead`
     *  multiplied by the number of parathread multiplexer cores. Reasonably, 10 * 50 = 500.
     */
    enjinV100: new support_1.StorageType(
        'ParaScheduler.ParathreadQueue',
        'Default',
        [],
        enjinV100.ParathreadClaimQueue
    ),
}
exports.availabilityCores = {
    /**
     *  One entry for each availability core. Entries are `None` if the core is not currently occupied. Can be
     *  temporarily `Some` if scheduled but not occupied.
     *  The i'th parachain belongs to the i'th core, with the remaining cores all being
     *  parathread-multiplexers.
     *
     *  Bounded by the maximum of either of these two values:
     *    * The number of parachains and parathread multiplexers
     *    * The number of validators divided by `configuration.max_validators_per_core`.
     */
    enjinV100: new support_1.StorageType(
        'ParaScheduler.AvailabilityCores',
        'Default',
        [],
        support_1.sts.array(function () {
            return support_1.sts.option(function () {
                return enjinV100.V4CoreOccupied
            })
        })
    ),
    /**
     *  One entry for each availability core. The i'th parachain belongs to the i'th core, with the
     *  remaining cores all being on demand parachain multiplexers.
     *
     *  Bounded by the maximum of either of these two values:
     *    * The number of parachains and parathread multiplexers
     *    * The number of validators divided by `configuration.max_validators_per_core`.
     */
    enjinV1032: new support_1.StorageType(
        'ParaScheduler.AvailabilityCores',
        'Default',
        [],
        support_1.sts.array(function () {
            return enjinV1032.CoreOccupied
        })
    ),
    /**
     *  One entry for each availability core. Entries are `None` if the core is not currently occupied. Can be
     *  temporarily `Some` if scheduled but not occupied.
     *  The i'th parachain belongs to the i'th core, with the remaining cores all being
     *  parathread-multiplexers.
     *
     *  Bounded by the maximum of either of these two values:
     *    * The number of parachains and parathread multiplexers
     *    * The number of validators divided by `configuration.max_validators_per_core`.
     */
    v100: new support_1.StorageType(
        'ParaScheduler.AvailabilityCores',
        'Default',
        [],
        support_1.sts.array(function () {
            return support_1.sts.option(function () {
                return v100.V2CoreOccupied
            })
        })
    ),
    /**
     *  One entry for each availability core. The i'th parachain belongs to the i'th core, with the
     *  remaining cores all being on demand parachain multiplexers.
     *
     *  Bounded by the maximum of either of these two values:
     *    * The number of parachains and parathread multiplexers
     *    * The number of validators divided by `configuration.max_validators_per_core`.
     */
    v1030: new support_1.StorageType(
        'ParaScheduler.AvailabilityCores',
        'Default',
        [],
        support_1.sts.array(function () {
            return v1030.CoreOccupied
        })
    ),
}
exports.parathreadClaimIndex = {
    /**
     *  An index used to ensure that only one claim on a parathread exists in the queue or is
     *  currently being handled by an occupied core.
     *
     *  Bounded by the number of parathread cores and scheduling lookahead. Reasonably, 10 * 50 = 500.
     */
    enjinV100: new support_1.StorageType(
        'ParaScheduler.ParathreadClaimIndex',
        'Default',
        [],
        support_1.sts.array(function () {
            return enjinV100.Id
        })
    ),
}
exports.sessionStartBlock = {
    /**
     *  The block number where the session start occurred. Used to track how many group rotations have occurred.
     *
     *  Note that in the context of parachains modules the session change is signaled during
     *  the block and enacted at the end of the block (at the finalization stage, to be exact).
     *  Thus for all intents and purposes the effect of the session change is observed at the
     *  block following the session change, block number of which we save in this storage value.
     */
    enjinV100: new support_1.StorageType('ParaScheduler.SessionStartBlock', 'Default', [], support_1.sts.number()),
}
exports.scheduled = {
    /**
     *  Currently scheduled cores - free but up to be occupied.
     *
     *  Bounded by the number of cores: one for each parachain and parathread multiplexer.
     *
     *  The value contained here will not be valid after the end of a block. Runtime APIs should be used to determine scheduled cores/
     *  for the upcoming block.
     */
    enjinV100: new support_1.StorageType(
        'ParaScheduler.Scheduled',
        'Default',
        [],
        support_1.sts.array(function () {
            return enjinV100.CoreAssignment
        })
    ),
}
exports.claimQueue = {
    /**
     *  One entry for each availability core. The `VecDeque` represents the assignments to be
     *  scheduled on that core. The value contained here will not be valid after the end of
     *  a block. Runtime APIs should be used to determine scheduled cores for the upcoming block.
     */
    enjinV1032: new support_1.StorageType(
        'ParaScheduler.ClaimQueue',
        'Default',
        [],
        support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [
                    enjinV1032.V6CoreIndex,
                    support_1.sts.array(function () {
                        return enjinV1032.ParasEntry
                    }),
                ]
            })
        })
    ),
}
