import { UnsupportedCallError } from '@enjin/indexer/common/errors'
import { calls } from '../../../types/generated'
import { CallItem } from '@enjin/indexer/common/types/contexts'
import { match } from 'ts-pattern'

type TeleportAssetsCall = {
    dest: any
    beneficiary: any
    assets: any
    feeAssetItem: any
    weightLimit: any
}

export function teleportAssets(call: CallItem) {
    return match(call)
        .returnType<TeleportAssetsCall>()
        .when(calls.polkadotXcm.limitedTeleportAssets.matrixEnjinV1012.is, () =>
            calls.polkadotXcm.limitedTeleportAssets.matrixEnjinV1012.decode(call)
        )
        .when(calls.polkadotXcm.limitedTeleportAssets.matrixEnjinV603.is, () =>
            calls.polkadotXcm.limitedTeleportAssets.matrixEnjinV603.decode(call)
        )
        .when(calls.polkadotXcm.limitedTeleportAssets.matrixV1010.is, () =>
            calls.polkadotXcm.limitedTeleportAssets.matrixV1010.decode(call)
        )
        .when(calls.polkadotXcm.limitedTeleportAssets.matrixV500.is, () =>
            calls.polkadotXcm.limitedTeleportAssets.matrixV500.decode(call)
        )
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
