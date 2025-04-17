import {sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx} from '../support'

export const maxInboundSuspended =  {
    /**
     *  The maximum number of inbound XCMP channels that can be suspended simultaneously.
     * 
     *  Any further channel suspensions will fail and messages may get dropped without further
     *  notice. Choosing a high value (1000) is okay; the trade-off that is described in
     *  [`InboundXcmpSuspended`] still applies at that scale.
     */
    matrixEnjinV1012: new ConstantType(
        'XcmpQueue.MaxInboundSuspended',
        sts.number()
    ),
}

export const maxActiveOutboundChannels =  {
    /**
     *  Maximal number of outbound XCMP channels that can have messages queued at the same time.
     * 
     *  If this is reached, then no further messages can be sent to channels that do not yet
     *  have a message queued. This should be set to the expected maximum of outbound channels
     *  which is determined by [`Self::ChannelInfo`]. It is important to set this large enough,
     *  since otherwise the congestion control protocol will not work as intended and messages
     *  may be dropped. This value increases the PoV and should therefore not be picked too
     *  high. Governance needs to pay attention to not open more channels than this value.
     */
    matrixV1020: new ConstantType(
        'XcmpQueue.MaxActiveOutboundChannels',
        sts.number()
    ),
}

export const maxPageSize =  {
    /**
     *  The maximal page size for HRMP message pages.
     * 
     *  A lower limit can be set dynamically, but this is the hard-limit for the PoV worst case
     *  benchmarking. The limit for the size of a message is slightly below this, since some
     *  overhead is incurred for encoding the format.
     */
    matrixV1020: new ConstantType(
        'XcmpQueue.MaxPageSize',
        sts.number()
    ),
}
