import assert from 'node:assert/strict'
import fs from 'node:fs'
import { createRequire, Module } from 'node:module'
import test, { after } from 'node:test'
import { Runtime } from '@subsquid/substrate-runtime'
import { Account, Collection, Token, TokenAccount, TokenLoan, TokenLock } from '~/model'
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
const { reconcileTokenLoans } = testRequire(
    '~/pallet/multi-tokens/processors/loan-reconciliation'
) as typeof import('~/pallet/multi-tokens/processors/loan-reconciliation')

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

function tokenValue(lending?: { lender: string; expiration: number }) {
    return {
        supply: 1n,
        cap: { __kind: 'Supply', value: 1n },
        freezeState: undefined,
        requiresDeposit: true,
        creationDeposit: { depositor: undefined, amount: 0n },
        ownerDeposit: 0n,
        totalTokenAccountDeposit: 0n,
        attributeCount: 0,
        accountCount: 1,
        marketBehavior: undefined,
        listingForbidden: false,
        metadata: { decimalCount: 0, name: '0x746f6b656e', symbol: '0x544b4e', foreign: undefined },
        infusion: 0n,
        anyoneCanInfuse: false,
        groups: [],
        ephemeralExpiration: 77,
        isLendable: true,
        lending,
        mintRateLimit: undefined,
    }
}

void test('lending event decoders retain lifecycle identity and nullable extrinsics', () => {
    const runtime = runtime1040()
    const lender = `0x${'11'.repeat(32)}`
    const borrower = `0x${'22'.repeat(32)}`
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

    assert.equal(tokenLentEventModel(lentItem, 88, lent).data.expirationBlock, 88n)
    assert.equal(loanExtendedEventModel(extendedItem, 89, extended).data.newExpirationBlock, 99n)
    assert.equal(tokenReturnedEventModel(returnedItem, 99, returned).data.borrower, borrower)
    const failedModel = loanReturnFailedEventModel(failedItem, block, failed)
    assert.equal(failedModel.extrinsic, null)
    assert.equal(failedModel.data.error, 'BadOrigin')
    assert.equal(failedModel.data.observedBlock, 100n)
})

