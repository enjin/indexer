'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.disabledValidators =
    exports.counterForVirtualStakers =
    exports.virtualStakers =
    exports.maxStakedRewards =
    exports.claimedRewards =
    exports.erasStakersPaged =
    exports.erasStakersOverview =
    exports.chillThreshold =
    exports.offendingValidators =
    exports.currentPlannedSession =
    exports.spanSlash =
    exports.slashingSpans =
    exports.nominatorSlashInEra =
    exports.validatorSlashInEra =
    exports.bondedEras =
    exports.unappliedSlashes =
    exports.canceledSlashPayout =
    exports.slashRewardFraction =
    exports.forceEra =
    exports.erasTotalStake =
    exports.erasRewardPoints =
    exports.erasValidatorReward =
    exports.erasValidatorPrefs =
    exports.erasStakersClipped =
    exports.erasStakers =
    exports.erasStartSessionIndex =
    exports.activeEra =
    exports.currentEra =
    exports.maxNominatorsCount =
    exports.counterForNominators =
    exports.nominators =
    exports.maxValidatorsCount =
    exports.counterForValidators =
    exports.validators =
    exports.payee =
    exports.ledger =
    exports.minCommission =
    exports.minimumActiveStake =
    exports.minValidatorBond =
    exports.minNominatorBond =
    exports.bonded =
    exports.invulnerables =
    exports.minimumValidatorCount =
    exports.validatorCount =
        void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var v100 = require('../v100')
