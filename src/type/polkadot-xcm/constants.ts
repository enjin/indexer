import { sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx } from '../support'
import * as matrixEnjinV1031 from '../matrixEnjinV1031'

export const universalLocation = {
    /**
     *  This chain's Universal Location.
     */
    matrixEnjinV1031: new ConstantType('PolkadotXcm.UniversalLocation', matrixEnjinV1031.V5Junctions),
}

export const advertisedXcmVersion = {
    /**
     *  The latest supported version that we advertise. Generally just set it to
     *  `pallet_xcm::CurrentXcmVersion`.
     */
    matrixEnjinV1031: new ConstantType('PolkadotXcm.AdvertisedXcmVersion', sts.number()),
}

export const maxLockers = {
    /**
     *  The maximum number of local XCM locks that a single account may have.
     */
    matrixEnjinV1031: new ConstantType('PolkadotXcm.MaxLockers', sts.number()),
}

export const maxRemoteLockConsumers = {
    /**
     *  The maximum number of consumers a single remote lock may have.
     */
    matrixEnjinV1031: new ConstantType('PolkadotXcm.MaxRemoteLockConsumers', sts.number()),
}
