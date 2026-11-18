import { ParentBlockHeader } from '@subsquid/substrate-processor'
import { Block } from '~/contexts'
import { UnsupportedStorageError } from '~/util/errors'
import { storage } from '~/type'
import { match } from 'ts-pattern'
import { Nominations } from '~/pallet/staking/storage/types'

export async function nominators(block: Block | ParentBlockHeader, account: string): Promise<Nominations | undefined> {
    return match(block)
        .returnType<Promise<Nominations | undefined>>()
        .when(
            () => storage.staking.nominators.enjinV100.is(block),
            () => storage.staking.nominators.enjinV100.get(block, account)
        )
        .otherwise(() => {
            throw new UnsupportedStorageError('Staking.Nominators')
        })
}