var v1030 = require('../v1030')
var enjinV1032 = require('../enjinV1032')
var enjinV1050 = require('../enjinV1050')
exports.validatorCount = {
    /**
     *  The ideal number of active validators.
     */
    enjinV100: new support_1.StorageType('Staking.ValidatorCount', 'Default', [], support_1.sts.number()),
}
exports.minimumValidatorCount = {
    /**
     *  Minimum number of staking participants before emergency conditions are imposed.
     */
    enjinV100: new support_1.StorageType('Staking.MinimumValidatorCount', 'Default', [], support_1.sts.number()),
}
exports.invulnerables = {
    /**
     *  Any validators that may never be slashed or forcibly kicked. It's a Vec since they're
     *  easy to initialize and the performance hit is minimal (we expect no more than four
     *  invulnerables) and restricted to testnets.
     */
    enjinV100: new support_1.StorageType(
        'Staking.Invulnerables',
        'Default',
        [],
        support_1.sts.array(function () {
            return enjinV100.AccountId32
        })
    ),
}
exports.bonded = {
    /**
     *  Map from all locked "stash" accounts to the controller account.
     *
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    enjinV100: new support_1.StorageType('Staking.Bonded', 'Optional', [enjinV100.AccountId32], enjinV100.AccountId32),
}
exports.minNominatorBond = {
    /**
     *  The minimum active bond to become and maintain the role of a nominator.
     */
    enjinV100: new support_1.StorageType('Staking.MinNominatorBond', 'Default', [], support_1.sts.bigint()),
}
exports.minValidatorBond = {
    /**
     *  The minimum active bond to become and maintain the role of a validator.
     */
    enjinV100: new support_1.StorageType('Staking.MinValidatorBond', 'Default', [], support_1.sts.bigint()),
}
exports.minimumActiveStake = {
    /**
     *  The minimum active nominator stake of the last successful election.
     */
    enjinV100: new support_1.StorageType('Staking.MinimumActiveStake', 'Default', [], support_1.sts.bigint()),
}
exports.minCommission = {
    /**
     *  The minimum amount of commission that validators can set.
     *
     *  If set to `0`, no limit exists.
     */
    enjinV100: new support_1.StorageType('Staking.MinCommission', 'Default', [], enjinV100.Perbill),
}
exports.ledger = {
    /**
     *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
     */
    enjinV100: new support_1.StorageType(
        'Staking.Ledger',
        'Optional',
        [enjinV100.AccountId32],
        enjinV100.StakingLedger
    ),
    /**
     *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
     *
     *  Note: All the reads and mutations to this storage *MUST* be done through the methods exposed
     *  by [`StakingLedger`] to ensure data and lock consistency.
     */
    enjinV1032: new support_1.StorageType(
        'Staking.Ledger',
        'Optional',
        [enjinV1032.AccountId32],
        enjinV1032.StakingLedger
    ),
    /**
     *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
     */
    v100: new support_1.StorageType('Staking.Ledger', 'Optional', [v100.AccountId32], v100.StakingLedger),
    /**
     *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
     *
     *  Note: All the reads and mutations to this storage *MUST* be done through the methods exposed
     *  by [`StakingLedger`] to ensure data and lock consistency.
     */
    v1030: new support_1.StorageType('Staking.Ledger', 'Optional', [v1030.AccountId32], v1030.StakingLedger),
}
exports.payee = {
    /**
     *  Where the reward payment should be made. Keyed by stash.
     *
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    enjinV100: new support_1.StorageType(
        'Staking.Payee',
        'Default',
        [enjinV100.AccountId32],
        enjinV100.RewardDestination
    ),
    /**
     *  Where the reward payment should be made. Keyed by stash.
     *
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    enjinV1032: new support_1.StorageType(
        'Staking.Payee',
        'Optional',
        [enjinV1032.AccountId32],
        enjinV1032.RewardDestination
    ),
    /**
     *  Where the reward payment should be made. Keyed by stash.
     *
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    v100: new support_1.StorageType('Staking.Payee', 'Default', [v100.AccountId32], v100.RewardDestination),
    /**
     *  Where the reward payment should be made. Keyed by stash.
     *
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    v1030: new support_1.StorageType('Staking.Payee', 'Optional', [v1030.AccountId32], v1030.RewardDestination),
}
exports.validators = {
    /**
     *  The map from (wannabe) validator stash key to the preferences of that validator.
     *
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    enjinV100: new support_1.StorageType(
        'Staking.Validators',
        'Default',
        [enjinV100.AccountId32],
        enjinV100.ValidatorPrefs
    ),
}
exports.counterForValidators = {
    /**
     * Counter for the related counted storage map
     */
    enjinV100: new support_1.StorageType('Staking.CounterForValidators', 'Default', [], support_1.sts.number()),
}
exports.maxValidatorsCount = {
    /**
     *  The maximum validator count before we stop allowing new validators to join.
     *
     *  When this value is not set, no limits are enforced.
     */
    enjinV100: new support_1.StorageType('Staking.MaxValidatorsCount', 'Optional', [], support_1.sts.number()),
}
exports.nominators = {
    /**
     *  The map from nominator stash key to their nomination preferences, namely the validators that
     *  they wish to support.
     *
     *  Note that the keys of this storage map might become non-decodable in case the
     *  [`Config::MaxNominations`] configuration is decreased. In this rare case, these nominators
     *  are still existent in storage, their key is correct and retrievable (i.e. `contains_key`
     *  indicates that they exist), but their value cannot be decoded. Therefore, the non-decodable
     *  nominators will effectively not-exist, until they re-submit their preferences such that it
     *  is within the bounds of the newly set `Config::MaxNominations`.
     *
     *  This implies that `::iter_keys().count()` and `::iter().count()` might return different
     *  values for this map. Moreover, the main `::count()` is aligned with the former, namely the
     *  number of keys that exist.
     *
     *  Lastly, if any of the nominators become non-decodable, they can be chilled immediately via
     *  [`Call::chill_other`] dispatchable by anyone.
     *
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    enjinV100: new support_1.StorageType(
        'Staking.Nominators',
        'Optional',
        [enjinV100.AccountId32],
        enjinV100.Nominations
    ),
}
exports.counterForNominators = {
    /**
     * Counter for the related counted storage map
     */
    enjinV100: new support_1.StorageType('Staking.CounterForNominators', 'Default', [], support_1.sts.number()),
}
exports.maxNominatorsCount = {
    /**
     *  The maximum nominator count before we stop allowing new validators to join.
     *
     *  When this value is not set, no limits are enforced.
     */
    enjinV100: new support_1.StorageType('Staking.MaxNominatorsCount', 'Optional', [], support_1.sts.number()),
}
exports.currentEra = {
    /**
     *  The current era index.
     *
     *  This is the latest planned era, depending on how the Session pallet queues the validator
     *  set, it might be active or not.
     */
    enjinV100: new support_1.StorageType('Staking.CurrentEra', 'Optional', [], support_1.sts.number()),
}
exports.activeEra = {
    /**
     *  The active era information, it holds index and start.
     *
     *  The active era is the era being currently rewarded. Validator set of this era must be
     *  equal to [`SessionInterface::validators`].
     */
    enjinV100: new support_1.StorageType('Staking.ActiveEra', 'Optional', [], enjinV100.ActiveEraInfo),
}
exports.erasStartSessionIndex = {
    /**
     *  The session index at which the era start for the last `HISTORY_DEPTH` eras.
     *
     *  Note: This tracks the starting session (i.e. session index when era start being active)
     *  for the eras in `[CurrentEra - HISTORY_DEPTH, CurrentEra]`.
     */
    enjinV100: new support_1.StorageType(
        'Staking.ErasStartSessionIndex',
        'Optional',
        [support_1.sts.number()],
        support_1.sts.number()
    ),
}
exports.erasStakers = {
    /**
     *  Exposure of validator at era.
     *
     *  This is keyed first by the era index to allow bulk deletion and then the stash account.
     *
     *  Is it removed after `HISTORY_DEPTH` eras.
     *  If stakers hasn't been set or has been removed then empty exposure is returned.
     */
    enjinV100: new support_1.StorageType(
        'Staking.ErasStakers',
        'Default',
        [support_1.sts.number(), enjinV100.AccountId32],
        enjinV100.Exposure
    ),
}
exports.erasStakersClipped = {
    /**
     *  Clipped Exposure of validator at era.
     *
     *  This is similar to [`ErasStakers`] but number of nominators exposed is reduced to the
     *  `T::MaxNominatorRewardedPerValidator` biggest stakers.
     *  (Note: the field `total` and `own` of the exposure remains unchanged).
     *  This is used to limit the i/o cost for the nominator payout.
     *
     *  This is keyed fist by the era index to allow bulk deletion and then the stash account.
     *
     *  Is it removed after `HISTORY_DEPTH` eras.
     *  If stakers hasn't been set or has been removed then empty exposure is returned.
     */
    enjinV100: new support_1.StorageType(
        'Staking.ErasStakersClipped',
        'Default',
        [support_1.sts.number(), enjinV100.AccountId32],
        enjinV100.Exposure
    ),
}
exports.erasValidatorPrefs = {
    /**
     *  Similar to `ErasStakers`, this holds the preferences of validators.
     *
     *  This is keyed first by the era index to allow bulk deletion and then the stash account.
     *
     *  Is it removed after `HISTORY_DEPTH` eras.
     */
    enjinV100: new support_1.StorageType(
        'Staking.ErasValidatorPrefs',
        'Default',
        [support_1.sts.number(), enjinV100.AccountId32],
        enjinV100.ValidatorPrefs
    ),
}
exports.erasValidatorReward = {
    /**
     *  The total validator era payout for the last `HISTORY_DEPTH` eras.
     *
     *  Eras that haven't finished yet or has been removed doesn't have reward.
     */
    enjinV100: new support_1.StorageType(
        'Staking.ErasValidatorReward',
        'Optional',
        [support_1.sts.number()],
        support_1.sts.bigint()
    ),
}
exports.erasRewardPoints = {
    /**
     *  Rewards for the last `HISTORY_DEPTH` eras.
     *  If reward hasn't been set or has been removed then 0 reward is returned.
     */
    enjinV100: new support_1.StorageType(
        'Staking.ErasRewardPoints',
        'Default',
        [support_1.sts.number()],
        enjinV100.EraRewardPoints
    ),
}
exports.erasTotalStake = {
    /**
     *  The total amount staked for the last `HISTORY_DEPTH` eras.
     *  If total hasn't been set or has been removed then 0 stake is returned.
     */
    enjinV100: new support_1.StorageType(
        'Staking.ErasTotalStake',
        'Default',
        [support_1.sts.number()],
        support_1.sts.bigint()
    ),
}
exports.forceEra = {
    /**
     *  Mode of era forcing.
     */
    enjinV100: new support_1.StorageType('Staking.ForceEra', 'Default', [], enjinV100.Forcing),
}
exports.slashRewardFraction = {
    /**
     *  The percentage of the slash that is distributed to reporters.
     *
     *  The rest of the slashed value is handled by the `Slash`.
     */
    enjinV100: new support_1.StorageType('Staking.SlashRewardFraction', 'Default', [], enjinV100.Perbill),
}
exports.canceledSlashPayout = {
    /**
     *  The amount of currency given to reporters of a slash event which was
     *  canceled by extraordinary circumstances (e.g. governance).
     */
    enjinV100: new support_1.StorageType('Staking.CanceledSlashPayout', 'Default', [], support_1.sts.bigint()),
}
exports.unappliedSlashes = {
    /**
     *  All unapplied slashes that are queued for later.
     */
    enjinV100: new support_1.StorageType(
        'Staking.UnappliedSlashes',
        'Default',
        [support_1.sts.number()],
        support_1.sts.array(function () {
            return enjinV100.UnappliedSlash
        })
    ),
}
exports.bondedEras = {
    /**
     *  A mapping from still-bonded eras to the first session index of that era.
     *
     *  Must contains information for eras for the range:
     *  `[active_era - bounding_duration; active_era]`
     */
    enjinV100: new support_1.StorageType(
        'Staking.BondedEras',
        'Default',
        [],
        support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [support_1.sts.number(), support_1.sts.number()]
            })
        })
    ),
}
exports.validatorSlashInEra = {
    /**
     *  All slashing events on validators, mapped by era to the highest slash proportion
     *  and slash value of the era.
     */
    enjinV100: new support_1.StorageType(
        'Staking.ValidatorSlashInEra',
        'Optional',
        [support_1.sts.number(), enjinV100.AccountId32],
        support_1.sts.tuple(function () {
            return [enjinV100.Perbill, support_1.sts.bigint()]
        })
    ),
}
exports.nominatorSlashInEra = {
    /**
     *  All slashing events on nominators, mapped by era to the highest slash value of the era.
     */
    enjinV100: new support_1.StorageType(
        'Staking.NominatorSlashInEra',
        'Optional',
        [support_1.sts.number(), enjinV100.AccountId32],
        support_1.sts.bigint()
    ),
}
exports.slashingSpans = {
    /**
     *  Slashing spans for stash accounts.
     */
    enjinV100: new support_1.StorageType(
        'Staking.SlashingSpans',
        'Optional',
        [enjinV100.AccountId32],
        enjinV100.SlashingSpans
    ),
}
exports.spanSlash = {
    /**
     *  Records information about the maximum slash of a stash within a slashing span,
     *  as well as how much reward has been paid out.
     */
    enjinV100: new support_1.StorageType(
        'Staking.SpanSlash',
        'Default',
        [
            support_1.sts.tuple(function () {
                return [enjinV100.AccountId32, support_1.sts.number()]
            }),
        ],
        enjinV100.SpanRecord
    ),
}
exports.currentPlannedSession = {
    /**
     *  The last planned session scheduled by the session pallet.
     *
     *  This is basically in sync with the call to [`pallet_session::SessionManager::new_session`].
     */
    enjinV100: new support_1.StorageType('Staking.CurrentPlannedSession', 'Default', [], support_1.sts.number()),
}
exports.offendingValidators = {
    /**
     *  Indices of validators that have offended in the active era and whether they are currently
     *  disabled.
     *
     *  This value should be a superset of disabled validators since not all offences lead to the
     *  validator being disabled (if there was no slash). This is needed to track the percentage of
     *  validators that have offended in the current era, ensuring a new era is forced if
     *  `OffendingValidatorsThreshold` is reached. The vec is always kept sorted so that we can find
     *  whether a given validator has previously offended using binary search. It gets cleared when
     *  the era ends.
     */
    enjinV100: new support_1.StorageType(
        'Staking.OffendingValidators',
        'Default',
        [],
        support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [support_1.sts.number(), support_1.sts.boolean()]
            })
        })
    ),
}
exports.chillThreshold = {
    /**
     *  The threshold for when users can start calling `chill_other` for other validators /
     *  nominators. The threshold is compared to the actual number of validators / nominators
     *  (`CountFor*`) in the system compared to the configured max (`Max*Count`).
     */
    enjinV100: new support_1.StorageType('Staking.ChillThreshold', 'Optional', [], enjinV100.Percent),
}
exports.erasStakersOverview = {
    /**
     *  Summary of validator exposure at a given era.
     *
     *  This contains the total stake in support of the validator and their own stake. In addition,
     *  it can also be used to get the number of nominators backing this validator and the number of
     *  exposure pages they are divided into. The page count is useful to determine the number of
     *  pages of rewards that needs to be claimed.
     *
     *  This is keyed first by the era index to allow bulk deletion and then the stash account.
     *  Should only be accessed through `EraInfo`.
     *
     *  Is it removed after [`Config::HistoryDepth`] eras.
     *  If stakers hasn't been set or has been removed then empty overview is returned.
     */
    enjinV1032: new support_1.StorageType(
        'Staking.ErasStakersOverview',
        'Optional',
        [support_1.sts.number(), enjinV1032.AccountId32],
        enjinV1032.PagedExposureMetadata
    ),
}
exports.erasStakersPaged = {
    /**
     *  Paginated exposure of a validator at given era.
     *
     *  This is keyed first by the era index to allow bulk deletion, then stash account and finally
     *  the page. Should only be accessed through `EraInfo`.
     *
     *  This is cleared after [`Config::HistoryDepth`] eras.
     */
    enjinV1032: new support_1.StorageType(
        'Staking.ErasStakersPaged',
        'Optional',
        [support_1.sts.number(), enjinV1032.AccountId32, support_1.sts.number()],
        enjinV1032.ExposurePage
    ),
}
exports.claimedRewards = {
    /**
     *  History of claimed paged rewards by era and validator.
     *
     *  This is keyed by era and validator stash which maps to the set of page indexes which have
     *  been claimed.
     *
     *  It is removed after [`Config::HistoryDepth`] eras.
     */
    enjinV1032: new support_1.StorageType(
        'Staking.ClaimedRewards',
        'Default',
        [support_1.sts.number(), enjinV1032.AccountId32],
        support_1.sts.array(function () {
            return support_1.sts.number()
        })
    ),
}
exports.maxStakedRewards = {
    /**
     *  Maximum staked rewards, i.e. the percentage of the era inflation that
     *  is used for stake rewards.
     *  See [Era payout](./index.html#era-payout).
     */
    enjinV1032: new support_1.StorageType('Staking.MaxStakedRewards', 'Optional', [], enjinV1032.Percent),
}
exports.virtualStakers = {
    /**
     *  Stakers whose funds are managed by other pallets.
     *
     *  This pallet does not apply any locks on them, therefore they are only virtually bonded. They
     *  are expected to be keyless accounts and hence should not be allowed to mutate their ledger
     *  directly via this pallet. Instead, these accounts are managed by other pallets and accessed
     *  via low level apis. We keep track of them to do minimal integrity checks.
     */
    enjinV1050: new support_1.StorageType(
        'Staking.VirtualStakers',
        'Optional',
        [enjinV1050.AccountId32],
        support_1.sts.unit()
    ),
}
exports.counterForVirtualStakers = {
    /**
     * Counter for the related counted storage map
     */
    enjinV1050: new support_1.StorageType('Staking.CounterForVirtualStakers', 'Default', [], support_1.sts.number()),
}
exports.disabledValidators = {
    /**
     *  Indices of validators that have offended in the active era. The offenders are disabled for a
     *  whole era. For this reason they are kept here - only staking pallet knows about eras. The
     *  implementor of [`DisablingStrategy`] defines if a validator should be disabled which
     *  implicitly means that the implementor also controls the max number of disabled validators.
     *
     *  The vec is always kept sorted so that we can find whether a given validator has previously
     *  offended using binary search.
     */
    enjinV1050: new support_1.StorageType(
        'Staking.DisabledValidators',
        'Default',
        [],
        support_1.sts.array(function () {
            return support_1.sts.number()
        })
    ),
}
