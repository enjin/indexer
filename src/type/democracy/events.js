'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.metadataTransferred =
    exports.metadataCleared =
    exports.metadataSet =
    exports.proposalCanceled =
    exports.seconded =
    exports.voted =
    exports.blacklisted =
    exports.vetoed =
    exports.undelegated =
    exports.delegated =
    exports.cancelled =
    exports.notPassed =
    exports.passed =
    exports.started =
    exports.externalTabled =
    exports.tabled =
    exports.proposed =
        void 0
var support_1 = require('../support')
var matrixEnjinV603 = require('../matrixEnjinV603')
exports.proposed = {
    name: 'Democracy.Proposed',
    /**
     * A motion has been proposed by a public account.
     */
    matrixEnjinV603: new support_1.EventType(
        'Democracy.Proposed',
        support_1.sts.struct({
            proposalIndex: support_1.sts.number(),
            deposit: support_1.sts.bigint(),
        })
    ),
}
exports.tabled = {
    name: 'Democracy.Tabled',
    /**
     * A public proposal has been tabled for referendum vote.
     */
    matrixEnjinV603: new support_1.EventType(
        'Democracy.Tabled',
        support_1.sts.struct({
            proposalIndex: support_1.sts.number(),
            deposit: support_1.sts.bigint(),
        })
    ),
}
exports.externalTabled = {
    name: 'Democracy.ExternalTabled',
    /**
     * An external proposal has been tabled.
     */
    matrixEnjinV603: new support_1.EventType('Democracy.ExternalTabled', support_1.sts.unit()),
}
exports.started = {
    name: 'Democracy.Started',
    /**
     * A referendum has begun.
     */
    matrixEnjinV603: new support_1.EventType(
        'Democracy.Started',
        support_1.sts.struct({
            refIndex: support_1.sts.number(),
            threshold: matrixEnjinV603.VoteThreshold,
        })
    ),
}
exports.passed = {
    name: 'Democracy.Passed',
    /**
     * A proposal has been approved by referendum.
     */
    matrixEnjinV603: new support_1.EventType(
        'Democracy.Passed',
        support_1.sts.struct({
            refIndex: support_1.sts.number(),
        })
    ),
}
exports.notPassed = {
    name: 'Democracy.NotPassed',
    /**
     * A proposal has been rejected by referendum.
     */
    matrixEnjinV603: new support_1.EventType(
        'Democracy.NotPassed',
        support_1.sts.struct({
            refIndex: support_1.sts.number(),
        })
    ),
}
exports.cancelled = {
    name: 'Democracy.Cancelled',
    /**
     * A referendum has been cancelled.
     */
    matrixEnjinV603: new support_1.EventType(
        'Democracy.Cancelled',
        support_1.sts.struct({
            refIndex: support_1.sts.number(),
        })
    ),
}
exports.delegated = {
    name: 'Democracy.Delegated',
    /**
     * An account has delegated their vote to another account.
     */
    matrixEnjinV603: new support_1.EventType(
        'Democracy.Delegated',
        support_1.sts.struct({
            who: matrixEnjinV603.AccountId32,
            target: matrixEnjinV603.AccountId32,
        })
    ),
}
exports.undelegated = {
    name: 'Democracy.Undelegated',
    /**
     * An account has cancelled a previous delegation operation.
     */
    matrixEnjinV603: new support_1.EventType(
        'Democracy.Undelegated',
        support_1.sts.struct({
            account: matrixEnjinV603.AccountId32,
        })
    ),
}
exports.vetoed = {
    name: 'Democracy.Vetoed',
    /**
     * An external proposal has been vetoed.
     */
    matrixEnjinV603: new support_1.EventType(
        'Democracy.Vetoed',
        support_1.sts.struct({
            who: matrixEnjinV603.AccountId32,
            proposalHash: matrixEnjinV603.H256,
            until: support_1.sts.number(),
        })
    ),
}
exports.blacklisted = {
    name: 'Democracy.Blacklisted',
    /**
     * A proposal_hash has been blacklisted permanently.
     */
    matrixEnjinV603: new support_1.EventType(
        'Democracy.Blacklisted',
        support_1.sts.struct({
            proposalHash: matrixEnjinV603.H256,
        })
    ),
}
exports.voted = {
    name: 'Democracy.Voted',
    /**
     * An account has voted in a referendum
     */
    matrixEnjinV603: new support_1.EventType(
        'Democracy.Voted',
        support_1.sts.struct({
            voter: matrixEnjinV603.AccountId32,
            refIndex: support_1.sts.number(),
            vote: matrixEnjinV603.AccountVote,
        })
    ),
}
exports.seconded = {
    name: 'Democracy.Seconded',
    /**
     * An account has secconded a proposal
     */
    matrixEnjinV603: new support_1.EventType(
        'Democracy.Seconded',
        support_1.sts.struct({
            seconder: matrixEnjinV603.AccountId32,
            propIndex: support_1.sts.number(),
        })
    ),
}
exports.proposalCanceled = {
    name: 'Democracy.ProposalCanceled',
    /**
     * A proposal got canceled.
     */
    matrixEnjinV603: new support_1.EventType(
        'Democracy.ProposalCanceled',
        support_1.sts.struct({
            propIndex: support_1.sts.number(),
        })
    ),
}
exports.metadataSet = {
    name: 'Democracy.MetadataSet',
    /**
     * Metadata for a proposal or a referendum has been set.
     */
    matrixEnjinV603: new support_1.EventType(
        'Democracy.MetadataSet',
        support_1.sts.struct({
            /**
             * Metadata owner.
             */
            owner: matrixEnjinV603.MetadataOwner,
            /**
             * Preimage hash.
             */
            hash: matrixEnjinV603.H256,
        })
    ),
}
exports.metadataCleared = {
    name: 'Democracy.MetadataCleared',
    /**
     * Metadata for a proposal or a referendum has been cleared.
     */
    matrixEnjinV603: new support_1.EventType(
        'Democracy.MetadataCleared',
        support_1.sts.struct({
            /**
             * Metadata owner.
             */
            owner: matrixEnjinV603.MetadataOwner,
            /**
             * Preimage hash.
             */
            hash: matrixEnjinV603.H256,
        })
    ),
}
exports.metadataTransferred = {
    name: 'Democracy.MetadataTransferred',
    /**
     * Metadata has been transferred to new owner.
     */
    matrixEnjinV603: new support_1.EventType(
        'Democracy.MetadataTransferred',
        support_1.sts.struct({
            /**
             * Previous metadata owner.
             */
            prevOwner: matrixEnjinV603.MetadataOwner,
            /**
             * New metadata owner.
             */
            owner: matrixEnjinV603.MetadataOwner,
            /**
             * Preimage hash.
             */
            hash: matrixEnjinV603.H256,
        })
    ),
}
