/* eslint-disable max-classes-per-file */
import { Query, Resolver, Arg } from 'type-graphql'
import 'reflect-metadata'
import type { EntityManager } from 'typeorm'
import { decodeAddress } from '@polkadot/util-crypto'
import { Account } from '../../model'

@Resolver()
export class RefreshAccountResolver {
    constructor(private tx: () => Promise<EntityManager>) {}

    @Query(() => Boolean, { nullable: false })
    async refreshAccount(@Arg('id') id: string): Promise<boolean> {
        const manager = await this.tx()

        if (!id || decodeAddress(id) == null) {
            return false
        }

        const account = await manager.findOneBy(Account, { id })

        if (account) {
            
        }

        return true
    }
}
