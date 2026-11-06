import type { Event } from '~/model'
import { eventPositionFromId } from '~/worker/jobs/validators/backfill-event-position'

export type TokenGroupEventOrder = { groups: string[]; baselineEventId: string }

export const TOKEN_GROUP_HISTORY_NAMES = [
    'MultiTokensTokenCreated',
    'MultiTokensTokenGroupAdded',
    'MultiTokensTokenGroupRemoved',
    'MultiTokensTokenGroupsUpdated',
    'MultiTokensTokenDestroyed',
    'MultiTokensEphemeralTokenDestroyed',
]

const REPLAY_EVENTS = new Set(TOKEN_GROUP_HISTORY_NAMES)

function eventOrdinal(event: Event): { blockNumber: number; index: number } | undefined {
    for (const value of [event.blockNumber, event.index]) {
        if (value != null && (!Number.isSafeInteger(value) || value < 0)) return undefined
    }
    if (event.blockNumber != null && event.index != null) {
        return { blockNumber: event.blockNumber, index: event.index }
    }

    try {
        const ordinal = eventPositionFromId(event.id)
        if (
            (event.blockNumber != null && event.blockNumber !== ordinal.blockNumber) ||
            (event.index != null && event.index !== ordinal.index)
        )
            return undefined
        return ordinal
    } catch {
        return undefined
    }
}

function groupId(value: unknown): string | undefined {
    if (typeof value === 'bigint' && value >= 0n) return value.toString()
    if (typeof value === 'string' && /^(0|[1-9]\d*)$/.test(value)) return value
    return undefined
}

/** Replays one token's indexed events. Unknown history stays unknown until a creation or complete group list. */
export function tokenGroupOrderFromEvents(events: Event[]): TokenGroupEventOrder | undefined {
    const ordered: { event: Event; blockNumber: number; index: number }[] = []
    for (const event of events) {
        if (!REPLAY_EVENTS.has(event.name)) continue
        const ordinal = eventOrdinal(event)
        if (!ordinal) return undefined
        ordered.push({ event, ...ordinal })
    }
    ordered.sort((a, b) => a.blockNumber - b.blockNumber || a.index - b.index)
    for (let index = 1; index < ordered.length; index++) {
        const previous = ordered[index - 1]
        const current = ordered[index]
        if (previous.blockNumber === current.blockNumber && previous.index === current.index) return undefined
    }

    let state: TokenGroupEventOrder | undefined
    for (const { event } of ordered) {
        const data = event.data
        if (!data || data.isTypeOf !== event.name) {
            state = undefined
            continue
        }

        try {
            switch (data.isTypeOf) {
                case 'MultiTokensTokenCreated':
                    state = { groups: [], baselineEventId: event.id }
                    break
                case 'MultiTokensTokenDestroyed':
                case 'MultiTokensEphemeralTokenDestroyed':
                    state = undefined
                    break
                case 'MultiTokensTokenGroupsUpdated': {
                    const groups = Array.isArray(data.tokenGroups) ? data.tokenGroups.map(groupId) : undefined
                    state =
                        groups &&
                        groups.every((id): id is string => id !== undefined) &&
                        new Set(groups).size === groups.length
                            ? { groups, baselineEventId: event.id }
                            : undefined
                    break
                }
                case 'MultiTokensTokenGroupAdded': {
                    if (!state) break
                    const id = groupId(data.tokenGroupId)
                    if (id === undefined || state.groups.includes(id)) state = undefined
                    else state.groups.push(id)
                    break
                }
                case 'MultiTokensTokenGroupRemoved': {
                    if (!state) break
                    const id = groupId(data.tokenGroupId)
                    const index = id === undefined ? -1 : state.groups.indexOf(id)
                    // Stable removal and swap removal agree only for the last two positions.
                    if (index < 0 || index < state.groups.length - 2) state = undefined
                    else state.groups.splice(index, 1)
                    break
                }
            }
        } catch {
            state = undefined
        }
    }
    return state
}
