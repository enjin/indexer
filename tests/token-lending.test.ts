import assert from 'node:assert/strict'
import fs from 'node:fs'
import { createRequire, Module } from 'node:module'
import test, { after } from 'node:test'
import { Runtime } from '@subsquid/substrate-runtime'
import { Account, AccountTokenEvent, Collection, Token, TokenAccount, TokenLoan } from '~/model'
import { Block, EventItem } from '~/contexts'
import {
    loanExtended,
    loanExtendedEventModel,
    loanReturnFailed,
    loanReturnFailedEventModel,
    tokenLent,
    tokenLentEventModel,
    tokenReturned,
    tokenReturnedEventModel,
} from '~/pallet/multi-tokens/events'

const testRequire = createRequire(__filename)
const queueModulePath = testRequire.resolve('~/queue')
const originalQueueModule = testRequire.cache[queueModulePath]
assert.equal(originalQueueModule, undefined, 'queue module loaded before the test stub was installed')
const queueModule = new Module(queueModulePath)
queueModule.loaded = true
queueModule.exports = {
    QueueUtils: {
        dispatchComputeAccountStats: () => Promise.resolve(),
        dispatchComputeStats: () => Promise.resolve(),
        dispatchComputeTokenNativeMetadata: () => Promise.resolve(),
    },
}
testRequire.cache[queueModulePath] = queueModule

const { tokenLent: processTokenLent } = testRequire(
    '~/pallet/multi-tokens/processors/token-lent'
) as typeof import('~/pallet/multi-tokens/processors/token-lent')
const { loanExtended: processLoanExtended } = testRequire(
    '~/pallet/multi-tokens/processors/loan-extended'
) as typeof import('~/pallet/multi-tokens/processors/loan-extended')
const { loanReturnFailed: processLoanReturnFailed } = testRequire(
    '~/pallet/multi-tokens/processors/loan-return-failed'
) as typeof import('~/pallet/multi-tokens/processors/loan-return-failed')
const { tokenReturned: processTokenReturned } = testRequire(
    '~/pallet/multi-tokens/processors/token-returned'
) as typeof import('~/pallet/multi-tokens/processors/token-returned')
const { tokenMutated: processTokenMutated } = testRequire(
    '~/pallet/multi-tokens/processors/token-mutated'
) as typeof import('~/pallet/multi-tokens/processors/token-mutated')

after(() => {
    testRequire.cache[queueModulePath] = originalQueueModule
})

type MetadataLine = {
    specName: string
    specVersion: number
    metadata: string
}

function runtime1040(call?: (method: string, params?: unknown[]) => Promise<unknown>): Runtime {
    const metadata = fs
        .readFileSync('typegen/canary-matrixchain.jsonl', 'utf8')
        .split('\n')
        .filter(Boolean)
        .map((line) => JSON.parse(line) as MetadataLine)
        .find((line) => line.specVersion === 1040)

    assert(metadata)
    return new Runtime(
        { specName: metadata.specName, specVersion: metadata.specVersion, implName: '', implVersion: 0 },
        metadata.metadata,
        undefined,
        call ? { call } : undefined
    )
}

function eventItem(runtime: Runtime, name: string, args: unknown, id = '88-1'): EventItem {
    return { id, name, args, block: { _runtime: runtime } } as EventItem
}

