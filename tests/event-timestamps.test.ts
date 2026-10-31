import assert from 'node:assert/strict'
import test from 'node:test'
import { Event, Extrinsic } from '~/model'
import { setEventBlock } from '~/util/event-block'

const timestamp = Date.parse('2026-10-30T12:02:18Z')

for (const name of ['MultiTokensTokenReturned', 'MultiTokensTransferred']) {
    void test(`${name} records the block time without creating an extrinsic`, () => {
        const event = new Event({ id: '0013503916-abcde-000001', name, extrinsic: null })
        setEventBlock(event, { height: 13503916, timestamp }, 1)
        assert.equal(event.createdAt?.toISOString(), '2026-10-30T12:02:18.000Z')
        assert.equal(event.blockNumber, 13503916)
        assert.equal(event.index, 1)
        assert.equal(event.extrinsic, null)
    })
}

void test('signed events use the containing block time and retain their extrinsic', () => {
    const extrinsic = new Extrinsic({ id: 'tx', createdAt: new Date(0) })
    const event = new Event({ extrinsic })
    setEventBlock(event, { height: 13503916, timestamp }, 5)
    assert.equal(event.createdAt?.getTime(), timestamp)
    assert.equal(event.extrinsic, extrinsic)
})

void test('an unavailable block timestamp stays unknown rather than using the epoch or current time', () => {
    const event = new Event()
    setEventBlock(event, { height: 13503916, timestamp: undefined }, 1)
    assert.equal(event.createdAt, null)
})
