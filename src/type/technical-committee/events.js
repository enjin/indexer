'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.closed =
    exports.memberExecuted =
    exports.executed =
    exports.disapproved =
    exports.approved =
    exports.voted =
    exports.proposed =
        void 0
var support_1 = require('../support')
var matrixV500 = require('../matrixV500')
var matrixV602 = require('../matrixV602')
var matrixEnjinV603 = require('../matrixEnjinV603')
var matrixV604 = require('../matrixV604')
exports.proposed = {
    name: 'TechnicalCommittee.Proposed',
    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    matrixEnjinV603: new support_1.EventType(
        'TechnicalCommittee.Proposed',
        support_1.sts.struct({
            account: matrixEnjinV603.AccountId32,
            proposalIndex: support_1.sts.number(),
            proposalHash: matrixEnjinV603.H256,
            threshold: support_1.sts.number(),
        })
    ),
}
exports.voted = {
    name: 'TechnicalCommittee.Voted',
    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    matrixEnjinV603: new support_1.EventType(
        'TechnicalCommittee.Voted',
        support_1.sts.struct({
            account: matrixEnjinV603.AccountId32,
            proposalHash: matrixEnjinV603.H256,
            voted: support_1.sts.boolean(),
            yes: support_1.sts.number(),
            no: support_1.sts.number(),
        })
    ),
}
exports.approved = {
    name: 'TechnicalCommittee.Approved',
    /**
     * A motion was approved by the required threshold.
     */
    matrixEnjinV603: new support_1.EventType(
        'TechnicalCommittee.Approved',
        support_1.sts.struct({
            proposalHash: matrixEnjinV603.H256,
        })
    ),
}
exports.disapproved = {
    name: 'TechnicalCommittee.Disapproved',
    /**
     * A motion was not approved by the required threshold.
     */
    matrixEnjinV603: new support_1.EventType(
        'TechnicalCommittee.Disapproved',
        support_1.sts.struct({
            proposalHash: matrixEnjinV603.H256,
        })
    ),
}
exports.executed = {
    name: 'TechnicalCommittee.Executed',
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    matrixEnjinV603: new support_1.EventType(
        'TechnicalCommittee.Executed',
        support_1.sts.struct({
            proposalHash: matrixEnjinV603.H256,
            result: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return matrixEnjinV603.DispatchError
                }
            ),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    matrixV500: new support_1.EventType(
        'TechnicalCommittee.Executed',
        support_1.sts.struct({
            proposalHash: matrixV500.H256,
            result: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return matrixV500.DispatchError
                }
            ),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    matrixV602: new support_1.EventType(
        'TechnicalCommittee.Executed',
        support_1.sts.struct({
            proposalHash: matrixV602.H256,
            result: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return matrixV602.DispatchError
                }
            ),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    matrixV604: new support_1.EventType(
        'TechnicalCommittee.Executed',
        support_1.sts.struct({
            proposalHash: matrixV604.H256,
            result: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return matrixV604.DispatchError
                }
            ),
        })
    ),
}
exports.memberExecuted = {
    name: 'TechnicalCommittee.MemberExecuted',
    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    matrixEnjinV603: new support_1.EventType(
        'TechnicalCommittee.MemberExecuted',
        support_1.sts.struct({
            proposalHash: matrixEnjinV603.H256,
            result: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return matrixEnjinV603.DispatchError
                }
            ),
        })
    ),
    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    matrixV500: new support_1.EventType(
        'TechnicalCommittee.MemberExecuted',
        support_1.sts.struct({
            proposalHash: matrixV500.H256,
            result: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return matrixV500.DispatchError
                }
            ),
        })
    ),
    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    matrixV602: new support_1.EventType(
        'TechnicalCommittee.MemberExecuted',
        support_1.sts.struct({
            proposalHash: matrixV602.H256,
            result: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return matrixV602.DispatchError
                }
            ),
        })
    ),
    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    matrixV604: new support_1.EventType(
        'TechnicalCommittee.MemberExecuted',
        support_1.sts.struct({
            proposalHash: matrixV604.H256,
            result: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return matrixV604.DispatchError
                }
            ),
        })
    ),
}
exports.closed = {
    name: 'TechnicalCommittee.Closed',
    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    matrixEnjinV603: new support_1.EventType(
        'TechnicalCommittee.Closed',
        support_1.sts.struct({
            proposalHash: matrixEnjinV603.H256,
            yes: support_1.sts.number(),
            no: support_1.sts.number(),
        })
    ),
}
