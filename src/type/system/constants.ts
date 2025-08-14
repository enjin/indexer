import { sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx } from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as matrixV1030 from '../matrixV1030'

export const blockWeights = {
    /**
     *  Block & extrinsics weights: base values and limits.
     */
    matrixEnjinV603: new ConstantType('System.BlockWeights', matrixEnjinV603.BlockWeights),
}

export const blockLength = {
    /**
     *  The maximum length of a block (in bytes).
     */
    matrixEnjinV603: new ConstantType('System.BlockLength', matrixEnjinV603.BlockLength),
}

export const blockHashCount = {
    /**
     *  Maximum number of block number to block hash mappings to keep (oldest pruned first).
     */
    matrixEnjinV603: new ConstantType('System.BlockHashCount', sts.number()),
}

export const dbWeight = {
    /**
     *  The weight of runtime database operations the runtime can invoke.
     */
    matrixEnjinV603: new ConstantType('System.DbWeight', matrixEnjinV603.RuntimeDbWeight),
}

export const version = {
    /**
     *  Get the chain's current version.
     */
    matrixEnjinV603: new ConstantType('System.Version', matrixEnjinV603.RuntimeVersion),
    /**
     *  Get the chain's in-code version.
     */
    matrixV1030: new ConstantType('System.Version', matrixV1030.RuntimeVersion),
}

export const ss58Prefix = {
    /**
     *  The designated SS58 prefix of this chain.
     *
     *  This replaces the "ss58Format" property declared in the chain spec. Reason is
     *  that the runtime should know about the prefix in order to make use of it as
     *  an identifier of the chain.
     */
    matrixEnjinV603: new ConstantType('System.SS58Prefix', sts.number()),
}
