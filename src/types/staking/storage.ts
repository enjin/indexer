import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as enjinV100 from '../enjinV100'
import * as v100 from '../v100'
import * as v1030 from '../v1030'
import * as enjinV1032 from '../enjinV1032'
import * as enjinV1050 from '../enjinV1050'

export const validatorCount =  {
    /**
     *  The ideal number of active validators.
     */
    enjinV100: new StorageType('Staking.ValidatorCount', 'Default', [], sts.number()) as ValidatorCountEnjinV100,
}

/**
 *  The ideal number of active validators.
 */
export interface ValidatorCountEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const minimumValidatorCount =  {
    /**
     *  Minimum number of staking participants before emergency conditions are imposed.
     */
    enjinV100: new StorageType('Staking.MinimumValidatorCount', 'Default', [], sts.number()) as MinimumValidatorCountEnjinV100,
}

/**
 *  Minimum number of staking participants before emergency conditions are imposed.
 */
export interface MinimumValidatorCountEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const invulnerables =  {
    /**
     *  Any validators that may never be slashed or forcibly kicked. It's a Vec since they're
     *  easy to initialize and the performance hit is minimal (we expect no more than four
     *  invulnerables) and restricted to testnets.
     */
    enjinV100: new StorageType('Staking.Invulnerables', 'Default', [], sts.array(() => enjinV100.AccountId32)) as InvulnerablesEnjinV100,
}

/**
 *  Any validators that may never be slashed or forcibly kicked. It's a Vec since they're
 *  easy to initialize and the performance hit is minimal (we expect no more than four
 *  invulnerables) and restricted to testnets.
 */
export interface InvulnerablesEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV100.AccountId32[]
    get(block: Block): Promise<(enjinV100.AccountId32[] | undefined)>
}

export const bonded =  {
    /**
     *  Map from all locked "stash" accounts to the controller account.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    enjinV100: new StorageType('Staking.Bonded', 'Optional', [enjinV100.AccountId32], enjinV100.AccountId32) as BondedEnjinV100,
}

/**
 *  Map from all locked "stash" accounts to the controller account.
 * 
 *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
 */
export interface BondedEnjinV100  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: enjinV100.AccountId32): Promise<(enjinV100.AccountId32 | undefined)>
    getMany(block: Block, keys: enjinV100.AccountId32[]): Promise<(enjinV100.AccountId32 | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.AccountId32[]>
    getKeys(block: Block, key: enjinV100.AccountId32): Promise<enjinV100.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV100.AccountId32): AsyncIterable<enjinV100.AccountId32[]>
    getPairs(block: Block): Promise<[k: enjinV100.AccountId32, v: (enjinV100.AccountId32 | undefined)][]>
    getPairs(block: Block, key: enjinV100.AccountId32): Promise<[k: enjinV100.AccountId32, v: (enjinV100.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: enjinV100.AccountId32, v: (enjinV100.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: enjinV100.AccountId32): AsyncIterable<[k: enjinV100.AccountId32, v: (enjinV100.AccountId32 | undefined)][]>
}

export const minNominatorBond =  {
    /**
     *  The minimum active bond to become and maintain the role of a nominator.
     */
    enjinV100: new StorageType('Staking.MinNominatorBond', 'Default', [], sts.bigint()) as MinNominatorBondEnjinV100,
}

/**
 *  The minimum active bond to become and maintain the role of a nominator.
 */
export interface MinNominatorBondEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const minValidatorBond =  {
    /**
     *  The minimum active bond to become and maintain the role of a validator.
     */
    enjinV100: new StorageType('Staking.MinValidatorBond', 'Default', [], sts.bigint()) as MinValidatorBondEnjinV100,
}

/**
 *  The minimum active bond to become and maintain the role of a validator.
 */
export interface MinValidatorBondEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const minimumActiveStake =  {
    /**
     *  The minimum active nominator stake of the last successful election.
     */
    enjinV100: new StorageType('Staking.MinimumActiveStake', 'Default', [], sts.bigint()) as MinimumActiveStakeEnjinV100,
}

/**
 *  The minimum active nominator stake of the last successful election.
 */
export interface MinimumActiveStakeEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const minCommission =  {
    /**
     *  The minimum amount of commission that validators can set.
     * 
     *  If set to `0`, no limit exists.
     */
    enjinV100: new StorageType('Staking.MinCommission', 'Default', [], enjinV100.Perbill) as MinCommissionEnjinV100,
}

/**
 *  The minimum amount of commission that validators can set.
 * 
 *  If set to `0`, no limit exists.
 */
export interface MinCommissionEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV100.Perbill
    get(block: Block): Promise<(enjinV100.Perbill | undefined)>
}

export const ledger =  {
    /**
     *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
     */
    enjinV100: new StorageType('Staking.Ledger', 'Optional', [enjinV100.AccountId32], enjinV100.StakingLedger) as LedgerEnjinV100,
    /**
     *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
     * 
     *  Note: All the reads and mutations to this storage *MUST* be done through the methods exposed
     *  by [`StakingLedger`] to ensure data and lock consistency.
     */
    enjinV1032: new StorageType('Staking.Ledger', 'Optional', [enjinV1032.AccountId32], enjinV1032.StakingLedger) as LedgerEnjinV1032,
    /**
     *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
     */
    v100: new StorageType('Staking.Ledger', 'Optional', [v100.AccountId32], v100.StakingLedger) as LedgerV100,
    /**
     *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
     * 
     *  Note: All the reads and mutations to this storage *MUST* be done through the methods exposed
     *  by [`StakingLedger`] to ensure data and lock consistency.
     */
    v1030: new StorageType('Staking.Ledger', 'Optional', [v1030.AccountId32], v1030.StakingLedger) as LedgerV1030,
}

/**
 *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
 */
