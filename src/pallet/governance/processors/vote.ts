import { constants } from '~/type'
import { Block } from '~/type/support'

function record(value: unknown): Record<string, unknown> {
    return value && typeof value === 'object' && !Array.isArray(value) ? (value as Record<string, unknown>) : {}
}

function encodedVote(value: unknown): number | null {
    const standard = record(value)
    if (standard.__kind !== 'Standard') return null
    const raw = standard.vote
    if (typeof raw === 'number' && Number.isInteger(raw) && raw >= 0 && raw <= 255) return raw
    if (typeof raw === 'bigint' && raw >= 0n && raw <= 255n) return Number(raw)
    return null
}

// The low seven bits encode conviction; the high bit is the aye/nay choice.
export function voteModifier(value: unknown): number | null {
    const raw = encodedVote(value)
    if (raw === null) return null
    const modifier = raw & 0x7f
    return modifier <= 6 ? modifier : null
}

export function voteLockingPeriod(block: Block): number | null {
    const reader = Object.values(constants.convictionVoting.voteLockingPeriod).find((variant) => variant.is(block))
    return reader?.get(block) ?? null
}

// This is the earliest block at which a removed vote's own conviction lock can expire.
// Unlocking is an explicit account/class operation and may remain blocked by other votes.
export function unlockableAtBlock(
    vote: unknown,
    status: string,
    endedAtBlock: number | null | undefined,
    lockingPeriod: number | null
): number | null {
    if (endedAtBlock == null || !['Approved', 'Rejected', 'TimedOut', 'Cancelled', 'Killed'].includes(status)) {
        return null
    }
    const raw = encodedVote(vote)
    const modifier = voteModifier(vote)
    const winning =
        raw !== null &&
        modifier !== null &&
        modifier > 0 &&
        ((status === 'Approved' && (raw & 0x80) !== 0) || (status === 'Rejected' && (raw & 0x80) === 0))
    if (!winning) return endedAtBlock
    if (lockingPeriod === null) return null
    const block = endedAtBlock + lockingPeriod * 2 ** (modifier - 1)
    return Number.isSafeInteger(block) ? block : null
}
