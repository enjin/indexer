import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as enjinV100 from '../enjinV100'

export const create =  {
    name: 'Crowdloan.create',
    /**
     * Create a new crowdloaning campaign for a parachain slot with the given lease period range.
     * 
     * This applies a lock to your parachain configuration, ensuring that it cannot be changed
     * by the parachain manager.
     */
    enjinV100: new CallType(
        'Crowdloan.create',
        sts.struct({
            index: sts.number(),
            cap: sts.bigint(),
            firstPeriod: sts.number(),
            lastPeriod: sts.number(),
            end: sts.number(),
            verifier: sts.option(() => enjinV100.MultiSigner),
        })
    ),
}

export const contribute =  {
    name: 'Crowdloan.contribute',
    /**
     * Contribute to a crowd sale. This will transfer some balance over to fund a parachain
     * slot. It will be withdrawable when the crowdloan has ended and the funds are unused.
     */
    enjinV100: new CallType(
        'Crowdloan.contribute',
        sts.struct({
            index: sts.number(),
            value: sts.bigint(),
            signature: sts.option(() => enjinV100.MultiSignature),
        })
    ),
}

export const withdraw =  {
    name: 'Crowdloan.withdraw',
    /**
     * Withdraw full balance of a specific contributor.
     * 
     * Origin must be signed, but can come from anyone.
     * 
     * The fund must be either in, or ready for, retirement. For a fund to be *in* retirement, then the retirement
     * flag must be set. For a fund to be ready for retirement, then:
     * - it must not already be in retirement;
     * - the amount of raised funds must be bigger than the _free_ balance of the account;
     * - and either:
     *   - the block number must be at least `end`; or
     *   - the current lease period must be greater than the fund's `last_period`.
     * 
     * In this case, the fund's retirement flag is set and its `end` is reset to the current block
     * number.
     * 
     * - `who`: The account whose contribution should be withdrawn.
     * - `index`: The parachain to whose crowdloan the contribution was made.
     */
    enjinV100: new CallType(
        'Crowdloan.withdraw',
        sts.struct({
            who: enjinV100.AccountId32,
            index: sts.number(),
        })
    ),
}

export const refund =  {
    name: 'Crowdloan.refund',
    /**
     * Automatically refund contributors of an ended crowdloan.
     * Due to weight restrictions, this function may need to be called multiple
     * times to fully refund all users. We will refund `RemoveKeysLimit` users at a time.
     * 
     * Origin must be signed, but can come from anyone.
     */
    enjinV100: new CallType(
        'Crowdloan.refund',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const dissolve =  {
    name: 'Crowdloan.dissolve',
    /**
     * Remove a fund after the retirement period has ended and all funds have been returned.
     */
    enjinV100: new CallType(
        'Crowdloan.dissolve',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const edit =  {
    name: 'Crowdloan.edit',
    /**
     * Edit the configuration for an in-progress crowdloan.
     * 
     * Can only be called by Root origin.
     */
    enjinV100: new CallType(
        'Crowdloan.edit',
        sts.struct({
            index: sts.number(),
            cap: sts.bigint(),
            firstPeriod: sts.number(),
            lastPeriod: sts.number(),
            end: sts.number(),
            verifier: sts.option(() => enjinV100.MultiSigner),
        })
    ),
}

export const addMemo =  {
    name: 'Crowdloan.add_memo',
    /**
     * Add an optional memo to an existing crowdloan contribution.
     * 
     * Origin must be Signed, and the user must have contributed to the crowdloan.
     */
    enjinV100: new CallType(
        'Crowdloan.add_memo',
        sts.struct({
            index: enjinV100.Id,
            memo: sts.bytes(),
        })
    ),
}

export const poke =  {
    name: 'Crowdloan.poke',
    /**
     * Poke the fund into `NewRaise`
     * 
     * Origin must be Signed, and the fund has non-zero raise.
     */
    enjinV100: new CallType(
        'Crowdloan.poke',
        sts.struct({
            index: enjinV100.Id,
        })
    ),
}

export const contributeAll =  {
    name: 'Crowdloan.contribute_all',
    /**
     * Contribute your entire balance to a crowd sale. This will transfer the entire balance of a user over to fund a parachain
     * slot. It will be withdrawable when the crowdloan has ended and the funds are unused.
     */
    enjinV100: new CallType(
        'Crowdloan.contribute_all',
        sts.struct({
            index: sts.number(),
            signature: sts.option(() => enjinV100.MultiSignature),
        })
    ),
}
