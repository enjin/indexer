import { sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx } from '../support'

export const advertisedXcmVersion = {
    /**
     *  The latest supported version that we advertise. Generally just set it to
     *  `pallet_xcm::CurrentXcmVersion`.
     */
    matrixV1030: new ConstantType('PolkadotXcm.AdvertisedXcmVersion', sts.number()),
}
