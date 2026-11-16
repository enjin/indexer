import assert from 'node:assert/strict'
import test from 'node:test'
import { Block, EventItem } from '~/contexts'
import { getRuntimeCached } from '~/decoder/metadata'
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

const mainnetUpgradeBlock = { height: 12_319_600, specVersion: 1043, timestamp: Date.UTC(2026, 10, 16, 16) }

for (const [callName, indexed] of [
    ['ParachainSystem.set_validation_data', false],
    ['Timestamp.set', false],
    ['System.set_code', true],
] as const) {
    void test(`Enjin Matrixchain 1031 to 1043 ${indexed ? 'links' : 'omits'} the ${callName} extrinsic`, async () => {
        const runtime = await getRuntimeCached('enjin-matrixchain', 1031)
        const encoded = runtime.scaleCodec.encodeToHex(runtime.description.event, {
            __kind: 'System',
            value: { __kind: 'CodeUpdated' },
        })
        const record = runtime.toEventRecord(runtime.scaleCodec.decodeBinary(runtime.description.event, encoded))
        const item = {
            ...record,
            id: 'upgrade-event',
            extrinsic: { id: 'upgrade-extrinsic', call: { name: callName } },
        } as EventItem

        const [event, notification] = codeUpdated(mainnetUpgradeBlock as Block, item, false)
        setEventBlock(event, mainnetUpgradeBlock, 0)

        assert.equal(event.extrinsic?.id ?? null, indexed ? item.extrinsic?.id : null)
        assert.deepEqual(event.createdAt, indexed ? null : new Date(mainnetUpgradeBlock.timestamp))
        assert.deepEqual(notification, {
            id: item.id,
            name: record.name,
            body: { blockNumber: mainnetUpgradeBlock.height, specVersion: mainnetUpgradeBlock.specVersion },
        })
    })
}
