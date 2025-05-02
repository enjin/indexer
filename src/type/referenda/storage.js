'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.metadataOf =
    exports.decidingCount =
    exports.trackQueue =
    exports.referendumInfoFor =
    exports.referendumCount =
        void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var v100 = require('../v100')
var enjinV101 = require('../enjinV101')
var v105 = require('../v105')
var v1030 = require('../v1030')
var enjinV1032 = require('../enjinV1032')
exports.referendumCount = {
    /**
     *  The next free referendum index, aka the number of referenda started so far.
     */
    enjinV100: new support_1.StorageType('Referenda.ReferendumCount', 'Default', [], support_1.sts.number()),
}
exports.referendumInfoFor = {
    /**
     *  Information concerning any given referendum.
     */
    enjinV100: new support_1.StorageType(
        'Referenda.ReferendumInfoFor',
        'Optional',
        [support_1.sts.number()],
        enjinV100.ReferendumInfo
    ),
    /**
     *  Information concerning any given referendum.
     */
    enjinV101: new support_1.StorageType(
        'Referenda.ReferendumInfoFor',
        'Optional',
        [support_1.sts.number()],
        enjinV101.ReferendumInfo
    ),
    /**
     *  Information concerning any given referendum.
     */
    enjinV1032: new support_1.StorageType(
        'Referenda.ReferendumInfoFor',
        'Optional',
        [support_1.sts.number()],
        enjinV1032.ReferendumInfo
    ),
    /**
     *  Information concerning any given referendum.
     */
    v100: new support_1.StorageType(
        'Referenda.ReferendumInfoFor',
        'Optional',
        [support_1.sts.number()],
        v100.ReferendumInfo
    ),
    /**
     *  Information concerning any given referendum.
     */
    v105: new support_1.StorageType(
        'Referenda.ReferendumInfoFor',
        'Optional',
        [support_1.sts.number()],
        v105.ReferendumInfo
    ),
    /**
     *  Information concerning any given referendum.
     */
    v1030: new support_1.StorageType(
        'Referenda.ReferendumInfoFor',
        'Optional',
        [support_1.sts.number()],
        v1030.ReferendumInfo
    ),
}
exports.trackQueue = {
    /**
     *  The sorted list of referenda ready to be decided but not yet being decided, ordered by
     *  conviction-weighted approvals.
     *
     *  This should be empty if `DecidingCount` is less than `TrackInfo::max_deciding`.
     */
    enjinV100: new support_1.StorageType(
        'Referenda.TrackQueue',
        'Default',
        [support_1.sts.number()],
        support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [support_1.sts.number(), support_1.sts.bigint()]
            })
        })
    ),
}
exports.decidingCount = {
    /**
     *  The number of referenda being decided currently.
     */
    enjinV100: new support_1.StorageType(
        'Referenda.DecidingCount',
        'Default',
        [support_1.sts.number()],
        support_1.sts.number()
    ),
}
exports.metadataOf = {
    /**
     *  The metadata is a general information concerning the referendum.
     *  The `PreimageHash` refers to the preimage of the `Preimages` provider which can be a JSON
     *  dump or IPFS hash of a JSON file.
     *
     *  Consider a garbage collection for a metadata of finished referendums to `unrequest` (remove)
     *  large preimages.
     */
    enjinV100: new support_1.StorageType('Referenda.MetadataOf', 'Optional', [support_1.sts.number()], enjinV100.H256),
}
