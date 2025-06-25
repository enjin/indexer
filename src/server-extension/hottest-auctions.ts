import {
    Query,
    Resolver,
    Arg,
    ObjectType,
    Field,
    Args,
    Int,
    ArgsType,
    ID,
    FieldResolver,
    InputType,
    Root,
} from 'type-graphql'
import 'reflect-metadata'
import type { EntityManager } from 'typeorm'
import { Account, Attribute, ChainInfo, Collection, Listing, ListingSale, ListingType, Token } from '../model'
import { BigInteger, Json } from '@subsquid/graphql-server'

@ArgsType()
class HottestAuctionsArgs {
    @Field(() => Int, { defaultValue: 10 })
    limit: number = 10

    @Field(() => Int, { defaultValue: 0 })
    offset: number = 0

    @Field(() => BigInteger, { nullable: true, defaultValue: '100' })
    minVolume?: typeof BigInteger
}

@ObjectType()
class AuctionAccount {
    @Field(() => ID)
    id!: string

    @Field({ nullable: true })
    username!: string

    @Field(() => Date, { nullable: true })
    verifiedAt!: Date
}

@ObjectType()
class AuctionTokenCollection {
    @Field(() => ID)
    id!: string

    @Field(() => BigInteger)
    collectionId!: typeof BigInteger

    @Field(() => Date, { nullable: true })
    verifiedAt!: Date

    @Field(() => AuctionAccount, { nullable: true })
    owner!: AuctionAccount

    @Field(() => [AuctionCollectionAttribute], { nullable: true })
    attributes!: AuctionCollectionAttribute[]
}

@ObjectType()
class AuctionTokenSale {
    @Field(() => ID)
    id!: string

    @Field(() => BigInteger)
    amount!: typeof BigInteger

    @Field(() => BigInteger)
    price!: typeof BigInteger
}

@ObjectType()
export class AuctionToken {
    @Field(() => ID)
    id!: string

    @Field(() => BigInteger)
    tokenId!: typeof BigInteger

    @Field(() => BigInteger)
    supply!: typeof BigInteger

    @Field(() => Boolean)
    isFrozen!: boolean

    @Field(() => Boolean)
    nonFungible!: boolean

    @Field()
    createdAt!: Date

    @Field(() => AuctionTokenSale, { nullable: true })
    lastSale!: AuctionTokenSale

    @Field(() => AuctionTokenCollection)
    collection!: AuctionTokenCollection

    @Field(() => [AuctionTokenAttribute], { nullable: true })
    attributes!: AuctionTokenAttribute[]
}

@ObjectType()
class HottestAuction {
    @Field(() => ID)
    id!: string

    @Field(() => AuctionAccount, { nullable: false })
    seller!: AuctionAccount

    @Field(() => AuctionToken, { nullable: false })
    makeAssetId!: AuctionToken

    @Field(() => AuctionToken, { nullable: false })
    takeAssetId!: AuctionToken

    @Field(() => BigInteger)
    amount!: typeof BigInteger

    @Field(() => BigInteger)
    price!: typeof BigInteger

    @Field(() => BigInteger)
    minTakeValue!: typeof BigInteger

    @Field(() => BigInteger)
    deposit!: typeof BigInteger

    @Field(() => String)
    salt!: string

    @Field(() => Json)
    data!: typeof Json

    @Field(() => Json)
    state!: typeof Json

    @Field(() => BigInteger)
    highestPrice!: typeof BigInteger

    @Field(() => Boolean)
    isActive!: Boolean

    @Field(() => Int, { nullable: true })
    startBlock!: number

    @Field(() => Date)
    createdAt!: Date

    @Field(() => Date)
    updatedAt!: Date

    constructor(props: Partial<HottestAuction>) {
        Object.assign(this, props)
    }
}

@ObjectType()
class AuctionTokenAttribute {
    @Field(() => AuctionToken)
    token!: AuctionToken

    @Field(() => ID)
    id!: string

