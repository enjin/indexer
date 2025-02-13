import { collectionCreated } from './collection-created'
import { collectionDestroyed } from './collection-destroyed'
import { tokenCreated } from './token-created'
import { collectionAccountCreated } from './collection-account-created'
import { tokenAccountCreated } from './token-account-created'
import { collectionAccountDestroyed } from './collection-account-destroyed'
import { tokenAccountDestroyed } from './token-account-destroyed'
import { infused } from './infused'
import { minted } from './minted'
import { burned } from './burned'
import { tokenDestroyed } from './token-destroyed'
import { attributeSet } from './attribute-set'
import { attributeRemoved } from './attribute-removed'
import { frozen } from './frozen'
import { thawed } from './thawed'
import { approved } from './approved'
import { unapproved } from './unapproved'
import { transferred } from './transferred'
import { collectionMutated } from './collection-mutated'
import { collectionTransferred } from './collection-transferred'
import { tokenMutated } from './token-mutated'
import { reserved } from './reserved'
import { unreserved } from './unreserved'
import { claimedCollections } from './claimed-collections'
import { claimTokensInitiated } from './claim-tokens-initiated'
import { claimTokensCompleted } from './claim-tokens-completed'

export const multiTokens = {
    collectionCreated,
    collectionDestroyed,
    tokenCreated,
    collectionAccountCreated,
    tokenAccountCreated,
    collectionAccountDestroyed,
    tokenAccountDestroyed,
    infused,
    minted,
    burned,
    tokenDestroyed,
    attributeSet,
    attributeRemoved,
    frozen,
    thawed,
    approved,
    unapproved,
    transferred,
    collectionMutated,
    collectionTransferred,
    tokenMutated,
    reserved,
    unreserved,
    claimedCollections,
    claimTokensInitiated,
    claimTokensCompleted,
}

export default multiTokens
