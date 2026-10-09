import assert from 'node:assert/strict'
import test from 'node:test'

import { CollectionFlags } from '~/model'

void test('collection flags round-trip marketplaceDisabled through JSON', () => {
    const flags = new CollectionFlags(undefined, {
        featured: false,
        hiddenForLegalReasons: true,
        marketplaceDisabled: true,
    })

    assert.equal(flags.marketplaceDisabled, true)
    assert.deepEqual(flags.toJSON(), { hiddenForLegalReasons: true, featured: false, marketplaceDisabled: true })
})

void test('collection flags reject rows missing marketplaceDisabled', () => {
    assert.throws(
        () => new CollectionFlags(undefined, { featured: false, hiddenForLegalReasons: false }),
        /invalid Boolean/
    )
})
