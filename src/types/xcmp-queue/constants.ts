import { sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx } from '../support'

export const maxInboundSuspended = {
    /**
     *  The maximum number of inbound XCMP channels that can be suspended simultaneously.
     *
     *  Any further channel suspensions will fail and messages may get dropped without further
     *  notice. Choosing a high value (1000) is okay; the trade-off that is described in
     *  [`InboundXcmpSuspended`] still applies at that scale.
     */
    matrixEnjinV1012: new ConstantType('XcmpQueue.MaxInboundSuspended', sts.number()),
}
