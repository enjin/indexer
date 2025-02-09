import { BlockHeader } from '@enjin/indexer/common/types/contexts'
import { claims } from '../../../types/generated/storage'
import { match } from 'ts-pattern'
import { UnsupportedStorageError } from '@enjin/indexer/common/errors'

export async function delayClaimsPeriod(block: BlockHeader): Promise<number | undefined> {
    return match(block)
        .returnType<Promise<number | undefined>>()
        .when(claims.delayClaimsPeriod.matrixEnjinV603.is, claims.delayClaimsPeriod.matrixEnjinV603.get)
        .otherwise(() => {
            throw new UnsupportedStorageError(delayClaimsPeriod.name)
        })
}
