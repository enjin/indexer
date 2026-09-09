import { Equal, LessThan, LessThanOrEqual } from 'typeorm'
import { TokenAccount, TokenLoan, TokenLock } from '~/model'
import { Block, CallItem, CommonContext, EventItem } from '~/contexts'
import * as mappings from '~/pallet/index'
import { calls } from '~/type'
import { multiTokens as multiTokenEvents } from '~/type/events'
import { hasV6TokenLayout } from '~/pallet/multi-tokens/storage/token-values'
import { upsertTokenLoanFromStorage } from './loan-state'

const RECONCILIATION_BATCH_SIZE = 100
const RECHECK_INTERVAL = 10

type Candidate = {
    collectionId: bigint
    tokenId: bigint
    loan?: TokenLoan
    accountIds: Set<string>
}

function candidateId(collectionId: bigint, tokenId: bigint): string {
    return `${collectionId}-${tokenId}`
}

function addCandidate(
    candidates: Map<string, Candidate>,
    collectionId: bigint,
    tokenId: bigint,
    loan?: TokenLoan,
    accountIds: string[] = []
): void {
    const id = candidateId(collectionId, tokenId)
    const existing = candidates.get(id)
    if (existing) {
        existing.loan ??= loan
        accountIds.forEach((accountId) => existing.accountIds.add(accountId))
        return
    }

    candidates.set(id, { collectionId, tokenId, loan, accountIds: new Set(accountIds) })
}

async function dueLoanCandidates(ctx: CommonContext, block: Block): Promise<TokenLoan[]> {
    const height = BigInt(block.height)
    const recheckHeight = BigInt(Math.max(0, block.height - RECHECK_INTERVAL))
    return ctx.store.find(TokenLoan, {
        where: [
            { expiration: Equal(height) },
            { expiration: LessThan(height), lastObservedBlock: LessThanOrEqual(recheckHeight) },
        ],
        relations: { token: { collection: true }, lender: true, borrower: true },
        order: { expiration: 'ASC', id: 'ASC' },
        take: RECONCILIATION_BATCH_SIZE,
    })
}

function eventCandidates(candidates: Map<string, Candidate>, events: EventItem[]): void {
    for (const item of events) {
        if (item.name === multiTokenEvents.tokenLent.name && multiTokenEvents.tokenLent.matrixV1040.is(item)) {
            const data = mappings.multiTokens.events.tokenLent(item)
            addCandidate(candidates, data.collectionId, data.tokenId, undefined, [data.lender, data.borrower])
        }

        if (item.name === multiTokenEvents.tokenReturned.name && multiTokenEvents.tokenReturned.matrixV1040.is(item)) {
            const data = mappings.multiTokens.events.tokenReturned(item)
            addCandidate(candidates, data.collectionId, data.tokenId, undefined, [data.lender, data.borrower])
        }
    }
}

async function retryCandidates(ctx: CommonContext, candidates: Map<string, Candidate>, callsInBlock: CallItem[]) {
    for (const item of callsInBlock) {
        if (!item.success || !calls.multiTokens.retryFailedLoanReturn.matrixV1040.is(item)) continue
        const data = calls.multiTokens.retryFailedLoanReturn.matrixV1040.decode(item)
        const id = candidateId(data.collectionId, data.tokenId)
        const loan = await ctx.store.findOne(TokenLoan, {
            where: { id },
            relations: { lender: true, borrower: true, token: { collection: true } },
        })
        addCandidate(candidates, data.collectionId, data.tokenId, loan, loan ? [loan.lender.id, loan.borrower.id] : [])
    }
}

async function reconcileLocks(
    ctx: CommonContext,
    block: Block,
    collectionId: bigint,
    tokenId: bigint,
    accountIds: Set<string>
): Promise<void> {
    for (const accountId of accountIds) {
        const tokenAccount = await ctx.store.findOneBy(TokenAccount, {
            id: `${accountId}-${collectionId}-${tokenId}`,
        })
        if (!tokenAccount) continue

        const chainAccount = await mappings.multiTokens.storage.tokenAccounts(block, {
            collectionId,
            tokenId,
            accountId,
        })
        if (!chainAccount) continue

        tokenAccount.lockedBalance = chainAccount.lockedBalance
        tokenAccount.locks = chainAccount.locks?.map(([pallet, amount]) => new TokenLock({ pallet, amount })) ?? null
        tokenAccount.updatedAt = new Date(block.timestamp ?? 0)
        await ctx.store.save(tokenAccount)
    }
}

export async function reconcileTokenLoans(
    ctx: CommonContext,
    block: Block,
    events: EventItem[],
    callsInBlock: CallItem[]
): Promise<void> {
    if (!hasV6TokenLayout(block._runtime)) return

    const candidates = new Map<string, Candidate>()
    for (const loan of await dueLoanCandidates(ctx, block)) {
        addCandidate(candidates, BigInt(loan.token.collection.id), loan.token.tokenId, loan, [
            loan.lender.id,
            loan.borrower.id,
        ])
    }
    eventCandidates(candidates, events)
    await retryCandidates(ctx, candidates, callsInBlock)
    if (candidates.size === 0) return

    for (const candidate of candidates.values()) {
        const id = candidateId(candidate.collectionId, candidate.tokenId)
        const chainToken = await mappings.multiTokens.storage.tokens(block, {
            collectionId: candidate.collectionId,
            tokenId: candidate.tokenId,
        })
        const loan = candidate.loan ?? (await ctx.store.findOneBy(TokenLoan, { id }))

        if (!chainToken?.lending) {
            if (loan) await ctx.store.remove(loan)
            await reconcileLocks(ctx, block, candidate.collectionId, candidate.tokenId, candidate.accountIds)
            continue
        }

        if (!loan) {
            await upsertTokenLoanFromStorage(ctx, block, candidate.collectionId, candidate.tokenId)
        } else {
            loan.expiration = chainToken.lending.expiration
            loan.lastObservedBlock = BigInt(block.height)
            loan.updatedAt = new Date(block.timestamp ?? 0)
            await ctx.store.save(loan)
        }

        await reconcileLocks(ctx, block, candidate.collectionId, candidate.tokenId, candidate.accountIds)
    }
}
