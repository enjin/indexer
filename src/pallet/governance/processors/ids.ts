export type ReferendumPallet = 'Referenda' | 'FellowshipReferenda'

export function referendumId(pallet: ReferendumPallet, index: number): string {
    return pallet === 'Referenda' ? String(index) : `FellowshipReferenda:${index}`
}

export function trackId(pallet: ReferendumPallet, index: number): string {
    return `${index}-${pallet === 'Referenda' ? 'rnd' : 'frnd'}`
}
