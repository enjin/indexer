import { MoreThan } from 'typeorm'
import { Account, Token, TokenAccount, TokenLoan } from '~/model'
import { Block, CommonContext } from '~/contexts'
import * as mappings from '~/pallet/index'
import { getOrCreateAccount } from '~/util/entities'

export type LoanParties = {
    lender: string
    borrower: string
}

export async function findLoanBorrower(
    ctx: CommonContext,
    tokenId: string,
    lenderId?: string
): Promise<Account | undefined> {
    const holders = await ctx.store.find(TokenAccount, {
        where: { token: { id: tokenId }, totalBalance: MoreThan(0n) },
        relations: { account: true },
        order: { id: 'ASC' },
        take: 2,
    })
    const borrowers = lenderId ? holders.filter((holder) => holder.account.id !== lenderId) : holders

    if (borrowers.length !== 1) {
        ctx.log.warn(
            `[TokenLoan] Expected one borrower for ${tokenId}, found ${borrowers.length}; loan state was not invented`
        )
        return undefined
    }

    return borrowers[0].account
}

export async function upsertTokenLoan(
    ctx: CommonContext,
    block: Block,
    collectionId: bigint,
    tokenId: bigint,
    parties: LoanParties,
    expiration: bigint
): Promise<TokenLoan | undefined> {
    const id = `${collectionId}-${tokenId}`
    const token = await ctx.store.findOneBy(Token, { id })
    if (!token) {
        ctx.log.warn(`[TokenLoan] Token ${id} was absent`)
        return undefined
    }

    const [lender, borrower] = await Promise.all([
        getOrCreateAccount(ctx, parties.lender),
        getOrCreateAccount(ctx, parties.borrower),
    ])
    const existing = await ctx.store.findOneBy(TokenLoan, { id })
    const now = new Date(block.timestamp ?? 0)
    const loan =
        existing ??
        new TokenLoan({
            id,
            token,
            createdAt: now,
        })

    loan.token = token
    loan.lender = lender
    loan.borrower = borrower
    loan.expiration = expiration
    loan.lastObservedBlock = BigInt(block.height)
    loan.updatedAt = now
    await ctx.store.save(loan)
    return loan
}

export async function upsertTokenLoanFromStorage(
    ctx: CommonContext,
    block: Block,
    collectionId: bigint,
    tokenId: bigint
): Promise<TokenLoan | undefined> {
    const tokenIdString = `${collectionId}-${tokenId}`
    const chainToken = await mappings.multiTokens.storage.tokens(block, { collectionId, tokenId })
    if (!chainToken?.lending) return undefined

    const borrower = await findLoanBorrower(ctx, tokenIdString, chainToken.lending.lender)
    if (!borrower) return undefined

    return upsertTokenLoan(
        ctx,
        block,
        collectionId,
        tokenId,
        { lender: chainToken.lending.lender, borrower: borrower.id },
        chainToken.lending.expiration
    )
}
