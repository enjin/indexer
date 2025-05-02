'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.beefyNextAuthorities = exports.beefyAuthorities = void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var v100 = require('../v100')
var v1030 = require('../v1030')
var enjinV1032 = require('../enjinV1032')
exports.beefyAuthorities = {
    /**
     *  Details of current BEEFY authority set.
     */
    enjinV100: new support_1.StorageType('MmrLeaf.BeefyAuthorities', 'Default', [], enjinV100.BeefyAuthoritySet),
    /**
     *  Details of current BEEFY authority set.
     */
    enjinV1032: new support_1.StorageType('MmrLeaf.BeefyAuthorities', 'Default', [], enjinV1032.BeefyAuthoritySet),
    /**
     *  Details of current BEEFY authority set.
     */
    v100: new support_1.StorageType('MmrLeaf.BeefyAuthorities', 'Default', [], v100.BeefyAuthoritySet),
    /**
     *  Details of current BEEFY authority set.
     */
    v1030: new support_1.StorageType('MmrLeaf.BeefyAuthorities', 'Default', [], v1030.BeefyAuthoritySet),
}
exports.beefyNextAuthorities = {
    /**
     *  Details of next BEEFY authority set.
     *
     *  This storage entry is used as cache for calls to `update_beefy_next_authority_set`.
     */
    enjinV100: new support_1.StorageType('MmrLeaf.BeefyNextAuthorities', 'Default', [], enjinV100.BeefyAuthoritySet),
    /**
     *  Details of next BEEFY authority set.
     *
     *  This storage entry is used as cache for calls to `update_beefy_next_authority_set`.
     */
    enjinV1032: new support_1.StorageType('MmrLeaf.BeefyNextAuthorities', 'Default', [], enjinV1032.BeefyAuthoritySet),
    /**
     *  Details of next BEEFY authority set.
     *
     *  This storage entry is used as cache for calls to `update_beefy_next_authority_set`.
     */
    v100: new support_1.StorageType('MmrLeaf.BeefyNextAuthorities', 'Default', [], v100.BeefyAuthoritySet),
    /**
     *  Details of next BEEFY authority set.
     *
     *  This storage entry is used as cache for calls to `update_beefy_next_authority_set`.
     */
    v1030: new support_1.StorageType('MmrLeaf.BeefyNextAuthorities', 'Default', [], v1030.BeefyAuthoritySet),
}
