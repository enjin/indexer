/* eslint-disable max-classes-per-file */
import { Query, Resolver, Arg, ObjectType, Field } from 'type-graphql'
import 'reflect-metadata'
import { isAddress } from 'web3-validator'
import { ApiPromise, WsProvider } from '@polkadot/api'
import config from '../../config'

const wsProvider = new WsProvider(config.dataSource.chain)
const apiPromise = ApiPromise.create({ provider: wsProvider })

@ObjectType()
export class ClaimableCollectionIdsResult {
    @Field(() => [String], { nullable: false })
    ids!: string[]

    @Field(() => String, { nullable: false })
    address!: string

    constructor(props: Partial<ClaimableCollectionIdsResult>) {
        Object.assign(this, props)
    }
}

@Resolver()
export class ClaimableCollectionIdsResolver {
    @Query(() => [ClaimableCollectionIdsResult])
    async claimableCollectionIds(
        @Arg('addresses', () => [String], {
            description: 'ethereum addresses',
        })
        addresses: string[]
    ): Promise<ClaimableCollectionIdsResult[]> {
        if (!addresses.length) {
            return []
        }

        if (!addresses.every((address) => isAddress(address))) {
            throw new Error('Invalid address')
        }

        const api = await apiPromise

        const res = await api.query.multiTokens.claimableCollectionIds.multi(addresses)

        return addresses.map((address, index) => {
            return {
                address,
                ids: res[index].toJSON() ? (res[index].toJSON() as string[]) : [],
            }
        })
    }
}
