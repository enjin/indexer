import { Query, Resolver, Arg, ObjectType, Field, ArgsType, Args } from 'type-graphql'
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

@ArgsType()
export class ClaimableCollectionsArgs {
    @Field(() => [String])
    addresses!: string[]
}

@Resolver()
export class ClaimableCollectionsResolver {
    @Query(() => [ClaimableCollectionsResult])
    async claimableCollectionIds(@Args() args: ClaimableCollectionsArgs): Promise<ClaimableCollectionsResult[]> {
        if (!args.addresses.length) {
            return []
        }

        if (!args.addresses.every((address) => isAddress(address))) {
            throw new Error('Invalid address')
        }

        const { api } = await Rpc.getInstance()
        const res = await api.query.multiTokens.claimableCollectionIds.multi(args.addresses)

        return args.addresses.map((address, index) => {
            return {
                address,
                ids: res[index].toJSON() ? (res[index].toJSON() as string[]) : [],
            }
        })
    }
}
