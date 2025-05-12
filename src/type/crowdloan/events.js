'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.addedToNewRaise =
    exports.memoUpdated =
    exports.edited =
    exports.handleBidResult =
    exports.dissolved =
    exports.allRefunded =
    exports.partiallyRefunded =
    exports.withdrew =
    exports.contributed =
    exports.created =
        void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var v100 = require('../v100')
var enjinV101 = require('../enjinV101')
var v104 = require('../v104')
var v105 = require('../v105')
exports.created = {
    name: 'Crowdloan.Created',
    /**
     * Create a new crowdloaning campaign.
     */
    enjinV100: new support_1.EventType(
        'Crowdloan.Created',
        support_1.sts.struct({
            paraId: enjinV100.Id,
        })
    ),
}
exports.contributed = {
    name: 'Crowdloan.Contributed',
    /**
     * Contributed to a crowd sale.
     */
    enjinV100: new support_1.EventType(
        'Crowdloan.Contributed',
        support_1.sts.struct({
            who: enjinV100.AccountId32,
            fundIndex: enjinV100.Id,
            amount: support_1.sts.bigint(),
        })
    ),
}
exports.withdrew = {
    name: 'Crowdloan.Withdrew',
    /**
     * Withdrew full balance of a contributor.
     */
    enjinV100: new support_1.EventType(
        'Crowdloan.Withdrew',
        support_1.sts.struct({
            who: enjinV100.AccountId32,
            fundIndex: enjinV100.Id,
            amount: support_1.sts.bigint(),
        })
    ),
}
exports.partiallyRefunded = {
    name: 'Crowdloan.PartiallyRefunded',
    /**
     * The loans in a fund have been partially dissolved, i.e. there are some left
     * over child keys that still need to be killed.
     */
    enjinV100: new support_1.EventType(
        'Crowdloan.PartiallyRefunded',
        support_1.sts.struct({
            paraId: enjinV100.Id,
        })
    ),
}
exports.allRefunded = {
    name: 'Crowdloan.AllRefunded',
    /**
     * All loans in a fund have been refunded.
     */
    enjinV100: new support_1.EventType(
        'Crowdloan.AllRefunded',
        support_1.sts.struct({
            paraId: enjinV100.Id,
        })
    ),
}
exports.dissolved = {
    name: 'Crowdloan.Dissolved',
    /**
     * Fund is dissolved.
     */
    enjinV100: new support_1.EventType(
        'Crowdloan.Dissolved',
        support_1.sts.struct({
            paraId: enjinV100.Id,
        })
    ),
}
exports.handleBidResult = {
    name: 'Crowdloan.HandleBidResult',
    /**
     * The result of trying to submit a new bid to the Slots pallet.
     */
    enjinV100: new support_1.EventType(
        'Crowdloan.HandleBidResult',
        support_1.sts.struct({
            paraId: enjinV100.Id,
            result: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return enjinV100.DispatchError
                }
            ),
        })
    ),
    /**
     * The result of trying to submit a new bid to the Slots pallet.
     */
    enjinV101: new support_1.EventType(
        'Crowdloan.HandleBidResult',
        support_1.sts.struct({
            paraId: enjinV101.Id,
            result: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return enjinV101.DispatchError
                }
            ),
        })
    ),
    /**
     * The result of trying to submit a new bid to the Slots pallet.
     */
    v100: new support_1.EventType(
        'Crowdloan.HandleBidResult',
        support_1.sts.struct({
            paraId: v100.Id,
            result: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return v100.DispatchError
                }
            ),
        })
    ),
    /**
     * The result of trying to submit a new bid to the Slots pallet.
     */
    v104: new support_1.EventType(
        'Crowdloan.HandleBidResult',
        support_1.sts.struct({
            paraId: v104.Id,
            result: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return v104.DispatchError
                }
            ),
        })
    ),
    /**
     * The result of trying to submit a new bid to the Slots pallet.
     */
    v105: new support_1.EventType(
        'Crowdloan.HandleBidResult',
        support_1.sts.struct({
            paraId: v105.Id,
            result: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return v105.DispatchError
                }
            ),
        })
    ),
}
exports.edited = {
    name: 'Crowdloan.Edited',
    /**
     * The configuration to a crowdloan has been edited.
     */
    enjinV100: new support_1.EventType(
        'Crowdloan.Edited',
        support_1.sts.struct({
            paraId: enjinV100.Id,
        })
    ),
}
exports.memoUpdated = {
    name: 'Crowdloan.MemoUpdated',
    /**
     * A memo has been updated.
     */
    enjinV100: new support_1.EventType(
        'Crowdloan.MemoUpdated',
        support_1.sts.struct({
            who: enjinV100.AccountId32,
            paraId: enjinV100.Id,
            memo: support_1.sts.bytes(),
        })
    ),
}
exports.addedToNewRaise = {
    name: 'Crowdloan.AddedToNewRaise',
    /**
     * A parachain has been moved to `NewRaise`
     */
    enjinV100: new support_1.EventType(
        'Crowdloan.AddedToNewRaise',
        support_1.sts.struct({
            paraId: enjinV100.Id,
        })
    ),
}
