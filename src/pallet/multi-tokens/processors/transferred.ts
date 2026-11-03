import { throwFatalError } from '~/util/errors'
import { CollectionAccount, Token, TokenAccount } from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import { getOrCreateAccount } from '~/util/entities'
import { SnsEvent } from '~/util/sns'
import { findPairedFollowingEvent, findSiblingEvent, SnsCause } from '~/util/sns-cause'
import { multiTokens } from '~/type/events'
import * as mappings from '~/pallet/index'
import { QueueUtils } from '~/queue'
import { EventHandlerResult } from '~/processor.handler'
import Big from 'big.js'
import { isOperator } from '~/pallet/multi-tokens/processors/approved'

/**
 * An operator transfer spends the operator's token allowance on the source account (the chain's
 * `DefaultTokenAccountMutation`): the approval is lowered by the amount and removed once it reaches zero. A live
 * collection approval for the operator takes precedence and leaves the token approvals untouched. No event announces
 * this.
 */
export async function spendOperatorAllowance(
    ctx: CommonContext,
    tokenAccount: TokenAccount,
    data: { collectionId: bigint; operator: string; from: string; amount: bigint },
    height: number
): Promise<void> {
    if (data.operator === data.from) return

    const approval = tokenAccount.approvals?.find((a) => isOperator(a.accountId, data.operator))
    if (!approval) return

    const collectionAccount = await ctx.store.findOne<CollectionAccount>(CollectionAccount, {
        where: { id: `${data.collectionId}-${data.from}` },
    })
    const collectionApproved = collectionAccount?.approvals?.some(
        (a) => isOperator(a.accountId, data.operator) && (a.expiration == null || a.expiration > height)
    )
    if (collectionApproved) return

    approval.amount -= data.amount
    if (approval.amount <= 0n) {
        tokenAccount.approvals = tokenAccount.approvals?.filter((a) => a !== approval) ?? null
    }
}

export async function transferred(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave: boolean
): Promise<EventHandlerResult> {
    const data = mappings.multiTokens.events.transferred(item)
    const from = await getOrCreateAccount(ctx, data.from)
    const to = await getOrCreateAccount(ctx, data.to)

    const token = await ctx.store.findOne<Token>(Token, {
        where: { id: `${data.collectionId}-${data.tokenId}` },
        relations: { collection: true },
    })
    if ((skipSave || !token) && data.collectionId.toString() != '1') {
        return [
            ...mappings.multiTokens.events.transferredEventModel(
                item,
                data,
                from,
                to,
                token?.collection ?? null,
                token ?? null
            ),
            undefined,
        ]
    }

    const [fromTokenAccount, toTokenAccount] = await Promise.all([
        ctx.store.findOne<TokenAccount>(TokenAccount, {
            where: { id: `${from.id}-${data.collectionId}-${data.tokenId}` },
        }),
        ctx.store.findOne<TokenAccount>(TokenAccount, {
            where: { id: `${to.id}-${data.collectionId}-${data.tokenId}` },
        }),
    ])

    if (fromTokenAccount) {
        fromTokenAccount.balance -= data.amount
        fromTokenAccount.totalBalance -= data.amount
        await spendOperatorAllowance(ctx, fromTokenAccount, { ...data, from: from.id }, block.height)
        fromTokenAccount.updatedAt = new Date(block.timestamp ?? 0)
        await ctx.store.save(fromTokenAccount)
    } else {
        throwFatalError(
            `[Transferred] We have not found token account ${from.id}-${data.collectionId}-${data.tokenId}.`
        )
    }

    if (toTokenAccount) {
        toTokenAccount.balance += data.amount
        toTokenAccount.totalBalance += data.amount
        toTokenAccount.updatedAt = new Date(block.timestamp ?? 0)
        await ctx.store.save(toTokenAccount)
    } else {
        throwFatalError(`[Transferred] We have not found token account ${to.id}-${data.collectionId}-${data.tokenId}.`)
    }

    const loanStart =
        data.amount !== 1n
            ? undefined
            : findPairedFollowingEvent(
                  block,
                  item,
                  multiTokens.tokenLent.name,
                  mappings.multiTokens.events.transferred,
                  mappings.multiTokens.events.tokenLent,
                  (transfer, loan) =>
                      transfer.amount === 1n &&
                      transfer.collectionId === loan.collectionId &&
                      transfer.tokenId === loan.tokenId &&
                      transfer.from === loan.lender &&
                      transfer.to === loan.borrower
              )
    // A proven loan-start pair must not be mistaken for another loan's return elsewhere in the block. Other
    // transfers retain the existing return lookup, including automatic returns without an extrinsic.
    const loanReturn = loanStart
        ? undefined
        : findSiblingEvent(
              block,
              item,
              multiTokens.tokenReturned.name,
              mappings.multiTokens.events.tokenReturned,
              (e) => e.collectionId === data.collectionId && e.tokenId === data.tokenId && e.borrower === data.from
          )
    const loan = loanStart ?? loanReturn

    const snsEvent: SnsEvent = {
        id: item.id,
        name: item.name,
        body: {
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            token: `${data.collectionId}-${data.tokenId}`,
            operator: data.operator,
            from: data.from,
            to: data.to,
            amount: Big(data.amount.toString())
                .div(10 ** (token?.nativeMetadata?.decimalCount ?? 0))
                .toNumber(),
            extrinsic: item.extrinsic?.id,
            decimalCount: token?.nativeMetadata?.decimalCount,
            cause: loanStart ? SnsCause.loanStart : loanReturn ? SnsCause.loanReturn : SnsCause.transfer,
            lender: loan?.lender,
            borrower: loan?.borrower,
        },
    }

    await QueueUtils.dispatchComputeStats(data.collectionId.toString())
    await QueueUtils.dispatchComputeAccountStats(data.from)
    await QueueUtils.dispatchComputeAccountStats(data.to)

    return [
        ...mappings.multiTokens.events.transferredEventModel(
            item,
            data,
            from,
            to,
            token?.collection ?? null,
            token ?? null
        ),
        snsEvent,
    ]
}
