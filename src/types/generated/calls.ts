import assert from 'assert'
import {Chain, ChainContext, CallContext, Call, Result, Option} from './support'
import * as efinityV1 from './efinityV1'
import * as v3000 from './v3000'
import * as v3010 from './v3010'
import * as efinityV2 from './efinityV2'
import * as efinityV3 from './efinityV3'
import * as efinityV3000 from './efinityV3000'

export class AssetRegistryRegisterAssetCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'AssetRegistry.register_asset')
        this._chain = ctx._chain
        this.call = call
    }

    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('AssetRegistry.register_asset') === 'ea0e92743e5190ca6e86478c6aac3405aad272cde9727e1bccad7353b4897dfd'
    }

    get asEfinityV3000(): {metadata: efinityV3000.AssetMetadata, assetId: (number | undefined)} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }
}

export class AssetRegistryUpdateAssetCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'AssetRegistry.update_asset')
        this._chain = ctx._chain
        this.call = call
    }

    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('AssetRegistry.update_asset') === 'f0aaddf85fa07e9a2fffd4789037ae636b40de5770aa401d4b1b40c176aa3eb3'
    }

    get asEfinityV3000(): {assetId: number, decimals: (number | undefined), name: (Uint8Array | undefined), symbol: (Uint8Array | undefined), existentialDeposit: (bigint | undefined), location: Option<(efinityV3000.VersionedMultiLocation | undefined)>, additional: (efinityV3000.CustomMetadata | undefined)} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }
}

export class AuthorshipSetUnclesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Authorship.set_uncles')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Provide a set of uncles.
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('Authorship.set_uncles') === 'cf2d7dac8c8babfdda54dfcca36fda32336dc937b0f1767c6b2332a9b718e0b5'
    }

    /**
     * Provide a set of uncles.
     */
    get asEfinityV3000(): {newUncles: efinityV3000.Header[]} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }
}

export class BalancesForceTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Balances.force_transfer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Exactly as `transfer`, except the origin must be root and the source account may be
     * specified.
     * # <weight>
     * - Same as transfer, but additional read and write because the source account is not
     *   assumed to be in the overlay.
     * # </weight>
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('Balances.force_transfer') === 'e5944fbe8224a17fe49f9c1d1d01efaf87fb1778fd39618512af54c9ba6f9dff'
    }

    /**
     * Exactly as `transfer`, except the origin must be root and the source account may be
     * specified.
     * # <weight>
     * - Same as transfer, but additional read and write because the source account is not
     *   assumed to be in the overlay.
     * # </weight>
     */
    get asEfinityV1(): {source: efinityV1.MultiAddress, dest: efinityV1.MultiAddress, value: bigint} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class BalancesForceUnreserveCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Balances.force_unreserve')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Unreserve some balance from a user by force.
     * 
     * Can only be called by ROOT.
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('Balances.force_unreserve') === '30bc48977e2a7ad3fc8ac014948ded50fc54886bad9a1f65b02bb64f27d8a6be'
    }

    /**
     * Unreserve some balance from a user by force.
     * 
     * Can only be called by ROOT.
     */
    get asEfinityV1(): {who: efinityV1.MultiAddress, amount: bigint} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class BalancesSetBalanceCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Balances.set_balance')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the balances of a given account.
     * 
     * This will alter `FreeBalance` and `ReservedBalance` in storage. it will
     * also decrease the total issuance of the system (`TotalIssuance`).
     * If the new free or reserved balance is below the existential deposit,
     * it will reset the account nonce (`frame_system::AccountNonce`).
     * 
     * The dispatch origin for this call is `root`.
     * 
     * # <weight>
     * - Independent of the arguments.
     * - Contains a limited number of reads and writes.
     * ---------------------
     * - Base Weight:
     *     - Creating: 27.56 µs
     *     - Killing: 35.11 µs
     * - DB Weight: 1 Read, 1 Write to `who`
     * # </weight>
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('Balances.set_balance') === 'beb82909d38c015bc075ff8b107e47a02f8772bf5cf681d6cd84ef685e448a8f'
    }

    /**
     * Set the balances of a given account.
     * 
     * This will alter `FreeBalance` and `ReservedBalance` in storage. it will
     * also decrease the total issuance of the system (`TotalIssuance`).
     * If the new free or reserved balance is below the existential deposit,
     * it will reset the account nonce (`frame_system::AccountNonce`).
     * 
     * The dispatch origin for this call is `root`.
     * 
     * # <weight>
     * - Independent of the arguments.
     * - Contains a limited number of reads and writes.
     * ---------------------
     * - Base Weight:
     *     - Creating: 27.56 µs
     *     - Killing: 35.11 µs
     * - DB Weight: 1 Read, 1 Write to `who`
     * # </weight>
     */
    get asEfinityV1(): {who: efinityV1.MultiAddress, newFree: bigint, newReserved: bigint} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class BalancesTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Balances.transfer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfer some liquid free balance to another account.
     * 
     * `transfer` will set the `FreeBalance` of the sender and receiver.
     * It will decrease the total issuance of the system by the `TransferFee`.
     * If the sender's account is below the existential deposit as a result
     * of the transfer, the account will be reaped.
     * 
     * The dispatch origin for this call must be `Signed` by the transactor.
     * 
     * # <weight>
     * - Dependent on arguments but not critical, given proper implementations for input config
     *   types. See related functions below.
     * - It contains a limited number of reads and writes internally and no complex
     *   computation.
     * 
     * Related functions:
     * 
     *   - `ensure_can_withdraw` is always called internally but has a bounded complexity.
     *   - Transferring balances to accounts that did not exist before will cause
     *     `T::OnNewAccount::on_new_account` to be called.
     *   - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
     *   - `transfer_keep_alive` works the same way as `transfer`, but has an additional check
     *     that the transfer will not kill the origin account.
     * ---------------------------------
     * - Base Weight: 73.64 µs, worst case scenario (account created, account removed)
     * - DB Weight: 1 Read and 1 Write to destination account
     * - Origin account is already in memory, so no DB operations for them.
     * # </weight>
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('Balances.transfer') === 'fc85bea9d0d171982f66e8a55667d58dc9a1612bcafe84309942bf47e23e3094'
    }

    /**
     * Transfer some liquid free balance to another account.
     * 
     * `transfer` will set the `FreeBalance` of the sender and receiver.
     * It will decrease the total issuance of the system by the `TransferFee`.
     * If the sender's account is below the existential deposit as a result
     * of the transfer, the account will be reaped.
     * 
     * The dispatch origin for this call must be `Signed` by the transactor.
     * 
     * # <weight>
     * - Dependent on arguments but not critical, given proper implementations for input config
     *   types. See related functions below.
     * - It contains a limited number of reads and writes internally and no complex
     *   computation.
     * 
     * Related functions:
     * 
     *   - `ensure_can_withdraw` is always called internally but has a bounded complexity.
     *   - Transferring balances to accounts that did not exist before will cause
     *     `T::OnNewAccount::on_new_account` to be called.
     *   - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
     *   - `transfer_keep_alive` works the same way as `transfer`, but has an additional check
     *     that the transfer will not kill the origin account.
     * ---------------------------------
     * - Base Weight: 73.64 µs, worst case scenario (account created, account removed)
     * - DB Weight: 1 Read and 1 Write to destination account
     * - Origin account is already in memory, so no DB operations for them.
     * # </weight>
     */
    get asEfinityV1(): {dest: efinityV1.MultiAddress, value: bigint} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class BalancesTransferAllCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Balances.transfer_all')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfer the entire transferable balance from the caller account.
     * 
     * NOTE: This function only attempts to transfer _transferable_ balances. This means that
     * any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
     * transferred by this function. To ensure that this function results in a killed account,
     * you might need to prepare the account by removing any reference counters, storage
     * deposits, etc...
     * 
     * The dispatch origin of this call must be Signed.
     * 
     * - `dest`: The recipient of the transfer.
     * - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
     *   of the funds the account has, causing the sender account to be killed (false), or
     *   transfer everything except at least the existential deposit, which will guarantee to
     *   keep the sender account alive (true). # <weight>
     * - O(1). Just like transfer, but reading the user's transferable balance first.
     *   #</weight>
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('Balances.transfer_all') === '9c94c2ca9979f6551af6e123fb6b6ba14d026f862f9a023706f8f88c556b355f'
    }

    /**
     * Transfer the entire transferable balance from the caller account.
     * 
     * NOTE: This function only attempts to transfer _transferable_ balances. This means that
     * any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
     * transferred by this function. To ensure that this function results in a killed account,
     * you might need to prepare the account by removing any reference counters, storage
     * deposits, etc...
     * 
     * The dispatch origin of this call must be Signed.
     * 
     * - `dest`: The recipient of the transfer.
     * - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
     *   of the funds the account has, causing the sender account to be killed (false), or
     *   transfer everything except at least the existential deposit, which will guarantee to
     *   keep the sender account alive (true). # <weight>
     * - O(1). Just like transfer, but reading the user's transferable balance first.
     *   #</weight>
     */
    get asEfinityV1(): {dest: efinityV1.MultiAddress, keepAlive: boolean} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class BalancesTransferKeepAliveCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Balances.transfer_keep_alive')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Same as the [`transfer`] call, but with a check that the transfer will not kill the
     * origin account.
     * 
     * 99% of the time you want [`transfer`] instead.
     * 
     * [`transfer`]: struct.Pallet.html#method.transfer
     * # <weight>
     * - Cheaper than transfer because account cannot be killed.
     * - Base Weight: 51.4 µs
     * - DB Weight: 1 Read and 1 Write to dest (sender is in overlay already)
     * #</weight>
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('Balances.transfer_keep_alive') === 'fc85bea9d0d171982f66e8a55667d58dc9a1612bcafe84309942bf47e23e3094'
    }

    /**
     * Same as the [`transfer`] call, but with a check that the transfer will not kill the
     * origin account.
     * 
     * 99% of the time you want [`transfer`] instead.
     * 
     * [`transfer`]: struct.Pallet.html#method.transfer
     * # <weight>
     * - Cheaper than transfer because account cannot be killed.
     * - Base Weight: 51.4 µs
     * - DB Weight: 1 Read and 1 Write to dest (sender is in overlay already)
     * #</weight>
     */
    get asEfinityV1(): {dest: efinityV1.MultiAddress, value: bigint} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class BountiesAcceptCuratorCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Bounties.accept_curator')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Accept the curator role for a bounty.
     * A deposit will be reserved from curator and refund upon successful payout.
     * 
     * May only be called from the curator.
     * 
     * # <weight>
     * - O(1).
     * # </weight>
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Bounties.accept_curator') === '77b779cfa161e4e6eeffa4c35f55ae2bd68aba06e4b5d48766892991c97064c9'
    }

    /**
     * Accept the curator role for a bounty.
     * A deposit will be reserved from curator and refund upon successful payout.
     * 
     * May only be called from the curator.
     * 
     * # <weight>
     * - O(1).
     * # </weight>
     */
    get asEfinityV2(): {bountyId: number} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class BountiesApproveBountyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Bounties.approve_bounty')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Approve a bounty proposal. At a later time, the bounty will be funded and become active
     * and the original deposit will be returned.
     * 
     * May only be called from `T::ApproveOrigin`.
     * 
     * # <weight>
     * - O(1).
     * # </weight>
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Bounties.approve_bounty') === '77b779cfa161e4e6eeffa4c35f55ae2bd68aba06e4b5d48766892991c97064c9'
    }

    /**
     * Approve a bounty proposal. At a later time, the bounty will be funded and become active
     * and the original deposit will be returned.
     * 
     * May only be called from `T::ApproveOrigin`.
     * 
     * # <weight>
     * - O(1).
     * # </weight>
     */
    get asEfinityV2(): {bountyId: number} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class BountiesAwardBountyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Bounties.award_bounty')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Award bounty to a beneficiary account. The beneficiary will be able to claim the funds
     * after a delay.
     * 
     * The dispatch origin for this call must be the curator of this bounty.
     * 
     * - `bounty_id`: Bounty ID to award.
     * - `beneficiary`: The beneficiary account whom will receive the payout.
     * 
     * # <weight>
     * - O(1).
     * # </weight>
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Bounties.award_bounty') === 'cfa73dafdcbe89b3b4e24bfc41cf4f3b1fcd9527b052ecc6549b6ac07b965606'
    }

    /**
     * Award bounty to a beneficiary account. The beneficiary will be able to claim the funds
     * after a delay.
     * 
     * The dispatch origin for this call must be the curator of this bounty.
     * 
     * - `bounty_id`: Bounty ID to award.
     * - `beneficiary`: The beneficiary account whom will receive the payout.
     * 
     * # <weight>
     * - O(1).
     * # </weight>
     */
    get asEfinityV2(): {bountyId: number, beneficiary: efinityV2.MultiAddress} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class BountiesClaimBountyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Bounties.claim_bounty')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Claim the payout from an awarded bounty after payout delay.
     * 
     * The dispatch origin for this call must be the beneficiary of this bounty.
     * 
     * - `bounty_id`: Bounty ID to claim.
     * 
     * # <weight>
     * - O(1).
     * # </weight>
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Bounties.claim_bounty') === '77b779cfa161e4e6eeffa4c35f55ae2bd68aba06e4b5d48766892991c97064c9'
    }

    /**
     * Claim the payout from an awarded bounty after payout delay.
     * 
     * The dispatch origin for this call must be the beneficiary of this bounty.
     * 
     * - `bounty_id`: Bounty ID to claim.
     * 
     * # <weight>
     * - O(1).
     * # </weight>
     */
    get asEfinityV2(): {bountyId: number} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class BountiesCloseBountyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Bounties.close_bounty')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Cancel a proposed or active bounty. All the funds will be sent to treasury and
     * the curator deposit will be unreserved if possible.
     * 
     * Only `T::RejectOrigin` is able to cancel a bounty.
     * 
     * - `bounty_id`: Bounty ID to cancel.
     * 
     * # <weight>
     * - O(1).
     * # </weight>
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Bounties.close_bounty') === '77b779cfa161e4e6eeffa4c35f55ae2bd68aba06e4b5d48766892991c97064c9'
    }

    /**
     * Cancel a proposed or active bounty. All the funds will be sent to treasury and
     * the curator deposit will be unreserved if possible.
     * 
     * Only `T::RejectOrigin` is able to cancel a bounty.
     * 
     * - `bounty_id`: Bounty ID to cancel.
     * 
     * # <weight>
     * - O(1).
     * # </weight>
     */
    get asEfinityV2(): {bountyId: number} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class BountiesExtendBountyExpiryCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Bounties.extend_bounty_expiry')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Extend the expiry time of an active bounty.
     * 
     * The dispatch origin for this call must be the curator of this bounty.
     * 
     * - `bounty_id`: Bounty ID to extend.
     * - `remark`: additional information.
     * 
     * # <weight>
     * - O(1).
     * # </weight>
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Bounties.extend_bounty_expiry') === '710d6b76ffcee45bd9bffc1f299fa0b621450769559963379fa259c0f427f1bb'
    }

    /**
     * Extend the expiry time of an active bounty.
     * 
     * The dispatch origin for this call must be the curator of this bounty.
     * 
     * - `bounty_id`: Bounty ID to extend.
     * - `remark`: additional information.
     * 
     * # <weight>
     * - O(1).
     * # </weight>
     */
    get asEfinityV2(): {bountyId: number, remark: Uint8Array} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class BountiesProposeBountyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Bounties.propose_bounty')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Propose a new bounty.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
     * `DataDepositPerByte` for each byte in `reason`. It will be unreserved upon approval,
     * or slashed when rejected.
     * 
     * - `curator`: The curator account whom will manage this bounty.
     * - `fee`: The curator fee.
     * - `value`: The total payment amount of this bounty, curator fee included.
     * - `description`: The description of this bounty.
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Bounties.propose_bounty') === '6a012b4069a991972d0d3268cb20dfba3163919c325c7ebbe980b2dc15f1b1f5'
    }

    /**
     * Propose a new bounty.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
     * `DataDepositPerByte` for each byte in `reason`. It will be unreserved upon approval,
     * or slashed when rejected.
     * 
     * - `curator`: The curator account whom will manage this bounty.
     * - `fee`: The curator fee.
     * - `value`: The total payment amount of this bounty, curator fee included.
     * - `description`: The description of this bounty.
     */
    get asEfinityV2(): {value: bigint, description: Uint8Array} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class BountiesProposeCuratorCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Bounties.propose_curator')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Assign a curator to a funded bounty.
     * 
     * May only be called from `T::ApproveOrigin`.
     * 
     * # <weight>
     * - O(1).
     * # </weight>
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Bounties.propose_curator') === 'db115713847ce9db3eac62037c4aefcca595bcd9aa876776d8fba64491d881d3'
    }

    /**
     * Assign a curator to a funded bounty.
     * 
     * May only be called from `T::ApproveOrigin`.
     * 
     * # <weight>
     * - O(1).
     * # </weight>
     */
    get asEfinityV2(): {bountyId: number, curator: efinityV2.MultiAddress, fee: bigint} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class BountiesUnassignCuratorCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Bounties.unassign_curator')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Unassign curator from a bounty.
     * 
     * This function can only be called by the `RejectOrigin` a signed origin.
     * 
     * If this function is called by the `RejectOrigin`, we assume that the curator is
     * malicious or inactive. As a result, we will slash the curator when possible.
     * 
     * If the origin is the curator, we take this as a sign they are unable to do their job and
     * they willingly give up. We could slash them, but for now we allow them to recover their
     * deposit and exit without issue. (We may want to change this if it is abused.)
     * 
     * Finally, the origin can be anyone if and only if the curator is "inactive". This allows
     * anyone in the community to call out that a curator is not doing their due diligence, and
     * we should pick a new curator. In this case the curator should also be slashed.
     * 
     * # <weight>
     * - O(1).
     * # </weight>
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Bounties.unassign_curator') === '77b779cfa161e4e6eeffa4c35f55ae2bd68aba06e4b5d48766892991c97064c9'
    }

    /**
     * Unassign curator from a bounty.
     * 
     * This function can only be called by the `RejectOrigin` a signed origin.
     * 
     * If this function is called by the `RejectOrigin`, we assume that the curator is
     * malicious or inactive. As a result, we will slash the curator when possible.
     * 
     * If the origin is the curator, we take this as a sign they are unable to do their job and
     * they willingly give up. We could slash them, but for now we allow them to recover their
     * deposit and exit without issue. (We may want to change this if it is abused.)
     * 
     * Finally, the origin can be anyone if and only if the curator is "inactive". This allows
     * anyone in the community to call out that a curator is not doing their due diligence, and
     * we should pick a new curator. In this case the curator should also be slashed.
     * 
     * # <weight>
     * - O(1).
     * # </weight>
     */
    get asEfinityV2(): {bountyId: number} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class ClaimsClaimCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Claims.claim')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Make a claim to collect your EFI.
     * 
     * The dispatch origin for this call must be _None_.
     * 
     * Unsigned Validation:
     * A call to claim is deemed valid if the signature provided matches
     * the expected signed message of:
     * 
     * > Ethereum Signed Message:
     * > (configured prefix string)(address)
     * 
     * and `address` matches the `dest` account.
     * 
     * Parameters:
     * - `dest`: The destination account to payout the claim.
     * - `ethereum_signature`: The signature of an ethereum signed message
     *    matching the format described above.
     * 
     * <weight>
     * The weight of this call is invariant over the input parameters.
     * Weight includes logic to validate unsigned `claim` call.
     * 
     * Total Complexity: O(1)
     * </weight>
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('Claims.claim') === '46f6fbe643b51ee7e3a08e102493b6291f118e76145971a19fb90446b9af7251'
    }

    /**
     * Make a claim to collect your EFI.
     * 
     * The dispatch origin for this call must be _None_.
     * 
     * Unsigned Validation:
     * A call to claim is deemed valid if the signature provided matches
     * the expected signed message of:
     * 
     * > Ethereum Signed Message:
     * > (configured prefix string)(address)
     * 
     * and `address` matches the `dest` account.
     * 
     * Parameters:
     * - `dest`: The destination account to payout the claim.
     * - `ethereum_signature`: The signature of an ethereum signed message
     *    matching the format described above.
     * 
     * <weight>
     * The weight of this call is invariant over the input parameters.
     * Weight includes logic to validate unsigned `claim` call.
     * 
     * Total Complexity: O(1)
     * </weight>
     */
    get asEfinityV1(): {dest: Uint8Array, ethereumSignature: Uint8Array} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class ClaimsMintClaimCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Claims.mint_claim')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Mint a new claim to collect EFIs.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * Parameters:
     * - `who`: The Ethereum address allowed to collect this claim.
     * - `value`: The number of EFIs that will be claimed.
     * 
     * <weight>
     * The weight of this call is invariant over the input parameters.
     * 
     * Total Complexity: O(1)
     * </weight>
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('Claims.mint_claim') === 'bd93629e146aeda1b31bc7c1c194470feee46b9e4aed4d426ce152fe4c633fce'
    }

    /**
     * Mint a new claim to collect EFIs.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * Parameters:
     * - `who`: The Ethereum address allowed to collect this claim.
     * - `value`: The number of EFIs that will be claimed.
     * 
     * <weight>
     * The weight of this call is invariant over the input parameters.
     * 
     * Total Complexity: O(1)
     * </weight>
     */
    get asEfinityV1(): {who: Uint8Array, value: bigint} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class ClaimsMoveClaimCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Claims.move_claim')
        this._chain = ctx._chain
        this.call = call
    }

    get isEfinityV1(): boolean {
        return this._chain.getCallHash('Claims.move_claim') === '141d7420c9fafec5c9c80590a2dc9e528311f92ec2465a0dfc29eb44c0c7f2c5'
    }

    get asEfinityV1(): {old: Uint8Array, new: Uint8Array, maybePreclaim: (Uint8Array | undefined)} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }

    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Claims.move_claim') === 'f6ca004c519bffb9d3e43365a3d6810f9f443ead5407fe14deb41c7ab92c1336'
    }

    get asEfinityV2(): {old: Uint8Array, new: Uint8Array, preclaim: (Uint8Array | undefined)} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class CollatorStakingForceSetCurrentMaxCandidatesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CollatorStaking.force_set_current_max_candidates')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the current max candidates, must be within 0 and `T::MaxCandidates`
     * Sudo call only
     */
    get isEfinityV3(): boolean {
        return this._chain.getCallHash('CollatorStaking.force_set_current_max_candidates') === '310ae211a2124713dfde4d9d728ef98d0b24b616c3e5410d3181c5ef2e8ddade'
    }

    /**
     * Set the current max candidates, must be within 0 and `T::MaxCandidates`
     * Sudo call only
     */
    get asEfinityV3(): {maxCandidates: number} {
        assert(this.isEfinityV3)
        return this._chain.decodeCall(this.call)
    }
}

export class CollatorStakingForceSetMinCollatorStakeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CollatorStaking.force_set_min_collator_stake')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the MinCollatorStake amount
     * ForceOrigin call only
     */
    get isV3010(): boolean {
        return this._chain.getCallHash('CollatorStaking.force_set_min_collator_stake') === '06eff2469bc17d7aebdedd42c10947459c1f0d4fae809ce8e19728d9c971339c'
    }

    /**
     * Set the MinCollatorStake amount
     * ForceOrigin call only
     */
    get asV3010(): {minCollatorStake: bigint} {
        assert(this.isV3010)
        return this._chain.decodeCall(this.call)
    }
}

export class CollatorStakingJoinCandidatesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CollatorStaking.join_candidates')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Join the list of candidates for collation.
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('CollatorStaking.join_candidates') === 'a3bdd43eed59e7b65720eef9b2dfe72389ca71ac9dbe7fe2874438aae4f18886'
    }

    /**
     * Join the list of candidates for collation.
     */
    get asEfinityV1(): {amount: bigint} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Join the list of candidates for collation.
     */
    get isV3010(): boolean {
        return this._chain.getCallHash('CollatorStaking.join_candidates') === 'f6b28a93d2ad8a91812f4261c4e03231091780b2314de37559af3b8f507099bc'
    }

    /**
     * Join the list of candidates for collation.
     */
    get asV3010(): {amount: bigint, rewardsCut: number} {
        assert(this.isV3010)
        return this._chain.decodeCall(this.call)
    }
}

export class CollatorStakingNominateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CollatorStaking.nominate')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Nominate a specific candidate to be selected for collation and block production.
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('CollatorStaking.nominate') === '30f29e64cc7b4f99f08cb48567ffb4af918d57fe9455b7152205397218f72966'
    }

    /**
     * Nominate a specific candidate to be selected for collation and block production.
     */
    get asEfinityV1(): {collatorId: Uint8Array, amount: bigint} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class CollatorStakingRemoveNominationCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CollatorStaking.remove_nomination')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove a nomination previously registered for a specific collator candidate.
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('CollatorStaking.remove_nomination') === '850c9ad9685e8b8f2587b1f9106e128c780b5d96e4560a40cf7d75d51543f181'
    }

    /**
     * Remove a nomination previously registered for a specific collator candidate.
     */
    get asEfinityV1(): {collatorId: Uint8Array} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class CollatorStakingSetBlockProducerCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CollatorStaking.set_block_producer')
        this._chain = ctx._chain
        this.call = call
    }

    get isEfinityV1(): boolean {
        return this._chain.getCallHash('CollatorStaking.set_block_producer') === '67f88a22ebfbd8ee828d23cd78f4ee4ef5fe097d8e8b73cb87772e81f42726af'
    }

    get asEfinityV1(): {producer: Uint8Array} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class CollatorStakingSetInvulnerablesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CollatorStaking.set_invulnerables')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Join the list of candidates for collation.
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('CollatorStaking.set_invulnerables') === 'f991968966792a125cac7c888dc7194239a215e624de7c15edbe7afe0e683c8a'
    }

    /**
     * Join the list of candidates for collation.
     */
    get asEfinityV2(): {accounts: Uint8Array[]} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class CollatorStakingUnbondCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CollatorStaking.unbond')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Leave the collator set of this parachain.
     * 
     * In this case, if the calling account is already a collator, an exit
     * is registered so that this account is not selected for the next set of collators.
     * Otherwise, if the account is only a candidate, this candidate will be removed
     * and the nominations would be freed up.
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('CollatorStaking.unbond') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Leave the collator set of this parachain.
     * 
     * In this case, if the calling account is already a collator, an exit
     * is registered so that this account is not selected for the next set of collators.
     * Otherwise, if the account is only a candidate, this candidate will be removed
     * and the nominations would be freed up.
     */
    get asEfinityV1(): null {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class CommunityPoolApproveProposalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CommunityPool.approve_proposal')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Approve a proposal. At a later time, the proposal will be allocated to the beneficiary
     * and the original deposit will be returned.
     * 
     * May only be called from `T::ApproveOrigin`.
     * 
     * # <weight>
     * - Complexity: O(1).
     * - DbReads: `Proposals`, `Approvals`
     * - DbWrite: `Approvals`
     * # </weight>
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('CommunityPool.approve_proposal') === 'd31c3c178e65331a6ccd6f8dca07268f945f39b38e51421afd1c9e1f5bc0f6c8'
    }

    /**
     * Approve a proposal. At a later time, the proposal will be allocated to the beneficiary
     * and the original deposit will be returned.
     * 
     * May only be called from `T::ApproveOrigin`.
     * 
     * # <weight>
     * - Complexity: O(1).
     * - DbReads: `Proposals`, `Approvals`
     * - DbWrite: `Approvals`
     * # </weight>
     */
    get asEfinityV2(): {proposalId: number} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class CommunityPoolProposeSpendCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CommunityPool.propose_spend')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Put forward a suggestion for spending. A deposit proportional to the value
     * is reserved and slashed if the proposal is rejected. It is returned once the
     * proposal is awarded.
     * 
     * # <weight>
     * - Complexity: O(1)
     * - DbReads: `ProposalCount`, `origin account`
     * - DbWrites: `ProposalCount`, `Proposals`, `origin account`
     * # </weight>
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('CommunityPool.propose_spend') === 'ffef9f31e8ae5085e7c0a55a685daef52218f0bf7083015ac904dafceedf09ee'
    }

    /**
     * Put forward a suggestion for spending. A deposit proportional to the value
     * is reserved and slashed if the proposal is rejected. It is returned once the
     * proposal is awarded.
     * 
     * # <weight>
     * - Complexity: O(1)
     * - DbReads: `ProposalCount`, `origin account`
     * - DbWrites: `ProposalCount`, `Proposals`, `origin account`
     * # </weight>
     */
    get asEfinityV2(): {value: bigint, beneficiary: efinityV2.MultiAddress} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class CommunityPoolRejectProposalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CommunityPool.reject_proposal')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Reject a proposed spend. The original deposit will be slashed.
     * 
     * May only be called from `T::RejectOrigin`.
     * 
     * # <weight>
     * - Complexity: O(1)
     * - DbReads: `Proposals`, `rejected proposer account`
     * - DbWrites: `Proposals`, `rejected proposer account`
     * # </weight>
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('CommunityPool.reject_proposal') === 'd31c3c178e65331a6ccd6f8dca07268f945f39b38e51421afd1c9e1f5bc0f6c8'
    }

    /**
     * Reject a proposed spend. The original deposit will be slashed.
     * 
     * May only be called from `T::RejectOrigin`.
     * 
     * # <weight>
     * - Complexity: O(1)
     * - DbReads: `Proposals`, `rejected proposer account`
     * - DbWrites: `Proposals`, `rejected proposer account`
     * # </weight>
     */
    get asEfinityV2(): {proposalId: number} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class CommunityPoolRemoveApprovalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CommunityPool.remove_approval')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Force a previously approved proposal to be removed from the approval queue.
     * The original deposit will no longer be returned.
     * 
     * May only be called from `T::RejectOrigin`.
     * - `proposal_id`: The index of a proposal
     * 
     * # <weight>
     * - Complexity: O(A) where `A` is the number of approvals
     * - Db reads and writes: `Approvals`
     * # </weight>
     * 
     * Errors:
     * - `ProposalNotApproved`: The `proposal_id` supplied was not found in the approval queue,
     * i.e., the proposal has not been approved. This could also mean the proposal does not
     * exist altogether, thus there is no way it would have been approved in the first place.
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('CommunityPool.remove_approval') === 'd31c3c178e65331a6ccd6f8dca07268f945f39b38e51421afd1c9e1f5bc0f6c8'
    }

    /**
     * Force a previously approved proposal to be removed from the approval queue.
     * The original deposit will no longer be returned.
     * 
     * May only be called from `T::RejectOrigin`.
     * - `proposal_id`: The index of a proposal
     * 
     * # <weight>
     * - Complexity: O(A) where `A` is the number of approvals
     * - Db reads and writes: `Approvals`
     * # </weight>
     * 
     * Errors:
     * - `ProposalNotApproved`: The `proposal_id` supplied was not found in the approval queue,
     * i.e., the proposal has not been approved. This could also mean the proposal does not
     * exist altogether, thus there is no way it would have been approved in the first place.
     */
    get asEfinityV3000(): {proposalId: number} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }
}

export class CommunityPoolSpendCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CommunityPool.spend')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Propose and approve a spend of treasury funds.
     * 
     * - `origin`: Must be `SpendOrigin` with the `Success` value being at least `amount`.
     * - `amount`: The amount to be transferred from the treasury to the `beneficiary`.
     * - `beneficiary`: The destination account for the transfer.
     * 
     * NOTE: For record-keeping purposes, the proposer is deemed to be equivalent to the
     * beneficiary.
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('CommunityPool.spend') === '18a5bcfd718b2b225ac128952f0fc34fff8371520e0ab5bac3a0ab20286b496d'
    }

    /**
     * Propose and approve a spend of treasury funds.
     * 
     * - `origin`: Must be `SpendOrigin` with the `Success` value being at least `amount`.
     * - `amount`: The amount to be transferred from the treasury to the `beneficiary`.
     * - `beneficiary`: The destination account for the transfer.
     * 
     * NOTE: For record-keeping purposes, the proposer is deemed to be equivalent to the
     * beneficiary.
     */
    get asEfinityV3000(): {amount: bigint, beneficiary: efinityV3000.MultiAddress} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }
}

export class ContractsCallCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Contracts.call')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Makes a call to an account, optionally transferring some balance.
     * 
     * # Parameters
     * 
     * * `dest`: Address of the contract to call.
     * * `value`: The balance to transfer from the `origin` to `dest`.
     * * `gas_limit`: The gas limit enforced when executing the constructor.
     * * `storage_deposit_limit`: The maximum amount of balance that can be charged from the
     *   caller to pay for the storage consumed.
     * * `data`: The input data to pass to the contract.
     * 
     * * If the account is a smart-contract account, the associated code will be
     * executed and any value will be transferred.
     * * If the account is a regular account, any value will be transferred.
     * * If no account exists and the call value is not less than `existential_deposit`,
     * a regular account will be created and any value will be transferred.
     */
    get isV3000(): boolean {
        return this._chain.getCallHash('Contracts.call') === '02511922863054b5c354386a9605ca660c51d4316bc5c8d224b533cb6036f669'
    }

    /**
     * Makes a call to an account, optionally transferring some balance.
     * 
     * # Parameters
     * 
     * * `dest`: Address of the contract to call.
     * * `value`: The balance to transfer from the `origin` to `dest`.
     * * `gas_limit`: The gas limit enforced when executing the constructor.
     * * `storage_deposit_limit`: The maximum amount of balance that can be charged from the
     *   caller to pay for the storage consumed.
     * * `data`: The input data to pass to the contract.
     * 
     * * If the account is a smart-contract account, the associated code will be
     * executed and any value will be transferred.
     * * If the account is a regular account, any value will be transferred.
     * * If no account exists and the call value is not less than `existential_deposit`,
     * a regular account will be created and any value will be transferred.
     */
    get asV3000(): {dest: v3000.MultiAddress, value: bigint, gasLimit: bigint, storageDepositLimit: (bigint | undefined), data: Uint8Array} {
        assert(this.isV3000)
        return this._chain.decodeCall(this.call)
    }
}

