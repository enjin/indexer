import { sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx } from '../support'
import * as enjinV1062 from '../enjinV1062'

export const universalLocation = {
    /**
     *  This chain's Universal Location.
     */
    enjinV1062: new ConstantType('XcmPallet.UniversalLocation', enjinV1062.V5Junctions),
}

export const advertisedXcmVersion = {
    /**
     *  The latest supported version that we advertise. Generally just set it to
     *  `pallet_xcm::CurrentXcmVersion`.
     */
    enjinV1062: new ConstantType('XcmPallet.AdvertisedXcmVersion', sts.number()),
}

export const maxLockers = {
    /**
     *  The maximum number of local XCM locks that a single account may have.
     */
    enjinV1062: new ConstantType('XcmPallet.MaxLockers', sts.number()),
}

export const maxRemoteLockConsumers = {
    /**
     *  The maximum number of consumers a single remote lock may have.
     */
    enjinV1062: new ConstantType('XcmPallet.MaxRemoteLockConsumers', sts.number()),
}