    @Field({ nullable: false })
    key!: string

    @Field({ nullable: false })
    value!: string
}

@ObjectType()
class AuctionCollectionAttribute {
    @Field(() => AuctionTokenCollection)
    collection!: AuctionTokenCollection

    @Field(() => ID)
    id!: string

    @Field({ nullable: false })
    key!: string

    @Field({ nullable: false })
    value!: string
}

@InputType()
class FilterCollectionCondition {
    @Field(() => Boolean, { nullable: true })
    token_isNull?: boolean

    @Field(() => String, { nullable: true })
    key_eq?: string

    @Field(() => [String], { nullable: true })
    key_in?: string[]
}

@InputType()
class AuctionTokenAttributeWhereInput {
    @Field(() => Boolean, { nullable: true })
    token_isNull?: boolean

    @Field(() => String, { nullable: true })
    key_eq?: string

    @Field(() => [String], { nullable: true })
    key_in?: string[]
}

@InputType()
class AuctionCollectionAttributeWhereInput {
    @Field(() => [FilterCollectionCondition], { nullable: true })
    AND?: FilterCollectionCondition[]
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
@Resolver((of) => HottestAuction)
export class HottestAuctionsResolver {
    constructor(private tx: () => Promise<EntityManager>) {}

    @Query(() => [HottestAuction], { nullable: true })
    async hottestAuctions(@Args() { limit, offset, minVolume }: HottestAuctionsArgs): Promise<HottestAuction[]> {
        const em = await this.tx()

        const currentBlock = await em
            .getRepository(ChainInfo)
            .createQueryBuilder('chain_info')
            .orderBy('block_number', 'DESC')
            .getOneOrFail()

        const builder = em
            .createQueryBuilder(Listing, 'listing')
            .leftJoinAndMapOne(
                'listing.makeAssetId',
                Token,
                'makeAssetId',
                "listing.makeAssetId = makeAssetId.id AND makeAssetId.id != '0-0'"
            )
            .leftJoinAndMapOne(
                'listing.takeAssetId',
                Token,
                'takeAssetId',
                "listing.takeAssetId = takeAssetId.id AND takeAssetId.id = '0-0'"
            )
            .leftJoinAndMapOne('listing.seller', Account, 'seller', 'listing.seller = seller.id')
            .leftJoinAndMapOne(
                'makeAssetId.collection',
                Collection,
                'collection',
                'makeAssetId.collection = collection.id'
            )
            .leftJoinAndMapOne(
                'makeAssetId.lastSale',
                ListingSale,
                'listingSale',
                'makeAssetId.last_sale_id = listingSale.id'
            )
            .leftJoinAndMapOne('collection.owner', Account, 'collectionOwner', 'collection.owner = collectionOwner.id')
            .where(
                "(listing.data->>'endHeight')::int > :currentBlock AND listing.isActive = true AND listing.type = :listingType",
                {
                    type: 'AuctionData',
                    currentBlock: currentBlock.blockNumber,
                    listingType: ListingType.Auction,
                }
            )
            .andWhere("(collection.stats->>'volume')::numeric > :minVolume AND collection.hidden = false", {
                minVolume,
            })
            .andWhere("takeAssetId.id = '0-0' AND makeAssetId.id != '0-0'")
            .orderBy("listing.data->>'endHeight'", 'ASC')
            .skip(offset)
            .limit(limit)

        const listings = (await builder.getMany()) as any[]

        // Fetch attributes separately to avoid cartesian product but still provide the data
        if (listings.length > 0) {
            const collectionIds = [...new Set(listings.map((l) => l.makeAssetId?.collection?.id).filter(Boolean))]
            const tokenIds = [...new Set(listings.map((l) => l.makeAssetId?.id).filter(Boolean))]

            const [collectionAttributes, tokenAttributes] = await Promise.all([
                // Fetch collection attributes
                collectionIds.length > 0
                    ? em
                          .getRepository(Attribute)
                          .createQueryBuilder('attr')
                          .leftJoinAndSelect('attr.collection', 'collection')
                          .where('attr.collection_id IN (:...collectionIds)', { collectionIds })
                          .getMany()
                    : [],
                // Fetch token attributes
                tokenIds.length > 0
                    ? em
                          .getRepository(Attribute)
                          .createQueryBuilder('attr')
                          .leftJoinAndSelect('attr.token', 'token')
                          .where('attr.token_id IN (:...tokenIds)', { tokenIds })
                          .getMany()
                    : [],
            ])

            // Group attributes by collection
            const collectionAttrMap = new Map()
            collectionAttributes.forEach((attr) => {
                if (attr.collection) {
                    if (!collectionAttrMap.has(attr.collection.id)) {
                        collectionAttrMap.set(attr.collection.id, [])
                    }
                    collectionAttrMap.get(attr.collection.id).push(attr)
                }
            })

            // Group attributes by token
            const tokenAttrMap = new Map()
            tokenAttributes.forEach((attr) => {
                if (attr.token) {
                    if (!tokenAttrMap.has(attr.token.id)) {
                        tokenAttrMap.set(attr.token.id, [])
                    }
                    tokenAttrMap.get(attr.token.id).push(attr)
                }
            })

            // Assign attributes to collections and tokens
            listings.forEach((listing) => {
                if (listing.makeAssetId?.collection?.id) {
                    listing.makeAssetId.collection.attributes =
                        collectionAttrMap.get(listing.makeAssetId.collection.id) || []
                }
                if (listing.makeAssetId?.id) {
                    listing.makeAssetId.attributes = tokenAttrMap.get(listing.makeAssetId.id) || []
                }
            })
        }

        return listings
    }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
@Resolver((of) => AuctionToken)
export class AuctionTokenResolver {
    @FieldResolver(() => [AuctionTokenAttribute])
    attributes(
        @Root() makeAssetId: AuctionToken,
        @Arg('where', () => AuctionTokenAttributeWhereInput, { defaultValue: [] })
        where?: AuctionTokenAttributeWhereInput
    ): AuctionTokenAttribute[] {
        if (!where) {
            return makeAssetId.attributes
        }

        const keyEq = where.key_eq
        const keyIn = where.key_in
        if ((!keyEq && !keyIn) || (keyEq && !keyIn && !keyEq) || (keyIn && !keyEq && !keyIn)) {
            return makeAssetId.attributes
        }

        return (
            makeAssetId.attributes.filter((attr) => {
                if (keyEq) {
                    return attr.key === keyEq
                }

                if (keyIn && keyIn.length > 0) {
                    return keyIn.includes(attr.key)
                }

                return false
            }) ?? []
        )
    }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
@Resolver((of) => AuctionTokenCollection)
export class AuctionTokenCollectionResolver {
    @FieldResolver(() => [AuctionCollectionAttribute])
    attributes(
        @Root() collection: AuctionTokenCollection,
        @Arg('where', () => AuctionCollectionAttributeWhereInput, { defaultValue: [] })
        where?: AuctionCollectionAttributeWhereInput
    ): AuctionCollectionAttribute[] {
        if (!where || !where.AND || where.AND.length === 0) {
            return collection.attributes
        }

        const keyEq = where.AND.find((cond) => cond.key_eq)
        const keyIn = where.AND.find((cond) => cond.key_in)
        if ((!keyEq && !keyIn) || (keyEq && !keyIn && !keyEq.key_eq) || (keyIn && !keyEq && !keyIn.key_in)) {
            return collection.attributes
        }

        return (
            collection.attributes.filter((attr) => {
                if (keyEq?.key_eq) {
                    return attr.key === keyEq.key_eq
                }

                if (keyIn?.key_in && keyIn?.key_in.length > 0) {
                    return keyIn?.key_in?.includes(attr.key)
                }

                return false
            }) ?? []
        )
    }
}
