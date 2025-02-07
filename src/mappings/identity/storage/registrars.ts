import { BlockHeader } from '@enjin/indexer/common/types/contexts'
import { UnsupportedStorageError } from '@enjin/indexer/common/errors'
import { identity } from '../../../types/generated/storage'
import { match } from 'ts-pattern'

type RegistrarInfo = {
    account: string
    fee: bigint
    fields: bigint
}

export function registrars(block: BlockHeader): Promise<(RegistrarInfo | undefined)[] | undefined> {
    return match(block)
        .returnType<Promise<(RegistrarInfo | undefined)[] | undefined>>()
        .when(identity.registrars.matrixEnjinV1000.is, () => identity.registrars.matrixEnjinV1000.get(block))
        .otherwise(() => {
            throw new UnsupportedStorageError('Identity.Registrars')
        })
}
