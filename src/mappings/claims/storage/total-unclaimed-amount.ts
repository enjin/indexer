import { BlockHeader } from '@enjin/indexer/common/types/contexts'
import { claims } from '../../../types/generated/storage'
import { match } from 'ts-pattern'
import { UnsupportedStorageError } from '@enjin/indexer/common/errors'

export async function totalUnclaimedAmount(block: BlockHeader): Promise<bigint | undefined> {
    return match(block)
        .returnType<Promise<bigint | undefined>>()
        .when(claims.totalUnclaimedAmount.matrixEnjinV603.is, claims.totalUnclaimedAmount.matrixEnjinV603.get)
        .otherwise(() => {
            throw new UnsupportedStorageError(totalUnclaimedAmount.name)
        })
}
