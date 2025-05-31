import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as enjinV100 from '../enjinV100'

export const auctionStarted =  {
    name: 'Auctions.AuctionStarted',
    /**
     * An auction started. Provides its index and the block number where it will begin to
     * close and the first lease period of the quadruplet that is auctioned.
     */
    enjinV100: new EventType(
        'Auctions.AuctionStarted',
        sts.struct({
            auctionIndex: sts.number(),
            leasePeriod: sts.number(),
            ending: sts.number(),
        })
    ),
}

export const auctionClosed =  {
    name: 'Auctions.AuctionClosed',
    /**
     * An auction ended. All funds become unreserved.
     */
    enjinV100: new EventType(
        'Auctions.AuctionClosed',
        sts.struct({
            auctionIndex: sts.number(),
        })
    ),
}

export const reserved =  {
    name: 'Auctions.Reserved',
    /**
     * Funds were reserved for a winning bid. First balance is the extra amount reserved.
     * Second is the total.
     */
    enjinV100: new EventType(
        'Auctions.Reserved',
        sts.struct({
            bidder: enjinV100.AccountId32,
            extraReserved: sts.bigint(),
            totalAmount: sts.bigint(),
        })
    ),
}

export const unreserved =  {
    name: 'Auctions.Unreserved',
    /**
     * Funds were unreserved since bidder is no longer active. `[bidder, amount]`
     */
    enjinV100: new EventType(
        'Auctions.Unreserved',
        sts.struct({
            bidder: enjinV100.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const reserveConfiscated =  {
    name: 'Auctions.ReserveConfiscated',
    /**
     * Someone attempted to lease the same slot twice for a parachain. The amount is held in reserve
     * but no parachain slot has been leased.
     */
    enjinV100: new EventType(
        'Auctions.ReserveConfiscated',
        sts.struct({
            paraId: enjinV100.Id,
            leaser: enjinV100.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const bidAccepted =  {
    name: 'Auctions.BidAccepted',
    /**
     * A new bid has been accepted as the current winner.
     */
    enjinV100: new EventType(
        'Auctions.BidAccepted',
        sts.struct({
            bidder: enjinV100.AccountId32,
            paraId: enjinV100.Id,
            amount: sts.bigint(),
            firstSlot: sts.number(),
            lastSlot: sts.number(),
        })
    ),
}

export const winningOffset =  {
    name: 'Auctions.WinningOffset',
    /**
     * The winning offset was chosen for an auction. This will map into the `Winning` storage map.
     */
    enjinV100: new EventType(
        'Auctions.WinningOffset',
        sts.struct({
            auctionIndex: sts.number(),
            blockNumber: sts.number(),
        })
    ),
}
