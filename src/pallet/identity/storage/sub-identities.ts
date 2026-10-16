import { Block } from '~/contexts'
import { UnsupportedStorageError } from '~/util/errors'
import { identity } from '~/type/storage'
import { match } from 'ts-pattern'
import { AccountId32, Data } from '~/pallet/common/types'

/** `Identity.SubsOf(main)`: the sub-accounts of `main`, in storage order (empty when it has none). */
export function subsOf(block: Block, main: AccountId32): Promise<AccountId32[]> {
    return match(block)
        .returnType<Promise<AccountId32[]>>()
        .when(
            () => identity.subsOf.matrixEnjinV1000.is(block),
            async () => (await identity.subsOf.matrixEnjinV1000.get(block, main))?.[1] ?? []
        )
        .otherwise(() => {
            throw new UnsupportedStorageError(subsOf.name)
        })
}

/** `Identity.SuperOf(sub)` for each sub: its main account and sub-name. */
export function superOfMany(block: Block, subs: AccountId32[]): Promise<([AccountId32, Data] | undefined)[]> {
    return match(block)
        .returnType<Promise<([AccountId32, Data] | undefined)[]>>()
        .when(
            () => identity.superOf.matrixEnjinV1000.is(block),
            () => identity.superOf.matrixEnjinV1000.getMany(block, subs)
        )
        .otherwise(() => {
            throw new UnsupportedStorageError(superOfMany.name)
        })
}
