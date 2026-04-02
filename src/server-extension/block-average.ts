import { Field, Float, Int, ObjectType, Query, Resolver } from 'type-graphql'
import 'reflect-metadata'
import { EntityManager } from 'typeorm'
import { ChainInfo } from '~/model'

const DEFAULT_MAX_ITEMS = 50

@ObjectType()
class BlockAverageDetailBlock {
    @Field(() => Int)
    bytes!: number

    @Field(() => Int)
    number!: number
}

@ObjectType()
class BlockAverageDetailEvents {
    @Field(() => Int)
    count!: number

    @Field(() => Int)
    system!: number
}

@ObjectType()
class BlockAverageDetailExtrinsics {
    @Field(() => Int)
    bytes!: number

    @Field(() => Int)
    count!: number
}

@ObjectType()
class BlockAverageDetail {
    @Field(() => BlockAverageDetailBlock)
    block!: BlockAverageDetailBlock

    @Field(() => Float)
    delay!: number

    @Field(() => BlockAverageDetailEvents)
    events!: BlockAverageDetailEvents

    @Field(() => BlockAverageDetailExtrinsics)
    extrinsics!: BlockAverageDetailExtrinsics

    @Field(() => Float)
    now!: number

    @Field(() => String, { nullable: true })
    parentHash!: string | null
}

@ObjectType()
export class BlockAverageResult {
    @Field(() => [BlockAverageDetail])
    details!: BlockAverageDetail[]

    @Field()
    isLoaded!: boolean

    @Field(() => Int)
    maxItems!: number

    @Field(() => Float)
    stdDev!: number

    @Field(() => Float)
    timeAvg!: number

    @Field(() => Float)
    timeMax!: number

    @Field(() => Float)
    timeMin!: number
}

type DetailRow = {
    block: { bytes: number; number: number }
    delay: number
    events: { count: number; system: number }
    extrinsics: { bytes: number; count: number }
    now: number
    parentHash: string | null
}

function calcDelay(details: DetailRow[], maxItems: number): DetailRow[] {
    const sorted = [...details].sort((a, b) => a.block.number - b.block.number)
    const filtered = sorted.filter(
        ({ block }, index) => index === 0 || block.number > (sorted[index - 1]?.block.number ?? 0)
    )

    for (let i = 0; i < filtered.length - 1; i++) {
        const a = filtered[i]
        const b = filtered[i + 1]
        if (!a || !b) continue
        if (b.block.number - a.block.number === 1 && b.delay === 0) {
            b.delay = b.now - a.now
        }
    }

    return filtered.slice(-maxItems)
}

function emptyResult(maxItems: number): BlockAverageResult {
    return {
        details: [],
        isLoaded: false,
        maxItems,
        stdDev: 0,
        timeAvg: 0,
        timeMax: 0,
        timeMin: 0,
    }
}

function toGraphqlDetails(rows: DetailRow[]): BlockAverageDetail[] {
    return rows.map((d) => ({
        block: d.block,
        delay: d.delay,
        events: d.events,
        extrinsics: d.extrinsics,
        now: d.now,
        parentHash: d.parentHash,
    }))
}

function summarize(rows: DetailRow[], maxItems: number): BlockAverageResult {
    const delays = rows.map(({ delay }) => delay).filter((delay) => delay > 0)

    if (!delays.length) {
        return {
            ...emptyResult(maxItems),
            details: toGraphqlDetails(rows),
            maxItems,
        }
    }

    const timeAvg = delays.reduce((avg, d) => avg + d, 0) / delays.length
    const stdDev = Math.sqrt(delays.reduce((dev, d) => dev + (timeAvg - d) ** 2, 0) / delays.length)

    return {
        details: toGraphqlDetails(rows),
        isLoaded: rows.length === maxItems,
        maxItems,
        stdDev,
        timeAvg,
        timeMax: Math.max(...delays),
        timeMin: Math.min(...delays),
    }
}

@Resolver()
export class BlockAverageResolver {
    constructor(private tx: () => Promise<EntityManager>) {}

    @Query(() => BlockAverageResult)
    async blockAverage(): Promise<BlockAverageResult> {
        const maxItems = DEFAULT_MAX_ITEMS
        const manager = await this.tx()

        const chainRows = await manager
            .getRepository(ChainInfo)
            .createQueryBuilder('c')
            .orderBy('c.block_number', 'DESC')
            .take(maxItems)
            .getMany()

        if (!chainRows.length) {
            return emptyResult(maxItems)
        }

        const sorted = [...chainRows].sort((a, b) => a.blockNumber - b.blockNumber)
        const blockNumbers = sorted.map((r) => r.blockNumber)

        const [extRows, evRows] = await Promise.all([
            blockNumbers.length
                ? manager
                      .createQueryBuilder()
                      .select('e.block_number', 'blockNumber')
                      .addSelect('COUNT(*)', 'cnt')
                      .from('extrinsic', 'e')
                      .where('e.block_number IN (:...blockNumbers)', { blockNumbers })
                      .groupBy('e.block_number')
                      .getRawMany<{ blockNumber: number; cnt: string }>()
                : Promise.resolve([]),
            blockNumbers.length
                ? manager
                      .createQueryBuilder()
                      .select('e.block_number', 'blockNumber')
                      .addSelect('COUNT(*)', 'cnt')
                      .from('event', 'ev')
                      .innerJoin('extrinsic', 'e', 'e.id = ev.extrinsic_id')
                      .where('e.block_number IN (:...blockNumbers)', { blockNumbers })
                      .groupBy('e.block_number')
                      .getRawMany<{ blockNumber: number; cnt: string }>()
                : Promise.resolve([]),
        ])

        const extByBlock = new Map<number, number>()
        for (const r of extRows) {
            extByBlock.set(Number(r.blockNumber), Number(r.cnt))
        }
        const evByBlock = new Map<number, number>()
        for (const r of evRows) {
            evByBlock.set(Number(r.blockNumber), Number(r.cnt))
        }

        const initial: DetailRow[] = sorted.map((ci) => {
            const n = ci.blockNumber
            return {
                block: { bytes: 0, number: n },
                delay: 0,
                events: {
                    count: evByBlock.get(n) ?? 0,
                    system: 0,
                },
                extrinsics: {
                    bytes: 0,
                    count: extByBlock.get(n) ?? 0,
                },
                now: ci.timestamp.getTime(),
                parentHash: null,
            }
        })

        const withDelays = calcDelay(initial, maxItems)
        return summarize(withDelays, maxItems)
    }
}
