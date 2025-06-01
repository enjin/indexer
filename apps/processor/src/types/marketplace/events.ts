import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as enjinV110 from '../enjinV110'
import * as v110 from '../v110'
import * as matrixV500 from '../matrixV500'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as matrixEnjinV1005 from '../matrixEnjinV1005'
import * as matrixV1010 from '../matrixV1010'
import * as matrixV1011 from '../matrixV1011'
import * as matrixEnjinV1012 from '../matrixEnjinV1012'
import * as matrixEnjinV1014 from '../matrixEnjinV1014'
import * as matrixV1020 from '../matrixV1020'
import * as matrixEnjinV1022 from '../matrixEnjinV1022'
import * as v1030 from '../v1030'
import * as v1031 from '../v1031'
import * as enjinV1032 from '../enjinV1032'
import * as enjinV1050 from '../enjinV1050'
import * as v1050 from '../v1050'

export const listingCreated =  {
    name: 'Marketplace.ListingCreated',
    /**
     * A listing was created
     */
    matrixEnjinV603: new EventType(
        'Marketplace.ListingCreated',
        sts.struct({
            /**
             * Id for the listing
             */
            listingId: matrixEnjinV603.H256,
            /**
             * The listing
             */
            listing: matrixEnjinV603.Listing,
        })
    ),
    /**
     * A listing was created
     */
    matrixEnjinV1012: new EventType(
        'Marketplace.ListingCreated',
        sts.struct({
            /**
             * Id for the listing
             */
            listingId: matrixEnjinV1012.H256,
            /**
             * The listing
             */
            listing: matrixEnjinV1012.Listing,
        })
    ),
    /**
     * A listing was created
     */
    matrixEnjinV1022: new EventType(
        'Marketplace.ListingCreated',
        sts.struct({
            /**
             * Id for the listing
             */
            listingId: matrixEnjinV1022.H256,
            /**
             * The listing
             */
            listing: matrixEnjinV1022.Listing,
        })
    ),
    /**
     * A listing was created
     */
    matrixV500: new EventType(
        'Marketplace.ListingCreated',
        sts.struct({
            /**
             * Id for the listing
             */
            listingId: matrixV500.H256,
            /**
             * The listing
             */
            listing: matrixV500.Listing,
        })
    ),
    /**
     * A listing was created
     */
    matrixV1010: new EventType(
        'Marketplace.ListingCreated',
        sts.struct({
            /**
             * Id for the listing
             */
            listingId: matrixV1010.H256,
            /**
             * The listing
             */
            listing: matrixV1010.Listing,
        })
    ),
    /**
     * A listing was created
     */
    matrixV1011: new EventType(
        'Marketplace.ListingCreated',
        sts.struct({
            /**
             * Id for the listing
             */
            listingId: matrixV1011.H256,
            /**
             * The listing
             */
            listing: matrixV1011.Listing,
        })
    ),
    /**
     * A listing was created
     */
    matrixV1020: new EventType(
        'Marketplace.ListingCreated',
        sts.struct({
            /**
             * Id for the listing
             */
            listingId: matrixV1020.H256,
            /**
             * The listing
             */
            listing: matrixV1020.Listing,
        })
    ),
    /**
     * A listing was created
     */
    enjinV110: new EventType(
        'Marketplace.ListingCreated',
        sts.struct({
            /**
             * Id for the listing
             */
            listingId: enjinV110.H256,
            /**
             * The listing
             */
            listing: enjinV110.Listing,
        })
    ),
    /**
     * A listing was created
     */
    enjinV1032: new EventType(
        'Marketplace.ListingCreated',
        sts.struct({
            /**
             * Id for the listing
             */
            listingId: enjinV1032.H256,
            /**
             * The listing
             */
            listing: enjinV1032.Listing,
        })
    ),
    /**
     * A listing was created
     */
    enjinV1050: new EventType(
        'Marketplace.ListingCreated',
        sts.struct({
            /**
             * Id for the listing
             */
            listingId: enjinV1050.H256,
            /**
             * The listing
             */
            listing: enjinV1050.Listing,
        })
    ),
    /**
     * A listing was created
     */
    v110: new EventType(
        'Marketplace.ListingCreated',
        sts.struct({
            /**
             * Id for the listing
             */
            listingId: v110.H256,
            /**
             * The listing
             */
            listing: v110.Listing,
        })
    ),
    /**
     * A listing was created
     */
    v1030: new EventType(
        'Marketplace.ListingCreated',
        sts.struct({
            /**
             * Id for the listing
             */
            listingId: v1030.H256,
            /**
             * The listing
             */
            listing: v1030.Listing,
        })
    ),
    /**
     * A listing was created
     */
    v1031: new EventType(
        'Marketplace.ListingCreated',
        sts.struct({
            /**
             * Id for the listing
             */
            listingId: v1031.H256,
            /**
             * The listing
             */
            listing: v1031.Listing,
        })
    ),
    /**
     * A listing was created
     */
    v1050: new EventType(
        'Marketplace.ListingCreated',
        sts.struct({
            /**
             * Id for the listing
             */
            listingId: v1050.H256,
            /**
             * The listing
             */
            listing: v1050.Listing,
        })
    ),
}

