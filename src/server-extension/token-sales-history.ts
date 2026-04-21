import { Field, Int, ObjectType, Query, Resolver, Arg } from 'type-graphql'
import 'reflect-metadata'
import type { EntityManager } from 'typeorm'
import { Listing, ListingSale, Token } from '~/model'

@ObjectType()
export class TokenSale {
    @Field({ nullable: false })
    price!: string

    @Field({ nullable: false })
    trades!: string

    @Field({ nullable: false })
    amount!: string

    @Field({ nullable: false })
    day!: Date

    @Field(() => Int, { nullable: true })
    decimalCount!: number | null

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
            .leftJoin(Token, 'make_token', 'make_token.id = listing.make_asset_id_id')
            .leftJoin(Token, 'take_token', 'take_token.id = listing.take_asset_id_id')
            .where('(listing.make_asset_id_id = :id OR listing.take_asset_id_id = :id)', { id })
            .select('DATE(listing_sale.created_at) AS day')
            .addSelect('COUNT(*) AS trades')
            .addSelect('SUM(listing_sale.price) AS price')
            .addSelect('SUM(listing_sale.amount) AS amount')
            .addSelect(
                `MAX(CASE WHEN listing.make_asset_id_id = :id THEN (make_token.native_metadata ->> 'decimalCount')::int ELSE (take_token.native_metadata ->> 'decimalCount')::int END)`,
                'decimalCount'
            )

        if (fromDate) {
            builder.andWhere('listing_sale.created_at >= :fromDate', { fromDate })
        }

        return builder.groupBy('day').orderBy('day').getRawMany()
    }
}