void test('loan processors update current state without touching token-account balances', async () => {
    const runtime = runtime1040()
    const lender = new Account({ id: `0x${'11'.repeat(32)}` })
    const borrower = new Account({ id: `0x${'22'.repeat(32)}` })
    const token = new Token({ id: '7-9', tokenId: 9n, collection: new Collection({ id: '7' }) })
    let loan: TokenLoan | undefined
    const savedTokenAccounts: TokenAccount[] = []
    const ctx = {
        log: { warn: () => undefined },
        store: {
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

    await processTokenLent(
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
    assert.equal(loan.borrower.id, borrower.id)
    assert.equal(loan.expiration, 88n)

    await processLoanExtended(
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
    assert.equal(loan.expiration, 99n)

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
    assert.equal(loan.expiration, 99n)
    assert.equal(loan.lastObservedBlock, 99n)

    await processTokenReturned(
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

void test('due ephemeral loan silently cleared in storage is removed without a synthetic event and locks reconcile', async () => {
    const lender = new Account({ id: `0x${'11'.repeat(32)}` })
    const borrower = new Account({ id: `0x${'22'.repeat(32)}` })
    const runtime = runtime1040((method, params) => {
        assert.equal(method, 'state_getStorageAt')
        assert(params)
        assert.equal(params[1], '0x01')
        const key = params[0]
        const tokenKey = runtime.encodeStorageKey('MultiTokens.Tokens', 7n, 9n)
        if (key === tokenKey) {
            return Promise.resolve(
                runtime.scaleCodec.encodeToHex(runtime.description.storage.MultiTokens.items.Tokens.value, tokenValue())
            )
        }

        const accountKey = runtime.encodeStorageKey('MultiTokens.TokenAccounts', 7n, 9n, borrower.id)
        assert.equal(key, accountKey)
        return Promise.resolve(
            runtime.scaleCodec.encodeToHex(runtime.description.storage.MultiTokens.items.TokenAccounts.value, {
                balance: 1n,
                reservedBalance: 0n,
                lockedBalance: 0n,
                holds: [],
                locks: [],
                approvals: [],
                isFrozen: false,
                deposit: undefined,
                storageVersion: 1,
            })
        )
    })
    const token = new Token({ id: '7-9', tokenId: 9n, collection: new Collection({ id: '7' }) })
    const loan = new TokenLoan({
        id: token.id,
        token,
        lender,
        borrower,
        expiration: 88n,
        lastObservedBlock: 80n,
    })
    const tokenAccount = new TokenAccount({
        id: `${borrower.id}-7-9`,
        account: borrower,
        lockedBalance: 1n,
        locks: [new TokenLock({ pallet: '0x01', amount: 1n })],
    })
    const removed: TokenLoan[] = []
    let savedTokenAccount: TokenAccount | undefined
    const ctx = {
        log: { warn: () => undefined },
        store: {
            find: (entity: unknown) => Promise.resolve(entity === TokenLoan ? [loan] : []),
            findOneBy: (entity: unknown, where: { id: string }) => {
                if (entity === TokenLoan) return Promise.resolve(loan)
                if (entity === TokenAccount)
                    return Promise.resolve(where.id === tokenAccount.id ? tokenAccount : undefined)
                return Promise.resolve(undefined)
            },
            save: (entity: unknown) => {
                if (entity instanceof TokenAccount) savedTokenAccount = entity
                return Promise.resolve(entity)
            },
            remove: (entity: TokenLoan) => Promise.resolve(removed.push(entity)),
        },
    } as never

    await reconcileTokenLoans(ctx, { _runtime: runtime, height: 88, hash: '0x01', timestamp: 2_000 } as Block, [], [])

    assert.deepEqual(removed, [loan])
    assert(savedTokenAccount)
    assert.equal(savedTokenAccount.lockedBalance, 0n)
    assert.deepEqual(savedTokenAccount.locks, [])
})

void test('an overdue parked loan remains current while pinned token storage still contains lending', async () => {
    const lender = new Account({ id: `0x${'11'.repeat(32)}` })
    const borrower = new Account({ id: `0x${'22'.repeat(32)}` })
    const runtime = runtime1040((method, params) => {
        assert.equal(method, 'state_getStorageAt')
        assert(params)
        assert.equal(params[1], '0x02')
        const key = params[0]
        if (key === runtime.encodeStorageKey('MultiTokens.Tokens', 7n, 9n)) {
            return Promise.resolve(
                runtime.scaleCodec.encodeToHex(
                    runtime.description.storage.MultiTokens.items.Tokens.value,
                    tokenValue({ lender: lender.id, expiration: 88 })
                )
            )
        }

        assert.equal(key, runtime.encodeStorageKey('MultiTokens.FailedLoanReturns', [7n, 9n]))
        return Promise.resolve(
            runtime.scaleCodec.encodeToHex(runtime.description.storage.MultiTokens.items.FailedLoanReturns.value, 88)
        )
    })
    const token = new Token({ id: '7-9', tokenId: 9n, collection: new Collection({ id: '7' }) })
    const loan = new TokenLoan({
        id: token.id,
        token,
        lender,
        borrower,
        expiration: 88n,
        lastObservedBlock: 80n,
    })
    const removed: TokenLoan[] = []
    const saved: TokenLoan[] = []
    const ctx = {
        log: { warn: () => undefined },
        store: {
            find: (entity: unknown) => Promise.resolve(entity === TokenLoan ? [loan] : []),
            findOneBy: (entity: unknown) => Promise.resolve(entity === TokenLoan ? loan : undefined),
            save: (entity: unknown) => {
                if (entity instanceof TokenLoan) saved.push(entity)
                return Promise.resolve(entity)
            },
            remove: (entity: TokenLoan) => Promise.resolve(removed.push(entity)),
        },
    } as never

    await reconcileTokenLoans(ctx, { _runtime: runtime, height: 98, hash: '0x02', timestamp: 3_000 } as Block, [], [])

    assert.deepEqual(removed, [])
    assert.deepEqual(saved, [loan])
    assert.equal(loan.expiration, 88n)
    assert.equal(loan.lastObservedBlock, 98n)
})