export interface LedgerEnjinV100  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: enjinV100.AccountId32): Promise<(enjinV100.StakingLedger | undefined)>
    getMany(block: Block, keys: enjinV100.AccountId32[]): Promise<(enjinV100.StakingLedger | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.AccountId32[]>
    getKeys(block: Block, key: enjinV100.AccountId32): Promise<enjinV100.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV100.AccountId32): AsyncIterable<enjinV100.AccountId32[]>
    getPairs(block: Block): Promise<[k: enjinV100.AccountId32, v: (enjinV100.StakingLedger | undefined)][]>
    getPairs(block: Block, key: enjinV100.AccountId32): Promise<[k: enjinV100.AccountId32, v: (enjinV100.StakingLedger | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: enjinV100.AccountId32, v: (enjinV100.StakingLedger | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: enjinV100.AccountId32): AsyncIterable<[k: enjinV100.AccountId32, v: (enjinV100.StakingLedger | undefined)][]>
}

/**
 *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
 * 
 *  Note: All the reads and mutations to this storage *MUST* be done through the methods exposed
 *  by [`StakingLedger`] to ensure data and lock consistency.
 */
export interface LedgerEnjinV1032  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: enjinV1032.AccountId32): Promise<(enjinV1032.StakingLedger | undefined)>
    getMany(block: Block, keys: enjinV1032.AccountId32[]): Promise<(enjinV1032.StakingLedger | undefined)[]>
    getKeys(block: Block): Promise<enjinV1032.AccountId32[]>
    getKeys(block: Block, key: enjinV1032.AccountId32): Promise<enjinV1032.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV1032.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV1032.AccountId32): AsyncIterable<enjinV1032.AccountId32[]>
    getPairs(block: Block): Promise<[k: enjinV1032.AccountId32, v: (enjinV1032.StakingLedger | undefined)][]>
    getPairs(block: Block, key: enjinV1032.AccountId32): Promise<[k: enjinV1032.AccountId32, v: (enjinV1032.StakingLedger | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: enjinV1032.AccountId32, v: (enjinV1032.StakingLedger | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: enjinV1032.AccountId32): AsyncIterable<[k: enjinV1032.AccountId32, v: (enjinV1032.StakingLedger | undefined)][]>
}

/**
 *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
 */
export interface LedgerV100  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v100.AccountId32): Promise<(v100.StakingLedger | undefined)>
    getMany(block: Block, keys: v100.AccountId32[]): Promise<(v100.StakingLedger | undefined)[]>
    getKeys(block: Block): Promise<v100.AccountId32[]>
    getKeys(block: Block, key: v100.AccountId32): Promise<v100.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v100.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v100.AccountId32): AsyncIterable<v100.AccountId32[]>
    getPairs(block: Block): Promise<[k: v100.AccountId32, v: (v100.StakingLedger | undefined)][]>
    getPairs(block: Block, key: v100.AccountId32): Promise<[k: v100.AccountId32, v: (v100.StakingLedger | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v100.AccountId32, v: (v100.StakingLedger | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v100.AccountId32): AsyncIterable<[k: v100.AccountId32, v: (v100.StakingLedger | undefined)][]>
}

/**
 *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
 * 
 *  Note: All the reads and mutations to this storage *MUST* be done through the methods exposed
 *  by [`StakingLedger`] to ensure data and lock consistency.
 */
export interface LedgerV1030  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1030.AccountId32): Promise<(v1030.StakingLedger | undefined)>
    getMany(block: Block, keys: v1030.AccountId32[]): Promise<(v1030.StakingLedger | undefined)[]>
    getKeys(block: Block): Promise<v1030.AccountId32[]>
    getKeys(block: Block, key: v1030.AccountId32): Promise<v1030.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1030.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v1030.AccountId32): AsyncIterable<v1030.AccountId32[]>
    getPairs(block: Block): Promise<[k: v1030.AccountId32, v: (v1030.StakingLedger | undefined)][]>
    getPairs(block: Block, key: v1030.AccountId32): Promise<[k: v1030.AccountId32, v: (v1030.StakingLedger | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1030.AccountId32, v: (v1030.StakingLedger | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1030.AccountId32): AsyncIterable<[k: v1030.AccountId32, v: (v1030.StakingLedger | undefined)][]>
}

export const payee =  {
    /**
     *  Where the reward payment should be made. Keyed by stash.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    enjinV100: new StorageType('Staking.Payee', 'Default', [enjinV100.AccountId32], enjinV100.RewardDestination) as PayeeEnjinV100,
    /**
     *  Where the reward payment should be made. Keyed by stash.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    enjinV1032: new StorageType('Staking.Payee', 'Optional', [enjinV1032.AccountId32], enjinV1032.RewardDestination) as PayeeEnjinV1032,
    /**
     *  Where the reward payment should be made. Keyed by stash.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    v100: new StorageType('Staking.Payee', 'Default', [v100.AccountId32], v100.RewardDestination) as PayeeV100,
    /**
     *  Where the reward payment should be made. Keyed by stash.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    v1030: new StorageType('Staking.Payee', 'Optional', [v1030.AccountId32], v1030.RewardDestination) as PayeeV1030,
}

/**
 *  Where the reward payment should be made. Keyed by stash.
 * 
 *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
 */
export interface PayeeEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV100.RewardDestination
    get(block: Block, key: enjinV100.AccountId32): Promise<(enjinV100.RewardDestination | undefined)>
    getMany(block: Block, keys: enjinV100.AccountId32[]): Promise<(enjinV100.RewardDestination | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.AccountId32[]>
    getKeys(block: Block, key: enjinV100.AccountId32): Promise<enjinV100.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV100.AccountId32): AsyncIterable<enjinV100.AccountId32[]>
    getPairs(block: Block): Promise<[k: enjinV100.AccountId32, v: (enjinV100.RewardDestination | undefined)][]>
    getPairs(block: Block, key: enjinV100.AccountId32): Promise<[k: enjinV100.AccountId32, v: (enjinV100.RewardDestination | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: enjinV100.AccountId32, v: (enjinV100.RewardDestination | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: enjinV100.AccountId32): AsyncIterable<[k: enjinV100.AccountId32, v: (enjinV100.RewardDestination | undefined)][]>
}

/**
 *  Where the reward payment should be made. Keyed by stash.
 * 
 *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
 */
export interface PayeeEnjinV1032  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: enjinV1032.AccountId32): Promise<(enjinV1032.RewardDestination | undefined)>
    getMany(block: Block, keys: enjinV1032.AccountId32[]): Promise<(enjinV1032.RewardDestination | undefined)[]>
    getKeys(block: Block): Promise<enjinV1032.AccountId32[]>
    getKeys(block: Block, key: enjinV1032.AccountId32): Promise<enjinV1032.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV1032.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV1032.AccountId32): AsyncIterable<enjinV1032.AccountId32[]>
    getPairs(block: Block): Promise<[k: enjinV1032.AccountId32, v: (enjinV1032.RewardDestination | undefined)][]>
    getPairs(block: Block, key: enjinV1032.AccountId32): Promise<[k: enjinV1032.AccountId32, v: (enjinV1032.RewardDestination | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: enjinV1032.AccountId32, v: (enjinV1032.RewardDestination | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: enjinV1032.AccountId32): AsyncIterable<[k: enjinV1032.AccountId32, v: (enjinV1032.RewardDestination | undefined)][]>
}

/**
 *  Where the reward payment should be made. Keyed by stash.
 * 
 *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
 */
export interface PayeeV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v100.RewardDestination
    get(block: Block, key: v100.AccountId32): Promise<(v100.RewardDestination | undefined)>
    getMany(block: Block, keys: v100.AccountId32[]): Promise<(v100.RewardDestination | undefined)[]>
    getKeys(block: Block): Promise<v100.AccountId32[]>
    getKeys(block: Block, key: v100.AccountId32): Promise<v100.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v100.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v100.AccountId32): AsyncIterable<v100.AccountId32[]>
    getPairs(block: Block): Promise<[k: v100.AccountId32, v: (v100.RewardDestination | undefined)][]>
    getPairs(block: Block, key: v100.AccountId32): Promise<[k: v100.AccountId32, v: (v100.RewardDestination | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v100.AccountId32, v: (v100.RewardDestination | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v100.AccountId32): AsyncIterable<[k: v100.AccountId32, v: (v100.RewardDestination | undefined)][]>
}

/**
 *  Where the reward payment should be made. Keyed by stash.
 * 
 *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
 */
export interface PayeeV1030  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1030.AccountId32): Promise<(v1030.RewardDestination | undefined)>
    getMany(block: Block, keys: v1030.AccountId32[]): Promise<(v1030.RewardDestination | undefined)[]>
    getKeys(block: Block): Promise<v1030.AccountId32[]>
    getKeys(block: Block, key: v1030.AccountId32): Promise<v1030.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1030.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v1030.AccountId32): AsyncIterable<v1030.AccountId32[]>
    getPairs(block: Block): Promise<[k: v1030.AccountId32, v: (v1030.RewardDestination | undefined)][]>
    getPairs(block: Block, key: v1030.AccountId32): Promise<[k: v1030.AccountId32, v: (v1030.RewardDestination | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1030.AccountId32, v: (v1030.RewardDestination | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1030.AccountId32): AsyncIterable<[k: v1030.AccountId32, v: (v1030.RewardDestination | undefined)][]>
}

export const validators =  {
    /**
     *  The map from (wannabe) validator stash key to the preferences of that validator.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    enjinV100: new StorageType('Staking.Validators', 'Default', [enjinV100.AccountId32], enjinV100.ValidatorPrefs) as ValidatorsEnjinV100,
}

/**
 *  The map from (wannabe) validator stash key to the preferences of that validator.
 * 
 *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
 */
export interface ValidatorsEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV100.ValidatorPrefs
    get(block: Block, key: enjinV100.AccountId32): Promise<(enjinV100.ValidatorPrefs | undefined)>
    getMany(block: Block, keys: enjinV100.AccountId32[]): Promise<(enjinV100.ValidatorPrefs | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.AccountId32[]>
    getKeys(block: Block, key: enjinV100.AccountId32): Promise<enjinV100.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV100.AccountId32): AsyncIterable<enjinV100.AccountId32[]>
    getPairs(block: Block): Promise<[k: enjinV100.AccountId32, v: (enjinV100.ValidatorPrefs | undefined)][]>
    getPairs(block: Block, key: enjinV100.AccountId32): Promise<[k: enjinV100.AccountId32, v: (enjinV100.ValidatorPrefs | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: enjinV100.AccountId32, v: (enjinV100.ValidatorPrefs | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: enjinV100.AccountId32): AsyncIterable<[k: enjinV100.AccountId32, v: (enjinV100.ValidatorPrefs | undefined)][]>
}

export const counterForValidators =  {
    /**
     * Counter for the related counted storage map
     */
    enjinV100: new StorageType('Staking.CounterForValidators', 'Default', [], sts.number()) as CounterForValidatorsEnjinV100,
}

/**
 * Counter for the related counted storage map
 */
export interface CounterForValidatorsEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const maxValidatorsCount =  {
    /**
     *  The maximum validator count before we stop allowing new validators to join.
     * 
     *  When this value is not set, no limits are enforced.
     */
    enjinV100: new StorageType('Staking.MaxValidatorsCount', 'Optional', [], sts.number()) as MaxValidatorsCountEnjinV100,
}

/**
 *  The maximum validator count before we stop allowing new validators to join.
 * 
 *  When this value is not set, no limits are enforced.
 */
export interface MaxValidatorsCountEnjinV100  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const nominators =  {
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
    enjinV100: new StorageType('Staking.Nominators', 'Optional', [enjinV100.AccountId32], enjinV100.Nominations) as NominatorsEnjinV100,
}

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
export interface NominatorsEnjinV100  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: enjinV100.AccountId32): Promise<(enjinV100.Nominations | undefined)>
    getMany(block: Block, keys: enjinV100.AccountId32[]): Promise<(enjinV100.Nominations | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.AccountId32[]>
    getKeys(block: Block, key: enjinV100.AccountId32): Promise<enjinV100.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV100.AccountId32): AsyncIterable<enjinV100.AccountId32[]>
    getPairs(block: Block): Promise<[k: enjinV100.AccountId32, v: (enjinV100.Nominations | undefined)][]>
    getPairs(block: Block, key: enjinV100.AccountId32): Promise<[k: enjinV100.AccountId32, v: (enjinV100.Nominations | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: enjinV100.AccountId32, v: (enjinV100.Nominations | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: enjinV100.AccountId32): AsyncIterable<[k: enjinV100.AccountId32, v: (enjinV100.Nominations | undefined)][]>
}

export const counterForNominators =  {
    /**
     * Counter for the related counted storage map
     */
    enjinV100: new StorageType('Staking.CounterForNominators', 'Default', [], sts.number()) as CounterForNominatorsEnjinV100,
}

/**
 * Counter for the related counted storage map
 */
export interface CounterForNominatorsEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const maxNominatorsCount =  {
    /**
     *  The maximum nominator count before we stop allowing new validators to join.
     * 
     *  When this value is not set, no limits are enforced.
     */
    enjinV100: new StorageType('Staking.MaxNominatorsCount', 'Optional', [], sts.number()) as MaxNominatorsCountEnjinV100,
}

/**
 *  The maximum nominator count before we stop allowing new validators to join.
 * 
 *  When this value is not set, no limits are enforced.
 */
export interface MaxNominatorsCountEnjinV100  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const currentEra =  {
    /**
     *  The current era index.
     * 
     *  This is the latest planned era, depending on how the Session pallet queues the validator
     *  set, it might be active or not.
     */
    enjinV100: new StorageType('Staking.CurrentEra', 'Optional', [], sts.number()) as CurrentEraEnjinV100,
}

/**
 *  The current era index.
 * 
 *  This is the latest planned era, depending on how the Session pallet queues the validator
 *  set, it might be active or not.
 */
export interface CurrentEraEnjinV100  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const activeEra =  {
    /**
     *  The active era information, it holds index and start.
     * 
     *  The active era is the era being currently rewarded. Validator set of this era must be
     *  equal to [`SessionInterface::validators`].
     */
    enjinV100: new StorageType('Staking.ActiveEra', 'Optional', [], enjinV100.ActiveEraInfo) as ActiveEraEnjinV100,
}

/**
 *  The active era information, it holds index and start.
 * 
 *  The active era is the era being currently rewarded. Validator set of this era must be
 *  equal to [`SessionInterface::validators`].
 */
export interface ActiveEraEnjinV100  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(enjinV100.ActiveEraInfo | undefined)>
}

export const erasStartSessionIndex =  {
    /**
     *  The session index at which the era start for the last `HISTORY_DEPTH` eras.
     * 
     *  Note: This tracks the starting session (i.e. session index when era start being active)
     *  for the eras in `[CurrentEra - HISTORY_DEPTH, CurrentEra]`.
     */
    enjinV100: new StorageType('Staking.ErasStartSessionIndex', 'Optional', [sts.number()], sts.number()) as ErasStartSessionIndexEnjinV100,
}

/**
 *  The session index at which the era start for the last `HISTORY_DEPTH` eras.
 * 
 *  Note: This tracks the starting session (i.e. session index when era start being active)
 *  for the eras in `[CurrentEra - HISTORY_DEPTH, CurrentEra]`.
 */
export interface ErasStartSessionIndexEnjinV100  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(number | undefined)>
    getMany(block: Block, keys: number[]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (number | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (number | undefined)][]>
}

export const erasStakers =  {
    /**
     *  Exposure of validator at era.
     * 
     *  This is keyed first by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after `HISTORY_DEPTH` eras.
     *  If stakers hasn't been set or has been removed then empty exposure is returned.
     */
    enjinV100: new StorageType('Staking.ErasStakers', 'Default', [sts.number(), enjinV100.AccountId32], enjinV100.Exposure) as ErasStakersEnjinV100,
}

/**
 *  Exposure of validator at era.
 * 
 *  This is keyed first by the era index to allow bulk deletion and then the stash account.
 * 
 *  Is it removed after `HISTORY_DEPTH` eras.
 *  If stakers hasn't been set or has been removed then empty exposure is returned.
 */
export interface ErasStakersEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV100.Exposure
    get(block: Block, key1: number, key2: enjinV100.AccountId32): Promise<(enjinV100.Exposure | undefined)>
    getMany(block: Block, keys: [number, enjinV100.AccountId32][]): Promise<(enjinV100.Exposure | undefined)[]>
    getKeys(block: Block): Promise<[number, enjinV100.AccountId32][]>
    getKeys(block: Block, key1: number): Promise<[number, enjinV100.AccountId32][]>
    getKeys(block: Block, key1: number, key2: enjinV100.AccountId32): Promise<[number, enjinV100.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, enjinV100.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, enjinV100.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: enjinV100.AccountId32): AsyncIterable<[number, enjinV100.AccountId32][]>
    getPairs(block: Block): Promise<[k: [number, enjinV100.AccountId32], v: (enjinV100.Exposure | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, enjinV100.AccountId32], v: (enjinV100.Exposure | undefined)][]>
    getPairs(block: Block, key1: number, key2: enjinV100.AccountId32): Promise<[k: [number, enjinV100.AccountId32], v: (enjinV100.Exposure | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, enjinV100.AccountId32], v: (enjinV100.Exposure | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, enjinV100.AccountId32], v: (enjinV100.Exposure | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: enjinV100.AccountId32): AsyncIterable<[k: [number, enjinV100.AccountId32], v: (enjinV100.Exposure | undefined)][]>
}

export const erasStakersClipped =  {
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
    enjinV100: new StorageType('Staking.ErasStakersClipped', 'Default', [sts.number(), enjinV100.AccountId32], enjinV100.Exposure) as ErasStakersClippedEnjinV100,
}

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
export interface ErasStakersClippedEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV100.Exposure
    get(block: Block, key1: number, key2: enjinV100.AccountId32): Promise<(enjinV100.Exposure | undefined)>
    getMany(block: Block, keys: [number, enjinV100.AccountId32][]): Promise<(enjinV100.Exposure | undefined)[]>
    getKeys(block: Block): Promise<[number, enjinV100.AccountId32][]>
    getKeys(block: Block, key1: number): Promise<[number, enjinV100.AccountId32][]>
    getKeys(block: Block, key1: number, key2: enjinV100.AccountId32): Promise<[number, enjinV100.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, enjinV100.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, enjinV100.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: enjinV100.AccountId32): AsyncIterable<[number, enjinV100.AccountId32][]>
    getPairs(block: Block): Promise<[k: [number, enjinV100.AccountId32], v: (enjinV100.Exposure | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, enjinV100.AccountId32], v: (enjinV100.Exposure | undefined)][]>
    getPairs(block: Block, key1: number, key2: enjinV100.AccountId32): Promise<[k: [number, enjinV100.AccountId32], v: (enjinV100.Exposure | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, enjinV100.AccountId32], v: (enjinV100.Exposure | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, enjinV100.AccountId32], v: (enjinV100.Exposure | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: enjinV100.AccountId32): AsyncIterable<[k: [number, enjinV100.AccountId32], v: (enjinV100.Exposure | undefined)][]>
}

export const erasValidatorPrefs =  {
    /**
     *  Similar to `ErasStakers`, this holds the preferences of validators.
     * 
     *  This is keyed first by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after `HISTORY_DEPTH` eras.
     */
    enjinV100: new StorageType('Staking.ErasValidatorPrefs', 'Default', [sts.number(), enjinV100.AccountId32], enjinV100.ValidatorPrefs) as ErasValidatorPrefsEnjinV100,
}

/**
 *  Similar to `ErasStakers`, this holds the preferences of validators.
 * 
 *  This is keyed first by the era index to allow bulk deletion and then the stash account.
 * 
 *  Is it removed after `HISTORY_DEPTH` eras.
 */
export interface ErasValidatorPrefsEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV100.ValidatorPrefs
    get(block: Block, key1: number, key2: enjinV100.AccountId32): Promise<(enjinV100.ValidatorPrefs | undefined)>
    getMany(block: Block, keys: [number, enjinV100.AccountId32][]): Promise<(enjinV100.ValidatorPrefs | undefined)[]>
    getKeys(block: Block): Promise<[number, enjinV100.AccountId32][]>
    getKeys(block: Block, key1: number): Promise<[number, enjinV100.AccountId32][]>
    getKeys(block: Block, key1: number, key2: enjinV100.AccountId32): Promise<[number, enjinV100.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, enjinV100.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, enjinV100.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: enjinV100.AccountId32): AsyncIterable<[number, enjinV100.AccountId32][]>
    getPairs(block: Block): Promise<[k: [number, enjinV100.AccountId32], v: (enjinV100.ValidatorPrefs | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, enjinV100.AccountId32], v: (enjinV100.ValidatorPrefs | undefined)][]>
    getPairs(block: Block, key1: number, key2: enjinV100.AccountId32): Promise<[k: [number, enjinV100.AccountId32], v: (enjinV100.ValidatorPrefs | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, enjinV100.AccountId32], v: (enjinV100.ValidatorPrefs | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, enjinV100.AccountId32], v: (enjinV100.ValidatorPrefs | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: enjinV100.AccountId32): AsyncIterable<[k: [number, enjinV100.AccountId32], v: (enjinV100.ValidatorPrefs | undefined)][]>
}

export const erasValidatorReward =  {
    /**
     *  The total validator era payout for the last `HISTORY_DEPTH` eras.
     * 
     *  Eras that haven't finished yet or has been removed doesn't have reward.
     */
    enjinV100: new StorageType('Staking.ErasValidatorReward', 'Optional', [sts.number()], sts.bigint()) as ErasValidatorRewardEnjinV100,
}

/**
 *  The total validator era payout for the last `HISTORY_DEPTH` eras.
 * 
 *  Eras that haven't finished yet or has been removed doesn't have reward.
 */
export interface ErasValidatorRewardEnjinV100  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(bigint | undefined)>
    getMany(block: Block, keys: number[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (bigint | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (bigint | undefined)][]>
}

export const erasRewardPoints =  {
    /**
     *  Rewards for the last `HISTORY_DEPTH` eras.
     *  If reward hasn't been set or has been removed then 0 reward is returned.
     */
    enjinV100: new StorageType('Staking.ErasRewardPoints', 'Default', [sts.number()], enjinV100.EraRewardPoints) as ErasRewardPointsEnjinV100,
}

/**
 *  Rewards for the last `HISTORY_DEPTH` eras.
 *  If reward hasn't been set or has been removed then 0 reward is returned.
 */
export interface ErasRewardPointsEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV100.EraRewardPoints
    get(block: Block, key: number): Promise<(enjinV100.EraRewardPoints | undefined)>
    getMany(block: Block, keys: number[]): Promise<(enjinV100.EraRewardPoints | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (enjinV100.EraRewardPoints | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (enjinV100.EraRewardPoints | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (enjinV100.EraRewardPoints | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (enjinV100.EraRewardPoints | undefined)][]>
}

export const erasTotalStake =  {
    /**
     *  The total amount staked for the last `HISTORY_DEPTH` eras.
     *  If total hasn't been set or has been removed then 0 stake is returned.
     */
    enjinV100: new StorageType('Staking.ErasTotalStake', 'Default', [sts.number()], sts.bigint()) as ErasTotalStakeEnjinV100,
}

/**
 *  The total amount staked for the last `HISTORY_DEPTH` eras.
 *  If total hasn't been set or has been removed then 0 stake is returned.
 */
export interface ErasTotalStakeEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block, key: number): Promise<(bigint | undefined)>
    getMany(block: Block, keys: number[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (bigint | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (bigint | undefined)][]>
}

export const forceEra =  {
    /**
     *  Mode of era forcing.
     */
    enjinV100: new StorageType('Staking.ForceEra', 'Default', [], enjinV100.Forcing) as ForceEraEnjinV100,
}

/**
 *  Mode of era forcing.
 */
export interface ForceEraEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV100.Forcing
    get(block: Block): Promise<(enjinV100.Forcing | undefined)>
}

export const slashRewardFraction =  {
    /**
     *  The percentage of the slash that is distributed to reporters.
     * 
     *  The rest of the slashed value is handled by the `Slash`.
     */
    enjinV100: new StorageType('Staking.SlashRewardFraction', 'Default', [], enjinV100.Perbill) as SlashRewardFractionEnjinV100,
}

/**
 *  The percentage of the slash that is distributed to reporters.
 * 
 *  The rest of the slashed value is handled by the `Slash`.
 */
export interface SlashRewardFractionEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV100.Perbill
    get(block: Block): Promise<(enjinV100.Perbill | undefined)>
}

export const canceledSlashPayout =  {
    /**
     *  The amount of currency given to reporters of a slash event which was
     *  canceled by extraordinary circumstances (e.g. governance).
     */
    enjinV100: new StorageType('Staking.CanceledSlashPayout', 'Default', [], sts.bigint()) as CanceledSlashPayoutEnjinV100,
}

/**
 *  The amount of currency given to reporters of a slash event which was
 *  canceled by extraordinary circumstances (e.g. governance).
 */
export interface CanceledSlashPayoutEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const unappliedSlashes =  {
    /**
     *  All unapplied slashes that are queued for later.
     */
    enjinV100: new StorageType('Staking.UnappliedSlashes', 'Default', [sts.number()], sts.array(() => enjinV100.UnappliedSlash)) as UnappliedSlashesEnjinV100,
}

/**
 *  All unapplied slashes that are queued for later.
 */
export interface UnappliedSlashesEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV100.UnappliedSlash[]
    get(block: Block, key: number): Promise<(enjinV100.UnappliedSlash[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<(enjinV100.UnappliedSlash[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (enjinV100.UnappliedSlash[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (enjinV100.UnappliedSlash[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (enjinV100.UnappliedSlash[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (enjinV100.UnappliedSlash[] | undefined)][]>
}

export const bondedEras =  {
    /**
     *  A mapping from still-bonded eras to the first session index of that era.
     * 
     *  Must contains information for eras for the range:
     *  `[active_era - bounding_duration; active_era]`
     */
    enjinV100: new StorageType('Staking.BondedEras', 'Default', [], sts.array(() => sts.tuple(() => [sts.number(), sts.number()]))) as BondedErasEnjinV100,
}

/**
 *  A mapping from still-bonded eras to the first session index of that era.
 * 
 *  Must contains information for eras for the range:
 *  `[active_era - bounding_duration; active_era]`
 */
export interface BondedErasEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, number][]
    get(block: Block): Promise<([number, number][] | undefined)>
}

export const validatorSlashInEra =  {
    /**
     *  All slashing events on validators, mapped by era to the highest slash proportion
     *  and slash value of the era.
     */
    enjinV100: new StorageType('Staking.ValidatorSlashInEra', 'Optional', [sts.number(), enjinV100.AccountId32], sts.tuple(() => [enjinV100.Perbill, sts.bigint()])) as ValidatorSlashInEraEnjinV100,
}

/**
 *  All slashing events on validators, mapped by era to the highest slash proportion
 *  and slash value of the era.
 */
export interface ValidatorSlashInEraEnjinV100  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: enjinV100.AccountId32): Promise<([enjinV100.Perbill, bigint] | undefined)>
    getMany(block: Block, keys: [number, enjinV100.AccountId32][]): Promise<([enjinV100.Perbill, bigint] | undefined)[]>
    getKeys(block: Block): Promise<[number, enjinV100.AccountId32][]>
    getKeys(block: Block, key1: number): Promise<[number, enjinV100.AccountId32][]>
    getKeys(block: Block, key1: number, key2: enjinV100.AccountId32): Promise<[number, enjinV100.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, enjinV100.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, enjinV100.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: enjinV100.AccountId32): AsyncIterable<[number, enjinV100.AccountId32][]>
    getPairs(block: Block): Promise<[k: [number, enjinV100.AccountId32], v: ([enjinV100.Perbill, bigint] | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, enjinV100.AccountId32], v: ([enjinV100.Perbill, bigint] | undefined)][]>
    getPairs(block: Block, key1: number, key2: enjinV100.AccountId32): Promise<[k: [number, enjinV100.AccountId32], v: ([enjinV100.Perbill, bigint] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, enjinV100.AccountId32], v: ([enjinV100.Perbill, bigint] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, enjinV100.AccountId32], v: ([enjinV100.Perbill, bigint] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: enjinV100.AccountId32): AsyncIterable<[k: [number, enjinV100.AccountId32], v: ([enjinV100.Perbill, bigint] | undefined)][]>
}

export const nominatorSlashInEra =  {
    /**
     *  All slashing events on nominators, mapped by era to the highest slash value of the era.
     */
    enjinV100: new StorageType('Staking.NominatorSlashInEra', 'Optional', [sts.number(), enjinV100.AccountId32], sts.bigint()) as NominatorSlashInEraEnjinV100,
}

/**
 *  All slashing events on nominators, mapped by era to the highest slash value of the era.
 */
export interface NominatorSlashInEraEnjinV100  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: enjinV100.AccountId32): Promise<(bigint | undefined)>
    getMany(block: Block, keys: [number, enjinV100.AccountId32][]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<[number, enjinV100.AccountId32][]>
    getKeys(block: Block, key1: number): Promise<[number, enjinV100.AccountId32][]>
    getKeys(block: Block, key1: number, key2: enjinV100.AccountId32): Promise<[number, enjinV100.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, enjinV100.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, enjinV100.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: enjinV100.AccountId32): AsyncIterable<[number, enjinV100.AccountId32][]>
    getPairs(block: Block): Promise<[k: [number, enjinV100.AccountId32], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, enjinV100.AccountId32], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: number, key2: enjinV100.AccountId32): Promise<[k: [number, enjinV100.AccountId32], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, enjinV100.AccountId32], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, enjinV100.AccountId32], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: enjinV100.AccountId32): AsyncIterable<[k: [number, enjinV100.AccountId32], v: (bigint | undefined)][]>
}

export const slashingSpans =  {
    /**
     *  Slashing spans for stash accounts.
     */
    enjinV100: new StorageType('Staking.SlashingSpans', 'Optional', [enjinV100.AccountId32], enjinV100.SlashingSpans) as SlashingSpansEnjinV100,
}

/**
 *  Slashing spans for stash accounts.
 */
export interface SlashingSpansEnjinV100  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: enjinV100.AccountId32): Promise<(enjinV100.SlashingSpans | undefined)>
    getMany(block: Block, keys: enjinV100.AccountId32[]): Promise<(enjinV100.SlashingSpans | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.AccountId32[]>
    getKeys(block: Block, key: enjinV100.AccountId32): Promise<enjinV100.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV100.AccountId32): AsyncIterable<enjinV100.AccountId32[]>
    getPairs(block: Block): Promise<[k: enjinV100.AccountId32, v: (enjinV100.SlashingSpans | undefined)][]>
    getPairs(block: Block, key: enjinV100.AccountId32): Promise<[k: enjinV100.AccountId32, v: (enjinV100.SlashingSpans | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: enjinV100.AccountId32, v: (enjinV100.SlashingSpans | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: enjinV100.AccountId32): AsyncIterable<[k: enjinV100.AccountId32, v: (enjinV100.SlashingSpans | undefined)][]>
}

export const spanSlash =  {
    /**
     *  Records information about the maximum slash of a stash within a slashing span,
     *  as well as how much reward has been paid out.
     */
    enjinV100: new StorageType('Staking.SpanSlash', 'Default', [sts.tuple(() => [enjinV100.AccountId32, sts.number()])], enjinV100.SpanRecord) as SpanSlashEnjinV100,
}

/**
 *  Records information about the maximum slash of a stash within a slashing span,
 *  as well as how much reward has been paid out.
 */
export interface SpanSlashEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV100.SpanRecord
    get(block: Block, key: [enjinV100.AccountId32, number]): Promise<(enjinV100.SpanRecord | undefined)>
    getMany(block: Block, keys: [enjinV100.AccountId32, number][]): Promise<(enjinV100.SpanRecord | undefined)[]>
    getKeys(block: Block): Promise<[enjinV100.AccountId32, number][]>
    getKeys(block: Block, key: [enjinV100.AccountId32, number]): Promise<[enjinV100.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[enjinV100.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block, key: [enjinV100.AccountId32, number]): AsyncIterable<[enjinV100.AccountId32, number][]>
    getPairs(block: Block): Promise<[k: [enjinV100.AccountId32, number], v: (enjinV100.SpanRecord | undefined)][]>
    getPairs(block: Block, key: [enjinV100.AccountId32, number]): Promise<[k: [enjinV100.AccountId32, number], v: (enjinV100.SpanRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [enjinV100.AccountId32, number], v: (enjinV100.SpanRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: [enjinV100.AccountId32, number]): AsyncIterable<[k: [enjinV100.AccountId32, number], v: (enjinV100.SpanRecord | undefined)][]>
}

export const currentPlannedSession =  {
    /**
     *  The last planned session scheduled by the session pallet.
     * 
     *  This is basically in sync with the call to [`pallet_session::SessionManager::new_session`].
     */
    enjinV100: new StorageType('Staking.CurrentPlannedSession', 'Default', [], sts.number()) as CurrentPlannedSessionEnjinV100,
}

/**
 *  The last planned session scheduled by the session pallet.
 * 
 *  This is basically in sync with the call to [`pallet_session::SessionManager::new_session`].
 */
export interface CurrentPlannedSessionEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const offendingValidators =  {
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
    enjinV100: new StorageType('Staking.OffendingValidators', 'Default', [], sts.array(() => sts.tuple(() => [sts.number(), sts.boolean()]))) as OffendingValidatorsEnjinV100,
}

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
export interface OffendingValidatorsEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, boolean][]
    get(block: Block): Promise<([number, boolean][] | undefined)>
}

export const chillThreshold =  {
    /**
     *  The threshold for when users can start calling `chill_other` for other validators /
     *  nominators. The threshold is compared to the actual number of validators / nominators
     *  (`CountFor*`) in the system compared to the configured max (`Max*Count`).
     */
    enjinV100: new StorageType('Staking.ChillThreshold', 'Optional', [], enjinV100.Percent) as ChillThresholdEnjinV100,
}

/**
 *  The threshold for when users can start calling `chill_other` for other validators /
 *  nominators. The threshold is compared to the actual number of validators / nominators
 *  (`CountFor*`) in the system compared to the configured max (`Max*Count`).
 */
export interface ChillThresholdEnjinV100  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(enjinV100.Percent | undefined)>
}

export const erasStakersOverview =  {
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
    enjinV1032: new StorageType('Staking.ErasStakersOverview', 'Optional', [sts.number(), enjinV1032.AccountId32], enjinV1032.PagedExposureMetadata) as ErasStakersOverviewEnjinV1032,
}

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
export interface ErasStakersOverviewEnjinV1032  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: enjinV1032.AccountId32): Promise<(enjinV1032.PagedExposureMetadata | undefined)>
    getMany(block: Block, keys: [number, enjinV1032.AccountId32][]): Promise<(enjinV1032.PagedExposureMetadata | undefined)[]>
    getKeys(block: Block): Promise<[number, enjinV1032.AccountId32][]>
    getKeys(block: Block, key1: number): Promise<[number, enjinV1032.AccountId32][]>
    getKeys(block: Block, key1: number, key2: enjinV1032.AccountId32): Promise<[number, enjinV1032.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, enjinV1032.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, enjinV1032.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: enjinV1032.AccountId32): AsyncIterable<[number, enjinV1032.AccountId32][]>
    getPairs(block: Block): Promise<[k: [number, enjinV1032.AccountId32], v: (enjinV1032.PagedExposureMetadata | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, enjinV1032.AccountId32], v: (enjinV1032.PagedExposureMetadata | undefined)][]>
    getPairs(block: Block, key1: number, key2: enjinV1032.AccountId32): Promise<[k: [number, enjinV1032.AccountId32], v: (enjinV1032.PagedExposureMetadata | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, enjinV1032.AccountId32], v: (enjinV1032.PagedExposureMetadata | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, enjinV1032.AccountId32], v: (enjinV1032.PagedExposureMetadata | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: enjinV1032.AccountId32): AsyncIterable<[k: [number, enjinV1032.AccountId32], v: (enjinV1032.PagedExposureMetadata | undefined)][]>
}

export const erasStakersPaged =  {
    /**
     *  Paginated exposure of a validator at given era.
     * 
     *  This is keyed first by the era index to allow bulk deletion, then stash account and finally
     *  the page. Should only be accessed through `EraInfo`.
     * 
     *  This is cleared after [`Config::HistoryDepth`] eras.
     */
    enjinV1032: new StorageType('Staking.ErasStakersPaged', 'Optional', [sts.number(), enjinV1032.AccountId32, sts.number()], enjinV1032.ExposurePage) as ErasStakersPagedEnjinV1032,
}

/**
 *  Paginated exposure of a validator at given era.
 * 
 *  This is keyed first by the era index to allow bulk deletion, then stash account and finally
 *  the page. Should only be accessed through `EraInfo`.
 * 
 *  This is cleared after [`Config::HistoryDepth`] eras.
 */
export interface ErasStakersPagedEnjinV1032  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: enjinV1032.AccountId32, key3: number): Promise<(enjinV1032.ExposurePage | undefined)>
    getMany(block: Block, keys: [number, enjinV1032.AccountId32, number][]): Promise<(enjinV1032.ExposurePage | undefined)[]>
    getKeys(block: Block): Promise<[number, enjinV1032.AccountId32, number][]>
    getKeys(block: Block, key1: number): Promise<[number, enjinV1032.AccountId32, number][]>
    getKeys(block: Block, key1: number, key2: enjinV1032.AccountId32): Promise<[number, enjinV1032.AccountId32, number][]>
    getKeys(block: Block, key1: number, key2: enjinV1032.AccountId32, key3: number): Promise<[number, enjinV1032.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, enjinV1032.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, enjinV1032.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: enjinV1032.AccountId32): AsyncIterable<[number, enjinV1032.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: enjinV1032.AccountId32, key3: number): AsyncIterable<[number, enjinV1032.AccountId32, number][]>
    getPairs(block: Block): Promise<[k: [number, enjinV1032.AccountId32, number], v: (enjinV1032.ExposurePage | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, enjinV1032.AccountId32, number], v: (enjinV1032.ExposurePage | undefined)][]>
    getPairs(block: Block, key1: number, key2: enjinV1032.AccountId32): Promise<[k: [number, enjinV1032.AccountId32, number], v: (enjinV1032.ExposurePage | undefined)][]>
    getPairs(block: Block, key1: number, key2: enjinV1032.AccountId32, key3: number): Promise<[k: [number, enjinV1032.AccountId32, number], v: (enjinV1032.ExposurePage | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, enjinV1032.AccountId32, number], v: (enjinV1032.ExposurePage | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, enjinV1032.AccountId32, number], v: (enjinV1032.ExposurePage | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: enjinV1032.AccountId32): AsyncIterable<[k: [number, enjinV1032.AccountId32, number], v: (enjinV1032.ExposurePage | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: enjinV1032.AccountId32, key3: number): AsyncIterable<[k: [number, enjinV1032.AccountId32, number], v: (enjinV1032.ExposurePage | undefined)][]>
}

export const claimedRewards =  {
    /**
     *  History of claimed paged rewards by era and validator.
     * 
     *  This is keyed by era and validator stash which maps to the set of page indexes which have
     *  been claimed.
     * 
     *  It is removed after [`Config::HistoryDepth`] eras.
     */
    enjinV1032: new StorageType('Staking.ClaimedRewards', 'Default', [sts.number(), enjinV1032.AccountId32], sts.array(() => sts.number())) as ClaimedRewardsEnjinV1032,
}

/**
 *  History of claimed paged rewards by era and validator.
 * 
 *  This is keyed by era and validator stash which maps to the set of page indexes which have
 *  been claimed.
 * 
 *  It is removed after [`Config::HistoryDepth`] eras.
 */
export interface ClaimedRewardsEnjinV1032  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number[]
    get(block: Block, key1: number, key2: enjinV1032.AccountId32): Promise<(number[] | undefined)>
    getMany(block: Block, keys: [number, enjinV1032.AccountId32][]): Promise<(number[] | undefined)[]>
    getKeys(block: Block): Promise<[number, enjinV1032.AccountId32][]>
    getKeys(block: Block, key1: number): Promise<[number, enjinV1032.AccountId32][]>
    getKeys(block: Block, key1: number, key2: enjinV1032.AccountId32): Promise<[number, enjinV1032.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, enjinV1032.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, enjinV1032.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: enjinV1032.AccountId32): AsyncIterable<[number, enjinV1032.AccountId32][]>
    getPairs(block: Block): Promise<[k: [number, enjinV1032.AccountId32], v: (number[] | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, enjinV1032.AccountId32], v: (number[] | undefined)][]>
    getPairs(block: Block, key1: number, key2: enjinV1032.AccountId32): Promise<[k: [number, enjinV1032.AccountId32], v: (number[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, enjinV1032.AccountId32], v: (number[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, enjinV1032.AccountId32], v: (number[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: enjinV1032.AccountId32): AsyncIterable<[k: [number, enjinV1032.AccountId32], v: (number[] | undefined)][]>
}

export const maxStakedRewards =  {
    /**
     *  Maximum staked rewards, i.e. the percentage of the era inflation that
     *  is used for stake rewards.
     *  See [Era payout](./index.html#era-payout).
     */
    enjinV1032: new StorageType('Staking.MaxStakedRewards', 'Optional', [], enjinV1032.Percent) as MaxStakedRewardsEnjinV1032,
}

/**
 *  Maximum staked rewards, i.e. the percentage of the era inflation that
 *  is used for stake rewards.
 *  See [Era payout](./index.html#era-payout).
 */
export interface MaxStakedRewardsEnjinV1032  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(enjinV1032.Percent | undefined)>
}

export const virtualStakers =  {
    /**
     *  Stakers whose funds are managed by other pallets.
     * 
     *  This pallet does not apply any locks on them, therefore they are only virtually bonded. They
     *  are expected to be keyless accounts and hence should not be allowed to mutate their ledger
     *  directly via this pallet. Instead, these accounts are managed by other pallets and accessed
     *  via low level apis. We keep track of them to do minimal integrity checks.
     */
    enjinV1050: new StorageType('Staking.VirtualStakers', 'Optional', [enjinV1050.AccountId32], sts.unit()) as VirtualStakersEnjinV1050,
}

/**
 *  Stakers whose funds are managed by other pallets.
 * 
 *  This pallet does not apply any locks on them, therefore they are only virtually bonded. They
 *  are expected to be keyless accounts and hence should not be allowed to mutate their ledger
 *  directly via this pallet. Instead, these accounts are managed by other pallets and accessed
 *  via low level apis. We keep track of them to do minimal integrity checks.
 */
export interface VirtualStakersEnjinV1050  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: enjinV1050.AccountId32): Promise<(null | undefined)>
    getMany(block: Block, keys: enjinV1050.AccountId32[]): Promise<(null | undefined)[]>
    getKeys(block: Block): Promise<enjinV1050.AccountId32[]>
    getKeys(block: Block, key: enjinV1050.AccountId32): Promise<enjinV1050.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV1050.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV1050.AccountId32): AsyncIterable<enjinV1050.AccountId32[]>
    getPairs(block: Block): Promise<[k: enjinV1050.AccountId32, v: (null | undefined)][]>
    getPairs(block: Block, key: enjinV1050.AccountId32): Promise<[k: enjinV1050.AccountId32, v: (null | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: enjinV1050.AccountId32, v: (null | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: enjinV1050.AccountId32): AsyncIterable<[k: enjinV1050.AccountId32, v: (null | undefined)][]>
}

export const counterForVirtualStakers =  {
    /**
     * Counter for the related counted storage map
     */
    enjinV1050: new StorageType('Staking.CounterForVirtualStakers', 'Default', [], sts.number()) as CounterForVirtualStakersEnjinV1050,
}

/**
 * Counter for the related counted storage map
 */
export interface CounterForVirtualStakersEnjinV1050  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const disabledValidators =  {
    /**
     *  Indices of validators that have offended in the active era. The offenders are disabled for a
     *  whole era. For this reason they are kept here - only staking pallet knows about eras. The
     *  implementor of [`DisablingStrategy`] defines if a validator should be disabled which
     *  implicitly means that the implementor also controls the max number of disabled validators.
     * 
     *  The vec is always kept sorted so that we can find whether a given validator has previously
     *  offended using binary search.
     */
    enjinV1050: new StorageType('Staking.DisabledValidators', 'Default', [], sts.array(() => sts.number())) as DisabledValidatorsEnjinV1050,
}

/**
 *  Indices of validators that have offended in the active era. The offenders are disabled for a
 *  whole era. For this reason they are kept here - only staking pallet knows about eras. The
 *  implementor of [`DisablingStrategy`] defines if a validator should be disabled which
 *  implicitly means that the implementor also controls the max number of disabled validators.
 * 
 *  The vec is always kept sorted so that we can find whether a given validator has previously
 *  offended using binary search.
 */
export interface DisabledValidatorsEnjinV1050  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number[]
    get(block: Block): Promise<(number[] | undefined)>
}
