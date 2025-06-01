import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as matrixV500 from '../matrixV500'
import * as matrixV600 from '../matrixV600'
import * as matrixV601 from '../matrixV601'
import * as matrixV602 from '../matrixV602'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as matrixV604 from '../matrixV604'
import * as matrixEnjinV1000 from '../matrixEnjinV1000'
import * as matrixV1000 from '../matrixV1000'
import * as matrixEnjinV1003 from '../matrixEnjinV1003'
import * as matrixV1003 from '../matrixV1003'
import * as matrixEnjinV1004 from '../matrixEnjinV1004'
import * as matrixV1004 from '../matrixV1004'
import * as matrixEnjinV1005 from '../matrixEnjinV1005'
import * as matrixV1005 from '../matrixV1005'
import * as matrixV1010 from '../matrixV1010'
import * as matrixV1011 from '../matrixV1011'
import * as matrixEnjinV1012 from '../matrixEnjinV1012'
import * as matrixV1012 from '../matrixV1012'
import * as matrixV1020 from '../matrixV1020'
import * as matrixEnjinV1022 from '../matrixEnjinV1022'
import * as matrixV1022 from '../matrixV1022'

export const setMembers =  {
    name: 'TechnicalCommittee.set_members',
    /**
     * Set the collective's membership.
     * 
     * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
     * - `prime`: The prime member whose vote sets the default.
     * - `old_count`: The upper bound for the previous number of members in storage. Used for
     *   weight estimation.
     * 
     * The dispatch of this call must be `SetMembersOrigin`.
     * 
     * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
     *       the weight estimations rely on it to estimate dispatchable weight.
     * 
     * # WARNING:
     * 
     * The `pallet-collective` can also be managed by logic outside of the pallet through the
     * implementation of the trait [`ChangeMembers`].
     * Any call to `set_members` must be careful that the member set doesn't get out of sync
     * with other logic managing the member set.
     * 
     * ## Complexity:
     * - `O(MP + N)` where:
     *   - `M` old-members-count (code- and governance-bounded)
     *   - `N` new-members-count (code- and governance-bounded)
     *   - `P` proposals-count (code-bounded)
     */
    matrixEnjinV603: new CallType(
        'TechnicalCommittee.set_members',
        sts.struct({
            newMembers: sts.array(() => matrixEnjinV603.AccountId32),
            prime: sts.option(() => matrixEnjinV603.AccountId32),
            oldCount: sts.number(),
        })
    ),
}

