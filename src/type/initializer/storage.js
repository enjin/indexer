'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.bufferedSessionChanges = exports.hasInitialized = void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
exports.hasInitialized = {
    /**
     *  Whether the parachains modules have been initialized within this block.
     *
     *  Semantically a `bool`, but this guarantees it should never hit the trie,
     *  as this is cleared in `on_finalize` and Frame optimizes `None` values to be empty values.
     *
     *  As a `bool`, `set(false)` and `remove()` both lead to the next `get()` being false, but one of
     *  them writes to the trie and one does not. This confusion makes `Option<()>` more suitable for
     *  the semantics of this variable.
     */
    enjinV100: new support_1.StorageType('Initializer.HasInitialized', 'Optional', [], support_1.sts.unit()),
}
exports.bufferedSessionChanges = {
    /**
     *  Buffered session changes along with the block number at which they should be applied.
     *
     *  Typically this will be empty or one element long. Apart from that this item never hits
     *  the storage.
     *
     *  However this is a `Vec` regardless to handle various edge cases that may occur at runtime
     *  upgrade boundaries or if governance intervenes.
     */
    enjinV100: new support_1.StorageType(
        'Initializer.BufferedSessionChanges',
        'Default',
        [],
        support_1.sts.array(function () {
            return enjinV100.BufferedSessionChange
        })
    ),
}
