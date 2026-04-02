import { Arg, Field, Float, Int, ObjectType, Query, Resolver } from 'type-graphql'
import 'reflect-metadata'
import { EntityManager } from 'typeorm'
import { ChainInfo } from '~/model'

const BLOCKS_PER_DAY = 10 * 60 * 24

const DEFAULT_LOOKBACK_DAYS = 30
const DEFAULT_MAX_ITEMS = BLOCKS_PER_DAY * DEFAULT_LOOKBACK_DAYS

const MAX_ITEMS_CAP = BLOCKS_PER_DAY * 90

const MS_PER_S = 1000

@ObjectType()
class BlockAverageDetail {
    @Field(() => Int)
    blockNumber!: number

    @Field(() => Float)
    delay!: number

    @Field()
    timestamp!: string
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
    blockNumber: number
    delayMs: number
    timestampMs: number
}

function calcDelay(details: DetailRow[], maxItems: number): DetailRow[] {
    const sorted = [...details].sort((a, b) => a.blockNumber - b.blockNumber)
    const filtered = sorted.filter(
        ({ blockNumber }, index) =>
            index === 0 || blockNumber > (sorted[index - 1]?.blockNumber ?? 0)
    )

    for (let i = 0; i < filtered.length - 1; i++) {
        const a = filtered[i]
        const b = filtered[i + 1]
        if (!a || !b) continue
        if (b.blockNumber - a.blockNumber === 1 && b.delayMs === 0) {
            b.delayMs = b.timestampMs - a.timestampMs
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
        blockNumber: d.blockNumber,
        delay: d.delayMs / MS_PER_S,
        timestamp: new Date(d.timestampMs).toISOString(),
    }))
}

function summarize(rows: DetailRow[], maxItems: number): BlockAverageResult {
    const delaysMs = rows.map(({ delayMs }) => delayMs).filter((d) => d > 0)

    if (!delaysMs.length) {
        return {
            ...emptyResult(maxItems),
            details: toGraphqlDetails(rows),
            maxItems,
        }
    }

    const avgMs = delaysMs.reduce((avg, d) => avg + d, 0) / delaysMs.length
    const stdDevMs = Math.sqrt(delaysMs.reduce((dev, d) => dev + (avgMs - d) ** 2, 0) / delaysMs.length)

    return {
        details: toGraphqlDetails(rows),
        isLoaded: rows.length === maxItems,
        maxItems,
        stdDev: stdDevMs / MS_PER_S,
        timeAvg: avgMs / MS_PER_S,
        timeMax: Math.max(...delaysMs) / MS_PER_S,
        timeMin: Math.min(...delaysMs) / MS_PER_S,
    }
}

@Resolver()
export class BlockAverageResolver {
    constructor(private tx: () => Promise<EntityManager>) {}

    @Query(() => BlockAverageResult)
    async blockAverage(
        @Arg('maxItems', () => Int, { nullable: true, defaultValue: DEFAULT_MAX_ITEMS }) maxItemsArg?: number
    ): Promise<BlockAverageResult> {
        const maxItems = Math.min(Math.max(maxItemsArg ?? DEFAULT_MAX_ITEMS, 1), MAX_ITEMS_CAP)
        const manager = await this.tx()

        const chainRows = await manager.find(ChainInfo, {
            select: { id: true, blockNumber: true, timestamp: true },
            order: { blockNumber: 'DESC' },
            take: maxItems,
        })

        if (!chainRows.length) {
            return emptyResult(maxItems)
        }

        const sorted = [...chainRows].sort((a, b) => a.blockNumber - b.blockNumber)

        const initial: DetailRow[] = sorted.map((ci) => ({
            blockNumber: ci.blockNumber,
            delayMs: 0,
            timestampMs: ci.timestamp.getTime(),
        }))

        const withDelays = calcDelay(initial, maxItems)
        return summarize(withDelays, maxItems)
    }
}
