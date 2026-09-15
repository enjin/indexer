import { Block, CommonContext } from '~/contexts'
import { multiTokens } from '~/pallet'
import { TokenLoan } from '~/model'
import { BATCH_SIZE } from '~/synchronize/common'
import { hasV6TokenLayout } from '~/pallet/multi-tokens/storage/token-values'
import { findLoanBorrower, upsertTokenLoan } from '~/pallet/multi-tokens/processors/loan-state'

export async function loans(ctx: CommonContext, block: Block): Promise<void> {
    if (!hasV6TokenLayout(block._runtime)) return

    ctx.log.info('Syncing active token loans...')
    const iterable = (await multiTokens.storage.tokens(block, { batchSize: BATCH_SIZE })) ?? []
    let imported = 0

    for await (const tokenPairs of iterable) {
        const lentTokens = tokenPairs.filter(([, token]) => token?.lending !== undefined)
        if (lentTokens.length === 0) continue

        for (const [key, token] of lentTokens) {
            if (!token?.lending) continue
            const id = `${key[0]}-${key[1]}`
            const borrower = await findLoanBorrower(ctx, id, token.lending.lender)
            if (!borrower) continue

            const loan = await upsertTokenLoan(
                ctx,
                block,
                key[0],
                key[1],
                { lender: token.lending.lender, borrower: borrower.id },
                token.lending.expiration
            )
            if (loan) imported += 1
        }
    }

    ctx.log.info(`Successfully imported ${imported} active token loans (${await ctx.store.count(TokenLoan)} total)`)
}
