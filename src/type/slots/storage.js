'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.leases = void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
exports.leases = {
    /**
     *  Amounts held on deposit for each (possibly future) leased parachain.
     *
     *  The actual amount locked on its behalf by any account at any time is the maximum of the second values
     *  of the items in this list whose first value is the account.
     *
     *  The first item in the list is the amount locked for the current Lease Period. Following
     *  items are for the subsequent lease periods.
     *
     *  The default value (an empty list) implies that the parachain no longer exists (or never
     *  existed) as far as this pallet is concerned.
     *
     *  If a parachain doesn't exist *yet* but is scheduled to exist in the future, then it
     *  will be left-padded with one or more `None`s to denote the fact that nothing is held on
     *  deposit for the non-existent chain currently, but is held at some point in the future.
     *
     *  It is illegal for a `None` value to trail in the list.
     */
    enjinV100: new support_1.StorageType(
        'Slots.Leases',
        'Default',
        [enjinV100.Id],
        support_1.sts.array(function () {
            return support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [enjinV100.AccountId32, support_1.sts.bigint()]
                })
            })
        })
    ),
}
