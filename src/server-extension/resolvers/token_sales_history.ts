/* eslint-disable max-classes-per-file */
import { Field, ObjectType, Query, Resolver, Arg } from 'type-graphql'
import 'reflect-metadata'
import type { EntityManager } from 'typeorm'
import { Listing, ListingSale } from '../../model'

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
            .getRepository(ListingSale)
            .createQueryBuilder('listing_sale')
            .leftJoinAndMapOne('listing_sale.listing', Listing, 'listing', 'listing_sale.listing_id = listing.id')
            .where('listing.make_asset_id_id = :id', { id })
            .select('DATE(listing_sale.created_at) AS day')
            .addSelect('COUNT(*) AS trades')
            .addSelect('SUM(listing_sale.price) AS price')

        if (fromDate) {
            builder.andWhere('listing_sale.created_at >= :fromDate', { fromDate })
        }

        return builder.groupBy('day').orderBy('day').getRawMany()
    }
}
