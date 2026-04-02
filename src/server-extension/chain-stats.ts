import { Arg, Field, Float, Int, ObjectType, Query, Resolver } from 'type-graphql'
import 'reflect-metadata'
import { EntityManager } from 'typeorm'
import { ChainInfo } from '~/model'

const BLOCKS_PER_DAY = 10 * 60 * 24

const DEFAULT_LOOKBACK_DAYS = 30
const DEFAULT_MAX_BLOCKS = BLOCKS_PER_DAY * DEFAULT_LOOKBACK_DAYS

const MAX_BLOCKS_CAP = BLOCKS_PER_DAY * 90

const MS_PER_S = 1000

type Row = {
    blockNumber: number
    delayMs: number
    timestampMs: number
}

function calcDelay(rows: Row[], maxBlocks: number): Row[] {
    const sorted = [...rows].sort((a, b) => a.blockNumber - b.blockNumber)
    const filtered = sorted.filter(
        ({ blockNumber }, index) => index === 0 || blockNumber > (sorted[index - 1]?.blockNumber ?? 0)
    )

    for (let i = 0; i < filtered.length - 1; i++) {
        const a = filtered[i]
        const b = filtered[i + 1]
        if (!a || !b) continue
        if (b.blockNumber - a.blockNumber === 1 && b.delayMs === 0) {
            b.delayMs = b.timestampMs - a.timestampMs
        }
    }

    return filtered.slice(-maxBlocks)
}

@ObjectType()
export class ChainStatsResult {
    @Field()
    isLoaded!: boolean

    @Field(() => Int)
    maxBlocks!: number

    @Field(() => Float)
    timeAvg!: number

    @Field(() => Float)
    timeMax!: number

    @Field(() => Float)
    timeMin!: number
}

function emptyResult(maxBlocks: number): ChainStatsResult {
    return {
        isLoaded: false,
        maxBlocks,
        timeAvg: 0,
        timeMax: 0,
        timeMin: 0,
    }
}

@Resolver()
export class ChainStatsResolver {
    constructor(private tx: () => Promise<EntityManager>) {}

    @Query(() => ChainStatsResult)
    async chainStats(
        @Arg('maxBlocks', () => Int, { nullable: true, defaultValue: DEFAULT_MAX_BLOCKS }) maxBlocksArg?: number
    ): Promise<ChainStatsResult> {
        const maxBlocks = Math.min(Math.max(maxBlocksArg ?? DEFAULT_MAX_BLOCKS, 1), MAX_BLOCKS_CAP)
        const manager = await this.tx()

        const chainRows = await manager.find(ChainInfo, {
            select: { id: true, blockNumber: true, timestamp: true },
            order: { blockNumber: 'DESC' },
            take: maxBlocks,
        })

        if (!chainRows.length) {
            return emptyResult(maxBlocks)
        }

        const sorted = [...chainRows].sort((a, b) => a.blockNumber - b.blockNumber)

        const initial: Row[] = sorted.map((ci) => ({
            blockNumber: ci.blockNumber,
            delayMs: 0,
            timestampMs: ci.timestamp.getTime(),
        }))

        const withDelays = calcDelay(initial, maxBlocks)
        const delaysMs = withDelays.map(({ delayMs }) => delayMs).filter((d) => d > 0)

        if (!delaysMs.length) {
            return {
                ...emptyResult(maxBlocks),
                isLoaded: withDelays.length === maxBlocks,
                maxBlocks,
            }
        }

        const avgMs = delaysMs.reduce((avg, d) => avg + d, 0) / delaysMs.length

        return {
            isLoaded: withDelays.length === maxBlocks,
            maxBlocks,
            timeAvg: avgMs / MS_PER_S,
            timeMax: Math.max(...delaysMs) / MS_PER_S,
            timeMin: Math.min(...delaysMs) / MS_PER_S,
        }
    }
}
