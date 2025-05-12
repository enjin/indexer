'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.authorizedUpgrade =
    exports.inherentsApplied =
    exports.executionPhase =
    exports.upgradedToTripleRefCount =
    exports.upgradedToU32RefCount =
    exports.lastRuntimeUpgrade =
    exports.eventTopics =
    exports.eventCount =
    exports.events =
    exports.digest =
    exports.parentHash =
    exports.number =
    exports.extrinsicData =
    exports.blockHash =
    exports.allExtrinsicsLen =
    exports.blockWeight =
    exports.extrinsicCount =
    exports.account =
        void 0
var support_1 = require('../support')
var v100 = require('../v100')
var enjinV100 = require('../enjinV100')
var enjinV101 = require('../enjinV101')
var v101 = require('../v101')
var v102 = require('../v102')
var v103 = require('../v103')
var v104 = require('../v104')
var v105 = require('../v105')
var v106 = require('../v106')
var enjinV110 = require('../enjinV110')
var v110 = require('../v110')
var enjinV120 = require('../enjinV120')
var v120 = require('../v120')
var matrixV500 = require('../matrixV500')
var matrixV600 = require('../matrixV600')
var matrixV601 = require('../matrixV601')
var matrixV602 = require('../matrixV602')
var matrixEnjinV603 = require('../matrixEnjinV603')
var matrixV604 = require('../matrixV604')
var matrixEnjinV1000 = require('../matrixEnjinV1000')
var matrixV1000 = require('../matrixV1000')
var matrixEnjinV1004 = require('../matrixEnjinV1004')
var matrixV1004 = require('../matrixV1004')
var matrixEnjinV1005 = require('../matrixEnjinV1005')
var matrixV1005 = require('../matrixV1005')
var matrixV1010 = require('../matrixV1010')
var matrixV1011 = require('../matrixV1011')
var matrixEnjinV1012 = require('../matrixEnjinV1012')
var matrixV1012 = require('../matrixV1012')
var matrixV1013 = require('../matrixV1013')
var matrixEnjinV1014 = require('../matrixEnjinV1014')
var matrixV1020 = require('../matrixV1020')
var enjinV1021 = require('../enjinV1021')
var v1021 = require('../v1021')
var matrixEnjinV1022 = require('../matrixEnjinV1022')
var matrixV1022 = require('../matrixV1022')
var enjinV1022 = require('../enjinV1022')
var v1022 = require('../v1022')
var enjinV1023 = require('../enjinV1023')
var v1023 = require('../v1023')
var enjinV1026 = require('../enjinV1026')
var v1026 = require('../v1026')
var v1030 = require('../v1030')
var v1031 = require('../v1031')
var enjinV1032 = require('../enjinV1032')
var v1032 = require('../v1032')
var enjinV1033 = require('../enjinV1033')
var v1033 = require('../v1033')
var enjinV1050 = require('../enjinV1050')
var v1050 = require('../v1050')
exports.account = {
    /**
     *  The full account information for a particular account ID.
     */
    matrixEnjinV603: new support_1.StorageType(
        'System.Account',
        'Default',
        [matrixEnjinV603.AccountId32],
        matrixEnjinV603.AccountInfo
    ),
    /**
     *  The full account information for a particular account ID.
     */
    matrixV500: new support_1.StorageType(
        'System.Account',
        'Default',
        [matrixV500.AccountId32],
        matrixV500.AccountInfo
    ),
    /**
     *  The full account information for a particular account ID.
     */
    matrixV602: new support_1.StorageType(
        'System.Account',
        'Default',
        [matrixV602.AccountId32],
        matrixV602.AccountInfo
    ),
    /**
     *  The full account information for a particular account ID.
     */
    v100: new support_1.StorageType('System.Account', 'Default', [v100.AccountId32], v100.AccountInfo),
    /**
     *  The full account information for a particular account ID.
     */
    v104: new support_1.StorageType('System.Account', 'Default', [v104.AccountId32], v104.AccountInfo),
}
exports.extrinsicCount = {
    /**
     *  Total extrinsics count for the current block.
     */
    matrixEnjinV603: new support_1.StorageType('System.ExtrinsicCount', 'Optional', [], support_1.sts.number()),
}
exports.blockWeight = {
    /**
     *  The current weight for the block.
     */
    matrixEnjinV603: new support_1.StorageType('System.BlockWeight', 'Default', [], matrixEnjinV603.PerDispatchClass),
}
exports.allExtrinsicsLen = {
    /**
     *  Total length (in bytes) for all extrinsics put together, for the current block.
     */
    matrixEnjinV603: new support_1.StorageType('System.AllExtrinsicsLen', 'Optional', [], support_1.sts.number()),
}
exports.blockHash = {
    /**
     *  Map of block numbers to block hashes.
     */
    matrixEnjinV603: new support_1.StorageType(
        'System.BlockHash',
        'Default',
        [support_1.sts.number()],
        matrixEnjinV603.H256
    ),
}
exports.extrinsicData = {
    /**
     *  Extrinsics data for the current block (maps an extrinsic's index to its data).
     */
    matrixEnjinV603: new support_1.StorageType(
        'System.ExtrinsicData',
        'Default',
        [support_1.sts.number()],
        support_1.sts.bytes()
    ),
}
exports.number = {
    /**
     *  The current block number being processed. Set by `execute_block`.
     */
    matrixEnjinV603: new support_1.StorageType('System.Number', 'Default', [], support_1.sts.number()),
}
exports.parentHash = {
    /**
     *  Hash of the previous block.
     */
    matrixEnjinV603: new support_1.StorageType('System.ParentHash', 'Default', [], matrixEnjinV603.H256),
}
exports.digest = {
    /**
     *  Digest of the current block, also part of the block header.
     */
    matrixEnjinV603: new support_1.StorageType('System.Digest', 'Default', [], matrixEnjinV603.Digest),
}
exports.events = {
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    matrixEnjinV603: new support_1.StorageType(
        'System.Events',
        'Default',
        [],
        support_1.sts.array(function () {
            return matrixEnjinV603.EventRecord
        })
    ),
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    matrixEnjinV1000: new support_1.StorageType(
        'System.Events',
        'Default',
        [],
        support_1.sts.array(function () {
            return matrixEnjinV1000.EventRecord
        })
    ),
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    matrixEnjinV1004: new support_1.StorageType(
        'System.Events',
        'Default',
        [],
        support_1.sts.array(function () {
            return matrixEnjinV1004.EventRecord
        })
    ),
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    matrixEnjinV1005: new support_1.StorageType(
        'System.Events',
        'Default',
        [],
        support_1.sts.array(function () {
            return matrixEnjinV1005.EventRecord
        })
    ),
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    matrixEnjinV1012: new support_1.StorageType(
        'System.Events',
        'Default',
        [],
        support_1.sts.array(function () {
            return matrixEnjinV1012.EventRecord
        })
    ),
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    matrixEnjinV1014: new support_1.StorageType(
        'System.Events',
        'Default',
        [],
        support_1.sts.array(function () {
            return matrixEnjinV1014.EventRecord
        })
    ),
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    matrixEnjinV1022: new support_1.StorageType(
        'System.Events',
        'Default',
        [],
        support_1.sts.array(function () {
            return matrixEnjinV1022.EventRecord
        })
    ),
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    matrixV500: new support_1.StorageType(
        'System.Events',
        'Default',
        [],
        support_1.sts.array(function () {
            return matrixV500.EventRecord
        })
    ),
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    matrixV600: new support_1.StorageType(
        'System.Events',
        'Default',
        [],
        support_1.sts.array(function () {
            return matrixV600.EventRecord
        })
    ),
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    matrixV601: new support_1.StorageType(
        'System.Events',
        'Default',
        [],
        support_1.sts.array(function () {
            return matrixV601.EventRecord
        })
    ),
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    matrixV602: new support_1.StorageType(
        'System.Events',
        'Default',
        [],
        support_1.sts.array(function () {
            return matrixV602.EventRecord
        })
    ),
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    matrixV604: new support_1.StorageType(
        'System.Events',
        'Default',
        [],
        support_1.sts.array(function () {
            return matrixV604.EventRecord
        })
    ),
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    matrixV1000: new support_1.StorageType(
        'System.Events',
        'Default',
        [],
        support_1.sts.array(function () {
            return matrixV1000.EventRecord
        })
    ),
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    matrixV1004: new support_1.StorageType(
        'System.Events',
        'Default',
        [],
        support_1.sts.array(function () {
            return matrixV1004.EventRecord
        })
    ),
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    matrixV1005: new support_1.StorageType(
        'System.Events',
        'Default',
        [],
        support_1.sts.array(function () {
            return matrixV1005.EventRecord
        })
    ),
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    matrixV1010: new support_1.StorageType(
        'System.Events',
        'Default',
        [],
        support_1.sts.array(function () {
            return matrixV1010.EventRecord
        })
    ),
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    matrixV1011: new support_1.StorageType(
        'System.Events',
        'Default',
        [],
        support_1.sts.array(function () {
            return matrixV1011.EventRecord
        })
    ),
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    matrixV1012: new support_1.StorageType(
        'System.Events',
        'Default',
        [],
        support_1.sts.array(function () {
            return matrixV1012.EventRecord
        })
    ),
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    matrixV1013: new support_1.StorageType(
        'System.Events',
        'Default',
        [],
        support_1.sts.array(function () {
            return matrixV1013.EventRecord
        })
    ),
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    matrixV1020: new support_1.StorageType(
        'System.Events',
        'Default',
        [],
        support_1.sts.array(function () {
            return matrixV1020.EventRecord
        })
    ),
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    matrixV1022: new support_1.StorageType(
        'System.Events',
        'Default',
        [],
        support_1.sts.array(function () {
            return matrixV1022.EventRecord
        })
    ),
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    enjinV100: new support_1.StorageType(
        'System.Events',
        'Default',
        [],
        support_1.sts.array(function () {
            return enjinV100.EventRecord
        })
    ),
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    enjinV101: new support_1.StorageType(
        'System.Events',
        'Default',
        [],
        support_1.sts.array(function () {
            return enjinV101.EventRecord
        })
    ),
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    enjinV110: new support_1.StorageType(
        'System.Events',
        'Default',
        [],
        support_1.sts.array(function () {
            return enjinV110.EventRecord
        })
    ),
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    enjinV120: new support_1.StorageType(
        'System.Events',
        'Default',
        [],
        support_1.sts.array(function () {
            return enjinV120.EventRecord
        })
    ),
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    enjinV1021: new support_1.StorageType(
        'System.Events',
        'Default',
        [],
        support_1.sts.array(function () {
            return enjinV1021.EventRecord
        })
    ),
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    enjinV1022: new support_1.StorageType(
        'System.Events',
        'Default',
        [],
        support_1.sts.array(function () {
            return enjinV1022.EventRecord
        })
    ),
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    enjinV1023: new support_1.StorageType(
        'System.Events',
        'Default',
        [],
        support_1.sts.array(function () {
            return enjinV1023.EventRecord
        })
    ),
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    enjinV1026: new support_1.StorageType(
        'System.Events',
        'Default',
        [],
        support_1.sts.array(function () {
            return enjinV1026.EventRecord
        })
    ),
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    enjinV1032: new support_1.StorageType(
        'System.Events',
        'Default',
        [],
        support_1.sts.array(function () {
            return enjinV1032.EventRecord
        })
    ),
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    enjinV1033: new support_1.StorageType(
        'System.Events',
        'Default',
        [],
        support_1.sts.array(function () {
            return enjinV1033.EventRecord
        })
    ),
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    enjinV1050: new support_1.StorageType(
        'System.Events',
        'Default',
        [],
        support_1.sts.array(function () {
            return enjinV1050.EventRecord
        })
    ),
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v100: new support_1.StorageType(
        'System.Events',
        'Default',
        [],
        support_1.sts.array(function () {
            return v100.EventRecord
        })
    ),
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v101: new support_1.StorageType(
        'System.Events',
        'Default',
        [],
        support_1.sts.array(function () {
            return v101.EventRecord
        })
    ),
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v102: new support_1.StorageType(
        'System.Events',
        'Default',
        [],
        support_1.sts.array(function () {
            return v102.EventRecord
        })
    ),
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v103: new support_1.StorageType(
        'System.Events',
        'Default',
        [],
        support_1.sts.array(function () {
            return v103.EventRecord
        })
    ),
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v104: new support_1.StorageType(
        'System.Events',
        'Default',
        [],
        support_1.sts.array(function () {
            return v104.EventRecord
        })
    ),
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v105: new support_1.StorageType(
        'System.Events',
        'Default',
        [],
        support_1.sts.array(function () {
            return v105.EventRecord
        })
    ),
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v106: new support_1.StorageType(
        'System.Events',
        'Default',
        [],
        support_1.sts.array(function () {
            return v106.EventRecord
        })
    ),
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v110: new support_1.StorageType(
        'System.Events',
        'Default',
        [],
        support_1.sts.array(function () {
            return v110.EventRecord
        })
    ),
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v120: new support_1.StorageType(
        'System.Events',
        'Default',
        [],
        support_1.sts.array(function () {
            return v120.EventRecord
        })
    ),
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v1021: new support_1.StorageType(
        'System.Events',
        'Default',
        [],
        support_1.sts.array(function () {
            return v1021.EventRecord
        })
    ),
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v1022: new support_1.StorageType(
        'System.Events',
        'Default',
        [],
        support_1.sts.array(function () {
            return v1022.EventRecord
        })
    ),
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v1023: new support_1.StorageType(
        'System.Events',
        'Default',
        [],
        support_1.sts.array(function () {
            return v1023.EventRecord
        })
    ),
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v1026: new support_1.StorageType(
        'System.Events',
        'Default',
        [],
        support_1.sts.array(function () {
            return v1026.EventRecord
        })
    ),
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v1030: new support_1.StorageType(
        'System.Events',
        'Default',
        [],
        support_1.sts.array(function () {
            return v1030.EventRecord
        })
    ),
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v1031: new support_1.StorageType(
        'System.Events',
        'Default',
        [],
        support_1.sts.array(function () {
            return v1031.EventRecord
        })
    ),
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v1032: new support_1.StorageType(
        'System.Events',
        'Default',
        [],
        support_1.sts.array(function () {
            return v1032.EventRecord
        })
    ),
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v1033: new support_1.StorageType(
        'System.Events',
        'Default',
        [],
        support_1.sts.array(function () {
            return v1033.EventRecord
        })
    ),
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v1050: new support_1.StorageType(
        'System.Events',
        'Default',
        [],
        support_1.sts.array(function () {
            return v1050.EventRecord
        })
    ),
}
exports.eventCount = {
    /**
     *  The number of events in the `Events<T>` list.
     */
    matrixEnjinV603: new support_1.StorageType('System.EventCount', 'Default', [], support_1.sts.number()),
}
exports.eventTopics = {
    /**
     *  Mapping between a topic (represented by T::Hash) and a vector of indexes
     *  of events in the `<Events<T>>` list.
     *
     *  All topic vectors have deterministic storage locations depending on the topic. This
     *  allows light-clients to leverage the changes trie storage tracking mechanism and
     *  in case of changes fetch the list of events of interest.
     *
     *  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
     *  the `EventIndex` then in case if the topic has the same contents on the next block
     *  no notification will be triggered thus the event might be lost.
     */
    matrixEnjinV603: new support_1.StorageType(
        'System.EventTopics',
        'Default',
        [matrixEnjinV603.H256],
        support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [support_1.sts.number(), support_1.sts.number()]
            })
        })
    ),
}
exports.lastRuntimeUpgrade = {
    /**
     *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
     */
    matrixEnjinV603: new support_1.StorageType(
        'System.LastRuntimeUpgrade',
        'Optional',
        [],
        matrixEnjinV603.LastRuntimeUpgradeInfo
    ),
}
exports.upgradedToU32RefCount = {
    /**
     *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
     */
    matrixEnjinV603: new support_1.StorageType('System.UpgradedToU32RefCount', 'Default', [], support_1.sts.boolean()),
}
exports.upgradedToTripleRefCount = {
    /**
     *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
     *  (default) if not.
     */
    matrixEnjinV603: new support_1.StorageType(
        'System.UpgradedToTripleRefCount',
        'Default',
        [],
        support_1.sts.boolean()
    ),
}
exports.executionPhase = {
    /**
     *  The execution phase of the block.
     */
    matrixEnjinV603: new support_1.StorageType('System.ExecutionPhase', 'Optional', [], matrixEnjinV603.Phase),
}
exports.inherentsApplied = {
    /**
     *  Whether all inherents have been applied.
     */
    matrixEnjinV1012: new support_1.StorageType('System.InherentsApplied', 'Default', [], support_1.sts.boolean()),
}
exports.authorizedUpgrade = {
    /**
     *  `Some` if a code upgrade has been authorized.
     */
    matrixEnjinV1012: new support_1.StorageType(
        'System.AuthorizedUpgrade',
        'Optional',
        [],
        matrixEnjinV1012.CodeUpgradeAuthorization
    ),
}
