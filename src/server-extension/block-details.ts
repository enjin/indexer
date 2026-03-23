import { Args, ArgsType, Field, ID, Int, ObjectType, Query, Resolver } from 'type-graphql'
import { Json } from '@subsquid/graphql-server'
import 'reflect-metadata'
import { EntityManager } from 'typeorm'
import { ChainInfo, Event, Extrinsic } from '~/model'
import { QueueUtils } from '~/queue'

@ObjectType()
class BlockValidatorRef {
    @Field(() => ID)
    id!: string

    @Field()
    address!: string
}

@ObjectType()
class BlockExtrinsicSignerRef {
    @Field(() => ID)
    id!: string

    @Field()
    address!: string
}

@ObjectType()
class BlockExtrinsic {
    @Field(() => ID)
    id!: string

    @Field()
    hash!: string

    @Field(() => Int)
    blockNumber!: number

    @Field()
    blockHash!: string

    @Field()
    success!: boolean

    @Field()
    pallet!: string

    @Field()
    method!: string

    @Field(() => Json, { nullable: true })
    args!: unknown

    @Field(() => Int)
    nonce!: number

    @Field(() => String)
    createdAt!: string

    @Field(() => BlockExtrinsicSignerRef, { nullable: true })
    signer!: BlockExtrinsicSignerRef | null
}

@ObjectType()
class BlockEvent {
    @Field(() => ID)
    id!: string

    @Field()
    name!: string

    @Field(() => Json, { nullable: true })
    data!: unknown

    @Field(() => String, { nullable: true })
    collectionId!: string | null

    @Field(() => String, { nullable: true })
    tokenId!: string | null

    @Field(() => ID, { nullable: true })
    extrinsicId!: string | null
}

@ObjectType()
class BlockDetailsResult {
    @Field(() => Int)
    blockNumber!: number

    @Field()
    blockHash!: string

    @Field(() => Boolean)
    finalized!: boolean

    @Field(() => String)
    createdAt!: string

    @Field(() => BlockValidatorRef, { nullable: true })
    validator!: BlockValidatorRef | null

    @Field(() => [BlockExtrinsic])
    extrinsics!: BlockExtrinsic[]

    @Field(() => [BlockEvent])
    events!: BlockEvent[]
}

@ArgsType()
class BlockDetailsArgs {
    @Field(() => Int)
    blockNumber!: number
}

@Resolver()
export class BlockDetailsResolver {
    constructor(private tx: () => Promise<EntityManager>) {}

    @Query(() => BlockDetailsResult, { nullable: true })
    async blockDetails(@Args() args: BlockDetailsArgs): Promise<BlockDetailsResult | null> {
        const manager = await this.tx()

        type RawExtrinsic = {
            e_id: string
            e_hash: string
            e_block_number: number
            e_block_hash: string
            e_success: boolean
            e_pallet: string
            e_method: string
            e_args: unknown
            e_nonce: number
            e_created_at: Date
            signer_id: string | null
            signer_address: string | null
        }

        type RawEvent = {
            ev_id: string
            ev_name: string
            ev_data: unknown
            ev_collection_id: string | null
            ev_token_id: string | null
            ev_extrinsic_id: string | null
        }

        const [chainInfo, rawExtrinsics, rawEvents] = await Promise.all([
            manager.getRepository(ChainInfo).findOne({
                where: { blockNumber: args.blockNumber },
            }),
            manager
                .getRepository(Extrinsic)
                .createQueryBuilder('e')
                .leftJoin('account', 'signer', 'signer.id = e.signer_id')
                .select([
                    'e.id AS e_id',
                    'e.hash AS e_hash',
                    'e.block_number AS e_block_number',
                    'e.block_hash AS e_block_hash',
                    'e.success AS e_success',
                    'e.pallet AS e_pallet',
                    'e.method AS e_method',
                    'e.args AS e_args',
                    'e.nonce AS e_nonce',
                    'e.created_at AS e_created_at',
                    'signer.id AS signer_id',
                    'signer.address AS signer_address',
                ])
                .where('e.block_number = :blockNumber', { blockNumber: args.blockNumber })
                .orderBy('e.id', 'ASC')
                .getRawMany<RawExtrinsic>(),
            manager
                .getRepository(Event)
                .createQueryBuilder('ev')
                .innerJoin('extrinsic', 'ex', 'ex.id = ev.extrinsic_id')
                .select([
                    'ev.id AS ev_id',
                    'ev.name AS ev_name',
                    'ev.data AS ev_data',
                    'ev.collection_id AS ev_collection_id',
                    'ev.token_id AS ev_token_id',
                    'ev.extrinsic_id AS ev_extrinsic_id',
                ])
                .where('ex.block_number = :blockNumber', { blockNumber: args.blockNumber })
                .orderBy('ev.id', 'ASC')
                .getRawMany<RawEvent>(),
        ])

        const blockHash = chainInfo?.blockHash ?? (rawExtrinsics[0]?.e_block_hash as string | undefined) ?? null

        if (!blockHash) {
            await QueueUtils.dispatchImportBlock(args.blockNumber)
            return null
        }

        let validator: BlockValidatorRef | null = null
        if (chainInfo?.validator) {
            const row = await manager
                .createQueryBuilder()
                .select(['a.id AS id', 'a.address AS address'])
                .from('account', 'a')
                .where('a.id = :id', { id: chainInfo.validator })
                .getRawOne<{ id: string; address: string }>()
            if (row) {
                validator = { id: row.id, address: row.address }
            }
        }

        const extrinsics: BlockExtrinsic[] = rawExtrinsics.map((e) => ({
            id: e.e_id,
            hash: e.e_hash,
            blockNumber: e.e_block_number,
            blockHash: e.e_block_hash,
            success: e.e_success,
            pallet: e.e_pallet,
            method: e.e_method,
            args: e.e_args,
            nonce: e.e_nonce,
            createdAt: new Date(e.e_created_at).toISOString(),
            signer: e.signer_id ? { id: e.signer_id, address: e.signer_address! } : null,
            finalized: chainInfo?.finalized ?? false,
        }))

        const events: BlockEvent[] = rawEvents.map((e) => ({
            id: e.ev_id,
            name: e.ev_name,
            data: e.ev_data,
            collectionId: e.ev_collection_id ?? null,
            tokenId: e.ev_token_id ?? null,
            extrinsicId: e.ev_extrinsic_id ?? null,
        }))

        return {
            blockNumber: args.blockNumber,
            blockHash,
            finalized: chainInfo?.finalized ?? false,
            createdAt: (chainInfo?.timestamp ?? new Date(rawExtrinsics[0]?.e_created_at)).toISOString(),
            validator,
            extrinsics,
            events,
        }
    }
}
