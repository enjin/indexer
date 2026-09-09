import { Job } from 'bullmq'
import { MoreThan } from 'typeorm'
import { CommonContext, dataHandlerContext } from '~/contexts'
import { Token, TokenAccount, TokenLoan } from '~/model'
import { QueueUtils } from '~/queue'
import Rpc from '~/util/rpc'
import { FinalizedTokenStorageReader } from './token-storage-reader'
import { getOrCreateAccount } from '~/util/entities'

export type BackfillEphemeralTokensData = {
    afterId?: string
    batchSize?: number
    blockHash?: string
}

const DEFAULT_BATCH_SIZE = 100
const MAX_BATCH_SIZE = 500

export async function backfillEphemeralTokens(job: Job<BackfillEphemeralTokensData>): Promise<void> {
    const ctx = await dataHandlerContext()
    const { api } = await Rpc.getInstance()
    const batchSize = Math.max(1, Math.min(job.data.batchSize ?? DEFAULT_BATCH_SIZE, MAX_BATCH_SIZE))
    const tokens = await ctx.store.find(Token, {
        where: job.data.afterId ? { id: MoreThan(job.data.afterId) } : {},
        relations: { collection: true },
        order: { id: 'ASC' },
        take: batchSize,
    })

    if (tokens.length === 0) {
        await job.log('Token property and loan backfill complete')
        await job.updateProgress(100)
        return
    }

    const storage = await FinalizedTokenStorageReader.create(api, job.data.blockHash)
    const changed: Token[] = []
    const loansToSave: TokenLoan[] = []
    const loansToRemove: TokenLoan[] = []

    for (const [index, token] of tokens.entries()) {
        const chainToken = await storage.token(BigInt(token.collection.id), token.tokenId)
        if (chainToken) {
            token.ephemeralExpiration = chainToken.ephemeralExpiration ?? null
            token.isLendable = chainToken.isLendable
            changed.push(token)
        }

        const existingLoan = await ctx.store.findOneBy(TokenLoan, { id: token.id })
        if (!chainToken?.lending) {
            if (existingLoan) loansToRemove.push(existingLoan)
        } else {
            const lending = chainToken.lending
            const holders = await ctx.store.find(TokenAccount, {
                where: { token: { id: token.id }, totalBalance: MoreThan(0n) },
                relations: { account: true },
                order: { id: 'ASC' },
                take: 2,
            })
            const borrowers = holders.filter((holder) => holder.account.id !== lending.lender)
            if (borrowers.length !== 1) {
                await job.log(`Skipped ${token.id}: expected one borrower, found ${borrowers.length}`)
            } else {
                const lender = await getOrCreateAccount(ctx as unknown as CommonContext, lending.lender)
                const observedAt = token.updatedAt ?? token.createdAt ?? new Date(0)
                loansToSave.push(
                    Object.assign(existingLoan ?? new TokenLoan({ id: token.id, createdAt: observedAt }), {
                        token,
                        lender,
                        borrower: borrowers[0].account,
                        expiration: lending.expiration,
                        lastObservedBlock: BigInt(storage.height),
                        updatedAt: observedAt,
                    })
                )
            }
        }

        await job.updateProgress(Math.floor(((index + 1) / tokens.length) * 90))
    }

    if (changed.length > 0) await ctx.store.save(changed)
    if (loansToRemove.length > 0) await ctx.store.remove(loansToRemove)
    if (loansToSave.length > 0) await ctx.store.save(loansToSave)

    const lastId = tokens[tokens.length - 1].id
    await job.log(`Backfilled ${changed.length} token rows and ${loansToSave.length} active loans through ${lastId}`)

    if (tokens.length === batchSize) {
        await QueueUtils.dispatchBackfillEphemeralTokens({ afterId: lastId, batchSize, blockHash: storage.hash })
    }

    await job.updateProgress(100)
}
