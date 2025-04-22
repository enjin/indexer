import { sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'
import * as enjinV101 from '../enjinV101'
import * as v101 from '../v101'
import * as enjinV1025 from '../enjinV1025'

export const palletId = {
    /**
     *  The nomination pool's pallet id.
     */
    enjinV100: new ConstantType('NominationPools.PalletId', enjinV100.PalletId),
}

export const maxPointsToBalance = {
    /**
     *  The maximum pool points-to-balance ratio that an `open` pool can have.
     *
     *  This is important in the event slashing takes place and the pool's points-to-balance
     *  ratio becomes disproportional.
     *
     *  Moreover, this relates to the `RewardCounter` type as well, as the arithmetic operations
     *  are a function of number of points, and by setting this value to e.g. 10, you ensure
     *  that the total number of points in the system are at most 10 times the total_issuance of
     *  the chain, in the absolute worse case.
     *
     *  For a value of 10, the threshold would be a pool points-to-balance ratio of 10:1.
     *  Such a scenario would also be the equivalent of the pool being 90% slashed.
     */
    enjinV100: new ConstantType('NominationPools.MaxPointsToBalance', sts.number()),
}

export const postUnbondingPoolsWindow = {
    /**
     *  The amount of eras a `SubPools::with_era` pool can exist before it gets merged into the
     *  `SubPools::no_era` pool. In other words, this is the amount of eras a member will be
     *  able to withdraw from an unbonding pool which is guaranteed to have the correct ratio of
     *  points to balance; once the `with_era` pool is merged into the `no_era` pool, the ratio
     *  can become skewed due to some slashed ratio getting merged in at some point.
     */
    enjinV100: new ConstantType('NominationPools.PostUnbondingPoolsWindow', sts.number()),
}

export const maxUnbonding = {
    /**
     *  The maximum number of simultaneous unbonding chunks that can exist per member.
     */
    enjinV100: new ConstantType('NominationPools.MaxUnbonding', sts.number()),
}

export const minDuration = {
    /**
     *  Min duration of a pool's bonus cycle in eras
     */
    enjinV100: new ConstantType('NominationPools.MinDuration', sts.number()),
}

export const maxDuration = {
    /**
     *  Max duration of a pool's bonus cycle in eras
     */
    enjinV100: new ConstantType('NominationPools.MaxDuration', sts.number()),
}

export const poolCollectionId = {
    /**
     *  The collection id that is used for pool NFTs
     */
    enjinV100: new ConstantType('NominationPools.PoolCollectionId', sts.bigint()),
}

export const stakedEnjCollectionId = {
    /**
     *  The collection id that is used for sENJ tokens
     */
    enjinV100: new ConstantType('NominationPools.StakedEnjCollectionId', sts.bigint()),
}

export const stakedEnjCollectionOwner = {
    /**
     *  The owner of the sENJ collection
     */
    enjinV100: new ConstantType('NominationPools.StakedEnjCollectionOwner', enjinV100.AccountId32),
}

export const bonusPercentage = {
    /**
     *  The percentage of each pool's rewards that goes to the bonus
     */
    enjinV100: new ConstantType('NominationPools.BonusPercentage', enjinV100.Perbill),
}

export const baseBonusRewardPercentage = {
    /**
     *  Share of bonus reward that is distributed to everyone regardless of their weight
     */
    enjinV100: new ConstantType('NominationPools.BaseBonusRewardPercentage', enjinV100.Perbill),
}

export const unclaimedBalanceReceiver = {
    /**
     *  The account that will receive the deposit and commission if the pool's token is burned.
     *  It also receives the leftover bonus if a pool is destroyed.
     */
    enjinV100: new ConstantType('NominationPools.UnclaimedBalanceReceiver', enjinV100.AccountId32),
}

export const capacityMutationPeriod = {
    /**
     *  The number of eras its allowed to mutate the pools capacity
     */
    enjinV100: new ConstantType('NominationPools.CapacityMutationPeriod', sts.number()),
}

export const collatorRewardPool = {
    /**
     *  The pool ID for system account holding the collator rewards.
     */
    enjinV101: new ConstantType('NominationPools.CollatorRewardPool', enjinV101.PalletId),
}

export const earlyBirdBonusDistributionBlock = {
    /**
     *  The block number after which the early bird bonus can be distributed
     */
    enjinV101: new ConstantType('NominationPools.EarlyBirdBonusDistributionBlock', sts.number()),
}

export const earlyBirdBonusTotalAmount = {
    /**
     *  The total amount that will be distributed as early bird bonus
     */
    enjinV101: new ConstantType('NominationPools.EarlyBirdBonusTotalAmount', sts.bigint()),
}

export const maxEarlyBirdBonusQueueItems = {
    /**
     *  The maximum number of items in the early bird bonus queue
     */
    enjinV101: new ConstantType('NominationPools.MaxEarlyBirdBonusQueueItems', sts.number()),
}

export const earlyBirdBonusAccount = {
    /**
     *  The account id that holds early bird bonus
     */
    enjinV101: new ConstantType('NominationPools.EarlyBirdBonusAccount', enjinV101.AccountId32),
}

export const globalMaxCapacity = {
    /**
     *  The global maximum pool capacity
     */
    enjinV120: new ConstantType('NominationPools.GlobalMaxCapacity', sts.bigint()),
}

export const defaultMaxCapacity = {
    /**
     *  The default maximum pool capacity
     */
    enjinV120: new ConstantType('NominationPools.DefaultMaxCapacity', sts.bigint()),
}

export const attributeKeyMaxLength = {
    /**
     *  The max attribute key length
     */
    enjinV120: new ConstantType('NominationPools.AttributeKeyMaxLength', sts.number()),
}

export const attributeValueMaxLength = {
    /**
     *  The max attribute value length
     */
    enjinV120: new ConstantType('NominationPools.AttributeValueMaxLength', sts.number()),
}

export const maxCapacityAttributeKey = {
    /**
     *  Max pool capacity attribute key
     */
    enjinV120: new ConstantType('NominationPools.MaxCapacityAttributeKey', sts.bytes()),
}

export const earlyBirdPaymentPeriod = {
    /**
     *  The number of blocks between early bird payment unlocks
     */
    enjinV1022: new ConstantType('NominationPools.EarlyBirdPaymentPeriod', sts.number()),
}

export const earlyBirdPaymentCount = {
    /**
     *  The max payments from early bird bonus
     */
    enjinV1022: new ConstantType('NominationPools.EarlyBirdPaymentCount', sts.number()),
}

export const maxPoolNameLength = {
    /**
     *  The maximum length of a pool name
     */
    enjinV1023: new ConstantType('NominationPools.MaxPoolNameLength', sts.number()),
}

export const earlyBirdReimbursementAccountId = {
    /**
     *  The account that the early bird ENJ reimbursement is sent from
     */
    enjinV1025: new ConstantType('NominationPools.EarlyBirdReimbursementAccountId', enjinV1025.AccountId32),
}

export const orphanedPoolAccountId = {
    /**
     *  The account that will receive the deposit and commission if the pool's token is burned
     */
    v101: new ConstantType('NominationPools.OrphanedPoolAccountId', v101.AccountId32),
}
