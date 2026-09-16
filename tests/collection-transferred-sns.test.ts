import assert from 'node:assert/strict'
import test from 'node:test'
import type { EventItem } from '~/contexts'
import { collectionTransferredSnsEvent } from '~/pallet/multi-tokens/processors/collection-transferred-sns'

void test('collection transferred SNS payload matches the Platform Cloud contract', () => {
    const item = {
        id: 'event-id',
        name: 'MultiTokens.CollectionTransferred',
        extrinsic: { id: 'extrinsic-id' },
    } as EventItem

    const event = collectionTransferredSnsEvent(item, {
        collectionId: 2000n,
        newOwner: '0x1234',
    })

    assert.deepEqual(event, {
        id: 'event-id',
        name: 'MultiTokens.CollectionTransferred',
        body: {
            collectionId: 2000n,
            owner: '0x1234',
            extrinsic: 'extrinsic-id',
        },
    })
    assert.equal('body' in event.body, false)
})
