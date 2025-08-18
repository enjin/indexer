import {MultiTokensApproved} from "./_multiTokensApproved"
import {MultiTokensAttributeRemoved} from "./_multiTokensAttributeRemoved"
import {MultiTokensAttributeSet} from "./_multiTokensAttributeSet"
import {MultiTokensBurned} from "./_multiTokensBurned"
import {MultiTokensCollectionAccountCreated} from "./_multiTokensCollectionAccountCreated"
import {MultiTokensCollectionAccountDestroyed} from "./_multiTokensCollectionAccountDestroyed"
import {MultiTokensCollectionCreated} from "./_multiTokensCollectionCreated"
import {MultiTokensCollectionDestroyed} from "./_multiTokensCollectionDestroyed"
import {MultiTokensCollectionMutated} from "./_multiTokensCollectionMutated"
import {MultiTokensFrozen} from "./_multiTokensFrozen"
import {MultiTokensMinted} from "./_multiTokensMinted"
import {MultiTokensThawed} from "./_multiTokensThawed"
import {MultiTokensTokenAccountCreated} from "./_multiTokensTokenAccountCreated"
import {MultiTokensTokenAccountDestroyed} from "./_multiTokensTokenAccountDestroyed"
import {MultiTokensTokenCreated} from "./_multiTokensTokenCreated"
import {MultiTokensTokenGroupCreated} from "./_multiTokensTokenGroupCreated"
import {MultiTokensTokenDestroyed} from "./_multiTokensTokenDestroyed"
import {MultiTokensTokenMutated} from "./_multiTokensTokenMutated"
import {MultiTokensTransferred} from "./_multiTokensTransferred"
import {MultiTokensUnapproved} from "./_multiTokensUnapproved"
import {MultiTokensTokenGroupAdded} from "./_multiTokensTokenGroupAdded"
import {MultiTokensTokenGroupRemoved} from "./_multiTokensTokenGroupRemoved"
import {MultiTokensTokenGroupDestroyed} from "./_multiTokensTokenGroupDestroyed"
import {MultiTokensTokenGroupAttributeSet} from "./_multiTokensTokenGroupAttributeSet"
import {MultiTokensTokenGroupAttributeRemoved} from "./_multiTokensTokenGroupAttributeRemoved"
import {MultiTokensTokenGroupsUpdated} from "./_multiTokensTokenGroupsUpdated"
import {MarketplaceAuctionFinalized} from "./_marketplaceAuctionFinalized"
import {MarketplaceBidPlaced} from "./_marketplaceBidPlaced"
import {MarketplaceListingCancelled} from "./_marketplaceListingCancelled"
import {MarketplaceListingCreated} from "./_marketplaceListingCreated"
import {MarketplaceListingFilled} from "./_marketplaceListingFilled"
import {MarketplaceCounterOfferPlaced} from "./_marketplaceCounterOfferPlaced"
import {MarketplaceCounterOfferAnswered} from "./_marketplaceCounterOfferAnswered"
import {MarketplaceCounterOfferRemoved} from "./_marketplaceCounterOfferRemoved"
import {MarketplaceOfferCreated} from "./_marketplaceOfferCreated"
import {MarketplaceOfferSettled} from "./_marketplaceOfferSettled"
import {MarketplaceOfferCancelled} from "./_marketplaceOfferCancelled"
import {MarketplaceListingRemovedUnderMinimum} from "./_marketplaceListingRemovedUnderMinimum"
import {BalancesTransfer} from "./_balancesTransfer"
import {TeleportBalanceWithdrawn} from "./_teleportBalanceWithdrawn"
import {ClaimsClaimRequested} from "./_claimsClaimRequested"
import {ClaimsClaimed} from "./_claimsClaimed"
import {FuelTankCreated} from "./_fuelTankCreated"
import {FuelTankDestroyed} from "./_fuelTankDestroyed"
import {MultiTokensClaimedCollections} from "./_multiTokensClaimedCollections"
import {MultiTokensClaimTokensInitiated} from "./_multiTokensClaimTokensInitiated"
import {MultiTokensClaimTokensCompleted} from "./_multiTokensClaimTokensCompleted"
import {MultiTokensCollectionTransferred} from "./_multiTokensCollectionTransferred"
import {MultiTokensCollectionTransferCancelled} from "./_multiTokensCollectionTransferCancelled"
import {MultiTokensInfused} from "./_multiTokensInfused"
import {StakingEraPaid} from "./_stakingEraPaid"
import {NominationPoolsBonded} from "./_nominationPoolsBonded"
import {NominationPoolsUnbonded} from "./_nominationPoolsUnbonded"
import {StakingChilled} from "./_stakingChilled"
import {StakingBonded} from "./_stakingBonded"
import {NominationPoolsEarlyBirdBonusPaymentUnlocked} from "./_nominationPoolsEarlyBirdBonusPaymentUnlocked"
import {NominationPoolsEarlyBirdBonusCalculated} from "./_nominationPoolsEarlyBirdBonusCalculated"
import {NominationPoolsEarlyBirdSharesCaptured} from "./_nominationPoolsEarlyBirdSharesCaptured"
import {NominationPoolsEarlyBirdBonusPaid} from "./_nominationPoolsEarlyBirdBonusPaid"
import {ImOnlineSomeOffline} from "./_imOnlineSomeOffline"
import {ValidatorPrefsSet} from "./_validatorPrefsSet"
import {NominationPoolsWithdrawn} from "./_nominationPoolsWithdrawn"
import {NominationPoolsEraRewardsProcessed} from "./_nominationPoolsEraRewardsProcessed"
import {NominationPoolsRewardPaid} from "./_nominationPoolsRewardPaid"
import {NominationPoolsPoolSlashed} from "./_nominationPoolsPoolSlashed"
import {NominationPoolsNominated} from "./_nominationPoolsNominated"
import {NominationPoolsCreated} from "./_nominationPoolsCreated"
import {NominationPoolsDestroyed} from "./_nominationPoolsDestroyed"
import {NominationPoolsPoolMutated} from "./_nominationPoolsPoolMutated"
import {StakeExchangeOfferCreated} from "./_stakeExchangeOfferCreated"
import {StakeExchangeOfferCancelled} from "./_stakeExchangeOfferCancelled"
import {StakeExchangeLiquidityWithdrawn} from "./_stakeExchangeLiquidityWithdrawn"
import {StakeExchangeLiquidityConfigUpdated} from "./_stakeExchangeLiquidityConfigUpdated"
import {StakeExchangeLiquidityAdded} from "./_stakeExchangeLiquidityAdded"
import {StakeExchangeBuyOrderCompleted} from "./_stakeExchangeBuyOrderCompleted"
import {StakeExchangeOfferCompleted} from "./_stakeExchangeOfferCompleted"

