import { identityCleared } from './identity-cleared'
import { identityKilled } from './identity-killed'
import { identitySet } from './identity-set'
import { judgementGiven } from './judgement-given'
import { judgementRequested } from './judgement-requested'
import { judgementUnrequested } from './judgement-unrequested'
import { registrarAdded } from './registrar-added'
import { subIdentityAdded } from './sub-identity-added'
import { subIdentityRemoved } from './sub-identity-removed'
import { subIdentityRevoked } from './sub-identity-revoked'

export const identity = {
    identityCleared,
    identityKilled,
    identitySet,
    judgementGiven,
    judgementRequested,
    judgementUnrequested,
    registrarAdded,
    subIdentityAdded,
    subIdentityRemoved,
    subIdentityRevoked,
}

export default identity
