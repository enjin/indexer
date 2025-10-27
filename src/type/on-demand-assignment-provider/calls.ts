import { sts, Block, Bytes, Option, Result, CallType, RuntimeCtx } from '../support'
import * as v1060 from '../v1060'

export const placeOrderAllowDeath = {
    name: 'OnDemandAssignmentProvider.place_order_allow_death',
    /**
     * Create a single on demand core order.
     * Will use the spot price for the current block and will reap the account if needed.
     *
     * Parameters:
     * - `origin`: The sender of the call, funds will be withdrawn from this account.
     * - `max_amount`: The maximum balance to withdraw from the origin to place an order.
     * - `para_id`: A `ParaId` the origin wants to provide blockspace for.
     *
     * Errors:
     * - `InsufficientBalance`: from the Currency implementation
     * - `QueueFull`
     * - `SpotPriceHigherThanMaxAmount`
     *
     * Events:
     * - `OnDemandOrderPlaced`
     */
    v1060: new CallType(
        'OnDemandAssignmentProvider.place_order_allow_death',
        sts.struct({
            maxAmount: sts.bigint(),
            paraId: v1060.Id,
        })
    ),
}

export const placeOrderKeepAlive = {
    name: 'OnDemandAssignmentProvider.place_order_keep_alive',
    /**
     * Same as the [`place_order_allow_death`](Self::place_order_allow_death) call , but with a
     * check that placing the order will not reap the account.
     *
     * Parameters:
     * - `origin`: The sender of the call, funds will be withdrawn from this account.
     * - `max_amount`: The maximum balance to withdraw from the origin to place an order.
     * - `para_id`: A `ParaId` the origin wants to provide blockspace for.
     *
     * Errors:
     * - `InsufficientBalance`: from the Currency implementation
     * - `QueueFull`
     * - `SpotPriceHigherThanMaxAmount`
     *
     * Events:
     * - `OnDemandOrderPlaced`
     */
    v1060: new CallType(
        'OnDemandAssignmentProvider.place_order_keep_alive',
        sts.struct({
            maxAmount: sts.bigint(),
            paraId: v1060.Id,
        })
    ),
}

export const placeOrderWithCredits = {
    name: 'OnDemandAssignmentProvider.place_order_with_credits',
    /**
     * Create a single on demand core order with credits.
     * Will charge the owner's on-demand credit account the spot price for the current block.
     *
     * Parameters:
     * - `origin`: The sender of the call, on-demand credits will be withdrawn from this
     *   account.
     * - `max_amount`: The maximum number of credits to spend from the origin to place an
     *   order.
     * - `para_id`: A `ParaId` the origin wants to provide blockspace for.
     *
     * Errors:
     * - `InsufficientCredits`
     * - `QueueFull`
     * - `SpotPriceHigherThanMaxAmount`
     *
     * Events:
     * - `OnDemandOrderPlaced`
     */
    v1060: new CallType(
        'OnDemandAssignmentProvider.place_order_with_credits',
        sts.struct({
            maxAmount: sts.bigint(),
            paraId: v1060.Id,
        })
    ),
}
