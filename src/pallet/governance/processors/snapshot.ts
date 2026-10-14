import { Block, CommonContext } from '~/contexts'
import {
    GovernanceDelegation,
    GovernanceFellowshipMember,
    GovernanceReferendum,
    GovernanceTreasuryItem,
    GovernanceVote,
    GovernanceWhitelistedCall,
} from '~/model'
import { storage } from '~/type'
import { isRelay } from '~/util/tools'
import { FindOptionsWhere } from 'typeorm'
import { jsonValue, refreshReferendum } from './event'
import { HistoricalGovernanceStorage } from './historical'

type GovernanceContext = Pick<CommonContext, 'store'>
type PagedStorage = {
    is(block: Block): boolean
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[unknown, unknown][]>
}

const pageSize = 250

function compatibleStorage(variants: object, block: Block, name: string): PagedStorage {
    const reader = Object.values(variants).find((variant) => (variant as PagedStorage).is(block)) as
        PagedStorage | undefined
    if (!reader) throw new Error(`Unsupported ${name} runtime at block ${block.height}`)
    return reader
}

function storedRecord(value: unknown): Record<string, unknown> {
    return value && typeof value === 'object' && !Array.isArray(value) ? (value as Record<string, unknown>) : {}
}

function account(value: unknown): string {
    if (typeof value === 'string') return value
    throw new Error('Governance storage contains an invalid account key')
}

function index(value: unknown): number {
    if (typeof value === 'number' && Number.isSafeInteger(value) && value >= 0) return value
    throw new Error('Governance storage contains an invalid index key')
}

function currency(value: unknown): string {
    if (value === undefined) return 'Enj'
    const kind = storedRecord(value)
    if (kind.__kind === 'SEnj') return `SEnj:${String(kind.tokenId)}`
    if (kind.__kind === 'Enj') return 'Enj'
    throw new Error('Governance storage contains an invalid vote currency')
}

async function saveIfNotNewer<T extends { id: string; updatedAtBlock: number }>(
    ctx: GovernanceContext,
    entity: new (...args: never[]) => T,
    row: T
): Promise<void> {
    const existing = await ctx.store.findOneBy(entity, { id: row.id } as FindOptionsWhere<T>)
    if (!existing || existing.updatedAtBlock <= row.updatedAtBlock) await ctx.store.save(row)
}

async function linkedReferendum(
    ctx: GovernanceContext,
    id: string,
    cache: Map<string, GovernanceReferendum | null>
): Promise<GovernanceReferendum | null> {
    if (!cache.has(id)) cache.set(id, (await ctx.store.findOneBy(GovernanceReferendum, { id })) ?? null)
    return cache.get(id) ?? null
}

async function snapshotReferenda(
    ctx: GovernanceContext,
    block: Block,
    pallet: 'Referenda' | 'FellowshipReferenda',
    history: HistoricalGovernanceStorage,
    terminalHistory: { recovered: number; unavailable: number }
) {
    const variants =
        pallet === 'Referenda' ? storage.referenda.referendumInfoFor : storage.fellowshipReferenda.referendumInfoFor
    const reader = compatibleStorage(variants, block, `${pallet}.ReferendumInfoFor`)
    let count = 0
    for await (const page of reader.getPairsPaged(pageSize, block)) {
        for (const [key, info] of page) {
            if (info === undefined) continue
            const referendumIndex = index(key)
            const terminal = storedRecord(info).__kind !== 'Ongoing'
            const ongoing = terminal ? await history.ongoingBeforeTerminal(pallet, referendumIndex, info) : undefined
            if (terminal) {
                if (ongoing) terminalHistory.recovered++
                else terminalHistory.unavailable++
            }
            await refreshReferendum(ctx, block, pallet, referendumIndex, '', {}, ongoing)
            count++
        }
    }
    return count
}

async function snapshotConvictionVoting(ctx: GovernanceContext, block: Block) {
    const reader = compatibleStorage(storage.convictionVoting.votingFor, block, 'ConvictionVoting.VotingFor')
    const referenda = new Map<string, GovernanceReferendum | null>()
    let votes = 0
    let delegations = 0
    for await (const page of reader.getPairsPaged(pageSize, block)) {
        for (const [rawKey, rawVoting] of page) {
            if (rawVoting === undefined) continue
            if (!Array.isArray(rawKey)) throw new Error('Invalid ConvictionVoting.VotingFor key')
            const voter = account(rawKey[0])
            const track = index(rawKey[1])
            const voteCurrency = currency(rawKey[2])
            const voting = storedRecord(rawVoting)
            const value = storedRecord(voting.value)
            if (voting.__kind === 'Casting') {
                if (!Array.isArray(value.votes)) throw new Error('Invalid ConvictionVoting casting votes')
                for (const entry of value.votes) {
                    if (!Array.isArray(entry)) throw new Error('Invalid ConvictionVoting casting vote')
                    const referendumIndex = index(entry[0])
                    const referendumId = `Referenda:${referendumIndex}`
                    const row = new GovernanceVote({
                        id: `${referendumId}:${voter}:${voteCurrency}`,
                        referendumId,
                        referendum: (await linkedReferendum(ctx, referendumId, referenda)) ?? undefined,
                        accountId: voter,
                        currency: voteCurrency,
                        vote: jsonValue(entry[1]),
                        active: true,
                        updatedAtBlock: block.height,
                    })
                    await saveIfNotNewer(ctx, GovernanceVote, row)
                    votes++
                }
            } else if (voting.__kind === 'Delegating') {
                const conviction = storedRecord(value.conviction).__kind
                const row = new GovernanceDelegation({
                    id: `${voter}:${track}:${voteCurrency}`,
                    accountId: voter,
                    track,
                    currency: voteCurrency,
                    target: account(value.target),
                    conviction: typeof conviction === 'string' ? conviction : null,
                    balance: typeof value.balance === 'bigint' ? value.balance : null,
                    active: true,
                    updatedAtBlock: block.height,
                })
                await saveIfNotNewer(ctx, GovernanceDelegation, row)
                delegations++
            } else {
                throw new Error('Unsupported ConvictionVoting.VotingFor value')
            }
        }
    }
    return { votes, delegations }
}

