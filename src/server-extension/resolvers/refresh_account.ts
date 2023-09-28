/* eslint-disable max-classes-per-file */
import { Query, Resolver, Arg } from 'type-graphql'
import 'reflect-metadata'
import type { EntityManager } from 'typeorm'
import { decodeAddress } from '@polkadot/util-crypto'
import { u8aToHex } from '@polkadot/util'
import { fetchAccountsDetail } from '../../jobs/fetch-account'

@Resolver()
export class RefreshAccountResolver {
    constructor(private tx: () => Promise<EntityManager>) {}

    @Query(() => Boolean, { nullable: false })
    async refreshAccount(@Arg('ids', () => [String], { defaultValue: [] }) ids: string[]): Promise<boolean> {
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

        await fetchAccountsDetail(pks)

        return true
    }
}
