// import { Arg, Query, Resolver } from 'type-graphql'
// import 'reflect-metadata'
// import { type EntityManager } from 'typeorm'
// import { NominationPool } from '../../model'
// import { fetchPool } from '../../jobs/fetch-pool'
//
// @Resolver()
// export class RefreshPoolResolver {
//     constructor(private tx: () => Promise<EntityManager>) {}
//
//     @Query(() => Boolean)
//     async refreshPool(@Arg('id', () => String) id: string): Promise<boolean> {
//         const manager = await this.tx()
//
//         const pool = await manager.findOneOrFail(NominationPool, {
//             where: { id },
//         })
//
//         await fetchPool(pool.id)
//
//         return true
//     }
// }
