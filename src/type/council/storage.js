'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.prime =
    exports.members =
    exports.proposalCount =
    exports.voting =
    exports.proposalOf =
    exports.proposals =
        void 0
var support_1 = require('../support')
var matrixV500 = require('../matrixV500')
var matrixV600 = require('../matrixV600')
var matrixV601 = require('../matrixV601')
var matrixV602 = require('../matrixV602')
var matrixEnjinV603 = require('../matrixEnjinV603')
var matrixV604 = require('../matrixV604')
var matrixEnjinV1000 = require('../matrixEnjinV1000')
var matrixV1000 = require('../matrixV1000')
var matrixEnjinV1003 = require('../matrixEnjinV1003')
var matrixV1003 = require('../matrixV1003')
var matrixEnjinV1004 = require('../matrixEnjinV1004')
var matrixV1004 = require('../matrixV1004')
var matrixEnjinV1005 = require('../matrixEnjinV1005')
var matrixV1005 = require('../matrixV1005')
var matrixV1010 = require('../matrixV1010')
var matrixV1011 = require('../matrixV1011')
var matrixEnjinV1012 = require('../matrixEnjinV1012')
var matrixV1012 = require('../matrixV1012')
var matrixV1020 = require('../matrixV1020')
var matrixEnjinV1022 = require('../matrixEnjinV1022')
var matrixV1022 = require('../matrixV1022')
exports.proposals = {
    /**
     *  The hashes of the active proposals.
     */
    matrixEnjinV603: new support_1.StorageType(
        'Council.Proposals',
        'Default',
        [],
        support_1.sts.array(function () {
            return matrixEnjinV603.H256
        })
    ),
}
exports.proposalOf = {
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    matrixEnjinV603: new support_1.StorageType(
        'Council.ProposalOf',
        'Optional',
        [matrixEnjinV603.H256],
        matrixEnjinV603.Call
    ),
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    matrixEnjinV1000: new support_1.StorageType(
        'Council.ProposalOf',
        'Optional',
        [matrixEnjinV1000.H256],
        matrixEnjinV1000.Call
    ),
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    matrixEnjinV1003: new support_1.StorageType(
        'Council.ProposalOf',
        'Optional',
        [matrixEnjinV1003.H256],
        matrixEnjinV1003.Call
    ),
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    matrixEnjinV1004: new support_1.StorageType(
        'Council.ProposalOf',
        'Optional',
        [matrixEnjinV1004.H256],
        matrixEnjinV1004.Call
    ),
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    matrixEnjinV1005: new support_1.StorageType(
        'Council.ProposalOf',
        'Optional',
        [matrixEnjinV1005.H256],
        matrixEnjinV1005.Call
    ),
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    matrixEnjinV1012: new support_1.StorageType(
        'Council.ProposalOf',
        'Optional',
        [matrixEnjinV1012.H256],
        matrixEnjinV1012.Call
    ),
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    matrixEnjinV1022: new support_1.StorageType(
        'Council.ProposalOf',
        'Optional',
        [matrixEnjinV1022.H256],
        matrixEnjinV1022.Call
    ),
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    matrixV500: new support_1.StorageType('Council.ProposalOf', 'Optional', [matrixV500.H256], matrixV500.Call),
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    matrixV600: new support_1.StorageType('Council.ProposalOf', 'Optional', [matrixV600.H256], matrixV600.Call),
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    matrixV601: new support_1.StorageType('Council.ProposalOf', 'Optional', [matrixV601.H256], matrixV601.Call),
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    matrixV602: new support_1.StorageType('Council.ProposalOf', 'Optional', [matrixV602.H256], matrixV602.Call),
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    matrixV604: new support_1.StorageType('Council.ProposalOf', 'Optional', [matrixV604.H256], matrixV604.Call),
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    matrixV1000: new support_1.StorageType('Council.ProposalOf', 'Optional', [matrixV1000.H256], matrixV1000.Call),
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    matrixV1003: new support_1.StorageType('Council.ProposalOf', 'Optional', [matrixV1003.H256], matrixV1003.Call),
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    matrixV1004: new support_1.StorageType('Council.ProposalOf', 'Optional', [matrixV1004.H256], matrixV1004.Call),
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    matrixV1005: new support_1.StorageType('Council.ProposalOf', 'Optional', [matrixV1005.H256], matrixV1005.Call),
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    matrixV1010: new support_1.StorageType('Council.ProposalOf', 'Optional', [matrixV1010.H256], matrixV1010.Call),
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    matrixV1011: new support_1.StorageType('Council.ProposalOf', 'Optional', [matrixV1011.H256], matrixV1011.Call),
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    matrixV1012: new support_1.StorageType('Council.ProposalOf', 'Optional', [matrixV1012.H256], matrixV1012.Call),
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    matrixV1020: new support_1.StorageType('Council.ProposalOf', 'Optional', [matrixV1020.H256], matrixV1020.Call),
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    matrixV1022: new support_1.StorageType('Council.ProposalOf', 'Optional', [matrixV1022.H256], matrixV1022.Call),
}
exports.voting = {
    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    matrixEnjinV603: new support_1.StorageType(
        'Council.Voting',
        'Optional',
        [matrixEnjinV603.H256],
        matrixEnjinV603.Votes
    ),
}
exports.proposalCount = {
    /**
     *  Proposals so far.
     */
    matrixEnjinV603: new support_1.StorageType('Council.ProposalCount', 'Default', [], support_1.sts.number()),
}
exports.members = {
    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    matrixEnjinV603: new support_1.StorageType(
        'Council.Members',
        'Default',
        [],
        support_1.sts.array(function () {
            return matrixEnjinV603.AccountId32
        })
    ),
}
exports.prime = {
    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    matrixEnjinV603: new support_1.StorageType('Council.Prime', 'Optional', [], matrixEnjinV603.AccountId32),
}
