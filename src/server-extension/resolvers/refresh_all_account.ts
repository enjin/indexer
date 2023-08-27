import { Query, Resolver } from 'type-graphql'
import 'reflect-metadata'
import type { EntityManager } from 'typeorm'
import { fetchAccountsDetail } from '../../mappings/util/marketplace'
import { Account } from '../../model'

let lastCalled = 0
const LIMIT = 100

function isNotNull<T>(input: null | T): input is T {
    return input != null
}

@Resolver()
export class RefreshAllAccountResolver {
    constructor(private tx: () => Promise<EntityManager>) {}

    @Query(() => Boolean, { nullable: false })
    async refreshAllAccount(): Promise<boolean> {
        if (lastCalled && Date.now() - lastCalled < 1000 * 60 * 10) {
            return false
        }

        lastCalled = Date.now()
        const manager = await this.tx()

        const count = await manager.count(Account)

        for (let offset = 0; offset < count - LIMIT; offset += LIMIT) {
            // eslint-disable-next-line no-await-in-loop
            const accounts = await manager.find(Account, { skip: offset, take: LIMIT, select: ['id'] })
            const ids = accounts.map((a) => a.id)
            // eslint-disable-next-line no-await-in-loop
            const data = await fetchAccountsDetail(ids)

            if (!data || data.length === 0) break

            const accountsToUpdate = data.filter(isNotNull).map((a) => ({
                publicKey: a.publicKey ? `'${a.publicKey}'` : 'NULL',
                username: a.username ? `'${a.username}'` : 'NULL',
                image: a.image ? `'${a.image}'` : 'NULL',
                verifiedAt: a.verifiedAt ? `to_timestamp(${new Date(a.verifiedAt).getTime() / 1000})` : 'NULL',
            }))

            // eslint-disable-next-line no-console
            console.log(`Updating ${accountsToUpdate.length} accounts, updated ${offset + LIMIT}/${count} so far`)

            if (accountsToUpdate.length !== 0) {
                // eslint-disable-next-line no-await-in-loop
                await manager.query(
                    `UPDATE account as a SET username = t.username, image = t.image, verified_at = t.verified_at::timestamptz FROM (VALUES${accountsToUpdate
                        .map((a) => `(${a.publicKey}, ${a.username}, ${a.image}, ${a.verifiedAt})`)
                        .join(',')}) AS t(id, username, image, verified_at) WHERE a.id = t.id`
                )
            }
        }

        return true
    }
}
