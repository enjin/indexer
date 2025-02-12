import { Query, Resolver } from 'type-graphql'
import 'reflect-metadata'
import type { EntityManager } from 'typeorm'
import { u8aToHex } from '@polkadot/util'
import { decodeAddress } from '@polkadot/util-crypto'
import { Account } from '../model'
// import { fetchBalances } from '../jobs/fetch-balance'

async function* accountsInBatch(em: EntityManager) {
    let skip = 0
    const limit = 100

    while (true) {
        const items = await em
            .getRepository(Account)
            .createQueryBuilder('account')
            .select('account.id')
            .skip(skip)
            .take(limit)
            .getMany()

        yield items
        if (items.length === 0 || items.length < limit) {
            return
        }
        skip += items.length
    }
}

@Resolver()
export class SyncBalancesResolver {
    constructor(private tx: () => Promise<EntityManager>) {}

    @Query(() => Boolean)
    async syncBalances(): Promise<boolean> {
        const manager = await this.tx()

        for await (const accounts of accountsInBatch(manager)) {
            // fetchBalances(accounts.map((account) => u8aToHex(decodeAddress(account.id))))
        }

        return true
    }
}