export const listingCancelled =  {
    name: 'Marketplace.ListingCancelled',
    /**
     * A listing was cancelled
     */
    matrixEnjinV603: new EventType(
        'Marketplace.ListingCancelled',
        sts.struct({
            /**
             * Id for the listing
             */
            listingId: matrixEnjinV603.H256,
        })
    ),
}

export const listingFilled =  {
    name: 'Marketplace.ListingFilled',
    /**
     * A listing was filled or partially filled
     */
    matrixEnjinV603: new EventType(
        'Marketplace.ListingFilled',
        sts.struct({
            /**
             * ID of the listing
             */
            listingId: matrixEnjinV603.H256,
            /**
             * account that filled the listing
             */
            buyer: matrixEnjinV603.AccountId32,
            /**
             * The amount that was filled
             */
            amountFilled: sts.bigint(),
            /**
             * Amount remaining to be filled
             */
            amountRemaining: sts.bigint(),
            /**
             * Amount paid as protocol fee
             */
            protocolFee: sts.bigint(),
            /**
             * Amount that went to royalties
             */
            royalty: sts.bigint(),
        })
    ),
    /**
     * A listing was filled or partially filled
     */
    matrixEnjinV1012: new EventType(
        'Marketplace.ListingFilled',
        sts.struct({
            /**
             * ID of the listing
             */
            listingId: matrixEnjinV1012.H256,
            /**
             * account that filled the listing
             */
            buyer: matrixEnjinV1012.AccountId32,
            /**
             * The price it was filled with
             */
            price: sts.bigint(),
            /**
             * The amount that was filled
             */
            amountFilled: sts.bigint(),
            /**
             * Amount remaining to be filled
             */
            amountRemaining: sts.bigint(),
            /**
             * Amount paid as protocol fee
             */
            protocolFee: sts.bigint(),
            /**
             * Amount that went to royalties
             */
            royalty: sts.bigint(),
        })
    ),
    /**
     * A listing was filled or partially filled
     */
    matrixV500: new EventType(
        'Marketplace.ListingFilled',
        sts.struct({
            /**
             * ID of the listing
             */
            listingId: matrixV500.H256,
            /**
             * account that filled the listing
             */
            buyer: matrixV500.AccountId32,
            /**
             * The amount that was filled
             */
            amountFilled: sts.bigint(),
            /**
             * Amount remaining to be filled
             */
            amountRemaining: sts.bigint(),
            /**
             * Amount paid as protocol fee
             */
            protocolFee: sts.bigint(),
            /**
             * Amount that went to royalties
             */
            royalty: sts.bigint(),
        })
    ),
    /**
     * A listing was filled or partially filled
     */
    matrixV1011: new EventType(
        'Marketplace.ListingFilled',
        sts.struct({
            /**
             * ID of the listing
             */
            listingId: matrixV1011.H256,
            /**
             * account that filled the listing
             */
            buyer: matrixV1011.AccountId32,
            /**
             * The price it was filled with
             */
            price: sts.bigint(),
            /**
             * The amount that was filled
             */
            amountFilled: sts.bigint(),
            /**
             * Amount remaining to be filled
             */
            amountRemaining: sts.bigint(),
            /**
             * Amount paid as protocol fee
             */
            protocolFee: sts.bigint(),
            /**
             * Amount that went to royalties
             */
            royalty: sts.bigint(),
        })
    ),
    /**
     * A listing was filled or partially filled
     */
    enjinV110: new EventType(
        'Marketplace.ListingFilled',
        sts.struct({
            /**
             * ID of the listing
             */
            listingId: enjinV110.H256,
            /**
             * account that filled the listing
             */
            buyer: enjinV110.AccountId32,
            /**
             * The amount that was filled
             */
            amountFilled: sts.bigint(),
            /**
             * Amount remaining to be filled
             */
            amountRemaining: sts.bigint(),
            /**
             * Amount paid as protocol fee
             */
            protocolFee: sts.bigint(),
            /**
             * Amount that went to royalties
             */
            royalty: sts.bigint(),
        })
    ),
    /**
     * A listing was filled or partially filled
     */
    enjinV1032: new EventType(
        'Marketplace.ListingFilled',
        sts.struct({
            /**
             * ID of the listing
             */
            listingId: enjinV1032.H256,
            /**
             * account that filled the listing
             */
            buyer: enjinV1032.AccountId32,
            /**
             * The price it was filled with
             */
            price: sts.bigint(),
            /**
             * The amount that was filled
             */
            amountFilled: sts.bigint(),
            /**
             * Amount remaining to be filled
             */
            amountRemaining: sts.bigint(),
            /**
             * Amount paid as protocol fee
             */
            protocolFee: sts.bigint(),
            /**
             * Amount that went to royalties
             */
            royalty: sts.bigint(),
        })
    ),
    /**
     * A listing was filled or partially filled
     */
    v110: new EventType(
        'Marketplace.ListingFilled',
        sts.struct({
            /**
             * ID of the listing
             */
            listingId: v110.H256,
            /**
             * account that filled the listing
             */
            buyer: v110.AccountId32,
            /**
             * The amount that was filled
             */
            amountFilled: sts.bigint(),
            /**
             * Amount remaining to be filled
             */
            amountRemaining: sts.bigint(),
            /**
             * Amount paid as protocol fee
             */
            protocolFee: sts.bigint(),
            /**
             * Amount that went to royalties
             */
            royalty: sts.bigint(),
        })
    ),
    /**
     * A listing was filled or partially filled
     */
    v1031: new EventType(
        'Marketplace.ListingFilled',
        sts.struct({
            /**
             * ID of the listing
             */
            listingId: v1031.H256,
            /**
             * account that filled the listing
             */
            buyer: v1031.AccountId32,
            /**
             * The price it was filled with
             */
            price: sts.bigint(),
            /**
             * The amount that was filled
             */
            amountFilled: sts.bigint(),
            /**
             * Amount remaining to be filled
             */
            amountRemaining: sts.bigint(),
            /**
             * Amount paid as protocol fee
             */
            protocolFee: sts.bigint(),
            /**
             * Amount that went to royalties
             */
            royalty: sts.bigint(),
        })
    ),
}

