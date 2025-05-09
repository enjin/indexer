'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.ss58Prefix =
    exports.version =
    exports.dbWeight =
    exports.blockHashCount =
    exports.blockLength =
    exports.blockWeights =
        void 0
var support_1 = require('../support')
var matrixEnjinV603 = require('../matrixEnjinV603')
exports.blockWeights = {
    /**
     *  Block & extrinsics weights: base values and limits.
     */
    matrixEnjinV603: new support_1.ConstantType('System.BlockWeights', matrixEnjinV603.BlockWeights),
}
exports.blockLength = {
    /**
     *  The maximum length of a block (in bytes).
     */
    matrixEnjinV603: new support_1.ConstantType('System.BlockLength', matrixEnjinV603.BlockLength),
}
exports.blockHashCount = {
    /**
     *  Maximum number of block number to block hash mappings to keep (oldest pruned first).
     */
    matrixEnjinV603: new support_1.ConstantType('System.BlockHashCount', support_1.sts.number()),
}
exports.dbWeight = {
    /**
     *  The weight of runtime database operations the runtime can invoke.
     */
    matrixEnjinV603: new support_1.ConstantType('System.DbWeight', matrixEnjinV603.RuntimeDbWeight),
}
exports.version = {
    /**
     *  Get the chain's current version.
     */
    matrixEnjinV603: new support_1.ConstantType('System.Version', matrixEnjinV603.RuntimeVersion),
}
exports.ss58Prefix = {
    /**
     *  The designated SS58 prefix of this chain.
     *
     *  This replaces the "ss58Format" property declared in the chain spec. Reason is
     *  that the runtime should know about the prefix in order to make use of it as
     *  an identifier of the chain.
     */
    matrixEnjinV603: new support_1.ConstantType('System.SS58Prefix', support_1.sts.number()),
}