void test('lending event decoders retain lifecycle identity and nullable extrinsics', () => {
    const runtime = runtime1040()
    const lender = `0x${'11'.repeat(32)}`
    const borrower = `0x${'22'.repeat(32)}`
    const lenderAccount = new Account({ id: lender })
    const borrowerAccount = new Account({ id: borrower })
    const collection = new Collection({ id: '7' })
    const token = new Token({ id: '7-9', tokenId: 9n, collection })
    const lentItem = eventItem(runtime, 'MultiTokens.TokenLent', {
        collectionId: '7',
        tokenId: '9',
        lender,
        borrower,
        expiration: 88,
    })
    const extendedItem = eventItem(runtime, 'MultiTokens.LoanExtended', {
        collectionId: '7',
        tokenId: '9',
        oldExpiration: 88,
        newExpiration: 99,
    })
    const returnedItem = eventItem(runtime, 'MultiTokens.TokenReturned', {
        collectionId: '7',
        tokenId: '9',
        lender,
        borrower,
    })
    returnedItem.extrinsic = { id: '88-2' } as EventItem['extrinsic']
    const failedItem = eventItem(runtime, 'MultiTokens.LoanReturnFailed', {
        collectionId: '7',
        tokenId: '9',
        expiration: 99,
        error: { __kind: 'BadOrigin' },
    })

    const lent = tokenLent(lentItem)
    const extended = loanExtended(extendedItem)
    const returned = tokenReturned(returnedItem)
    const failed = loanReturnFailed(failedItem)
    const block = { _runtime: runtime, height: 100 } as Block

    const [lentEvent, lentAccountEvent] = tokenLentEventModel(
        lentItem,
        lent,
        lenderAccount,
        borrowerAccount,
        collection,
        token
    )
    assert.equal(lentEvent.data.expirationBlock, 88n)
    assert.equal(lentAccountEvent.from.id, lender)
    assert.equal(lentAccountEvent.to?.id, borrower)
    const [extendedEvent, extendedAccountEvent] = loanExtendedEventModel(
        extendedItem,
        extended,
        lenderAccount,
        borrowerAccount,
        collection,
        token
    )
    assert.equal(extendedEvent.data.newExpirationBlock, 99n)
    assert.equal(extendedAccountEvent.from.id, lender)
    assert.equal(extendedAccountEvent.to?.id, borrower)
    assert.equal(extendedAccountEvent.token?.id, token.id)
    const [returnedEvent, returnedAccountEvent] = tokenReturnedEventModel(
        returnedItem,
        returned,
        lenderAccount,
        borrowerAccount,
        collection,
        token
    )
    assert.equal(returnedEvent.data.borrower, borrower)
    assert.equal(returnedEvent.extrinsic?.id, '88-2')
    assert.equal(returnedAccountEvent.from.id, borrower)
    assert.equal(returnedAccountEvent.to?.id, lender)
    const failedModel = loanReturnFailedEventModel(failedItem, block, failed)
    assert.equal(failedModel.extrinsic, null)
    assert.equal(failedModel.data.error, 'BadOrigin')
})