export type EventData = MultiTokensApproved | MultiTokensAttributeRemoved | MultiTokensAttributeSet | MultiTokensBurned | MultiTokensCollectionAccountCreated | MultiTokensCollectionAccountDestroyed | MultiTokensCollectionCreated | MultiTokensCollectionDestroyed | MultiTokensCollectionMutated | MultiTokensFrozen | MultiTokensMinted | MultiTokensThawed | MultiTokensTokenAccountCreated | MultiTokensTokenAccountDestroyed | MultiTokensTokenCreated | MultiTokensTokenGroupCreated | MultiTokensTokenDestroyed | MultiTokensTokenMutated | MultiTokensTransferred | MultiTokensUnapproved | MultiTokensTokenGroupAdded | MultiTokensTokenGroupRemoved | MultiTokensTokenGroupDestroyed | MultiTokensTokenGroupAttributeSet | MultiTokensTokenGroupAttributeRemoved | MultiTokensTokenGroupsUpdated | MarketplaceAuctionFinalized | MarketplaceBidPlaced | MarketplaceListingCancelled | MarketplaceListingCreated | MarketplaceListingFilled | MarketplaceCounterOfferPlaced | MarketplaceCounterOfferAnswered | MarketplaceCounterOfferRemoved | MarketplaceOfferCreated | MarketplaceOfferSettled | MarketplaceOfferCancelled | MarketplaceListingRemovedUnderMinimum | BalancesTransfer | TeleportBalanceWithdrawn | ClaimsClaimRequested | ClaimsClaimed | FuelTankCreated | FuelTankDestroyed | MultiTokensClaimedCollections | MultiTokensClaimTokensInitiated | MultiTokensClaimTokensCompleted | MultiTokensCollectionTransferred | MultiTokensCollectionTransferCancelled | MultiTokensInfused | StakingEraPaid | NominationPoolsBonded | NominationPoolsUnbonded | StakingChilled | StakingBonded | NominationPoolsEarlyBirdBonusPaymentUnlocked | NominationPoolsEarlyBirdBonusCalculated | NominationPoolsEarlyBirdSharesCaptured | NominationPoolsEarlyBirdBonusPaid | ImOnlineSomeOffline | ValidatorPrefsSet | NominationPoolsWithdrawn | NominationPoolsEraRewardsProcessed | NominationPoolsRewardPaid | NominationPoolsPoolSlashed | NominationPoolsNominated | NominationPoolsCreated | NominationPoolsDestroyed | NominationPoolsPoolMutated | StakeExchangeOfferCreated | StakeExchangeOfferCancelled | StakeExchangeLiquidityWithdrawn | StakeExchangeLiquidityConfigUpdated | StakeExchangeLiquidityAdded | StakeExchangeBuyOrderCompleted | StakeExchangeOfferCompleted

