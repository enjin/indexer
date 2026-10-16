import { UnsupportedStorageError } from '~/util/errors'
import { BlockHeader, ParentBlockHeader } from '@subsquid/substrate-processor'
import { storage } from '~/type'
import { match } from 'ts-pattern'
import { UnbondingMember } from '~/pallet/nomination-pools/storage/types'

export async function unbondingMembers(
    block: BlockHeader | ParentBlockHeader,
    poolId: number,
    member: string
): Promise<UnbondingMember | undefined> {
    return match(block)
        .returnType<Promise<UnbondingMember | undefined>>()
        .when(
            () => storage.nominationPools.unbondingMembers.enjinV101.is(block),
            () => storage.nominationPools.unbondingMembers.enjinV101.get(block, poolId, member)
        )
        .otherwise(() => {
            throw new UnsupportedStorageError(unbondingMembers.name)
        })
}