export const bidPlaced =  {
    name: 'Marketplace.BidPlaced',
    /**
     * A bid was placed
     */
    matrixEnjinV603: new EventType(
        'Marketplace.BidPlaced',
        sts.struct({
            /**
             * ID of the listing
             */
            listingId: matrixEnjinV603.H256,
            /**
             * The bid that was placed
             */
            bid: matrixEnjinV603.Bid,
        })
    ),
}

export const auctionFinalized =  {
    name: 'Marketplace.AuctionFinalized',
    /**
     * An auction was finalized
     */
    matrixEnjinV603: new EventType(
        'Marketplace.AuctionFinalized',
        sts.struct({
            /**
             * The listing id
             */
            listingId: matrixEnjinV603.H256,
            /**
             * The bid that won
             */
            winningBid: sts.option(() => matrixEnjinV603.Bid),
            /**
             * Amount paid as protocol fee
             */
            protocolFee: sts.bigint(),
            /**
             * Amount that went to royalties
             */
            royalty: sts.bigint(),
        })
    ),
}

export const protocolFeeSet =  {
    name: 'Marketplace.ProtocolFeeSet',
    /**
     * Protocol fee was set
     */
    matrixEnjinV603: new EventType(
        'Marketplace.ProtocolFeeSet',
        sts.struct({
            /**
             * The new protocol fee
             */
            protocolFee: matrixEnjinV603.Perbill,
        })
    ),
}