export const execute =  {
    name: 'TechnicalCommittee.execute',
    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * ## Complexity:
     * - `O(B + M + P)` where:
     * - `B` is `proposal` size in bytes (length-fee-bounded)
     * - `M` members-count (code-bounded)
     * - `P` complexity of dispatching `proposal`
     */
    matrixEnjinV603: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: matrixEnjinV603.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * ## Complexity:
     * - `O(B + M + P)` where:
     * - `B` is `proposal` size in bytes (length-fee-bounded)
     * - `M` members-count (code-bounded)
     * - `P` complexity of dispatching `proposal`
     */
    matrixEnjinV1000: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: matrixEnjinV1000.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * ## Complexity:
     * - `O(B + M + P)` where:
     * - `B` is `proposal` size in bytes (length-fee-bounded)
     * - `M` members-count (code-bounded)
     * - `P` complexity of dispatching `proposal`
     */
    matrixEnjinV1003: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: matrixEnjinV1003.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * See [`Pallet::execute`].
     */
    matrixEnjinV1004: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: matrixEnjinV1004.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * See [`Pallet::execute`].
     */
    matrixEnjinV1005: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: matrixEnjinV1005.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * ## Complexity:
     * - `O(B + M + P)` where:
     * - `B` is `proposal` size in bytes (length-fee-bounded)
     * - `M` members-count (code-bounded)
     * - `P` complexity of dispatching `proposal`
     */
    matrixEnjinV1012: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: matrixEnjinV1012.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * ## Complexity:
     * - `O(B + M + P)` where:
     * - `B` is `proposal` size in bytes (length-fee-bounded)
     * - `M` members-count (code-bounded)
     * - `P` complexity of dispatching `proposal`
     */
    matrixEnjinV1022: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: matrixEnjinV1022.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    matrixV500: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: matrixV500.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    matrixV600: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: matrixV600.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    matrixV601: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: matrixV601.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * ## Complexity:
     * - `O(B + M + P)` where:
     * - `B` is `proposal` size in bytes (length-fee-bounded)
     * - `M` members-count (code-bounded)
     * - `P` complexity of dispatching `proposal`
     */
    matrixV602: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: matrixV602.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * ## Complexity:
     * - `O(B + M + P)` where:
     * - `B` is `proposal` size in bytes (length-fee-bounded)
     * - `M` members-count (code-bounded)
     * - `P` complexity of dispatching `proposal`
     */
    matrixV604: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: matrixV604.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * ## Complexity:
     * - `O(B + M + P)` where:
     * - `B` is `proposal` size in bytes (length-fee-bounded)
     * - `M` members-count (code-bounded)
     * - `P` complexity of dispatching `proposal`
     */
    matrixV1000: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: matrixV1000.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * ## Complexity:
     * - `O(B + M + P)` where:
     * - `B` is `proposal` size in bytes (length-fee-bounded)
     * - `M` members-count (code-bounded)
     * - `P` complexity of dispatching `proposal`
     */
    matrixV1003: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: matrixV1003.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * See [`Pallet::execute`].
     */
    matrixV1004: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: matrixV1004.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * See [`Pallet::execute`].
     */
    matrixV1005: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: matrixV1005.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * ## Complexity:
     * - `O(B + M + P)` where:
     * - `B` is `proposal` size in bytes (length-fee-bounded)
     * - `M` members-count (code-bounded)
     * - `P` complexity of dispatching `proposal`
     */
    matrixV1010: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: matrixV1010.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * ## Complexity:
     * - `O(B + M + P)` where:
     * - `B` is `proposal` size in bytes (length-fee-bounded)
     * - `M` members-count (code-bounded)
     * - `P` complexity of dispatching `proposal`
     */
    matrixV1011: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: matrixV1011.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * ## Complexity:
     * - `O(B + M + P)` where:
     * - `B` is `proposal` size in bytes (length-fee-bounded)
     * - `M` members-count (code-bounded)
     * - `P` complexity of dispatching `proposal`
     */
    matrixV1012: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: matrixV1012.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * ## Complexity:
     * - `O(B + M + P)` where:
     * - `B` is `proposal` size in bytes (length-fee-bounded)
     * - `M` members-count (code-bounded)
     * - `P` complexity of dispatching `proposal`
     */
    matrixV1020: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: matrixV1020.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * ## Complexity:
     * - `O(B + M + P)` where:
     * - `B` is `proposal` size in bytes (length-fee-bounded)
     * - `M` members-count (code-bounded)
     * - `P` complexity of dispatching `proposal`
     */
    matrixV1022: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: matrixV1022.Call,
            lengthBound: sts.number(),
        })
    ),
}

export const propose =  {
    name: 'TechnicalCommittee.propose',
    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * ## Complexity
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     */
    matrixEnjinV603: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: matrixEnjinV603.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * ## Complexity
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     */
    matrixEnjinV1000: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: matrixEnjinV1000.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * ## Complexity
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     */
    matrixEnjinV1003: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: matrixEnjinV1003.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * See [`Pallet::propose`].
     */
    matrixEnjinV1004: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: matrixEnjinV1004.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * See [`Pallet::propose`].
     */
    matrixEnjinV1005: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: matrixEnjinV1005.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * ## Complexity
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     */
    matrixEnjinV1012: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: matrixEnjinV1012.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * ## Complexity
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     */
    matrixEnjinV1022: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: matrixEnjinV1022.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    matrixV500: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: matrixV500.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    matrixV600: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: matrixV600.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    matrixV601: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: matrixV601.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * ## Complexity
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     */
    matrixV602: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: matrixV602.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * ## Complexity
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     */
    matrixV604: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: matrixV604.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * ## Complexity
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     */
    matrixV1000: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: matrixV1000.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * ## Complexity
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     */
    matrixV1003: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: matrixV1003.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * See [`Pallet::propose`].
     */
    matrixV1004: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: matrixV1004.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * See [`Pallet::propose`].
     */
    matrixV1005: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: matrixV1005.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * ## Complexity
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     */
    matrixV1010: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: matrixV1010.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * ## Complexity
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     */
    matrixV1011: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: matrixV1011.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * ## Complexity
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     */
    matrixV1012: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: matrixV1012.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * ## Complexity
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     */
    matrixV1020: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: matrixV1020.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * ## Complexity
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     */
    matrixV1022: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: matrixV1022.Call,
            lengthBound: sts.number(),
        })
    ),
}

