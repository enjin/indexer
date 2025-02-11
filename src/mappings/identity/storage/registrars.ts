import { BlockHeader } from '../../../common/types/contexts'
import { UnsupportedStorageError } from '../../../common/errors'
import { identity } from '../../../types/generated/storage'
import { match } from 'ts-pattern'
import { RegistrarInfo } from '../../../mappings/identity/storage/types'

export function registrars(block: BlockHeader): Promise<(RegistrarInfo | undefined)[] | undefined> {
    return match(block)
        .returnType<Promise<(RegistrarInfo | undefined)[] | undefined>>()
        .when(
            () => identity.registrars.matrixEnjinV1000.is(block),
            () => identity.registrars.matrixEnjinV1000.get(block)
        )
        .otherwise(() => {
            throw new UnsupportedStorageError(registrars.name)
        })
}
