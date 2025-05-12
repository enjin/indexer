'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.onChainVotes = exports.included = void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var v100 = require('../v100')
var v1030 = require('../v1030')
var enjinV1032 = require('../enjinV1032')
exports.included = {
    /**
     *  Whether the paras inherent was included within this block.
     *
     *  The `Option<()>` is effectively a `bool`, but it never hits storage in the `None` variant
     *  due to the guarantees of FRAME's storage APIs.
     *
     *  If this is `None` at the end of the block, we panic and render the block invalid.
     */
    enjinV100: new support_1.StorageType('ParaInherent.Included', 'Optional', [], support_1.sts.unit()),
}
exports.onChainVotes = {
    /**
     *  Scraped on chain data for extracting resolved disputes as well as backing votes.
     */
    enjinV100: new support_1.StorageType('ParaInherent.OnChainVotes', 'Optional', [], enjinV100.V4ScrapedOnChainVotes),
    /**
     *  Scraped on chain data for extracting resolved disputes as well as backing votes.
     */
    enjinV1032: new support_1.StorageType(
        'ParaInherent.OnChainVotes',
        'Optional',
        [],
        enjinV1032.V6ScrapedOnChainVotes
    ),
    /**
     *  Scraped on chain data for extracting resolved disputes as well as backing votes.
     */
    v100: new support_1.StorageType('ParaInherent.OnChainVotes', 'Optional', [], v100.V2ScrapedOnChainVotes),
    /**
     *  Scraped on chain data for extracting resolved disputes as well as backing votes.
     */
    v1030: new support_1.StorageType('ParaInherent.OnChainVotes', 'Optional', [], v1030.V6ScrapedOnChainVotes),
}