export const vote =  {
    name: 'TechnicalCommittee.vote',
    /**
     * Add an aye or nay vote for the sender to the given proposal.
     * 
     * Requires the sender to be a member.
     * 
     * Transaction fees will be waived if the member is voting on any particular proposal
     * for the first time and the call is successful. Subsequent vote changes will charge a
     * fee.
     * ## Complexity
     * - `O(M)` where `M` is members-count (code- and governance-bounded)
     */
    matrixEnjinV603: new CallType(
        'TechnicalCommittee.vote',
        sts.struct({
            proposal: matrixEnjinV603.H256,
            index: sts.number(),
            approve: sts.boolean(),
        })
    ),
}

export const disapproveProposal =  {
    name: 'TechnicalCommittee.disapprove_proposal',
    /**
     * Disapprove a proposal, close, and remove it from the system, regardless of its current
     * state.
     * 
     * Must be called by the Root origin.
     * 
     * Parameters:
     * * `proposal_hash`: The hash of the proposal that should be disapproved.
     * 
     * ## Complexity
     * O(P) where P is the number of max proposals
     */
    matrixEnjinV603: new CallType(
        'TechnicalCommittee.disapprove_proposal',
        sts.struct({
            proposalHash: matrixEnjinV603.H256,
        })
    ),
}

export const close =  {
    name: 'TechnicalCommittee.close',
    /**
     * Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     * May be called by any signed account in order to finish voting and close the proposal.
     * 
     * If called before the end of the voting period it will only close the vote if it is
     * has enough votes to be approved or disapproved.
     * 
     * If called after the end of the voting period abstentions are counted as rejections
     * unless there is a prime member set and the prime member cast an approval.
     * 
     * If the close operation completes successfully with disapproval, the transaction fee will
     * be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
     * proposal.
     * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     * ## Complexity
     * - `O(B + M + P1 + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - `P1` is the complexity of `proposal` preimage.
     *   - `P2` is proposal-count (code-bounded)
     */
    matrixEnjinV603: new CallType(
        'TechnicalCommittee.close',
        sts.struct({
            proposalHash: matrixEnjinV603.H256,
            index: sts.number(),
            proposalWeightBound: matrixEnjinV603.Weight,
            lengthBound: sts.number(),
        })
    ),
}

export const closeOldWeight =  {
    name: 'TechnicalCommittee.close_old_weight',
    /**
     * Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     * May be called by any signed account in order to finish voting and close the proposal.
     * 
     * If called before the end of the voting period it will only close the vote if it is
     * has enough votes to be approved or disapproved.
     * 
     * If called after the end of the voting period abstentions are counted as rejections
     * unless there is a prime member set and the prime member cast an approval.
     * 
     * If the close operation completes successfully with disapproval, the transaction fee will
     * be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
     * proposal.
     * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1 + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - `P1` is the complexity of `proposal` preimage.
     *   - `P2` is proposal-count (code-bounded)
     * - DB:
     *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
     *    `O(P2)`)
     *  - any mutations done while executing `proposal` (`P1`)
     * - up to 3 events
     * # </weight>
     */
    matrixV500: new CallType(
        'TechnicalCommittee.close_old_weight',
        sts.struct({
            proposalHash: matrixV500.H256,
            index: sts.number(),
            proposalWeightBound: sts.bigint(),
            lengthBound: sts.number(),
        })
    ),
}
