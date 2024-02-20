// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/errors';

import type { ApiTypes, AugmentedError } from '@polkadot/api-base/types';

export type __AugmentedError<ApiType extends ApiTypes> = AugmentedError<ApiType>;

declare module '@polkadot/api-base/types/errors' {
  interface AugmentedErrors<ApiType extends ApiTypes> {
    balances: {
      /**
       * Beneficiary account must pre-exist.
       **/
      DeadAccount: AugmentedError<ApiType>;
      /**
       * Value too low to create account due to existential deposit.
       **/
      ExistentialDeposit: AugmentedError<ApiType>;
      /**
       * A vesting schedule already exists for this account.
       **/
      ExistingVestingSchedule: AugmentedError<ApiType>;
      /**
       * Transfer/payment would kill account.
       **/
      Expendability: AugmentedError<ApiType>;
      /**
       * Balance too low to send value.
       **/
      InsufficientBalance: AugmentedError<ApiType>;
      /**
       * Account liquidity restrictions prevent withdrawal.
       **/
      LiquidityRestrictions: AugmentedError<ApiType>;
      /**
       * Number of freezes exceed `MaxFreezes`.
       **/
      TooManyFreezes: AugmentedError<ApiType>;
      /**
       * Number of holds exceed `MaxHolds`.
       **/
      TooManyHolds: AugmentedError<ApiType>;
      /**
       * Number of named reserves exceed `MaxReserves`.
       **/
      TooManyReserves: AugmentedError<ApiType>;
      /**
       * Vesting balance too high to send value.
       **/
      VestingBalance: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    bounties: {
      /**
       * The bounty cannot be closed because it has active child bounties.
       **/
      HasActiveChildBounty: AugmentedError<ApiType>;
      /**
       * Proposer's balance is too low.
       **/
      InsufficientProposersBalance: AugmentedError<ApiType>;
      /**
       * Invalid bounty fee.
       **/
      InvalidFee: AugmentedError<ApiType>;
      /**
       * No proposal or bounty at that index.
       **/
      InvalidIndex: AugmentedError<ApiType>;
      /**
       * Invalid bounty value.
       **/
      InvalidValue: AugmentedError<ApiType>;
      /**
       * A bounty payout is pending.
       * To cancel the bounty, you must unassign and slash the curator.
       **/
      PendingPayout: AugmentedError<ApiType>;
      /**
       * The bounties cannot be claimed/closed because it's still in the countdown period.
       **/
      Premature: AugmentedError<ApiType>;
      /**
       * The reason given is just too big.
       **/
      ReasonTooBig: AugmentedError<ApiType>;
      /**
       * Require bounty curator.
       **/
      RequireCurator: AugmentedError<ApiType>;
      /**
       * Too many approvals are already queued.
       **/
      TooManyQueued: AugmentedError<ApiType>;
      /**
       * The bounty status is unexpected.
       **/
      UnexpectedStatus: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    claims: {
      /**
       * Amount Zero
       **/
      AmountZero: AugmentedError<ApiType>;
      /**
       * Delay time is not over for user to claim
       **/
      DelayTimeForClaimNotEnded: AugmentedError<ApiType>;
      /**
       * Delay Time for Claim Not Set
       **/
      DelayTimeForClaimNotSet: AugmentedError<ApiType>;
      /**
       * Delay cannot be less than MinClaimDelay
       **/
      DelayTimeSetTooLow: AugmentedError<ApiType>;
      /**
       * Exchange Rate is not set
       **/
      ExchangeRateIsNotSet: AugmentedError<ApiType>;
      /**
       * Invalid Claim Request Timestamp
       **/
      InvalidClaimRequestTimestamp: AugmentedError<ApiType>;
      /**
       * Invalid Claim Timestamp
       **/
      InvalidClaimTimestamp: AugmentedError<ApiType>;
      /**
       * Invalid address passed in claim
       **/
      InvalidEthereumAddress: AugmentedError<ApiType>;
      /**
       * Invalid Ethereum signature.
       **/
      InvalidEthereumSignature: AugmentedError<ApiType>;
      /**
       * Generic error for when bounded vector is out of bounds
       **/
      OutOfBounds: AugmentedError<ApiType>;
      /**
       * in move claim both etherum address are same
       **/
      SameEthereumAddress: AugmentedError<ApiType>;
      /**
       * Ethereum address has no claim.
       **/
      SignerHasNoClaim: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    collatorStaking: {
      /**
       * Collators Account is not yet registered
       **/
      AccountIdNotRegistered: AugmentedError<ApiType>;
      /**
       * Nomination stake is below the minimum required amount.
       **/
      BelowMinNominationStakeAmount: AugmentedError<ApiType>;
      /**
       * Candidate stake is below the minimum required amount.
       **/
      BelowMinStakeAmount: AugmentedError<ApiType>;
      /**
       * Candidate was not found.
       **/
      CandidateDoesNotExist: AugmentedError<ApiType>;
      /**
       * Candidate was already registered.
       **/
      CandidateExists: AugmentedError<ApiType>;
      /**
       * Cannot unbond Invulnerable
       **/
      CannotUnbondInvulnerable: AugmentedError<ApiType>;
      /**
       * A candidate has already registered an exit.
       **/
      ExitInProgress: AugmentedError<ApiType>;
      /**
       * Account has no associated validator ID
       **/
      NoAssociatedValidatorId: AugmentedError<ApiType>;
      /**
       * Nomination was not found.
       **/
      NominationDoesNotExist: AugmentedError<ApiType>;
      /**
       * Nomination was already registered.
       **/
      NominationExists: AugmentedError<ApiType>;
      /**
       * Not a block producer
       **/
      NotCollator: AugmentedError<ApiType>;
      /**
       * Parachain reached the limit for candidates.
       **/
      TooManyCandidates: AugmentedError<ApiType>;
      /**
       * An attempt to set too many invulnerables
       **/
      TooManyInvulnerables: AugmentedError<ApiType>;
      /**
       * Collator has reached max number of nominations
       **/
      TooManyNominations: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    communityPool: {
      /**
       * The spend origin is valid but the amount it is allowed to spend is lower than the
       * amount to be spent.
       **/
      InsufficientPermission: AugmentedError<ApiType>;
      /**
       * Proposer's balance is too low.
       **/
      InsufficientProposersBalance: AugmentedError<ApiType>;
      /**
       * No proposal or bounty at that index.
       **/
      InvalidIndex: AugmentedError<ApiType>;
      /**
       * Proposal has not been approved.
       **/
      ProposalNotApproved: AugmentedError<ApiType>;
      /**
       * Too many approvals in the queue.
       **/
      TooManyApprovals: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    council: {
      /**
       * Members are already initialized!
       **/
      AlreadyInitialized: AugmentedError<ApiType>;
      /**
       * Duplicate proposals not allowed
       **/
      DuplicateProposal: AugmentedError<ApiType>;
      /**
       * Duplicate vote ignored
       **/
      DuplicateVote: AugmentedError<ApiType>;
      /**
       * Account is not a member
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Proposal must exist
       **/
      ProposalMissing: AugmentedError<ApiType>;
      /**
       * The close call was made too early, before the end of the voting.
       **/
      TooEarly: AugmentedError<ApiType>;
      /**
       * There can only be a maximum of `MaxProposals` active proposals.
       **/
      TooManyProposals: AugmentedError<ApiType>;
      /**
       * Mismatched index
       **/
      WrongIndex: AugmentedError<ApiType>;
      /**
       * The given length bound for the proposal was too low.
       **/
      WrongProposalLength: AugmentedError<ApiType>;
      /**
       * The given weight bound for the proposal was too low.
       **/
      WrongProposalWeight: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    cumulusXcm: {
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    democracy: {
      /**
       * Cannot cancel the same proposal twice
       **/
      AlreadyCanceled: AugmentedError<ApiType>;
      /**
       * The account is already delegating.
       **/
      AlreadyDelegating: AugmentedError<ApiType>;
      /**
       * Identity may not veto a proposal twice
       **/
      AlreadyVetoed: AugmentedError<ApiType>;
      /**
       * Proposal already made
       **/
      DuplicateProposal: AugmentedError<ApiType>;
      /**
       * The instant referendum origin is currently disallowed.
       **/
      InstantNotAllowed: AugmentedError<ApiType>;
      /**
       * Too high a balance was provided that the account cannot afford.
       **/
      InsufficientFunds: AugmentedError<ApiType>;
      /**
       * Invalid hash
       **/
      InvalidHash: AugmentedError<ApiType>;
      /**
       * Maximum number of votes reached.
       **/
      MaxVotesReached: AugmentedError<ApiType>;
      /**
       * No proposals waiting
       **/
      NoneWaiting: AugmentedError<ApiType>;
      /**
       * Delegation to oneself makes no sense.
       **/
      Nonsense: AugmentedError<ApiType>;
      /**
       * The actor has no permission to conduct the action.
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * No external proposal
       **/
      NoProposal: AugmentedError<ApiType>;
      /**
       * The account is not currently delegating.
       **/
      NotDelegating: AugmentedError<ApiType>;
      /**
       * Next external proposal not simple majority
       **/
      NotSimpleMajority: AugmentedError<ApiType>;
      /**
       * The given account did not vote on the referendum.
       **/
      NotVoter: AugmentedError<ApiType>;
      /**
       * The preimage does not exist.
       **/
      PreimageNotExist: AugmentedError<ApiType>;
      /**
       * Proposal still blacklisted
       **/
      ProposalBlacklisted: AugmentedError<ApiType>;
      /**
       * Proposal does not exist
       **/
      ProposalMissing: AugmentedError<ApiType>;
      /**
       * Vote given for invalid referendum
       **/
      ReferendumInvalid: AugmentedError<ApiType>;
      /**
       * Maximum number of items reached.
       **/
      TooMany: AugmentedError<ApiType>;
      /**
       * Value too low
       **/
      ValueLow: AugmentedError<ApiType>;
      /**
       * The account currently has votes attached to it and the operation cannot succeed until
       * these are removed, either through `unvote` or `reap_vote`.
       **/
      VotesExist: AugmentedError<ApiType>;
      /**
       * Voting period too low
       **/
      VotingPeriodLow: AugmentedError<ApiType>;
      /**
       * Invalid upper bound.
       **/
      WrongUpperBound: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    dmpQueue: {
      /**
       * The amount of weight given is possibly not enough for executing the message.
       **/
      OverLimit: AugmentedError<ApiType>;
      /**
       * The message index given is unknown.
       **/
      Unknown: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    extrinsicPause: {
      /**
       * Cannot pause this pallet or it's extrinsic
       **/
      CannotPauseSelf: AugmentedError<ApiType>;
      /**
       * Cannot read the pallet or extrinsic name
       **/
      CannotProcessInput: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    fuelTanks: {
      /**
       * The account already exists
       **/
      AccountAlreadyExists: AugmentedError<ApiType>;
      /**
       * A user cannot remove an account that is storing data for a rule
       **/
      AccountContainsRuleData: AugmentedError<ApiType>;
      /**
       * The account was not found
       **/
      AccountNotFound: AugmentedError<ApiType>;
      /**
       * The user does not have the token required by rule set
       **/
      CallerDoesNotHaveRuleSetTokenBalance: AugmentedError<ApiType>;
      /**
       * A rule cannot be removed from a rule set if it is storing data on any account
       **/
      CannotRemoveRuleThatIsStoringAccountData: AugmentedError<ApiType>;
      /**
       * The user rule data could not be decoded
       **/
      DecodeUserRuleDataFailed: AugmentedError<ApiType>;
      /**
       * Problems calculating the deposit for a call
       **/
      DepositCalculationError: AugmentedError<ApiType>;
      /**
       * Destroying fuel tank is not possible while it is not frozen
       **/
      DestroyUnfrozenTank: AugmentedError<ApiType>;
      /**
       * Destroying fuel tank is not possible while it has existing accounts attached
       **/
      DestroyWithExistingAccounts: AugmentedError<ApiType>;
      /**
       * A fuel tank cannot have more than one rule of the same kind
       **/
      DuplicateRuleKinds: AugmentedError<ApiType>;
      /**
       * Fuel Tank already exists
       **/
      FuelTankAlreadyExists: AugmentedError<ApiType>;
      /**
       * The fuel tank is frozen
       **/
      FuelTankFrozen: AugmentedError<ApiType>;
      /**
       * Fuel Tank not found
       **/
      FuelTankNotFound: AugmentedError<ApiType>;
      /**
       * Fuel tank doesnt have enough funds
       **/
      FuelTankOutOfFunds: AugmentedError<ApiType>;
      /**
       * Not enough funds to perform operation
       **/
      InsufficientBalance: AugmentedError<ApiType>;
      /**
       * The rule set of the fuel tank is misconfigured. This error should never occur.
       **/
      InvalidRuleSet: AugmentedError<ApiType>;
      /**
       * Max number of rules sets per fuel tank was exceeded
       **/
      MaxRuleSetsExceeded: AugmentedError<ApiType>;
      /**
       * A rule that is required for this operation does not exist
       **/
      MissingRequiredRule: AugmentedError<ApiType>;
      /**
       * User data for the required rule does not exist
       **/
      MissingRequiredRuleUserData: AugmentedError<ApiType>;
      /**
       * The user does not have any data stored for rule set
       **/
      NoDataToRemove: AugmentedError<ApiType>;
      /**
       * User does not have permission to perform operation
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * The fuel tank must be frozen for this operation
       **/
      RequiresFrozenTank: AugmentedError<ApiType>;
      /**
       * Either the tank or ruleset must be frozen for this operation
       **/
      RequiresFrozenTankOrRuleset: AugmentedError<ApiType>;
      /**
       * The rule is missing
       **/
      RuleNotFound: AugmentedError<ApiType>;
      /**
       * The rule set does not exist
       **/
      RuleSetNotFound: AugmentedError<ApiType>;
      /**
       * Fuel tank cannot be used due to restrictions
       **/
      UsageRestricted: AugmentedError<ApiType>;
      /**
       * The size of the user rule data is greater than the allowed amount
       **/
      UserRuleDataExceededMaxSize: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    identity: {
      /**
       * Account ID is already named.
       **/
      AlreadyClaimed: AugmentedError<ApiType>;
      /**
       * Empty index.
       **/
      EmptyIndex: AugmentedError<ApiType>;
      /**
       * Fee is changed.
       **/
      FeeChanged: AugmentedError<ApiType>;
      /**
       * The index is invalid.
       **/
      InvalidIndex: AugmentedError<ApiType>;
      /**
       * Invalid judgement.
       **/
      InvalidJudgement: AugmentedError<ApiType>;
      /**
       * The target is invalid.
       **/
      InvalidTarget: AugmentedError<ApiType>;
      /**
       * The provided judgement was for a different identity.
       **/
      JudgementForDifferentIdentity: AugmentedError<ApiType>;
      /**
       * Judgement given.
       **/
      JudgementGiven: AugmentedError<ApiType>;
      /**
       * Error that occurs when there is an issue paying for judgement.
       **/
      JudgementPaymentFailed: AugmentedError<ApiType>;
      /**
       * No identity found.
       **/
      NoIdentity: AugmentedError<ApiType>;
      /**
       * Account isn't found.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * Account isn't named.
       **/
      NotNamed: AugmentedError<ApiType>;
      /**
       * Sub-account isn't owned by sender.
       **/
      NotOwned: AugmentedError<ApiType>;
      /**
       * Sender is not a sub-account.
       **/
      NotSub: AugmentedError<ApiType>;
      /**
       * Sticky judgement.
       **/
      StickyJudgement: AugmentedError<ApiType>;
      /**
       * Too many additional fields.
       **/
      TooManyFields: AugmentedError<ApiType>;
      /**
       * Maximum amount of registrars reached. Cannot add any more.
       **/
      TooManyRegistrars: AugmentedError<ApiType>;
      /**
       * Too many subs-accounts.
       **/
      TooManySubAccounts: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    marketplace: {
      /**
       * Cannot finalize an auction that is not over
       **/
      AuctionNotOver: AugmentedError<ApiType>;
      /**
       * The seller is not allowed to buy their own listing
       **/
      BuyerIsSeller: AugmentedError<ApiType>;
      /**
       * The currency is not allowed to be used as a royalty payment
       **/
      CurrencyNotAllowedAsRoyalty: AugmentedError<ApiType>;
      /**
       * Cannot bid on an auction that has not started or is over
       **/
      InactiveAuction: AugmentedError<ApiType>;
      /**
       * The amount is invalid
       **/
      InvalidAmount: AugmentedError<ApiType>;
      /**
       * The end time of the auction must be after the start
       **/
      InvalidAuctionEnd: AugmentedError<ApiType>;
      /**
       * The start time of the auction must be greater than the current block plus the
       * minimum requirement
       **/
      InvalidAuctionStart: AugmentedError<ApiType>;
      /**
       * The price is invalid
       **/
      InvalidPrice: AugmentedError<ApiType>;
      /**
       * A listing with this id already exists
       **/
      ListingAlreadyExists: AugmentedError<ApiType>;
      /**
       * Listing is forbidden for this token
       **/
      ListingForbidden: AugmentedError<ApiType>;
      /**
       * An action was taken that is not compatible with the listing's type.
       **/
      ListingIsWrongType: AugmentedError<ApiType>;
      /**
       * The listing has not crossed the mandatory delay before its considered active
       **/
      ListingNotActive: AugmentedError<ApiType>;
      /**
       * The listing does not exist
       **/
      ListingNotFound: AugmentedError<ApiType>;
      /**
       * The base currency balance is too low
       **/
      LowBaseCurrencyBalance: AugmentedError<ApiType>;
      /**
       * The token balance is too low
       **/
      LowTokenBalance: AugmentedError<ApiType>;
      /**
       * Make asset is frozen
       **/
      MakeAssetFrozen: AugmentedError<ApiType>;
      /**
       * The max rounding error was exceeded
       **/
      MaxRoundingErrorExceeded: AugmentedError<ApiType>;
      /**
       * Neither the make side or the take side of the listing is considered a currency
       **/
      NoCurrency: AugmentedError<ApiType>;
      /**
       * The caller does not have permission for this operation
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * Take asset is frozen
       **/
      TakeAssetFrozen: AugmentedError<ApiType>;
      /**
       * The take value is under the minimum requirement
       **/
      TakeValueUnderMinimum: AugmentedError<ApiType>;
      /**
       * Transfer params could not be created
       **/
      TransferParamCreationFailed: AugmentedError<ApiType>;
      /**
       * the order cannot be filled
       **/
      UnableToFill: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    matrixUtility: {
      /**
       * Too many calls batched.
       **/
      TooManyCalls: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    matrixXcm: {
      /**
       * Invalid address
       **/
      InvalidAddress: AugmentedError<ApiType>;
      /**
       * Asset is not cross-chain transferable
       **/
      NotTransferable: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    multisig: {
      /**
       * Call is already approved by this signatory.
       **/
      AlreadyApproved: AugmentedError<ApiType>;
      /**
       * The data to be stored is already stored.
       **/
      AlreadyStored: AugmentedError<ApiType>;
      /**
       * The maximum weight information provided was too low.
       **/
      MaxWeightTooLow: AugmentedError<ApiType>;
      /**
       * Threshold must be 2 or greater.
       **/
      MinimumThreshold: AugmentedError<ApiType>;
      /**
       * Call doesn't need any (more) approvals.
       **/
      NoApprovalsNeeded: AugmentedError<ApiType>;
      /**
       * Multisig operation not found when attempting to cancel.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * No timepoint was given, yet the multisig operation is already underway.
       **/
      NoTimepoint: AugmentedError<ApiType>;
      /**
       * Only the account that originally created the multisig is able to cancel it.
       **/
      NotOwner: AugmentedError<ApiType>;
      /**
       * The sender was contained in the other signatories; it shouldn't be.
       **/
      SenderInSignatories: AugmentedError<ApiType>;
      /**
       * The signatories were provided out of order; they should be ordered.
       **/
      SignatoriesOutOfOrder: AugmentedError<ApiType>;
      /**
       * There are too few signatories in the list.
       **/
      TooFewSignatories: AugmentedError<ApiType>;
      /**
       * There are too many signatories in the list.
       **/
      TooManySignatories: AugmentedError<ApiType>;
      /**
       * A timepoint was given, yet no multisig operation is underway.
       **/
      UnexpectedTimepoint: AugmentedError<ApiType>;
      /**
       * A different timepoint was given to the multisig operation that is underway.
       **/
      WrongTimepoint: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    multiTokens: {
      /**
       * Tried to set an expiration that has already passed
       **/
      AlreadyExpired: AugmentedError<ApiType>;
      /**
       * An amount of zero was used when it's not allowed
       **/
      AmountZero: AugmentedError<ApiType>;
      /**
       * The balance is below the minimum required balance
       **/
      BalanceBelowMinimumRequirement: AugmentedError<ApiType>;
      /**
       * Not enough balance to perform the operation.
       **/
      BalanceLow: AugmentedError<ApiType>;
      /**
       * An account cannot approve itself as an operator
       **/
      CannotApproveSelf: AugmentedError<ApiType>;
      /**
       * An account cannot transfer tokens to itself
       **/
      CannotTransferToSelf: AugmentedError<ApiType>;
      /**
       * CollectionAccount was not found
       **/
      CollectionAccountNotFound: AugmentedError<ApiType>;
      /**
       * The collection is already approved for all, so it is useless to approve for a single
       * token
       **/
      CollectionAlreadyApproved: AugmentedError<ApiType>;
      /**
       * The number of collections has exceeded the bound
       **/
      CollectionCountExceeded: AugmentedError<ApiType>;
      /**
       * Collection ID is already in use
       **/
      CollectionIdAlreadyInUse: AugmentedError<ApiType>;
      /**
       * Collection was not found
       **/
      CollectionNotFound: AugmentedError<ApiType>;
      /**
       * Conflicting MultiLocation for an AssetId
       **/
      ConflictingLocation: AugmentedError<ApiType>;
      /**
       * Token cannot act as both a currency and a royalty
       **/
      CurrencyIncompatibleWithCollectionRoyalty: AugmentedError<ApiType>;
      /**
       * Unable to reserve the amount to create a new collection/token
       **/
      DepositReserveFailed: AugmentedError<ApiType>;
      /**
       * Unable to unreserve the amount to burn an existing collection/token
       **/
      DepositUnreserveFailed: AugmentedError<ApiType>;
      /**
       * The collection or token cannot be destroyed because it has attributes
       **/
      DestroyForbiddenByAttributeCount: AugmentedError<ApiType>;
      /**
       * The `OnCollectionEvent` trait has forbidden burning of the collection
       **/
      DestroyForbiddenByCollectionEvent: AugmentedError<ApiType>;
      /**
       * Destroy is not allowed on collections that have tokens. Destroy all tokens before
       * calling [`destroy_collection`](Pallet::destroy_collection). Keep in mind that the
       * [`Tokens`] storage can remain even if all of [`Token`](ep_multi_tokens::Token)'s units
       * were burned. A token can only be destroyed by setting
       * [`remove_token_storage`](OnBurnInput::remove_token_storage) to true in
       * [`burn`](Pallet::burn).
       **/
      DestroyForbiddenByRemainingTokens: AugmentedError<ApiType>;
      /**
       * Freeze state is required when freezing a token
       **/
      FreezeStateRequired: AugmentedError<ApiType>;
      /**
       * The operation failed due to an item being frozen
       **/
      Frozen: AugmentedError<ApiType>;
      /**
       * The token has a never freeze state. The state cannot be changed and the token cannot be
       * frozen.
       **/
      HasNeverFreezeState: AugmentedError<ApiType>;
      /**
       * The idle operation queue is full and cannot accept new operations
       **/
      IdleOperationQueueFull: AugmentedError<ApiType>;
      /**
       * Not enough allowance to perform the operation
       **/
      InsufficientAllowance: AugmentedError<ApiType>;
      /**
       * Provided attribute count doesnt match the count is storage
       **/
      InvalidAttributeCount: AugmentedError<ApiType>;
      /**
       * Attribute key invalid
       **/
      InvalidAttributeKey: AugmentedError<ApiType>;
      /**
       * The ethereum address does not match the signature
       **/
      InvalidEthereumAddress: AugmentedError<ApiType>;
      /**
       * The ethereum signature is invalid
       **/
      InvalidEthereumSignature: AugmentedError<ApiType>;
      /**
       * One or more of the explicit royalty currencies are invalid
       **/
      InvalidExplicitRoyaltyCurrencies: AugmentedError<ApiType>;
      /**
       * The freeze state is not valid
       **/
      InvalidFreezeState: AugmentedError<ApiType>;
      /**
       * Mint params are invalid
       **/
      InvalidMintParams: AugmentedError<ApiType>;
      /**
       * The unit price cannot be zero, cannot decrease, and `unit_price * total_supply` must
       * be greater than `TokenAccountDeposit`
       **/
      InvalidUnitPrice: AugmentedError<ApiType>;
      /**
       * The balance is locked or restricted
       **/
      LiquidityRestrictions: AugmentedError<ApiType>;
      /**
       * The max number of approvals for this account was exceeded
       **/
      MaxApprovalsExceeded: AugmentedError<ApiType>;
      /**
       * Tried to mint more tokens than allowed
       **/
      MaxTokenCountExceeded: AugmentedError<ApiType>;
      /**
       * The minting did not meet the requirements set by the mint policy
       **/
      MintFailedRequirements: AugmentedError<ApiType>;
      /**
       * There is nothing to claim
       **/
      NoClaimAvailable: AugmentedError<ApiType>;
      /**
       * Caller is not allowed to execute this extrinsic
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * This operation is not allowed for the native token
       **/
      OperationNotAllowedForNativeToken: AugmentedError<ApiType>;
      /**
       * Royalty percentage is above or below allowed bounds
       **/
      PercentageOutOfBounds: AugmentedError<ApiType>;
      /**
       * The token is permanently frozen
       **/
      PermanentlyFrozen: AugmentedError<ApiType>;
      /**
       * The preminted amount would be exceeded by the mint operation
       **/
      PremintExceeded: AugmentedError<ApiType>;
      /**
       * Reserved balance is not enough to perform the operation
       **/
      ReservesLow: AugmentedError<ApiType>;
      /**
       * TokenAccount was not found
       **/
      TokenAccountNotFound: AugmentedError<ApiType>;
      /**
       * Tried to create Token that already exists
       **/
      TokenAlreadyExists: AugmentedError<ApiType>;
      /**
       * The token id cannot be minted because it's reserved for claiming
       **/
      TokenIdReservedForClaim: AugmentedError<ApiType>;
      /**
       * Token metadata could not be created from mint params
       **/
      TokenMetadataCreationFailed: AugmentedError<ApiType>;
      /**
       * The cap for the token was exceeded during mint
       **/
      TokenMintCapExceeded: AugmentedError<ApiType>;
      /**
       * Token was not found
       **/
      TokenNotFound: AugmentedError<ApiType>;
      /**
       * Max named locks for an account are exceeded
       **/
      TooManyLocks: AugmentedError<ApiType>;
      /**
       * Max named reserves for an account are exceeded
       **/
      TooManyReserves: AugmentedError<ApiType>;
      /**
       * Transfer params could not be created
       **/
      TransferParamCreationFailed: AugmentedError<ApiType>;
      /**
       * The passed count does not reflect the amount in storage
       **/
      WrongCount: AugmentedError<ApiType>;
      /**
       * The passed `current_amount` does not match the actual current amount of the approval
       **/
      WrongCurrentApprovedAmount: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    multiTokensMigration: {
      /**
       * Indicates that a migration call happened, although the migration is already closed
       **/
      MigrationAlreadyCompleted: AugmentedError<ApiType>;
      /**
       * Indicates that a finalize call happened, although the migration pallet is not in an
       * ongoing migration
       **/
      OnlyFinalizeOngoing: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    ormlXcm: {
      /**
       * The version of the `Versioned` value used is not able to be
       * interpreted.
       **/
      BadVersion: AugmentedError<ApiType>;
      /**
       * The message and destination was recognized as being reachable but
       * the operation could not be completed.
       **/
      SendFailure: AugmentedError<ApiType>;
      /**
       * The message and destination combination was not recognized as being
       * reachable.
       **/
      Unreachable: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    parachainSystem: {
      /**
       * The inherent which supplies the host configuration did not run this block.
       **/
      HostConfigurationNotAvailable: AugmentedError<ApiType>;
      /**
       * No code upgrade has been authorized.
       **/
      NothingAuthorized: AugmentedError<ApiType>;
      /**
       * No validation function upgrade is currently scheduled.
       **/
      NotScheduled: AugmentedError<ApiType>;
      /**
       * Attempt to upgrade validation function while existing upgrade pending.
       **/
      OverlappingUpgrades: AugmentedError<ApiType>;
      /**
       * Polkadot currently prohibits this parachain from upgrading its validation function.
       **/
      ProhibitedByPolkadot: AugmentedError<ApiType>;
      /**
       * The supplied validation function has compiled into a blob larger than Polkadot is
       * willing to run.
       **/
      TooBig: AugmentedError<ApiType>;
      /**
       * The given code upgrade has not been authorized.
       **/
      Unauthorized: AugmentedError<ApiType>;
      /**
       * The inherent which supplies the validation data did not run this block.
       **/
      ValidationDataNotAvailable: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    polkadotXcm: {
      /**
       * The given account is not an identifiable sovereign account for any location.
       **/
      AccountNotSovereign: AugmentedError<ApiType>;
      /**
       * The location is invalid since it already has a subscription from us.
       **/
      AlreadySubscribed: AugmentedError<ApiType>;
      /**
       * The given location could not be used (e.g. because it cannot be expressed in the
       * desired version of XCM).
       **/
      BadLocation: AugmentedError<ApiType>;
      /**
       * The version of the `Versioned` value used is not able to be interpreted.
       **/
      BadVersion: AugmentedError<ApiType>;
      /**
       * Could not re-anchor the assets to declare the fees for the destination chain.
       **/
      CannotReanchor: AugmentedError<ApiType>;
      /**
       * The destination `MultiLocation` provided cannot be inverted.
       **/
      DestinationNotInvertible: AugmentedError<ApiType>;
      /**
       * The assets to be sent are empty.
       **/
      Empty: AugmentedError<ApiType>;
      /**
       * The operation required fees to be paid which the initiator could not meet.
       **/
      FeesNotMet: AugmentedError<ApiType>;
      /**
       * The message execution fails the filter.
       **/
      Filtered: AugmentedError<ApiType>;
      /**
       * The unlock operation cannot succeed because there are still consumers of the lock.
       **/
      InUse: AugmentedError<ApiType>;
      /**
       * Invalid asset for the operation.
       **/
      InvalidAsset: AugmentedError<ApiType>;
      /**
       * Origin is invalid for sending.
       **/
      InvalidOrigin: AugmentedError<ApiType>;
      /**
       * A remote lock with the corresponding data could not be found.
       **/
      LockNotFound: AugmentedError<ApiType>;
      /**
       * The owner does not own (all) of the asset that they wish to do the operation on.
       **/
      LowBalance: AugmentedError<ApiType>;
      /**
       * The referenced subscription could not be found.
       **/
      NoSubscription: AugmentedError<ApiType>;
      /**
       * There was some other issue (i.e. not to do with routing) in sending the message. Perhaps
       * a lack of space for buffering the message.
       **/
      SendFailure: AugmentedError<ApiType>;
      /**
       * Too many assets have been attempted for transfer.
       **/
      TooManyAssets: AugmentedError<ApiType>;
      /**
       * The asset owner has too many locks on the asset.
       **/
      TooManyLocks: AugmentedError<ApiType>;
      /**
       * The desired destination was unreachable, generally because there is a no way of routing
       * to it.
       **/
      Unreachable: AugmentedError<ApiType>;
      /**
       * The message's weight could not be determined.
       **/
      UnweighableMessage: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    pools: {
      /**
       * The fee shares must add up to 100 percent
       **/
      InvalidFeeShares: AugmentedError<ApiType>;
      /**
       * The number of pools was exceeded
       **/
      PoolCountExceeded: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    preimage: {
      /**
       * Preimage has already been noted on-chain.
       **/
      AlreadyNoted: AugmentedError<ApiType>;
      /**
       * The user is not authorized to perform this action.
       **/
      NotAuthorized: AugmentedError<ApiType>;
      /**
       * The preimage cannot be removed since it has not yet been noted.
       **/
      NotNoted: AugmentedError<ApiType>;
      /**
       * The preimage request cannot be removed since no outstanding requests exist.
       **/
      NotRequested: AugmentedError<ApiType>;
      /**
       * A preimage may not be removed when there are outstanding requests.
       **/
      Requested: AugmentedError<ApiType>;
      /**
       * Preimage is too large to store on-chain.
       **/
      TooBig: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    scheduler: {
      /**
       * Failed to schedule a call
       **/
      FailedToSchedule: AugmentedError<ApiType>;
      /**
       * Attempt to use a non-named function on a named task.
       **/
      Named: AugmentedError<ApiType>;
      /**
       * Cannot find the scheduled call.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * Reschedule failed because it does not change scheduled time.
       **/
      RescheduleNoChange: AugmentedError<ApiType>;
      /**
       * Given target block number is in the past.
       **/
      TargetBlockNumberInPast: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    session: {
      /**
       * Registered duplicate key.
       **/
      DuplicatedKey: AugmentedError<ApiType>;
      /**
       * Invalid ownership proof.
       **/
      InvalidProof: AugmentedError<ApiType>;
      /**
       * Key setting account is not live, so it's impossible to associate keys.
       **/
      NoAccount: AugmentedError<ApiType>;
      /**
       * No associated validator ID for account.
       **/
      NoAssociatedValidatorId: AugmentedError<ApiType>;
      /**
       * No keys are associated with this account.
       **/
      NoKeys: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    system: {
      /**
       * The origin filter prevent the call to be dispatched.
       **/
      CallFiltered: AugmentedError<ApiType>;
      /**
       * Failed to extract the runtime version from the new runtime.
       * 
       * Either calling `Core_version` or decoding `RuntimeVersion` failed.
       **/
      FailedToExtractRuntimeVersion: AugmentedError<ApiType>;
      /**
       * The name of specification does not match between the current runtime
       * and the new runtime.
       **/
      InvalidSpecName: AugmentedError<ApiType>;
      /**
       * Suicide called when the account has non-default composite data.
       **/
      NonDefaultComposite: AugmentedError<ApiType>;
      /**
       * There is a non-zero reference count preventing the account from being purged.
       **/
      NonZeroRefCount: AugmentedError<ApiType>;
      /**
       * The specification version is not allowed to decrease between the current runtime
       * and the new runtime.
       **/
      SpecVersionNeedsToIncrease: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    technicalCommittee: {
      /**
       * Members are already initialized!
       **/
      AlreadyInitialized: AugmentedError<ApiType>;
      /**
       * Duplicate proposals not allowed
       **/
      DuplicateProposal: AugmentedError<ApiType>;
      /**
       * Duplicate vote ignored
       **/
      DuplicateVote: AugmentedError<ApiType>;
      /**
       * Account is not a member
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Proposal must exist
       **/
      ProposalMissing: AugmentedError<ApiType>;
      /**
       * The close call was made too early, before the end of the voting.
       **/
      TooEarly: AugmentedError<ApiType>;
      /**
       * There can only be a maximum of `MaxProposals` active proposals.
       **/
      TooManyProposals: AugmentedError<ApiType>;
      /**
       * Mismatched index
       **/
      WrongIndex: AugmentedError<ApiType>;
      /**
       * The given length bound for the proposal was too low.
       **/
      WrongProposalLength: AugmentedError<ApiType>;
      /**
       * The given weight bound for the proposal was too low.
       **/
      WrongProposalWeight: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    technicalMembership: {
      /**
       * Already a member.
       **/
      AlreadyMember: AugmentedError<ApiType>;
      /**
       * Not a member.
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Too many members.
       **/
      TooManyMembers: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    unknownTokens: {
      /**
       * The operation will cause balance to overflow.
       **/
      BalanceOverflow: AugmentedError<ApiType>;
      /**
       * The balance is too low.
       **/
      BalanceTooLow: AugmentedError<ApiType>;
      /**
       * Unhandled asset.
       **/
      UnhandledAsset: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    utility: {
      /**
       * Too many calls batched.
       **/
      TooManyCalls: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    xcmpQueue: {
      /**
       * Bad overweight index.
       **/
      BadOverweightIndex: AugmentedError<ApiType>;
      /**
       * Bad XCM data.
       **/
      BadXcm: AugmentedError<ApiType>;
      /**
       * Bad XCM origin.
       **/
      BadXcmOrigin: AugmentedError<ApiType>;
      /**
       * Failed to send XCM message.
       **/
      FailedToSend: AugmentedError<ApiType>;
      /**
       * Provided weight is possibly not enough to execute the message.
       **/
      WeightOverLimit: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    xTokens: {
      /**
       * Asset has no reserve location.
       **/
      AssetHasNoReserve: AugmentedError<ApiType>;
      /**
       * The specified index does not exist in a MultiAssets struct.
       **/
      AssetIndexNonExistent: AugmentedError<ApiType>;
      /**
       * The version of the `Versioned` value used is not able to be
       * interpreted.
       **/
      BadVersion: AugmentedError<ApiType>;
      /**
       * Could not re-anchor the assets to declare the fees for the
       * destination chain.
       **/
      CannotReanchor: AugmentedError<ApiType>;
      /**
       * The destination `MultiLocation` provided cannot be inverted.
       **/
      DestinationNotInvertible: AugmentedError<ApiType>;
      /**
       * We tried sending distinct asset and fee but they have different
       * reserve chains.
       **/
      DistinctReserveForAssetAndFee: AugmentedError<ApiType>;
      /**
       * Fee is not enough.
       **/
      FeeNotEnough: AugmentedError<ApiType>;
      /**
       * Could not get ancestry of asset reserve location.
       **/
      InvalidAncestry: AugmentedError<ApiType>;
      /**
       * The MultiAsset is invalid.
       **/
      InvalidAsset: AugmentedError<ApiType>;
      /**
       * Invalid transfer destination.
       **/
      InvalidDest: AugmentedError<ApiType>;
      /**
       * MinXcmFee not registered for certain reserve location
       **/
      MinXcmFeeNotDefined: AugmentedError<ApiType>;
      /**
       * Not cross-chain transfer.
       **/
      NotCrossChainTransfer: AugmentedError<ApiType>;
      /**
       * Currency is not cross-chain transferable.
       **/
      NotCrossChainTransferableCurrency: AugmentedError<ApiType>;
      /**
       * Not supported MultiLocation
       **/
      NotSupportedMultiLocation: AugmentedError<ApiType>;
      /**
       * The number of assets to be sent is over the maximum.
       **/
      TooManyAssetsBeingSent: AugmentedError<ApiType>;
      /**
       * The message's weight could not be determined.
       **/
      UnweighableMessage: AugmentedError<ApiType>;
      /**
       * XCM execution failed.
       **/
      XcmExecutionFailed: AugmentedError<ApiType>;
      /**
       * The transfering asset amount is zero.
       **/
      ZeroAmount: AugmentedError<ApiType>;
      /**
       * The fee is zero.
       **/
      ZeroFee: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
  } // AugmentedErrors
} // declare module
