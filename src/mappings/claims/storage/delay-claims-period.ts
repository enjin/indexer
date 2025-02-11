import { BlockHeader } from '../../../common/types/contexts'
import { claims } from '../../../types/generated/storage'
import { match } from 'ts-pattern'
import { UnsupportedStorageError } from '../../../common/errors'

export async function delayClaimsPeriod(block: BlockHeader): Promise<number | undefined> {
    return match(block)
        .returnType<Promise<number | undefined>>()
        .when(
            () => claims.delayClaimsPeriod.matrixEnjinV603.is(block),
            () => claims.delayClaimsPeriod.matrixEnjinV603.get(block)
        )
        .otherwise(() => {
            throw new UnsupportedStorageError(delayClaimsPeriod.name)
        })
}
