// import { Arg, Query, Resolver } from 'type-graphql'
// import GraphQLJSON from 'graphql-type-json'
// import 'reflect-metadata'
// import Rpc from '../util/rpc'
//
// @Resolver()
// export class QueryConstantResolver {
//     @Query(() => GraphQLJSON)
//     async queryConstant(@Arg('pallet') pallet: string, @Arg('name') name: string) {
//         const { api } = await Rpc.getInstance()
//
//         const res = api.consts[pallet][name].toJSON()
//
//         return {
//             value: res,
//         }
//     }
// }
