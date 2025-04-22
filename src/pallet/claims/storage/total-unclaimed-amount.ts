import { Block } from '../../../contexts'
import { claims } from '../../../type/storage'
import { match } from 'ts-pattern'
import { UnsupportedStorageError } from '../../../util/errors'

export async function totalUnclaimedAmount(block: Block): Promise<bigint | undefined> {
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
