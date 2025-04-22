import { sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx } from '../support'
import * as v104 from '../v104'
import * as matrixEnjinV605 from '../matrixEnjinV605'

export const prefix = {
    /**
     *  Prefix added to messages
     */
    matrixEnjinV603: new ConstantType('Claims.Prefix', sts.bytes()),
}

export const maxBatchAccounts = {
    matrixEnjinV603: new ConstantType('Claims.MaxBatchAccounts', sts.number()),
}

export const minClaimDelay = {
    /**
     *  Minimum Delay for claiming ENJ
     */
    matrixEnjinV603: new ConstantType('Claims.MinClaimDelay', sts.number()),
}

export const claimDistributorAccountId = {
    /**
     *  The [`AccountId`](frame_system::Config::AccountId) that holds ENJ2 to be
     *  distributed on Claim
     */
    matrixEnjinV605: new ConstantType('Claims.ClaimDistributorAccountId', matrixEnjinV605.AccountId32),
}

export const stakedEnjCollectionId = {
    /**
     *  The collection id that is used for sENJ tokens
     */
    enjinV100: new ConstantType('Claims.StakedEnjCollectionId', sts.bigint()),
}

export const minEarlyBirdDelay = {
    /**
     *  Minimum Delay for claiming Early bird bonus
     */
    enjinV100: new ConstantType('Claims.MinEarlyBirdDelay', sts.number()),
}

export const earlyBirdRewardRate = {
    /**
     *  Reward rate for Early bird bonus
     */
    v104: new ConstantType('Claims.EarlyBirdRewardRate', v104.Perbill),
}