export class ContractsInstantiateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Contracts.instantiate')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Instantiates a contract from a previously deployed wasm binary.
     * 
     * This function is identical to [`Self::instantiate_with_code`] but without the
     * code deployment step. Instead, the `code_hash` of an on-chain deployed wasm binary
     * must be supplied.
     */
    get isV3000(): boolean {
        return this._chain.getCallHash('Contracts.instantiate') === 'd8523bddfb32b328159810852a7329a2ce3335d3436940de1c5c31e6ccff8116'
    }

    /**
     * Instantiates a contract from a previously deployed wasm binary.
     * 
     * This function is identical to [`Self::instantiate_with_code`] but without the
     * code deployment step. Instead, the `code_hash` of an on-chain deployed wasm binary
     * must be supplied.
     */
    get asV3000(): {value: bigint, gasLimit: bigint, storageDepositLimit: (bigint | undefined), codeHash: Uint8Array, data: Uint8Array, salt: Uint8Array} {
        assert(this.isV3000)
        return this._chain.decodeCall(this.call)
    }
}

export class ContractsInstantiateWithCodeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Contracts.instantiate_with_code')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Instantiates a new contract from the supplied `code` optionally transferring
     * some balance.
     * 
     * This dispatchable has the same effect as calling [`Self::upload_code`] +
     * [`Self::instantiate`]. Bundling them together provides efficiency gains. Please
     * also check the documentation of [`Self::upload_code`].
     * 
     * # Parameters
     * 
     * * `value`: The balance to transfer from the `origin` to the newly created contract.
     * * `gas_limit`: The gas limit enforced when executing the constructor.
     * * `storage_deposit_limit`: The maximum amount of balance that can be charged/reserved
     *   from the caller to pay for the storage consumed.
     * * `code`: The contract code to deploy in raw bytes.
     * * `data`: The input data to pass to the contract constructor.
     * * `salt`: Used for the address derivation. See [`Pallet::contract_address`].
     * 
     * Instantiation is executed as follows:
     * 
     * - The supplied `code` is instrumented, deployed, and a `code_hash` is created for that
     *   code.
     * - If the `code_hash` already exists on the chain the underlying `code` will be shared.
     * - The destination address is computed based on the sender, code_hash and the salt.
     * - The smart-contract account is created at the computed address.
     * - The `value` is transferred to the new account.
     * - The `deploy` function is executed in the context of the newly-created account.
     */
    get isV3000(): boolean {
        return this._chain.getCallHash('Contracts.instantiate_with_code') === '04e649d8402660554b15d9d76853aec7533b756dc2a749428e5c0ce91937b8f0'
    }

    /**
     * Instantiates a new contract from the supplied `code` optionally transferring
     * some balance.
     * 
     * This dispatchable has the same effect as calling [`Self::upload_code`] +
     * [`Self::instantiate`]. Bundling them together provides efficiency gains. Please
     * also check the documentation of [`Self::upload_code`].
     * 
     * # Parameters
     * 
     * * `value`: The balance to transfer from the `origin` to the newly created contract.
     * * `gas_limit`: The gas limit enforced when executing the constructor.
     * * `storage_deposit_limit`: The maximum amount of balance that can be charged/reserved
     *   from the caller to pay for the storage consumed.
     * * `code`: The contract code to deploy in raw bytes.
     * * `data`: The input data to pass to the contract constructor.
     * * `salt`: Used for the address derivation. See [`Pallet::contract_address`].
     * 
     * Instantiation is executed as follows:
     * 
     * - The supplied `code` is instrumented, deployed, and a `code_hash` is created for that
     *   code.
     * - If the `code_hash` already exists on the chain the underlying `code` will be shared.
     * - The destination address is computed based on the sender, code_hash and the salt.
     * - The smart-contract account is created at the computed address.
     * - The `value` is transferred to the new account.
     * - The `deploy` function is executed in the context of the newly-created account.
     */
    get asV3000(): {value: bigint, gasLimit: bigint, storageDepositLimit: (bigint | undefined), code: Uint8Array, data: Uint8Array, salt: Uint8Array} {
        assert(this.isV3000)
        return this._chain.decodeCall(this.call)
    }
}

export class ContractsRemoveCodeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Contracts.remove_code')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove the code stored under `code_hash` and refund the deposit to its owner.
     * 
     * A code can only be removed by its original uploader (its owner) and only if it is
     * not used by any contract.
     */
    get isV3000(): boolean {
        return this._chain.getCallHash('Contracts.remove_code') === '9e5c86c297bd88fae31bc40119e44695818ddc3ab8842b90daeb12771005c70d'
    }

    /**
     * Remove the code stored under `code_hash` and refund the deposit to its owner.
     * 
     * A code can only be removed by its original uploader (its owner) and only if it is
     * not used by any contract.
     */
    get asV3000(): {codeHash: Uint8Array} {
        assert(this.isV3000)
        return this._chain.decodeCall(this.call)
    }
}

export class ContractsSetCodeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Contracts.set_code')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Privileged function that changes the code of an existing contract.
     * 
     * This takes care of updating refcounts and all other necessary operations. Returns
     * an error if either the `code_hash` or `dest` do not exist.
     * 
     * # Note
     * 
     * This does **not** change the address of the contract in question. This means
     * that the contract address is no longer derived from its code hash after calling
     * this dispatchable.
     */
    get isV3000(): boolean {
        return this._chain.getCallHash('Contracts.set_code') === '70cd8e4f03fe2c8334a13735563897eedfa16eb9b8e0c97b3aacce6c108aacc0'
    }

    /**
     * Privileged function that changes the code of an existing contract.
     * 
     * This takes care of updating refcounts and all other necessary operations. Returns
     * an error if either the `code_hash` or `dest` do not exist.
     * 
     * # Note
     * 
     * This does **not** change the address of the contract in question. This means
     * that the contract address is no longer derived from its code hash after calling
     * this dispatchable.
     */
    get asV3000(): {dest: v3000.MultiAddress, codeHash: Uint8Array} {
        assert(this.isV3000)
        return this._chain.decodeCall(this.call)
    }
}

export class ContractsUploadCodeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Contracts.upload_code')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Upload new `code` without instantiating a contract from it.
     * 
     * If the code does not already exist a deposit is reserved from the caller
     * and unreserved only when [`Self::remove_code`] is called. The size of the reserve
     * depends on the instrumented size of the the supplied `code`.
     * 
     * If the code already exists in storage it will still return `Ok` and upgrades
     * the in storage version to the current
     * [`InstructionWeights::version`](InstructionWeights).
     * 
     * # Note
     * 
     * Anyone can instantiate a contract from any uploaded code and thus prevent its removal.
     * To avoid this situation a constructor could employ access control so that it can
     * only be instantiated by permissioned entities. The same is true when uploading
     * through [`Self::instantiate_with_code`].
     */
    get isV3000(): boolean {
        return this._chain.getCallHash('Contracts.upload_code') === 'e5d80c6158333f4c26b9bf07184fcf08a6cc009b6fca8d942ba16f848c6a6417'
    }

    /**
     * Upload new `code` without instantiating a contract from it.
     * 
     * If the code does not already exist a deposit is reserved from the caller
     * and unreserved only when [`Self::remove_code`] is called. The size of the reserve
     * depends on the instrumented size of the the supplied `code`.
     * 
     * If the code already exists in storage it will still return `Ok` and upgrades
     * the in storage version to the current
     * [`InstructionWeights::version`](InstructionWeights).
     * 
     * # Note
     * 
     * Anyone can instantiate a contract from any uploaded code and thus prevent its removal.
     * To avoid this situation a constructor could employ access control so that it can
     * only be instantiated by permissioned entities. The same is true when uploading
     * through [`Self::instantiate_with_code`].
     */
    get asV3000(): {code: Uint8Array, storageDepositLimit: (bigint | undefined)} {
        assert(this.isV3000)
        return this._chain.decodeCall(this.call)
    }
}

export class CouncilCloseCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Council.close')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     * May be called by any signed account in order to finish voting and close the proposal.
     * 
     * If called before the end of the voting period it will only close the vote if it is
     * has enough votes to be approved or disapproved.
     * 
     * If called after the end of the voting period abstentions are counted as rejections
     * unless there is a prime member set and the prime member cast an approval.
     * 
     * If the close operation completes successfully with disapproval, the transaction fee will
     * be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
     * proposal.
     * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1 + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - `P1` is the complexity of `proposal` preimage.
     *   - `P2` is proposal-count (code-bounded)
     * - DB:
     *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
     *    `O(P2)`)
     *  - any mutations done while executing `proposal` (`P1`)
     * - up to 3 events
     * # </weight>
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Council.close') === '45a5978a11ceb5a8b2c51f7152abaa939cd8bd4bcdc5e1162029cedba4b598ea'
    }

    /**
     * Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     * May be called by any signed account in order to finish voting and close the proposal.
     * 
     * If called before the end of the voting period it will only close the vote if it is
     * has enough votes to be approved or disapproved.
     * 
     * If called after the end of the voting period abstentions are counted as rejections
     * unless there is a prime member set and the prime member cast an approval.
     * 
     * If the close operation completes successfully with disapproval, the transaction fee will
     * be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
     * proposal.
     * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1 + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - `P1` is the complexity of `proposal` preimage.
     *   - `P2` is proposal-count (code-bounded)
     * - DB:
     *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
     *    `O(P2)`)
     *  - any mutations done while executing `proposal` (`P1`)
     * - up to 3 events
     * # </weight>
     */
    get asEfinityV2(): {proposalHash: Uint8Array, index: number, proposalWeightBound: bigint, lengthBound: number} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     * May be called by any signed account in order to finish voting and close the proposal.
     * 
     * If called before the end of the voting period it will only close the vote if it is
     * has enough votes to be approved or disapproved.
     * 
     * If called after the end of the voting period abstentions are counted as rejections
     * unless there is a prime member set and the prime member cast an approval.
     * 
     * If the close operation completes successfully with disapproval, the transaction fee will
     * be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
     * proposal.
     * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1 + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - `P1` is the complexity of `proposal` preimage.
     *   - `P2` is proposal-count (code-bounded)
     * - DB:
     *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
     *    `O(P2)`)
     *  - any mutations done while executing `proposal` (`P1`)
     * - up to 3 events
     * # </weight>
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('Council.close') === '683905378cce329de8c5e9460bd36984188fb48a39207d985ea43cb10bd1eb81'
    }

    /**
     * Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     * May be called by any signed account in order to finish voting and close the proposal.
     * 
     * If called before the end of the voting period it will only close the vote if it is
     * has enough votes to be approved or disapproved.
     * 
     * If called after the end of the voting period abstentions are counted as rejections
     * unless there is a prime member set and the prime member cast an approval.
     * 
     * If the close operation completes successfully with disapproval, the transaction fee will
     * be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
     * proposal.
     * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1 + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - `P1` is the complexity of `proposal` preimage.
     *   - `P2` is proposal-count (code-bounded)
     * - DB:
     *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
     *    `O(P2)`)
     *  - any mutations done while executing `proposal` (`P1`)
     * - up to 3 events
     * # </weight>
     */
    get asEfinityV3000(): {proposalHash: Uint8Array, index: number, proposalWeightBound: bigint, lengthBound: number} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }
}

export class CouncilDisapproveProposalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Council.disapprove_proposal')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Disapprove a proposal, close, and remove it from the system, regardless of its current
     * state.
     * 
     * Must be called by the Root origin.
     * 
     * Parameters:
     * * `proposal_hash`: The hash of the proposal that should be disapproved.
     * 
     * # <weight>
     * Complexity: O(P) where P is the number of max proposals
     * DB Weight:
     * * Reads: Proposals
     * * Writes: Voting, Proposals, ProposalOf
     * # </weight>
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Council.disapprove_proposal') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * Disapprove a proposal, close, and remove it from the system, regardless of its current
     * state.
     * 
     * Must be called by the Root origin.
     * 
     * Parameters:
     * * `proposal_hash`: The hash of the proposal that should be disapproved.
     * 
     * # <weight>
     * Complexity: O(P) where P is the number of max proposals
     * DB Weight:
     * * Reads: Proposals
     * * Writes: Voting, Proposals, ProposalOf
     * # </weight>
     */
    get asEfinityV2(): {proposalHash: Uint8Array} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class CouncilExecuteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Council.execute')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Council.execute') === '27b06bc13c982bedf4c22df3e328c551dacfa2d0aa0b2db963e55d27aaac23ac'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asEfinityV2(): {proposal: efinityV2.Call, lengthBound: number} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isEfinityV3(): boolean {
        return this._chain.getCallHash('Council.execute') === '66fffa1ff650edb25b908c2b043acf71553670c63c283f14cd88ca2ca47dc52a'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asEfinityV3(): {proposal: efinityV3.Call, lengthBound: number} {
        assert(this.isEfinityV3)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('Council.execute') === 'a214765a38f6699d95107301cca5154a555e493bf3993c4c67b3aaf6da5ae708'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asEfinityV3000(): {proposal: efinityV3000.Call, lengthBound: number} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isV3000(): boolean {
        return this._chain.getCallHash('Council.execute') === '67e9b7e941713dcbc50d356c714a2e9a0ea80eaff038fb382602cbdd27fbfb5e'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asV3000(): {proposal: v3000.Call, lengthBound: number} {
        assert(this.isV3000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isV3010(): boolean {
        return this._chain.getCallHash('Council.execute') === 'f19a65c484d3cba560e1db6f1f85008d6218c5cd43fbfcbbe4b051fe4aa6ccf2'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asV3010(): {proposal: v3010.Call, lengthBound: number} {
        assert(this.isV3010)
        return this._chain.decodeCall(this.call)
    }
}

export class CouncilProposeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Council.propose')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Council.propose') === '714fdb75fa52c393afe5497690f80b50f8b451534183c14d396acc789a52f66a'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asEfinityV2(): {threshold: number, proposal: efinityV2.Call, lengthBound: number} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isEfinityV3(): boolean {
        return this._chain.getCallHash('Council.propose') === 'cdf7d19b893f28f26424698248ad1b2f03188005aa449f0092d7c707cdefda8a'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asEfinityV3(): {threshold: number, proposal: efinityV3.Call, lengthBound: number} {
        assert(this.isEfinityV3)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('Council.propose') === 'ffe1f1cf0c492088b66c6c16a09bc844bca568569a5e7b9c86de78a227b620eb'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asEfinityV3000(): {threshold: number, proposal: efinityV3000.Call, lengthBound: number} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isV3000(): boolean {
        return this._chain.getCallHash('Council.propose') === '4d728d5b79d9be2433c3743ea0e36620b40a577f18aff20c305071d5d898a8a0'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asV3000(): {threshold: number, proposal: v3000.Call, lengthBound: number} {
        assert(this.isV3000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isV3010(): boolean {
        return this._chain.getCallHash('Council.propose') === '62cc4239ddfa9bfe625017623fd0a3e05e360f53a0f5f27ed27edb80161d7b2b'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asV3010(): {threshold: number, proposal: v3010.Call, lengthBound: number} {
        assert(this.isV3010)
        return this._chain.decodeCall(this.call)
    }
}

export class CouncilSetMembersCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Council.set_members')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the collective's membership.
     * 
     * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
     * - `prime`: The prime member whose vote sets the default.
     * - `old_count`: The upper bound for the previous number of members in storage. Used for
     *   weight estimation.
     * 
     * Requires root origin.
     * 
     * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
     *       the weight estimations rely on it to estimate dispatchable weight.
     * 
     * # WARNING:
     * 
     * The `pallet-collective` can also be managed by logic outside of the pallet through the
     * implementation of the trait [`ChangeMembers`].
     * Any call to `set_members` must be careful that the member set doesn't get out of sync
     * with other logic managing the member set.
     * 
     * # <weight>
     * ## Weight
     * - `O(MP + N)` where:
     *   - `M` old-members-count (code- and governance-bounded)
     *   - `N` new-members-count (code- and governance-bounded)
     *   - `P` proposals-count (code-bounded)
     * - DB:
     *   - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the
     *     members
     *   - 1 storage read (codec `O(P)`) for reading the proposals
     *   - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
     *   - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
     * # </weight>
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Council.set_members') === '71b7fcb1d8a62eff96a9ef006517578ce9189e6d931948a256a04ca75ff68d4a'
    }

    /**
     * Set the collective's membership.
     * 
     * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
     * - `prime`: The prime member whose vote sets the default.
     * - `old_count`: The upper bound for the previous number of members in storage. Used for
     *   weight estimation.
     * 
     * Requires root origin.
     * 
     * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
     *       the weight estimations rely on it to estimate dispatchable weight.
     * 
     * # WARNING:
     * 
     * The `pallet-collective` can also be managed by logic outside of the pallet through the
     * implementation of the trait [`ChangeMembers`].
     * Any call to `set_members` must be careful that the member set doesn't get out of sync
     * with other logic managing the member set.
     * 
     * # <weight>
     * ## Weight
     * - `O(MP + N)` where:
     *   - `M` old-members-count (code- and governance-bounded)
     *   - `N` new-members-count (code- and governance-bounded)
     *   - `P` proposals-count (code-bounded)
     * - DB:
     *   - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the
     *     members
     *   - 1 storage read (codec `O(P)`) for reading the proposals
     *   - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
     *   - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
     * # </weight>
     */
    get asEfinityV2(): {newMembers: Uint8Array[], prime: (Uint8Array | undefined), oldCount: number} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class CouncilVoteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Council.vote')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add an aye or nay vote for the sender to the given proposal.
     * 
     * Requires the sender to be a member.
     * 
     * Transaction fees will be waived if the member is voting on any particular proposal
     * for the first time and the call is successful. Subsequent vote changes will charge a
     * fee.
     * # <weight>
     * ## Weight
     * - `O(M)` where `M` is members-count (code- and governance-bounded)
     * - DB:
     *   - 1 storage read `Members` (codec `O(M)`)
     *   - 1 storage mutation `Voting` (codec `O(M)`)
     * - 1 event
     * # </weight>
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Council.vote') === 'f8a1069a57f7b721f47c086d08b6838ae1a0c08f58caddb82428ba5f1407540f'
    }

    /**
     * Add an aye or nay vote for the sender to the given proposal.
     * 
     * Requires the sender to be a member.
     * 
     * Transaction fees will be waived if the member is voting on any particular proposal
     * for the first time and the call is successful. Subsequent vote changes will charge a
     * fee.
     * # <weight>
     * ## Weight
     * - `O(M)` where `M` is members-count (code- and governance-bounded)
     * - DB:
     *   - 1 storage read `Members` (codec `O(M)`)
     *   - 1 storage mutation `Voting` (codec `O(M)`)
     * - 1 event
     * # </weight>
     */
    get asEfinityV2(): {proposal: Uint8Array, index: number, approve: boolean} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyBlacklistCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.blacklist')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Permanently place a proposal into the blacklist. This prevents it from ever being
     * proposed again.
     * 
     * If called on a queued public or external proposal, then this will result in it being
     * removed. If the `ref_index` supplied is an active referendum with the proposal hash,
     * then it will be cancelled.
     * 
     * The dispatch origin of this call must be `BlacklistOrigin`.
     * 
     * - `proposal_hash`: The proposal hash to blacklist permanently.
     * - `ref_index`: An ongoing referendum whose hash is `proposal_hash`, which will be
     * cancelled.
     * 
     * Weight: `O(p)` (though as this is an high-privilege dispatch, we assume it has a
     *   reasonable value).
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Democracy.blacklist') === '8d8922c0775adfb1df719211ab4fc6fb40b6cc8864038bcb1b544d9cf039b30a'
    }

    /**
     * Permanently place a proposal into the blacklist. This prevents it from ever being
     * proposed again.
     * 
     * If called on a queued public or external proposal, then this will result in it being
     * removed. If the `ref_index` supplied is an active referendum with the proposal hash,
     * then it will be cancelled.
     * 
     * The dispatch origin of this call must be `BlacklistOrigin`.
     * 
     * - `proposal_hash`: The proposal hash to blacklist permanently.
     * - `ref_index`: An ongoing referendum whose hash is `proposal_hash`, which will be
     * cancelled.
     * 
     * Weight: `O(p)` (though as this is an high-privilege dispatch, we assume it has a
     *   reasonable value).
     */
    get asEfinityV2(): {proposalHash: Uint8Array, maybeRefIndex: (number | undefined)} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyCancelProposalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.cancel_proposal')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove a proposal.
     * 
     * The dispatch origin of this call must be `CancelProposalOrigin`.
     * 
     * - `prop_index`: The index of the proposal to cancel.
     * 
     * Weight: `O(p)` where `p = PublicProps::<T>::decode_len()`
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Democracy.cancel_proposal') === '0e50c7564a4a7f4e6a09a0abcc8022f4445c064144d2318ed086e6080bee800d'
    }

    /**
     * Remove a proposal.
     * 
     * The dispatch origin of this call must be `CancelProposalOrigin`.
     * 
     * - `prop_index`: The index of the proposal to cancel.
     * 
     * Weight: `O(p)` where `p = PublicProps::<T>::decode_len()`
     */
    get asEfinityV2(): {propIndex: number} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyCancelQueuedCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.cancel_queued')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Cancel a proposal queued for enactment.
     * 
     * The dispatch origin of this call must be _Root_.
     * 
     * - `which`: The index of the referendum to cancel.
     * 
     * Weight: `O(D)` where `D` is the items in the dispatch queue. Weighted as `D = 10`.
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Democracy.cancel_queued') === '60780274011857b5305b5413b2b4742e5d41eb58a0948049d0672e81af198cb7'
    }

    /**
     * Cancel a proposal queued for enactment.
     * 
     * The dispatch origin of this call must be _Root_.
     * 
     * - `which`: The index of the referendum to cancel.
     * 
     * Weight: `O(D)` where `D` is the items in the dispatch queue. Weighted as `D = 10`.
     */
    get asEfinityV2(): {which: number} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyCancelReferendumCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.cancel_referendum')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove a referendum.
     * 
     * The dispatch origin of this call must be _Root_.
     * 
     * - `ref_index`: The index of the referendum to cancel.
     * 
     * # Weight: `O(1)`.
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Democracy.cancel_referendum') === 'efe4ecff834678ca8b73ea6e2f38e514997eb402e82da2ce4cf036008844a857'
    }

    /**
     * Remove a referendum.
     * 
     * The dispatch origin of this call must be _Root_.
     * 
     * - `ref_index`: The index of the referendum to cancel.
     * 
     * # Weight: `O(1)`.
     */
    get asEfinityV2(): {refIndex: number} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyClearPublicProposalsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.clear_public_proposals')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Clears all public proposals.
     * 
     * The dispatch origin of this call must be _Root_.
     * 
     * Weight: `O(1)`.
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Democracy.clear_public_proposals') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Clears all public proposals.
     * 
     * The dispatch origin of this call must be _Root_.
     * 
     * Weight: `O(1)`.
     */
    get asEfinityV2(): null {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyDelegateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.delegate')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Delegate the voting power (with some given conviction) of the sending account.
     * 
     * The balance delegated is locked for as long as it's delegated, and thereafter for the
     * time appropriate for the conviction's lock period.
     * 
     * The dispatch origin of this call must be _Signed_, and the signing account must either:
     *   - be delegating already; or
     *   - have no voting activity (if there is, then it will need to be removed/consolidated
     *     through `reap_vote` or `unvote`).
     * 
     * - `to`: The account whose voting the `target` account's voting power will follow.
     * - `conviction`: The conviction that will be attached to the delegated votes. When the
     *   account is undelegated, the funds will be locked for the corresponding period.
     * - `balance`: The amount of the account's balance to be used in delegating. This must not
     *   be more than the account's current balance.
     * 
     * Emits `Delegated`.
     * 
     * Weight: `O(R)` where R is the number of referendums the voter delegating to has
     *   voted on. Weight is charged as if maximum votes.
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Democracy.delegate') === '719d303e364256b757876a8d1b18c8d62a96223d68ffc6f6c1bf18240e8d9793'
    }

    /**
     * Delegate the voting power (with some given conviction) of the sending account.
     * 
     * The balance delegated is locked for as long as it's delegated, and thereafter for the
     * time appropriate for the conviction's lock period.
     * 
     * The dispatch origin of this call must be _Signed_, and the signing account must either:
     *   - be delegating already; or
     *   - have no voting activity (if there is, then it will need to be removed/consolidated
     *     through `reap_vote` or `unvote`).
     * 
     * - `to`: The account whose voting the `target` account's voting power will follow.
     * - `conviction`: The conviction that will be attached to the delegated votes. When the
     *   account is undelegated, the funds will be locked for the corresponding period.
     * - `balance`: The amount of the account's balance to be used in delegating. This must not
     *   be more than the account's current balance.
     * 
     * Emits `Delegated`.
     * 
     * Weight: `O(R)` where R is the number of referendums the voter delegating to has
     *   voted on. Weight is charged as if maximum votes.
     */
    get asEfinityV2(): {to: Uint8Array, conviction: efinityV2.Conviction, balance: bigint} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Delegate the voting power (with some given conviction) of the sending account.
     * 
     * The balance delegated is locked for as long as it's delegated, and thereafter for the
     * time appropriate for the conviction's lock period.
     * 
     * The dispatch origin of this call must be _Signed_, and the signing account must either:
     *   - be delegating already; or
     *   - have no voting activity (if there is, then it will need to be removed/consolidated
     *     through `reap_vote` or `unvote`).
     * 
     * - `to`: The account whose voting the `target` account's voting power will follow.
     * - `conviction`: The conviction that will be attached to the delegated votes. When the
     *   account is undelegated, the funds will be locked for the corresponding period.
     * - `balance`: The amount of the account's balance to be used in delegating. This must not
     *   be more than the account's current balance.
     * 
     * Emits `Delegated`.
     * 
     * Weight: `O(R)` where R is the number of referendums the voter delegating to has
     *   voted on. Weight is charged as if maximum votes.
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('Democracy.delegate') === '789db36a1c43e1ffdad52288f8573a492f529890632f51821e7bd1d74ba6cffc'
    }

    /**
     * Delegate the voting power (with some given conviction) of the sending account.
     * 
     * The balance delegated is locked for as long as it's delegated, and thereafter for the
     * time appropriate for the conviction's lock period.
     * 
     * The dispatch origin of this call must be _Signed_, and the signing account must either:
     *   - be delegating already; or
     *   - have no voting activity (if there is, then it will need to be removed/consolidated
     *     through `reap_vote` or `unvote`).
     * 
     * - `to`: The account whose voting the `target` account's voting power will follow.
     * - `conviction`: The conviction that will be attached to the delegated votes. When the
     *   account is undelegated, the funds will be locked for the corresponding period.
     * - `balance`: The amount of the account's balance to be used in delegating. This must not
     *   be more than the account's current balance.
     * 
     * Emits `Delegated`.
     * 
     * Weight: `O(R)` where R is the number of referendums the voter delegating to has
     *   voted on. Weight is charged as if maximum votes.
     */
    get asEfinityV3000(): {to: efinityV3000.MultiAddress, conviction: efinityV3000.Conviction, balance: bigint} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyEmergencyCancelCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.emergency_cancel')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Schedule an emergency cancellation of a referendum. Cannot happen twice to the same
     * referendum.
     * 
     * The dispatch origin of this call must be `CancellationOrigin`.
     * 
     * -`ref_index`: The index of the referendum to cancel.
     * 
     * Weight: `O(1)`.
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Democracy.emergency_cancel') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
    }

    /**
     * Schedule an emergency cancellation of a referendum. Cannot happen twice to the same
     * referendum.
     * 
     * The dispatch origin of this call must be `CancellationOrigin`.
     * 
     * -`ref_index`: The index of the referendum to cancel.
     * 
     * Weight: `O(1)`.
     */
    get asEfinityV2(): {refIndex: number} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyEnactProposalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.enact_proposal')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Enact a proposal from a referendum. For now we just make the weight be the maximum.
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Democracy.enact_proposal') === 'de192ab0f058d1fb7eacc523bf0e05128d16509ec21bf445f0eefa47c89e60bf'
    }

    /**
     * Enact a proposal from a referendum. For now we just make the weight be the maximum.
     */
    get asEfinityV2(): {proposalHash: Uint8Array, index: number} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyExternalProposeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.external_propose')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Schedule a referendum to be tabled once it is legal to schedule an external
     * referendum.
     * 
     * The dispatch origin of this call must be `ExternalOrigin`.
     * 
     * - `proposal_hash`: The preimage hash of the proposal.
     * 
     * Weight: `O(V)` with V number of vetoers in the blacklist of proposal.
     *   Decoding vec of length V. Charged as maximum
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Democracy.external_propose') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * Schedule a referendum to be tabled once it is legal to schedule an external
     * referendum.
     * 
     * The dispatch origin of this call must be `ExternalOrigin`.
     * 
     * - `proposal_hash`: The preimage hash of the proposal.
     * 
     * Weight: `O(V)` with V number of vetoers in the blacklist of proposal.
     *   Decoding vec of length V. Charged as maximum
     */
    get asEfinityV2(): {proposalHash: Uint8Array} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyExternalProposeDefaultCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.external_propose_default')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Schedule a negative-turnout-bias referendum to be tabled next once it is legal to
     * schedule an external referendum.
     * 
     * The dispatch of this call must be `ExternalDefaultOrigin`.
     * 
     * - `proposal_hash`: The preimage hash of the proposal.
     * 
     * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
     * pre-scheduled `external_propose` call.
     * 
     * Weight: `O(1)`
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Democracy.external_propose_default') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * Schedule a negative-turnout-bias referendum to be tabled next once it is legal to
     * schedule an external referendum.
     * 
     * The dispatch of this call must be `ExternalDefaultOrigin`.
     * 
     * - `proposal_hash`: The preimage hash of the proposal.
     * 
     * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
     * pre-scheduled `external_propose` call.
     * 
     * Weight: `O(1)`
     */
    get asEfinityV2(): {proposalHash: Uint8Array} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyExternalProposeMajorityCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.external_propose_majority')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Schedule a majority-carries referendum to be tabled next once it is legal to schedule
     * an external referendum.
     * 
     * The dispatch of this call must be `ExternalMajorityOrigin`.
     * 
     * - `proposal_hash`: The preimage hash of the proposal.
     * 
     * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
     * pre-scheduled `external_propose` call.
     * 
     * Weight: `O(1)`
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Democracy.external_propose_majority') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * Schedule a majority-carries referendum to be tabled next once it is legal to schedule
     * an external referendum.
     * 
     * The dispatch of this call must be `ExternalMajorityOrigin`.
     * 
     * - `proposal_hash`: The preimage hash of the proposal.
     * 
     * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
     * pre-scheduled `external_propose` call.
     * 
     * Weight: `O(1)`
     */
    get asEfinityV2(): {proposalHash: Uint8Array} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyFastTrackCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.fast_track')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Schedule the currently externally-proposed majority-carries referendum to be tabled
     * immediately. If there is no externally-proposed referendum currently, or if there is one
     * but it is not a majority-carries referendum then it fails.
     * 
     * The dispatch of this call must be `FastTrackOrigin`.
     * 
     * - `proposal_hash`: The hash of the current external proposal.
     * - `voting_period`: The period that is allowed for voting on this proposal. Increased to
     *   `FastTrackVotingPeriod` if too low.
     * - `delay`: The number of block after voting has ended in approval and this should be
     *   enacted. This doesn't have a minimum amount.
     * 
     * Emits `Started`.
     * 
     * Weight: `O(1)`
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Democracy.fast_track') === '27cb200e922e485b41e3150b3d7bf5e8624346f6ff1d78601373ba3d80689c89'
    }

    /**
     * Schedule the currently externally-proposed majority-carries referendum to be tabled
     * immediately. If there is no externally-proposed referendum currently, or if there is one
     * but it is not a majority-carries referendum then it fails.
     * 
     * The dispatch of this call must be `FastTrackOrigin`.
     * 
     * - `proposal_hash`: The hash of the current external proposal.
     * - `voting_period`: The period that is allowed for voting on this proposal. Increased to
     *   `FastTrackVotingPeriod` if too low.
     * - `delay`: The number of block after voting has ended in approval and this should be
     *   enacted. This doesn't have a minimum amount.
     * 
     * Emits `Started`.
     * 
     * Weight: `O(1)`
     */
    get asEfinityV2(): {proposalHash: Uint8Array, votingPeriod: number, delay: number} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyNoteImminentPreimageCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.note_imminent_preimage')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Register the preimage for an upcoming proposal. This requires the proposal to be
     * in the dispatch queue. No deposit is needed. When this call is successful, i.e.
     * the preimage has not been uploaded before and matches some imminent proposal,
     * no fee is paid.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `encoded_proposal`: The preimage of a proposal.
     * 
     * Emits `PreimageNoted`.
     * 
     * Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit).
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Democracy.note_imminent_preimage') === 'bc60303cdd91077cf965a8aec4728ff7f49fea4055259a274e22145314e7c9eb'
    }

    /**
     * Register the preimage for an upcoming proposal. This requires the proposal to be
     * in the dispatch queue. No deposit is needed. When this call is successful, i.e.
     * the preimage has not been uploaded before and matches some imminent proposal,
     * no fee is paid.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `encoded_proposal`: The preimage of a proposal.
     * 
     * Emits `PreimageNoted`.
     * 
     * Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit).
     */
    get asEfinityV2(): {encodedProposal: Uint8Array} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyNoteImminentPreimageOperationalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.note_imminent_preimage_operational')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Same as `note_imminent_preimage` but origin is `OperationalPreimageOrigin`.
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Democracy.note_imminent_preimage_operational') === 'bc60303cdd91077cf965a8aec4728ff7f49fea4055259a274e22145314e7c9eb'
    }

    /**
     * Same as `note_imminent_preimage` but origin is `OperationalPreimageOrigin`.
     */
    get asEfinityV2(): {encodedProposal: Uint8Array} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyNotePreimageCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.note_preimage')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Register the preimage for an upcoming proposal. This doesn't require the proposal to be
     * in the dispatch queue but does require a deposit, returned once enacted.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `encoded_proposal`: The preimage of a proposal.
     * 
     * Emits `PreimageNoted`.
     * 
     * Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit).
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Democracy.note_preimage') === 'bc60303cdd91077cf965a8aec4728ff7f49fea4055259a274e22145314e7c9eb'
    }

    /**
     * Register the preimage for an upcoming proposal. This doesn't require the proposal to be
     * in the dispatch queue but does require a deposit, returned once enacted.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `encoded_proposal`: The preimage of a proposal.
     * 
     * Emits `PreimageNoted`.
     * 
     * Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit).
     */
    get asEfinityV2(): {encodedProposal: Uint8Array} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyNotePreimageOperationalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.note_preimage_operational')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Same as `note_preimage` but origin is `OperationalPreimageOrigin`.
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Democracy.note_preimage_operational') === 'bc60303cdd91077cf965a8aec4728ff7f49fea4055259a274e22145314e7c9eb'
    }

    /**
     * Same as `note_preimage` but origin is `OperationalPreimageOrigin`.
     */
    get asEfinityV2(): {encodedProposal: Uint8Array} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyProposeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.propose')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Propose a sensitive action to be taken.
     * 
     * The dispatch origin of this call must be _Signed_ and the sender must
     * have funds to cover the deposit.
     * 
     * - `proposal_hash`: The hash of the proposal preimage.
     * - `value`: The amount of deposit (must be at least `MinimumDeposit`).
     * 
     * Emits `Proposed`.
     * 
     * Weight: `O(p)`
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Democracy.propose') === '99f964e94c86db2029fab3e54a9230e36fe7533d252b5ecbc36f16c06e11f18b'
    }

    /**
     * Propose a sensitive action to be taken.
     * 
     * The dispatch origin of this call must be _Signed_ and the sender must
     * have funds to cover the deposit.
     * 
     * - `proposal_hash`: The hash of the proposal preimage.
     * - `value`: The amount of deposit (must be at least `MinimumDeposit`).
     * 
     * Emits `Proposed`.
     * 
     * Weight: `O(p)`
     */
    get asEfinityV2(): {proposalHash: Uint8Array, value: bigint} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyReapPreimageCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.reap_preimage')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove an expired proposal preimage and collect the deposit.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `proposal_hash`: The preimage hash of a proposal.
     * - `proposal_length_upper_bound`: an upper bound on length of the proposal. Extrinsic is
     *   weighted according to this value with no refund.
     * 
     * This will only work after `VotingPeriod` blocks from the time that the preimage was
     * noted, if it's the same account doing it. If it's a different account, then it'll only
     * work an additional `EnactmentPeriod` later.
     * 
     * Emits `PreimageReaped`.
     * 
     * Weight: `O(D)` where D is length of proposal.
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Democracy.reap_preimage') === '23573ffc912e8a31889875352d3543e4538e2f3beb6a89ef86d10cf1cb8b7aca'
    }

    /**
     * Remove an expired proposal preimage and collect the deposit.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `proposal_hash`: The preimage hash of a proposal.
     * - `proposal_length_upper_bound`: an upper bound on length of the proposal. Extrinsic is
     *   weighted according to this value with no refund.
     * 
     * This will only work after `VotingPeriod` blocks from the time that the preimage was
     * noted, if it's the same account doing it. If it's a different account, then it'll only
     * work an additional `EnactmentPeriod` later.
     * 
     * Emits `PreimageReaped`.
     * 
     * Weight: `O(D)` where D is length of proposal.
     */
    get asEfinityV2(): {proposalHash: Uint8Array, proposalLenUpperBound: number} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyRemoveOtherVoteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.remove_other_vote')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove a vote for a referendum.
     * 
     * If the `target` is equal to the signer, then this function is exactly equivalent to
     * `remove_vote`. If not equal to the signer, then the vote must have expired,
     * either because the referendum was cancelled, because the voter lost the referendum or
     * because the conviction period is over.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `target`: The account of the vote to be removed; this account must have voted for
     *   referendum `index`.
     * - `index`: The index of referendum of the vote to be removed.
     * 
     * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
     *   Weight is calculated for the maximum number of vote.
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Democracy.remove_other_vote') === '57db819150acc73e380a9908a05d4f777cd3af825527d7ad88560426e1d0f652'
    }

    /**
     * Remove a vote for a referendum.
     * 
     * If the `target` is equal to the signer, then this function is exactly equivalent to
     * `remove_vote`. If not equal to the signer, then the vote must have expired,
     * either because the referendum was cancelled, because the voter lost the referendum or
     * because the conviction period is over.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `target`: The account of the vote to be removed; this account must have voted for
     *   referendum `index`.
     * - `index`: The index of referendum of the vote to be removed.
     * 
     * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
     *   Weight is calculated for the maximum number of vote.
     */
    get asEfinityV2(): {target: Uint8Array, index: number} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Remove a vote for a referendum.
     * 
     * If the `target` is equal to the signer, then this function is exactly equivalent to
     * `remove_vote`. If not equal to the signer, then the vote must have expired,
     * either because the referendum was cancelled, because the voter lost the referendum or
     * because the conviction period is over.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `target`: The account of the vote to be removed; this account must have voted for
     *   referendum `index`.
     * - `index`: The index of referendum of the vote to be removed.
     * 
     * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
     *   Weight is calculated for the maximum number of vote.
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('Democracy.remove_other_vote') === '43d317508cc3ba04dcadb411eb6499f25532d64ab5a169b27410116c72f40a26'
    }

    /**
     * Remove a vote for a referendum.
     * 
     * If the `target` is equal to the signer, then this function is exactly equivalent to
     * `remove_vote`. If not equal to the signer, then the vote must have expired,
     * either because the referendum was cancelled, because the voter lost the referendum or
     * because the conviction period is over.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `target`: The account of the vote to be removed; this account must have voted for
     *   referendum `index`.
     * - `index`: The index of referendum of the vote to be removed.
     * 
     * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
     *   Weight is calculated for the maximum number of vote.
     */
    get asEfinityV3000(): {target: efinityV3000.MultiAddress, index: number} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyRemoveVoteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.remove_vote')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove a vote for a referendum.
     * 
     * If:
     * - the referendum was cancelled, or
     * - the referendum is ongoing, or
     * - the referendum has ended such that
     *   - the vote of the account was in opposition to the result; or
     *   - there was no conviction to the account's vote; or
     *   - the account made a split vote
     * ...then the vote is removed cleanly and a following call to `unlock` may result in more
     * funds being available.
     * 
     * If, however, the referendum has ended and:
     * - it finished corresponding to the vote of the account, and
     * - the account made a standard vote with conviction, and
     * - the lock period of the conviction is not over
     * ...then the lock will be aggregated into the overall account's lock, which may involve
     * *overlocking* (where the two locks are combined into a single lock that is the maximum
     * of both the amount locked and the time is it locked for).
     * 
     * The dispatch origin of this call must be _Signed_, and the signer must have a vote
     * registered for referendum `index`.
     * 
     * - `index`: The index of referendum of the vote to be removed.
     * 
     * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
     *   Weight is calculated for the maximum number of vote.
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Democracy.remove_vote') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     * Remove a vote for a referendum.
     * 
     * If:
     * - the referendum was cancelled, or
     * - the referendum is ongoing, or
     * - the referendum has ended such that
     *   - the vote of the account was in opposition to the result; or
     *   - there was no conviction to the account's vote; or
     *   - the account made a split vote
     * ...then the vote is removed cleanly and a following call to `unlock` may result in more
     * funds being available.
     * 
     * If, however, the referendum has ended and:
     * - it finished corresponding to the vote of the account, and
     * - the account made a standard vote with conviction, and
     * - the lock period of the conviction is not over
     * ...then the lock will be aggregated into the overall account's lock, which may involve
     * *overlocking* (where the two locks are combined into a single lock that is the maximum
     * of both the amount locked and the time is it locked for).
     * 
     * The dispatch origin of this call must be _Signed_, and the signer must have a vote
     * registered for referendum `index`.
     * 
     * - `index`: The index of referendum of the vote to be removed.
     * 
     * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
     *   Weight is calculated for the maximum number of vote.
     */
    get asEfinityV2(): {index: number} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracySecondCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.second')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Signals agreement with a particular proposal.
     * 
     * The dispatch origin of this call must be _Signed_ and the sender
     * must have funds to cover the deposit, equal to the original deposit.
     * 
     * - `proposal`: The index of the proposal to second.
     * - `seconds_upper_bound`: an upper bound on the current number of seconds on this
     *   proposal. Extrinsic is weighted according to this value with no refund.
     * 
     * Weight: `O(S)` where S is the number of seconds a proposal already has.
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Democracy.second') === 'abe1357aae784eefd21f6999076deb6cfbc92fcb9e80c21e93a944ceb739423c'
    }

    /**
     * Signals agreement with a particular proposal.
     * 
     * The dispatch origin of this call must be _Signed_ and the sender
     * must have funds to cover the deposit, equal to the original deposit.
     * 
     * - `proposal`: The index of the proposal to second.
     * - `seconds_upper_bound`: an upper bound on the current number of seconds on this
     *   proposal. Extrinsic is weighted according to this value with no refund.
     * 
     * Weight: `O(S)` where S is the number of seconds a proposal already has.
     */
    get asEfinityV2(): {proposal: number, secondsUpperBound: number} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyUndelegateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.undelegate')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Undelegate the voting power of the sending account.
     * 
     * Tokens may be unlocked following once an amount of time consistent with the lock period
     * of the conviction with which the delegation was issued.
     * 
     * The dispatch origin of this call must be _Signed_ and the signing account must be
     * currently delegating.
     * 
     * Emits `Undelegated`.
     * 
     * Weight: `O(R)` where R is the number of referendums the voter delegating to has
     *   voted on. Weight is charged as if maximum votes.
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Democracy.undelegate') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Undelegate the voting power of the sending account.
     * 
     * Tokens may be unlocked following once an amount of time consistent with the lock period
     * of the conviction with which the delegation was issued.
     * 
     * The dispatch origin of this call must be _Signed_ and the signing account must be
     * currently delegating.
     * 
     * Emits `Undelegated`.
     * 
     * Weight: `O(R)` where R is the number of referendums the voter delegating to has
     *   voted on. Weight is charged as if maximum votes.
     */
    get asEfinityV2(): null {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyUnlockCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.unlock')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Unlock tokens that have an expired lock.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `target`: The account to remove the lock on.
     * 
     * Weight: `O(R)` with R number of vote of target.
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Democracy.unlock') === '66d8abf7976ff596d8d614948b9d84cb24f0b898d88d24eb2cc035ae5e93c7b8'
    }

    /**
     * Unlock tokens that have an expired lock.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `target`: The account to remove the lock on.
     * 
     * Weight: `O(R)` with R number of vote of target.
     */
    get asEfinityV2(): {target: Uint8Array} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Unlock tokens that have an expired lock.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `target`: The account to remove the lock on.
     * 
     * Weight: `O(R)` with R number of vote of target.
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('Democracy.unlock') === '8142da248a3023c20f65ce8f6287f9eaf75336ab8815cb15537149abcdd0c20c'
    }

    /**
     * Unlock tokens that have an expired lock.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `target`: The account to remove the lock on.
     * 
     * Weight: `O(R)` with R number of vote of target.
     */
    get asEfinityV3000(): {target: efinityV3000.MultiAddress} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyVetoExternalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.veto_external')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Veto and blacklist the external proposal hash.
     * 
     * The dispatch origin of this call must be `VetoOrigin`.
     * 
     * - `proposal_hash`: The preimage hash of the proposal to veto and blacklist.
     * 
     * Emits `Vetoed`.
     * 
     * Weight: `O(V + log(V))` where V is number of `existing vetoers`
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Democracy.veto_external') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * Veto and blacklist the external proposal hash.
     * 
     * The dispatch origin of this call must be `VetoOrigin`.
     * 
     * - `proposal_hash`: The preimage hash of the proposal to veto and blacklist.
     * 
     * Emits `Vetoed`.
     * 
     * Weight: `O(V + log(V))` where V is number of `existing vetoers`
     */
    get asEfinityV2(): {proposalHash: Uint8Array} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyVoteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.vote')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
     * otherwise it is a vote to keep the status quo.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `ref_index`: The index of the referendum to vote for.
     * - `vote`: The vote configuration.
     * 
     * Weight: `O(R)` where R is the number of referendums the voter has voted on.
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Democracy.vote') === '3936a4cb49f77280bd94142d4ec458afcf5cb8a5e5b0d602b1b1530928021e28'
    }

    /**
     * Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
     * otherwise it is a vote to keep the status quo.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `ref_index`: The index of the referendum to vote for.
     * - `vote`: The vote configuration.
     * 
     * Weight: `O(R)` where R is the number of referendums the voter has voted on.
     */
    get asEfinityV2(): {refIndex: number, vote: efinityV2.AccountVote} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class DmpQueueServiceOverweightCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DmpQueue.service_overweight')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Service a single overweight message.
     * 
     * - `origin`: Must pass `ExecuteOverweightOrigin`.
     * - `index`: The index of the overweight message to service.
     * - `weight_limit`: The amount of weight that message execution may take.
     * 
     * Errors:
     * - `Unknown`: Message of `index` is unknown.
     * - `OverLimit`: Message execution may use greater than `weight_limit`.
     * 
     * Events:
     * - `OverweightServiced`: On success.
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('DmpQueue.service_overweight') === 'f6b281f58290b6af96ac2dda36163d81223f37d0a8a100877e2526969a57d772'
    }

    /**
     * Service a single overweight message.
     * 
     * - `origin`: Must pass `ExecuteOverweightOrigin`.
     * - `index`: The index of the overweight message to service.
     * - `weight_limit`: The amount of weight that message execution may take.
     * 
     * Errors:
     * - `Unknown`: Message of `index` is unknown.
     * - `OverLimit`: Message execution may use greater than `weight_limit`.
     * 
     * Events:
     * - `OverweightServiced`: On success.
     */
    get asEfinityV1(): {index: bigint, weightLimit: bigint} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Service a single overweight message.
     * 
     * - `origin`: Must pass `ExecuteOverweightOrigin`.
     * - `index`: The index of the overweight message to service.
     * - `weight_limit`: The amount of weight that message execution may take.
     * 
     * Errors:
     * - `Unknown`: Message of `index` is unknown.
     * - `OverLimit`: Message execution may use greater than `weight_limit`.
     * 
     * Events:
     * - `OverweightServiced`: On success.
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('DmpQueue.service_overweight') === '3e0d440993be1d69328adae3a1b30f3261ca945f8f307c396f4de7f51796a0c6'
    }

    /**
     * Service a single overweight message.
     * 
     * - `origin`: Must pass `ExecuteOverweightOrigin`.
     * - `index`: The index of the overweight message to service.
     * - `weight_limit`: The amount of weight that message execution may take.
     * 
     * Errors:
     * - `Unknown`: Message of `index` is unknown.
     * - `OverLimit`: Message execution may use greater than `weight_limit`.
     * 
     * Events:
     * - `OverweightServiced`: On success.
     */
    get asEfinityV3000(): {index: bigint, weightLimit: efinityV3000.Weight} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }
}

export class EfinityXcmTransferToAcalaCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EfinityXcm.transfer_to_acala')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * `origin` transfers `amount` of EFI to `beneficiary` to the Acala parachain.
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('EfinityXcm.transfer_to_acala') === 'bbe8e2dc71d1fe7d30079268633160962ad108f52017d722e4d8abc00fc8c267'
    }

    /**
     * `origin` transfers `amount` of EFI to `beneficiary` to the Acala parachain.
     */
    get asEfinityV3000(): {beneficiary: Uint8Array, amount: bigint} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }
}

export class ExtrinsicPausePauseExtrinsicCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ExtrinsicPause.pause_extrinsic')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Pause execution of extrinsic(s)
     * 
     * If `None` is passed as `extrinsic_name`, all extrinsics of the `pallet_name` will
     * be paused.
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('ExtrinsicPause.pause_extrinsic') === '7f2b28b7679561fd5e530007531c35553f4e164e941c300a5dc1c88bb7f55f67'
    }

    /**
     * Pause execution of extrinsic(s)
     * 
     * If `None` is passed as `extrinsic_name`, all extrinsics of the `pallet_name` will
     * be paused.
     */
    get asEfinityV3000(): {palletName: Uint8Array, extrinsicName: (Uint8Array | undefined)} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Pause execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     */
    get isV3010(): boolean {
        return this._chain.getCallHash('ExtrinsicPause.pause_extrinsic') === '98ba44257f903b88c5746185a3ec3bd3e74ea1b4edda1013cbe2ab73e2cb727b'
    }

    /**
     * Pause execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     */
    get asV3010(): {call: v3010.Call, pauseOnlyExtrinsic: boolean} {
        assert(this.isV3010)
        return this._chain.decodeCall(this.call)
    }
}

export class ExtrinsicPauseResumeExtrinsicCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ExtrinsicPause.resume_extrinsic')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Resume extrinsic
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('ExtrinsicPause.resume_extrinsic') === '7f2b28b7679561fd5e530007531c35553f4e164e941c300a5dc1c88bb7f55f67'
    }

    /**
     * Resume extrinsic
     */
    get asEfinityV3000(): {palletName: Uint8Array, extrinsicName: (Uint8Array | undefined)} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Resume execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     */
    get isV3010(): boolean {
        return this._chain.getCallHash('ExtrinsicPause.resume_extrinsic') === 'da9a43a162b156bc9412d22f0db229f87744908e41c723ef9d3d76d40c76f8ac'
    }

    /**
     * Resume execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     */
    get asV3010(): {call: v3010.Call, resumeOnlyExtrinsic: boolean} {
        assert(this.isV3010)
        return this._chain.decodeCall(this.call)
    }
}

export class FuelTanksAddAccountCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'FuelTanks.add_account')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Adds new account for `user_id` to fuel tank at `tank_id`. An account is
     * required to dispatch calls. A deposit is required, and may be paid by
     * the user or the fuel tank, depending on the settings.
     * ### Errors
     * - `FuelTankNotFound` if fuel tank at `tank_id` does not exist
     * - `NoPermission` if `origin` does not have permission to add an account
     * - `AccountAlreadyExists` if account at `user_id` already exists
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('FuelTanks.add_account') === '6b49a9c6d7cc4fec142fc02f8f252f4fa0bd06e832d1e877b43f77b3d8ef27b3'
    }

    /**
     * Adds new account for `user_id` to fuel tank at `tank_id`. An account is
     * required to dispatch calls. A deposit is required, and may be paid by
     * the user or the fuel tank, depending on the settings.
     * ### Errors
     * - `FuelTankNotFound` if fuel tank at `tank_id` does not exist
     * - `NoPermission` if `origin` does not have permission to add an account
     * - `AccountAlreadyExists` if account at `user_id` already exists
     */
    get asEfinityV3000(): {tankId: efinityV3000.MultiAddress, userId: efinityV3000.MultiAddress} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }
}

export class FuelTanksBatchAddAccountCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'FuelTanks.batch_add_account')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Similar to add_account but takes a list of `AccountId`s to
     * insert into a fuel tank.
     * ### Errors
     * - `FuelTankNotFound` if fuel tank at `tank_id` does not exist
     * - `NoPermission` if `origin` does not have permission to add an account
     * - `AccountAlreadyExists` if account at `user_id` already exists
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('FuelTanks.batch_add_account') === 'e548a21f55c9e5bef7a56196dab640774174a939562687e1e6e32b377168ebb5'
    }

    /**
     * Similar to add_account but takes a list of `AccountId`s to
     * insert into a fuel tank.
     * ### Errors
     * - `FuelTankNotFound` if fuel tank at `tank_id` does not exist
     * - `NoPermission` if `origin` does not have permission to add an account
     * - `AccountAlreadyExists` if account at `user_id` already exists
     */
    get asEfinityV3000(): {tankId: efinityV3000.MultiAddress, userIds: efinityV3000.MultiAddress[]} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Similar to add_account but takes a list of `AccountId`s to
     * insert into a fuel tank.
     * ### Errors
     * - `FuelTankNotFound` if fuel tank at `tank_id` does not exist
     * - `NoPermission` if `origin` does not have permission to add an account
     * - `AccountAlreadyExists` if account at `user_id` already exists
     */
    get isV3010(): boolean {
        return this._chain.getCallHash('FuelTanks.batch_add_account') === '7c180147240d8135eaef78e009d4c536a409d5d75e9ce54537a0b3955a696b36'
    }

    /**
     * Similar to add_account but takes a list of `AccountId`s to
     * insert into a fuel tank.
     * ### Errors
     * - `FuelTankNotFound` if fuel tank at `tank_id` does not exist
     * - `NoPermission` if `origin` does not have permission to add an account
     * - `AccountAlreadyExists` if account at `user_id` already exists
     */
    get asV3010(): {tankId: v3010.MultiAddress, userIds: v3010.MultiAddress[], continueOnFailure: boolean} {
        assert(this.isV3010)
        return this._chain.decodeCall(this.call)
    }
}

export class FuelTanksBatchRemoveAccountCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'FuelTanks.batch_remove_account')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Similar to remove_account but takes a list of `AccountId`s to
     * remove from a fuel tank.
     * ### Errors
     * - `FuelTankNotFound` if fuel tank at `tank_id` does not exist
     * - `NoPermission` if `origin` does not have permission to add an account
     * - `AccountNotFound` if account at `user_id` does not exist
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('FuelTanks.batch_remove_account') === 'e548a21f55c9e5bef7a56196dab640774174a939562687e1e6e32b377168ebb5'
    }

    /**
     * Similar to remove_account but takes a list of `AccountId`s to
     * remove from a fuel tank.
     * ### Errors
     * - `FuelTankNotFound` if fuel tank at `tank_id` does not exist
     * - `NoPermission` if `origin` does not have permission to add an account
     * - `AccountNotFound` if account at `user_id` does not exist
     */
    get asEfinityV3000(): {tankId: efinityV3000.MultiAddress, userIds: efinityV3000.MultiAddress[]} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Similar to remove_account but takes a list of `AccountId`s to
     * remove from a fuel tank.
     * ### Errors
     * - `FuelTankNotFound` if fuel tank at `tank_id` does not exist
     * - `NoPermission` if `origin` does not have permission to add an account
     * - `AccountNotFound` if account at `user_id` does not exist
     */
    get isV3010(): boolean {
        return this._chain.getCallHash('FuelTanks.batch_remove_account') === '7c180147240d8135eaef78e009d4c536a409d5d75e9ce54537a0b3955a696b36'
    }

    /**
     * Similar to remove_account but takes a list of `AccountId`s to
     * remove from a fuel tank.
     * ### Errors
     * - `FuelTankNotFound` if fuel tank at `tank_id` does not exist
     * - `NoPermission` if `origin` does not have permission to add an account
     * - `AccountNotFound` if account at `user_id` does not exist
     */
    get asV3010(): {tankId: v3010.MultiAddress, userIds: v3010.MultiAddress[], continueOnFailure: boolean} {
        assert(this.isV3010)
        return this._chain.decodeCall(this.call)
    }
}

export class FuelTanksCreateFuelTankCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'FuelTanks.create_fuel_tank')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Creates a fuel tank, given a descriptor
     * 
     * # Errors
     * - `FuelTankAlreadyExists` if `tank_id` already exists
     * - `DuplicateRuleKinds` if a rule set has multiple rules of the same kind
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('FuelTanks.create_fuel_tank') === '349d9c11643e18c14abb4dbe03ead06a20383be68cd80011765b4c8cf8c14ebe'
    }

    /**
     * Creates a fuel tank, given a descriptor
     * 
     * # Errors
     * - `FuelTankAlreadyExists` if `tank_id` already exists
     * - `DuplicateRuleKinds` if a rule set has multiple rules of the same kind
     */
    get asEfinityV3000(): {descriptor: efinityV3000.FuelTankDescriptor} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Creates a fuel tank, given a descriptor
     * 
     * # Errors
     * - `FuelTankAlreadyExists` if `tank_id` already exists
     * - `DuplicateRuleKinds` if a rule set has multiple rules of the same kind
     */
    get isV3010(): boolean {
        return this._chain.getCallHash('FuelTanks.create_fuel_tank') === 'c90ff7c5031fef7f34109918033cc8e18fbcd370eb9d21b5d437d48829c3000a'
    }

    /**
     * Creates a fuel tank, given a descriptor
     * 
     * # Errors
     * - `FuelTankAlreadyExists` if `tank_id` already exists
     * - `DuplicateRuleKinds` if a rule set has multiple rules of the same kind
     */
    get asV3010(): {descriptor: v3010.FuelTankDescriptor} {
        assert(this.isV3010)
        return this._chain.decodeCall(this.call)
    }
}

export class FuelTanksDestroyFuelTankCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'FuelTanks.destroy_fuel_tank')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Destroy the fuel tank by scheduling the deletion for `on_finalize` to execute
     * Only callable by owner
     * The fuel tank must be frozen
     * Can only be destroyed if all accounts are removed
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('FuelTanks.destroy_fuel_tank') === '2b9b490c0171de9f8a3f945d1457a9a08933564a71b77cb634db2aa898e91e63'
    }

    /**
     * Destroy the fuel tank by scheduling the deletion for `on_finalize` to execute
     * Only callable by owner
     * The fuel tank must be frozen
     * Can only be destroyed if all accounts are removed
     */
    get asEfinityV3000(): {tankId: efinityV3000.MultiAddress} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }
}

export class FuelTanksDispatchCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'FuelTanks.dispatch')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     * 
     * # Errors
     * - `FuelTankNotFound` if `tank_id` does not exist.
     * - `InvalidRuleSetId` if `rule_set_id` does not exist
     * - `UsageRestricted` if caller is not part of ruleset whitelist
     * - `TransactionExceedsFuelBurnLimit` if call exceeds the max fee limit set by ruleset
     * - `TransactionExceedsUserBudget` if call exceeds the max user budget limit set by
     *   ruleset
     * - `TransactionExceedsFuelTankBudget` if call exceeds the max fuel tank budget set by
     *   ruleset
     * - `CallerDoesNotHaveRuleSetTokenBalance` if caller does not own the tokens to use the
     *   ruleset
     * - `TransactionNotPermitted` if the call is not in the list of permitted calls of ruleset
     * - `Overflow` if amount overflows type
     * - `UserBalanceLowForRemainingFee` if caller does not have enough balance to pay for
     *   remaining_fee when `pays_remaining_fee` is true
     * - `FuelTankOutOfFunds` if the fuel tank account cannot pay fees
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('FuelTanks.dispatch') === '29fab48a59fc16984be052a84c27eebe3fc01746780a62019f8fe0728661e03b'
    }

    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     * 
     * # Errors
     * - `FuelTankNotFound` if `tank_id` does not exist.
     * - `InvalidRuleSetId` if `rule_set_id` does not exist
     * - `UsageRestricted` if caller is not part of ruleset whitelist
     * - `TransactionExceedsFuelBurnLimit` if call exceeds the max fee limit set by ruleset
     * - `TransactionExceedsUserBudget` if call exceeds the max user budget limit set by
     *   ruleset
     * - `TransactionExceedsFuelTankBudget` if call exceeds the max fuel tank budget set by
     *   ruleset
     * - `CallerDoesNotHaveRuleSetTokenBalance` if caller does not own the tokens to use the
     *   ruleset
     * - `TransactionNotPermitted` if the call is not in the list of permitted calls of ruleset
     * - `Overflow` if amount overflows type
     * - `UserBalanceLowForRemainingFee` if caller does not have enough balance to pay for
     *   remaining_fee when `pays_remaining_fee` is true
     * - `FuelTankOutOfFunds` if the fuel tank account cannot pay fees
     */
    get asEfinityV3000(): {tankId: efinityV3000.MultiAddress, ruleSetId: number, call: efinityV3000.Call, paysRemainingFee: boolean} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     * 
     * # Errors
     * - `FuelTankNotFound` if `tank_id` does not exist.
     * - `InvalidRuleSetId` if `rule_set_id` does not exist
     * - `UsageRestricted` if caller is not part of ruleset whitelist
     * - `TransactionExceedsFuelBurnLimit` if call exceeds the max fee limit set by ruleset
     * - `TransactionExceedsUserBudget` if call exceeds the max user budget limit set by
     *   ruleset
     * - `TransactionExceedsFuelTankBudget` if call exceeds the max fuel tank budget set by
     *   ruleset
     * - `CallerDoesNotHaveRuleSetTokenBalance` if caller does not own the tokens to use the
     *   ruleset
     * - `TransactionNotPermitted` if the call is not in the list of permitted calls of ruleset
     * - `Overflow` if amount overflows type
     * - `UserBalanceLowForRemainingFee` if caller does not have enough balance to pay for
     *   remaining_fee when `pays_remaining_fee` is true
     * - `FuelTankOutOfFunds` if the fuel tank account cannot pay fees
     */
    get isV3000(): boolean {
        return this._chain.getCallHash('FuelTanks.dispatch') === 'e7212c09d290866dd6cf7b03e72966afffc4c1660dacf6f1376a8e2a70029ea3'
    }

    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     * 
     * # Errors
     * - `FuelTankNotFound` if `tank_id` does not exist.
     * - `InvalidRuleSetId` if `rule_set_id` does not exist
     * - `UsageRestricted` if caller is not part of ruleset whitelist
     * - `TransactionExceedsFuelBurnLimit` if call exceeds the max fee limit set by ruleset
     * - `TransactionExceedsUserBudget` if call exceeds the max user budget limit set by
     *   ruleset
     * - `TransactionExceedsFuelTankBudget` if call exceeds the max fuel tank budget set by
     *   ruleset
     * - `CallerDoesNotHaveRuleSetTokenBalance` if caller does not own the tokens to use the
     *   ruleset
     * - `TransactionNotPermitted` if the call is not in the list of permitted calls of ruleset
     * - `Overflow` if amount overflows type
     * - `UserBalanceLowForRemainingFee` if caller does not have enough balance to pay for
     *   remaining_fee when `pays_remaining_fee` is true
     * - `FuelTankOutOfFunds` if the fuel tank account cannot pay fees
     */
    get asV3000(): {tankId: v3000.MultiAddress, ruleSetId: number, call: v3000.Call, paysRemainingFee: boolean} {
        assert(this.isV3000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     * 
     * # Errors
     * - `FuelTankNotFound` if `tank_id` does not exist.
     * - `InvalidRuleSetId` if `rule_set_id` does not exist
     * - `UsageRestricted` if caller is not part of ruleset whitelist
     * - `TransactionExceedsFuelBurnLimit` if call exceeds the max fee limit set by ruleset
     * - `TransactionExceedsUserBudget` if call exceeds the max user budget limit set by
     *   ruleset
     * - `TransactionExceedsFuelTankBudget` if call exceeds the max fuel tank budget set by
     *   ruleset
     * - `CallerDoesNotHaveRuleSetTokenBalance` if caller does not own the tokens to use the
     *   ruleset
     * - `TransactionNotPermitted` if the call is not in the list of permitted calls of ruleset
     * - `Overflow` if amount overflows type
     * - `UserBalanceLowForRemainingFee` if caller does not have enough balance to pay for
     *   remaining_fee when `pays_remaining_fee` is true
     * - `FuelTankOutOfFunds` if the fuel tank account cannot pay fees
     */
    get isV3010(): boolean {
        return this._chain.getCallHash('FuelTanks.dispatch') === '685fc5998cf5decaa167f81074a052d50bf9b96b059c5483ab84a473e54bb7e5'
    }

    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     * 
     * # Errors
     * - `FuelTankNotFound` if `tank_id` does not exist.
     * - `InvalidRuleSetId` if `rule_set_id` does not exist
     * - `UsageRestricted` if caller is not part of ruleset whitelist
     * - `TransactionExceedsFuelBurnLimit` if call exceeds the max fee limit set by ruleset
     * - `TransactionExceedsUserBudget` if call exceeds the max user budget limit set by
     *   ruleset
     * - `TransactionExceedsFuelTankBudget` if call exceeds the max fuel tank budget set by
     *   ruleset
     * - `CallerDoesNotHaveRuleSetTokenBalance` if caller does not own the tokens to use the
     *   ruleset
     * - `TransactionNotPermitted` if the call is not in the list of permitted calls of ruleset
     * - `Overflow` if amount overflows type
     * - `UserBalanceLowForRemainingFee` if caller does not have enough balance to pay for
     *   remaining_fee when `pays_remaining_fee` is true
     * - `FuelTankOutOfFunds` if the fuel tank account cannot pay fees
     */
    get asV3010(): {tankId: v3010.MultiAddress, ruleSetId: number, call: v3010.Call, paysRemainingFee: boolean} {
        assert(this.isV3010)
        return this._chain.decodeCall(this.call)
    }
}

export class FuelTanksDispatchAndTouchCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'FuelTanks.dispatch_and_touch')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     * # Errors
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('FuelTanks.dispatch_and_touch') === '29fab48a59fc16984be052a84c27eebe3fc01746780a62019f8fe0728661e03b'
    }

    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     * # Errors
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    get asEfinityV3000(): {tankId: efinityV3000.MultiAddress, ruleSetId: number, call: efinityV3000.Call, paysRemainingFee: boolean} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     * # Errors
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    get isV3000(): boolean {
        return this._chain.getCallHash('FuelTanks.dispatch_and_touch') === 'e7212c09d290866dd6cf7b03e72966afffc4c1660dacf6f1376a8e2a70029ea3'
    }

    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     * # Errors
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    get asV3000(): {tankId: v3000.MultiAddress, ruleSetId: number, call: v3000.Call, paysRemainingFee: boolean} {
        assert(this.isV3000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     * # Errors
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    get isV3010(): boolean {
        return this._chain.getCallHash('FuelTanks.dispatch_and_touch') === '685fc5998cf5decaa167f81074a052d50bf9b96b059c5483ab84a473e54bb7e5'
    }

    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     * # Errors
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    get asV3010(): {tankId: v3010.MultiAddress, ruleSetId: number, call: v3010.Call, paysRemainingFee: boolean} {
        assert(this.isV3010)
        return this._chain.decodeCall(this.call)
    }
}

export class FuelTanksForceSetConsumptionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'FuelTanks.force_set_consumption')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Force set the fuel tank consumption
     * If `user_id` is `Some`, it sets the consumption for that account.
     * If it is `None`, it sets the consumption on the fuel tank directly.
     * 
     * # Errors
     * - `AccountNotFound` if `user_id` is `Some` and account does not exist
     * - `FuelTankNotFound` if tank_id does not exist
     * - `NoPermission` if caller is not ForceOrigin or fuel tank owner
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('FuelTanks.force_set_consumption') === '465df72f8d1b6dcfdd1b6a3bc9673a492b029ff7adea01f798ff0b1ae3e8dca4'
    }

    /**
     * Force set the fuel tank consumption
     * If `user_id` is `Some`, it sets the consumption for that account.
     * If it is `None`, it sets the consumption on the fuel tank directly.
     * 
     * # Errors
     * - `AccountNotFound` if `user_id` is `Some` and account does not exist
     * - `FuelTankNotFound` if tank_id does not exist
     * - `NoPermission` if caller is not ForceOrigin or fuel tank owner
     */
    get asEfinityV3000(): {tankId: efinityV3000.MultiAddress, userId: (efinityV3000.MultiAddress | undefined), ruleSetId: number, consumption: efinityV3000.Consumption} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }
}

export class FuelTanksInsertRuleSetCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'FuelTanks.insert_rule_set')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Insert a new rule set for `tank_id` and `rule_set_id`. It can be a new rule set
     * or it can replace an existing one. If it is replacing a rule set, a rule that is storing
     * data on any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove
     * the data first. If a rule is being replaced, it will be mutated with the new parameters,
     * and it will maintain any persistent data it already has.
     * 
     * This is only callable by the fuel tank's owner.
     * ### Errors
     * - `FuelTankNotFound` if `tank_id` does not exist.
     * - `NoPermission` if caller is not the fuel tank owner
     * - `RequiresFrozenTankOrRuleset` if tank or rule set is not frozen
     * - `CannotRemoveRuleThatIsStoringAccountData` if removing a rule that is storing account
     *   data
     * - `MaxRuleSetsExceeded` if max number of rule sets was exceeded
     * - `DuplicateRuleKinds` if adding a rule set with multiple rules of the same kind
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('FuelTanks.insert_rule_set') === '2b06f118a8be5687d72b0c7cca48fbb7daae4c128ac7c48b350418cb461ae87e'
    }

    /**
     * Insert a new rule set for `tank_id` and `rule_set_id`. It can be a new rule set
     * or it can replace an existing one. If it is replacing a rule set, a rule that is storing
     * data on any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove
     * the data first. If a rule is being replaced, it will be mutated with the new parameters,
     * and it will maintain any persistent data it already has.
     * 
     * This is only callable by the fuel tank's owner.
     * ### Errors
     * - `FuelTankNotFound` if `tank_id` does not exist.
     * - `NoPermission` if caller is not the fuel tank owner
     * - `RequiresFrozenTankOrRuleset` if tank or rule set is not frozen
     * - `CannotRemoveRuleThatIsStoringAccountData` if removing a rule that is storing account
     *   data
     * - `MaxRuleSetsExceeded` if max number of rule sets was exceeded
     * - `DuplicateRuleKinds` if adding a rule set with multiple rules of the same kind
     */
    get asEfinityV3000(): {tankId: efinityV3000.MultiAddress, ruleSetId: number, rules: efinityV3000.DispatchRuleDescriptor[]} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Insert a new rule set for `tank_id` and `rule_set_id`. It can be a new rule set
     * or it can replace an existing one. If it is replacing a rule set, a rule that is storing
     * data on any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove
     * the data first. If a rule is being replaced, it will be mutated with the new parameters,
     * and it will maintain any persistent data it already has.
     * 
     * This is only callable by the fuel tank's owner.
     * ### Errors
     * - `FuelTankNotFound` if `tank_id` does not exist.
     * - `NoPermission` if caller is not the fuel tank owner
     * - `RequiresFrozenTankOrRuleset` if tank or rule set is not frozen
     * - `CannotRemoveRuleThatIsStoringAccountData` if removing a rule that is storing account
     *   data
     * - `MaxRuleSetsExceeded` if max number of rule sets was exceeded
     * - `DuplicateRuleKinds` if adding a rule set with multiple rules of the same kind
     */
    get isV3010(): boolean {
        return this._chain.getCallHash('FuelTanks.insert_rule_set') === '66bf20219049af5d5f128c67528edd562928343604bcfd328a4453fcede7625d'
    }

    /**
     * Insert a new rule set for `tank_id` and `rule_set_id`. It can be a new rule set
     * or it can replace an existing one. If it is replacing a rule set, a rule that is storing
     * data on any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove
     * the data first. If a rule is being replaced, it will be mutated with the new parameters,
     * and it will maintain any persistent data it already has.
     * 
     * This is only callable by the fuel tank's owner.
     * ### Errors
     * - `FuelTankNotFound` if `tank_id` does not exist.
     * - `NoPermission` if caller is not the fuel tank owner
     * - `RequiresFrozenTankOrRuleset` if tank or rule set is not frozen
     * - `CannotRemoveRuleThatIsStoringAccountData` if removing a rule that is storing account
     *   data
     * - `MaxRuleSetsExceeded` if max number of rule sets was exceeded
     * - `DuplicateRuleKinds` if adding a rule set with multiple rules of the same kind
     */
    get asV3010(): {tankId: v3010.MultiAddress, ruleSetId: number, rules: v3010.DispatchRuleDescriptor[]} {
        assert(this.isV3010)
        return this._chain.decodeCall(this.call)
    }
}

export class FuelTanksMutateFuelTankCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'FuelTanks.mutate_fuel_tank')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Apply `mutation` to fuel tank with `tank_id`.
     * 
     * # Errors
     * - `FuelTankNotFound` if `tank_id` does not exist.
     * - `NoPermission` if `origin` is not the fuel tank owner
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('FuelTanks.mutate_fuel_tank') === '580ca19f29daa31f210b60ac688f855db7ac791fd070797b9e0e36f5bf69d940'
    }

    /**
     * Apply `mutation` to fuel tank with `tank_id`.
     * 
     * # Errors
     * - `FuelTankNotFound` if `tank_id` does not exist.
     * - `NoPermission` if `origin` is not the fuel tank owner
     */
    get asEfinityV3000(): {tankId: efinityV3000.MultiAddress, mutation: efinityV3000.DefaultTankMutation} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Apply `mutation` to fuel tank with `tank_id`.
     * 
     * # Errors
     * - `FuelTankNotFound` if `tank_id` does not exist.
     * - `NoPermission` if `origin` is not the fuel tank owner
     */
    get isV3010(): boolean {
        return this._chain.getCallHash('FuelTanks.mutate_fuel_tank') === '9c5fe3d87288410aa8a3827d63434bb6999ebb57c48bba28556304535ab68ca6'
    }

    /**
     * Apply `mutation` to fuel tank with `tank_id`.
     * 
     * # Errors
     * - `FuelTankNotFound` if `tank_id` does not exist.
     * - `NoPermission` if `origin` is not the fuel tank owner
     */
    get asV3010(): {tankId: v3010.MultiAddress, mutation: v3010.DefaultTankMutation} {
        assert(this.isV3010)
        return this._chain.decodeCall(this.call)
    }
}

export class FuelTanksRemoveAccountCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'FuelTanks.remove_account')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Removes account for `user_id` from fuel tank at `tank_id`. Any deposits
     * are returned.
     * ### Errors
     * - `FuelTankNotFound` if fuel tank at `tank_id` does not exist
     * - `NoPermission` if `origin` does not have permission to add an account
     * - `AccountNotFound` if account at `user_id` does not exist
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('FuelTanks.remove_account') === '6b49a9c6d7cc4fec142fc02f8f252f4fa0bd06e832d1e877b43f77b3d8ef27b3'
    }

    /**
     * Removes account for `user_id` from fuel tank at `tank_id`. Any deposits
     * are returned.
     * ### Errors
     * - `FuelTankNotFound` if fuel tank at `tank_id` does not exist
     * - `NoPermission` if `origin` does not have permission to add an account
     * - `AccountNotFound` if account at `user_id` does not exist
     */
    get asEfinityV3000(): {tankId: efinityV3000.MultiAddress, userId: efinityV3000.MultiAddress} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }
}

export class FuelTanksRemoveAccountRuleDataCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'FuelTanks.remove_account_rule_data')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove account rule data if it exists. Only callable by the fuel tank's owner. Requires
     * the fuel tank or the rule set to be frozen.
     * ### Errors
     * - `FuelTankNotFound` if fuel tank for `tank_id` doesn't exist
     * - `NoPermission` if called by non-owner
     * - `AccountNotFound` if account does not exist for `user_id`
     * - `RuleSetNotFound` if rule set does not exist for `rule_set_id`
     * - `RequiresFrozenTankOrRuleset` if tank or rule set is not frozen
     * - `RuleNotFound` if rule does not exist for `rule_kind`
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('FuelTanks.remove_account_rule_data') === 'f5ec3a04a36a724aaa7d39fdbfabb5580f0e13951f9342b70fcaeb06dea298e4'
    }

    /**
     * Remove account rule data if it exists. Only callable by the fuel tank's owner. Requires
     * the fuel tank or the rule set to be frozen.
     * ### Errors
     * - `FuelTankNotFound` if fuel tank for `tank_id` doesn't exist
     * - `NoPermission` if called by non-owner
     * - `AccountNotFound` if account does not exist for `user_id`
     * - `RuleSetNotFound` if rule set does not exist for `rule_set_id`
     * - `RequiresFrozenTankOrRuleset` if tank or rule set is not frozen
     * - `RuleNotFound` if rule does not exist for `rule_kind`
     */
    get asEfinityV3000(): {tankId: efinityV3000.MultiAddress, userId: efinityV3000.MultiAddress, ruleSetId: number, ruleKind: efinityV3000.DispatchRuleKind} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Remove account rule data if it exists. Only callable by the fuel tank's owner. Requires
     * the fuel tank or the rule set to be frozen.
     * ### Errors
     * - `FuelTankNotFound` if fuel tank for `tank_id` doesn't exist
     * - `NoPermission` if called by non-owner
     * - `AccountNotFound` if account does not exist for `user_id`
     * - `RuleSetNotFound` if rule set does not exist for `rule_set_id`
     * - `RequiresFrozenTankOrRuleset` if tank or rule set is not frozen
     * - `RuleNotFound` if rule does not exist for `rule_kind`
     */
    get isV3010(): boolean {
        return this._chain.getCallHash('FuelTanks.remove_account_rule_data') === 'd62fe8a27ba66b6d7b8ed9f74f289bdc41bebf234c0df25965f0147b92569176'
    }

    /**
     * Remove account rule data if it exists. Only callable by the fuel tank's owner. Requires
     * the fuel tank or the rule set to be frozen.
     * ### Errors
     * - `FuelTankNotFound` if fuel tank for `tank_id` doesn't exist
     * - `NoPermission` if called by non-owner
     * - `AccountNotFound` if account does not exist for `user_id`
     * - `RuleSetNotFound` if rule set does not exist for `rule_set_id`
     * - `RequiresFrozenTankOrRuleset` if tank or rule set is not frozen
     * - `RuleNotFound` if rule does not exist for `rule_kind`
     */
    get asV3010(): {tankId: v3010.MultiAddress, userId: v3010.MultiAddress, ruleSetId: number, ruleKind: v3010.DispatchRuleKind} {
        assert(this.isV3010)
        return this._chain.decodeCall(this.call)
    }
}

export class FuelTanksRemoveRuleSetCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'FuelTanks.remove_rule_set')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove rule set for `tank_id` and `rule_set_id`. A rule that is storing data on
     * any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove the
     * data first. This is only callable by the fuel tank's owner.
     * # Errors
     * - `FuelTankNotFound` if `tank_id` does not exist.
     * - `NoPermission` if caller is not the fuel tank owner
     * - `RequiresFrozenTankOrRuleset` if tank or rule set is not frozen
     * - `CannotRemoveRuleThatIsStoringAccountData` if removing a rule that is storing account
     *   data
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('FuelTanks.remove_rule_set') === 'f09ae45a5e0ac6e1a34b392a13e3d81deefc3581926451813030e95e15c397fb'
    }

    /**
     * Remove rule set for `tank_id` and `rule_set_id`. A rule that is storing data on
     * any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove the
     * data first. This is only callable by the fuel tank's owner.
     * # Errors
     * - `FuelTankNotFound` if `tank_id` does not exist.
     * - `NoPermission` if caller is not the fuel tank owner
     * - `RequiresFrozenTankOrRuleset` if tank or rule set is not frozen
     * - `CannotRemoveRuleThatIsStoringAccountData` if removing a rule that is storing account
     *   data
     */
    get asEfinityV3000(): {tankId: efinityV3000.MultiAddress, ruleSetId: number} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }
}

export class FuelTanksScheduleMutateFreezeStateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'FuelTanks.schedule_mutate_freeze_state')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Schedule mutating of `is_frozen` state that determines if fuel tank or rule set can be
     * used
     * 
     * Additional 1 read and 1 write are added to account for `on_finalize` storage operations
     * 
     * # Errors
     * - `FuelTankNotFound` if `tank_id` does not exist.
     * - `NoPermission` if caller is not a fuel tank owner
     * - `FreezeQueueFull` if the queue is full
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('FuelTanks.schedule_mutate_freeze_state') === '400d585823f6a5fce567d3e438bd1ddac0b7cc3662931a51424df14279fde426'
    }

    /**
     * Schedule mutating of `is_frozen` state that determines if fuel tank or rule set can be
     * used
     * 
     * Additional 1 read and 1 write are added to account for `on_finalize` storage operations
     * 
     * # Errors
     * - `FuelTankNotFound` if `tank_id` does not exist.
     * - `NoPermission` if caller is not a fuel tank owner
     * - `FreezeQueueFull` if the queue is full
     */
    get asEfinityV3000(): {tankId: efinityV3000.MultiAddress, ruleSetId: (number | undefined), isFrozen: boolean} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }
}

export class MarketplaceCancelListingCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Marketplace.cancel_listing')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Cancels the listing with `listing_id`. Only callable by the seller.
     * ### Parameters
     * - `listing_id`: The ID of the listing to cancel
     * ### Errors
     * - `ListingNotFound` if the listing under `listing_id` does not exist
     * - `NoPermission` if the listing seller is not the caller, `origin`
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('Marketplace.cancel_listing') === '56b483accb79407d2146b841c242046f1ff043c0a2fda9fb311497fdcd762679'
    }

    /**
     * Cancels the listing with `listing_id`. Only callable by the seller.
     * ### Parameters
     * - `listing_id`: The ID of the listing to cancel
     * ### Errors
     * - `ListingNotFound` if the listing under `listing_id` does not exist
     * - `NoPermission` if the listing seller is not the caller, `origin`
     */
    get asEfinityV3000(): {listingId: Uint8Array} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }
}

export class MarketplaceCreateListingCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Marketplace.create_listing')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Places a sell order. Requires `make_asset_id` or `take_asset_id` to be a `Currency`.
     * The id for the listing is generated with [IdGeneratable](traits::IdGeneratable) by
     * hashing the listing.
     * ### Parameters
     * - `make_asset_id`: The id of the asset being sold
     * - `take_asset_id`: The id of the asset being requested
     * - `amount`: The number of units being sold
     * - `price`: The requested price for each unit. If it's an auction, this is the minimum
     *   bid
     * - `salt`: Can be used to differentiate listings
     * - `auction_data`: Including this makes the listing an auction
     * ### Errors
     * - `InvalidAuctionStart` if the start is less than the current block +
     *   `ListingActiveDelay`
     * - `InvalidAuctionEnded` if auction ends before it starts
     * - `NoCurrency` Neither the make or take side is considered a currency
     * - `ListingForbidden` if make or take side tokens are not allowed to be listed
     * - `CurrencyNotAllowedAsRoyalty` if currency cannot be used as a royalty
     * - `LowBaseCurrencyBalance` if base currency balance is too low
     * - `LowTokenBalance` token balance is too low for reserve
     * - `ListingAlreadyExists` if a listing with the same ID already exists
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('Marketplace.create_listing') === '78b7a393701f9f95d8413f0683f9a8071358025ff047a772b81cffc1c315d7b4'
    }

    /**
     * Places a sell order. Requires `make_asset_id` or `take_asset_id` to be a `Currency`.
     * The id for the listing is generated with [IdGeneratable](traits::IdGeneratable) by
     * hashing the listing.
     * ### Parameters
     * - `make_asset_id`: The id of the asset being sold
     * - `take_asset_id`: The id of the asset being requested
     * - `amount`: The number of units being sold
     * - `price`: The requested price for each unit. If it's an auction, this is the minimum
     *   bid
     * - `salt`: Can be used to differentiate listings
     * - `auction_data`: Including this makes the listing an auction
     * ### Errors
     * - `InvalidAuctionStart` if the start is less than the current block +
     *   `ListingActiveDelay`
     * - `InvalidAuctionEnded` if auction ends before it starts
     * - `NoCurrency` Neither the make or take side is considered a currency
     * - `ListingForbidden` if make or take side tokens are not allowed to be listed
     * - `CurrencyNotAllowedAsRoyalty` if currency cannot be used as a royalty
     * - `LowBaseCurrencyBalance` if base currency balance is too low
     * - `LowTokenBalance` token balance is too low for reserve
     * - `ListingAlreadyExists` if a listing with the same ID already exists
     */
    get asEfinityV3000(): {makeAssetId: efinityV3000.AssetId, takeAssetId: efinityV3000.AssetId, amount: bigint, price: bigint, salt: Uint8Array, auctionData: (efinityV3000.AuctionData | undefined)} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }
}

export class MarketplaceFillListingCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Marketplace.fill_listing')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Fills a fixed price listing. This will execute immediately.
     * ### Parameters
     * - `listing_id`: The id for the listing to buy from
     * - `amount`: The number of units purchased
     * ### Errors
     * - `ListingNotFound` if the listing under `listing_id` does not exist
     * - `ListingIsWrongType` if the listing is not under auction
     * - `InvalidAmount` if the amount that still needs to be filled is greater than `amount`
     * - `ListingNotActive` if the listing has not passed the `ListingActiveDelay` yet
     * - `Overflow` if amount * listing_price is too large
     * - `TakeValueUnderMinimum` if the listings `take` value is under the minimum required
     * - `LowTokenBalance` if the buyer does not have enough tokens for reserve
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('Marketplace.fill_listing') === 'e370d131ef17581bf77299b58dd556c1a78d367f937bce7f44e290d100f7ed4d'
    }

    /**
     * Fills a fixed price listing. This will execute immediately.
     * ### Parameters
     * - `listing_id`: The id for the listing to buy from
     * - `amount`: The number of units purchased
     * ### Errors
     * - `ListingNotFound` if the listing under `listing_id` does not exist
     * - `ListingIsWrongType` if the listing is not under auction
     * - `InvalidAmount` if the amount that still needs to be filled is greater than `amount`
     * - `ListingNotActive` if the listing has not passed the `ListingActiveDelay` yet
     * - `Overflow` if amount * listing_price is too large
     * - `TakeValueUnderMinimum` if the listings `take` value is under the minimum required
     * - `LowTokenBalance` if the buyer does not have enough tokens for reserve
     */
    get asEfinityV3000(): {listingId: Uint8Array, amount: bigint} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }
}

export class MarketplaceFinalizeAuctionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Marketplace.finalize_auction')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Finalize the auction with id: `listing_id`. This will end the auction and transfer
     * funds. It fails if the auction is not over.
     * ### Parameters
     * - `listing_id`: The ID for the listing to finalize
     * ### Errors
     * - `ListingNotFound` if listing under `listing_id` does not exist
     * - `ListingIsWrongType` if listing is not an auction
     * - `AuctionNotOver` if the auction has not finished yet
     * - `TakeValueUnderMinimum` if the take value is less than the minimum required
     * - `Overflow` if bid price * listing_amount is too large
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('Marketplace.finalize_auction') === '56b483accb79407d2146b841c242046f1ff043c0a2fda9fb311497fdcd762679'
    }

    /**
     * Finalize the auction with id: `listing_id`. This will end the auction and transfer
     * funds. It fails if the auction is not over.
     * ### Parameters
     * - `listing_id`: The ID for the listing to finalize
     * ### Errors
     * - `ListingNotFound` if listing under `listing_id` does not exist
     * - `ListingIsWrongType` if listing is not an auction
     * - `AuctionNotOver` if the auction has not finished yet
     * - `TakeValueUnderMinimum` if the take value is less than the minimum required
     * - `Overflow` if bid price * listing_amount is too large
     */
    get asEfinityV3000(): {listingId: Uint8Array} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }
}

export class MarketplacePlaceBidCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Marketplace.place_bid')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Places a bid on a listing. The listing must be an auction, and it must be currently
     * active.
     * ### Parameters
     * - `listing_id`: The id for the listing to buy from
     * - `price`: The price for a single unit
     * ### Errors
     * - `ListingNotFound` if listing under `listing_id` does not exist
     * - `ListingWrongType` if listing is not an auction
     * - `InactiveAuction` if listing operates outside of specified start and end block
     * - `Overflow` if added bid is too large to store
     * - `InvalidPrice` if price is less than mininum_price for a bid
     * - `Overflow` if older bid * amount is too large
     * - `Overflow` if new bid price is too large
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('Marketplace.place_bid') === 'ef3821a4c9f8f54d06f376b33812844522af03669204d7f987e47edffe72dcf3'
    }

    /**
     * Places a bid on a listing. The listing must be an auction, and it must be currently
     * active.
     * ### Parameters
     * - `listing_id`: The id for the listing to buy from
     * - `price`: The price for a single unit
     * ### Errors
     * - `ListingNotFound` if listing under `listing_id` does not exist
     * - `ListingWrongType` if listing is not an auction
     * - `InactiveAuction` if listing operates outside of specified start and end block
     * - `Overflow` if added bid is too large to store
     * - `InvalidPrice` if price is less than mininum_price for a bid
     * - `Overflow` if older bid * amount is too large
     * - `Overflow` if new bid price is too large
     */
    get asEfinityV3000(): {listingId: Uint8Array, price: bigint} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }
}

export class MarketplaceSetProtocolFeeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Marketplace.set_protocol_fee')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Change the protocol fee to `protocol_fee`. Fails if `origin` is invalid.
     * ### Parameters
     * - `protocol_fee`: Percentage of fee to set
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('Marketplace.set_protocol_fee') === '164c71fe8ee3317ae364f8c5528ba44b7eddb84e7a9a394e59bb344ad0ec2293'
    }

    /**
     * Change the protocol fee to `protocol_fee`. Fails if `origin` is invalid.
     * ### Parameters
     * - `protocol_fee`: Percentage of fee to set
     */
    get asEfinityV3000(): {protocolFee: number} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiAssetsBatchMultiTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiAssets.batch_multi_transfer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfers an amount of tokens for a specific Asset to a given `recipient` from `source` account
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('MultiAssets.batch_multi_transfer') === '914f10beec5bd65ea351457ca9b6b6f748c23d4c75a051252e15776e869fb606'
    }

    /**
     * Transfers an amount of tokens for a specific Asset to a given `recipient` from `source` account
     */
    get asEfinityV1(): {recipients: efinityV1.RecipientWithAsset[]} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiAssetsBatchTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiAssets.batch_transfer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfers the specific amount of tokens of given `recipients` of `asset` from
     * `source` account.
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('MultiAssets.batch_transfer') === '456577a22159d13a26684641ae5c76c4cba13f06ce341444a1ee3c6c9025b388'
    }

    /**
     * Transfers the specific amount of tokens of given `recipients` of `asset` from
     * `source` account.
     */
    get asEfinityV1(): {asset: bigint, recipients: efinityV1.Recipient[]} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiAssetsBatchTransferByChunkCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiAssets.batch_transfer_by_chunk')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * # TODO
     * - `recipients_by_chunk` must be bounded.
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('MultiAssets.batch_transfer_by_chunk') === 'aff0983d45fafc37e93000940213d7bb0cdd4f98ef32aff3d45b0fcf15777987'
    }

    /**
     * # TODO
     * - `recipients_by_chunk` must be bounded.
     */
    get asEfinityV1(): {asset: bigint, recipientsByChunk: efinityV1.RecipientsByChunk[]} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiAssetsBurnCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiAssets.burn')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Destroys a given `amount` of `token` belonged to `asset`.
     * 
     * See `Pallet::do_burn_by_chunk`.
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('MultiAssets.burn') === '89e2bbfd58aaf8e4e4b34e50f0b6a36823f59c189c929cf627fd21805abaff88'
    }

    /**
     * Destroys a given `amount` of `token` belonged to `asset`.
     * 
     * See `Pallet::do_burn_by_chunk`.
     */
    get asEfinityV1(): {asset: bigint, token: number, amount: bigint} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiAssetsBurnAssetCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiAssets.burn_asset')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Removes the given `asset`.
     * 
     * See `Pallet::do_burn_asset`.
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('MultiAssets.burn_asset') === '6fd47e6c95eb24f766a5048e47cccda4b627923b95609599662394187c43719a'
    }

    /**
     * Removes the given `asset`.
     * 
     * See `Pallet::do_burn_asset`.
     */
    get asEfinityV1(): {asset: bigint, assetAttributeCount: number, nextTokenId: number} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiAssetsBurnByChunkCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiAssets.burn_by_chunk')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Optimized `burn` by chunks.
     * 
     * See `Pallet::do_burn_by_chunk`.
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('MultiAssets.burn_by_chunk') === 'f77759d89c0a33d577578902c89dda877d88ab351d4de2049445426214fe91c3'
    }

    /**
     * Optimized `burn` by chunks.
     * 
     * See `Pallet::do_burn_by_chunk`.
     */
    get asEfinityV1(): {asset: bigint, tokens: efinityV1.Range[]} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiAssetsClearAssetAttributeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiAssets.clear_asset_attribute')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Removes the `key` attribute from the given `asset`.
     * 
     * See `Pallet::do_set_asset_attribute`.
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('MultiAssets.clear_asset_attribute') === 'f22ac865e73aaa67c80a5ec4c91b784905ddc2621a6a06c7b39bc2eef9be129b'
    }

    /**
     * Removes the `key` attribute from the given `asset`.
     * 
     * See `Pallet::do_set_asset_attribute`.
     */
    get asEfinityV1(): {asset: bigint, key: Uint8Array} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiAssetsClearTokenAttributeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiAssets.clear_token_attribute')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Removes attribute `key` of the `token` of `asset`.
     * 
     * See `Pallet::do_set_token_attribute`.
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('MultiAssets.clear_token_attribute') === '64afec1b6eff34d57f20408472851a2f2b8c53aa4f4f5769b77f30e88ae05d94'
    }

    /**
     * Removes attribute `key` of the `token` of `asset`.
     * 
     * See `Pallet::do_set_token_attribute`.
     */
    get asEfinityV1(): {asset: bigint, token: number, key: Uint8Array} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiAssetsCreateAssetCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiAssets.create_asset')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Creates a new asset using the given `fungibility` policy where `origin` will be the
     * owner.
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('MultiAssets.create_asset') === '430c714d88289b17f9be8d9d96b9075678817d13381069273a4e4e832ce859fe'
    }

    /**
     * Creates a new asset using the given `fungibility` policy where `origin` will be the
     * owner.
     */
    get asEfinityV1(): {policy: efinityV1.AssetPolicy} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiAssetsMintCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiAssets.mint')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Mints new `amount` of `asset` and transfer to `origin` account.
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('MultiAssets.mint') === '50349db6705298bb8eaa32167b7bc80bcd141b573a0ffe5816fe5815d45c9048'
    }

    /**
     * Mints new `amount` of `asset` and transfer to `origin` account.
     */
    get asEfinityV1(): {asset: bigint, amount: bigint} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiAssetsSetAssetAttributeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiAssets.set_asset_attribute')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Updates the asset attribute `key` to `value` for the given `asset`.
     * 
     * See `Pallet::do_set_asset_attribute`.
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('MultiAssets.set_asset_attribute') === '6c4de0867e652d759d38b12002fbf4f996d0502639c4affa0fb990ccda3976bf'
    }

    /**
     * Updates the asset attribute `key` to `value` for the given `asset`.
     * 
     * See `Pallet::do_set_asset_attribute`.
     */
    get asEfinityV1(): {asset: bigint, key: Uint8Array, value: Uint8Array} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiAssetsSetTokenAttributeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiAssets.set_token_attribute')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Updates attribute `key` of the `token` of `asset` using the given `value`.
     * 
     * See `Pallet::do_set_token_attribute`.
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('MultiAssets.set_token_attribute') === 'b86220f609f1dfa1a8d558f3a138299881e17f1803eaad4ed7811cdd9acb46e0'
    }

    /**
     * Updates attribute `key` of the `token` of `asset` using the given `value`.
     * 
     * See `Pallet::do_set_token_attribute`.
     */
    get asEfinityV1(): {asset: bigint, token: number, key: Uint8Array, value: Uint8Array} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiAssetsTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiAssets.transfer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfers `amount` of `token` from `asset` from `origin` account to `target` account.
     * See `chunks::do_transfer`.
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('MultiAssets.transfer') === '1cf329fd44dd643eec80e1891fa55a8593573c4fd8be3899927d729651beaa70'
    }

    /**
     * Transfers `amount` of `token` from `asset` from `origin` account to `target` account.
     * See `chunks::do_transfer`.
     */
    get asEfinityV1(): {target: efinityV1.MultiAddress, asset: bigint, token: number, amount: bigint} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiAssetsTransferByChunkCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiAssets.transfer_by_chunk')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfers the `tokens` of `asset` from `origin` to `target`.
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('MultiAssets.transfer_by_chunk') === 'e5bdb32e4d697848a3d8ada464a7f155bb4ee92e9a38a2cfd4c18c9d06f3ffac'
    }

    /**
     * Transfers the `tokens` of `asset` from `origin` to `target`.
     */
    get asEfinityV1(): {target: efinityV1.MultiAddress, asset: bigint, tokens: efinityV1.Range[]} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiAssetsTransferOwnershipCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiAssets.transfer_ownership')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfer the ownership of `asset` from `origin` to `target`.
     * 
     * # TODO
     * - Weight based on number of chunks instead of number or elements of tokens.
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('MultiAssets.transfer_ownership') === '4fc84afad542edaeaf16d474863437eda6cfe37592a3f0c79fe25b5f6692834a'
    }

    /**
     * Transfer the ownership of `asset` from `origin` to `target`.
     * 
     * # TODO
     * - Weight based on number of chunks instead of number or elements of tokens.
     */
    get asEfinityV1(): {target: efinityV1.MultiAddress, asset: bigint} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiAssetsOperatorExtApproveAssetCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiAssetsOperatorExt.approve_asset')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Approve the `operator` to manage all of `origin`'s tokens belonging to `asset`
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('MultiAssetsOperatorExt.approve_asset') === 'db55dc4b03c8ef12022496ae990420a14eccdd3d872d9d794a5fb7fdb3de7f17'
    }

    /**
     * Approve the `operator` to manage all of `origin`'s tokens belonging to `asset`
     */
    get asEfinityV1(): {operator: Uint8Array, asset: bigint, expiration: efinityV1.Expiration} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiAssetsOperatorExtApproveForAllCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiAssetsOperatorExt.approve_for_all')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Approve `operator` to manage all the `origin`'s assets.
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('MultiAssetsOperatorExt.approve_for_all') === '0af30968868cefa5e7db1f582d32bef581d5db30f30249d1b22231ef95d46ce4'
    }

    /**
     * Approve `operator` to manage all the `origin`'s assets.
     */
    get asEfinityV1(): {operator: Uint8Array, expiration: efinityV1.Expiration} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiAssetsOperatorExtApproveTokenCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiAssetsOperatorExt.approve_token')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Approve the `operator` to transfer up to `amount` of `origin`'s `token`s
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('MultiAssetsOperatorExt.approve_token') === 'e2f7d1fc75bb209b73d09e9b85a55e01a597344dd6ad55c10be6783d21a74fb6'
    }

    /**
     * Approve the `operator` to transfer up to `amount` of `origin`'s `token`s
     */
    get asEfinityV1(): {operator: Uint8Array, asset: bigint, token: number, amount: bigint, expiration: efinityV1.Expiration} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiAssetsOperatorExtTransferFromCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiAssetsOperatorExt.transfer_from')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfers `amount` of `tokens` from account `from` to address `to` if `origin` has enough allowance
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('MultiAssetsOperatorExt.transfer_from') === 'd2b913d3a3a5ae008034a9f518424b2d005761c4c7a1e4ccb9ba10bdfe9e0fcf'
    }

    /**
     * Transfers `amount` of `tokens` from account `from` to address `to` if `origin` has enough allowance
     */
    get asEfinityV1(): {from: Uint8Array, to: Uint8Array, asset: bigint, token: number, amount: bigint} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiAssetsOperatorExtUnapproveAssetCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiAssetsOperatorExt.unapprove_asset')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Unapprove the `operator` to manage all of `origin`'s tokens belonging to `asset`
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('MultiAssetsOperatorExt.unapprove_asset') === '71c184bcd95e12e5934c981796e88b2c153fd83bad3068dedf7f1b4813574758'
    }

    /**
     * Unapprove the `operator` to manage all of `origin`'s tokens belonging to `asset`
     */
    get asEfinityV1(): {operator: Uint8Array, asset: bigint} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiAssetsOperatorExtUnapproveForAllCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiAssetsOperatorExt.unapprove_for_all')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Unapprove `operator` to manage `origin's` assets
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('MultiAssetsOperatorExt.unapprove_for_all') === '1e2713efb65114597ed1c5d791da173e5bb427cca368815c69e1f8390525f949'
    }

    /**
     * Unapprove `operator` to manage `origin's` assets
     */
    get asEfinityV1(): {operator: Uint8Array} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiAssetsOperatorExtUnapproveTokenCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiAssetsOperatorExt.unapprove_token')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Unapprove `operator` to transfer `origin`'s `token`s
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('MultiAssetsOperatorExt.unapprove_token') === 'be9956cdf9e200b2a3af02d09578cc79f1b5939b74da917ba4a30d5b943da1d9'
    }

    /**
     * Unapprove `operator` to transfer `origin`'s `token`s
     */
    get asEfinityV1(): {operator: Uint8Array, asset: bigint, token: number} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensApproveCollectionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.approve_collection')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Approve the `operator` to manage all of `origin`'s tokens belonging to `collection`
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('MultiTokens.approve_collection') === '488accbd8a7ccff93c1ce6b5609ef67874c52cc8fc80b3b48a2cad226450c092'
    }

    /**
     * Approve the `operator` to manage all of `origin`'s tokens belonging to `collection`
     */
    get asEfinityV2(): {collectionId: bigint, operator: Uint8Array, expiration: (number | undefined)} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensApproveTokenCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.approve_token')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Approve the `operator` to transfer up to `amount` of `origin`'s `token`s
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('MultiTokens.approve_token') === '7266369f860222731cfac3b4dc9f7b3eb8550de09ee165a184b933efc53cd27a'
    }

    /**
     * Approve the `operator` to transfer up to `amount` of `origin`'s `token`s
     */
    get asEfinityV2(): {collectionId: bigint, tokenId: bigint, operator: Uint8Array, amount: bigint, expiration: (number | undefined), currentAmount: bigint} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensBatchMintCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.batch_mint')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Collection owner mints tokens of `collection_id` to `recipients` consisting of an `AccountId` and `MintParams`
     * 
     * # Errors
     * - `AmountZero` if `amount == 0`.
     * - `NotFound` if `collection` does **not** exist.
     * - `NoPermission` if `caller` is not allowed to mint the `collection`.
     * - `MintForbidden` if the policy disallows the operation
     * - `BalanceOverflow` if `amount + current_total_supply` overflows its type.
     * - `TokenCountOverflow` if the token_count overflows
     * - `TokenMintCapExceeded` if the mint policy TokenCap does not allow minting
     * - `MaxTokenCountExceeded` if the mint policy max_token_count is exceeded
     * - `DepositReserveFailed` if the issuer does not have sufficent balance for token deposit
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('MultiTokens.batch_mint') === '084d61eb68c7be95ad054eb3343b987f9d956254a27444db9f5e8c124cd1674c'
    }

    /**
     * Collection owner mints tokens of `collection_id` to `recipients` consisting of an `AccountId` and `MintParams`
     * 
     * # Errors
     * - `AmountZero` if `amount == 0`.
     * - `NotFound` if `collection` does **not** exist.
     * - `NoPermission` if `caller` is not allowed to mint the `collection`.
     * - `MintForbidden` if the policy disallows the operation
     * - `BalanceOverflow` if `amount + current_total_supply` overflows its type.
     * - `TokenCountOverflow` if the token_count overflows
     * - `TokenMintCapExceeded` if the mint policy TokenCap does not allow minting
     * - `MaxTokenCountExceeded` if the mint policy max_token_count is exceeded
     * - `DepositReserveFailed` if the issuer does not have sufficent balance for token deposit
     */
    get asEfinityV2(): {collectionId: bigint, recipients: efinityV2.Type_274[]} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Collection owner mints tokens of `collection_id` to `recipients` consisting of an
     * `AccountId` and `MintParams`
     * 
     * If `continue_on_failure` is false, a single mint failure will fail all operations. If
     * it is true, execution will continue when a failure is encountered.
     * 
     * # Errors
     * - `AmountZero` if `amount == 0`.
     * - `NotFound` if `collection` does **not** exist.
     * - `NoPermission` if `caller` is not allowed to mint the `collection`.
     * - `MintForbidden` if the policy disallows the operation
     * - `BalanceOverflow` if `amount + current_total_supply` overflows its type.
     * - `TokenCountOverflow` if the token_count overflows
     * - `TokenMintCapExceeded` if the mint policy TokenCap does not allow minting
     * - `MaxTokenCountExceeded` if the mint policy max_token_count is exceeded
     * - `DepositReserveFailed` if the issuer does not have sufficent balance for token deposit
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('MultiTokens.batch_mint') === 'ab7a70ee53e3aba4bb2a3c1da9009cb089a50a0e65d2e2b33224718a2ce40813'
    }

    /**
     * Collection owner mints tokens of `collection_id` to `recipients` consisting of an
     * `AccountId` and `MintParams`
     * 
     * If `continue_on_failure` is false, a single mint failure will fail all operations. If
     * it is true, execution will continue when a failure is encountered.
     * 
     * # Errors
     * - `AmountZero` if `amount == 0`.
     * - `NotFound` if `collection` does **not** exist.
     * - `NoPermission` if `caller` is not allowed to mint the `collection`.
     * - `MintForbidden` if the policy disallows the operation
     * - `BalanceOverflow` if `amount + current_total_supply` overflows its type.
     * - `TokenCountOverflow` if the token_count overflows
     * - `TokenMintCapExceeded` if the mint policy TokenCap does not allow minting
     * - `MaxTokenCountExceeded` if the mint policy max_token_count is exceeded
     * - `DepositReserveFailed` if the issuer does not have sufficent balance for token deposit
     */
    get asEfinityV3000(): {collectionId: bigint, recipients: efinityV3000.Type_351[], continueOnFailure: boolean} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Collection owner mints tokens of `collection_id` to `recipients` consisting of an
     * `AccountId` and `MintParams`
     * 
     * If `continue_on_failure` is false, a single mint failure will fail all operations. If
     * it is true, execution will continue when a failure is encountered.
     * 
     * # Errors
     * - `AmountZero` if `amount == 0`.
     * - `NotFound` if `collection` does **not** exist.
     * - `NoPermission` if `caller` is not allowed to mint the `collection`.
     * - `MintForbidden` if the policy disallows the operation
     * - `BalanceOverflow` if `amount + current_total_supply` overflows its type.
     * - `TokenCountOverflow` if the token_count overflows
     * - `TokenMintCapExceeded` if the mint policy TokenCap does not allow minting
     * - `MaxTokenCountExceeded` if the mint policy max_token_count is exceeded
     * - `DepositReserveFailed` if the issuer does not have sufficent balance for token deposit
     */
    get isV3010(): boolean {
        return this._chain.getCallHash('MultiTokens.batch_mint') === '5a12bcf4de746d3694f0383a1c568b861015bfe1b30df9b0f9627af81845a70b'
    }

    /**
     * Collection owner mints tokens of `collection_id` to `recipients` consisting of an
     * `AccountId` and `MintParams`
     * 
     * If `continue_on_failure` is false, a single mint failure will fail all operations. If
     * it is true, execution will continue when a failure is encountered.
     * 
     * # Errors
     * - `AmountZero` if `amount == 0`.
     * - `NotFound` if `collection` does **not** exist.
     * - `NoPermission` if `caller` is not allowed to mint the `collection`.
     * - `MintForbidden` if the policy disallows the operation
     * - `BalanceOverflow` if `amount + current_total_supply` overflows its type.
     * - `TokenCountOverflow` if the token_count overflows
     * - `TokenMintCapExceeded` if the mint policy TokenCap does not allow minting
     * - `MaxTokenCountExceeded` if the mint policy max_token_count is exceeded
     * - `DepositReserveFailed` if the issuer does not have sufficent balance for token deposit
     */
    get asV3010(): {collectionId: bigint, recipients: v3010.Type_369[], continueOnFailure: boolean} {
        assert(this.isV3010)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensBatchSetAttributeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.batch_set_attribute')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Collection owner sets `attributes` to `collection_id`
     * 
     * If `token_id` is `None`, the attribute is added to the collection. If it is `Some`, the
     * attribute is added to the token.
     * 
     * # Errors
     * - `InvalidAttributeKey` if `key.len() == 0`
     * - `TokenNotFound` if `collection` does not exist.
     * - `NoPermission` if `source` account is not the owner of the collection.
     * - `Overflow` if the Collection's attribute counter overflows, or if the attribute key
     *   and value
     * total bytes exceeds the limit.
     * - `DepositReserveFailed` if unable to reserve the depposit for the attribute storage.
     */
    get isV3010(): boolean {
        return this._chain.getCallHash('MultiTokens.batch_set_attribute') === '2b1cba481617af53f75708c908006d35c0bb8baf11d0881ea46d1368b2fde88f'
    }

    /**
     * Collection owner sets `attributes` to `collection_id`
     * 
     * If `token_id` is `None`, the attribute is added to the collection. If it is `Some`, the
     * attribute is added to the token.
     * 
     * # Errors
     * - `InvalidAttributeKey` if `key.len() == 0`
     * - `TokenNotFound` if `collection` does not exist.
     * - `NoPermission` if `source` account is not the owner of the collection.
     * - `Overflow` if the Collection's attribute counter overflows, or if the attribute key
     *   and value
     * total bytes exceeds the limit.
     * - `DepositReserveFailed` if unable to reserve the depposit for the attribute storage.
     */
    get asV3010(): {collectionId: bigint, tokenId: (bigint | undefined), attributes: v3010.SetAttribute[], continueOnFailure: boolean} {
        assert(this.isV3010)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensBatchTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.batch_transfer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfers the specific amount of tokens of `collection` to `recipients` from `origin` account.
     * 
     * # Errors
     * - `AmountZero` if `amount == 0`.
     * - `InvalidTargetAccount` if `source == target`.
     * - `BalanceLow` if `source` does not own enough amount of `collection`.
     * - `BalanceOverflow` if `target` balance of `collection` overflows.
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('MultiTokens.batch_transfer') === 'b19d3917f5096e2cef3e73752e8a3bd0b5e30cadfc6a4ff16c68ce84082c1ce5'
    }

    /**
     * Transfers the specific amount of tokens of `collection` to `recipients` from `origin` account.
     * 
     * # Errors
     * - `AmountZero` if `amount == 0`.
     * - `InvalidTargetAccount` if `source == target`.
     * - `BalanceLow` if `source` does not own enough amount of `collection`.
     * - `BalanceOverflow` if `target` balance of `collection` overflows.
     */
    get asEfinityV2(): {collectionId: bigint, recipients: efinityV2.Recipient[]} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Transfers the specific amount of tokens of `collection` to `recipients` from `origin`
     * account.
     * 
     * If `continue_on_failure` is false, a single transfer failure will fail all of them. If
     * it is true, execution will continue when a failure is encountered.
     * 
     * # Errors
     * - `AmountZero` if `amount == 0`.
     * - `InvalidTargetAccount` if `source == target`.
     * - `BalanceLow` if `source` does not own enough amount of `collection`.
     * - `BalanceOverflow` if `target` balance of `collection` overflows.
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('MultiTokens.batch_transfer') === 'c718d96eb4cef2f0b265f91410c44209f76ef21e07cdccf590d380b2c173a631'
    }

    /**
     * Transfers the specific amount of tokens of `collection` to `recipients` from `origin`
     * account.
     * 
     * If `continue_on_failure` is false, a single transfer failure will fail all of them. If
     * it is true, execution will continue when a failure is encountered.
     * 
     * # Errors
     * - `AmountZero` if `amount == 0`.
     * - `InvalidTargetAccount` if `source == target`.
     * - `BalanceLow` if `source` does not own enough amount of `collection`.
     * - `BalanceOverflow` if `target` balance of `collection` overflows.
     */
    get asEfinityV3000(): {collectionId: bigint, recipients: efinityV3000.Recipient[], continueOnFailure: boolean} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensBurnCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.burn')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Reduces the balance of `owner` by `amount` of `token_id` from `collection_id`.
     * It also updates the total supply of `collection_id`.
     * 
     * # Errors
     * - `NotFound` if `collection` does not exist.
     * - `BalanceLow` if `owner` account does not has enough amount of any token in `tokens`
     * of `collection`.
     * - `CollectionDoesNotSupportGivenToken` if `tokens` is not empty.
     * - `BalanceLow` if `owner` account does not has enough amount of the `collection`.
     * - `Overflow` if amount - supply overflows type, or if burn causes collection.token_count to
     * overflow.
     * - `DepositUnreserveFailed` if caller does not have enough reserved balance to unreserve
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('MultiTokens.burn') === '5e518fd41f2e62474b4a1bae295d7c2b0bec3f70f20ccbfeb4517ee9e7984bc3'
    }

    /**
     * Reduces the balance of `owner` by `amount` of `token_id` from `collection_id`.
     * It also updates the total supply of `collection_id`.
     * 
     * # Errors
     * - `NotFound` if `collection` does not exist.
     * - `BalanceLow` if `owner` account does not has enough amount of any token in `tokens`
     * of `collection`.
     * - `CollectionDoesNotSupportGivenToken` if `tokens` is not empty.
     * - `BalanceLow` if `owner` account does not has enough amount of the `collection`.
     * - `Overflow` if amount - supply overflows type, or if burn causes collection.token_count to
     * overflow.
     * - `DepositUnreserveFailed` if caller does not have enough reserved balance to unreserve
     */
    get asEfinityV2(): {collectionId: bigint, params: efinityV2.DefaultBurnParams} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensCreateCollectionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.create_collection')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Creates a new collection from `descriptor`
     * 
     * # Errors
     * - `DepositReserveFailed` if the deposit cannot be reserved
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('MultiTokens.create_collection') === '7cf4fe3885361ce6eb79e4db2f2b1f99352c2e5697d2c8b7df956148e7c0f2c6'
    }

    /**
     * Creates a new collection from `descriptor`
     * 
     * # Errors
     * - `DepositReserveFailed` if the deposit cannot be reserved
     */
    get asEfinityV2(): {descriptor: efinityV2.DefaultCollectionDescriptor} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Creates a new collection from `descriptor`
     * 
     * # Errors
     * - `DepositReserveFailed` if the deposit cannot be reserved
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('MultiTokens.create_collection') === 'd8b4db54e7463f7afa50c198a27aab0590c5d192435b02cc04b3bf19d21ae409'
    }

    /**
     * Creates a new collection from `descriptor`
     * 
     * # Errors
     * - `DepositReserveFailed` if the deposit cannot be reserved
     */
    get asEfinityV3000(): {descriptor: efinityV3000.DefaultCollectionDescriptor} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Creates a new collection from `descriptor`
     * 
     * # Errors
     * - `DepositReserveFailed` if the deposit cannot be reserved
     */
    get isV3010(): boolean {
        return this._chain.getCallHash('MultiTokens.create_collection') === '2c5ffb5fc94633dce91583fb29da64fdda08ce309e89734aab20a62a8cbb3250'
    }

    /**
     * Creates a new collection from `descriptor`
     * 
     * # Errors
     * - `DepositReserveFailed` if the deposit cannot be reserved
     */
    get asV3010(): {descriptor: v3010.DefaultCollectionDescriptor} {
        assert(this.isV3010)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensDestroyCollectionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.destroy_collection')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Destroys `Collection` with `id`. `origin` must be the owner of the `Collection`.
     * 
     * The `attribute_count` parameter is used to evaluate the cost of this operation. It
     * must match the value in storage.
     * 
     * # Errors
     * - `NoPermission` if `origin` is not the owner of the collection.
     * - `NotFound` if `Collection` with `id` does not exist.
     * - `DestroyForbiddenByCollectionEvent` if another pallet is blocking the collection's destruction
     * - `DestroyForbiddenByRemainingTokens` if collection still has tokens when destroying
     * - `DestroyForbiddenByAttributeCount` if collection still has attributes when destroying
     * current number of collection attributes.
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('MultiTokens.destroy_collection') === '5213672185bfcdfd14c0e7c97d6a1d1c6244ef0903db4317a9b0bd4a1ab10375'
    }

    /**
     * Destroys `Collection` with `id`. `origin` must be the owner of the `Collection`.
     * 
     * The `attribute_count` parameter is used to evaluate the cost of this operation. It
     * must match the value in storage.
     * 
     * # Errors
     * - `NoPermission` if `origin` is not the owner of the collection.
     * - `NotFound` if `Collection` with `id` does not exist.
     * - `DestroyForbiddenByCollectionEvent` if another pallet is blocking the collection's destruction
     * - `DestroyForbiddenByRemainingTokens` if collection still has tokens when destroying
     * - `DestroyForbiddenByAttributeCount` if collection still has attributes when destroying
     * current number of collection attributes.
     */
    get asEfinityV2(): {collectionId: bigint} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensForceCreateCollectionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.force_create_collection')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Creates a new collection from `descriptor` at `collection_id`, origin must be root
     * 
     * # Errors
     * - `DepositReserveFailed` if the deposit cannot be reserved
     */
    get isV3010(): boolean {
        return this._chain.getCallHash('MultiTokens.force_create_collection') === '64f054ecc6931474221d23bfcfed0b8f345cfbdab3115fd062d513a374ecf698'
    }

    /**
     * Creates a new collection from `descriptor` at `collection_id`, origin must be root
     * 
     * # Errors
     * - `DepositReserveFailed` if the deposit cannot be reserved
     */
    get asV3010(): {owner: Uint8Array, collectionId: bigint, descriptor: v3010.DefaultCollectionDescriptor} {
        assert(this.isV3010)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensForceMutateCollectionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.force_mutate_collection')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Exactly as `mutate_collection`, except the origin must be root and the `caller` account should be
     * specified.
     * 
     * # Errors
     * - `BadOrigin` if origin != root
     * - Same as mutate_collection
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('MultiTokens.force_mutate_collection') === 'b24a11f1bb3034565515518d4293039de8c701ec744f5c5e6b41a17b3c4d2288'
    }

    /**
     * Exactly as `mutate_collection`, except the origin must be root and the `caller` account should be
     * specified.
     * 
     * # Errors
     * - `BadOrigin` if origin != root
     * - Same as mutate_collection
     */
    get asEfinityV2(): {collectionId: bigint, mutation: efinityV2.DefaultCollectionMutation} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Exactly as `mutate_collection`, except the origin must be root and the `caller` account
     * should be specified.
     * 
     * # Errors
     * - `BadOrigin` if origin != root
     * - Same as mutate_collection
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('MultiTokens.force_mutate_collection') === 'a67fd5f8b424d038ef6064af815eccde6a895abf4d6e21a1d1ba0281ae9e8950'
    }

    /**
     * Exactly as `mutate_collection`, except the origin must be root and the `caller` account
     * should be specified.
     * 
     * # Errors
     * - `BadOrigin` if origin != root
     * - Same as mutate_collection
     */
    get asEfinityV3000(): {collectionId: bigint, mutation: efinityV3000.DefaultCollectionMutation} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Exactly as `mutate_collection`, except the origin must be root and the `caller` account
     * should be specified.
     * 
     * # Errors
     * - `BadOrigin` if origin != root
     * - Same as mutate_collection
     */
    get isV3010(): boolean {
        return this._chain.getCallHash('MultiTokens.force_mutate_collection') === '14654b078d9899c1c298781a09e325690f44d4eb607d8c69ff2f94e1c6b31069'
    }

    /**
     * Exactly as `mutate_collection`, except the origin must be root and the `caller` account
     * should be specified.
     * 
     * # Errors
     * - `BadOrigin` if origin != root
     * - Same as mutate_collection
     */
    get asV3010(): {collectionId: bigint, mutation: v3010.DefaultCollectionMutation} {
        assert(this.isV3010)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensForceSetAttributeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.force_set_attribute')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the Tokens storage to the given `value`, origin must be root
     * 
     * # Errors
     * - `BadOrigin` if origin != root
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('MultiTokens.force_set_attribute') === '0c376373bedc267e8526ef4acf5c6c81f9faf25c7d1d5e610d39748132d3507f'
    }

    /**
     * Set the Tokens storage to the given `value`, origin must be root
     * 
     * # Errors
     * - `BadOrigin` if origin != root
     */
    get asEfinityV2(): {collectionId: bigint, tokenId: (bigint | undefined), key: Uint8Array, value: (efinityV2.Attribute | undefined)} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensForceSetCollectionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.force_set_collection')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the Collections storage to the given `value`, origin must be root
     * 
     * # Errors
     * - `BadOrigin` if origin != root
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('MultiTokens.force_set_collection') === '8a2a5df1ba028f33f223ac8859e40a2d653dca55be6db52bec414a455e53cbe0'
    }

    /**
     * Set the Collections storage to the given `value`, origin must be root
     * 
     * # Errors
     * - `BadOrigin` if origin != root
     */
    get asEfinityV2(): {collectionId: bigint, value: (efinityV2.Collection | undefined)} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Set the Collections storage to the given `value`, origin must be root
     * 
     * # Errors
     * - `BadOrigin` if origin != root
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('MultiTokens.force_set_collection') === 'd75af3c3c47bd7f1909045c69b61ffb4bbd68459ef76923bcdbd9203caeb90d5'
    }

    /**
     * Set the Collections storage to the given `value`, origin must be root
     * 
     * # Errors
     * - `BadOrigin` if origin != root
     */
    get asEfinityV3000(): {collectionId: bigint, value: (efinityV3000.Collection | undefined)} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensForceSetCollectionAccountCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.force_set_collection_account')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the CollectionAccounts storage to the given `value`, origin must be root
     * 
     * # Errors
     * - `BadOrigin` if origin != root
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('MultiTokens.force_set_collection_account') === '9d50ec94aed5d50147723e89e22a9b159311680f9492c74e81d60a9d8c141683'
    }

    /**
     * Set the CollectionAccounts storage to the given `value`, origin must be root
     * 
     * # Errors
     * - `BadOrigin` if origin != root
     */
    get asEfinityV2(): {collectionId: bigint, accountId: efinityV2.MultiAddress, value: (efinityV2.CollectionAccount | undefined)} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensForceSetNextCollectionIdCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.force_set_next_collection_id')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the NextCollectionId storage to the given `id`, origin must be root
     * 
     * # Errors
     * - `BadOrigin` if origin != root
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('MultiTokens.force_set_next_collection_id') === '5213672185bfcdfd14c0e7c97d6a1d1c6244ef0903db4317a9b0bd4a1ab10375'
    }

    /**
     * Set the NextCollectionId storage to the given `id`, origin must be root
     * 
     * # Errors
     * - `BadOrigin` if origin != root
     */
    get asEfinityV2(): {collectionId: bigint} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensForceSetTokenCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.force_set_token')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the Tokens storage to the given `value`, origin must be root
     * 
     * # Errors
     * - `BadOrigin` if origin != root
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('MultiTokens.force_set_token') === 'f7628acc76287fdc2bac39c228d23045fc6e92b88bc282b64abd6bf3e2b8a24d'
    }

    /**
     * Set the Tokens storage to the given `value`, origin must be root
     * 
     * # Errors
     * - `BadOrigin` if origin != root
     */
    get asEfinityV2(): {collectionId: bigint, tokenId: bigint, value: (efinityV2.Token | undefined)} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Set the Tokens storage to the given `value`, origin must be root
     * 
     * # Errors
     * - `BadOrigin` if origin != root
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('MultiTokens.force_set_token') === '637f79a55bc3effe99dfe08ab34e60673b06b2c340b0795565720b52b69e2c34'
    }

    /**
     * Set the Tokens storage to the given `value`, origin must be root
     * 
     * # Errors
     * - `BadOrigin` if origin != root
     */
    get asEfinityV3000(): {collectionId: bigint, tokenId: bigint, value: (efinityV3000.Token | undefined)} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Set the Tokens storage to the given `value`, origin must be root
     * 
     * # Errors
     * - `BadOrigin` if origin != root
     */
    get isV3010(): boolean {
        return this._chain.getCallHash('MultiTokens.force_set_token') === '5b7285ab60ef16b1bc066fab5d476a7be9743fed0ce10d505b35529a833b5f6a'
    }

    /**
     * Set the Tokens storage to the given `value`, origin must be root
     * 
     * # Errors
     * - `BadOrigin` if origin != root
     */
    get asV3010(): {collectionId: bigint, tokenId: bigint, value: (v3010.Token | undefined)} {
        assert(this.isV3010)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensForceSetTokenAccountCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.force_set_token_account')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the TokenAccounts storage to the given `value`, origin must be root
     * 
     * # Errors
     * - `BadOrigin` if origin != root
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('MultiTokens.force_set_token_account') === '3956dd5ae16d635be29c566c6993a198d1279172b65acbab6e7805ff05d8f65d'
    }

    /**
     * Set the TokenAccounts storage to the given `value`, origin must be root
     * 
     * # Errors
     * - `BadOrigin` if origin != root
     */
    get asEfinityV2(): {collectionId: bigint, tokenId: bigint, accountId: efinityV2.MultiAddress, value: (efinityV2.TokenAccount | undefined)} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Set the TokenAccounts storage to the given `value`, origin must be root
     * 
     * # Errors
     * - `BadOrigin` if origin != root
     */
    get isEfinityV3(): boolean {
        return this._chain.getCallHash('MultiTokens.force_set_token_account') === 'bf35663d50dd3916b43afdc084f9827ad9764b0cd317f3ca102ce9251a909dad'
    }

    /**
     * Set the TokenAccounts storage to the given `value`, origin must be root
     * 
     * # Errors
     * - `BadOrigin` if origin != root
     */
    get asEfinityV3(): {collectionId: bigint, tokenId: bigint, accountId: efinityV3.MultiAddress, value: (efinityV3.TokenAccount | undefined)} {
        assert(this.isEfinityV3)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensForceTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.force_transfer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Exactly as `transfer`, except the origin must be root and the source account should be
     * specified.
     * 
     * # Errors
     * - `BadOrigin` if origin != root
     * - Same as transfer
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('MultiTokens.force_transfer') === '7eb6f59738c54c66d88f77215603bab748b9d4ed2bc404e7a6627743e91b27f6'
    }

    /**
     * Exactly as `transfer`, except the origin must be root and the source account should be
     * specified.
     * 
     * # Errors
     * - `BadOrigin` if origin != root
     * - Same as transfer
     */
    get asEfinityV2(): {source: efinityV2.MultiAddress, destination: efinityV2.MultiAddress, collectionId: bigint, params: efinityV2.DefaultTransferParams} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensFreezeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.freeze')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Freeze collection, token or account
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('MultiTokens.freeze') === '019c3973873981e43338b40ff63c8765c270b4956d51a9937f393b0e8e31d9a7'
    }

    /**
     * Freeze collection, token or account
     */
    get asEfinityV2(): {info: efinityV2.Freeze} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensMintCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.mint')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * `origin` mints to `recipient` for `collection_id` with `params` using the pallet's `MintPolicy`.
     * 
     * # Errors
     * - `AmountZero` if `amount == 0`.
     * - `CollectionNotFound` if `Collection` does not exist.
     * - `TokenNotFound` if `Token` does not exist.
     * - `TokenAlreadyExists` if attempting to create a token that already exists
     * - `NoPermission` if `caller` is not allowed to mint the `collection`.
     * - `Overflow` if `amount + current_total_supply` overflows its type, or if the token_count
     * overflows.
     * - `TokenMintCapExceeded` if the mint policy TokenCap does not allow minting
     * - `MaxTokenCountExceeded` if the mint policy max_token_count is exceeded
     * - `DepositReserveFailed` if the issuer does not have sufficent balance for token deposit
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('MultiTokens.mint') === 'eaebb17dc952303dfd16624a15d2cde22e3b66a7f91ca95f2f92cd3104cb2499'
    }

    /**
     * `origin` mints to `recipient` for `collection_id` with `params` using the pallet's `MintPolicy`.
     * 
     * # Errors
     * - `AmountZero` if `amount == 0`.
     * - `CollectionNotFound` if `Collection` does not exist.
     * - `TokenNotFound` if `Token` does not exist.
     * - `TokenAlreadyExists` if attempting to create a token that already exists
     * - `NoPermission` if `caller` is not allowed to mint the `collection`.
     * - `Overflow` if `amount + current_total_supply` overflows its type, or if the token_count
     * overflows.
     * - `TokenMintCapExceeded` if the mint policy TokenCap does not allow minting
     * - `MaxTokenCountExceeded` if the mint policy max_token_count is exceeded
     * - `DepositReserveFailed` if the issuer does not have sufficent balance for token deposit
     */
    get asEfinityV2(): {recipient: efinityV2.MultiAddress, collectionId: bigint, params: efinityV2.DefaultMintParams} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }

    /**
     * `origin` mints to `recipient` for `collection_id` with `params` using the pallet's
     * `MintPolicy`.
     * 
     * # Errors
     * - `AmountZero` if `amount == 0`.
     * - `CollectionNotFound` if `Collection` does not exist.
     * - `TokenNotFound` if `Token` does not exist.
     * - `TokenAlreadyExists` if attempting to create a token that already exists
     * - `NoPermission` if `caller` is not allowed to mint the `collection`.
     * - `Overflow` if `amount + current_total_supply` overflows its type, or if the
     *   token_count
     * overflows.
     * - `TokenMintCapExceeded` if the mint policy TokenCap does not allow minting
     * - `MaxTokenCountExceeded` if the mint policy max_token_count is exceeded
     * - `DepositReserveFailed` if the issuer does not have sufficent balance for token deposit
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('MultiTokens.mint') === '21cd203787dc1fda2b2f186b4eb0d9ed01f0cc56f492d023e49ec2d05ff5d8b2'
    }

    /**
     * `origin` mints to `recipient` for `collection_id` with `params` using the pallet's
     * `MintPolicy`.
     * 
     * # Errors
     * - `AmountZero` if `amount == 0`.
     * - `CollectionNotFound` if `Collection` does not exist.
     * - `TokenNotFound` if `Token` does not exist.
     * - `TokenAlreadyExists` if attempting to create a token that already exists
     * - `NoPermission` if `caller` is not allowed to mint the `collection`.
     * - `Overflow` if `amount + current_total_supply` overflows its type, or if the
     *   token_count
     * overflows.
     * - `TokenMintCapExceeded` if the mint policy TokenCap does not allow minting
     * - `MaxTokenCountExceeded` if the mint policy max_token_count is exceeded
     * - `DepositReserveFailed` if the issuer does not have sufficent balance for token deposit
     */
    get asEfinityV3000(): {recipient: efinityV3000.MultiAddress, collectionId: bigint, params: efinityV3000.DefaultMintParams} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * `origin` mints to `recipient` for `collection_id` with `params` using the pallet's
     * `MintPolicy`.
     * 
     * # Errors
     * - `AmountZero` if `amount == 0`.
     * - `CollectionNotFound` if `Collection` does not exist.
     * - `TokenNotFound` if `Token` does not exist.
     * - `TokenAlreadyExists` if attempting to create a token that already exists
     * - `NoPermission` if `caller` is not allowed to mint the `collection`.
     * - `Overflow` if `amount + current_total_supply` overflows its type, or if the
     *   token_count
     * overflows.
     * - `TokenMintCapExceeded` if the mint policy TokenCap does not allow minting
     * - `MaxTokenCountExceeded` if the mint policy max_token_count is exceeded
     * - `DepositReserveFailed` if the issuer does not have sufficent balance for token deposit
     */
    get isV3010(): boolean {
        return this._chain.getCallHash('MultiTokens.mint') === 'b8c5d0f0a30d7eb9c6d0febdb179f93b218ec734c3c971f511ce86363096d45e'
    }

    /**
     * `origin` mints to `recipient` for `collection_id` with `params` using the pallet's
     * `MintPolicy`.
     * 
     * # Errors
     * - `AmountZero` if `amount == 0`.
     * - `CollectionNotFound` if `Collection` does not exist.
     * - `TokenNotFound` if `Token` does not exist.
     * - `TokenAlreadyExists` if attempting to create a token that already exists
     * - `NoPermission` if `caller` is not allowed to mint the `collection`.
     * - `Overflow` if `amount + current_total_supply` overflows its type, or if the
     *   token_count
     * overflows.
     * - `TokenMintCapExceeded` if the mint policy TokenCap does not allow minting
     * - `MaxTokenCountExceeded` if the mint policy max_token_count is exceeded
     * - `DepositReserveFailed` if the issuer does not have sufficent balance for token deposit
     */
    get asV3010(): {recipient: v3010.MultiAddress, collectionId: bigint, params: v3010.DefaultMintParams} {
        assert(this.isV3010)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensMutateCollectionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.mutate_collection')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Modify `Collection` with `id` by applying `mutation`
     * 
     * # Errors
     * - `NotFound`, if `collection_id` does not exist.
     * - `NoPermission`, if `origin` is not the owner of `collection`.
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('MultiTokens.mutate_collection') === 'b24a11f1bb3034565515518d4293039de8c701ec744f5c5e6b41a17b3c4d2288'
    }

    /**
     * Modify `Collection` with `id` by applying `mutation`
     * 
     * # Errors
     * - `NotFound`, if `collection_id` does not exist.
     * - `NoPermission`, if `origin` is not the owner of `collection`.
     */
    get asEfinityV2(): {collectionId: bigint, mutation: efinityV2.DefaultCollectionMutation} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Modify `Collection` with `id` by applying `mutation`
     * 
     * # Errors
     * - `NotFound`, if `collection_id` does not exist.
     * - `NoPermission`, if `origin` is not the owner of `collection`.
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('MultiTokens.mutate_collection') === 'a67fd5f8b424d038ef6064af815eccde6a895abf4d6e21a1d1ba0281ae9e8950'
    }

    /**
     * Modify `Collection` with `id` by applying `mutation`
     * 
     * # Errors
     * - `NotFound`, if `collection_id` does not exist.
     * - `NoPermission`, if `origin` is not the owner of `collection`.
     */
    get asEfinityV3000(): {collectionId: bigint, mutation: efinityV3000.DefaultCollectionMutation} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Modify `Collection` with `id` by applying `mutation`
     * 
     * # Errors
     * - `NotFound`, if `collection_id` does not exist.
     * - `NoPermission`, if `origin` is not the owner of `collection`.
     */
    get isV3010(): boolean {
        return this._chain.getCallHash('MultiTokens.mutate_collection') === '14654b078d9899c1c298781a09e325690f44d4eb607d8c69ff2f94e1c6b31069'
    }

    /**
     * Modify `Collection` with `id` by applying `mutation`
     * 
     * # Errors
     * - `NotFound`, if `collection_id` does not exist.
     * - `NoPermission`, if `origin` is not the owner of `collection`.
     */
    get asV3010(): {collectionId: bigint, mutation: v3010.DefaultCollectionMutation} {
        assert(this.isV3010)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensMutateTokenCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.mutate_token')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Modify `Token` with `token_id`  from `Collection` with `collection_id` by applying
     * `mutation`
     * 
     * # Errors
     * - `CurrencyIncompatibleWithCollectionRoyalty` if token has already been assigned a
     *   royalty
     * - `NoPermission` if not the collection owner
     * - `TokenNotFound` if Token does not exist
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('MultiTokens.mutate_token') === 'd1877cb057dad8cf2563d9f74bb893c3d5f2b9b25773258fbd9b60a73ea77d59'
    }

    /**
     * Modify `Token` with `token_id`  from `Collection` with `collection_id` by applying
     * `mutation`
     * 
     * # Errors
     * - `CurrencyIncompatibleWithCollectionRoyalty` if token has already been assigned a
     *   royalty
     * - `NoPermission` if not the collection owner
     * - `TokenNotFound` if Token does not exist
     */
    get asEfinityV3000(): {collectionId: bigint, tokenId: bigint, mutation: efinityV3000.DefaultTokenMutation} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Modify `Token` with `token_id`  from `Collection` with `collection_id` by applying
     * `mutation`
     * 
     * # Errors
     * - `CurrencyIncompatibleWithCollectionRoyalty` if token has already been assigned a
     *   royalty
     * - `NoPermission` if not the collection owner
     * - `TokenNotFound` if Token does not exist
     */
    get isV3010(): boolean {
        return this._chain.getCallHash('MultiTokens.mutate_token') === '451b80e30fe2441705bb5c55d5b92bf8b3b754c2cc73953264480c3a3981ff45'
    }

    /**
     * Modify `Token` with `token_id`  from `Collection` with `collection_id` by applying
     * `mutation`
     * 
     * # Errors
     * - `CurrencyIncompatibleWithCollectionRoyalty` if token has already been assigned a
     *   royalty
     * - `NoPermission` if not the collection owner
     * - `TokenNotFound` if Token does not exist
     */
    get asV3010(): {collectionId: bigint, tokenId: bigint, mutation: v3010.DefaultTokenMutation} {
        assert(this.isV3010)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensRemoveAllAttributesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.remove_all_attributes')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Removes all attributes from the given `collection_id` or `token_id`.
     * 
     * # Errors
     * - `InvalidAttributeCount` if `attribute_count` doesn't match the number of attributes
     * - `CollectionNotFound` if Collection with `collection_id` does not exist.
     * - `TokenNotFound` if Token with `token_id` does not exist.
     * - `NoPermission` if `origin` account is not the owner of the Collection or Token
     * - other errors from `remove_attribute`
     */
    get isV3010(): boolean {
        return this._chain.getCallHash('MultiTokens.remove_all_attributes') === '721a13a18dab7748d2990b3b2edd4c1c6fbca833c064e8ae31bb2cec0c3aed84'
    }

    /**
     * Removes all attributes from the given `collection_id` or `token_id`.
     * 
     * # Errors
     * - `InvalidAttributeCount` if `attribute_count` doesn't match the number of attributes
     * - `CollectionNotFound` if Collection with `collection_id` does not exist.
     * - `TokenNotFound` if Token with `token_id` does not exist.
     * - `NoPermission` if `origin` account is not the owner of the Collection or Token
     * - other errors from `remove_attribute`
     */
    get asV3010(): {collectionId: bigint, tokenId: (bigint | undefined), attributeCount: number} {
        assert(this.isV3010)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensRemoveAttributeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.remove_attribute')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Removes the `key` attribute from the given `collection_id` or `token_id`.
     * 
     * # Errors
     * - `BadAttributeKey` if `key.len() == 0`
     * - `TokenNotFound` if `collection` does not exist.
     * - `NoPermission` if `source` account is not the owner of the collection.
     * - `AttributeCounterOverflow` if the Collection's attribute counter overflows.
     * - `AttributeStorageOverflow` if the attribute key and value total bytes exceeds the limit.
     * - `DepositReserveFailed` if unable to reserve the depposit for the attribute storage.
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('MultiTokens.remove_attribute') === '5e8dda41d19b04f7e051283b9b20aed0a83222ef4bc596239942a512d10e143c'
    }

    /**
     * Removes the `key` attribute from the given `collection_id` or `token_id`.
     * 
     * # Errors
     * - `BadAttributeKey` if `key.len() == 0`
     * - `TokenNotFound` if `collection` does not exist.
     * - `NoPermission` if `source` account is not the owner of the collection.
     * - `AttributeCounterOverflow` if the Collection's attribute counter overflows.
     * - `AttributeStorageOverflow` if the attribute key and value total bytes exceeds the limit.
     * - `DepositReserveFailed` if unable to reserve the depposit for the attribute storage.
     */
    get asEfinityV2(): {collectionId: bigint, tokenId: (bigint | undefined), key: Uint8Array} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensSetAttributeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.set_attribute')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Sets the attribute `key` to `value` for `collection_id`.
     * If `token_id` is `None`, the attribute is added to the collection. If it is `Some`, the attribute
     * is added to the token.
     * 
     * # Errors
     * - `InvalidAttributeKey` if `key.len() == 0`
     * - `TokenNotFound` if `collection` does not exist.
     * - `NoPermission` if `source` account is not the owner of the collection.
     * - `Overflow` if the Collection's attribute counter overflows, or if the attribute key and value
     * total bytes exceeds the limit.
     * - `DepositReserveFailed` if unable to reserve the depposit for the attribute storage.
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('MultiTokens.set_attribute') === '1442e960b51ef446ff50fc6d27284693378495f9905ed8fbc35811b81dcf7c7b'
    }

    /**
     * Sets the attribute `key` to `value` for `collection_id`.
     * If `token_id` is `None`, the attribute is added to the collection. If it is `Some`, the attribute
     * is added to the token.
     * 
     * # Errors
     * - `InvalidAttributeKey` if `key.len() == 0`
     * - `TokenNotFound` if `collection` does not exist.
     * - `NoPermission` if `source` account is not the owner of the collection.
     * - `Overflow` if the Collection's attribute counter overflows, or if the attribute key and value
     * total bytes exceeds the limit.
     * - `DepositReserveFailed` if unable to reserve the depposit for the attribute storage.
     */
    get asEfinityV2(): {collectionId: bigint, tokenId: (bigint | undefined), key: Uint8Array, value: Uint8Array} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensThawCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.thaw')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Thaw collection, token or account
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('MultiTokens.thaw') === '019c3973873981e43338b40ff63c8765c270b4956d51a9937f393b0e8e31d9a7'
    }

    /**
     * Thaw collection, token or account
     */
    get asEfinityV2(): {info: efinityV2.Freeze} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.transfer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * `operator` transfers to `recipient` for `collection_id` with `params`
     * 
     * # Errors
     * - `AmountZero` if `amount == 0`.
     * - `InvalidTargetAccount` if `source == target`.
     * - `BalanceLow` if `source` does not own enough amount of `collection`.
     * - `Overflow` if `target` balance of `collection` overflows.
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('MultiTokens.transfer') === '3a904597294b52262716ac476178f413a640c58c5df5fdee9d6a42b369dab12a'
    }

    /**
     * `operator` transfers to `recipient` for `collection_id` with `params`
     * 
     * # Errors
     * - `AmountZero` if `amount == 0`.
     * - `InvalidTargetAccount` if `source == target`.
     * - `BalanceLow` if `source` does not own enough amount of `collection`.
     * - `Overflow` if `target` balance of `collection` overflows.
     */
    get asEfinityV2(): {recipient: efinityV2.MultiAddress, collectionId: bigint, params: efinityV2.DefaultTransferParams} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensUnapproveCollectionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.unapprove_collection')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Unapprove the `operator` to manage all of `origin`'s tokens belonging to `collection`
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('MultiTokens.unapprove_collection') === 'e5170bfdb3c4351aa216ff597896abe5ecc75ec89c47b522a97790870cc3b5ef'
    }

    /**
     * Unapprove the `operator` to manage all of `origin`'s tokens belonging to `collection`
     */
    get asEfinityV2(): {collectionId: bigint, operator: Uint8Array} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensUnapproveTokenCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.unapprove_token')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Unapprove `operator` to transfer `origin`'s `token`s
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('MultiTokens.unapprove_token') === 'bf808826dcdafcc9b31e08b287969eda26c2a350dbd9b501129943a436ab8854'
    }

    /**
     * Unapprove `operator` to transfer `origin`'s `token`s
     */
    get asEfinityV2(): {collectionId: bigint, tokenId: bigint, operator: Uint8Array} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class MultisigApproveAsMultiCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Multisig.approve_as_multi')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call_hash`: The hash of the call to be executed.
     * 
     * NOTE: If this is the final approval, you will want to use `as_multi` instead.
     * 
     * # <weight>
     * - `O(S)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     * ----------------------------------
     * - DB Weight:
     *     - Read: Multisig Storage, [Caller Account]
     *     - Write: Multisig Storage, [Caller Account]
     * # </weight>
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Multisig.approve_as_multi') === '615a5baaaa889f9e30839c70485b8c752e5eb050a85a23102b2f9f4c301be63a'
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call_hash`: The hash of the call to be executed.
     * 
     * NOTE: If this is the final approval, you will want to use `as_multi` instead.
     * 
     * # <weight>
     * - `O(S)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     * ----------------------------------
     * - DB Weight:
     *     - Read: Multisig Storage, [Caller Account]
     *     - Write: Multisig Storage, [Caller Account]
     * # </weight>
     */
    get asEfinityV2(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (efinityV2.Timepoint | undefined), callHash: Uint8Array, maxWeight: bigint} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call_hash`: The hash of the call to be executed.
     * 
     * NOTE: If this is the final approval, you will want to use `as_multi` instead.
     * 
     * # <weight>
     * - `O(S)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     * ----------------------------------
     * - DB Weight:
     *     - Read: Multisig Storage, [Caller Account]
     *     - Write: Multisig Storage, [Caller Account]
     * # </weight>
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('Multisig.approve_as_multi') === 'af4617697c04ce56b4748943a851b51ff5b80d64991c7ecf495a4651ff57debb'
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call_hash`: The hash of the call to be executed.
     * 
     * NOTE: If this is the final approval, you will want to use `as_multi` instead.
     * 
     * # <weight>
     * - `O(S)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     * ----------------------------------
     * - DB Weight:
     *     - Read: Multisig Storage, [Caller Account]
     *     - Write: Multisig Storage, [Caller Account]
     * # </weight>
     */
    get asEfinityV3000(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (efinityV3000.Timepoint | undefined), callHash: Uint8Array, maxWeight: efinityV3000.Weight} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }
}

export class MultisigAsMultiCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Multisig.as_multi')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * If there are enough, then dispatch the call.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     * 
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     * 
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     * 
     * # <weight>
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     * -------------------------------
     * - DB Weight:
     *     - Reads: Multisig Storage, [Caller Account], Calls (if `store_call`)
     *     - Writes: Multisig Storage, [Caller Account], Calls (if `store_call`)
     * - Plus Call Weight
     * # </weight>
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Multisig.as_multi') === '548dea53ff79fe99438cf591950a533c93f9772d03a3995ec72a80376fcae222'
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * If there are enough, then dispatch the call.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     * 
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     * 
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     * 
     * # <weight>
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     * -------------------------------
     * - DB Weight:
     *     - Reads: Multisig Storage, [Caller Account], Calls (if `store_call`)
     *     - Writes: Multisig Storage, [Caller Account], Calls (if `store_call`)
     * - Plus Call Weight
     * # </weight>
     */
    get asEfinityV2(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (efinityV2.Timepoint | undefined), call: Uint8Array, storeCall: boolean, maxWeight: bigint} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * If there are enough, then dispatch the call.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     * 
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     * 
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     * 
     * # <weight>
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     * -------------------------------
     * - DB Weight:
     *     - Reads: Multisig Storage, [Caller Account], Calls (if `store_call`)
     *     - Writes: Multisig Storage, [Caller Account], Calls (if `store_call`)
     * - Plus Call Weight
     * # </weight>
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('Multisig.as_multi') === 'f62d383b8db5d9025f2e3e98181c8439346292d755afd9729e7168a703e7be01'
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * If there are enough, then dispatch the call.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     * 
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     * 
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     * 
     * # <weight>
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     * -------------------------------
     * - DB Weight:
     *     - Reads: Multisig Storage, [Caller Account], Calls (if `store_call`)
     *     - Writes: Multisig Storage, [Caller Account], Calls (if `store_call`)
     * - Plus Call Weight
     * # </weight>
     */
    get asEfinityV3000(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (efinityV3000.Timepoint | undefined), call: Uint8Array, storeCall: boolean, maxWeight: efinityV3000.Weight} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }
}

export class MultisigAsMultiThreshold1Call {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Multisig.as_multi_threshold_1')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === '4c3b8ac4e9c1b0330f472a0df753a7bf3a6126f1a021498f1573bcc3829e75a5'
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    get asEfinityV2(): {otherSignatories: Uint8Array[], call: efinityV2.Call} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    get isEfinityV3(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === 'ab9c08020581417787114df994f378c8f60be5e3ab555d074b02c41a339cd10a'
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    get asEfinityV3(): {otherSignatories: Uint8Array[], call: efinityV3.Call} {
        assert(this.isEfinityV3)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === 'fa47daf1f743c2e9c76fcaab66af9b5b11e6fccaf235d25327ee4c420258e443'
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    get asEfinityV3000(): {otherSignatories: Uint8Array[], call: efinityV3000.Call} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    get isV3000(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === 'b887f261633c65e8f9eb3d28911002235b5d5d550234300a8e70223ec42ae226'
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    get asV3000(): {otherSignatories: Uint8Array[], call: v3000.Call} {
        assert(this.isV3000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    get isV3010(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === '00120e0266bf53b60c8d1f7b2312f92b478ae6a1d4097da95537334753247141'
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    get asV3010(): {otherSignatories: Uint8Array[], call: v3010.Call} {
        assert(this.isV3010)
        return this._chain.decodeCall(this.call)
    }
}

export class MultisigCancelAsMultiCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Multisig.cancel_as_multi')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
     * for this operation will be unreserved on success.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `timepoint`: The timepoint (block number and transaction index) of the first approval
     * transaction for this dispatch.
     * - `call_hash`: The hash of the call to be executed.
     * 
     * # <weight>
     * - `O(S)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One encode & hash, both of complexity `O(S)`.
     * - One event.
     * - I/O: 1 read `O(S)`, one remove.
     * - Storage: removes one item.
     * ----------------------------------
     * - DB Weight:
     *     - Read: Multisig Storage, [Caller Account], Refund Account, Calls
     *     - Write: Multisig Storage, [Caller Account], Refund Account, Calls
     * # </weight>
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Multisig.cancel_as_multi') === '4ccc75a4f739c659f177e3df98fba2ea59ddade74c4ebccd51b2fc4c52e923af'
    }

    /**
     * Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
     * for this operation will be unreserved on success.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `timepoint`: The timepoint (block number and transaction index) of the first approval
     * transaction for this dispatch.
     * - `call_hash`: The hash of the call to be executed.
     * 
     * # <weight>
     * - `O(S)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One encode & hash, both of complexity `O(S)`.
     * - One event.
     * - I/O: 1 read `O(S)`, one remove.
     * - Storage: removes one item.
     * ----------------------------------
     * - DB Weight:
     *     - Read: Multisig Storage, [Caller Account], Refund Account, Calls
     *     - Write: Multisig Storage, [Caller Account], Refund Account, Calls
     * # </weight>
     */
    get asEfinityV2(): {threshold: number, otherSignatories: Uint8Array[], timepoint: efinityV2.Timepoint, callHash: Uint8Array} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class OrmlXcmSendAsSovereignCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'OrmlXcm.send_as_sovereign')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Send an XCM message as parachain sovereign.
     */
    get isEfinityV3(): boolean {
        return this._chain.getCallHash('OrmlXcm.send_as_sovereign') === '3ca4beb317aeed3e0a00ae870ffd3bef841bb6f4e766db0b286c7fc5d8eef886'
    }

    /**
     * Send an XCM message as parachain sovereign.
     */
    get asEfinityV3(): {dest: efinityV3.VersionedMultiLocation, message: efinityV3.VersionedXcm} {
        assert(this.isEfinityV3)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainSystemAuthorizeUpgradeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainSystem.authorize_upgrade')
        this._chain = ctx._chain
        this.call = call
    }

    get isEfinityV1(): boolean {
        return this._chain.getCallHash('ParachainSystem.authorize_upgrade') === '9e5c86c297bd88fae31bc40119e44695818ddc3ab8842b90daeb12771005c70d'
    }

    get asEfinityV1(): {codeHash: Uint8Array} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainSystemEnactAuthorizedUpgradeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainSystem.enact_authorized_upgrade')
        this._chain = ctx._chain
        this.call = call
    }

    get isEfinityV1(): boolean {
        return this._chain.getCallHash('ParachainSystem.enact_authorized_upgrade') === '7bf3d4785d9be7a4872f39cbd3702a66e16f7ee01e4446fb4a05624dc0ec4c93'
    }

    get asEfinityV1(): {code: Uint8Array} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainSystemSetUpgradeBlockCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainSystem.set_upgrade_block')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Force an already scheduled validation function upgrade to happen on a particular block.
     * 
     * Note that coordinating this block for the upgrade has to happen independently on the
     * relay chain and this parachain. Synchronizing the block for the upgrade is sensitive,
     * and this bypasses all checks and and normal protocols. Very easy to brick your chain
     * if done wrong.
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('ParachainSystem.set_upgrade_block') === '4552b4c9a331e27653dd826226a620c7ef63c4af553ba86f11cdfd63fb1b1028'
    }

    /**
     * Force an already scheduled validation function upgrade to happen on a particular block.
     * 
     * Note that coordinating this block for the upgrade has to happen independently on the
     * relay chain and this parachain. Synchronizing the block for the upgrade is sensitive,
     * and this bypasses all checks and and normal protocols. Very easy to brick your chain
     * if done wrong.
     */
    get asEfinityV1(): {relayChainBlock: number} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainSystemSetValidationDataCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainSystem.set_validation_data')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the current validation data.
     * 
     * This should be invoked exactly once per block. It will panic at the finalization
     * phase if the call was not invoked.
     * 
     * The dispatch origin for this call must be `Inherent`
     * 
     * As a side effect, this function upgrades the current validation function
     * if the appropriate time has come.
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('ParachainSystem.set_validation_data') === 'df843f97e4c625e033541d5f205c5889f3131bdb4549570310e924d96769c1cd'
    }

    /**
     * Set the current validation data.
     * 
     * This should be invoked exactly once per block. It will panic at the finalization
     * phase if the call was not invoked.
     * 
     * The dispatch origin for this call must be `Inherent`
     * 
     * As a side effect, this function upgrades the current validation function
     * if the appropriate time has come.
     */
    get asEfinityV1(): {data: efinityV1.ParachainInherentData} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainSystemSudoSendUpwardMessageCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainSystem.sudo_send_upward_message')
        this._chain = ctx._chain
        this.call = call
    }

    get isEfinityV1(): boolean {
        return this._chain.getCallHash('ParachainSystem.sudo_send_upward_message') === '34457b6daded32ddc4ec3a5a21e34b9af8dcd7d190a5a7833fa8a7ed53b31206'
    }

    get asEfinityV1(): {message: Uint8Array} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class PolkadotXcmExecuteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PolkadotXcm.execute')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Execute an XCM message from a local, signed, origin.
     * 
     * An event is deposited indicating whether `msg` could be executed completely or only
     * partially.
     * 
     * No more than `max_weight` will be used in its attempted execution. If this is less than the
     * maximum amount of weight that the message could take to be executed, then no execution
     * attempt will be made.
     * 
     * NOTE: A successful return to this does *not* imply that the `msg` was executed successfully
     * to completion; only that *some* of it was executed.
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('PolkadotXcm.execute') === '41f7d0295efed5db73229cbd1e9f1fdc0e7f9e159af3b17a10880e74bcdb3ad4'
    }

    /**
     * Execute an XCM message from a local, signed, origin.
     * 
     * An event is deposited indicating whether `msg` could be executed completely or only
     * partially.
     * 
     * No more than `max_weight` will be used in its attempted execution. If this is less than the
     * maximum amount of weight that the message could take to be executed, then no execution
     * attempt will be made.
     * 
     * NOTE: A successful return to this does *not* imply that the `msg` was executed successfully
     * to completion; only that *some* of it was executed.
     */
    get asEfinityV1(): {message: efinityV1.Type_178, maxWeight: bigint} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Execute an XCM message from a local, signed, origin.
     * 
     * An event is deposited indicating whether `msg` could be executed completely or only
     * partially.
     * 
     * No more than `max_weight` will be used in its attempted execution. If this is less than the
     * maximum amount of weight that the message could take to be executed, then no execution
     * attempt will be made.
     * 
     * NOTE: A successful return to this does *not* imply that the `msg` was executed successfully
     * to completion; only that *some* of it was executed.
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('PolkadotXcm.execute') === 'c6251691ab3319ecee95442d381c308f9ada155e423798c908cbd6b063aa26b4'
    }

    /**
     * Execute an XCM message from a local, signed, origin.
     * 
     * An event is deposited indicating whether `msg` could be executed completely or only
     * partially.
     * 
     * No more than `max_weight` will be used in its attempted execution. If this is less than the
     * maximum amount of weight that the message could take to be executed, then no execution
     * attempt will be made.
     * 
     * NOTE: A successful return to this does *not* imply that the `msg` was executed successfully
     * to completion; only that *some* of it was executed.
     */
    get asEfinityV2(): {message: efinityV2.Type_244, maxWeight: bigint} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Execute an XCM message from a local, signed, origin.
     * 
     * An event is deposited indicating whether `msg` could be executed completely or only
     * partially.
     * 
     * No more than `max_weight` will be used in its attempted execution. If this is less than the
     * maximum amount of weight that the message could take to be executed, then no execution
     * attempt will be made.
     * 
     * NOTE: A successful return to this does *not* imply that the `msg` was executed successfully
     * to completion; only that *some* of it was executed.
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('PolkadotXcm.execute') === '76149fbd7c3d18753d366687484d7bf651dd9b444cec7c11b944262b7ee4dcf5'
    }

    /**
     * Execute an XCM message from a local, signed, origin.
     * 
     * An event is deposited indicating whether `msg` could be executed completely or only
     * partially.
     * 
     * No more than `max_weight` will be used in its attempted execution. If this is less than the
     * maximum amount of weight that the message could take to be executed, then no execution
     * attempt will be made.
     * 
     * NOTE: A successful return to this does *not* imply that the `msg` was executed successfully
     * to completion; only that *some* of it was executed.
     */
    get asEfinityV3000(): {message: efinityV3000.Type_315, maxWeight: efinityV3000.Weight} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }
}

