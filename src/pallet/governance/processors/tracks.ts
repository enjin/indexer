import { CommonContext } from '~/contexts'
import { GovernanceTrack } from '~/model'
import { constants } from '~/type'
import { Block } from '~/type/support'
import { ReferendumPallet, trackId } from './ids'
import { jsonValue } from './json'

type GovernanceContext = Pick<CommonContext, 'store'>
type TrackDetails = {
    name: string
    maxDeciding: number
    decisionDeposit: bigint
    preparePeriod: number
    decisionPeriod: number
    confirmPeriod: number
    minEnactmentPeriod: number
    minApproval: unknown
    minSupport: unknown
}

function runtimeTracks(block: Block, pallet: ReferendumPallet): [number, TrackDetails][] {
    const variants = pallet === 'Referenda' ? constants.referenda.tracks : constants.fellowshipReferenda.tracks
    const reader = Object.values(variants).find((variant) => variant.is(block))
    if (!reader) throw new Error(`Unsupported ${pallet}.Tracks runtime at block ${block.height}`)
    return reader.get(block)
}

async function saveTrack(
    ctx: GovernanceContext,
    block: Block,
    pallet: ReferendumPallet,
    trackIndex: number,
    details: TrackDetails
): Promise<GovernanceTrack> {
    const id = trackId(pallet, trackIndex)
    const existing = await ctx.store.findOneBy(GovernanceTrack, { id })
    if (existing && existing.updatedAtBlock > block.height) return existing
    // Runtime track names may contain NUL padding, which PostgreSQL text cannot store.
    const name = details.name.replace(/\0/g, '')
    const row = existing ?? new GovernanceTrack({ id, pallet, trackIndex, name, updatedAtBlock: block.height })
    row.name = name
    row.maxDeciding = details.maxDeciding
    row.decisionDeposit = details.decisionDeposit
    row.preparePeriod = details.preparePeriod
    row.decisionPeriod = details.decisionPeriod
    row.confirmPeriod = details.confirmPeriod
    row.minEnactmentPeriod = details.minEnactmentPeriod
    row.minApproval = jsonValue(details.minApproval)
    row.minSupport = jsonValue(details.minSupport)
    row.updatedAtBlock = block.height
    await ctx.store.save(row)
    return row
}

export async function ensureTrack(
    ctx: GovernanceContext,
    block: Block,
    pallet: ReferendumPallet,
    trackIndex: number
): Promise<GovernanceTrack | null> {
    const entry = runtimeTracks(block, pallet).find(([index]) => index === trackIndex)
    return entry ? saveTrack(ctx, block, pallet, entry[0], entry[1]) : null
}

export async function snapshotTracks(ctx: GovernanceContext, block: Block): Promise<number> {
    let count = 0
    for (const pallet of ['Referenda', 'FellowshipReferenda'] as const) {
        for (const [trackIndex, details] of runtimeTracks(block, pallet)) {
            await saveTrack(ctx, block, pallet, trackIndex, details)
            count++
        }
    }
    return count
}
