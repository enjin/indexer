import {sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx} from '../support'
import * as matrixV500 from '../matrixV500'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as matrixV1010 from '../matrixV1010'
import * as matrixEnjinV1012 from '../matrixEnjinV1012'

export const selfLocation =  {
    /**
     *  Self chain location.
     */
    matrixEnjinV603: new ConstantType(
        'XTokens.SelfLocation',
        matrixEnjinV603.V3MultiLocation
    ),
    /**
     *  Self chain location.
     */
    matrixEnjinV1012: new ConstantType(
        'XTokens.SelfLocation',
        matrixEnjinV1012.V4Location
    ),
    /**
     *  Self chain location.
     */
    matrixV500: new ConstantType(
        'XTokens.SelfLocation',
        matrixV500.V3MultiLocation
    ),
    /**
     *  Self chain location.
     */
    matrixV1010: new ConstantType(
        'XTokens.SelfLocation',
        matrixV1010.V4Location
    ),
}

export const baseXcmWeight =  {
    /**
     *  Base XCM weight.
     * 
     *  The actually weight for an XCM message is `T::BaseXcmWeight +
     *  T::Weigher::weight(&msg)`.
     */
    matrixEnjinV603: new ConstantType(
        'XTokens.BaseXcmWeight',
        matrixEnjinV603.Weight
    ),
}

export const rateLimiterId =  {
    /**
     *  The id of the RateLimiter.
     */
    matrixEnjinV1012: new ConstantType(
        'XTokens.RateLimiterId',
        sts.unit()
    ),
}
