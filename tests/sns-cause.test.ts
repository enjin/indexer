import assert from 'node:assert/strict'
import test from 'node:test'
import type { Block, EventItem } from '~/contexts'
import { findPairedFollowingEvent, findSiblingEvent, rememberBlockEvents, SnsCause } from '~/util/sns-cause'

type Fake = EventItem & { data: { token: string } }

const block = { hash: '0xblock' } as Block

function fake(id: string, name: string, token: string, extrinsic?: string): Fake {
    return { id, name, extrinsic: extrinsic ? { id: extrinsic } : undefined, data: { token } } as unknown as Fake
}

const decode = (event: EventItem) => (event as Fake).data

void test('finds the sibling event of the same block that matches', () => {
    const burned = fake('0001-1', 'MultiTokens.Burned', '1-2', 'ext-1')
    const otherToken = fake('0001-2', 'MultiTokens.EphemeralTokenDestroyed', '1-9', 'ext-1')
    const expiry = fake('0001-3', 'MultiTokens.EphemeralTokenDestroyed', '1-2', 'ext-1')
    rememberBlockEvents(block.hash, [burned, otherToken, expiry])

    const found = findSiblingEvent(
        block,
        burned,
        'MultiTokens.EphemeralTokenDestroyed',
        decode,
        (d) => d.token === '1-2'
    )

    assert.deepEqual(found, { token: '1-2' })
})

void test('looks at events before the item as well as after it', () => {
    const returned = fake('0001-1', 'MultiTokens.TokenReturned', '1-2')
    const transferred = fake('0001-2', 'MultiTokens.Transferred', '1-2')
    rememberBlockEvents(block.hash, [returned, transferred])

    const found = findSiblingEvent(block, transferred, 'MultiTokens.TokenReturned', decode, (d) => d.token === '1-2')

    assert.deepEqual(found, { token: '1-2' })
})

void test('never matches the item itself', () => {
    const burned = fake('0001-1', 'MultiTokens.Burned', '1-2')
    rememberBlockEvents(block.hash, [burned])

    assert.equal(
        findSiblingEvent(block, burned, 'MultiTokens.Burned', decode, () => true),
        undefined
    )
})

void test('restricts to the same extrinsic when asked', () => {
    const filled = fake('0001-1', 'Marketplace.ListingFilled', '1-2', 'ext-1')
    const otherExtrinsic = fake('0001-2', 'Marketplace.OrderMatched', '1-2', 'ext-2')
    const sweep = fake('0001-3', 'Marketplace.OrderMatched', '1-2')
    const sameExtrinsic = fake('0001-4', 'Marketplace.OrderMatched', '1-2', 'ext-1')
    rememberBlockEvents(block.hash, [filled, otherExtrinsic, sweep, sameExtrinsic])

    const found = findSiblingEvent(block, filled, 'Marketplace.OrderMatched', decode, () => true, true)
    assert.equal(found, decode(sameExtrinsic))

    const fromSweep = fake('0001-5', 'Marketplace.ListingFilled', '1-2')
    rememberBlockEvents(block.hash, [fromSweep, sweep])
    assert.equal(
        findSiblingEvent(block, fromSweep, 'Marketplace.OrderMatched', decode, () => true, true),
        undefined
    )
})

void test('sees nothing for a block other than the remembered one', () => {
    const burned = fake('0001-1', 'MultiTokens.Burned', '1-2')
    const expiry = fake('0001-2', 'MultiTokens.EphemeralTokenDestroyed', '1-2')
    rememberBlockEvents('0xother', [burned, expiry])

    assert.equal(
        findSiblingEvent(block, burned, 'MultiTokens.EphemeralTokenDestroyed', decode, () => true),
        undefined
    )
})

void test('does not decode events of other names', () => {
    const burned = fake('0001-1', 'MultiTokens.Burned', '1-2')
    const transferred = fake('0001-2', 'MultiTokens.Transferred', '1-2')
    rememberBlockEvents(block.hash, [burned, transferred])

    const throwing = (): { token: string } => {
        throw new Error('decoded an event of another name')
    }
    assert.equal(
        findSiblingEvent(block, burned, 'MultiTokens.EphemeralTokenDestroyed', throwing, () => true),
        undefined
    )
})

void test('paired events consume each nearest preceding candidate only once', () => {
    const first = fake('0001-1', 'MultiTokens.Transferred', '1-2', 'ext-1')
    const nearest = fake('0001-2', 'MultiTokens.Transferred', '1-2', 'ext-1')
    const firstLoan = fake('0001-3', 'MultiTokens.TokenLent', '1-2', 'ext-1')
    const secondLoan = fake('0001-4', 'MultiTokens.TokenLent', '1-2', 'ext-1')
    rememberBlockEvents(block.hash, [first, nearest, firstLoan, secondLoan])

    const paired = (item: EventItem) =>
        findPairedFollowingEvent(
            block,
            item,
            'MultiTokens.TokenLent',
            decode,
            (event) => ({ ...decode(event), id: event.id }),
            (transfer, loan) => transfer.token === loan.token
        )

    assert.equal(paired(nearest)?.id, firstLoan.id)
    assert.equal(paired(first)?.id, secondLoan.id)
    assert.equal(paired(nearest)?.id, firstLoan.id)
    rememberBlockEvents('0xanother-block', [first, nearest, firstLoan, secondLoan])
    assert.equal(paired(first), undefined)
})

void test('ordinary transfer batches without a same-extrinsic loan are not decoded for pairing', () => {
    const transfer = fake('0001-1', 'MultiTokens.Transferred', '1-2', 'ext-1')
    const anotherTransfer = fake('0001-2', 'MultiTokens.Transferred', '1-2', 'ext-1')
    const unrelatedLoan = fake('0001-3', 'MultiTokens.TokenLent', '1-2', 'ext-2')
    rememberBlockEvents(block.hash, [transfer, anotherTransfer, unrelatedLoan])
    const throwing = (): { token: string } => {
        throw new Error('unrelated transfer batch decoded for pairing')
    }

    assert.equal(
        findPairedFollowingEvent(block, transfer, 'MultiTokens.TokenLent', throwing, throwing, () => true),
        undefined
    )
})

void test('cause values are the documented SNS contract', () => {
    assert.deepEqual(Object.values(SnsCause).sort(), [
        'abandoned',
        'burn',
        'cancelled',
        'ephemeralExpiry',
        'expired',
        'fill',
        'loanReturn',
        'loanStart',
        'match',
        'transfer',
        'underMinimum',
    ])
})
