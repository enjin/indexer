import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as matrixEnjinV1012 from '../matrixEnjinV1012'

export const remark =  {
    name: 'System.remark',
    /**
     * Make some on-chain remark.
     * 
     * - `O(1)`
     */
    matrixEnjinV603: new CallType(
        'System.remark',
        sts.struct({
            remark: sts.bytes(),
        })
    ),
}

export const setHeapPages =  {
    name: 'System.set_heap_pages',
    /**
     * Set the number of pages in the WebAssembly environment's heap.
     */
    matrixEnjinV603: new CallType(
        'System.set_heap_pages',
        sts.struct({
            pages: sts.bigint(),
        })
    ),
}

export const setCode =  {
    name: 'System.set_code',
    /**
     * Set the new runtime code.
     */
    matrixEnjinV603: new CallType(
        'System.set_code',
        sts.struct({
            code: sts.bytes(),
        })
    ),
}

export const setCodeWithoutChecks =  {
    name: 'System.set_code_without_checks',
    /**
     * Set the new runtime code without doing any checks of the given `code`.
     */
    matrixEnjinV603: new CallType(
        'System.set_code_without_checks',
        sts.struct({
            code: sts.bytes(),
        })
    ),
}

export const setStorage =  {
    name: 'System.set_storage',
    /**
     * Set some items of storage.
     */
    matrixEnjinV603: new CallType(
        'System.set_storage',
        sts.struct({
            items: sts.array(() => sts.tuple(() => [sts.bytes(), sts.bytes()])),
        })
    ),
}

export const killStorage =  {
    name: 'System.kill_storage',
    /**
     * Kill some items from storage.
     */
    matrixEnjinV603: new CallType(
        'System.kill_storage',
        sts.struct({
            keys: sts.array(() => sts.bytes()),
        })
    ),
}

export const killPrefix =  {
    name: 'System.kill_prefix',
    /**
     * Kill all storage items with a key that starts with the given prefix.
     * 
     * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
     * the prefix we are removing to accurately calculate the weight of this function.
     */
    matrixEnjinV603: new CallType(
        'System.kill_prefix',
        sts.struct({
            prefix: sts.bytes(),
            subkeys: sts.number(),
        })
    ),
}

export const remarkWithEvent =  {
    name: 'System.remark_with_event',
    /**
     * Make some on-chain remark and emit event.
     */
    matrixEnjinV603: new CallType(
        'System.remark_with_event',
        sts.struct({
            remark: sts.bytes(),
        })
    ),
}

export const authorizeUpgrade =  {
    name: 'System.authorize_upgrade',
    /**
     * Authorize an upgrade to a given `code_hash` for the runtime. The runtime can be supplied
     * later.
     * 
     * This call requires Root origin.
     */
    matrixEnjinV1012: new CallType(
        'System.authorize_upgrade',
        sts.struct({
            codeHash: matrixEnjinV1012.H256,
        })
    ),
}

export const authorizeUpgradeWithoutChecks =  {
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
    matrixEnjinV1012: new CallType(
        'System.authorize_upgrade_without_checks',
        sts.struct({
            codeHash: matrixEnjinV1012.H256,
        })
    ),
}

export const applyAuthorizedUpgrade =  {
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
    matrixEnjinV1012: new CallType(
        'System.apply_authorized_upgrade',
        sts.struct({
            code: sts.bytes(),
        })
    ),
}
