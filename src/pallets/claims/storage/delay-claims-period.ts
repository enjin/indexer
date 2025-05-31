import { Block } from '../../../contexts'
import { claims } from '../../../types/storage'
import { match } from 'ts-pattern'
import { UnsupportedStorageError } from '../../../utils/errors'

export async function delayClaimsPeriod(block: Block): Promise<number | undefined> {
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
