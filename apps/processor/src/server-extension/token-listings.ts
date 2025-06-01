import { Field, ObjectType, Query, Resolver, Arg, ID, registerEnumType, Int, createUnionType } from 'type-graphql'
import { BigInteger } from '@subsquid/graphql-server'
import { Listing, Token, TokenAccount, Account } from '../model'
import 'reflect-metadata'
import { EntityManager } from 'typeorm'

enum ListingType {
    FixedPrice = 'FixedPrice',
    Auction = 'Auction',
    Offer = 'Offer',
}

enum ListingOrderInput {
    ASC = 'ASC',
    DESC = 'DESC',
}

enum ListingOrderByInput {
    AMOUNT = 'amount',
    PRICE = 'price',
}

registerEnumType(ListingType, {
    name: 'ListingType',
})

registerEnumType(ListingOrderInput, {
    name: 'ListingOrderInput',
})

registerEnumType(ListingOrderByInput, {
    name: 'ListingOrderByInput',
})

@ObjectType()
export class Seller {
    @Field(() => ID)
    id!: string

    @Field({ nullable: true })
    username!: string

    @Field({ nullable: true })
    verifiedAt?: string
}

@ObjectType()
export class FixedPriceData {
    @Field(() => ListingType)
    listingType!: ListingType.FixedPrice
}

@ObjectType()
export class AuctionData {
    @Field(() => ListingType)
    listingType!: ListingType.Auction
    @Field(() => Int)
    startHeight!: number
    @Field(() => Int)
    endHeight!: number
}

@ObjectType()
export class OfferData {
    @Field(() => ListingType)
    listingType!: ListingType.Offer
    @Field(() => Int, { nullable: true })
    expiration?: number
}

const ListingData = createUnionType({
    name: 'ListingData',
    types: () => [FixedPriceData, AuctionData, OfferData] as const,
    resolveType: (value) => {
        if (value.listingType === 'FixedPrice') return FixedPriceData
        if (value.listingType === 'Auction') return AuctionData
        if (value.listingType === 'Offer') return OfferData
        return undefined
    },
})

@ObjectType()
export class FixedPriceState {
    @Field(() => ListingType)
    listingType!: ListingType.FixedPrice

    @Field(() => BigInteger)
    amountFilled!: typeof BigInteger
}

@ObjectType()
export class AuctionState {
    @Field(() => ListingType)
    listingType!: ListingType.Auction
}

@ObjectType()
export class OfferState {
    @Field(() => ListingType)
    listingType!: ListingType.Offer

    @Field(() => Int)
    counterOfferCount!: number
}

const ListingState = createUnionType({
    name: 'ListingState',
    types: () => [FixedPriceState, AuctionState, OfferState] as const,
    resolveType: (value) => {
        if (value.listingType === 'FixedPrice') return FixedPriceState
        if (value.listingType === 'Auction') return AuctionState
        if (value.listingType === 'Offer') return OfferState
        return undefined
    },
})

@ObjectType()
export class TokenListing {
    @Field(() => ID)
    id!: string

    @Field(() => BigInteger)
    amount!: typeof BigInteger

    @Field(() => BigInteger)
    highestPrice!: typeof BigInteger

    @Field(() => BigInteger)
    price!: typeof BigInteger

    @Field()
    isActive!: boolean

    @Field(() => Seller)
    seller!: Seller

    @Field(() => ListingType)
    type!: ListingType

    @Field(() => ListingData)
    data!: typeof ListingData

    @Field(() => ListingState)
    state!: typeof ListingState
}

@ObjectType()
export class TokenListingsEdge {
    @Field(() => TokenListing)
    node!: TokenListing
}

@ObjectType()
export class TokenListingsPageInfo {
    @Field()
    hasNextPage!: boolean

    @Field()
    endCursor!: string
}

@ObjectType()
export class TokenListings {
    @Field(() => Int)
    totalCount!: number

    @Field(() => TokenListingsPageInfo)
    pageInfo!: TokenListingsPageInfo

    @Field(() => [TokenListingsEdge])
    edges!: TokenListingsEdge[]
}

@Resolver()
export class TokenListingsResolver {
    constructor(private tx: () => Promise<EntityManager>) {}

    @Query(() => TokenListings)
    async tokenListings(
        @Arg('assetId', () => String) assetId: string,
        @Arg('hiddenListingId', () => String, { nullable: true }) hiddenListingId: string,
        @Arg('orderBy', () => ListingOrderByInput, { nullable: true, defaultValue: ListingOrderByInput.PRICE })
        orderBy: ListingOrderByInput,
        @Arg('order', () => ListingOrderInput, { nullable: true, defaultValue: ListingOrderInput.ASC })
        order: ListingOrderInput,
        @Arg('limit', () => Int, { nullable: true, defaultValue: 10 }) limit: number,
        @Arg('offset', () => Int, { nullable: true, defaultValue: 0 }) offset: number
    ): Promise<TokenListings> {
        const manager = await this.tx()

        let builder = manager
            .getRepository(Listing)
            .createQueryBuilder('listing')
            .leftJoinAndMapOne('listing.makeAssetId', Token, 'token', 'token.id = listing.make_asset_id_id')
            .leftJoinAndMapOne(
                'listing.sellerTokenAccount',
                TokenAccount,
                'token_account',
                'token_account.token_id = listing.make_asset_id_id AND token_account.account_id = listing.seller_id'
            )
            .leftJoinAndMapOne('listing.seller', Account, 'account', 'account.id = listing.seller_id')
            .where('listing.make_asset_id_id = :assetId', { assetId })
            .andWhere('listing.is_active = true')
            .andWhere('listing.type != :type', { type: ListingType.Offer })
            .andWhere('token_account.is_frozen = false')

        if (hiddenListingId) {
            builder = builder.andWhere('listing.id != :hiddenlistingId', { hiddenListingId: hiddenListingId })
        }

        switch (orderBy) {
            case ListingOrderByInput.AMOUNT:
                builder = builder.orderBy('listing.amount', order).addOrderBy('listing.id', 'ASC')
                break
            case ListingOrderByInput.PRICE:
                builder = builder.orderBy('listing.highestPrice', order).addOrderBy('listing.id', 'ASC')
                break
        }

        builder = builder.skip(offset).take(limit)

        const [data, count] = (await builder.getManyAndCount()) as any[]

        return {
            totalCount: count,
            pageInfo: {
                hasNextPage: count > offset + limit,
                endCursor: `${offset + limit}`,
            },
            edges: data.map((listing: Listing) => ({
                node: {
                    ...listing,
                },
            })),
        }
    }
}
