import { BlockHeader } from '../../../contexts'
import { claims } from '../../../types/storage'
import { match } from 'ts-pattern'
import { UnsupportedStorageError } from '../../../utils/errors'

export async function totalUnclaimedAmount(block: BlockHeader): Promise<bigint | undefined> {
    return match(block)
        .returnType<Promise<bigint | undefined>>()
        .when(
            () => claims.totalUnclaimedAmount.matrixEnjinV603.is(block),
            () => claims.totalUnclaimedAmount.matrixEnjinV603.get(block)
        )
        .otherwise(() => {
            throw new UnsupportedStorageError(totalUnclaimedAmount.name)
        })
}