export const listingConverted =  {
    name: 'Marketplace.ListingConverted',
    /**
     * A listing was converted to the correct format
     */
    matrixEnjinV1005: new EventType(
        'Marketplace.ListingConverted',
        sts.struct({
            /**
             * Id for the listing
             */
            listingId: matrixEnjinV1005.H256,
        })
    ),
}

export const expiredListingRemoved =  {
    name: 'Marketplace.ExpiredListingRemoved',
    /**
     * An expired listing was removed
     */
    matrixEnjinV1012: new EventType(
        'Marketplace.ExpiredListingRemoved',
        sts.struct({
            /**
             * Id for the listing
             */
            listingId: matrixEnjinV1012.H256,
        })
    ),
}

export const counterOfferPlaced =  {
    name: 'Marketplace.CounterOfferPlaced',
    /**
     * A counter offer was placed on a listing
     */
    matrixEnjinV1012: new EventType(
        'Marketplace.CounterOfferPlaced',
        sts.struct({
            /**
             * Id of the listing
             */
            listingId: matrixEnjinV1012.H256,
            /**
             * The counter offer
             */
            counterOffer: matrixEnjinV1012.CounterOffer,
        })
    ),
    /**
     * A counter offer was placed on a listing
     */
    matrixV1010: new EventType(
        'Marketplace.CounterOfferPlaced',
        sts.struct({
            /**
             * Id of the listing
             */
            listingId: matrixV1010.H256,
            /**
             * The counter offer
             */
            counterOffer: matrixV1010.CounterOffer,
        })
    ),
    /**
     * A counter offer was placed on a listing
     */
    matrixV1011: new EventType(
        'Marketplace.CounterOfferPlaced',
        sts.struct({
            /**
             * Id of the listing
             */
            listingId: matrixV1011.H256,
            /**
             * The counter offer
             */
            counterOffer: matrixV1011.CounterOffer,
        })
    ),
    /**
     * A counter offer was placed on a listing
     */
    v1030: new EventType(
        'Marketplace.CounterOfferPlaced',
        sts.struct({
            /**
             * Id of the listing
             */
            listingId: v1030.H256,
            /**
             * The counter offer
             */
            counterOffer: v1030.CounterOffer,
        })
    ),
    /**
     * A counter offer was placed on a listing
     */
    v1031: new EventType(
        'Marketplace.CounterOfferPlaced',
        sts.struct({
            /**
             * Id of the listing
             */
            listingId: v1031.H256,
            /**
             * The counter offer
             */
            counterOffer: v1031.CounterOffer,
        })
    ),
}

