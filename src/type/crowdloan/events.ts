import { sts, Block, Bytes, Option, Result, EventType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'
import * as v100 from '../v100'
import * as enjinV101 from '../enjinV101'
import * as v104 from '../v104'
import * as v105 from '../v105'

export const created = {
    name: 'Crowdloan.Created',
    /**
     * Create a new crowdloaning campaign.
     */
    enjinV100: new EventType(
        'Crowdloan.Created',
        sts.struct({
            paraId: enjinV100.Id,
        })
    ),
}

export const contributed = {
    name: 'Crowdloan.Contributed',
    /**
     * Contributed to a crowd sale.
     */
    enjinV100: new EventType(
        'Crowdloan.Contributed',
        sts.struct({
            who: enjinV100.AccountId32,
            fundIndex: enjinV100.Id,
            amount: sts.bigint(),
        })
    ),
}

export const withdrew = {
    name: 'Crowdloan.Withdrew',
    /**
     * Withdrew full balance of a contributor.
     */
    enjinV100: new EventType(
        'Crowdloan.Withdrew',
        sts.struct({
            who: enjinV100.AccountId32,
            fundIndex: enjinV100.Id,
            amount: sts.bigint(),
        })
    ),
}

export const partiallyRefunded = {
    name: 'Crowdloan.PartiallyRefunded',
    /**
     * The loans in a fund have been partially dissolved, i.e. there are some left
     * over child keys that still need to be killed.
     */
    enjinV100: new EventType(
        'Crowdloan.PartiallyRefunded',
        sts.struct({
            paraId: enjinV100.Id,
        })
    ),
}

export const allRefunded = {
    name: 'Crowdloan.AllRefunded',
    /**
     * All loans in a fund have been refunded.
     */
    enjinV100: new EventType(
        'Crowdloan.AllRefunded',
        sts.struct({
            paraId: enjinV100.Id,
        })
    ),
}

export const dissolved = {
    name: 'Crowdloan.Dissolved',
    /**
     * Fund is dissolved.
     */
    enjinV100: new EventType(
        'Crowdloan.Dissolved',
        sts.struct({
            paraId: enjinV100.Id,
        })
    ),
}

export const handleBidResult = {
    name: 'Crowdloan.HandleBidResult',
    /**
     * The result of trying to submit a new bid to the Slots pallet.
     */
    enjinV100: new EventType(
        'Crowdloan.HandleBidResult',
        sts.struct({
            paraId: enjinV100.Id,
            result: sts.result(
                () => sts.unit(),
                () => enjinV100.DispatchError
            ),
        })
    ),
    /**
     * The result of trying to submit a new bid to the Slots pallet.
     */
    enjinV101: new EventType(
        'Crowdloan.HandleBidResult',
        sts.struct({
            paraId: enjinV101.Id,
            result: sts.result(
                () => sts.unit(),
                () => enjinV101.DispatchError
            ),
        })
    ),
    /**
     * The result of trying to submit a new bid to the Slots pallet.
     */
    v100: new EventType(
        'Crowdloan.HandleBidResult',
        sts.struct({
            paraId: v100.Id,
            result: sts.result(
                () => sts.unit(),
                () => v100.DispatchError
            ),
        })
    ),
    /**
     * The result of trying to submit a new bid to the Slots pallet.
     */
    v104: new EventType(
        'Crowdloan.HandleBidResult',
        sts.struct({
            paraId: v104.Id,
            result: sts.result(
                () => sts.unit(),
                () => v104.DispatchError
            ),
        })
    ),
    /**
     * The result of trying to submit a new bid to the Slots pallet.
     */
    v105: new EventType(
        'Crowdloan.HandleBidResult',
        sts.struct({
            paraId: v105.Id,
            result: sts.result(
                () => sts.unit(),
                () => v105.DispatchError
            ),
        })
    ),
}

export const edited = {
    name: 'Crowdloan.Edited',
    /**
     * The configuration to a crowdloan has been edited.
     */
    enjinV100: new EventType(
        'Crowdloan.Edited',
        sts.struct({
            paraId: enjinV100.Id,
        })
    ),
}

export const memoUpdated = {
    name: 'Crowdloan.MemoUpdated',
    /**
     * A memo has been updated.
     */
    enjinV100: new EventType(
        'Crowdloan.MemoUpdated',
        sts.struct({
            who: enjinV100.AccountId32,
            paraId: enjinV100.Id,
            memo: sts.bytes(),
        })
    ),
}

export const addedToNewRaise = {
    name: 'Crowdloan.AddedToNewRaise',
    /**
     * A parachain has been moved to `NewRaise`
     */
    enjinV100: new EventType(
        'Crowdloan.AddedToNewRaise',
        sts.struct({
            paraId: enjinV100.Id,
        })
    ),
}
