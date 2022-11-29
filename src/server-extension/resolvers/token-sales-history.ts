/* eslint-disable max-classes-per-file */
import { Field, ObjectType, Query, Resolver, Arg } from 'type-graphql'
import 'reflect-metadata'
import type { EntityManager } from 'typeorm'
import { Listing } from '../../model'

@ObjectType()
export class TokenSale {
    @Field({ nullable: false })
    price!: string

    @Field({ nullable: false })
    trades!: string

    @Field({ nullable: false })
    day!: Date

    constructor(props: Partial<TokenSale>) {
        Object.assign(this, props)
    }
}

@Resolver()
export class TokenSalesHistoryResolver {
    constructor(private tx: () => Promise<EntityManager>) {}

    @Query(() => [TokenSale])
    async tokenSalesHistory(
        @Arg('id', { description: 'id i.e. collectionId+tokenId' }) id: string,
        @Arg('fromDate', { nullable: true }) fromDate: string
    ): Promise<TokenSale[]> {
        const manager = await this.tx()

        const builder = manager
            .getRepository(Listing)
            .createQueryBuilder('token_event')
            .leftJoinAndMapOne(`token_event.listing`, Listing, 'listing', `listing.id = token_event.event->>'listing'`)
            .select('DATE(token_event.created_at) AS day')
            .addSelect('COUNT(*) AS trades')
            .addSelect('SUM(listing.highestPrice) as price')
            .where(`token_event.event->>'isTypeOf' = :isTypeOf`, { isTypeOf: 'MarketplacePurchaseEvent' })
            .andWhere('token_event.token = :id', { id })
        if (fromDate) {
            builder.andWhere('token_event.created_at >= :fromDate', { fromDate })
        }

        return builder.groupBy('day').orderBy('day').getRawMany()
    }
}
