import { UnsupportedCallError } from '@enjin/indexer/common/errors'
import { calls } from '../../../types/generated'
import { CallItem } from '@enjin/indexer/common/types/contexts'
import { match } from 'ts-pattern'

type LimitedTeleportAssetsCall = {
    dest: any
    beneficiary: any
    assets: any
    feeAssetItem: any
    weightLimit: any
}

export function limitedReserveTransferAssets(call: CallItem) {
    return match(call)
        .returnType<LimitedTeleportAssetsCall>()
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
