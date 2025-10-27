import { sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx } from '../support'
import * as matrixV1030 from '../matrixV1030'

export const universalLocation = {
    /**
     *  This chain's Universal Location.
     */
    matrixV1030: new ConstantType('PolkadotXcm.UniversalLocation', matrixV1030.V5Junctions),
}

export const advertisedXcmVersion = {
    /**
     *  The latest supported version that we advertise. Generally just set it to
     *  `pallet_xcm::CurrentXcmVersion`.
     */
    matrixV1030: new ConstantType('PolkadotXcm.AdvertisedXcmVersion', sts.number()),
}

export const maxLockers = {
    /**
     *  The maximum number of local XCM locks that a single account may have.
     */
    matrixV1030: new ConstantType('PolkadotXcm.MaxLockers', sts.number()),
}

export const maxRemoteLockConsumers = {
    /**
     *  The maximum number of consumers a single remote lock may have.
     */
    matrixV1030: new ConstantType('PolkadotXcm.MaxRemoteLockConsumers', sts.number()),
}