async function snapshotFellowship(ctx: GovernanceContext, block: Block) {
    const members = compatibleStorage(storage.fellowshipCollective.members, block, 'FellowshipCollective.Members')
    const voting = compatibleStorage(storage.fellowshipCollective.voting, block, 'FellowshipCollective.Voting')
    const referenda = new Map<string, GovernanceReferendum | null>()
    let memberCount = 0
    let voteCount = 0
    for await (const page of members.getPairsPaged(pageSize, block)) {
        for (const [rawAccount, rawMember] of page) {
            if (rawMember === undefined) continue
            const rank = index(storedRecord(rawMember).rank)
            await saveIfNotNewer(
                ctx,
                GovernanceFellowshipMember,
                new GovernanceFellowshipMember({
                    id: account(rawAccount),
                    rank,
                    active: true,
                    updatedAtBlock: block.height,
                })
            )
            memberCount++
        }
    }
    for await (const page of voting.getPairsPaged(pageSize, block)) {
        for (const [rawKey, vote] of page) {
            if (vote === undefined) continue
            if (!Array.isArray(rawKey)) throw new Error('Invalid FellowshipCollective.Voting key')
            const referendumId = `FellowshipReferenda:${index(rawKey[0])}`
            const voter = account(rawKey[1])
            await saveIfNotNewer(
                ctx,
                GovernanceVote,
                new GovernanceVote({
                    id: `${referendumId}:${voter}:Fellowship`,
                    referendumId,
                    referendum: (await linkedReferendum(ctx, referendumId, referenda)) ?? undefined,
                    accountId: voter,
                    currency: null,
                    vote: jsonValue(vote),
                    active: true,
                    updatedAtBlock: block.height,
                })
            )
            voteCount++
        }
    }
    return { members: memberCount, votes: voteCount }
}

async function snapshotTreasury(ctx: GovernanceContext, block: Block) {
    const proposals = compatibleStorage(storage.treasury.proposals, block, 'Treasury.Proposals')
    const spends = compatibleStorage(storage.treasury.spends, block, 'Treasury.Spends')
    let count = 0
    for (const [kind, reader] of [
        ['Proposal', proposals],
        ['Spend', spends],
    ] as const) {
        for await (const page of reader.getPairsPaged(pageSize, block)) {
            for (const [rawIndex, value] of page) {
                if (value === undefined) continue
                const status = kind === 'Proposal' ? 'Open' : storedRecord(storedRecord(value).status).__kind
                await saveIfNotNewer(
                    ctx,
                    GovernanceTreasuryItem,
                    new GovernanceTreasuryItem({
                        id: `${kind}:${index(rawIndex)}`,
                        kind,
                        itemIndex: index(rawIndex),
                        status: typeof status === 'string' ? status : 'Pending',
                        details: jsonValue(value),
                        updatedAtBlock: block.height,
                    })
                )
                count++
            }
        }
    }
    return count
}

async function snapshotWhitelist(ctx: GovernanceContext, block: Block) {
    const reader = compatibleStorage(storage.whitelist.whitelistedCall, block, 'Whitelist.WhitelistedCall')
    let count = 0
    for await (const page of reader.getPairsPaged(pageSize, block)) {
        for (const [rawHash] of page) {
            const id = account(rawHash)
            const existing = await ctx.store.findOneBy(GovernanceWhitelistedCall, { id })
            if (existing && existing.updatedAtBlock > block.height) continue
            await ctx.store.save(
                new GovernanceWhitelistedCall({
                    id,
                    active: true,
                    lastDispatchedBlock: existing?.lastDispatchedBlock ?? null,
                    updatedAtBlock: block.height,
                })
            )
            count++
        }
    }
    return count
}

/** Import current storage at one finalized block. Historical events require a separate replay. */
export async function snapshotGovernance(ctx: GovernanceContext, block: Block, relay = isRelay()) {
    const history = new HistoricalGovernanceStorage(block)
    const terminalHistory = { recovered: 0, unavailable: 0 }
    const referenda = await snapshotReferenda(ctx, block, 'Referenda', history, terminalHistory)
    const conviction = await snapshotConvictionVoting(ctx, block)
    const fellowshipReferenda = await snapshotReferenda(ctx, block, 'FellowshipReferenda', history, terminalHistory)
    const fellowship = await snapshotFellowship(ctx, block)
    const treasury = relay ? await snapshotTreasury(ctx, block) : 0
    const whitelist = await snapshotWhitelist(ctx, block)
    return { referenda, conviction, fellowshipReferenda, fellowship, treasury, whitelist, terminalHistory }
}
