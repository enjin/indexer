import { UnsupportedCallError } from '@enjin/indexer/common/errors'
import { calls } from '../../../types/generated'
import { CallItem } from '@enjin/indexer/common/types/contexts'
import { match } from 'ts-pattern'
import { LimitedReserveTransferAssets } from '@enjin/indexer/mappings/xcm/calls/types'

export function limitedReserveTransferAssets(call: CallItem): LimitedReserveTransferAssets {
    return match(call)
        .returnType<LimitedReserveTransferAssets>()
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
