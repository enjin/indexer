import { Block } from '~/contexts'
import { UnsupportedStorageError } from '~/util/errors'
import { identity } from '~/type/storage'
import { match } from 'ts-pattern'
import { RegistrarInfo } from '~/pallet/identity/storage/types'

export function registrars(block: Block): Promise<(RegistrarInfo | undefined)[] | undefined> {
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
