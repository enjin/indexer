import { Block } from '~/type/support'
import { claims as claimsStorage } from '~/type/storage'
import { match } from 'ts-pattern'
import { UnsupportedStorageError } from '~/util/errors'

/**
 * Whether `Claims::<T>::get(address)` holds an entry in `block`'s state. An empty vec still counts: `move_claim`
 * moves (and overwrites with) whatever `take` returns.
 */
export async function hasClaims(block: Block, address: string): Promise<boolean> {
    return match(block)
        .returnType<Promise<boolean>>()
        .when(
            () => claimsStorage.claims.matrixEnjinV603.is(block),
            async () => (await claimsStorage.claims.matrixEnjinV603.get(block, address)) !== undefined
        )
        .otherwise(() => {
            throw new UnsupportedStorageError(hasClaims.name)
        })
}