export const counterOfferAnswered =  {
    name: 'Marketplace.CounterOfferAnswered',
    /**
     * A response was issued for a counter offer
     */
    matrixEnjinV1012: new EventType(
        'Marketplace.CounterOfferAnswered',
        sts.struct({
            /**
             * Id of the listing
             */
            listingId: matrixEnjinV1012.H256,
            /**
             * The account that created the counter offer
             */
            creator: matrixEnjinV1012.AccountId32,
            /**
             * The response to the counter offer
             */
            response: matrixEnjinV1012.CounterOfferResponse,
        })
    ),
    /**
     * A response was issued for a counter offer
     */
    matrixV1010: new EventType(
        'Marketplace.CounterOfferAnswered',
        sts.struct({
            /**
             * Id of the listing
             */
            listingId: matrixV1010.H256,
            /**
             * If the offer was accepted
             */
            accepted: sts.boolean(),
        })
    ),
    /**
     * A response was issued for a counter offer
     */
    matrixV1011: new EventType(
        'Marketplace.CounterOfferAnswered',
        sts.struct({
            /**
             * Id of the listing
             */
            listingId: matrixV1011.H256,
            /**
             * The account that created the counter offer
             */
            creator: matrixV1011.AccountId32,
            /**
             * The response to the counter offer
             */
            response: matrixV1011.CounterOfferResponse,
        })
    ),
    /**
     * A response was issued for a counter offer
     */
    v1030: new EventType(
        'Marketplace.CounterOfferAnswered',
        sts.struct({
            /**
             * Id of the listing
             */
            listingId: v1030.H256,
            /**
             * If the offer was accepted
             */
            accepted: sts.boolean(),
        })
    ),
    /**
     * A response was issued for a counter offer
     */
    v1031: new EventType(
        'Marketplace.CounterOfferAnswered',
        sts.struct({
            /**
             * Id of the listing
             */
            listingId: v1031.H256,
            /**
             * The account that created the counter offer
             */
            creator: v1031.AccountId32,
            /**
             * The response to the counter offer
             */
            response: v1031.CounterOfferResponse,
        })
    ),
}

export const counterOfferRemoved =  {
    name: 'Marketplace.CounterOfferRemoved',
    /**
     * A counter offer was removed
     */
    matrixEnjinV1012: new EventType(
        'Marketplace.CounterOfferRemoved',
        sts.struct({
            /**
             * Id of the listing
             */
            listingId: matrixEnjinV1012.H256,
            /**
             * The account that created the counter offer
             */
            creator: matrixEnjinV1012.AccountId32,
        })
    ),
}

export const migrationStep =  {
    name: 'Marketplace.MigrationStep',
    /**
     * The migration step has completed
     */
    matrixEnjinV1012: new EventType(
        'Marketplace.MigrationStep',
        sts.struct({
            /**
             * The number of items processed within this step
             */
            itemsProcessed: sts.number(),
            /**
             * The migration phase
             */
            phase: sts.number(),
        })
    ),
}

export const listingRemovedUnderMinimum =  {
    name: 'Marketplace.ListingRemovedUnderMinimum',
    /**
     * Tried to settle a listing with take value under the minimum requirement
     */
    matrixEnjinV1014: new EventType(
        'Marketplace.ListingRemovedUnderMinimum',
        sts.struct({
            /**
             * Id for the listing
             */
            listingId: matrixEnjinV1014.H256,
        })
    ),
}

export const listingUpgraded =  {
    name: 'Marketplace.ListingUpgraded',
    /**
     * A listing has been upgraded
     */
    matrixEnjinV1022: new EventType(
        'Marketplace.ListingUpgraded',
        sts.struct({
            listingId: matrixEnjinV1022.H256,
        })
    ),
}

export const whitelistedAccountsAdded =  {
    name: 'Marketplace.WhitelistedAccountsAdded',
    /**
     * Whitelisted accounts were added to a listing
     */
    matrixEnjinV1022: new EventType(
        'Marketplace.WhitelistedAccountsAdded',
        sts.struct({
            /**
             * The listing id
             */
            listingId: matrixEnjinV1022.H256,
            /**
             * The accounts that were added
             */
            accounts: sts.array(() => matrixEnjinV1022.WhitelistAddAccount),
        })
    ),
}

export const whitelistedAccountsRemoved =  {
    name: 'Marketplace.WhitelistedAccountsRemoved',
    /**
     * Whitelisted accounts were removed from a listing
     */
    matrixEnjinV1022: new EventType(
        'Marketplace.WhitelistedAccountsRemoved',
        sts.struct({
            /**
             * The listing id
             */
            listingId: matrixEnjinV1022.H256,
            /**
             * The account ids that were removed
             */
            accountIds: sts.array(() => matrixEnjinV1022.AccountId32),
        })
    ),
}
