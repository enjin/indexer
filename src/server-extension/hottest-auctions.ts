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
import { ChainInfo, Collection, Listing, ListingType, Token } from '../model'
import { BigInteger, Json } from '@subsquid/graphql-server'
import { DateTimeColumn as DateTimeColumn_ } from '@subsquid/typeorm-store/lib/decorators/columns/DateTimeColumn'

@ArgsType()
class HottestAuctionsArgs {
    @Field(() => Int, { defaultValue: 10 })
    limit: number = 10

    @Field(() => Int, { defaultValue: 0 })
    offset: number = 0
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

    @Field(() => [AuctionCollectionAttribute])
    collectionAttributes!: AuctionCollectionAttribute[]
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

    @Field(() => Json)
    lastSale!: typeof Json

    @Field(() => AuctionTokenCollection)
    collection!: AuctionTokenCollection

    @Field(() => [AuctionTokenAttribute])
    tokenAttributes!: AuctionTokenAttribute[]
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

    @Field(() => Int)
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
class FilterTokenCondition {
    @Field(() => String, { nullable: true })
    key_eq?: string

    @Field(() => [String], { nullable: true })
    key_in?: string[]
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
    @Field(() => [FilterTokenCondition], { nullable: true })
    AND?: FilterTokenCondition[]
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
    async hottestAuctions(@Args() { limit, offset }: HottestAuctionsArgs): Promise<HottestAuction[]> {
        const em = await this.tx()

        const currentBlock = await em
            .getRepository(ChainInfo)
            .createQueryBuilder('chain_info')
            .orderBy('block_number', 'DESC')
            .getOneOrFail()

        const builder = em
            .createQueryBuilder(Listing, 'listing')
            .leftJoinAndMapOne('listing.makeAssetId', Token, 'makeAssetId', 'listing.makeAssetId = makeAssetId.id')
            .leftJoinAndMapOne('listing.takeAssetId', Token, 'takeAssetId', 'listing.takeAssetId = takeAssetId.id')
            .leftJoinAndMapOne(
                'makeAssetId.collection',
                Collection,
                'collection',
                'makeAssetId.collection = collection.id'
            )
            .where(
                "(listing.data->>'endHeight')::int > :currentBlock AND listing.isActive = true AND listing.type = :listingType",
                {
                    type: 'AuctionData',
                    currentBlock: currentBlock.blockNumber,
                    listingType: ListingType.Auction,
                }
            )
            .andWhere("collection.stats->>'volume' > '100' AND collection.hidden = false")
            .andWhere("takeAssetId.id = '0-0' AND makeAssetId.id != '0-0'")
            .orderBy("listing.data->>'endHeight'", 'ASC')
            .skip(offset)
            .limit(limit)

        const data = (await builder.getMany()) as any[]

        return data
    }

    @FieldResolver(() => [AuctionCollectionAttribute])
    collectionAttributes(
        @Root() hottestAuctions: HottestAuction,
        @Arg('where', () => AuctionCollectionAttributeWhereInput, { defaultValue: [] })
        where?: AuctionCollectionAttributeWhereInput
    ): AuctionCollectionAttribute[] {
        if (!where || !where.AND || where.AND.length === 0) {
            return hottestAuctions.makeAssetId.collection.collectionAttributes
        }

        const keyEq = where.AND.find((cond) => cond.key_eq)
        const keyIn = where.AND.find((cond) => cond.key_in)
        if ((!keyEq && !keyIn) || (keyEq && !keyIn && !keyEq.key_eq) || (keyIn && !keyEq && !keyIn.key_in)) {
            return hottestAuctions.makeAssetId.collection.collectionAttributes
        }

        return (
            hottestAuctions.makeAssetId.collection.collectionAttributes.filter((attr) => {
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

    @FieldResolver(() => [AuctionTokenAttribute])
    tokenAttributes(
        @Root() makeAssetId: AuctionToken,
        @Arg('where', () => AuctionTokenAttributeWhereInput, { defaultValue: [] })
        where?: AuctionTokenAttributeWhereInput
    ): AuctionTokenAttribute[] {
        if (!where || !where.AND || where.AND.length === 0) {
            return makeAssetId.tokenAttributes
        }

        const keyEq = where.AND.find((cond) => cond.key_eq)
        const keyIn = where.AND.find((cond) => cond.key_in)
        if ((!keyEq && !keyIn) || (keyEq && !keyIn && !keyEq.key_eq) || (keyIn && !keyEq && !keyIn.key_in)) {
            return makeAssetId.tokenAttributes
        }

        return (
            makeAssetId.tokenAttributes.filter((attr) => {
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