void test('loan processors update current state and emit account history without touching token-account balances', async () => {
    const runtime = runtime1040()
    const lender = new Account({ id: `0x${'11'.repeat(32)}` })
    const borrower = new Account({ id: `0x${'22'.repeat(32)}` })
    const token = new Token({ id: '7-9', tokenId: 9n, collection: new Collection({ id: '7' }) })
    let loan: TokenLoan | undefined
    const savedTokenAccounts: TokenAccount[] = []
    const ctx = {
        log: { warn: () => undefined },
        store: {
            findOne: (entity: unknown) =>
                Promise.resolve(entity === Token ? token : entity === TokenLoan ? loan : undefined),
            findOneBy: (entity: unknown, where: { id: string }) => {
                if (entity === Token) return Promise.resolve(token)
                if (entity === Account) return Promise.resolve(where.id === lender.id ? lender : borrower)
                if (entity === TokenLoan) return Promise.resolve(loan)
                return Promise.resolve(undefined)
            },
            save: (entity: unknown) => {
                if (entity instanceof TokenLoan) loan = entity
                if (entity instanceof TokenAccount) savedTokenAccounts.push(entity)
                return Promise.resolve(entity)
            },
            remove: () => {
                loan = undefined
                return Promise.resolve(undefined)
            },
        },
    } as never
    const block = { _runtime: runtime, height: 88, timestamp: 1_000 } as Block

    const lentResult = await processTokenLent(
        ctx,
        block,
        eventItem(runtime, 'MultiTokens.TokenLent', {
            collectionId: '7',
            tokenId: '9',
            lender: lender.id,
            borrower: borrower.id,
            expiration: 88,
        }),
        false
    )
    assert(Array.isArray(lentResult))
    assert(lentResult[1] instanceof AccountTokenEvent)
    assert.equal(lentResult[1].from.id, lender.id)
    assert.equal(lentResult[1].to?.id, borrower.id)
    assert.deepEqual(lentResult[2], {
        id: '88-1',
        name: 'MultiTokens.TokenLent',
        body: {
            collectionId: 7n,
            tokenId: 9n,
            token: '7-9',
            lender: lender.id,
            borrower: borrower.id,
            expiration: 88,
            extrinsic: undefined,
        },
    })
    assert(loan)
    assert.equal(loan.borrower.id, borrower.id)
    assert.equal(loan.expiration, 88n)

    const extensionResult = await processLoanExtended(
        ctx,
        { ...block, height: 89 },
        eventItem(runtime, 'MultiTokens.LoanExtended', {
            collectionId: '7',
            tokenId: '9',
            oldExpiration: 88,
            newExpiration: 99,
        }),
        false
    )
    assert(loan)
    assert.equal(loan.expiration, 99n)
    assert(Array.isArray(extensionResult))
    assert(extensionResult[1] instanceof AccountTokenEvent)
    assert.equal(extensionResult[1].from.id, lender.id)
    assert.equal(extensionResult[1].to?.id, borrower.id)
    assert.equal(extensionResult[1].event.id, extensionResult[0].id)

    await processLoanReturnFailed(
        ctx,
        { ...block, height: 99 },
        eventItem(runtime, 'MultiTokens.LoanReturnFailed', {
            collectionId: '7',
            tokenId: '9',
            expiration: 99,
            error: { __kind: 'BadOrigin' },
        }),
        false
    )
    assert(loan)
    assert.equal(loan.expiration, 99n)

    const returnedResult = await processTokenReturned(
        ctx,
        { ...block, height: 100 },
        eventItem(runtime, 'MultiTokens.TokenReturned', {
            collectionId: '7',
            tokenId: '9',
            lender: lender.id,
            borrower: borrower.id,
        }),
        false
    )
    assert(Array.isArray(returnedResult))
    assert(returnedResult[1] instanceof AccountTokenEvent)
    assert.equal(returnedResult[1].from.id, borrower.id)
    assert.equal(returnedResult[1].to?.id, lender.id)
    // not published on its own: the Transferred of the return carries `cause: loanReturn`
    assert.equal(returnedResult.length, 2)
    assert.equal(loan, undefined)

    await processTokenLent(
        ctx,
        { ...block, height: 100 },
        eventItem(
            runtime,
            'MultiTokens.TokenLent',
            {
                collectionId: '7',
                tokenId: '9',
                lender: lender.id,
                borrower: borrower.id,
                expiration: 120,
            },
            '100-2'
        ),
        false
    )
    assert(loan)
    assert.equal(loan.expiration, 120n)
    assert.equal(savedTokenAccounts.length, 0)
})

void test('lendability mutation is independent of an active loan and replay suppresses state writes', async () => {
    const runtime = runtime1040()
    const token = new Token({
        id: '7-9',
        isLendable: true,
        collection: new Collection({ id: '7' }),
        supply: 1n,
        cap: null,
        behavior: null,
    })
    let saves = 0
    const ctx = {
        log: { warn: () => undefined },
        store: {
            findOne: () => Promise.resolve(token),
            save: () => {
                saves += 1
                return Promise.resolve(undefined)
            },
        },
    } as never
    const item = eventItem(runtime, 'MultiTokens.TokenMutated', {
        collectionId: '7',
        tokenId: '9',
        mutation: {
            behavior: { __kind: 'NoMutation' },
            listingForbidden: { __kind: 'NoMutation' },
            isLendable: { __kind: 'SomeMutation', value: false },
            anyoneCanInfuse: { __kind: 'NoMutation' },
            name: { __kind: 'NoMutation' },
        },
    })

    await processTokenMutated(ctx, { _runtime: runtime, height: 88 } as Block, item, true)
    assert.equal(saves, 0)
    assert.equal(token.isLendable, true)

    await processTokenMutated(ctx, { _runtime: runtime, height: 88 } as Block, item, false)
    assert.equal(token.isLendable, false)
    assert.equal(saves, 1)
})

