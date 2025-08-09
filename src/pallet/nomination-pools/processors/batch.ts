import { In } from 'typeorm'
import { BlockHeader } from '@subsquid/substrate-processor'
import { CommonContext, EventItem } from '~/contexts'
import * as mappings from '~/pallet/index'
import { Era, PoolMember, Token, TokenAccount, UnbondingEras, Collection, FreezeState } from '~/model'
import { updatePool } from './pool'
import { events } from '~/type'

// Collectors
interface BondedSpec {
    poolId: string
    member: string
    bonded: bigint
}
interface UnbondedSpec {
    poolId: string
    member: string
    balance: bigint
    era: number
}
interface WithdrawnSpec {
    poolId: string
    member: string
}

const bondedSpecs: BondedSpec[] = []
const unbondedSpecs: UnbondedSpec[] = []
const withdrawnSpecs: WithdrawnSpec[] = []

export function collect(eventItem: EventItem): void {
    try {
        if (eventItem.name === events.nominationPools.bonded.name) {
            const d = mappings.nominationPools.events.bonded(eventItem)
            bondedSpecs.push({ poolId: d.poolId.toString(), member: d.member, bonded: d.bonded })
            return
        }
        if (eventItem.name === events.nominationPools.unbonded.name) {
            const d = mappings.nominationPools.events.unbonded(eventItem)
            if (d.balance !== 0n) {
                unbondedSpecs.push({ poolId: d.poolId.toString(), member: d.member, balance: d.balance, era: d.era })
            }
            return
        }
        if (eventItem.name === events.nominationPools.withdrawn.name) {
            const d = mappings.nominationPools.events.withdrawn(eventItem)
            withdrawnSpecs.push({ poolId: d.poolId.toString(), member: d.member })
            return
        }
    } catch {}
}

function groupByPool<T extends { poolId: string }>(arr: T[]): Map<string, T[]> {
    const m = new Map<string, T[]>()
    for (const it of arr) {
        const g = m.get(it.poolId)
        if (g) g.push(it)
        else m.set(it.poolId, [it])
    }
    return m
}

