import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as matrixEnjinV1012 from '../matrixEnjinV1012'

export const proposed =  {
    name: 'CommunityPool.Proposed',
    /**
     * New proposal.
     */
    matrixEnjinV603: new EventType(
        'CommunityPool.Proposed',
        sts.struct({
            proposalIndex: sts.number(),
        })
    ),
}

export const spending =  {
    name: 'CommunityPool.Spending',
    /**
     * We have ended a spend period and will now allocate funds.
     */
    matrixEnjinV603: new EventType(
        'CommunityPool.Spending',
        sts.struct({
            budgetRemaining: sts.bigint(),
        })
    ),
}

export const awarded =  {
    name: 'CommunityPool.Awarded',
    /**
     * Some funds have been allocated.
     */
    matrixEnjinV603: new EventType(
        'CommunityPool.Awarded',
        sts.struct({
            proposalIndex: sts.number(),
            award: sts.bigint(),
            account: matrixEnjinV603.AccountId32,
        })
    ),
}

export const rejected =  {
    name: 'CommunityPool.Rejected',
    /**
     * A proposal was rejected; funds were slashed.
     */
    matrixEnjinV603: new EventType(
        'CommunityPool.Rejected',
        sts.struct({
            proposalIndex: sts.number(),
            slashed: sts.bigint(),
        })
    ),
}

export const burnt =  {
    name: 'CommunityPool.Burnt',
    /**
     * Some of our funds have been burnt.
     */
    matrixEnjinV603: new EventType(
        'CommunityPool.Burnt',
        sts.struct({
            burntFunds: sts.bigint(),
        })
    ),
}

export const rollover =  {
    name: 'CommunityPool.Rollover',
    /**
     * Spending has finished; this is the amount that rolls over until next spend.
     */
    matrixEnjinV603: new EventType(
        'CommunityPool.Rollover',
        sts.struct({
            rolloverBalance: sts.bigint(),
        })
    ),
}

export const deposit =  {
    name: 'CommunityPool.Deposit',
    /**
     * Some funds have been deposited.
     */
    matrixEnjinV603: new EventType(
        'CommunityPool.Deposit',
        sts.struct({
            value: sts.bigint(),
        })
    ),
}

export const spendApproved =  {
    name: 'CommunityPool.SpendApproved',
    /**
     * A new spend proposal has been approved.
     */
    matrixEnjinV603: new EventType(
        'CommunityPool.SpendApproved',
        sts.struct({
            proposalIndex: sts.number(),
            amount: sts.bigint(),
            beneficiary: matrixEnjinV603.AccountId32,
        })
    ),
}

export const updatedInactive =  {
    name: 'CommunityPool.UpdatedInactive',
    /**
     * The inactive funds of the pallet have been updated.
     */
    matrixEnjinV603: new EventType(
        'CommunityPool.UpdatedInactive',
        sts.struct({
            reactivated: sts.bigint(),
            deactivated: sts.bigint(),
        })
    ),
}

export const assetSpendApproved =  {
    name: 'CommunityPool.AssetSpendApproved',
    /**
     * A new asset spend proposal has been approved.
     */
    matrixEnjinV1012: new EventType(
        'CommunityPool.AssetSpendApproved',
        sts.struct({
            index: sts.number(),
            amount: sts.bigint(),
            beneficiary: matrixEnjinV1012.AccountId32,
            validFrom: sts.number(),
            expireAt: sts.number(),
        })
    ),
}

export const assetSpendVoided =  {
    name: 'CommunityPool.AssetSpendVoided',
    /**
     * An approved spend was voided.
     */
    matrixEnjinV1012: new EventType(
        'CommunityPool.AssetSpendVoided',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const paid =  {
    name: 'CommunityPool.Paid',
    /**
     * A payment happened.
     */
    matrixEnjinV1012: new EventType(
        'CommunityPool.Paid',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const paymentFailed =  {
    name: 'CommunityPool.PaymentFailed',
    /**
     * A payment failed and can be retried.
     */
    matrixEnjinV1012: new EventType(
        'CommunityPool.PaymentFailed',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const spendProcessed =  {
    name: 'CommunityPool.SpendProcessed',
    /**
     * A spend was processed and removed from the storage. It might have been successfully
     * paid or it may have expired.
     */
    matrixEnjinV1012: new EventType(
        'CommunityPool.SpendProcessed',
        sts.struct({
            index: sts.number(),
        })
    ),
}