export class PolkadotXcmForceDefaultXcmVersionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PolkadotXcm.force_default_xcm_version')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set a safe XCM version (the version that XCM should be encoded with if the most recent
     * version a destination can accept is unknown).
     * 
     * - `origin`: Must be Root.
     * - `maybe_xcm_version`: The default XCM encoding version, or `None` to disable.
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('PolkadotXcm.force_default_xcm_version') === 'd4bcd64cc4c940eafd14296ec6cbfb7d27e4ca42a4c7dab4c0b89f6c8102257e'
    }

    /**
     * Set a safe XCM version (the version that XCM should be encoded with if the most recent
     * version a destination can accept is unknown).
     * 
     * - `origin`: Must be Root.
     * - `maybe_xcm_version`: The default XCM encoding version, or `None` to disable.
     */
    get asEfinityV1(): {maybeXcmVersion: (number | undefined)} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class PolkadotXcmForceSubscribeVersionNotifyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PolkadotXcm.force_subscribe_version_notify')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Ask a location to notify us regarding their XCM version and any changes to it.
     * 
     * - `origin`: Must be Root.
     * - `location`: The location to which we should subscribe for XCM version notifications.
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('PolkadotXcm.force_subscribe_version_notify') === 'f3f38b2278743e50bfd76c0f778560fb38a60c931275e9df42f2b9ce08c1d6fc'
    }

    /**
     * Ask a location to notify us regarding their XCM version and any changes to it.
     * 
     * - `origin`: Must be Root.
     * - `location`: The location to which we should subscribe for XCM version notifications.
     */
    get asEfinityV1(): {location: efinityV1.VersionedMultiLocation} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class PolkadotXcmForceUnsubscribeVersionNotifyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PolkadotXcm.force_unsubscribe_version_notify')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Require that a particular destination should no longer notify us regarding any XCM
     * version changes.
     * 
     * - `origin`: Must be Root.
     * - `location`: The location to which we are currently subscribed for XCM version
     *   notifications which we no longer desire.
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('PolkadotXcm.force_unsubscribe_version_notify') === 'f3f38b2278743e50bfd76c0f778560fb38a60c931275e9df42f2b9ce08c1d6fc'
    }

    /**
     * Require that a particular destination should no longer notify us regarding any XCM
     * version changes.
     * 
     * - `origin`: Must be Root.
     * - `location`: The location to which we are currently subscribed for XCM version
     *   notifications which we no longer desire.
     */
    get asEfinityV1(): {location: efinityV1.VersionedMultiLocation} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class PolkadotXcmForceXcmVersionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PolkadotXcm.force_xcm_version')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Extoll that a particular destination can be communicated with through a particular
     * version of XCM.
     * 
     * - `origin`: Must be Root.
     * - `location`: The destination that is being described.
     * - `xcm_version`: The latest version of XCM that `location` supports.
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('PolkadotXcm.force_xcm_version') === '3bdd3ba3db54facd962462ff1c2c0ede1b428cf9119b36a4e96fa86916145f75'
    }

    /**
     * Extoll that a particular destination can be communicated with through a particular
     * version of XCM.
     * 
     * - `origin`: Must be Root.
     * - `location`: The destination that is being described.
     * - `xcm_version`: The latest version of XCM that `location` supports.
     */
    get asEfinityV1(): {location: efinityV1.V1MultiLocation, xcmVersion: number} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class PolkadotXcmLimitedReserveTransferAssetsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PolkadotXcm.limited_reserve_transfer_assets')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfer some assets from the local chain to the sovereign account of a destination chain and forward
     * a notification XCM.
     * 
     * Fee payment on the destination side is made from the first asset listed in the `assets` vector.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
     *   `dest` side.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('PolkadotXcm.limited_reserve_transfer_assets') === '3c203a3f95b9fe53b8c376802c4fe60fa6077815af7432dcd2a3e458169a5d2a'
    }

    /**
     * Transfer some assets from the local chain to the sovereign account of a destination chain and forward
     * a notification XCM.
     * 
     * Fee payment on the destination side is made from the first asset listed in the `assets` vector.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
     *   `dest` side.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
     */
    get asEfinityV1(): {dest: efinityV1.VersionedMultiLocation, beneficiary: efinityV1.VersionedMultiLocation, assets: efinityV1.VersionedMultiAssets, feeAssetItem: number, weightLimit: efinityV1.V2WeightLimit} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class PolkadotXcmLimitedTeleportAssetsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PolkadotXcm.limited_teleport_assets')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Teleport some assets from the local chain to some destination chain.
     * 
     * Fee payment on the destination side is made from the first asset listed in the `assets` vector.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
     *   `dest` side. May not be empty.
     * - `dest_weight`: Equal to the total weight on `dest` of the XCM message
     *   `Teleport { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
     * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('PolkadotXcm.limited_teleport_assets') === '3c203a3f95b9fe53b8c376802c4fe60fa6077815af7432dcd2a3e458169a5d2a'
    }

    /**
     * Teleport some assets from the local chain to some destination chain.
     * 
     * Fee payment on the destination side is made from the first asset listed in the `assets` vector.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
     *   `dest` side. May not be empty.
     * - `dest_weight`: Equal to the total weight on `dest` of the XCM message
     *   `Teleport { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
     * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
     */
    get asEfinityV1(): {dest: efinityV1.VersionedMultiLocation, beneficiary: efinityV1.VersionedMultiLocation, assets: efinityV1.VersionedMultiAssets, feeAssetItem: number, weightLimit: efinityV1.V2WeightLimit} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class PolkadotXcmReserveTransferAssetsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PolkadotXcm.reserve_transfer_assets')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfer some assets from the local chain to the sovereign account of a destination chain and forward
     * a notification XCM.
     * 
     * Fee payment on the destination side is made from the first asset listed in the `assets` vector and
     * fee-weight is calculated locally and thus remote weights are assumed to be equal to
     * local weights.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
     *   `dest` side.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('PolkadotXcm.reserve_transfer_assets') === '123b8170fa49ede01f38623e457f4e4d417c90cff5b93ced45a9eb8fe8e6ca2e'
    }

    /**
     * Transfer some assets from the local chain to the sovereign account of a destination chain and forward
     * a notification XCM.
     * 
     * Fee payment on the destination side is made from the first asset listed in the `assets` vector and
     * fee-weight is calculated locally and thus remote weights are assumed to be equal to
     * local weights.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
     *   `dest` side.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     */
    get asEfinityV1(): {dest: efinityV1.VersionedMultiLocation, beneficiary: efinityV1.VersionedMultiLocation, assets: efinityV1.VersionedMultiAssets, feeAssetItem: number} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class PolkadotXcmSendCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PolkadotXcm.send')
        this._chain = ctx._chain
        this.call = call
    }

    get isEfinityV1(): boolean {
        return this._chain.getCallHash('PolkadotXcm.send') === '9ec4149ae6cee6240a6e2aa06a8ef90285e68be29dd0de109b35af7922311609'
    }

    get asEfinityV1(): {dest: efinityV1.VersionedMultiLocation, message: efinityV1.VersionedXcm} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }

    get isEfinityV2(): boolean {
        return this._chain.getCallHash('PolkadotXcm.send') === '3ca4beb317aeed3e0a00ae870ffd3bef841bb6f4e766db0b286c7fc5d8eef886'
    }

    get asEfinityV2(): {dest: efinityV2.VersionedMultiLocation, message: efinityV2.VersionedXcm} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class PolkadotXcmTeleportAssetsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PolkadotXcm.teleport_assets')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Teleport some assets from the local chain to some destination chain.
     * 
     * Fee payment on the destination side is made from the first asset listed in the `assets` vector and
     * fee-weight is calculated locally and thus remote weights are assumed to be equal to
     * local weights.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
     *   `dest` side. May not be empty.
     * - `dest_weight`: Equal to the total weight on `dest` of the XCM message
     *   `Teleport { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('PolkadotXcm.teleport_assets') === '123b8170fa49ede01f38623e457f4e4d417c90cff5b93ced45a9eb8fe8e6ca2e'
    }

    /**
     * Teleport some assets from the local chain to some destination chain.
     * 
     * Fee payment on the destination side is made from the first asset listed in the `assets` vector and
     * fee-weight is calculated locally and thus remote weights are assumed to be equal to
     * local weights.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
     *   `dest` side. May not be empty.
     * - `dest_weight`: Equal to the total weight on `dest` of the XCM message
     *   `Teleport { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
     */
    get asEfinityV1(): {dest: efinityV1.VersionedMultiLocation, beneficiary: efinityV1.VersionedMultiLocation, assets: efinityV1.VersionedMultiAssets, feeAssetItem: number} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class PoolsCreateFuelTankCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Pools.create_fuel_tank')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Create a new pool with type of Fuel.
     * 
     * Fuel tanks are allowed to be created by anyone who can allocate
     * funds so that these fuel tanks can be used for their own purposes.
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('Pools.create_fuel_tank') === '3dd0f1893ec5786064608ae93b19dda0c2796e066c34ddb233b18ebf2a5a7a63'
    }

    /**
     * Create a new pool with type of Fuel.
     * 
     * Fuel tanks are allowed to be created by anyone who can allocate
     * funds so that these fuel tanks can be used for their own purposes.
     */
    get asEfinityV1(): {fundAccount: efinityV1.MultiAddress} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class PoolsMutatePoolsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Pools.mutate_pools')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Mutate the pools. Can only be called by root.
     */
    get isEfinityV3(): boolean {
        return this._chain.getCallHash('Pools.mutate_pools') === 'b6e16c50ea323b82f6ed539c6ec342660e4b39ca7192a157a54536b69eaf5a62'
    }

    /**
     * Mutate the pools. Can only be called by root.
     */
    get asEfinityV3(): {mutation: efinityV3.PoolsMutation} {
        assert(this.isEfinityV3)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Mutate the pools. Can only be called by root.
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('Pools.mutate_pools') === '59397bde495bc4bf6e9ce90d9d117f187d090806cb3f83eb4b3669141aabffed'
    }

    /**
     * Mutate the pools. Can only be called by root.
     */
    get asEfinityV3000(): {mutation: efinityV3000.PoolsMutation} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }
}

export class PoolsTransferOwnershipCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Pools.transfer_ownership')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfer ownership of a pool to new account.
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('Pools.transfer_ownership') === '2d479f81acac3188d6668e91281a0ffa1cf7ec942881627b2a225cdbe798ec5f'
    }

    /**
     * Transfer ownership of a pool to new account.
     */
    get asEfinityV1(): {poolId: bigint, newOwner: efinityV1.MultiAddress} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class PoolsWithdrawFromPoolCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Pools.withdraw_from_pool')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Withdraw funds from pool to the pool owner's account.
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('Pools.withdraw_from_pool') === '0bb9eac6a341f00fb460184b1547b63758423c38c309e493601881eec6b68897'
    }

    /**
     * Withdraw funds from pool to the pool owner's account.
     */
    get asEfinityV1(): {poolId: bigint, amount: bigint} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class PreimageNotePreimageCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Preimage.note_preimage')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Register a preimage on-chain.
     * 
     * If the preimage was previously requested, no fees or deposits are taken for providing
     * the preimage. Otherwise, a deposit is taken proportional to the size of the preimage.
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Preimage.note_preimage') === 'fb6f9f7fd683160ab20dcde42ca8f757bc13845dc544f497e534fcf19c270a46'
    }

    /**
     * Register a preimage on-chain.
     * 
     * If the preimage was previously requested, no fees or deposits are taken for providing
     * the preimage. Otherwise, a deposit is taken proportional to the size of the preimage.
     */
    get asEfinityV2(): {bytes: Uint8Array} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class PreimageRequestPreimageCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Preimage.request_preimage')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Request a preimage be uploaded to the chain without paying any fees or deposits.
     * 
     * If the preimage requests has already been provided on-chain, we unreserve any deposit
     * a user may have paid, and take the control of the preimage out of their hands.
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Preimage.request_preimage') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * Request a preimage be uploaded to the chain without paying any fees or deposits.
     * 
     * If the preimage requests has already been provided on-chain, we unreserve any deposit
     * a user may have paid, and take the control of the preimage out of their hands.
     */
    get asEfinityV2(): {hash: Uint8Array} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class PreimageUnnotePreimageCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Preimage.unnote_preimage')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Clear an unrequested preimage from the runtime storage.
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Preimage.unnote_preimage') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * Clear an unrequested preimage from the runtime storage.
     */
    get asEfinityV2(): {hash: Uint8Array} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class PreimageUnrequestPreimageCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Preimage.unrequest_preimage')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Clear a previously made request for a preimage.
     * 
     * NOTE: THIS MUST NOT BE CALLED ON `hash` MORE TIMES THAN `request_preimage`.
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Preimage.unrequest_preimage') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * Clear a previously made request for a preimage.
     * 
     * NOTE: THIS MUST NOT BE CALLED ON `hash` MORE TIMES THAN `request_preimage`.
     */
    get asEfinityV2(): {hash: Uint8Array} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class SchedulerCancelCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Scheduler.cancel')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Cancel an anonymously scheduled task.
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Scheduler.cancel') === '4186e24556a58b04e04d6d697a530eedf78f255da1ba9d84df6511dd6d6465f7'
    }

    /**
     * Cancel an anonymously scheduled task.
     */
    get asEfinityV2(): {when: number, index: number} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class SchedulerCancelNamedCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Scheduler.cancel_named')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Cancel a named scheduled task.
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Scheduler.cancel_named') === 'a0b847240e1232c10a62578340a2af6708e760669b06344b70c15e6370b514cf'
    }

    /**
     * Cancel a named scheduled task.
     */
    get asEfinityV2(): {id: Uint8Array} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class SchedulerScheduleCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Scheduler.schedule')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Anonymously schedule a task.
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === '6fb5a7e00a9e049113f7b263473adc25d7f5038efa76ee5171b9acfad3a5f2ef'
    }

    /**
     * Anonymously schedule a task.
     */
    get asEfinityV2(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: efinityV2.MaybeHashed} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task.
     */
    get isEfinityV3(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === '7dd515ec8bf6d740b940ae6ebfa2ebec9985aad95756902bfe1dfdb707df4b3a'
    }

    /**
     * Anonymously schedule a task.
     */
    get asEfinityV3(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: efinityV3.MaybeHashed} {
        assert(this.isEfinityV3)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task.
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === '1553aaba64c64ef63b3cb8757c607e184b210d01b9ca9dfd6ec58c06601e1c3c'
    }

    /**
     * Anonymously schedule a task.
     */
    get asEfinityV3000(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: efinityV3000.MaybeHashed} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task.
     */
    get isV3000(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === '347bb7cb2616e5dc4e7d706d7963074cba84c2421cab8d1a327cf84affd40b6b'
    }

    /**
     * Anonymously schedule a task.
     */
    get asV3000(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v3000.MaybeHashed} {
        assert(this.isV3000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task.
     */
    get isV3010(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === '58b33720681f8d9bb7870bca1f3dea9cb187162972ed451df44fdabdd024026e'
    }

    /**
     * Anonymously schedule a task.
     */
    get asV3010(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v3010.MaybeHashed} {
        assert(this.isV3010)
        return this._chain.decodeCall(this.call)
    }
}

export class SchedulerScheduleAfterCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Scheduler.schedule_after')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_after') === 'dc982576607c8a0b94fd05e69d9c94455cf27ad5ec7ce46dfdf18e3a23b80f09'
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get asEfinityV2(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: efinityV2.MaybeHashed} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get isEfinityV3(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_after') === '5a3e0c229f51c1b1c4da42c68c0eb639ede3de9b41dbe4cfc77b8fb77ea182df'
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get asEfinityV3(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: efinityV3.MaybeHashed} {
        assert(this.isEfinityV3)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_after') === '7f1490ce532e300ce9460659c87cbded5828d77beb5983799d333e93f1fe1dcd'
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get asEfinityV3000(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: efinityV3000.MaybeHashed} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get isV3000(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_after') === 'f2b9df101f781d4d253b5eeebe7b65d58df7343c181424d9fa4889e563bbcb06'
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get asV3000(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v3000.MaybeHashed} {
        assert(this.isV3000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get isV3010(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_after') === '4d3789b5ce9d7ee57601f3a1b1903da240b4390560011092e3d77d6094274ae9'
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get asV3010(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v3010.MaybeHashed} {
        assert(this.isV3010)
        return this._chain.decodeCall(this.call)
    }
}

export class SchedulerScheduleNamedCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Scheduler.schedule_named')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Schedule a named task.
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === '02d5fd88a810ae003279c1c62e9df3f754cbf2bb85f83ae7676f7a04d6d89ec3'
    }

    /**
     * Schedule a named task.
     */
    get asEfinityV2(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: efinityV2.MaybeHashed} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task.
     */
    get isEfinityV3(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === '4e51ecbcd53e88e46cb18dc26c56784156382e564af6a6d2556f7d39c997453c'
    }

    /**
     * Schedule a named task.
     */
    get asEfinityV3(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: efinityV3.MaybeHashed} {
        assert(this.isEfinityV3)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task.
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === 'ba12438353352edcffa5dea05c437cf024658e39620b930d059574d819083b62'
    }

    /**
     * Schedule a named task.
     */
    get asEfinityV3000(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: efinityV3000.MaybeHashed} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task.
     */
    get isV3000(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === '1bb6addc79aac3e5960e49f0ed6d3f442ccdf2ef968848a19f91e890a203549c'
    }

    /**
     * Schedule a named task.
     */
    get asV3000(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v3000.MaybeHashed} {
        assert(this.isV3000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task.
     */
    get isV3010(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === '9581c848db13355fb8ceab2d39813cbd6420e81ddf72c8b18c86e56f74b6ed22'
    }

    /**
     * Schedule a named task.
     */
    get asV3010(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v3010.MaybeHashed} {
        assert(this.isV3010)
        return this._chain.decodeCall(this.call)
    }
}

export class SchedulerScheduleNamedAfterCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Scheduler.schedule_named_after')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named_after') === 'c7951700c99812a8a459440e8b977e1594cafd686b06897209c80cf1ce13b5c6'
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get asEfinityV2(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: efinityV2.MaybeHashed} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get isEfinityV3(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named_after') === 'fb6574f7d5f42cbe56595bd781db43f2abfb5c1e8c13fc8d8eb7915bdf09fbc6'
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get asEfinityV3(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: efinityV3.MaybeHashed} {
        assert(this.isEfinityV3)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named_after') === '3633ab2b6fc74901243510044d5c3d557bd331af38a62c80fbac12babdd642ff'
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get asEfinityV3000(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: efinityV3000.MaybeHashed} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get isV3000(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named_after') === '92fa5ea0ac9361dd49b9ed48d20692e3443fa2c119dec90092a5efc0ee6a2294'
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get asV3000(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v3000.MaybeHashed} {
        assert(this.isV3000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get isV3010(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named_after') === '47715f0f4dcfddcf1fccfe66bedb8c81c15fd21dbbff11fe6e8a9390942dcc96'
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get asV3010(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v3010.MaybeHashed} {
        assert(this.isV3010)
        return this._chain.decodeCall(this.call)
    }
}

export class SessionPurgeKeysCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Session.purge_keys')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Removes any session key(s) of the function caller.
     * 
     * This doesn't take effect until the next session.
     * 
     * The dispatch origin of this function must be Signed and the account must be either be
     * convertible to a validator ID using the chain's typical addressing system (this usually
     * means being a controller account) or directly convertible into a validator ID (which
     * usually means being a stash account).
     * 
     * # <weight>
     * - Complexity: `O(1)` in number of key types. Actual cost depends on the number of length
     *   of `T::Keys::key_ids()` which is fixed.
     * - DbReads: `T::ValidatorIdOf`, `NextKeys`, `origin account`
     * - DbWrites: `NextKeys`, `origin account`
     * - DbWrites per key id: `KeyOwner`
     * # </weight>
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Session.purge_keys') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Removes any session key(s) of the function caller.
     * 
     * This doesn't take effect until the next session.
     * 
     * The dispatch origin of this function must be Signed and the account must be either be
     * convertible to a validator ID using the chain's typical addressing system (this usually
     * means being a controller account) or directly convertible into a validator ID (which
     * usually means being a stash account).
     * 
     * # <weight>
     * - Complexity: `O(1)` in number of key types. Actual cost depends on the number of length
     *   of `T::Keys::key_ids()` which is fixed.
     * - DbReads: `T::ValidatorIdOf`, `NextKeys`, `origin account`
     * - DbWrites: `NextKeys`, `origin account`
     * - DbWrites per key id: `KeyOwner`
     * # </weight>
     */
    get asEfinityV2(): null {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class SessionSetKeysCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Session.set_keys')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Sets the session key(s) of the function caller to `keys`.
     * Allows an account to set its session key prior to becoming a validator.
     * This doesn't take effect until the next session.
     * 
     * The dispatch origin of this function must be signed.
     * 
     * # <weight>
     * - Complexity: `O(1)`. Actual cost depends on the number of length of
     *   `T::Keys::key_ids()` which is fixed.
     * - DbReads: `origin account`, `T::ValidatorIdOf`, `NextKeys`
     * - DbWrites: `origin account`, `NextKeys`
     * - DbReads per key id: `KeyOwner`
     * - DbWrites per key id: `KeyOwner`
     * # </weight>
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Session.set_keys') === '24d5f61fc8b687e89719b9274a302989634bb654ef0d77997e56dfd9b20ccbf6'
    }

    /**
     * Sets the session key(s) of the function caller to `keys`.
     * Allows an account to set its session key prior to becoming a validator.
     * This doesn't take effect until the next session.
     * 
     * The dispatch origin of this function must be signed.
     * 
     * # <weight>
     * - Complexity: `O(1)`. Actual cost depends on the number of length of
     *   `T::Keys::key_ids()` which is fixed.
     * - DbReads: `origin account`, `T::ValidatorIdOf`, `NextKeys`
     * - DbWrites: `origin account`, `NextKeys`
     * - DbReads per key id: `KeyOwner`
     * - DbWrites per key id: `KeyOwner`
     * # </weight>
     */
    get asEfinityV2(): {keys: efinityV2.SessionKeys, proof: Uint8Array} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Sets the session key(s) of the function caller to `keys`.
     * Allows an account to set its session key prior to becoming a validator.
     * This doesn't take effect until the next session.
     * 
     * The dispatch origin of this function must be signed.
     * 
     * # <weight>
     * - Complexity: `O(1)`. Actual cost depends on the number of length of
     *   `T::Keys::key_ids()` which is fixed.
     * - DbReads: `origin account`, `T::ValidatorIdOf`, `NextKeys`
     * - DbWrites: `origin account`, `NextKeys`
     * - DbReads per key id: `KeyOwner`
     * - DbWrites per key id: `KeyOwner`
     * # </weight>
     */
    get isEfinityV3(): boolean {
        return this._chain.getCallHash('Session.set_keys') === 'addd7c626f9aa937cd1834dc66bd024e3ceb303e43e64ebf3d8d267053cff2b5'
    }

    /**
     * Sets the session key(s) of the function caller to `keys`.
     * Allows an account to set its session key prior to becoming a validator.
     * This doesn't take effect until the next session.
     * 
     * The dispatch origin of this function must be signed.
     * 
     * # <weight>
     * - Complexity: `O(1)`. Actual cost depends on the number of length of
     *   `T::Keys::key_ids()` which is fixed.
     * - DbReads: `origin account`, `T::ValidatorIdOf`, `NextKeys`
     * - DbWrites: `origin account`, `NextKeys`
     * - DbReads per key id: `KeyOwner`
     * - DbWrites per key id: `KeyOwner`
     * # </weight>
     */
    get asEfinityV3(): {keys: efinityV3.SessionKeys, proof: Uint8Array} {
        assert(this.isEfinityV3)
        return this._chain.decodeCall(this.call)
    }
}

export class SudoSetKeyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Sudo.set_key')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo
     * key.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB change.
     * # </weight>
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('Sudo.set_key') === 'e634aac3331d47a56ff572c52ad90a648769dfbf2c00d7bd44498b4ee41f6ac7'
    }

    /**
     * Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo
     * key.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB change.
     * # </weight>
     */
    get asEfinityV1(): {new: efinityV1.MultiAddress} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class SudoSudoCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Sudo.sudo')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === 'd2b78287df37e2ce6a606d4e2dee9d4b7ff25dcb98d93d875d5b118d1fe2082f'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asEfinityV1(): {call: efinityV1.Call} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === '8ac56a6c1268cb03d83017cb68a68bfed38080c57913c092eadf66b866a29a0c'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asEfinityV2(): {call: efinityV2.Call} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isEfinityV3(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === 'f769581b601e45c4e8c2234dc7fb3735b28ab739e0920351a8fb33a8467f2660'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asEfinityV3(): {call: efinityV3.Call} {
        assert(this.isEfinityV3)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === 'd588472ac1e073a42fe40b99b53db7de4ca39ddbe0eb4608ef1b268d5f3b4b2d'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asEfinityV3000(): {call: efinityV3000.Call} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV3000(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === '89b73aecca4fbb057df0478e8a83c15fb1f1cd8604a82e9f71656b4c95b6c5f9'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV3000(): {call: v3000.Call} {
        assert(this.isV3000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV3010(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === 'a194731dc8d84f96302a09586bde027d6be0192f0762830458dbd04a23cff818'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV3010(): {call: v3010.Call} {
        assert(this.isV3010)
        return this._chain.decodeCall(this.call)
    }
}

export class SudoSudoAsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Sudo.sudo_as')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === 'f4ea003b546fc535bd54de3b960e082931ec3b7affad049efd579b5bdf4a9d42'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asEfinityV1(): {who: efinityV1.MultiAddress, call: efinityV1.Call} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === 'a77e5ba3ef95dc3f3a988e6839c7b5dc31b71fe5c6b5f5286dbce01640f8b9c8'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asEfinityV2(): {who: efinityV2.MultiAddress, call: efinityV2.Call} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isEfinityV3(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '5e596c11637f9bee4df056daea0e979d7ddbf6fca274f87d9b933ea9718c0542'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asEfinityV3(): {who: efinityV3.MultiAddress, call: efinityV3.Call} {
        assert(this.isEfinityV3)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === 'b187fb3defae035420918c8e68529433210f6cf84614233d2e5cec20898e596a'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asEfinityV3000(): {who: efinityV3000.MultiAddress, call: efinityV3000.Call} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV3000(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '0a784cee6c8709dc2285fbf061d46d89b3af129e24512d29b84755b8780c18ec'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV3000(): {who: v3000.MultiAddress, call: v3000.Call} {
        assert(this.isV3000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV3010(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === 'a2a34b3a29ac1e4a45cd3e99e6f5e4201ffa2717f23a26ad49c18e124a8268d2'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV3010(): {who: v3010.MultiAddress, call: v3010.Call} {
        assert(this.isV3010)
        return this._chain.decodeCall(this.call)
    }
}

export class SudoSudoUncheckedWeightCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Sudo.sudo_unchecked_weight')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '139c29f9d292e00dc7e4942cb8c766ce9daa053645d6b561ddc5dfb5bde24eec'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get asEfinityV1(): {call: efinityV1.Call, weight: bigint} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === 'ec6327608b218b24996345debebc9640465718b45e82ad6ffc538fa8f6212b40'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get asEfinityV2(): {call: efinityV2.Call, weight: bigint} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get isEfinityV3(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === 'cb1598fd7ece9eccf204c0f2617b853f11428881447c35ebdacf232119be87d5'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get asEfinityV3(): {call: efinityV3.Call, weight: bigint} {
        assert(this.isEfinityV3)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '0ab25c53a4b44c3bf6af086a331f9cb643f6e1e744f909581862bbe758415d0d'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get asEfinityV3000(): {call: efinityV3000.Call, weight: efinityV3000.Weight} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get isV3000(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '764e602289350a4953db9e77be34323ace3330727d6aec6ba213cb8d741c53fd'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get asV3000(): {call: v3000.Call, weight: v3000.Weight} {
        assert(this.isV3000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get isV3010(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '45e37247bf30bd96c6b99833ef7077dd8cae6f8f38723327a7285c0fb042266a'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get asV3010(): {call: v3010.Call, weight: v3010.Weight} {
        assert(this.isV3010)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemFillBlockCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.fill_block')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * A dispatch that will fill the block weight up to the given ratio.
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('System.fill_block') === '41c1841312db092642508be699e4a3f54d52efe2dcaa8101ca9518398fb70c49'
    }

    /**
     * A dispatch that will fill the block weight up to the given ratio.
     */
    get asEfinityV1(): {ratio: number} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemKillPrefixCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.kill_prefix')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Kill all storage items with a key that starts with the given prefix.
     * 
     * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
     * the prefix we are removing to accurately calculate the weight of this function.
     * 
     * # <weight>
     * - `O(P)` where `P` amount of keys with prefix `prefix`
     * - `P` storage deletions.
     * - Base Weight: 0.834 * P µs
     * - Writes: Number of subkeys + 1
     * # </weight>
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('System.kill_prefix') === 'dfbadd42bee8b18fc81cf78683511061181cffbf7a8ebfd3e5719c389b373d93'
    }

    /**
     * Kill all storage items with a key that starts with the given prefix.
     * 
     * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
     * the prefix we are removing to accurately calculate the weight of this function.
     * 
     * # <weight>
     * - `O(P)` where `P` amount of keys with prefix `prefix`
     * - `P` storage deletions.
     * - Base Weight: 0.834 * P µs
     * - Writes: Number of subkeys + 1
     * # </weight>
     */
    get asEfinityV1(): {prefix: Uint8Array, subkeys: number} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemKillStorageCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.kill_storage')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Kill some items from storage.
     * 
     * # <weight>
     * - `O(IK)` where `I` length of `keys` and `K` length of one key
     * - `I` storage deletions.
     * - Base Weight: .378 * i µs
     * - Writes: Number of items
     * # </weight>
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('System.kill_storage') === 'eac21dc14e927c003d9c634fb019d04128f71f8529d2914b10a56b85289c2c11'
    }

    /**
     * Kill some items from storage.
     * 
     * # <weight>
     * - `O(IK)` where `I` length of `keys` and `K` length of one key
     * - `I` storage deletions.
     * - Base Weight: .378 * i µs
     * - Writes: Number of items
     * # </weight>
     */
    get asEfinityV1(): {keys: Uint8Array[]} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemRemarkCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.remark')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Make some on-chain remark.
     * 
     * # <weight>
     * - `O(1)`
     * # </weight>
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('System.remark') === 'f4e9b5b7572eeae92978087ece9b4f57cb5cab4f16baf5625bb9ec4a432bad63'
    }

    /**
     * Make some on-chain remark.
     * 
     * # <weight>
     * - `O(1)`
     * # </weight>
     */
    get asEfinityV1(): {remark: Uint8Array} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemRemarkWithEventCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.remark_with_event')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Make some on-chain remark and emit event.
     * 
     * # <weight>
     * - `O(b)` where b is the length of the remark.
     * - 1 event.
     * # </weight>
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('System.remark_with_event') === 'f4e9b5b7572eeae92978087ece9b4f57cb5cab4f16baf5625bb9ec4a432bad63'
    }

    /**
     * Make some on-chain remark and emit event.
     * 
     * # <weight>
     * - `O(b)` where b is the length of the remark.
     * - 1 event.
     * # </weight>
     */
    get asEfinityV1(): {remark: Uint8Array} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemSetChangesTrieConfigCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.set_changes_trie_config')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the new changes trie configuration.
     * 
     * # <weight>
     * - `O(1)`
     * - 1 storage write or delete (codec `O(1)`).
     * - 1 call to `deposit_log`: Uses `append` API, so O(1)
     * - Base Weight: 7.218 µs
     * - DB Weight:
     *     - Writes: Changes Trie, System Digest
     * # </weight>
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('System.set_changes_trie_config') === 'ced137e2f8792ce87e1f2b20f97e1de9a31001f9c44069dc6e73b9e4c061c311'
    }

    /**
     * Set the new changes trie configuration.
     * 
     * # <weight>
     * - `O(1)`
     * - 1 storage write or delete (codec `O(1)`).
     * - 1 call to `deposit_log`: Uses `append` API, so O(1)
     * - Base Weight: 7.218 µs
     * - DB Weight:
     *     - Writes: Changes Trie, System Digest
     * # </weight>
     */
    get asEfinityV1(): {changesTrieConfig: (efinityV1.ChangesTrieConfiguration | undefined)} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemSetCodeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.set_code')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the new runtime code.
     * 
     * # <weight>
     * - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
     * - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is
     *   expensive).
     * - 1 storage write (codec `O(C)`).
     * - 1 digest item.
     * - 1 event.
     * The weight of this function is dependent on the runtime, but generally this is very
     * expensive. We will treat this as a full block.
     * # </weight>
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('System.set_code') === '7bf3d4785d9be7a4872f39cbd3702a66e16f7ee01e4446fb4a05624dc0ec4c93'
    }

    /**
     * Set the new runtime code.
     * 
     * # <weight>
     * - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
     * - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is
     *   expensive).
     * - 1 storage write (codec `O(C)`).
     * - 1 digest item.
     * - 1 event.
     * The weight of this function is dependent on the runtime, but generally this is very
     * expensive. We will treat this as a full block.
     * # </weight>
     */
    get asEfinityV1(): {code: Uint8Array} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemSetCodeWithoutChecksCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.set_code_without_checks')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the new runtime code without doing any checks of the given `code`.
     * 
     * # <weight>
     * - `O(C)` where `C` length of `code`
     * - 1 storage write (codec `O(C)`).
     * - 1 digest item.
     * - 1 event.
     * The weight of this function is dependent on the runtime. We will treat this as a full
     * block. # </weight>
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('System.set_code_without_checks') === '7bf3d4785d9be7a4872f39cbd3702a66e16f7ee01e4446fb4a05624dc0ec4c93'
    }

    /**
     * Set the new runtime code without doing any checks of the given `code`.
     * 
     * # <weight>
     * - `O(C)` where `C` length of `code`
     * - 1 storage write (codec `O(C)`).
     * - 1 digest item.
     * - 1 event.
     * The weight of this function is dependent on the runtime. We will treat this as a full
     * block. # </weight>
     */
    get asEfinityV1(): {code: Uint8Array} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemSetHeapPagesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.set_heap_pages')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the number of pages in the WebAssembly environment's heap.
     * 
     * # <weight>
     * - `O(1)`
     * - 1 storage write.
     * - Base Weight: 1.405 µs
     * - 1 write to HEAP_PAGES
     * - 1 digest item
     * # </weight>
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('System.set_heap_pages') === '130172e47c5e517627712b4d084768b98489d920284223ea8ef9c462339b5808'
    }

    /**
     * Set the number of pages in the WebAssembly environment's heap.
     * 
     * # <weight>
     * - `O(1)`
     * - 1 storage write.
     * - Base Weight: 1.405 µs
     * - 1 write to HEAP_PAGES
     * - 1 digest item
     * # </weight>
     */
    get asEfinityV1(): {pages: bigint} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemSetStorageCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.set_storage')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set some items of storage.
     * 
     * # <weight>
     * - `O(I)` where `I` length of `items`
     * - `I` storage writes (`O(1)`).
     * - Base Weight: 0.568 * i µs
     * - Writes: Number of items
     * # </weight>
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('System.set_storage') === 'a4fb507615d69849afb1b2ee654006f9be48bb6e960a4674624d6e46e4382083'
    }

    /**
     * Set some items of storage.
     * 
     * # <weight>
     * - `O(I)` where `I` length of `items`
     * - `I` storage writes (`O(1)`).
     * - Base Weight: 0.568 * i µs
     * - Writes: Number of items
     * # </weight>
     */
    get asEfinityV1(): {items: [Uint8Array, Uint8Array][]} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class TagsCreateTagCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Tags.create_tag')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Create a tag
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('Tags.create_tag') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Create a tag
     */
    get asEfinityV1(): null {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class TagsTagAssetCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Tags.tag_asset')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Adds `tag_id` to `asset_id`. `origin` must own the asset and tag.
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('Tags.tag_asset') === 'e62e9dda5ca3f63b93581dab7a7c7b0517bee40b1d85fbadde147219ef05bf52'
    }

    /**
     * Adds `tag_id` to `asset_id`. `origin` must own the asset and tag.
     */
    get asEfinityV1(): {assetId: bigint, tagId: bigint} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class TagsUntagAssetCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Tags.untag_asset')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Removes `tag_id` from `asset_id`. `origin` must own the asset and tag.
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('Tags.untag_asset') === 'e62e9dda5ca3f63b93581dab7a7c7b0517bee40b1d85fbadde147219ef05bf52'
    }

    /**
     * Removes `tag_id` from `asset_id`. `origin` must own the asset and tag.
     */
    get asEfinityV1(): {assetId: bigint, tagId: bigint} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalCommitteeCloseCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalCommittee.close')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     * May be called by any signed account in order to finish voting and close the proposal.
     * 
     * If called before the end of the voting period it will only close the vote if it is
     * has enough votes to be approved or disapproved.
     * 
     * If called after the end of the voting period abstentions are counted as rejections
     * unless there is a prime member set and the prime member cast an approval.
     * 
     * If the close operation completes successfully with disapproval, the transaction fee will
     * be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
     * proposal.
     * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1 + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - `P1` is the complexity of `proposal` preimage.
     *   - `P2` is proposal-count (code-bounded)
     * - DB:
     *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
     *    `O(P2)`)
     *  - any mutations done while executing `proposal` (`P1`)
     * - up to 3 events
     * # </weight>
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.close') === '45a5978a11ceb5a8b2c51f7152abaa939cd8bd4bcdc5e1162029cedba4b598ea'
    }

    /**
     * Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     * May be called by any signed account in order to finish voting and close the proposal.
     * 
     * If called before the end of the voting period it will only close the vote if it is
     * has enough votes to be approved or disapproved.
     * 
     * If called after the end of the voting period abstentions are counted as rejections
     * unless there is a prime member set and the prime member cast an approval.
     * 
     * If the close operation completes successfully with disapproval, the transaction fee will
     * be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
     * proposal.
     * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1 + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - `P1` is the complexity of `proposal` preimage.
     *   - `P2` is proposal-count (code-bounded)
     * - DB:
     *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
     *    `O(P2)`)
     *  - any mutations done while executing `proposal` (`P1`)
     * - up to 3 events
     * # </weight>
     */
    get asEfinityV2(): {proposalHash: Uint8Array, index: number, proposalWeightBound: bigint, lengthBound: number} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     * May be called by any signed account in order to finish voting and close the proposal.
     * 
     * If called before the end of the voting period it will only close the vote if it is
     * has enough votes to be approved or disapproved.
     * 
     * If called after the end of the voting period abstentions are counted as rejections
     * unless there is a prime member set and the prime member cast an approval.
     * 
     * If the close operation completes successfully with disapproval, the transaction fee will
     * be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
     * proposal.
     * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1 + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - `P1` is the complexity of `proposal` preimage.
     *   - `P2` is proposal-count (code-bounded)
     * - DB:
     *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
     *    `O(P2)`)
     *  - any mutations done while executing `proposal` (`P1`)
     * - up to 3 events
     * # </weight>
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.close') === '683905378cce329de8c5e9460bd36984188fb48a39207d985ea43cb10bd1eb81'
    }

    /**
     * Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     * May be called by any signed account in order to finish voting and close the proposal.
     * 
     * If called before the end of the voting period it will only close the vote if it is
     * has enough votes to be approved or disapproved.
     * 
     * If called after the end of the voting period abstentions are counted as rejections
     * unless there is a prime member set and the prime member cast an approval.
     * 
     * If the close operation completes successfully with disapproval, the transaction fee will
     * be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
     * proposal.
     * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1 + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - `P1` is the complexity of `proposal` preimage.
     *   - `P2` is proposal-count (code-bounded)
     * - DB:
     *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
     *    `O(P2)`)
     *  - any mutations done while executing `proposal` (`P1`)
     * - up to 3 events
     * # </weight>
     */
    get asEfinityV3000(): {proposalHash: Uint8Array, index: number, proposalWeightBound: bigint, lengthBound: number} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalCommitteeDisapproveProposalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalCommittee.disapprove_proposal')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Disapprove a proposal, close, and remove it from the system, regardless of its current
     * state.
     * 
     * Must be called by the Root origin.
     * 
     * Parameters:
     * * `proposal_hash`: The hash of the proposal that should be disapproved.
     * 
     * # <weight>
     * Complexity: O(P) where P is the number of max proposals
     * DB Weight:
     * * Reads: Proposals
     * * Writes: Voting, Proposals, ProposalOf
     * # </weight>
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.disapprove_proposal') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * Disapprove a proposal, close, and remove it from the system, regardless of its current
     * state.
     * 
     * Must be called by the Root origin.
     * 
     * Parameters:
     * * `proposal_hash`: The hash of the proposal that should be disapproved.
     * 
     * # <weight>
     * Complexity: O(P) where P is the number of max proposals
     * DB Weight:
     * * Reads: Proposals
     * * Writes: Voting, Proposals, ProposalOf
     * # </weight>
     */
    get asEfinityV2(): {proposalHash: Uint8Array} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalCommitteeExecuteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalCommittee.execute')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.execute') === '27b06bc13c982bedf4c22df3e328c551dacfa2d0aa0b2db963e55d27aaac23ac'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asEfinityV2(): {proposal: efinityV2.Call, lengthBound: number} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isEfinityV3(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.execute') === '66fffa1ff650edb25b908c2b043acf71553670c63c283f14cd88ca2ca47dc52a'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asEfinityV3(): {proposal: efinityV3.Call, lengthBound: number} {
        assert(this.isEfinityV3)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.execute') === 'a214765a38f6699d95107301cca5154a555e493bf3993c4c67b3aaf6da5ae708'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asEfinityV3000(): {proposal: efinityV3000.Call, lengthBound: number} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isV3000(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.execute') === '67e9b7e941713dcbc50d356c714a2e9a0ea80eaff038fb382602cbdd27fbfb5e'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asV3000(): {proposal: v3000.Call, lengthBound: number} {
        assert(this.isV3000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isV3010(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.execute') === 'f19a65c484d3cba560e1db6f1f85008d6218c5cd43fbfcbbe4b051fe4aa6ccf2'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asV3010(): {proposal: v3010.Call, lengthBound: number} {
        assert(this.isV3010)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalCommitteeProposeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalCommittee.propose')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.propose') === '714fdb75fa52c393afe5497690f80b50f8b451534183c14d396acc789a52f66a'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asEfinityV2(): {threshold: number, proposal: efinityV2.Call, lengthBound: number} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isEfinityV3(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.propose') === 'cdf7d19b893f28f26424698248ad1b2f03188005aa449f0092d7c707cdefda8a'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asEfinityV3(): {threshold: number, proposal: efinityV3.Call, lengthBound: number} {
        assert(this.isEfinityV3)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.propose') === 'ffe1f1cf0c492088b66c6c16a09bc844bca568569a5e7b9c86de78a227b620eb'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asEfinityV3000(): {threshold: number, proposal: efinityV3000.Call, lengthBound: number} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isV3000(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.propose') === '4d728d5b79d9be2433c3743ea0e36620b40a577f18aff20c305071d5d898a8a0'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asV3000(): {threshold: number, proposal: v3000.Call, lengthBound: number} {
        assert(this.isV3000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isV3010(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.propose') === '62cc4239ddfa9bfe625017623fd0a3e05e360f53a0f5f27ed27edb80161d7b2b'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asV3010(): {threshold: number, proposal: v3010.Call, lengthBound: number} {
        assert(this.isV3010)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalCommitteeSetMembersCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalCommittee.set_members')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the collective's membership.
     * 
     * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
     * - `prime`: The prime member whose vote sets the default.
     * - `old_count`: The upper bound for the previous number of members in storage. Used for
     *   weight estimation.
     * 
     * Requires root origin.
     * 
     * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
     *       the weight estimations rely on it to estimate dispatchable weight.
     * 
     * # WARNING:
     * 
     * The `pallet-collective` can also be managed by logic outside of the pallet through the
     * implementation of the trait [`ChangeMembers`].
     * Any call to `set_members` must be careful that the member set doesn't get out of sync
     * with other logic managing the member set.
     * 
     * # <weight>
     * ## Weight
     * - `O(MP + N)` where:
     *   - `M` old-members-count (code- and governance-bounded)
     *   - `N` new-members-count (code- and governance-bounded)
     *   - `P` proposals-count (code-bounded)
     * - DB:
     *   - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the
     *     members
     *   - 1 storage read (codec `O(P)`) for reading the proposals
     *   - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
     *   - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
     * # </weight>
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.set_members') === '71b7fcb1d8a62eff96a9ef006517578ce9189e6d931948a256a04ca75ff68d4a'
    }

    /**
     * Set the collective's membership.
     * 
     * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
     * - `prime`: The prime member whose vote sets the default.
     * - `old_count`: The upper bound for the previous number of members in storage. Used for
     *   weight estimation.
     * 
     * Requires root origin.
     * 
     * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
     *       the weight estimations rely on it to estimate dispatchable weight.
     * 
     * # WARNING:
     * 
     * The `pallet-collective` can also be managed by logic outside of the pallet through the
     * implementation of the trait [`ChangeMembers`].
     * Any call to `set_members` must be careful that the member set doesn't get out of sync
     * with other logic managing the member set.
     * 
     * # <weight>
     * ## Weight
     * - `O(MP + N)` where:
     *   - `M` old-members-count (code- and governance-bounded)
     *   - `N` new-members-count (code- and governance-bounded)
     *   - `P` proposals-count (code-bounded)
     * - DB:
     *   - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the
     *     members
     *   - 1 storage read (codec `O(P)`) for reading the proposals
     *   - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
     *   - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
     * # </weight>
     */
    get asEfinityV2(): {newMembers: Uint8Array[], prime: (Uint8Array | undefined), oldCount: number} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalCommitteeVoteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalCommittee.vote')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add an aye or nay vote for the sender to the given proposal.
     * 
     * Requires the sender to be a member.
     * 
     * Transaction fees will be waived if the member is voting on any particular proposal
     * for the first time and the call is successful. Subsequent vote changes will charge a
     * fee.
     * # <weight>
     * ## Weight
     * - `O(M)` where `M` is members-count (code- and governance-bounded)
     * - DB:
     *   - 1 storage read `Members` (codec `O(M)`)
     *   - 1 storage mutation `Voting` (codec `O(M)`)
     * - 1 event
     * # </weight>
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.vote') === 'f8a1069a57f7b721f47c086d08b6838ae1a0c08f58caddb82428ba5f1407540f'
    }

    /**
     * Add an aye or nay vote for the sender to the given proposal.
     * 
     * Requires the sender to be a member.
     * 
     * Transaction fees will be waived if the member is voting on any particular proposal
     * for the first time and the call is successful. Subsequent vote changes will charge a
     * fee.
     * # <weight>
     * ## Weight
     * - `O(M)` where `M` is members-count (code- and governance-bounded)
     * - DB:
     *   - 1 storage read `Members` (codec `O(M)`)
     *   - 1 storage mutation `Voting` (codec `O(M)`)
     * - 1 event
     * # </weight>
     */
    get asEfinityV2(): {proposal: Uint8Array, index: number, approve: boolean} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalMembershipAddMemberCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalMembership.add_member')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add a member `who` to the set.
     * 
     * May only be called from `T::AddOrigin`.
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('TechnicalMembership.add_member') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
    }

    /**
     * Add a member `who` to the set.
     * 
     * May only be called from `T::AddOrigin`.
     */
    get asEfinityV2(): {who: Uint8Array} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a member `who` to the set.
     * 
     * May only be called from `T::AddOrigin`.
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('TechnicalMembership.add_member') === '1642934df325db16ad3ad3f83bb2200cdde93b508c653dc7b78049e7e8d67223'
    }

    /**
     * Add a member `who` to the set.
     * 
     * May only be called from `T::AddOrigin`.
     */
    get asEfinityV3000(): {who: efinityV3000.MultiAddress} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalMembershipChangeKeyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalMembership.change_key')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Swap out the sending member for some other key `new`.
     * 
     * May only be called from `Signed` origin of a current member.
     * 
     * Prime membership is passed from the origin account to `new`, if extant.
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('TechnicalMembership.change_key') === 'f866dcb3e8857987a2d21e57c13216c10bb21546a718b81d5e2c0989d6e95df7'
    }

    /**
     * Swap out the sending member for some other key `new`.
     * 
     * May only be called from `Signed` origin of a current member.
     * 
     * Prime membership is passed from the origin account to `new`, if extant.
     */
    get asEfinityV2(): {new: Uint8Array} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Swap out the sending member for some other key `new`.
     * 
     * May only be called from `Signed` origin of a current member.
     * 
     * Prime membership is passed from the origin account to `new`, if extant.
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('TechnicalMembership.change_key') === 'e634aac3331d47a56ff572c52ad90a648769dfbf2c00d7bd44498b4ee41f6ac7'
    }

    /**
     * Swap out the sending member for some other key `new`.
     * 
     * May only be called from `Signed` origin of a current member.
     * 
     * Prime membership is passed from the origin account to `new`, if extant.
     */
    get asEfinityV3000(): {new: efinityV3000.MultiAddress} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalMembershipClearPrimeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalMembership.clear_prime')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove the prime member if it exists.
     * 
     * May only be called from `T::PrimeOrigin`.
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('TechnicalMembership.clear_prime') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Remove the prime member if it exists.
     * 
     * May only be called from `T::PrimeOrigin`.
     */
    get asEfinityV2(): null {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalMembershipRemoveMemberCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalMembership.remove_member')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove a member `who` from the set.
     * 
     * May only be called from `T::RemoveOrigin`.
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('TechnicalMembership.remove_member') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
    }

    /**
     * Remove a member `who` from the set.
     * 
     * May only be called from `T::RemoveOrigin`.
     */
    get asEfinityV2(): {who: Uint8Array} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Remove a member `who` from the set.
     * 
     * May only be called from `T::RemoveOrigin`.
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('TechnicalMembership.remove_member') === '1642934df325db16ad3ad3f83bb2200cdde93b508c653dc7b78049e7e8d67223'
    }

    /**
     * Remove a member `who` from the set.
     * 
     * May only be called from `T::RemoveOrigin`.
     */
    get asEfinityV3000(): {who: efinityV3000.MultiAddress} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalMembershipResetMembersCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalMembership.reset_members')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Change the membership to a new set, disregarding the existing membership. Be nice and
     * pass `members` pre-sorted.
     * 
     * May only be called from `T::ResetOrigin`.
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('TechnicalMembership.reset_members') === 'd8adca14f9b9cadeaf2b2e6dd47991d05cb423ce3a00dccbb9efa35e36f5a65a'
    }

    /**
     * Change the membership to a new set, disregarding the existing membership. Be nice and
     * pass `members` pre-sorted.
     * 
     * May only be called from `T::ResetOrigin`.
     */
    get asEfinityV2(): {members: Uint8Array[]} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalMembershipSetPrimeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalMembership.set_prime')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the prime member. Must be a current member.
     * 
     * May only be called from `T::PrimeOrigin`.
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('TechnicalMembership.set_prime') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
    }

    /**
     * Set the prime member. Must be a current member.
     * 
     * May only be called from `T::PrimeOrigin`.
     */
    get asEfinityV2(): {who: Uint8Array} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Set the prime member. Must be a current member.
     * 
     * May only be called from `T::PrimeOrigin`.
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('TechnicalMembership.set_prime') === '1642934df325db16ad3ad3f83bb2200cdde93b508c653dc7b78049e7e8d67223'
    }

    /**
     * Set the prime member. Must be a current member.
     * 
     * May only be called from `T::PrimeOrigin`.
     */
    get asEfinityV3000(): {who: efinityV3000.MultiAddress} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalMembershipSwapMemberCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalMembership.swap_member')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Swap out one member `remove` for another `add`.
     * 
     * May only be called from `T::SwapOrigin`.
     * 
     * Prime membership is *not* passed from `remove` to `add`, if extant.
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('TechnicalMembership.swap_member') === 'f9cf5ef851567c52b54f359126b80e6fa967b49f082dd77310b8461819cd13df'
    }

    /**
     * Swap out one member `remove` for another `add`.
     * 
     * May only be called from `T::SwapOrigin`.
     * 
     * Prime membership is *not* passed from `remove` to `add`, if extant.
     */
    get asEfinityV2(): {remove: Uint8Array, add: Uint8Array} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Swap out one member `remove` for another `add`.
     * 
     * May only be called from `T::SwapOrigin`.
     * 
     * Prime membership is *not* passed from `remove` to `add`, if extant.
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('TechnicalMembership.swap_member') === '5efd724fae29eef6393e039bf2dbfd2d5a3081770cc9cc8a80a1475fd6b40cf4'
    }

    /**
     * Swap out one member `remove` for another `add`.
     * 
     * May only be called from `T::SwapOrigin`.
     * 
     * Prime membership is *not* passed from `remove` to `add`, if extant.
     */
    get asEfinityV3000(): {remove: efinityV3000.MultiAddress, add: efinityV3000.MultiAddress} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }
}