export async function processBatch(ctx: CommonContext, lastBlock: BlockHeader): Promise<void> {
    if (bondedSpecs.length === 0 && unbondedSpecs.length === 0 && withdrawnSpecs.length === 0) return

    // Load latest era for join timestamps
    const [activeEra]: [Era] = (await ctx.store.find(Era, { order: { index: 'DESC' }, take: 1 })) as any

    // Process bonded per pool
    const bondedByPool = groupByPool(bondedSpecs)
    for (const [poolId, specs] of bondedByPool) {
        const pool = await updatePool(ctx, lastBlock as any, poolId)
        const memberIds = specs.map((s) => `${poolId}-${s.member}`)
        const tokenAccountIds = specs.map((s) => `${s.member}-1-${poolId}`)

        const [members, tokenAccounts] = await Promise.all([
            ctx.store.find(PoolMember, { where: { id: In(memberIds) } }),
            ctx.store.find(TokenAccount, { where: { id: In(tokenAccountIds) } }),
        ])
        const memberById = new Map(members.map((m) => [m.id, m]))
        const tokenAccountById = new Map(tokenAccounts.map((ta) => [ta.id, ta]))

        // Ensure Token 1-poolId exists
        const tokenId = `1-${poolId}`
        let token = await ctx.store.findOne(Token, { where: { id: tokenId } })
        if (!token) {
            token = new Token({
                id: tokenId,
                tokenId: BigInt(poolId),
                supply: 0n,
                cap: null,
                behavior: null,
                isFrozen: false,
                freezeState: null as unknown as FreezeState | null,
                accountDepositCount: 0,
                infusion: 0n,
                anyoneCanInfuse: false,
                minimumBalance: 1n,
                unitPrice: null,
                mintDeposit: 0n,
                attributeCount: 0,
                collection: new Collection({ id: '1' }),
                metadata: null,
                nonFungible: true,
                // do not set nominationPool here
                createdAt: new Date(),
            })
            await ctx.store.save(token)
        }

        // Ensure missing TokenAccounts exist
        const toInsertTokenAccounts: TokenAccount[] = []
        for (const s of specs) {
            const taId = `${s.member}-1-${poolId}`
            if (!tokenAccountById.has(taId)) {
                const ta = new TokenAccount({
                    id: taId,
                    balance: 0n,
                    totalBalance: 0n,
                    reservedBalance: 0n,
                    lockedBalance: 0n,
                    namedReserves: null,
                    locks: null,
                    approvals: null,
                    isFrozen: false,
                    account: { id: s.member } as any,
                    collection: new Collection({ id: '1' }),
                    token: new Token({ id: tokenId }),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                })
                toInsertTokenAccounts.push(ta)
                tokenAccountById.set(taId, ta)
            }
        }
        if (toInsertTokenAccounts.length) await ctx.store.save(toInsertTokenAccounts)

        const toInsertMembers: PoolMember[] = []
        const toSaveMembers: PoolMember[] = []
        for (const s of specs) {
            const mid = `${poolId}-${s.member}`
            const taId = `${s.member}-1-${poolId}`
            let member = memberById.get(mid)
            if (!member) {
                member = new PoolMember({
                    id: mid,
                    pool,
                    account: { id: s.member } as any,
                    bonded: s.bonded,
                    tokenAccount: { id: taId } as any,
                    accumulatedRewards: 0n,
                    isStash: pool.totalMembers === 0,
                    isActive: true,
                    joinedEra: activeEra,
                })
                toInsertMembers.push(member)
                pool.totalMembers += 1
            } else {
                member.bonded += s.bonded
                member.tokenAccount = { id: taId } as any
                if (pool.totalMembers === 0) member.isStash = true
                if (!member.isActive) {
                    member.isActive = true
                    pool.totalMembers += 1
                }
                toSaveMembers.push(member)
            }
        }
        if (toInsertMembers.length) await ctx.store.save(toInsertMembers)
        if (toSaveMembers.length) await ctx.store.save(toSaveMembers)
        await ctx.store.save(pool)
    }

    // Process unbonded per pool
    const unbondedByPool = groupByPool(unbondedSpecs)
    for (const [poolId, specs] of unbondedByPool) {
        const pool = await updatePool(ctx, lastBlock as any, poolId)
        const memberIds = specs.map((s) => `${poolId}-${s.member}`)
        const members = await ctx.store.find(PoolMember, {
            where: { id: In(memberIds) },
            relations: { tokenAccount: true },
        })
        const memberById = new Map(members.map((m) => [m.id, m]))

        for (const s of specs) {
            const member = memberById.get(`${poolId}-${s.member}`)
            if (!member) continue
            member.bonded -= s.balance
            if (member.tokenAccount?.totalBalance === 0n) member.bonded = 0n
            member.unbondingEras = (member.unbondingEras || []).concat([
                new UnbondingEras({ era: s.era, balance: s.balance }),
            ])
        }
        if (members.length) await ctx.store.save(members)
        await ctx.store.save(pool)
    }

    // Process withdrawn per pool
    const withdrawnByPool = groupByPool(withdrawnSpecs)
    for (const [poolId, specs] of withdrawnByPool) {
        const pool = await updatePool(ctx, lastBlock as any, poolId)
        const memberIds = specs.map((s) => `${poolId}-${s.member}`)
        const members = await ctx.store.find(PoolMember, {
            where: { id: In(memberIds) },
            relations: { tokenAccount: true },
        })
        const [activeEra] = (await ctx.store.find(Era, { order: { index: 'DESC' }, take: 1 })) as any

        for (const m of members) {
            if (m.unbondingEras && m.unbondingEras.length > 1) {
                m.unbondingEras = m.unbondingEras.filter((era) => era.era > activeEra.index)
                if (m.unbondingEras.length === 0) m.unbondingEras = null
            } else {
                m.unbondingEras = null
            }
            if (m.unbondingEras === null && (!m.tokenAccount || m.tokenAccount.balance <= 0n)) {
                m.bonded = 0n
                m.isActive = false
                pool.totalMembers -= 1
            }
        }
        if (members.length) await ctx.store.save(members)
        await ctx.store.save(pool)
    }

    bondedSpecs.length = 0
    unbondedSpecs.length = 0
    withdrawnSpecs.length = 0
}
