/* eslint-disable max-classes-per-file */
import { Query, Resolver, Arg } from 'type-graphql'
import 'reflect-metadata'
import type { EntityManager } from 'typeorm'
import { decodeAddress } from '@polkadot/util-crypto'
import { fetchAccountsDetail } from '../../mappings/util/marketplace'
import { getOrCreateAccount } from '../../mappings/util/entities'

@Resolver()
export class RefreshAccountResolver {
    constructor(private tx: () => Promise<EntityManager>) {}

    @Query(() => Boolean, { nullable: false })
    async refreshAccount(@Arg('id') id: string): Promise<boolean> {
        const manager = await this.tx()

        if (!id || decodeAddress(id).length === 0) {
            return false
        }

        const account = await getOrCreateAccount({ store: manager } as any, decodeAddress(id))

        if (account) {
            const [data] = await fetchAccountsDetail([account.id])
            if (!data) return false
            account.username = data.username
            account.image = data.image
            account.verifiedAt = data.verifiedAt

            await manager.save(account)
        }

        return true
    }
}
