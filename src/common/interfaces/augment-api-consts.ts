// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/consts';

import type { ApiTypes, AugmentedConst } from '@polkadot/api-base/types';
import type { Bytes, Null, Option, U8aFixed, bool, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { Codec } from '@polkadot/types-codec/types';
import type { AccountId32, Perbill, Permill } from '@polkadot/types/interfaces/runtime';
import type { EpCoreFrameTypesPoolAccountIds, EpMultiTokensNativeAssetInfo, EpMultiTokensTokenAssetId, FrameSupportPalletId, FrameSystemLimitsBlockLength, FrameSystemLimitsBlockWeights, SpVersionRuntimeVersion, SpWeightsRuntimeDbWeight, SpWeightsWeightV2Weight, StagingXcmV4Location } from '@polkadot/types/lookup';

export type __AugmentedConst<ApiType extends ApiTypes> = AugmentedConst<ApiType>;

declare module '@polkadot/api-base/types/consts' {
  interface AugmentedConsts<ApiType extends ApiTypes> {
    balances: {
      /**
       * The minimum amount required to keep an account open. MUST BE GREATER THAN ZERO!
       * 
       * If you *really* need it to be zero, you can enable the feature `insecure_zero_ed` for
       * this pallet. However, you do so at your own risk: this will open up a major DoS vector.
       * In case you have multiple sources of provider references, you may also get unexpected
       * behaviour if you set this to zero.
       * 
       * Bottom line: Do yourself a favour and make it at least one!
       **/
      existentialDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The maximum number of individual freeze locks that can exist on an account at any time.
       **/
      maxFreezes: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of locks that should exist on an account.
       * Not strictly enforced, but used for weight estimation.
       **/
      maxLocks: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of named reserves that can exist on an account.
       **/
      maxReserves: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    bounties: {
      /**
       * The amount held on deposit for placing a bounty proposal.
       **/
      bountyDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The delay period for which a bounty beneficiary need to wait before claim the payout.
       **/
      bountyDepositPayoutDelay: u32 & AugmentedConst<ApiType>;
      /**
       * Bounty duration in blocks.
       **/
      bountyUpdatePeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Minimum value for a bounty.
       **/
      bountyValueMinimum: u128 & AugmentedConst<ApiType>;
      /**
       * Maximum amount of funds that should be placed in a deposit for making a proposal.
       **/
      curatorDepositMax: Option<u128> & AugmentedConst<ApiType>;
      /**
       * Minimum amount of funds that should be placed in a deposit for making a proposal.
       **/
      curatorDepositMin: Option<u128> & AugmentedConst<ApiType>;
      /**
       * The curator deposit is calculated as a percentage of the curator fee.
       * 
       * This deposit has optional upper and lower bounds with `CuratorDepositMax` and
       * `CuratorDepositMin`.
       **/
      curatorDepositMultiplier: Permill & AugmentedConst<ApiType>;
      /**
       * The amount held on deposit per byte within the tip report reason or bounty description.
       **/
      dataDepositPerByte: u128 & AugmentedConst<ApiType>;
      /**
       * Maximum acceptable reason length.
       * 
       * Benchmarks depend on this value, be sure to update weights file when changing this value
       **/
      maximumReasonLength: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    claims: {
      /**
       * The [`AccountId`](frame_system::Config::AccountId) that holds ENJ2 to be
       * distributed on Claim
       **/
      claimDistributorAccountId: AccountId32 & AugmentedConst<ApiType>;
      /**
       * Maximum number of claims that can be requested in a batch due to block limit
       **/
      maxBatchAccounts: u32 & AugmentedConst<ApiType>;
      /**
       * Minimum Delay in days for claiming ENJ
       **/
      minClaimDelay: u32 & AugmentedConst<ApiType>;
      /**
       * Prefix added to messages
       **/
      prefix: Bytes & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    collatorStaking: {
      /**
       * The number of rounds that have to pass after the collator has requested
       * unbonding for the bonded stake to be released.
       **/
      collatorExitThreshold: u32 & AugmentedConst<ApiType>;
      /**
       * The [`AccountId`](frame_system::Config::AccountId) for the collator pool
       **/
      collatorPoolAccountId: AccountId32 & AugmentedConst<ApiType>;
      /**
       * The default minimum collator stake amount
       **/
      defaultMinCollatorStake: u128 & AugmentedConst<ApiType>;
      /**
       * The [`AccountId`](frame_system::Config::AccountId) for the fee distributor
       **/
      feeDistributorAccountId: AccountId32 & AugmentedConst<ApiType>;
      /**
       * The number of selected collators
       **/
      maxCandidates: u32 & AugmentedConst<ApiType>;
      /**
       * The number of selected collators
       **/
      maxCollators: u32 & AugmentedConst<ApiType>;
      /**
       * Maximum number of invulnerables.
       **/
      maxInvulnerables: u32 & AugmentedConst<ApiType>;
      /**
       * Maximum nominators per collator
       **/
      maxNominationsPerCollator: u32 & AugmentedConst<ApiType>;
      /**
       * Minimum nomination stake required
       **/
      minNominationStakeAmount: u128 & AugmentedConst<ApiType>;
      /**
       * The total number of blocks within a session
       **/
      sessionPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    communityPool: {
      /**
       * Percentage of spare funds (if any) that are burnt per spend period.
       **/
      burn: Permill & AugmentedConst<ApiType>;
      /**
       * The maximum number of approvals that can wait in the spending queue.
       * 
       * NOTE: This parameter is also used within the Bounties Pallet extension if enabled.
       **/
      maxApprovals: u32 & AugmentedConst<ApiType>;
      /**
       * The treasury's pallet id, used for deriving its sovereign account ID.
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * The period during which an approved treasury spend has to be claimed.
       **/
      payoutPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Fraction of a proposal's value that should be bonded in order to place the proposal.
       * An accepted proposal gets these back. A rejected proposal does not.
       **/
      proposalBond: Permill & AugmentedConst<ApiType>;
      /**
       * Maximum amount of funds that should be placed in a deposit for making a proposal.
       **/
      proposalBondMaximum: Option<u128> & AugmentedConst<ApiType>;
      /**
       * Minimum amount of funds that should be placed in a deposit for making a proposal.
       **/
      proposalBondMinimum: u128 & AugmentedConst<ApiType>;
      /**
       * Period between successive spends.
       **/
      spendPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    council: {
      /**
       * The maximum weight of a dispatch call that can be proposed and executed.
       **/
      maxProposalWeight: SpWeightsWeightV2Weight & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    democracy: {
      /**
       * Period in blocks where an external proposal may not be re-submitted after being vetoed.
       **/
      cooloffPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * The period between a proposal being approved and enacted.
       * 
       * It should generally be a little more than the unstake period to ensure that
       * voting stakers have an opportunity to remove themselves from the system in the case
       * where they are on the losing side of a vote.
       **/
      enactmentPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Minimum voting period allowed for a fast-track referendum.
       **/
      fastTrackVotingPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Indicator for whether an emergency origin is even allowed to happen. Some chains may
       * want to set this permanently to `false`, others may want to condition it on things such
       * as an upgrade having happened recently.
       **/
      instantAllowed: bool & AugmentedConst<ApiType>;
      /**
       * How often (in blocks) new public referenda are launched.
       **/
      launchPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of items which can be blacklisted.
       **/
      maxBlacklisted: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of deposits a public proposal may have at any time.
       **/
      maxDeposits: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of public proposals that can exist at any time.
       **/
      maxProposals: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of votes for an account.
       * 
       * Also used to compute weight, an overly big value can
       * lead to extrinsic with very big weight: see `delegate` for instance.
       **/
      maxVotes: u32 & AugmentedConst<ApiType>;
      /**
       * The minimum amount to be used as a deposit for a public referendum proposal.
       **/
      minimumDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The minimum period of vote locking.
       * 
       * It should be no shorter than enactment period to ensure that in the case of an approval,
       * those successful voters are locked into the consequences that their votes entail.
       **/
      voteLockingPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * How often (in blocks) to check for new votes.
       **/
      votingPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    extrinsicPause: {
      /**
       * Max number of characters in pallet or extrinsic name.
       **/
      maxNameLength: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    fuelTanks: {
      /**
       * Deposit for creating an account
       **/
      accountCreationDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The Levy applied to all transactions in Matrix.
       **/
      levy: Perbill & AugmentedConst<ApiType>;
      /**
       * value of a unit of the independant variable in EFI for the levy discount according to
       * f(x) = (1/2)^x. Cannot be 0.
       **/
      levyScale: u32 & AugmentedConst<ApiType>;
      /**
       * Max length of data a rule can store per account
       **/
      maxAccountRuleDataLength: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of accounts for batch operations
       **/
      maxBatchAccounts: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of permitted calls
       **/
      maxCallFilters: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of rule sets per fuel tank
       **/
      maxCallSize: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum length for extrinsics for PermittedExtrinsic rule
       **/
      maxExtrinsicNameLength: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum length for fuel tank name
       **/
      maxFuelTankNameLength: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of extrinsics to allow for PermittedExtrinsic rule
       **/
      maxPermittedExtrinsicLength: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of rule sets per fuel tank
       **/
      maxRuleSets: u32 & AugmentedConst<ApiType>;
      /**
       * Maximum number of rules in a ruleset
       **/
      maxRulesPerSet: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of user history that can be stored
       **/
      maxUserHistorySize: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of whitelisted callers per fuel tank
       **/
      maxWhitelistedCallers: u32 & AugmentedConst<ApiType>;
      /**
       * Maximum number of whitelisted collections for a fuel tank
       **/
      maxWhitelistedCollections: u32 & AugmentedConst<ApiType>;
      /**
       * The identifier used for currency reserves
       **/
      reserveIdentifier: U8aFixed & AugmentedConst<ApiType>;
      /**
       * The salt used for address generation
       **/
      salt: U8aFixed & AugmentedConst<ApiType>;
      /**
       * Deposit for creating a new fuel tank
       **/
      tankCreationDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    identity: {
      /**
       * The amount held on deposit for a registered identity.
       **/
      basicDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The amount held on deposit per encoded byte for a registered identity.
       **/
      byteDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * Maxmimum number of registrars allowed in the system. Needed to bound the complexity
       * of, e.g., updating judgements.
       **/
      maxRegistrars: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of sub-accounts allowed per identified account.
       **/
      maxSubAccounts: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum length of a suffix.
       **/
      maxSuffixLength: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum length of a username, including its suffix and any system-added delimiters.
       **/
      maxUsernameLength: u32 & AugmentedConst<ApiType>;
      /**
       * The number of blocks within which a username grant must be accepted.
       **/
      pendingUsernameExpiration: u32 & AugmentedConst<ApiType>;
      /**
       * The amount held on deposit for a registered subaccount. This should account for the fact
       * that one storage item's value will increase by the size of an account ID, and there will
       * be another trie item whose value is the size of an account ID plus 32 bytes.
       **/
      subAccountDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    marketplace: {
      /**
       * The deposit for creating a counter offer
       **/
      counterOfferDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The delay before a listing is considered active
       **/
      listingActiveDelay: u32 & AugmentedConst<ApiType>;
      /**
       * The deposit for creating a listing
       **/
      listingDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * Max number of listing ids in [`PendingListingIds`]
       **/
      maxPendingListingIds: u32 & AugmentedConst<ApiType>;
      /**
       * The max amount that can be lost due to rounding before failing
       **/
      maxRoundingError: u128 & AugmentedConst<ApiType>;
      /**
       * Max length of salt used when creating listings and bids
       **/
      maxSaltLength: u32 & AugmentedConst<ApiType>;
      /**
       * The percentage the minimum bid in an auction must increase by
       **/
      minimumBidIncreasePercentage: Perbill & AugmentedConst<ApiType>;
      /**
       * ID used by the pallet for making reservations
       **/
      reserveIdentifier: U8aFixed & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    matrixUtility: {
      /**
       * The limit on the number of batched calls.
       **/
      batchedCallsLimit: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    matrixXcm: {
      /**
       * ID of the native currency of the chain (ENJ).
       **/
      nativeCurrencyId: EpMultiTokensTokenAssetId & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    messageQueue: {
      /**
       * The size of the page; this implies the maximum message size which can be sent.
       * 
       * A good value depends on the expected message sizes, their weights, the weight that is
       * available for processing them and the maximal needed message size. The maximal message
       * size is slightly lower than this as defined by [`MaxMessageLenOf`].
       **/
      heapSize: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of stale pages (i.e. of overweight messages) allowed before culling
       * can happen. Once there are more stale pages than this, then historical pages may be
       * dropped, even if they contain unprocessed overweight messages.
       **/
      maxStale: u32 & AugmentedConst<ApiType>;
      /**
       * The amount of weight (if any) which should be provided to the message queue for
       * servicing enqueued items.
       * 
       * This may be legitimately `None` in the case that you will call
       * `ServiceQueues::service_queues` manually.
       **/
      serviceWeight: Option<SpWeightsWeightV2Weight> & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    migrations: {
      /**
       * The maximal length of an encoded cursor.
       * 
       * A good default needs to selected such that no migration will ever have a cursor with MEL
       * above this limit. This is statically checked in `integrity_test`.
       **/
      cursorMaxLen: u32 & AugmentedConst<ApiType>;
      /**
       * The maximal length of an encoded identifier.
       * 
       * A good default needs to selected such that no migration will ever have an identifier
       * with MEL above this limit. This is statically checked in `integrity_test`.
       **/
      identifierMaxLen: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    multisig: {
      /**
       * The base amount of currency needed to reserve for creating a multisig execution or to
       * store a dispatch call for later.
       * 
       * This is held for an additional storage item whose value size is
       * `4 + sizeof((BlockNumber, Balance, AccountId))` bytes and whose key size is
       * `32 + sizeof(AccountId)` bytes.
       **/
      depositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The amount of currency needed per unit threshold when creating a multisig execution.
       * 
       * This is held for adding 32 bytes more into a pre-existing storage value.
       **/
      depositFactor: u128 & AugmentedConst<ApiType>;
      /**
       * The maximum amount of signatories allowed in the multisig.
       **/
      maxSignatories: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    multiTokens: {
      /**
       * The base deposit required for setting an attribute
       **/
      attributeDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * Additional deposit per byte for setting an attribute
       **/
      attributeDepositPerByte: u128 & AugmentedConst<ApiType>;
      /**
       * The prefix of the message used to claim collections
       **/
      claimCollectionsPrefix: Bytes & AugmentedConst<ApiType>;
      /**
       * The prefix of the message used to claim tokens
       **/
      claimTokensPrefix: Bytes & AugmentedConst<ApiType>;
      /**
       * Amount of [`Balance`](BalanceOf) reserved to create a collection
       **/
      collectionCreationDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The account id that provides the existential deposit when claiming collections
       **/
      ethereumMigrationAccountId: AccountId32 & AugmentedConst<ApiType>;
      /**
       * The max number of attributes to set in one call
       **/
      maxBatchAttributesPerCall: u32 & AugmentedConst<ApiType>;
      /**
       * Max number of collections that can be claimed by an account
       **/
      maxClaimableCollectionsPerAccount: u32 & AugmentedConst<ApiType>;
      /**
       * Max number of decimals allowed for a token
       **/
      maxDecimalCount: u8 & AugmentedConst<ApiType>;
      /**
       * The maximum number of explicit royalty currencies
       **/
      maxExplicitRoyaltyCurrencies: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum length of the idle operation queue
       **/
      maxIdleOperationQueueLength: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum weight of the idle operation queue
       **/
      maxIdleOperationQueueWeight: SpWeightsWeightV2Weight & AugmentedConst<ApiType>;
      /**
       * The maximum number of locks that can exist on a token account
       **/
      maxLocks: u32 & AugmentedConst<ApiType>;
      /**
       * The max number of operators a [`TokenAccount`] and an [`CollectionAccount`] can have
       **/
      maxOperatorsPerAccount: u32 & AugmentedConst<ApiType>;
      /**
       * The max number of recipients allowed in a batch mint
       **/
      maxRecipientsPerBatchMint: u32 & AugmentedConst<ApiType>;
      /**
       * The max number of recipients allowed in a batch transfer
       **/
      maxRecipientsPerBatchTransfer: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of named reserves that can exist on an account
       **/
      maxReserves: u32 & AugmentedConst<ApiType>;
      /**
       * The max number of token groups allowed per token
       **/
      maxTokenGroupsPerToken: u32 & AugmentedConst<ApiType>;
      /**
       * The max number of tokens allowed in a batch transfer
       **/
      maxTokensPerBatchTransfer: u32 & AugmentedConst<ApiType>;
      /**
       * The account that will reimburse reserves for accounts that have a higher deposit during
       * the migration
       **/
      migrationReimburser: AccountId32 & AugmentedConst<ApiType>;
      /**
       * The [`NativeAssetInfo`](ep_multi_tokens::NativeAssetInfo) for this pallet
       **/
      nativeAssetInfo: EpMultiTokensNativeAssetInfo & AugmentedConst<ApiType>;
      /**
       * The id used for making reservations with this pallet
       **/
      reserveIdentifier: U8aFixed & AugmentedConst<ApiType>;
      /**
       * The amount of [`Balance`](BalanceOf) that must be reserved for a token account to be
       * maintained
       **/
      tokenAccountDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * Max length of name stored in [`TokenMetadata`]
       **/
      tokenMetadataMaxNameLength: u32 & AugmentedConst<ApiType>;
      /**
       * Max length of symbol stored in [`TokenMetadata`]
       **/
      tokenMetadataMaxSymbolLength: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    parachainSystem: {
      /**
       * Returns the parachain ID we are running with.
       **/
      selfParaId: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    pools: {
      /**
       * The [`AccountId`](frame_system::Config::AccountId) that holds fees until they are
       * distributed
       **/
      feeDistributorAccountId: AccountId32 & AugmentedConst<ApiType>;
      /**
       * The [`AccountId`](frame_system::Config::AccountId) for each pool
       **/
      poolAccountIds: EpCoreFrameTypesPoolAccountIds & AugmentedConst<ApiType>;
      /**
       * The number of pools
       **/
      poolCount: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    proxy: {
      /**
       * The base amount of currency needed to reserve for creating an announcement.
       * 
       * This is held when a new storage item holding a `Balance` is created (typically 16
       * bytes).
       **/
      announcementDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The amount of currency needed per announcement made.
       * 
       * This is held for adding an `AccountId`, `Hash` and `BlockNumber` (typically 68 bytes)
       * into a pre-existing storage value.
       **/
      announcementDepositFactor: u128 & AugmentedConst<ApiType>;
      /**
       * The maximum amount of time-delayed announcements that are allowed to be pending.
       **/
      maxPending: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum amount of proxies allowed for a single account.
       **/
      maxProxies: u32 & AugmentedConst<ApiType>;
      /**
       * The base amount of currency needed to reserve for creating a proxy.
       * 
       * This is held for an additional storage item whose value size is
       * `sizeof(Balance)` bytes and whose key size is `sizeof(AccountId)` bytes.
       **/
      proxyDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The amount of currency needed per proxy added.
       * 
       * This is held for adding 32 bytes plus an instance of `ProxyType` more into a
       * pre-existing storage value. Thus, when configuring `ProxyDepositFactor` one should take
       * into account `32 + proxy_type.encode().len()` bytes of data.
       **/
      proxyDepositFactor: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    safeMode: {
      /**
       * The amount that will be reserved upon calling [`Pallet::enter`].
       * 
       * `None` disallows permissionlessly enabling the safe-mode and is a sane default.
       **/
      enterDepositAmount: Option<u128> & AugmentedConst<ApiType>;
      /**
       * For how many blocks the safe-mode will be entered by [`Pallet::enter`].
       **/
      enterDuration: u32 & AugmentedConst<ApiType>;
      /**
       * The amount that will be reserved upon calling [`Pallet::extend`].
       * 
       * `None` disallows permissionlessly extending the safe-mode and is a sane default.
       **/
      extendDepositAmount: Option<u128> & AugmentedConst<ApiType>;
      /**
       * For how many blocks the safe-mode can be extended by each [`Pallet::extend`] call.
       * 
       * This does not impose a hard limit as the safe-mode can be extended multiple times.
       **/
      extendDuration: u32 & AugmentedConst<ApiType>;
      /**
       * The minimal duration a deposit will remain reserved after safe-mode is entered or
       * extended, unless [`Pallet::force_release_deposit`] is successfully called sooner.
       * 
       * Every deposit is tied to a specific activation or extension, thus each deposit can be
       * released independently after the delay for it has passed.
       * 
       * `None` disallows permissionlessly releasing the safe-mode deposits and is a sane
       * default.
       **/
      releaseDelay: Option<u32> & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    scheduler: {
      /**
       * The maximum weight that may be scheduled per block for any dispatchables.
       **/
      maximumWeight: SpWeightsWeightV2Weight & AugmentedConst<ApiType>;
      /**
       * The maximum number of scheduled calls in the queue for a single block.
       * 
       * NOTE:
       * + Dependent pallets' benchmarks might require a higher limit for the setting. Set a
       * higher limit under `runtime-benchmarks` feature.
       **/
      maxScheduledPerBlock: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    system: {
      /**
       * Maximum number of block number to block hash mappings to keep (oldest pruned first).
       **/
      blockHashCount: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum length of a block (in bytes).
       **/
      blockLength: FrameSystemLimitsBlockLength & AugmentedConst<ApiType>;
      /**
       * Block & extrinsics weights: base values and limits.
       **/
      blockWeights: FrameSystemLimitsBlockWeights & AugmentedConst<ApiType>;
      /**
       * The weight of runtime database operations the runtime can invoke.
       **/
      dbWeight: SpWeightsRuntimeDbWeight & AugmentedConst<ApiType>;
      /**
       * The designated SS58 prefix of this chain.
       * 
       * This replaces the "ss58Format" property declared in the chain spec. Reason is
       * that the runtime should know about the prefix in order to make use of it as
       * an identifier of the chain.
       **/
      ss58Prefix: u16 & AugmentedConst<ApiType>;
      /**
       * Get the chain's in-code version.
       **/
      version: SpVersionRuntimeVersion & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    technicalCommittee: {
      /**
       * The maximum weight of a dispatch call that can be proposed and executed.
       **/
      maxProposalWeight: SpWeightsWeightV2Weight & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    timestamp: {
      /**
       * The minimum period between blocks.
       * 
       * Be aware that this is different to the *expected* period that the block production
       * apparatus provides. Your chosen consensus system will generally work with this to
       * determine a sensible block time. For example, in the Aura pallet it will be double this
       * period on default settings.
       **/
      minimumPeriod: u64 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    transactionPayment: {
      /**
       * A fee multiplier for `Operational` extrinsics to compute "virtual tip" to boost their
       * `priority`
       * 
       * This value is multiplied by the `final_fee` to obtain a "virtual tip" that is later
       * added to a tip component in regular `priority` calculations.
       * It means that a `Normal` transaction can front-run a similarly-sized `Operational`
       * extrinsic (with no tip), by including a tip value greater than the virtual tip.
       * 
       * ```rust,ignore
       * // For `Normal`
       * let priority = priority_calc(tip);
       * 
       * // For `Operational`
       * let virtual_tip = (inclusion_fee + tip) * OperationalFeeMultiplier;
       * let priority = priority_calc(tip + virtual_tip);
       * ```
       * 
       * Note that since we use `final_fee` the multiplier applies also to the regular `tip`
       * sent with the transaction. So, not only does the transaction get a priority bump based
       * on the `inclusion_fee`, but we also amplify the impact of tips applied to `Operational`
       * transactions.
       **/
      operationalFeeMultiplier: u8 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    utility: {
      /**
       * The limit on the number of batched calls.
       **/
      batchedCallsLimit: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    xcmpQueue: {
      /**
       * The maximum number of inbound XCMP channels that can be suspended simultaneously.
       * 
       * Any further channel suspensions will fail and messages may get dropped without further
       * notice. Choosing a high value (1000) is okay; the trade-off that is described in
       * [`InboundXcmpSuspended`] still applies at that scale.
       **/
      maxInboundSuspended: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    xTokens: {
      /**
       * Base XCM weight.
       * 
       * The actually weight for an XCM message is `T::BaseXcmWeight +
       * T::Weigher::weight(&msg)`.
       **/
      baseXcmWeight: SpWeightsWeightV2Weight & AugmentedConst<ApiType>;
      /**
       * The id of the RateLimiter.
       **/
      rateLimiterId: Null & AugmentedConst<ApiType>;
      /**
       * Self chain location.
       **/
      selfLocation: StagingXcmV4Location & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
  } // AugmentedConsts
} // declare module
