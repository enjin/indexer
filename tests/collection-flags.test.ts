import assert from 'node:assert/strict'
import test from 'node:test'

import { CollectionFlags } from '~/model'

void test('collection flags round-trip marketplaceDisabled and verifiedEnjin through JSON', () => {
    const flags = new CollectionFlags(undefined, {
        featured: false,
        hiddenForLegalReasons: true,
        marketplaceDisabled: true,
        verifiedEnjin: true,
    })

    assert.equal(flags.marketplaceDisabled, true)
    assert.equal(flags.verifiedEnjin, true)
    assert.deepEqual(flags.toJSON(), {
        hiddenForLegalReasons: true,
        featured: false,
        marketplaceDisabled: true,
        verifiedEnjin: true,
    })
})

void test('collection flags reject rows missing required flags', () => {
    assert.throws(
        () => new CollectionFlags(undefined, { featured: false, hiddenForLegalReasons: false }),
        /invalid Boolean/
    )
    assert.throws(
        () =>
            new CollectionFlags(undefined, {
                featured: false,
                hiddenForLegalReasons: false,
                marketplaceDisabled: false,
            }),
        /invalid Boolean/
    )
})
