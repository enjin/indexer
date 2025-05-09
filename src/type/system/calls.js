'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.applyAuthorizedUpgrade =
    exports.authorizeUpgradeWithoutChecks =
    exports.authorizeUpgrade =
    exports.remarkWithEvent =
    exports.killPrefix =
    exports.killStorage =
    exports.setStorage =
    exports.setCodeWithoutChecks =
    exports.setCode =
    exports.setHeapPages =
    exports.remark =
        void 0
var support_1 = require('../support')
var matrixEnjinV1012 = require('../matrixEnjinV1012')
exports.remark = {
    name: 'System.remark',
    /**
     * Make some on-chain remark.
     *
     * - `O(1)`
     */
    matrixEnjinV603: new support_1.CallType(
        'System.remark',
        support_1.sts.struct({
            remark: support_1.sts.bytes(),
        })
    ),
}
exports.setHeapPages = {
    name: 'System.set_heap_pages',
    /**
     * Set the number of pages in the WebAssembly environment's heap.
     */
    matrixEnjinV603: new support_1.CallType(
        'System.set_heap_pages',
        support_1.sts.struct({
            pages: support_1.sts.bigint(),
        })
    ),
}
exports.setCode = {
    name: 'System.set_code',
    /**
     * Set the new runtime code.
     */
    matrixEnjinV603: new support_1.CallType(
        'System.set_code',
        support_1.sts.struct({
            code: support_1.sts.bytes(),
        })
    ),
}
exports.setCodeWithoutChecks = {
    name: 'System.set_code_without_checks',
    /**
     * Set the new runtime code without doing any checks of the given `code`.
     */
    matrixEnjinV603: new support_1.CallType(
        'System.set_code_without_checks',
        support_1.sts.struct({
            code: support_1.sts.bytes(),
        })
    ),
}
exports.setStorage = {
    name: 'System.set_storage',
    /**
     * Set some items of storage.
     */
    matrixEnjinV603: new support_1.CallType(
        'System.set_storage',
        support_1.sts.struct({
            items: support_1.sts.array(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.bytes(), support_1.sts.bytes()]
                })
            }),
        })
    ),
}
exports.killStorage = {
    name: 'System.kill_storage',
    /**
     * Kill some items from storage.
     */
    matrixEnjinV603: new support_1.CallType(
        'System.kill_storage',
        support_1.sts.struct({
            keys: support_1.sts.array(function () {
                return support_1.sts.bytes()
            }),
        })
    ),
}
exports.killPrefix = {
    name: 'System.kill_prefix',
    /**
     * Kill all storage items with a key that starts with the given prefix.
     *
     * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
     * the prefix we are removing to accurately calculate the weight of this function.
     */
    matrixEnjinV603: new support_1.CallType(
        'System.kill_prefix',
        support_1.sts.struct({
            prefix: support_1.sts.bytes(),
            subkeys: support_1.sts.number(),
        })
    ),
}
exports.remarkWithEvent = {
    name: 'System.remark_with_event',
    /**
     * Make some on-chain remark and emit event.
     */
    matrixEnjinV603: new support_1.CallType(
        'System.remark_with_event',
        support_1.sts.struct({
            remark: support_1.sts.bytes(),
        })
    ),
}
exports.authorizeUpgrade = {
    name: 'System.authorize_upgrade',
    /**
     * Authorize an upgrade to a given `code_hash` for the runtime. The runtime can be supplied
     * later.
     *
     * This call requires Root origin.
     */
    matrixEnjinV1012: new support_1.CallType(
        'System.authorize_upgrade',
        support_1.sts.struct({
            codeHash: matrixEnjinV1012.H256,
        })
    ),
}
exports.authorizeUpgradeWithoutChecks = {
    name: 'System.authorize_upgrade_without_checks',
    /**
     * Authorize an upgrade to a given `code_hash` for the runtime. The runtime can be supplied
     * later.
     *
     * WARNING: This authorizes an upgrade that will take place without any safety checks, for
     * example that the spec name remains the same and that the version number increases. Not
     * recommended for normal use. Use `authorize_upgrade` instead.
     *
     * This call requires Root origin.
     */
    matrixEnjinV1012: new support_1.CallType(
        'System.authorize_upgrade_without_checks',
        support_1.sts.struct({
            codeHash: matrixEnjinV1012.H256,
        })
    ),
}
exports.applyAuthorizedUpgrade = {
    name: 'System.apply_authorized_upgrade',
    /**
     * Provide the preimage (runtime binary) `code` for an upgrade that has been authorized.
     *
     * If the authorization required a version check, this call will ensure the spec name
     * remains unchanged and that the spec version has increased.
     *
     * Depending on the runtime's `OnSetCode` configuration, this function may directly apply
     * the new `code` in the same block or attempt to schedule the upgrade.
     *
     * All origins are allowed.
     */
    matrixEnjinV1012: new support_1.CallType(
        'System.apply_authorized_upgrade',
        support_1.sts.struct({
            code: support_1.sts.bytes(),
        })
    ),
}
