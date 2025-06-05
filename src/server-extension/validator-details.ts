import { Args, ArgsType, Field, ID, ObjectType, Query, Resolver } from 'type-graphql'
import 'reflect-metadata'
import { EntityManager } from 'typeorm'
import { Identity, Registration, Validator } from '../model'
import { isValidAddress } from '../util/tools'
import { RefreshCollectionsArgs } from './refresh-collections'

@ObjectType()
class ValidatorDetailsResolverResult {
    @Field(() => ID, { nullable: false })
    id!: string

    @Field({ nullable: false })
    address!: string

    @Field({ nullable: true })
    name?: string

    @Field({ nullable: true })
    image?: string

    @Field({ nullable: false })
    uptime30d!: number

    @Field({ nullable: false })
    nominatorsCount!: number

    @Field({ nullable: false })
    producedBlocks24h!: number

    constructor(props: Partial<ValidatorDetailsResolverResult>) {
        Object.assign(this, props)
    }
}

@ArgsType()
export class ValidatorDetailsArgs {
    @Field(() => [String])
    ids!: string[]
}

@Resolver()
export class ValidatorDetailsResolver {
    constructor(private tx: () => Promise<EntityManager>) {}

    @Query(() => [ValidatorDetailsResolverResult])
    async validatorDetails(@Args() args: RefreshCollectionsArgs): Promise<ValidatorDetailsResolverResult[]> {
        if (!args.ids.every(isValidAddress)) {
            throw new Error('Invalid address')
        }

        if (args.ids.length === 0) {
            return []
        }

        const manager = await this.tx()

        return await manager
            .getRepository(Validator)
            .createQueryBuilder('validator')
            .leftJoin('validator.account', 'account')
            .leftJoin(Identity, 'identity', 'identity.account = account.id')
            .leftJoin(Registration, 'registration', 'registration.id = identity.id')
            .select([
                'validator.id as id',
                'account.address as address',
                'registration.image as image',
                "(CASE WHEN identity.isSub = FALSE THEN registration.display WHEN identity.isSub = TRUE THEN CONCAT(registration.display,'/',identity.name) ELSE NULL END) as name",
            ])
            .addSelect('100', 'uptime30d')
            .addSelect((subQuery) => {
                return subQuery
                    .select('COUNT(*)::int')
                    .from('pool_validator', 'pool_validator')
                    .where('pool_validator.validator_id = validator.id')
            }, 'nominatorsCount')
            .addSelect((subquery) => {
                return subquery
                    .select('COUNT(*)::int')
                    .from('chain_info', 'chain_info')
                    .where('chain_info.validator = validator.id')
                    .andWhere('chain_info.block_number > (SELECT MAX(block_number) - :blocksInDay FROM chain_info)', {
                        blocksInDay: 14400, // 10 blocks/min * 60 min * 24 hours = 14400
                    })
            }, 'producedBlocks24h')
            .where('validator.id IN (:...ids)', { ids: args.ids })
            .getRawMany()
    }
}
