import { Arg, Query, Resolver } from 'type-graphql'
import 'reflect-metadata'
import type { EntityManager } from 'typeorm'
import { decodeAddress } from '@polkadot/util-crypto'
import { u8aToHex } from '@polkadot/util'
import { fetchBalances } from '../jobs/fetch-balance'

@Resolver()
export class RefreshBalanceResolver {
    constructor(private tx: () => Promise<EntityManager>) {}

    @Query(() => Boolean, { nullable: false })
    async refreshBalance(@Arg('ids', () => [String], { defaultValue: [] }) ids: string[]): Promise<boolean> {
        if (ids.length === 0) {
            return false
        }

        if (ids.length > 100) {
            throw new Error('Too many accounts to refresh')
        }

        const pks = ids.map((id) => {
            if (!decodeAddress(id)) {
                throw new Error(`Invalid address ${id}`)
            }
            return u8aToHex(decodeAddress(id))
        })

        fetchBalances(pks)

        return true
    }
}