void test('historical loan extensions use the preceding lending event rather than a later active loan', async () => {
    const runtime = runtime1040()
    const lender = new Account({ id: `0x${'33'.repeat(32)}` })
    const borrower = new Account({ id: `0x${'44'.repeat(32)}` })
    const token = new Token({ id: '7-9', tokenId: 9n, collection: new Collection({ id: '7' }) })
    const queries: unknown[] = []
    const ctx = {
        log: { warn: () => assert.fail('historical parties should be resolved') },
        store: {
            findOne: (entity: unknown, options: unknown) => {
                queries.push({ entity, options })
                assert.notEqual(entity, TokenLoan, 'replay must not use present-day loan parties')
                if (entity === Token) return Promise.resolve(token)
                return Promise.resolve({
                    data: { isTypeOf: 'MultiTokensTokenLent', lender: lender.id, borrower: borrower.id },
                })
            },
            findOneBy: (_entity: unknown, where: { id: string }) =>
                Promise.resolve(where.id === lender.id ? lender : borrower),
            save: () => assert.fail('replay must not mutate loan state'),
        },
    } as never
    const result = await processLoanExtended(
        ctx,
        { _runtime: runtime, height: 90, hash: 'historical' } as Block,
        eventItem(
            runtime,
            'MultiTokens.LoanExtended',
            { collectionId: '7', tokenId: '9', oldExpiration: 100, newExpiration: 200 },
            '0000000090-aaaaa-000001'
        ),
        true
    )
    assert(Array.isArray(result))
    assert(result[1] instanceof AccountTokenEvent)
    assert.equal(result[1].from.id, lender.id)
    assert.equal(result[1].to?.id, borrower.id)
    assert.equal(result[1].token?.id, token.id)
    assert.equal(queries.length, 2)
})

void test('historical extensions resolve the most recent preceding lend in the same block', async () => {
    const { rememberBlockEvents } = await import('~/util/sns-cause')
    const runtime = runtime1040()
    const lender = new Account({ id: `0x${'55'.repeat(32)}` })
    const borrower = new Account({ id: `0x${'66'.repeat(32)}` })
    const block = { _runtime: runtime, height: 90, hash: 'same-block-loan' } as Block
    const makeLend = (id: string, borrowerId: string) =>
        eventItem(
            runtime,
            'MultiTokens.TokenLent',
            {
                collectionId: '7',
                tokenId: '9',
                lender: lender.id,
                borrower: borrowerId,
                expiration: 100,
            },
            id
        )
    const extension = eventItem(
        runtime,
        'MultiTokens.LoanExtended',
        {
            collectionId: '7',
            tokenId: '9',
            oldExpiration: 100,
            newExpiration: 200,
        },
        '0000000090-aaaaa-000003'
    )
    rememberBlockEvents(block.hash, [
        makeLend('0000000090-aaaaa-000001', `0x${'77'.repeat(32)}`),
        makeLend('0000000090-aaaaa-000002', borrower.id),
        extension,
        makeLend('0000000090-aaaaa-000004', `0x${'88'.repeat(32)}`),
    ])
    const ctx = {
        log: { warn: () => assert.fail('same-block parties should be resolved') },
        store: {
            findOne: (entity: unknown) => {
                assert.equal(entity, Token)
                return Promise.resolve(undefined)
            },
            findOneBy: (_entity: unknown, where: { id: string }) =>
                Promise.resolve(where.id === lender.id ? lender : borrower),
            save: () => assert.fail('replay must not mutate state'),
        },
    } as never
    const result = await processLoanExtended(ctx, block, extension, true)
    assert(Array.isArray(result))
    assert(result[1] instanceof AccountTokenEvent)
    assert.equal(result[1].from.id, lender.id)
    assert.equal(result[1].to?.id, borrower.id)
    assert.equal(result[1].token, null)
    assert.equal(result[1].collection, null)
})

void test('an extension still has token activity when its historical parties cannot be recovered', async () => {
    const runtime = runtime1040()
    const warnings: string[] = []
    const ctx = {
        log: { warn: (message: string) => warnings.push(message) },
        store: {
            findOne: () => Promise.resolve(undefined),
            save: () => assert.fail('replay must not mutate state'),
        },
    } as never
    const result = await processLoanExtended(
        ctx,
        { _runtime: runtime, height: 90, hash: 'missing-history' } as Block,
        eventItem(runtime, 'MultiTokens.LoanExtended', {
            collectionId: '7',
            tokenId: '9',
            oldExpiration: 100,
            newExpiration: 200,
        }),
        true
    )
    assert(Array.isArray(result))
    assert(result[1] instanceof AccountTokenEvent)
    assert.equal(result[1].event.id, result[0].id)
    assert.equal(result[1].from, undefined)
    assert.equal(result[1].to, null)
    assert.equal(warnings.length, 1)
})
