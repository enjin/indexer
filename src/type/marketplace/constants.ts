import { sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx } from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'

export const minimumBidIncreasePercentage = {
    /**
     *  The percentage the minimum bid in an auction must increase by
     */
    matrixEnjinV603: new ConstantType('Marketplace.MinimumBidIncreasePercentage', matrixEnjinV603.Perbill),
}

export const reserveIdentifier = {
    /**
     *  ID used by the pallet for making reservations
     */
    matrixEnjinV603: new ConstantType('Marketplace.ReserveIdentifier', sts.bytes()),
}

export const listingDeposit = {
    /**
     *  The deposit for creating a listing
     */
    matrixEnjinV603: new ConstantType('Marketplace.ListingDeposit', sts.bigint()),
}

export const listingActiveDelay = {
    /**
     *  The delay before a listing is considered active
     */
    matrixEnjinV603: new ConstantType('Marketplace.ListingActiveDelay', sts.number()),
}

export const maxRoundingError = {
    /**
     *  The max amount that can be lost due to rounding before failing
     */
    matrixEnjinV603: new ConstantType('Marketplace.MaxRoundingError', sts.bigint()),
}

export const maxSaltLength = {
    /**
     *  Max length of salt used when creating listings and bids
     */
    matrixEnjinV603: new ConstantType('Marketplace.MaxSaltLength', sts.number()),
}

export const maxListingConversions = {
    /**
     *  Max number of listings to convert
     */
    matrixEnjinV1005: new ConstantType('Marketplace.MaxListingConversions', sts.number()),
}

export const counterOfferDeposit = {
    /**
     *  The deposit for creating a counter offer
     */
    matrixEnjinV1012: new ConstantType('Marketplace.CounterOfferDeposit', sts.bigint()),
}

export const maxPendingListingIds = {
    /**
     *  Max number of listing ids in [`PendingListingIds`]
     */
    matrixEnjinV1012: new ConstantType('Marketplace.MaxPendingListingIds', sts.number()),
}

export const whitelistedAccountDeposit = {
    /**
     *  The deposit for each whitelisted account in a listing
     */
    matrixEnjinV1022: new ConstantType('Marketplace.WhitelistedAccountDeposit', sts.bigint()),
}

export const maxPendingActions = {
    /**
     *  Max number of actions in [`PendingActions`]
     */
    matrixEnjinV1022: new ConstantType('Marketplace.MaxPendingActions', sts.number()),
}

export const maxWhitelistedAccountsPerExtrinsic = {
    /**
     *  Max number of accounts parameters accepted by whitelist related extrinsics
     */
    matrixEnjinV1022: new ConstantType('Marketplace.MaxWhitelistedAccountsPerExtrinsic', sts.number()),
}

export const maxUpgradeBatchSize = {
    /**
     *  Max number of listings that can be migrated in a single call of
     *  [`upgrade_listings`](Pallet::upgrade_listings)
     */
    matrixEnjinV1022: new ConstantType('Marketplace.MaxUpgradeBatchSize', sts.number()),
}

export const auctionBidExtension = {
    /**
     *  Number of blocks that an auction is extended when a bid is placed near it's end block
     */
    matrixV1030: new ConstantType('Marketplace.AuctionBidExtension', sts.number()),
}

export const removeExpiredListingsInterval = {
    /**
     *  Number of blocks the offchain worker waits in between removing expired listings
     */
    matrixV1030: new ConstantType('Marketplace.RemoveExpiredListingsInterval', sts.number()),
}