export class TimestampSetCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Timestamp.set')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the current time.
     * 
     * This call should be invoked exactly once per block. It will panic at the finalization
     * phase, if this call hasn't been invoked by that time.
     * 
     * The timestamp should be greater than the previous one by the amount specified by
     * `MinimumPeriod`.
     * 
     * The dispatch origin for this call must be `Inherent`.
     * 
     * # <weight>
     * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
     * - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in
     *   `on_finalize`)
     * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
     * # </weight>
     */
    get isEfinityV1(): boolean {
        return this._chain.getCallHash('Timestamp.set') === '6a8b8ba2be107f0853b674eec0026cc440b314db44d0e2c59b36e353355aed14'
    }

    /**
     * Set the current time.
     * 
     * This call should be invoked exactly once per block. It will panic at the finalization
     * phase, if this call hasn't been invoked by that time.
     * 
     * The timestamp should be greater than the previous one by the amount specified by
     * `MinimumPeriod`.
     * 
     * The dispatch origin for this call must be `Inherent`.
     * 
     * # <weight>
     * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
     * - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in
     *   `on_finalize`)
     * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
     * # </weight>
     */
    get asEfinityV1(): {now: bigint} {
        assert(this.isEfinityV1)
        return this._chain.decodeCall(this.call)
    }
}

export class UtilityAsDerivativeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Utility.as_derivative')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === '7ff669989eeb730f18e1dbefbf5a64f7c9e2a52c7de9438c471ba2656ee6dd04'
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get asEfinityV2(): {index: number, call: efinityV2.Call} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get isEfinityV3(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === '372d5898f4bcd5ad2160d1b2b710938400d6a7d7f01f37da58ee22c6e13fa7d0'
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get asEfinityV3(): {index: number, call: efinityV3.Call} {
        assert(this.isEfinityV3)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === 'f34ec90c57bdf853cbba36b5e7d6b06c58dc478589e11b705637854edc63caf3'
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get asEfinityV3000(): {index: number, call: efinityV3000.Call} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get isV3000(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === 'd68ab1ae1f3c01097a0648158a2c40b66177b7945f42b5f87092686387f81f09'
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get asV3000(): {index: number, call: v3000.Call} {
        assert(this.isV3000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get isV3010(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === '8d0b3f90bb7861c383fc41a68de7eb1df520b7242f521524bbff5bd42ea6d25e'
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get asV3010(): {index: number, call: v3010.Call} {
        assert(this.isV3010)
        return this._chain.decodeCall(this.call)
    }
}

export class UtilityBatchCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Utility.batch')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Utility.batch') === 'a437b3b71bdfc64c3b0d1174450cd1c80da46c0d3e6474273f2a019b5039571f'
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get asEfinityV2(): {calls: efinityV2.Call[]} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get isEfinityV3(): boolean {
        return this._chain.getCallHash('Utility.batch') === '9d7fe5e4c746f82073a3773ab3b7a6e5f8922a4ea8dad6e7909da9a5df1cadfa'
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get asEfinityV3(): {calls: efinityV3.Call[]} {
        assert(this.isEfinityV3)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('Utility.batch') === 'c42a5ff0868cb1e319accb8e1305a50a3c48a45c5425dab32c7a80f91b361708'
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get asEfinityV3000(): {calls: efinityV3000.Call[]} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get isV3000(): boolean {
        return this._chain.getCallHash('Utility.batch') === '89d260ef4d20c8ffe66bf0537a44e55ae4f336e4e4148c3295781ad4d23e3940'
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get asV3000(): {calls: v3000.Call[]} {
        assert(this.isV3000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get isV3010(): boolean {
        return this._chain.getCallHash('Utility.batch') === '97a8c8a8cfd6036ad743f8876e92ad1e518dc5e09dffd787aea6e03a2953d00f'
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get asV3010(): {calls: v3010.Call[]} {
        assert(this.isV3010)
        return this._chain.decodeCall(this.call)
    }
}

export class UtilityBatchAllCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Utility.batch_all')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === 'a437b3b71bdfc64c3b0d1174450cd1c80da46c0d3e6474273f2a019b5039571f'
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asEfinityV2(): {calls: efinityV2.Call[]} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isEfinityV3(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === '9d7fe5e4c746f82073a3773ab3b7a6e5f8922a4ea8dad6e7909da9a5df1cadfa'
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asEfinityV3(): {calls: efinityV3.Call[]} {
        assert(this.isEfinityV3)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === 'c42a5ff0868cb1e319accb8e1305a50a3c48a45c5425dab32c7a80f91b361708'
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asEfinityV3000(): {calls: efinityV3000.Call[]} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isV3000(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === '89d260ef4d20c8ffe66bf0537a44e55ae4f336e4e4148c3295781ad4d23e3940'
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asV3000(): {calls: v3000.Call[]} {
        assert(this.isV3000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isV3010(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === '97a8c8a8cfd6036ad743f8876e92ad1e518dc5e09dffd787aea6e03a2953d00f'
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asV3010(): {calls: v3010.Call[]} {
        assert(this.isV3010)
        return this._chain.decodeCall(this.call)
    }
}

export class UtilityDispatchAsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Utility.dispatch_as')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === '73e96fc69c1f27b676ab93125136237acf055551df3075f3d3b8d65d0f7217dd'
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    get asEfinityV2(): {asOrigin: efinityV2.OriginCaller, call: efinityV2.Call} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    get isEfinityV3(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === '7ae8c51eff672854c3de137262979b24be3a0ca30efd66f5a305b85c41649f2a'
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    get asEfinityV3(): {asOrigin: efinityV3.OriginCaller, call: efinityV3.Call} {
        assert(this.isEfinityV3)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === 'c9fcb54e9b1a4c922a4077e2bfe379483e4347076c5b100912ff8f5801093cfc'
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    get asEfinityV3000(): {asOrigin: efinityV3000.OriginCaller, call: efinityV3000.Call} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    get isV3000(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === '6106c9f6cf3f5b742913cd2920e9b2869f1d986fc3b3a81489075f201e8bec4f'
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    get asV3000(): {asOrigin: v3000.OriginCaller, call: v3000.Call} {
        assert(this.isV3000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    get isV3010(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === 'e55484334b6ed1b920d092c73886fa793bd78876ebaf6617859ad2c446d4d696'
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    get asV3010(): {asOrigin: v3010.OriginCaller, call: v3010.Call} {
        assert(this.isV3010)
        return this._chain.decodeCall(this.call)
    }
}

export class UtilityForceBatchCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Utility.force_batch')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === 'c42a5ff0868cb1e319accb8e1305a50a3c48a45c5425dab32c7a80f91b361708'
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asEfinityV3000(): {calls: efinityV3000.Call[]} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isV3000(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === '89d260ef4d20c8ffe66bf0537a44e55ae4f336e4e4148c3295781ad4d23e3940'
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asV3000(): {calls: v3000.Call[]} {
        assert(this.isV3000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isV3010(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === '97a8c8a8cfd6036ad743f8876e92ad1e518dc5e09dffd787aea6e03a2953d00f'
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asV3010(): {calls: v3010.Call[]} {
        assert(this.isV3010)
        return this._chain.decodeCall(this.call)
    }
}

export class VestingClaimCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Vesting.claim')
        this._chain = ctx._chain
        this.call = call
    }

    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Vesting.claim') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    get asEfinityV2(): null {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class VestingClaimForCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Vesting.claim_for')
        this._chain = ctx._chain
        this.call = call
    }

    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Vesting.claim_for') === 'b1b9d2bb9f2a27d3dfcb795f19a6625638978d1474d5d4dd34d918f46415e1e9'
    }

    get asEfinityV2(): {dest: efinityV2.MultiAddress} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class VestingUpdateVestingSchedulesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Vesting.update_vesting_schedules')
        this._chain = ctx._chain
        this.call = call
    }

    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Vesting.update_vesting_schedules') === '5cf5b6a09a9387300d4c3c69374c4045d3ca2a2794fa169a86fec9d8e1f3920c'
    }

    get asEfinityV2(): {who: efinityV2.MultiAddress, vestingSchedules: efinityV2.VestingSchedule[]} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class VestingVestedTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Vesting.vested_transfer')
        this._chain = ctx._chain
        this.call = call
    }

    get isEfinityV2(): boolean {
        return this._chain.getCallHash('Vesting.vested_transfer') === 'f1e312a24c806adf72eb68877c2620386cbfc53664014b14338b9491e044cb0d'
    }

    get asEfinityV2(): {dest: efinityV2.MultiAddress, schedule: efinityV2.VestingSchedule} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class VestingRegistrarClaimBatchCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'VestingRegistrar.claim_batch')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Batch claim for vested accounts
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('VestingRegistrar.claim_batch') === '12886a7697ff37821fd3068ef982fe5fe78bd390b2f49b4ad09eb1856aa01e23'
    }

    /**
     * Batch claim for vested accounts
     */
    get asEfinityV2(): {accounts: efinityV2.VestedAccount[]} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class VestingRegistrarRegisterBatchCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'VestingRegistrar.register_batch')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Register a batch of accounts and their vesting amounts.
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('VestingRegistrar.register_batch') === '5a91bb5342005787ddd27073836bcb94df9d7da26d615824a05b79bb0149a662'
    }

    /**
     * Register a batch of accounts and their vesting amounts.
     */
    get asEfinityV2(): {accounts: efinityV2.VestedAccount[], startBlockNumber: number, period: number, periodCount: number} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class XTokensTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XTokens.transfer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfer native currencies.
     * 
     * `dest_weight` is the weight for XCM execution on the dest chain, and
     * it would be charged from the transferred assets. If set below
     * requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    get isV3010(): boolean {
        return this._chain.getCallHash('XTokens.transfer') === 'bbea250da5b870fcc450c5713f8ca382c6be9150f794d30247c2586bed69713b'
    }

    /**
     * Transfer native currencies.
     * 
     * `dest_weight` is the weight for XCM execution on the dest chain, and
     * it would be charged from the transferred assets. If set below
     * requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    get asV3010(): {currencyId: v3010.AssetId, amount: bigint, dest: v3010.VersionedMultiLocation, destWeight: bigint} {
        assert(this.isV3010)
        return this._chain.decodeCall(this.call)
    }
}

export class XTokensTransferMultiassetCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XTokens.transfer_multiasset')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfer `MultiAsset`.
     * 
     * `dest_weight` is the weight for XCM execution on the dest chain, and
     * it would be charged from the transferred assets. If set below
     * requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    get isV3010(): boolean {
        return this._chain.getCallHash('XTokens.transfer_multiasset') === 'f33cd4d2466c1e767a4c2d9b00f7b71b359b07f3e78d76d466e3928a3e2ed9b8'
    }

    /**
     * Transfer `MultiAsset`.
     * 
     * `dest_weight` is the weight for XCM execution on the dest chain, and
     * it would be charged from the transferred assets. If set below
     * requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    get asV3010(): {asset: v3010.VersionedMultiAsset, dest: v3010.VersionedMultiLocation, destWeight: bigint} {
        assert(this.isV3010)
        return this._chain.decodeCall(this.call)
    }
}

export class XTokensTransferMultiassetWithFeeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XTokens.transfer_multiasset_with_fee')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfer `MultiAsset` specifying the fee and amount as separate.
     * 
     * `dest_weight` is the weight for XCM execution on the dest chain, and
     * it would be charged from the transferred assets. If set below
     * requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * `fee` is the multiasset to be spent to pay for execution in
     * destination chain. Both fee and amount will be subtracted form the
     * callers balance For now we only accept fee and asset having the same
     * `MultiLocation` id.
     * 
     * If `fee` is not high enough to cover for the execution costs in the
     * destination chain, then the assets will be trapped in the
     * destination chain
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    get isV3010(): boolean {
        return this._chain.getCallHash('XTokens.transfer_multiasset_with_fee') === '72aca3119f971190d4dd5493791879ff41295c5e290079c6179cb41be01e6226'
    }

    /**
     * Transfer `MultiAsset` specifying the fee and amount as separate.
     * 
     * `dest_weight` is the weight for XCM execution on the dest chain, and
     * it would be charged from the transferred assets. If set below
     * requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * `fee` is the multiasset to be spent to pay for execution in
     * destination chain. Both fee and amount will be subtracted form the
     * callers balance For now we only accept fee and asset having the same
     * `MultiLocation` id.
     * 
     * If `fee` is not high enough to cover for the execution costs in the
     * destination chain, then the assets will be trapped in the
     * destination chain
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    get asV3010(): {asset: v3010.VersionedMultiAsset, fee: v3010.VersionedMultiAsset, dest: v3010.VersionedMultiLocation, destWeight: bigint} {
        assert(this.isV3010)
        return this._chain.decodeCall(this.call)
    }
}

export class XTokensTransferMultiassetsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XTokens.transfer_multiassets')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfer several `MultiAsset` specifying the item to be used as fee
     * 
     * `dest_weight` is the weight for XCM execution on the dest chain, and
     * it would be charged from the transferred assets. If set below
     * requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * `fee_item` is index of the MultiAssets that we want to use for
     * payment
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    get isV3010(): boolean {
        return this._chain.getCallHash('XTokens.transfer_multiassets') === '2c9276a8e5652bef69d8e7f6f9bf7caccd48bb5ef0b25b42010d09b4b28b18c5'
    }

    /**
     * Transfer several `MultiAsset` specifying the item to be used as fee
     * 
     * `dest_weight` is the weight for XCM execution on the dest chain, and
     * it would be charged from the transferred assets. If set below
     * requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * `fee_item` is index of the MultiAssets that we want to use for
     * payment
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    get asV3010(): {assets: v3010.VersionedMultiAssets, feeItem: number, dest: v3010.VersionedMultiLocation, destWeight: bigint} {
        assert(this.isV3010)
        return this._chain.decodeCall(this.call)
    }
}

export class XTokensTransferMulticurrenciesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XTokens.transfer_multicurrencies')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfer several currencies specifying the item to be used as fee
     * 
     * `dest_weight` is the weight for XCM execution on the dest chain, and
     * it would be charged from the transferred assets. If set below
     * requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * `fee_item` is index of the currencies tuple that we want to use for
     * payment
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    get isV3010(): boolean {
        return this._chain.getCallHash('XTokens.transfer_multicurrencies') === '259744b22c01df2a349875df7b1f6506d0d5be2c8cdbd198bb3336649451f3fd'
    }

    /**
     * Transfer several currencies specifying the item to be used as fee
     * 
     * `dest_weight` is the weight for XCM execution on the dest chain, and
     * it would be charged from the transferred assets. If set below
     * requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * `fee_item` is index of the currencies tuple that we want to use for
     * payment
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    get asV3010(): {currencies: [v3010.AssetId, bigint][], feeItem: number, dest: v3010.VersionedMultiLocation, destWeight: bigint} {
        assert(this.isV3010)
        return this._chain.decodeCall(this.call)
    }
}

export class XTokensTransferWithFeeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XTokens.transfer_with_fee')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfer native currencies specifying the fee and amount as
     * separate.
     * 
     * `dest_weight` is the weight for XCM execution on the dest chain, and
     * it would be charged from the transferred assets. If set below
     * requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * `fee` is the amount to be spent to pay for execution in destination
     * chain. Both fee and amount will be subtracted form the callers
     * balance.
     * 
     * If `fee` is not high enough to cover for the execution costs in the
     * destination chain, then the assets will be trapped in the
     * destination chain
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    get isV3010(): boolean {
        return this._chain.getCallHash('XTokens.transfer_with_fee') === 'a382ce96e52f5ced746f2439c6f952ab49fe5c5e9ebe0cf3e17b4aea789fabb4'
    }

    /**
     * Transfer native currencies specifying the fee and amount as
     * separate.
     * 
     * `dest_weight` is the weight for XCM execution on the dest chain, and
     * it would be charged from the transferred assets. If set below
     * requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * `fee` is the amount to be spent to pay for execution in destination
     * chain. Both fee and amount will be subtracted form the callers
     * balance.
     * 
     * If `fee` is not high enough to cover for the execution costs in the
     * destination chain, then the assets will be trapped in the
     * destination chain
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    get asV3010(): {currencyId: v3010.AssetId, amount: bigint, fee: bigint, dest: v3010.VersionedMultiLocation, destWeight: bigint} {
        assert(this.isV3010)
        return this._chain.decodeCall(this.call)
    }
}

export class XcmpQueueResumeXcmExecutionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XcmpQueue.resume_xcm_execution')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Resumes all XCM executions for the XCMP queue.
     * 
     * Note that this function doesn't change the status of the in/out bound channels.
     * 
     * - `origin`: Must pass `ControllerOrigin`.
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('XcmpQueue.resume_xcm_execution') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Resumes all XCM executions for the XCMP queue.
     * 
     * Note that this function doesn't change the status of the in/out bound channels.
     * 
     * - `origin`: Must pass `ControllerOrigin`.
     */
    get asEfinityV2(): null {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class XcmpQueueServiceOverweightCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XcmpQueue.service_overweight')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Services a single overweight XCM.
     * 
     * - `origin`: Must pass `ExecuteOverweightOrigin`.
     * - `index`: The index of the overweight XCM to service
     * - `weight_limit`: The amount of weight that XCM execution may take.
     * 
     * Errors:
     * - `BadOverweightIndex`: XCM under `index` is not found in the `Overweight` storage map.
     * - `BadXcm`: XCM under `index` cannot be properly decoded into a valid XCM format.
     * - `WeightOverLimit`: XCM execution may use greater `weight_limit`.
     * 
     * Events:
     * - `OverweightServiced`: On success.
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('XcmpQueue.service_overweight') === 'f6b281f58290b6af96ac2dda36163d81223f37d0a8a100877e2526969a57d772'
    }

    /**
     * Services a single overweight XCM.
     * 
     * - `origin`: Must pass `ExecuteOverweightOrigin`.
     * - `index`: The index of the overweight XCM to service
     * - `weight_limit`: The amount of weight that XCM execution may take.
     * 
     * Errors:
     * - `BadOverweightIndex`: XCM under `index` is not found in the `Overweight` storage map.
     * - `BadXcm`: XCM under `index` cannot be properly decoded into a valid XCM format.
     * - `WeightOverLimit`: XCM execution may use greater `weight_limit`.
     * 
     * Events:
     * - `OverweightServiced`: On success.
     */
    get asEfinityV2(): {index: bigint, weightLimit: bigint} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Services a single overweight XCM.
     * 
     * - `origin`: Must pass `ExecuteOverweightOrigin`.
     * - `index`: The index of the overweight XCM to service
     * - `weight_limit`: The amount of weight that XCM execution may take.
     * 
     * Errors:
     * - `BadOverweightIndex`: XCM under `index` is not found in the `Overweight` storage map.
     * - `BadXcm`: XCM under `index` cannot be properly decoded into a valid XCM format.
     * - `WeightOverLimit`: XCM execution may use greater `weight_limit`.
     * 
     * Events:
     * - `OverweightServiced`: On success.
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('XcmpQueue.service_overweight') === '3e0d440993be1d69328adae3a1b30f3261ca945f8f307c396f4de7f51796a0c6'
    }

    /**
     * Services a single overweight XCM.
     * 
     * - `origin`: Must pass `ExecuteOverweightOrigin`.
     * - `index`: The index of the overweight XCM to service
     * - `weight_limit`: The amount of weight that XCM execution may take.
     * 
     * Errors:
     * - `BadOverweightIndex`: XCM under `index` is not found in the `Overweight` storage map.
     * - `BadXcm`: XCM under `index` cannot be properly decoded into a valid XCM format.
     * - `WeightOverLimit`: XCM execution may use greater `weight_limit`.
     * 
     * Events:
     * - `OverweightServiced`: On success.
     */
    get asEfinityV3000(): {index: bigint, weightLimit: efinityV3000.Weight} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }
}

export class XcmpQueueSuspendXcmExecutionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XcmpQueue.suspend_xcm_execution')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Suspends all XCM executions for the XCMP queue, regardless of the sender's origin.
     * 
     * - `origin`: Must pass `ControllerOrigin`.
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('XcmpQueue.suspend_xcm_execution') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Suspends all XCM executions for the XCMP queue, regardless of the sender's origin.
     * 
     * - `origin`: Must pass `ControllerOrigin`.
     */
    get asEfinityV2(): null {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class XcmpQueueUpdateDropThresholdCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XcmpQueue.update_drop_threshold')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Overwrites the number of pages of messages which must be in the queue after which we drop any further
     * messages from the channel.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.drop_threshold`
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('XcmpQueue.update_drop_threshold') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
    }

    /**
     * Overwrites the number of pages of messages which must be in the queue after which we drop any further
     * messages from the channel.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.drop_threshold`
     */
    get asEfinityV2(): {new: number} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class XcmpQueueUpdateResumeThresholdCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XcmpQueue.update_resume_threshold')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Overwrites the number of pages of messages which the queue must be reduced to before it signals that
     * message sending may recommence after it has been suspended.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.resume_threshold`
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('XcmpQueue.update_resume_threshold') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
    }

    /**
     * Overwrites the number of pages of messages which the queue must be reduced to before it signals that
     * message sending may recommence after it has been suspended.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.resume_threshold`
     */
    get asEfinityV2(): {new: number} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class XcmpQueueUpdateSuspendThresholdCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XcmpQueue.update_suspend_threshold')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Overwrites the number of pages of messages which must be in the queue for the other side to be told to
     * suspend their sending.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.suspend_value`
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('XcmpQueue.update_suspend_threshold') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
    }

    /**
     * Overwrites the number of pages of messages which must be in the queue for the other side to be told to
     * suspend their sending.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.suspend_value`
     */
    get asEfinityV2(): {new: number} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }
}

export class XcmpQueueUpdateThresholdWeightCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XcmpQueue.update_threshold_weight')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Overwrites the amount of remaining weight under which we stop processing messages.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.threshold_weight`
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('XcmpQueue.update_threshold_weight') === '8768ae636c927ffed8b3cb5f0df1e15afb0921835e5bc84b9495f4b39ea663b7'
    }

    /**
     * Overwrites the amount of remaining weight under which we stop processing messages.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.threshold_weight`
     */
    get asEfinityV2(): {new: bigint} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Overwrites the amount of remaining weight under which we stop processing messages.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.threshold_weight`
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('XcmpQueue.update_threshold_weight') === 'ceb02ac7f45638dcb446470f1d43ad1d0dd56ac82f1a2cd9432b8e99555f672c'
    }

    /**
     * Overwrites the amount of remaining weight under which we stop processing messages.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.threshold_weight`
     */
    get asEfinityV3000(): {new: efinityV3000.Weight} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }
}

export class XcmpQueueUpdateWeightRestrictDecayCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XcmpQueue.update_weight_restrict_decay')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Overwrites the speed to which the available weight approaches the maximum weight.
     * A lower number results in a faster progression. A value of 1 makes the entire weight available initially.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.weight_restrict_decay`.
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('XcmpQueue.update_weight_restrict_decay') === '8768ae636c927ffed8b3cb5f0df1e15afb0921835e5bc84b9495f4b39ea663b7'
    }

    /**
     * Overwrites the speed to which the available weight approaches the maximum weight.
     * A lower number results in a faster progression. A value of 1 makes the entire weight available initially.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.weight_restrict_decay`.
     */
    get asEfinityV2(): {new: bigint} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Overwrites the speed to which the available weight approaches the maximum weight.
     * A lower number results in a faster progression. A value of 1 makes the entire weight available initially.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.weight_restrict_decay`.
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('XcmpQueue.update_weight_restrict_decay') === 'ceb02ac7f45638dcb446470f1d43ad1d0dd56ac82f1a2cd9432b8e99555f672c'
    }

    /**
     * Overwrites the speed to which the available weight approaches the maximum weight.
     * A lower number results in a faster progression. A value of 1 makes the entire weight available initially.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.weight_restrict_decay`.
     */
    get asEfinityV3000(): {new: efinityV3000.Weight} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }
}

export class XcmpQueueUpdateXcmpMaxIndividualWeightCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XcmpQueue.update_xcmp_max_individual_weight')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Overwrite the maximum amount of weight any individual message may consume.
     * Messages above this weight go into the overweight queue and may only be serviced explicitly.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.xcmp_max_individual_weight`.
     */
    get isEfinityV2(): boolean {
        return this._chain.getCallHash('XcmpQueue.update_xcmp_max_individual_weight') === '8768ae636c927ffed8b3cb5f0df1e15afb0921835e5bc84b9495f4b39ea663b7'
    }

    /**
     * Overwrite the maximum amount of weight any individual message may consume.
     * Messages above this weight go into the overweight queue and may only be serviced explicitly.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.xcmp_max_individual_weight`.
     */
    get asEfinityV2(): {new: bigint} {
        assert(this.isEfinityV2)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Overwrite the maximum amount of weight any individual message may consume.
     * Messages above this weight go into the overweight queue and may only be serviced explicitly.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.xcmp_max_individual_weight`.
     */
    get isEfinityV3000(): boolean {
        return this._chain.getCallHash('XcmpQueue.update_xcmp_max_individual_weight') === 'ceb02ac7f45638dcb446470f1d43ad1d0dd56ac82f1a2cd9432b8e99555f672c'
    }

    /**
     * Overwrite the maximum amount of weight any individual message may consume.
     * Messages above this weight go into the overweight queue and may only be serviced explicitly.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.xcmp_max_individual_weight`.
     */
    get asEfinityV3000(): {new: efinityV3000.Weight} {
        assert(this.isEfinityV3000)
        return this._chain.decodeCall(this.call)
    }
}
