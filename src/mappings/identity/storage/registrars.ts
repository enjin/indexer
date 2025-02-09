import { BlockHeader } from '@enjin/indexer/common/types/contexts'
import { UnsupportedStorageError } from '@enjin/indexer/common/errors'
import { identity } from '../../../types/generated/storage'
import { match } from 'ts-pattern'
import { RegistrarInfo } from '@enjin/indexer/mappings/identity/storage/types'

export function registrars(block: BlockHeader): Promise<(RegistrarInfo | undefined)[] | undefined> {
    return match(block)
        .returnType<Promise<(RegistrarInfo | undefined)[] | undefined>>()
        .when(identity.registrars.matrixEnjinV1000.is, identity.registrars.matrixEnjinV1000.get)
        .otherwise(() => {
            throw new UnsupportedStorageError(registrars.name)
        })
}
