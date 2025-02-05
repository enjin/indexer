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
       * The delta cannot be zero.
       **/
      DeltaZero: AugmentedError<ApiType>;
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
       * The issuance cannot be modified since it is already deactivated.
       **/
      IssuanceDeactivated: AugmentedError<ApiType>;
      /**
       * Account liquidity restrictions prevent withdrawal.
       **/
      LiquidityRestrictions: AugmentedError<ApiType>;
      /**
       * Number of freezes exceed `MaxFreezes`.
       **/
      TooManyFreezes: AugmentedError<ApiType>;
      /**
       * Number of holds exceed `VariantCountOf<T::RuntimeHoldReason>`.
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
       * The payment has already been attempted.
       **/
      AlreadyAttempted: AugmentedError<ApiType>;
      /**
       * The spend is not yet eligible for payout.
       **/
      EarlyPayout: AugmentedError<ApiType>;
      /**
       * The balance of the asset kind is not convertible to the balance of the native asset.
       **/
      FailedToConvertBalance: AugmentedError<ApiType>;
      /**
       * The payment has neither failed nor succeeded yet.
       **/
      Inconclusive: AugmentedError<ApiType>;
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
       * No proposal, bounty or spend at that index.
       **/
      InvalidIndex: AugmentedError<ApiType>;
      /**
       * The payout was not yet attempted/claimed.
       **/
      NotAttempted: AugmentedError<ApiType>;
      /**
       * There was some issue with the mechanism of payment.
       **/
      PayoutError: AugmentedError<ApiType>;
      /**
       * Proposal has not been approved.
       **/
      ProposalNotApproved: AugmentedError<ApiType>;
      /**
       * The spend has expired and cannot be claimed.
       **/
      SpendExpired: AugmentedError<ApiType>;
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
       * Prime account is not a member
       **/
      PrimeAccountNotMember: AugmentedError<ApiType>;
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
       * Cannot create a fuel tank with empty rule sets
       **/
      RuleSetsCannotBeEmpty: AugmentedError<ApiType>;
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
       * The signature on a username was not valid.
       **/
      InvalidSignature: AugmentedError<ApiType>;
      /**
       * The provided suffix is too long.
       **/
      InvalidSuffix: AugmentedError<ApiType>;
      /**
       * The target is invalid.
       **/
      InvalidTarget: AugmentedError<ApiType>;
      /**
       * The username does not meet the requirements.
       **/
      InvalidUsername: AugmentedError<ApiType>;
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
       * The authority cannot allocate any more usernames.
       **/
      NoAllocation: AugmentedError<ApiType>;
      /**
       * No identity found.
       **/
      NoIdentity: AugmentedError<ApiType>;
      /**
       * The username cannot be forcefully removed because it can still be accepted.
       **/
      NotExpired: AugmentedError<ApiType>;
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
       * The sender does not have permission to issue a username.
       **/
      NotUsernameAuthority: AugmentedError<ApiType>;
      /**
       * The requested username does not exist.
       **/
      NoUsername: AugmentedError<ApiType>;
      /**
       * Setting this username requires a signature, but none was provided.
       **/
      RequiresSignature: AugmentedError<ApiType>;
      /**
       * Sticky judgement.
       **/
      StickyJudgement: AugmentedError<ApiType>;
      /**
       * Maximum amount of registrars reached. Cannot add any more.
       **/
      TooManyRegistrars: AugmentedError<ApiType>;
      /**
       * Too many subs-accounts.
       **/
      TooManySubAccounts: AugmentedError<ApiType>;
      /**
       * The username is already taken.
       **/
      UsernameTaken: AugmentedError<ApiType>;
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
       * The seller cannot accept their own counter offer
       **/
      CannotAcceptOwnCounterOffer: AugmentedError<ApiType>;
      /**
       * Cannot cancel auction after end block
       **/
      CannotCancelAuctionAfterEndBlock: AugmentedError<ApiType>;
      /**
       * Cannot cancel auction with active bid
       **/
      CannotCancelAuctionWithBid: AugmentedError<ApiType>;
      /**
       * Cannot place a counter offer on own offer
       **/
      CannotCounterSelf: AugmentedError<ApiType>;
      /**
       * The counter offer already exists
       **/
      CounterOfferExists: AugmentedError<ApiType>;
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
       * The expiration block must be in the future
       **/
      InvalidExpiration: AugmentedError<ApiType>;
      /**
       * The fee side does not match the listing type
       **/
      InvalidFeeSide: AugmentedError<ApiType>;
      /**
       * The price is invalid
       **/
      InvalidPrice: AugmentedError<ApiType>;
      /**
       * A listing with this id already exists
       **/
      ListingAlreadyExists: AugmentedError<ApiType>;
      /**
       * The listing is expired and cannot be filled
       **/
      ListingExpired: AugmentedError<ApiType>;
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
       * Max number of pending listing ids has been exceeded
       **/
      MaxPendingListingIdsExceeded: AugmentedError<ApiType>;
      /**
       * The max rounding error was exceeded
       **/
      MaxRoundingErrorExceeded: AugmentedError<ApiType>;
      /**
       * A counter offer is required but does not exist
       **/
      NoCounterOffer: AugmentedError<ApiType>;
      /**
       * Neither the make side or the take side of the listing is considered a currency
       **/
      NoCurrency: AugmentedError<ApiType>;
      /**
       * The caller does not have permission for this operation
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * The listing is not expired and cannot be removed
       **/
      NotExpired: AugmentedError<ApiType>;
      /**
       * Offers do not support partial fills
       **/
      PartialFillNotAllowed: AugmentedError<ApiType>;
      /**
       * The take value is under the minimum requirement
       **/
      ReceivedValueUnderMinimum: AugmentedError<ApiType>;
      /**
       * Take asset is frozen
       **/
      TakeAssetFrozen: AugmentedError<ApiType>;
      /**
       * Transfer params could not be created
       **/
      TransferParamCreationFailed: AugmentedError<ApiType>;
      /**
       * the order cannot be filled
       **/
      UnableToFill: AugmentedError<ApiType>;
      /**
       * The passed `current_price` does not match the actual current price
       **/
      WrongCurrentPrice: AugmentedError<ApiType>;
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
    messageQueue: {
      /**
       * The message was already processed and cannot be processed again.
       **/
      AlreadyProcessed: AugmentedError<ApiType>;
      /**
       * There is temporarily not enough weight to continue servicing messages.
       **/
      InsufficientWeight: AugmentedError<ApiType>;
      /**
       * The referenced message could not be found.
       **/
      NoMessage: AugmentedError<ApiType>;
      /**
       * Page to be reaped does not exist.
       **/
      NoPage: AugmentedError<ApiType>;
      /**
       * Page is not reapable because it has items remaining to be processed and is not old
       * enough.
       **/
      NotReapable: AugmentedError<ApiType>;
      /**
       * The message is queued for future execution.
       **/
      Queued: AugmentedError<ApiType>;
      /**
       * The queue is paused and no message can be executed from it.
       * 
       * This can change at any time and may resolve in the future by re-trying.
       **/
      QueuePaused: AugmentedError<ApiType>;
      /**
       * Another call is in progress and needs to finish before this call can happen.
       **/
      RecursiveDisallowed: AugmentedError<ApiType>;
      /**
       * This message is temporarily unprocessable.
       * 
       * Such errors are expected, but not guaranteed, to resolve themselves eventually through
       * retrying.
       **/
      TemporarilyUnprocessable: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    migrations: {
      /**
       * The operation cannot complete since some MBMs are ongoing.
       **/
      Ongoing: AugmentedError<ApiType>;
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
       * When a depositor is used to mint a token, it is disallowed to also add to the token
       * account deposit
       **/
      AccountDepositNotAllowedWithDepositor: AugmentedError<ApiType>;
      /**
       * The account already owns the collection. Transferring to self is not allowed.
       **/
      AlreadyCollectionOwner: AugmentedError<ApiType>;
      /**
       * Tried to set an expiration that has already passed
       **/
      AlreadyExpired: AugmentedError<ApiType>;
      /**
       * An amount of zero was used when it's not allowed
       **/
      AmountZero: AugmentedError<ApiType>;
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
       * Conflicting Location for an AssetId
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
       * The token is not compatible with this operation
       **/
      IncompatibleToken: AugmentedError<ApiType>;
      /**
       * Not enough allowance to perform the operation
       **/
      InsufficientAllowance: AugmentedError<ApiType>;
      /**
       * The operation would cause the deposit to drop below the minimum allowed
       **/
      InsufficientDeposit: AugmentedError<ApiType>;
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
       * The balance is locked or restricted
       **/
      LiquidityRestrictions: AugmentedError<ApiType>;
      /**
       * The max number of approvals for this account was exceeded
       **/
      MaxApprovalsExceeded: AugmentedError<ApiType>;
      /**
       * Decimal count is higher than the maximum
       **/
      MaxDecimalCountExceeded: AugmentedError<ApiType>;
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
       * The collection has no pending transfer
       **/
      NoPendingCollectionTransfer: AugmentedError<ApiType>;
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
       * Could not check-out the assets for teleportation to the destination chain.
       **/
      CannotCheckOutTeleport: AugmentedError<ApiType>;
      /**
       * Could not re-anchor the assets to declare the fees for the destination chain.
       **/
      CannotReanchor: AugmentedError<ApiType>;
      /**
       * The destination `Location` provided cannot be inverted.
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
       * Invalid non-concrete asset.
       **/
      InvalidAssetNotConcrete: AugmentedError<ApiType>;
      /**
       * Invalid asset, reserve chain could not be determined for it.
       **/
      InvalidAssetUnknownReserve: AugmentedError<ApiType>;
      /**
       * Invalid asset, do not support remote asset reserves with different fees reserves.
       **/
      InvalidAssetUnsupportedReserve: AugmentedError<ApiType>;
      /**
       * Origin is invalid for sending.
       **/
      InvalidOrigin: AugmentedError<ApiType>;
      /**
       * Local XCM execution incomplete.
       **/
      LocalExecutionIncomplete: AugmentedError<ApiType>;
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
       * There was some other issue (i.e. not to do with routing) in sending the message.
       * Perhaps a lack of space for buffering the message.
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
       * Too many assets with different reserve locations have been attempted for transfer.
       **/
      TooManyReserves: AugmentedError<ApiType>;
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
       * Too few hashes were requested to be upgraded (i.e. zero).
       **/
      TooFew: AugmentedError<ApiType>;
      /**
       * More than `MAX_HASH_UPGRADE_BULK_COUNT` hashes were requested to be upgraded at once.
       **/
      TooMany: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    proxy: {
      /**
       * Account is already a proxy.
       **/
      Duplicate: AugmentedError<ApiType>;
      /**
       * Call may not be made by proxy because it may escalate its privileges.
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * Cannot add self as proxy.
       **/
      NoSelfProxy: AugmentedError<ApiType>;
      /**
       * Proxy registration not found.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * Sender is not a proxy of the account to be proxied.
       **/
      NotProxy: AugmentedError<ApiType>;
      /**
       * There are too many proxies registered or too many announcements pending.
       **/
      TooMany: AugmentedError<ApiType>;
      /**
       * Announcement, if made at all, was made too recently.
       **/
      Unannounced: AugmentedError<ApiType>;
      /**
       * A call which is incompatible with the proxy type's filter was attempted.
       **/
      Unproxyable: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    safeMode: {
      /**
       * The account already has a deposit reserved and can therefore not enter or extend again.
       **/
      AlreadyDeposited: AugmentedError<ApiType>;
      /**
       * This deposit cannot be released yet.
       **/
      CannotReleaseYet: AugmentedError<ApiType>;
      /**
       * An error from the underlying `Currency`.
       **/
      CurrencyError: AugmentedError<ApiType>;
      /**
       * The safe-mode is (already or still) entered.
       **/
      Entered: AugmentedError<ApiType>;
      /**
       * The safe-mode is (already or still) exited.
       **/
      Exited: AugmentedError<ApiType>;
      /**
       * There is no balance reserved.
       **/
      NoDeposit: AugmentedError<ApiType>;
      /**
       * This functionality of the pallet is disabled by the configuration.
       **/
      NotConfigured: AugmentedError<ApiType>;
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
       * A multi-block migration is ongoing and prevents the current code from being replaced.
       **/
      MultiBlockMigrationsOngoing: AugmentedError<ApiType>;
      /**
       * Suicide called when the account has non-default composite data.
       **/
      NonDefaultComposite: AugmentedError<ApiType>;
      /**
       * There is a non-zero reference count preventing the account from being purged.
       **/
      NonZeroRefCount: AugmentedError<ApiType>;
      /**
       * No upgrade authorized.
       **/
      NothingAuthorized: AugmentedError<ApiType>;
      /**
       * The specification version is not allowed to decrease between the current runtime
       * and the new runtime.
       **/
      SpecVersionNeedsToIncrease: AugmentedError<ApiType>;
      /**
       * The submitted code is not authorized.
       **/
      Unauthorized: AugmentedError<ApiType>;
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
       * Prime account is not a member
       **/
      PrimeAccountNotMember: AugmentedError<ApiType>;
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
       * The execution is already resumed.
       **/
      AlreadyResumed: AugmentedError<ApiType>;
      /**
       * The execution is already suspended.
       **/
      AlreadySuspended: AugmentedError<ApiType>;
      /**
       * Setting the queue config failed since one of its values was invalid.
       **/
      BadQueueConfig: AugmentedError<ApiType>;
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
       * The specified index does not exist in a Assets struct.
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
       * The destination `Location` provided cannot be inverted.
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
       * The Asset is invalid.
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
       * Not supported Location
       **/
      NotSupportedLocation: AugmentedError<ApiType>;
      /**
       * Asset transfer is limited by RateLimiter.
       **/
      RateLimited: AugmentedError<ApiType>;
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
