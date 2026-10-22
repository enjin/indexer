import assert from 'node:assert/strict'
import test from 'node:test'
import { Block, EventItem } from '~/contexts'
import { codeUpdated } from '~/pallet/system/processors'

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
