import { BlockHeader } from '@enjin/indexer/common/types/contexts'
import { UnsupportedStorageError } from '@enjin/indexer/common/errors'
import { identity } from '../../../types/generated/storage'

export function registrars(block: BlockHeader) {
    if (identity.registrars.matrixEnjinV1000.is(block)) {
        return identity.registrars.matrixEnjinV1000.get(block)
    }

    throw new UnsupportedStorageError('Identity.Registrars')
}
