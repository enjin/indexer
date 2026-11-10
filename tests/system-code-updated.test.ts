import assert from 'node:assert/strict'
import test from 'node:test'
import { Block, EventItem } from '~/contexts'
import { codeUpdated } from '~/pallet/system/processors'
import { setEventBlock } from '~/util/event-block'

const block = { height: 13_061_291, specVersion: 1042 } as Block

for (const args of [undefined, { hash: `0x${'ab'.repeat(32)}` }]) {
    void test(`System.CodeUpdated emits the runtime version for ${args ? 'hash' : 'unit'} events`, () => {
        const item = { id: '13061291-0', name: 'System.CodeUpdated', args } as EventItem
        const [event, notification] = codeUpdated(block, item, false)

        assert.equal(event.id, item.id)
        assert.equal(event.name, 'System.CodeUpdated')
        assert.deepEqual(notification, {
            id: item.id,
            name: 'System.CodeUpdated',
            body: { blockNumber: block.height, specVersion: block.specVersion },
        })

        const [replayedEvent, replayedNotification] = codeUpdated(block, item, true)
        assert.equal(replayedEvent.id, item.id)
        assert.equal(replayedNotification, undefined)
    })
}

const timestamp = Date.UTC(2026, 10, 10)
const upgradeBlock = { height: 13_663_460, timestamp } as Block
const eventId = '0013663460-c5930-000000'

for (const [name, indexed] of [
    ['ParachainSystem.set_validation_data', false],
    ['Timestamp.set', false],
    ['System.set_code', true],
] as const) {
    void test(`System.CodeUpdated only links indexed extrinsics for ${name}`, () => {
        const item = {
            id: eventId,
            name: 'System.CodeUpdated',
            extrinsic: { id: eventId, call: { name } },
        } as EventItem

        const [event, notification] = codeUpdated(upgradeBlock, item, false)
        setEventBlock(event, upgradeBlock, 0)

        if (indexed) {
            assert.equal(event.extrinsic?.id, item.extrinsic?.id)
            assert.equal(event.createdAt, null)
        } else {
            assert.equal(event.extrinsic, null)
            assert.deepEqual(event.createdAt, new Date(timestamp))
        }
        assert.equal(notification?.id, eventId)
    })
}