export function fromJsonEventData(json: any): EventData {
    switch(json?.isTypeOf) {
        case 'MultiTokensApproved': return new MultiTokensApproved(undefined, json)
        case 'MultiTokensAttributeRemoved': return new MultiTokensAttributeRemoved(undefined, json)
        case 'MultiTokensAttributeSet': return new MultiTokensAttributeSet(undefined, json)
        case 'MultiTokensBurned': return new MultiTokensBurned(undefined, json)
        case 'MultiTokensCollectionAccountCreated': return new MultiTokensCollectionAccountCreated(undefined, json)
        case 'MultiTokensCollectionAccountDestroyed': return new MultiTokensCollectionAccountDestroyed(undefined, json)
        case 'MultiTokensCollectionCreated': return new MultiTokensCollectionCreated(undefined, json)
        case 'MultiTokensCollectionDestroyed': return new MultiTokensCollectionDestroyed(undefined, json)
        case 'MultiTokensCollectionMutated': return new MultiTokensCollectionMutated(undefined, json)
        case 'MultiTokensFrozen': return new MultiTokensFrozen(undefined, json)
        case 'MultiTokensMinted': return new MultiTokensMinted(undefined, json)
        case 'MultiTokensThawed': return new MultiTokensThawed(undefined, json)
        case 'MultiTokensTokenAccountCreated': return new MultiTokensTokenAccountCreated(undefined, json)
        case 'MultiTokensTokenAccountDestroyed': return new MultiTokensTokenAccountDestroyed(undefined, json)
        case 'MultiTokensTokenCreated': return new MultiTokensTokenCreated(undefined, json)
        case 'MultiTokensTokenGroupCreated': return new MultiTokensTokenGroupCreated(undefined, json)
        case 'MultiTokensTokenDestroyed': return new MultiTokensTokenDestroyed(undefined, json)
        case 'MultiTokensTokenMutated': return new MultiTokensTokenMutated(undefined, json)
        case 'MultiTokensTransferred': return new MultiTokensTransferred(undefined, json)
        case 'MultiTokensUnapproved': return new MultiTokensUnapproved(undefined, json)
        case 'MultiTokensTokenGroupAdded': return new MultiTokensTokenGroupAdded(undefined, json)
        case 'MultiTokensTokenGroupRemoved': return new MultiTokensTokenGroupRemoved(undefined, json)
        case 'MultiTokensTokenGroupDestroyed': return new MultiTokensTokenGroupDestroyed(undefined, json)
        case 'MultiTokensTokenGroupAttributeSet': return new MultiTokensTokenGroupAttributeSet(undefined, json)
        case 'MultiTokensTokenGroupAttributeRemoved': return new MultiTokensTokenGroupAttributeRemoved(undefined, json)
        case 'MultiTokensTokenGroupsUpdated': return new MultiTokensTokenGroupsUpdated(undefined, json)
        case 'MarketplaceAuctionFinalized': return new MarketplaceAuctionFinalized(undefined, json)
        case 'MarketplaceBidPlaced': return new MarketplaceBidPlaced(undefined, json)
        case 'MarketplaceListingCancelled': return new MarketplaceListingCancelled(undefined, json)
        case 'MarketplaceListingCreated': return new MarketplaceListingCreated(undefined, json)
        case 'MarketplaceListingFilled': return new MarketplaceListingFilled(undefined, json)
        case 'MarketplaceCounterOfferPlaced': return new MarketplaceCounterOfferPlaced(undefined, json)
        case 'MarketplaceCounterOfferAnswered': return new MarketplaceCounterOfferAnswered(undefined, json)
        case 'MarketplaceCounterOfferRemoved': return new MarketplaceCounterOfferRemoved(undefined, json)
        case 'MarketplaceOfferCreated': return new MarketplaceOfferCreated(undefined, json)
        case 'MarketplaceOfferSettled': return new MarketplaceOfferSettled(undefined, json)
        case 'MarketplaceOfferCancelled': return new MarketplaceOfferCancelled(undefined, json)
        case 'MarketplaceListingRemovedUnderMinimum': return new MarketplaceListingRemovedUnderMinimum(undefined, json)
        case 'BalancesTransfer': return new BalancesTransfer(undefined, json)
        case 'TeleportBalanceWithdrawn': return new TeleportBalanceWithdrawn(undefined, json)
        case 'ClaimsClaimRequested': return new ClaimsClaimRequested(undefined, json)
        case 'ClaimsClaimed': return new ClaimsClaimed(undefined, json)
        case 'FuelTankCreated': return new FuelTankCreated(undefined, json)
        case 'FuelTankDestroyed': return new FuelTankDestroyed(undefined, json)
        case 'MultiTokensClaimedCollections': return new MultiTokensClaimedCollections(undefined, json)
        case 'MultiTokensClaimTokensInitiated': return new MultiTokensClaimTokensInitiated(undefined, json)
        case 'MultiTokensClaimTokensCompleted': return new MultiTokensClaimTokensCompleted(undefined, json)
        case 'MultiTokensCollectionTransferred': return new MultiTokensCollectionTransferred(undefined, json)
        case 'MultiTokensCollectionTransferCancelled': return new MultiTokensCollectionTransferCancelled(undefined, json)
        case 'MultiTokensInfused': return new MultiTokensInfused(undefined, json)
        case 'StakingEraPaid': return new StakingEraPaid(undefined, json)
        case 'NominationPoolsBonded': return new NominationPoolsBonded(undefined, json)
        case 'NominationPoolsUnbonded': return new NominationPoolsUnbonded(undefined, json)
        case 'StakingChilled': return new StakingChilled(undefined, json)
        case 'StakingBonded': return new StakingBonded(undefined, json)
        case 'NominationPoolsEarlyBirdBonusPaymentUnlocked': return new NominationPoolsEarlyBirdBonusPaymentUnlocked(undefined, json)
        case 'NominationPoolsEarlyBirdBonusCalculated': return new NominationPoolsEarlyBirdBonusCalculated(undefined, json)
        case 'NominationPoolsEarlyBirdSharesCaptured': return new NominationPoolsEarlyBirdSharesCaptured(undefined, json)
        case 'NominationPoolsEarlyBirdBonusPaid': return new NominationPoolsEarlyBirdBonusPaid(undefined, json)
        case 'ImOnlineSomeOffline': return new ImOnlineSomeOffline(undefined, json)
        case 'ValidatorPrefsSet': return new ValidatorPrefsSet(undefined, json)
        case 'NominationPoolsWithdrawn': return new NominationPoolsWithdrawn(undefined, json)
        case 'NominationPoolsEraRewardsProcessed': return new NominationPoolsEraRewardsProcessed(undefined, json)
        case 'NominationPoolsRewardPaid': return new NominationPoolsRewardPaid(undefined, json)
        case 'NominationPoolsPoolSlashed': return new NominationPoolsPoolSlashed(undefined, json)
        case 'NominationPoolsNominated': return new NominationPoolsNominated(undefined, json)
        case 'NominationPoolsCreated': return new NominationPoolsCreated(undefined, json)
        case 'NominationPoolsDestroyed': return new NominationPoolsDestroyed(undefined, json)
        case 'NominationPoolsPoolMutated': return new NominationPoolsPoolMutated(undefined, json)
        case 'StakeExchangeOfferCreated': return new StakeExchangeOfferCreated(undefined, json)
        case 'StakeExchangeOfferCancelled': return new StakeExchangeOfferCancelled(undefined, json)
        case 'StakeExchangeLiquidityWithdrawn': return new StakeExchangeLiquidityWithdrawn(undefined, json)
        case 'StakeExchangeLiquidityConfigUpdated': return new StakeExchangeLiquidityConfigUpdated(undefined, json)
        case 'StakeExchangeLiquidityAdded': return new StakeExchangeLiquidityAdded(undefined, json)
        case 'StakeExchangeBuyOrderCompleted': return new StakeExchangeBuyOrderCompleted(undefined, json)
        case 'StakeExchangeOfferCompleted': return new StakeExchangeOfferCompleted(undefined, json)
        default: throw new TypeError('Unknown json object passed as EventData')
    }
}
