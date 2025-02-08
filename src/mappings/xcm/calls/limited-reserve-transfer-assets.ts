import { UnsupportedCallError } from '@enjin/indexer/common/errors'
import { calls } from '../../../types/generated'
import { CallItem } from '@enjin/indexer/common/types/contexts'
import { match } from 'ts-pattern'
import * as matrixEnjinV1012 from '@enjin/indexer/types/generated/matrixEnjinV1012'

type LimitedReserveTransferAssetsCall = {
    dest: matrixEnjinV1012.VersionedLocation
    beneficiary: matrixEnjinV1012.VersionedLocation
    assets: matrixEnjinV1012.VersionedAssets
    feeAssetItem: number
    weightLimit: matrixEnjinV1012.V3WeightLimit
}

export function limitedReserveTransferAssets(call: CallItem): LimitedReserveTransferAssetsCall {
    return match(call)
        .returnType<LimitedReserveTransferAssetsCall>()
        .when(
            calls.polkadotXcm.limitedTeleportAssets.matrixEnjinV1012.is,
            calls.polkadotXcm.limitedTeleportAssets.matrixEnjinV1012.decode
        )
        .when(
            calls.polkadotXcm.limitedTeleportAssets.matrixEnjinV603.is,
            calls.polkadotXcm.limitedTeleportAssets.matrixEnjinV603.decode
        )
        .when(calls.polkadotXcm.limitedTeleportAssets.matrixV1010.is, calls.polkadotXcm.limitedTeleportAssets.matrixV1010.decode)
        .when(calls.polkadotXcm.limitedTeleportAssets.matrixV500.is, calls.polkadotXcm.limitedTeleportAssets.matrixV500.decode)
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
