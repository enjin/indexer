import { buildTransferBalanceView } from './builders/balances'
import { buildGenericView } from './builders/generic'
import {
    buildApproveCollectionView,
    buildBatchTransferTokenView,
    buildBurnTokenView,
    buildCreateCollectionView,
    buildInfuseTokenView,
    buildMintTokenView,
    buildSetAttributeView,
    buildTransferTokenView,
} from './builders/multitokens'
import {
    buildCancelListingView,
    buildCreateListingView,
    buildFillListingView,
    buildFinalizeAuctionView,
    buildPlaceBidView,
} from './builders/marketplace'
import {
    buildBondView,
    buildCreatePoolView,
    buildDestroyPoolView,
    buildMutatePoolView,
    buildNominatePoolView,
    buildUnbondView,
    buildWithdrawUnbondedView,
} from './builders/nomination-pools'
import { buildBuyOfferView, buildCancelOfferView, buildCreateOfferView } from './builders/stake-exchange'
import { buildBatchView } from './builders/utility'
import { buildTeleportView } from './builders/xcm'
import type { CallParts, ViewBuilderFn } from './types'

const CALL_BUILDERS: Record<string, ViewBuilderFn> = {
    'Balances::transfer_keep_alive': buildTransferBalanceView,
    'XcmPallet::limited_teleport_assets': buildTeleportView,
    'PolkadotXcm::limited_teleport_assets': buildTeleportView,
    'MultiTokens::transfer': buildTransferTokenView,
    'MultiTokens::batch_transfer': buildBatchTransferTokenView,
    'MultiTokens::burn': buildBurnTokenView,
    'MultiTokens::mint': buildMintTokenView,
    'MultiTokens::infuse': buildInfuseTokenView,
    'MultiTokens::set_attribute': buildSetAttributeView,
    'MultiTokens::create_collection': buildCreateCollectionView,
    'MultiTokens::approve_collection': buildApproveCollectionView,
    'Marketplace::create_listing': buildCreateListingView,
    'Marketplace::fill_listing': buildFillListingView,
    'Marketplace::cancel_listing': buildCancelListingView,
    'Marketplace::finalize_auction': buildFinalizeAuctionView,
    'Marketplace::place_bid': buildPlaceBidView,
    'NominationPools::create': buildCreatePoolView,
    'NominationPools::bond': buildBondView,
    'NominationPools::unbond': buildUnbondView,
    'NominationPools::withdraw_unbonded': buildWithdrawUnbondedView,
    'NominationPools::nominate': buildNominatePoolView,
    'NominationPools::mutate': buildMutatePoolView,
    'NominationPools::destroy': buildDestroyPoolView,
    'StakeExchange::create_offer': buildCreateOfferView,
    'StakeExchange::cancel_offer': buildCancelOfferView,
    'StakeExchange::buy': buildBuyOfferView,
    'Utility::batch': buildBatchView,
    'Utility::batch_all': buildBatchView,
}

export function getBuilderForCall(call: CallParts): ViewBuilderFn {
    const callId = `${call.pallet}::${call.method}`
    return CALL_BUILDERS[callId] ?? buildGenericView
}
