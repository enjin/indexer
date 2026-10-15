export type ReferendumPallet = 'Referenda' | 'FellowshipReferenda'

export function referendumId(pallet: ReferendumPallet, index: number): string {
    return pallet === 'Referenda' ? String(index) : `FellowshipReferenda:${index}`
}

export function trackId(pallet: ReferendumPallet, index: number): string {
    return `${index}-${pallet === 'Referenda' ? 'rnd' : 'frnd'}`
}

export function voteId(pallet: ReferendumPallet, index: number, accountId: string, currency: string): string {
    return pallet === 'Referenda' ? `${index}-${accountId}-${currency}` : `${pallet}:${index}:${accountId}:${currency}`
}
