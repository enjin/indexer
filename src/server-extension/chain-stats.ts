import { Arg, Field, Float, Int, ObjectType, Query, Resolver } from 'type-graphql'
import 'reflect-metadata'
import { EntityManager } from 'typeorm'

const BLOCKS_PER_DAY = 10 * 60 * 24

const DEFAULT_LOOKBACK_DAYS = 30
const DEFAULT_MAX_ITEMS = BLOCKS_PER_DAY * DEFAULT_LOOKBACK_DAYS

const MAX_ITEMS_CAP = BLOCKS_PER_DAY * 90

type StatsRow = {
    row_count: string | number
    delay_count: string | number
    time_avg: string | null
    time_stddev: string | null
    time_min: string | null
    time_max: string | null
}

const STATS_SQL = `
WITH recent AS (
  SELECT block_number, "timestamp"
  FROM chain_info
  ORDER BY block_number DESC
  LIMIT $1
),
ascending AS (
  SELECT
    block_number,
    "timestamp",
    LAG("timestamp") OVER (ORDER BY block_number) AS prev_ts,
    LAG(block_number) OVER (ORDER BY block_number) AS prev_bn
  FROM recent
),
intervals AS (
  SELECT
    block_number,
    "timestamp",
    CASE
      WHEN prev_bn IS NOT NULL AND block_number = prev_bn + 1
      THEN EXTRACT(EPOCH FROM ("timestamp" - prev_ts))
      ELSE NULL
    END AS delay_sec
  FROM ascending
)
SELECT
  (SELECT COUNT(*)::int FROM recent) AS row_count,
  COUNT(*) FILTER (WHERE delay_sec IS NOT NULL)::int AS delay_count,
  AVG(delay_sec) FILTER (WHERE delay_sec IS NOT NULL) AS time_avg,
  COALESCE(STDDEV_POP(delay_sec) FILTER (WHERE delay_sec IS NOT NULL), 0) AS time_stddev,
  MIN(delay_sec) FILTER (WHERE delay_sec IS NOT NULL) AS time_min,
  MAX(delay_sec) FILTER (WHERE delay_sec IS NOT NULL) AS time_max
FROM intervals
`

@ObjectType()
export class ChainStatsResult {
    @Field()
    isLoaded!: boolean

    @Field(() => Int)
    maxBlocks!: number

    @Field(() => Float)
    stdDev!: number

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
        stdDev: 0,
        timeAvg: 0,
        timeMax: 0,
        timeMin: 0,
    }
}

function num(v: string | number | null | undefined): number {
    if (v == null) return 0
    const n = typeof v === 'number' ? v : parseFloat(v)
    return Number.isFinite(n) ? n : 0
}

@Resolver()
export class ChainStatsResolver {
    constructor(private tx: () => Promise<EntityManager>) {}

    @Query(() => ChainStatsResult)
    async chainStats(
        @Arg('maxBlocks', () => Int, { nullable: true, defaultValue: DEFAULT_MAX_ITEMS }) maxBlocksArg?: number
    ): Promise<ChainStatsResult> {
        const maxBlocks = Math.min(Math.max(maxBlocksArg ?? DEFAULT_MAX_ITEMS, 1), MAX_ITEMS_CAP)
        const manager = await this.tx()

        const statsRows = await manager.query<StatsRow[]>(STATS_SQL, [maxBlocks])
        const stats = statsRows[0]
        if (!stats) {
            return emptyResult(maxBlocks)
        }

        const rowCount = Number(stats.row_count)
        if (rowCount === 0) {
            return emptyResult(maxBlocks)
        }

        const delayCount = Number(stats.delay_count)
        const hasDelays = delayCount > 0

        return {
            isLoaded: rowCount === maxBlocks,
            maxBlocks,
            stdDev: hasDelays ? num(stats.time_stddev) : 0,
            timeAvg: hasDelays ? num(stats.time_avg) : 0,
            timeMax: hasDelays ? num(stats.time_max) : 0,
            timeMin: hasDelays ? num(stats.time_min) : 0,
        }
    }
}
