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
import {MultiTokensTokenDestroyed} from "./_multiTokensTokenDestroyed"
import {MultiTokensTokenMutated} from "./_multiTokensTokenMutated"
import {MultiTokensTransferred} from "./_multiTokensTransferred"
import {MultiTokensUnapproved} from "./_multiTokensUnapproved"
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
import {MultiTokensInfused} from "./_multiTokensInfused"

export type EventData = MultiTokensApproved | MultiTokensAttributeRemoved | MultiTokensAttributeSet | MultiTokensBurned | MultiTokensCollectionAccountCreated | MultiTokensCollectionAccountDestroyed | MultiTokensCollectionCreated | MultiTokensCollectionDestroyed | MultiTokensCollectionMutated | MultiTokensFrozen | MultiTokensMinted | MultiTokensThawed | MultiTokensTokenAccountCreated | MultiTokensTokenAccountDestroyed | MultiTokensTokenCreated | MultiTokensTokenDestroyed | MultiTokensTokenMutated | MultiTokensTransferred | MultiTokensUnapproved | MarketplaceAuctionFinalized | MarketplaceBidPlaced | MarketplaceListingCancelled | MarketplaceListingCreated | MarketplaceListingFilled | MarketplaceCounterOfferPlaced | MarketplaceCounterOfferAnswered | MarketplaceCounterOfferRemoved | MarketplaceOfferCreated | MarketplaceOfferSettled | MarketplaceOfferCancelled | MarketplaceListingRemovedUnderMinimum | BalancesTransfer | TeleportBalanceWithdrawn | ClaimsClaimRequested | ClaimsClaimed | FuelTankCreated | FuelTankDestroyed | MultiTokensClaimedCollections | MultiTokensClaimTokensInitiated | MultiTokensClaimTokensCompleted | MultiTokensCollectionTransferred | MultiTokensInfused

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
        case 'MultiTokensTokenDestroyed': return new MultiTokensTokenDestroyed(undefined, json)
        case 'MultiTokensTokenMutated': return new MultiTokensTokenMutated(undefined, json)
        case 'MultiTokensTransferred': return new MultiTokensTransferred(undefined, json)
        case 'MultiTokensUnapproved': return new MultiTokensUnapproved(undefined, json)
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
        case 'MultiTokensInfused': return new MultiTokensInfused(undefined, json)
        default: throw new TypeError('Unknown json object passed as EventData')
    }
}
