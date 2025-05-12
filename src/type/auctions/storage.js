'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.winning = exports.reservedAmounts = exports.auctionInfo = exports.auctionCounter = void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
exports.auctionCounter = {
    /**
     *  Number of auctions started so far.
     */
    enjinV100: new support_1.StorageType('Auctions.AuctionCounter', 'Default', [], support_1.sts.number()),
}
exports.auctionInfo = {
    /**
     *  Information relating to the current auction, if there is one.
     *
     *  The first item in the tuple is the lease period index that the first of the four
     *  contiguous lease periods on auction is for. The second is the block number when the
     *  auction will "begin to end", i.e. the first block of the Ending Period of the auction.
     */
    enjinV100: new support_1.StorageType(
        'Auctions.AuctionInfo',
        'Optional',
        [],
        support_1.sts.tuple(function () {
            return [support_1.sts.number(), support_1.sts.number()]
        })
    ),
}
exports.reservedAmounts = {
    /**
     *  Amounts currently reserved in the accounts of the bidders currently winning
     *  (sub-)ranges.
     */
    enjinV100: new support_1.StorageType(
        'Auctions.ReservedAmounts',
        'Optional',
        [
            support_1.sts.tuple(function () {
                return [enjinV100.AccountId32, enjinV100.Id]
            }),
        ],
        support_1.sts.bigint()
    ),
}
exports.winning = {
    /**
     *  The winning bids for each of the 10 ranges at each sample in the final Ending Period of
     *  the current auction. The map's key is the 0-based index into the Sample Size. The
     *  first sample of the ending period is 0; the last is `Sample Size - 1`.
     */
    enjinV100: new support_1.StorageType(
        'Auctions.Winning',
        'Optional',
        [support_1.sts.number()],
        support_1.sts.array(function () {
            return support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [enjinV100.AccountId32, enjinV100.Id, support_1.sts.bigint()]
                })
            })
        })
    ),
}
