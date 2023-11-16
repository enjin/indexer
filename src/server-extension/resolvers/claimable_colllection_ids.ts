/* eslint-disable max-classes-per-file */
import { Query, Resolver, Arg, ObjectType, Field } from 'type-graphql'
import 'reflect-metadata'
import { ApiPromise, WsProvider } from '@polkadot/api'
import config from '../../config'

const wsProvider = new WsProvider(config.dataSource.chain)
const apiPromise = ApiPromise.create({ provider: wsProvider })

@ObjectType()
export class ClaimableCollectionIdsResult {
    @Field(() => [String], { nullable: true })
    ids?: string[]

    constructor(props: Partial<ClaimableCollectionIdsResult>) {
        Object.assign(this, props)
    }
}

@Resolver()
export class ClaimableCollectionIdsResolver {
    @Query(() => ClaimableCollectionIdsResult)
    async claimableCollectionIds(
        @Arg('address', {
            description: 'ethereum address',
        })
        account: string
    ): Promise<ClaimableCollectionIdsResult> {
        const api = await apiPromise

        const res = await api.query.multiTokens.claimableCollectionIds(account)

        return {
            ids: res.toHuman() as string[],
        }
    }
}
