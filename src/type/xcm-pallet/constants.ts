import { sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx } from '../support'
import * as v1060 from '../v1060'

export const universalLocation = {
    /**
     *  This chain's Universal Location.
     */
    v1060: new ConstantType('XcmPallet.UniversalLocation', v1060.V5Junctions),
}

export const advertisedXcmVersion = {
    /**
     *  The latest supported version that we advertise. Generally just set it to
     *  `pallet_xcm::CurrentXcmVersion`.
     */
    v1060: new ConstantType('XcmPallet.AdvertisedXcmVersion', sts.number()),
}

export const maxLockers = {
    /**
     *  The maximum number of local XCM locks that a single account may have.
     */
    v1060: new ConstantType('XcmPallet.MaxLockers', sts.number()),
}

export const maxRemoteLockConsumers = {
    /**
     *  The maximum number of consumers a single remote lock may have.
     */
    v1060: new ConstantType('XcmPallet.MaxRemoteLockConsumers', sts.number()),
}
