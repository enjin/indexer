import { Query, Resolver, Arg, ObjectType, Field } from 'type-graphql'
import 'reflect-metadata'
import { isAddress } from 'web3-validator'
import Rpc from '../util/rpc'

@ObjectType()
export class ClaimableCollectionsResult {
    @Field(() => [String], { nullable: false })
    ids!: string[]

    @Field(() => String, { nullable: false })
    address!: string

    constructor(props: Partial<ClaimableCollectionsResult>) {
        Object.assign(this, props)
    }
}

@Resolver()
export class ClaimableCollectionsResolver {
    @Query(() => [ClaimableCollectionsResult])
    async claimableCollectionIds(
        @Arg('addresses', () => [String], {
            description: 'ethereum addresses',
        })
        addresses: string[]
    ): Promise<ClaimableCollectionsResult[]> {
        if (!addresses.length) {
            return []
        }

        if (!addresses.every((address) => isAddress(address))) {
            throw new Error('Invalid address')
        }

        const { api } = await Rpc.getInstance()
        const res = await api.query.multiTokens.claimableCollectionIds.multi(addresses)

        return addresses.map((address, index) => {
            return {
                address,
                ids: res[index].toJSON() ? (res[index].toJSON() as string[]) : [],
            }
        })
    }
}
