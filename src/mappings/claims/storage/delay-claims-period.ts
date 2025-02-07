import { BlockHeader } from '@enjin/indexer/common/types/contexts'
import { claims } from '../../../types/generated/storage'
import { match } from 'ts-pattern'
import { UnsupportedStorageError } from '@enjin/indexer/common/errors'

export async function delayClaimsPeriod(block: BlockHeader): Promise<number> {
    const value = await match(block)
        .when(claims.delayClaimsPeriod.matrixEnjinV603.is, async () => await claims.delayClaimsPeriod.matrixEnjinV603.get(block))
        .otherwise(() => {
            throw new UnsupportedStorageError('Claims.DelayClaimsPeriod')
        })

    return value ?? 7200
}
