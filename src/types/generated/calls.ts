import assert from 'assert'
import {Chain, ChainContext, CallContext, Call, Result, Option} from './support'
import * as efinityV1 from './efinityV1'
import * as v500 from './v500'
import * as rocfinityV3012 from './rocfinityV3012'
import * as v600 from './v600'
import * as v601 from './v601'
import * as v602 from './v602'
import * as efinityV2 from './efinityV2'
import * as efinityV3 from './efinityV3'
import * as efinityV3000 from './efinityV3000'
import * as efinityV3012 from './efinityV3012'

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

export class BalancesForceSetBalanceCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Balances.force_set_balance')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the regular balance of a given account.
     * 
     * The dispatch origin for this call is `root`.
     */
    get isV602(): boolean {
        return this._chain.getCallHash('Balances.force_set_balance') === 'd0f1dc28aeba8805f92a7e983d0fba2621912dc1665264dd9c38cd3c0c912737'
    }

    /**
     * Set the regular balance of a given account.
     * 
     * The dispatch origin for this call is `root`.
     */
    get asV602(): {who: v602.MultiAddress, newFree: bigint} {
        assert(this.isV602)
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

export class BalancesSetBalanceDeprecatedCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Balances.set_balance_deprecated')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the regular balance of a given account; it also takes a reserved balance but this
     * must be the same as the account's current reserved balance.
     * 
     * The dispatch origin for this call is `root`.
     * 
     * WARNING: This call is DEPRECATED! Use `force_set_balance` instead.
     */
    get isV602(): boolean {
        return this._chain.getCallHash('Balances.set_balance_deprecated') === 'cd8eaf83a985e64a94900c5c58bbc2bbd20e03f5d571cf6065020f1a4281ff19'
    }

    /**
     * Set the regular balance of a given account; it also takes a reserved balance but this
     * must be the same as the account's current reserved balance.
     * 
     * The dispatch origin for this call is `root`.
     * 
     * WARNING: This call is DEPRECATED! Use `force_set_balance` instead.
     */
    get asV602(): {who: v602.MultiAddress, newFree: bigint, oldReserved: bigint} {
        assert(this.isV602)
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

export class BalancesTransferAllowDeathCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Balances.transfer_allow_death')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfer some liquid free balance to another account.
     * 
     * `transfer_allow_death` will set the `FreeBalance` of the sender and receiver.
     * If the sender's account is below the existential deposit as a result
     * of the transfer, the account will be reaped.
     * 
     * The dispatch origin for this call must be `Signed` by the transactor.
     */
    get isV602(): boolean {
        return this._chain.getCallHash('Balances.transfer_allow_death') === 'fc85bea9d0d171982f66e8a55667d58dc9a1612bcafe84309942bf47e23e3094'
    }

    /**
     * Transfer some liquid free balance to another account.
     * 
     * `transfer_allow_death` will set the `FreeBalance` of the sender and receiver.
     * If the sender's account is below the existential deposit as a result
     * of the transfer, the account will be reaped.
     * 
     * The dispatch origin for this call must be `Signed` by the transactor.
     */
    get asV602(): {dest: v602.MultiAddress, value: bigint} {
        assert(this.isV602)
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

export class BalancesUpgradeAccountsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Balances.upgrade_accounts')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Upgrade a specified account.
     * 
     * - `origin`: Must be `Signed`.
     * - `who`: The account to be upgraded.
     * 
     * This will waive the transaction fee if at least all but 10% of the accounts needed to
     * be upgraded. (We let some not have to be upgraded just in order to allow for the
     * possibililty of churn).
     */
    get isV602(): boolean {
        return this._chain.getCallHash('Balances.upgrade_accounts') === 'e074d5a93414f189b47fbb5d94c57b62cfb9e63808a3c94665eeb2cfe53be8df'
    }

    /**
     * Upgrade a specified account.
     * 
     * - `origin`: Must be `Signed`.
     * - `who`: The account to be upgraded.
     * 
     * This will waive the transaction fee if at least all but 10% of the accounts needed to
     * be upgraded. (We let some not have to be upgraded just in order to allow for the
     * possibililty of churn).
     */
    get asV602(): {who: Uint8Array[]} {
        assert(this.isV602)
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

export class ClaimsApproveClaimsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Claims.approve_claims')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * It takes a list of transaction hashes and approves the claims for those transactions
     * 
     * Parameters:
     * 
     * * `origin`: OriginFor<T>
     * * `block_number`: The block number of the Latest ETH block of Approver
     * * `batch_data`: This is a vector of transaction hashes.
     * * `chain`: The chain that the transactions are from (Ethereum/Efinity Parachain).
     * 
     * Returns:
     * 
     * DispatchResult
     * </weight>
     * The weight of this call is invariant over the input parameters.
     * Weight includes logic to iterate over pending approval ETH transaction
     * And approve the pending ETH transaction
     * 
     * Total Complexity: O(N)
     * </weight>
     */
    get isV500(): boolean {
        return this._chain.getCallHash('Claims.approve_claims') === 'bfe7af9c4d6496e02e0b9c2f94b1a9e975d6fd5be09fcbf5a33329375e20c7cf'
    }

    /**
     * It takes a list of transaction hashes and approves the claims for those transactions
     * 
     * Parameters:
     * 
     * * `origin`: OriginFor<T>
     * * `block_number`: The block number of the Latest ETH block of Approver
     * * `batch_data`: This is a vector of transaction hashes.
     * * `chain`: The chain that the transactions are from (Ethereum/Efinity Parachain).
     * 
     * Returns:
     * 
     * DispatchResult
     * </weight>
     * The weight of this call is invariant over the input parameters.
     * Weight includes logic to iterate over pending approval ETH transaction
     * And approve the pending ETH transaction
     * 
     * Total Complexity: O(N)
     * </weight>
     */
    get asV500(): {blockNumber: number, batchData: [Uint8Array, (number | undefined)][], chain: v500.Chain} {
        assert(this.isV500)
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

export class ClaimsClaimFromEfinityCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Claims.claim_from_efinity')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Claim Enjin that was burned on the Efinity Parachain.
     * Optionally provide an alternate destination.
     * 
     * Caller must be the same as the account that burned the EFI.
     * 
     * Parameters:
     * - `origin`: The account that burned the EFI.
     * - `dest`: The destination account to payout the claim. If None, the caller is used.
     */
    get isV500(): boolean {
        return this._chain.getCallHash('Claims.claim_from_efinity') === '668e91341797bf94bb751499e22a0ac0612a896d75f159be357f45d7cf102c1a'
    }

    /**
     * Claim Enjin that was burned on the Efinity Parachain.
     * Optionally provide an alternate destination.
     * 
     * Caller must be the same as the account that burned the EFI.
     * 
     * Parameters:
     * - `origin`: The account that burned the EFI.
     * - `dest`: The destination account to payout the claim. If None, the caller is used.
     */
    get asV500(): {dest: (Uint8Array | undefined)} {
        assert(this.isV500)
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

export class ClaimsMintEnjFromNativeEfiCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Claims.mint_enj_from_native_efi')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Bridge EFI from the Efinity parachain to the Enjin Relay Chain
     * 
     * Parameters:
     * - `origin`: The account initiating the claim and from which EFI will be burned.
     * - `amount`: Number of EFIs to burn in order to bridge to the Enjin Relay Chain. The
     * conversion rate will be according to the `ExchangeRate` storage on the Enjin Relay
     * Chain.
     */
    get isV500(): boolean {
        return this._chain.getCallHash('Claims.mint_enj_from_native_efi') === 'a3bdd43eed59e7b65720eef9b2dfe72389ca71ac9dbe7fe2874438aae4f18886'
    }

    /**
     * Bridge EFI from the Efinity parachain to the Enjin Relay Chain
     * 
     * Parameters:
     * - `origin`: The account initiating the claim and from which EFI will be burned.
     * - `amount`: Number of EFIs to burn in order to bridge to the Enjin Relay Chain. The
     * conversion rate will be according to the `ExchangeRate` storage on the Enjin Relay
     * Chain.
     */
    get asV500(): {amount: bigint} {
        assert(this.isV500)
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

    /**
     * `move_claim` moves the claim from one Ethereum address to another
     * 
     * Arguments:
     * 
     * * `origin`: OriginFor<T>
     * * `old`: EthereumAddress,
     * * `new`: EthereumAddress,
     * 
     * Returns:
     * 
     * DispatchResultWithPostInfo
     * 
     * <weight>
     * The weight of this call is invariant over the input parameters.
     * 
     * Total Complexity: O(1)
     * </weight>
     */
    get isV500(): boolean {
        return this._chain.getCallHash('Claims.move_claim') === 'cd849edba2cd433399c9d865ac4e953cb579c5080c4dc0941d23eedd023327fa'
    }

    /**
     * `move_claim` moves the claim from one Ethereum address to another
     * 
     * Arguments:
     * 
     * * `origin`: OriginFor<T>
     * * `old`: EthereumAddress,
     * * `new`: EthereumAddress,
     * 
     * Returns:
     * 
     * DispatchResultWithPostInfo
     * 
     * <weight>
     * The weight of this call is invariant over the input parameters.
     * 
     * Total Complexity: O(1)
     * </weight>
     */
    get asV500(): {old: v500.Account, new: v500.Account} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }
}

export class ClaimsRejectClaimsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Claims.reject_claims')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * `reject_claims` is a function that allows the `Approver` to reject a batch of claims
     * 
     * Arguments:
     * 
     * * `origin`: OriginFor<T>
     * * `batch_data`: A vector of transaction hashes.
     * 
     * Returns:
     * 
     * DispatchResult
     * </weight>
     * The weight of this call is invariant over the input parameters.
     * Weight includes logic to iterate over pending approval ETH transaction
     * And REMOVE the pending ETH transaction
     * 
     * Total Complexity: O(N)
     * </weight>
     */
    get isV500(): boolean {
        return this._chain.getCallHash('Claims.reject_claims') === '601314ffd448dede3ecc3d0eef396fdd3e6a0ffa494fcc8c06361853d804a633'
    }

    /**
     * `reject_claims` is a function that allows the `Approver` to reject a batch of claims
     * 
     * Arguments:
     * 
     * * `origin`: OriginFor<T>
     * * `batch_data`: A vector of transaction hashes.
     * 
     * Returns:
     * 
     * DispatchResult
     * </weight>
     * The weight of this call is invariant over the input parameters.
     * Weight includes logic to iterate over pending approval ETH transaction
     * And REMOVE the pending ETH transaction
     * 
     * Total Complexity: O(N)
     * </weight>
     */
    get asV500(): {batchData: [Uint8Array, (number | undefined)][]} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }
}

export class ClaimsRequestClaimsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Claims.request_claims')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * `request_claims` is a function that allows a relayer to request claims for a batch of
     * transactions
     * 
     * Parameters:
     * 
     * * `origin`: OriginFor<T>
     * * `block_number`: The block number of Ethereum or Parachain block that contains the
     *   transaction.
     * * `batch_data`: A vector of EthereumTransactionDataOf structs.
     * * `chain`: The chain that the transactions are from (Ethereum/Efinity Parachain).
     * 
     * Returns:
     * 
     * DispatchResult
     * <weight>
     * The weight of this call is invariant over the input parameters.
     * Weight includes logic to iterate over pending approval ETH transaction
     * 
     * Total Complexity: O(N)
     * </weight>
     */
    get isV500(): boolean {
        return this._chain.getCallHash('Claims.request_claims') === '4223f850613b41b0a74ade8d6509f976b14ee2e5f9aff9bd0f9c686581eceec7'
    }

    /**
     * `request_claims` is a function that allows a relayer to request claims for a batch of
     * transactions
     * 
     * Parameters:
     * 
     * * `origin`: OriginFor<T>
     * * `block_number`: The block number of Ethereum or Parachain block that contains the
     *   transaction.
     * * `batch_data`: A vector of EthereumTransactionDataOf structs.
     * * `chain`: The chain that the transactions are from (Ethereum/Efinity Parachain).
     * 
     * Returns:
     * 
     * DispatchResult
     * <weight>
     * The weight of this call is invariant over the input parameters.
     * Weight includes logic to iterate over pending approval ETH transaction
     * 
     * Total Complexity: O(N)
     * </weight>
     */
    get asV500(): {blockNumber: number, batchData: v500.Claim[], chain: v500.Chain} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }
}

export class ClaimsSetExchangeRateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Claims.set_exchange_rate')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * `set_exchange_rate` is a function that can be called by Technical Committee or Root, and
     * it sets the exchange rate
     * 
     * Parameters:
     * 
     * * `origin`: OriginFor<T>
     * * `numerator`: u128,
     * * `denominator`: u128,
     * 
     * Returns:
     * 
     * DispatchResult
     * <weight>
     * The weight of this call is invariant over the input parameters.
     * 
     * Total Complexity: O(1)
     * </weight>
     */
    get isV500(): boolean {
        return this._chain.getCallHash('Claims.set_exchange_rate') === 'da214b06a2cf61183fd833c1552f319c06e2eddcf08a00a207b203ca34682446'
    }

    /**
     * `set_exchange_rate` is a function that can be called by Technical Committee or Root, and
     * it sets the exchange rate
     * 
     * Parameters:
     * 
     * * `origin`: OriginFor<T>
     * * `numerator`: u128,
     * * `denominator`: u128,
     * 
     * Returns:
     * 
     * DispatchResult
     * <weight>
     * The weight of this call is invariant over the input parameters.
     * 
     * Total Complexity: O(1)
     * </weight>
     */
    get asV500(): {numerator: bigint, denominator: bigint} {
        assert(this.isV500)
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
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('CollatorStaking.force_set_min_collator_stake') === '06eff2469bc17d7aebdedd42c10947459c1f0d4fae809ce8e19728d9c971339c'
    }

    /**
     * Set the MinCollatorStake amount
     * ForceOrigin call only
     */
    get asEfinityV3012(): {minCollatorStake: bigint} {
        assert(this.isEfinityV3012)
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
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('CollatorStaking.join_candidates') === 'f6b28a93d2ad8a91812f4261c4e03231091780b2314de37559af3b8f507099bc'
    }

    /**
     * Join the list of candidates for collation.
     */
    get asEfinityV3012(): {amount: bigint, rewardsCut: number} {
        assert(this.isEfinityV3012)
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
    get isRocfinityV3012(): boolean {
        return this._chain.getCallHash('Contracts.call') === '9b1b707b0f5c537afca26d44d0081d29092614e330ff3810d328d0342d6a1845'
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
    get asRocfinityV3012(): {dest: rocfinityV3012.MultiAddress, value: bigint, gasLimit: rocfinityV3012.Weight, storageDepositLimit: (bigint | undefined), data: Uint8Array} {
        assert(this.isRocfinityV3012)
        return this._chain.decodeCall(this.call)
    }
}

export class ContractsCallOldWeightCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Contracts.call_old_weight')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Deprecated version if [`Self::call`] for use in an in-storage `Call`.
     */
    get isRocfinityV3012(): boolean {
        return this._chain.getCallHash('Contracts.call_old_weight') === 'd96c8a6656d7a4d6af6d5d0d51dd36e041c9ea8a92a7ead343d711addd74780f'
    }

    /**
     * Deprecated version if [`Self::call`] for use in an in-storage `Call`.
     */
    get asRocfinityV3012(): {dest: rocfinityV3012.MultiAddress, value: bigint, gasLimit: bigint, storageDepositLimit: (bigint | undefined), data: Uint8Array} {
        assert(this.isRocfinityV3012)
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
    get isRocfinityV3012(): boolean {
        return this._chain.getCallHash('Contracts.instantiate') === '144f181b3afbf1b5f0fd6ab12277b9e2a4600a80dfdf6fa1aab631acc55d1bd1'
    }

    /**
     * Instantiates a contract from a previously deployed wasm binary.
     * 
     * This function is identical to [`Self::instantiate_with_code`] but without the
     * code deployment step. Instead, the `code_hash` of an on-chain deployed wasm binary
     * must be supplied.
     */
    get asRocfinityV3012(): {value: bigint, gasLimit: rocfinityV3012.Weight, storageDepositLimit: (bigint | undefined), codeHash: Uint8Array, data: Uint8Array, salt: Uint8Array} {
        assert(this.isRocfinityV3012)
        return this._chain.decodeCall(this.call)
    }
}

export class ContractsInstantiateOldWeightCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Contracts.instantiate_old_weight')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Deprecated version if [`Self::instantiate`] for use in an in-storage `Call`.
     */
    get isRocfinityV3012(): boolean {
        return this._chain.getCallHash('Contracts.instantiate_old_weight') === '065e28d4aca8ef55389ab2cdeb357c40056320f063a3db0a6c9157a597c14b5b'
    }

    /**
     * Deprecated version if [`Self::instantiate`] for use in an in-storage `Call`.
     */
    get asRocfinityV3012(): {value: bigint, gasLimit: bigint, storageDepositLimit: (bigint | undefined), codeHash: Uint8Array, data: Uint8Array, salt: Uint8Array} {
        assert(this.isRocfinityV3012)
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
    get isRocfinityV3012(): boolean {
        return this._chain.getCallHash('Contracts.instantiate_with_code') === 'f764596bd52fce313b3fe7a10bf25a782558f542e67923c0437000f75dc3d1c8'
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
    get asRocfinityV3012(): {value: bigint, gasLimit: rocfinityV3012.Weight, storageDepositLimit: (bigint | undefined), code: Uint8Array, data: Uint8Array, salt: Uint8Array} {
        assert(this.isRocfinityV3012)
        return this._chain.decodeCall(this.call)
    }
}

export class ContractsInstantiateWithCodeOldWeightCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Contracts.instantiate_with_code_old_weight')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Deprecated version if [`Self::instantiate_with_code`] for use in an in-storage `Call`.
     */
    get isRocfinityV3012(): boolean {
        return this._chain.getCallHash('Contracts.instantiate_with_code_old_weight') === '2204435764a14a39d7c13f6cffbf98550fcaad4cba9d91306fe99d88a718a62c'
    }

    /**
     * Deprecated version if [`Self::instantiate_with_code`] for use in an in-storage `Call`.
     */
    get asRocfinityV3012(): {value: bigint, gasLimit: bigint, storageDepositLimit: (bigint | undefined), code: Uint8Array, data: Uint8Array, salt: Uint8Array} {
        assert(this.isRocfinityV3012)
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
    get isRocfinityV3012(): boolean {
        return this._chain.getCallHash('Contracts.remove_code') === '9e5c86c297bd88fae31bc40119e44695818ddc3ab8842b90daeb12771005c70d'
    }

    /**
     * Remove the code stored under `code_hash` and refund the deposit to its owner.
     * 
     * A code can only be removed by its original uploader (its owner) and only if it is
     * not used by any contract.
     */
    get asRocfinityV3012(): {codeHash: Uint8Array} {
        assert(this.isRocfinityV3012)
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
    get isRocfinityV3012(): boolean {
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
    get asRocfinityV3012(): {dest: rocfinityV3012.MultiAddress, codeHash: Uint8Array} {
        assert(this.isRocfinityV3012)
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
     * - `determinism`: If this is set to any other value but [`Determinism::Deterministic`]
     *   then the only way to use this code is to delegate call into it from an offchain
     *   execution. Set to [`Determinism::Deterministic`] if in doubt.
     * 
     * # Note
     * 
     * Anyone can instantiate a contract from any uploaded code and thus prevent its removal.
     * To avoid this situation a constructor could employ access control so that it can
     * only be instantiated by permissioned entities. The same is true when uploading
     * through [`Self::instantiate_with_code`].
     */
    get isRocfinityV3012(): boolean {
        return this._chain.getCallHash('Contracts.upload_code') === '0611b158a1c5ea1399a178957cd7f7e3f18854c4cbba7eb06690c056695e0ff2'
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
     * - `determinism`: If this is set to any other value but [`Determinism::Deterministic`]
     *   then the only way to use this code is to delegate call into it from an offchain
     *   execution. Set to [`Determinism::Deterministic`] if in doubt.
     * 
     * # Note
     * 
     * Anyone can instantiate a contract from any uploaded code and thus prevent its removal.
     * To avoid this situation a constructor could employ access control so that it can
     * only be instantiated by permissioned entities. The same is true when uploading
     * through [`Self::instantiate_with_code`].
     */
    get asRocfinityV3012(): {code: Uint8Array, storageDepositLimit: (bigint | undefined), determinism: rocfinityV3012.Determinism} {
        assert(this.isRocfinityV3012)
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
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('Council.close') === 'a88911953f51bddf0f0aeafa7caa7ca904d30cdb24f940ff177d2acf7088d3bd'
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
    get asEfinityV3012(): {proposalHash: Uint8Array, index: number, proposalWeightBound: efinityV3012.Weight, lengthBound: number} {
        assert(this.isEfinityV3012)
        return this._chain.decodeCall(this.call)
    }
}

export class CouncilCloseOldWeightCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Council.close_old_weight')
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
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('Council.close_old_weight') === '45a5978a11ceb5a8b2c51f7152abaa939cd8bd4bcdc5e1162029cedba4b598ea'
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
    get asEfinityV3012(): {proposalHash: Uint8Array, index: number, proposalWeightBound: bigint, lengthBound: number} {
        assert(this.isEfinityV3012)
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
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('Council.execute') === '4a0db1d1ac89bb23b5eb6dff03a9c85c941f2680ae90c9a9bdb4c8672c57c08d'
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
    get asEfinityV3012(): {proposal: efinityV3012.Call, lengthBound: number} {
        assert(this.isEfinityV3012)
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
    get isRocfinityV3012(): boolean {
        return this._chain.getCallHash('Council.execute') === '87f0281405450ee112b448908a3bcf42da7d893ad165d52a6d5c35b8c1ce9b66'
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
    get asRocfinityV3012(): {proposal: rocfinityV3012.Call, lengthBound: number} {
        assert(this.isRocfinityV3012)
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
    get isV500(): boolean {
        return this._chain.getCallHash('Council.execute') === 'b1684a10f9b4cbd7534a667396ce6712277f00f197eb4426bdcfed491ee864b7'
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
    get asV500(): {proposal: v500.Call, lengthBound: number} {
        assert(this.isV500)
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
    get isV600(): boolean {
        return this._chain.getCallHash('Council.execute') === 'd6901228f970a7ae2b377b38ce7fcbcc5ca8e570b8bb8a9074c730eb13c496e3'
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
    get asV600(): {proposal: v600.Call, lengthBound: number} {
        assert(this.isV600)
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
    get isV601(): boolean {
        return this._chain.getCallHash('Council.execute') === 'b28b68a3dd66badc21cb53ab1687c9791a0b29bd28740e3160ea03bcf21db8de'
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
    get asV601(): {proposal: v601.Call, lengthBound: number} {
        assert(this.isV601)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * ## Complexity:
     * - `O(B + M + P)` where:
     * - `B` is `proposal` size in bytes (length-fee-bounded)
     * - `M` members-count (code-bounded)
     * - `P` complexity of dispatching `proposal`
     */
    get isV602(): boolean {
        return this._chain.getCallHash('Council.execute') === '42200a96ca0ad3184e9591f0d7f5892aff66f9f12198fcb806e1d22b72d800bc'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * ## Complexity:
     * - `O(B + M + P)` where:
     * - `B` is `proposal` size in bytes (length-fee-bounded)
     * - `M` members-count (code-bounded)
     * - `P` complexity of dispatching `proposal`
     */
    get asV602(): {proposal: v602.Call, lengthBound: number} {
        assert(this.isV602)
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
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('Council.propose') === 'eb8d9d9a45415f57c0dcfd377d320a6d62cba1fcab5ed714e29c38e28cf8a6db'
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
    get asEfinityV3012(): {threshold: number, proposal: efinityV3012.Call, lengthBound: number} {
        assert(this.isEfinityV3012)
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
    get isRocfinityV3012(): boolean {
        return this._chain.getCallHash('Council.propose') === '92e93213fc1be2618c82cb60eb5f08adc129866b15780fce524dab7d46bafcc9'
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
    get asRocfinityV3012(): {threshold: number, proposal: rocfinityV3012.Call, lengthBound: number} {
        assert(this.isRocfinityV3012)
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
    get isV500(): boolean {
        return this._chain.getCallHash('Council.propose') === '0421aa3212da1f969a95c3e263147e221be170c3d71c5640351252a233116229'
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
    get asV500(): {threshold: number, proposal: v500.Call, lengthBound: number} {
        assert(this.isV500)
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
    get isV600(): boolean {
        return this._chain.getCallHash('Council.propose') === '01c6baaf53b5331d0c41f0159db307f3aee5c6491ecfe4c33f046483b348303b'
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
    get asV600(): {threshold: number, proposal: v600.Call, lengthBound: number} {
        assert(this.isV600)
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
    get isV601(): boolean {
        return this._chain.getCallHash('Council.propose') === '4b61433e884dffa8d3067b5a199d91ba1d8ca839a709c084cf267410834076a1'
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
    get asV601(): {threshold: number, proposal: v601.Call, lengthBound: number} {
        assert(this.isV601)
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
     * ## Complexity
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     */
    get isV602(): boolean {
        return this._chain.getCallHash('Council.propose') === '76cf450a5e2cc8f4a9da4604e748109d1a44da950b89749a9b498ecc46913f7c'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * ## Complexity
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     */
    get asV602(): {threshold: number, proposal: v602.Call, lengthBound: number} {
        assert(this.isV602)
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

    /**
     * Schedule a referendum to be tabled once it is legal to schedule an external
     * referendum.
     * 
     * The dispatch origin of this call must be `ExternalOrigin`.
     * 
     * - `proposal_hash`: The preimage hash of the proposal.
     */
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('Democracy.external_propose') === 'e44fb402f80afe0e08cb6de5a4ed457a1a66e080379319fd281acd81eaf457ac'
    }

    /**
     * Schedule a referendum to be tabled once it is legal to schedule an external
     * referendum.
     * 
     * The dispatch origin of this call must be `ExternalOrigin`.
     * 
     * - `proposal_hash`: The preimage hash of the proposal.
     */
    get asEfinityV3012(): {proposal: efinityV3012.Bounded} {
        assert(this.isEfinityV3012)
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
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('Democracy.external_propose_default') === 'e44fb402f80afe0e08cb6de5a4ed457a1a66e080379319fd281acd81eaf457ac'
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
    get asEfinityV3012(): {proposal: efinityV3012.Bounded} {
        assert(this.isEfinityV3012)
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
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('Democracy.external_propose_majority') === 'e44fb402f80afe0e08cb6de5a4ed457a1a66e080379319fd281acd81eaf457ac'
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
    get asEfinityV3012(): {proposal: efinityV3012.Bounded} {
        assert(this.isEfinityV3012)
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
     */
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('Democracy.propose') === 'db924825c9fd40cb04a839b510db55dcdd425c7b06116ccd22d4834d1201e8db'
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
     */
    get asEfinityV3012(): {proposal: efinityV3012.Bounded, value: bigint} {
        assert(this.isEfinityV3012)
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

    /**
     * Signals agreement with a particular proposal.
     * 
     * The dispatch origin of this call must be _Signed_ and the sender
     * must have funds to cover the deposit, equal to the original deposit.
     * 
     * - `proposal`: The index of the proposal to second.
     */
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('Democracy.second') === '7ac80a800d6686f21181e7b5b45c8949dc5b807bc6ec111188c7c6850a21b898'
    }

    /**
     * Signals agreement with a particular proposal.
     * 
     * The dispatch origin of this call must be _Signed_ and the sender
     * must have funds to cover the deposit, equal to the original deposit.
     * 
     * - `proposal`: The index of the proposal to second.
     */
    get asEfinityV3012(): {proposal: number} {
        assert(this.isEfinityV3012)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracySetMetadataCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.set_metadata')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set or clear a metadata of a proposal or a referendum.
     * 
     * Parameters:
     * - `origin`: Must correspond to the `MetadataOwner`.
     *     - `ExternalOrigin` for an external proposal with the `SuperMajorityApprove`
     *       threshold.
     *     - `ExternalDefaultOrigin` for an external proposal with the `SuperMajorityAgainst`
     *       threshold.
     *     - `ExternalMajorityOrigin` for an external proposal with the `SimpleMajority`
     *       threshold.
     *     - `Signed` by a creator for a public proposal.
     *     - `Signed` to clear a metadata for a finished referendum.
     *     - `Root` to set a metadata for an ongoing referendum.
     * - `owner`: an identifier of a metadata owner.
     * - `maybe_hash`: The hash of an on-chain stored preimage. `None` to clear a metadata.
     */
    get isV602(): boolean {
        return this._chain.getCallHash('Democracy.set_metadata') === '8a33eb55343342fba9c677650a4010c3766a354183990db37b268b1fef0c72fe'
    }

    /**
     * Set or clear a metadata of a proposal or a referendum.
     * 
     * Parameters:
     * - `origin`: Must correspond to the `MetadataOwner`.
     *     - `ExternalOrigin` for an external proposal with the `SuperMajorityApprove`
     *       threshold.
     *     - `ExternalDefaultOrigin` for an external proposal with the `SuperMajorityAgainst`
     *       threshold.
     *     - `ExternalMajorityOrigin` for an external proposal with the `SimpleMajority`
     *       threshold.
     *     - `Signed` by a creator for a public proposal.
     *     - `Signed` to clear a metadata for a finished referendum.
     *     - `Root` to set a metadata for an ongoing referendum.
     * - `owner`: an identifier of a metadata owner.
     * - `maybe_hash`: The hash of an on-chain stored preimage. `None` to clear a metadata.
     */
    get asV602(): {owner: v602.MetadataOwner, maybeHash: (Uint8Array | undefined)} {
        assert(this.isV602)
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
    get isEfinityV3012(): boolean {
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
    get asEfinityV3012(): {index: bigint, weightLimit: bigint} {
        assert(this.isEfinityV3012)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Service a single overweight message.
     */
    get isV500(): boolean {
        return this._chain.getCallHash('DmpQueue.service_overweight') === '80fae8875bf513efc1e06b7dac547fccfc1e5fc45888cc8afd9b43812cf51bf5'
    }

    /**
     * Service a single overweight message.
     */
    get asV500(): {index: bigint, weightLimit: v500.Weight} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }
}

export class EfinityUtilityBatchCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EfinityUtility.batch')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Dispatch a batch of calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     */
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('EfinityUtility.batch') === 'adbb1f5258ae575b6a58282fce2e6fb6f8ae7b811e4cbf4cecfabb6bf091bf10'
    }

    /**
     * Dispatch a batch of calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     */
    get asEfinityV3012(): {calls: efinityV3012.Call[], continueOnFailure: boolean} {
        assert(this.isEfinityV3012)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a batch of calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     */
    get isRocfinityV3012(): boolean {
        return this._chain.getCallHash('EfinityUtility.batch') === 'b1689eefbd8b66daf8769783c9eb2bf9c76b38f20577024c26cc71282cd018df'
    }

    /**
     * Dispatch a batch of calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     */
    get asRocfinityV3012(): {calls: rocfinityV3012.Call[], continueOnFailure: boolean} {
        assert(this.isRocfinityV3012)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a batch of calls.
     * 
     * May be called from any origin except [`None`].
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing [`frame_system::Config::BaseCallFilter`]).
     * 
     * # Errors
     * 
     * - [`Error::TooManyCalls`]: If the number of calls exceeds the limit.
     */
    get isV500(): boolean {
        return this._chain.getCallHash('EfinityUtility.batch') === '222373d64cf1eada55d5fb98c3cdc449919dd4025d049d20c587ed0764b4380c'
    }

    /**
     * Dispatch a batch of calls.
     * 
     * May be called from any origin except [`None`].
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing [`frame_system::Config::BaseCallFilter`]).
     * 
     * # Errors
     * 
     * - [`Error::TooManyCalls`]: If the number of calls exceeds the limit.
     */
    get asV500(): {calls: v500.Call[], continueOnFailure: boolean} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a batch of calls.
     * 
     * May be called from any origin except [`None`].
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing [`frame_system::Config::BaseCallFilter`]).
     * 
     * # Errors
     * 
     * - [`Error::TooManyCalls`]: If the number of calls exceeds the limit.
     */
    get isV600(): boolean {
        return this._chain.getCallHash('EfinityUtility.batch') === '99e2a6c6410b697d79064ade2c3db43ff848c3fd40cb46b5028b79e34ce8e894'
    }

    /**
     * Dispatch a batch of calls.
     * 
     * May be called from any origin except [`None`].
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing [`frame_system::Config::BaseCallFilter`]).
     * 
     * # Errors
     * 
     * - [`Error::TooManyCalls`]: If the number of calls exceeds the limit.
     */
    get asV600(): {calls: v600.Call[], continueOnFailure: boolean} {
        assert(this.isV600)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a batch of calls.
     * 
     * May be called from any origin except [`None`].
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing [`frame_system::Config::BaseCallFilter`]).
     * 
     * # Errors
     * 
     * - [`Error::TooManyCalls`]: If the number of calls exceeds the limit.
     */
    get isV601(): boolean {
        return this._chain.getCallHash('EfinityUtility.batch') === 'd95d104b78102649e6953ef939c20300f8c36c6708491ef89af765114cef5f02'
    }

    /**
     * Dispatch a batch of calls.
     * 
     * May be called from any origin except [`None`].
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing [`frame_system::Config::BaseCallFilter`]).
     * 
     * # Errors
     * 
     * - [`Error::TooManyCalls`]: If the number of calls exceeds the limit.
     */
    get asV601(): {calls: v601.Call[], continueOnFailure: boolean} {
        assert(this.isV601)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a batch of calls.
     * 
     * May be called from any origin except [`None`].
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing [`frame_system::Config::BaseCallFilter`]).
     * 
     * # Errors
     * 
     * - [`Error::TooManyCalls`]: If the number of calls exceeds the limit.
     */
    get isV602(): boolean {
        return this._chain.getCallHash('EfinityUtility.batch') === 'dd2a066a0172c7756e255e30b3d0481350b34530bd3695fa8f8f50cd672dc33a'
    }

    /**
     * Dispatch a batch of calls.
     * 
     * May be called from any origin except [`None`].
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing [`frame_system::Config::BaseCallFilter`]).
     * 
     * # Errors
     * 
     * - [`Error::TooManyCalls`]: If the number of calls exceeds the limit.
     */
    get asV602(): {calls: v602.Call[], continueOnFailure: boolean} {
        assert(this.isV602)
        return this._chain.decodeCall(this.call)
    }
}

export class EfinityXcmForceSetMinimumWeightCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EfinityXcm.force_set_minimum_weight')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Update xcm fees amount to be used in xcm.Withdraw message
     */
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('EfinityXcm.force_set_minimum_weight') === '267efe07666c8afefd16420b4956a7fd0562d42740846fcce2b3cfde567ac845'
    }

    /**
     * Update xcm fees amount to be used in xcm.Withdraw message
     */
    get asEfinityV3012(): {xcmCall: efinityV3012.XcmOperation, xcmWeightFeeMisc: efinityV3012.MinimumWeightFeePair} {
        assert(this.isEfinityV3012)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Update xcm fees amount to be used in xcm.Withdraw message
     */
    get isV500(): boolean {
        return this._chain.getCallHash('EfinityXcm.force_set_minimum_weight') === '4c92aee9cd2c92a06e50e7ae691000178c9980b7f9c4e035739e193479d9f615'
    }

    /**
     * Update xcm fees amount to be used in xcm.Withdraw message
     */
    get asV500(): {xcmCall: v500.XcmOperation, xcmWeightFeeMisc: v500.MinimumWeightFeePair} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }
}

export class EfinityXcmTransferAssetToParachainCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EfinityXcm.transfer_asset_to_parachain')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * `origin` transfers `amount` of `asset` to `beneficiary` on the `parachain`
     * 
     * Note: `asset` needs to be registered as foreign token in destination parachain
     * 
     * - `para_id`: destination parachain
     * - `beneficiary`: account to receive `asset` in destination parachain
     * - `asset`: asset to transfer
     * - `amount`: amount of `asset` to transfer
     * - `dest_weight`: optional weight to be paid in destination chain, unlimited in case it's
     *   `None`
     * 
     * # Errors
     * 
     * - `InvalidAccountId`: `beneficiary` is invalid, i.e could not be converted to
     */
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('EfinityXcm.transfer_asset_to_parachain') === 'a90715f430da7f543e76cf34a7a4c94eb884910fb6830c2daffdfc04e9613447'
    }

    /**
     * `origin` transfers `amount` of `asset` to `beneficiary` on the `parachain`
     * 
     * Note: `asset` needs to be registered as foreign token in destination parachain
     * 
     * - `para_id`: destination parachain
     * - `beneficiary`: account to receive `asset` in destination parachain
     * - `asset`: asset to transfer
     * - `amount`: amount of `asset` to transfer
     * - `dest_weight`: optional weight to be paid in destination chain, unlimited in case it's
     *   `None`
     * 
     * # Errors
     * 
     * - `InvalidAccountId`: `beneficiary` is invalid, i.e could not be converted to
     */
    get asEfinityV3012(): {paraId: efinityV3012.ParachainId, beneficiary: efinityV3012.Account, assetId: efinityV3012.AssetId, amount: bigint, destWeight: (bigint | undefined)} {
        assert(this.isEfinityV3012)
        return this._chain.decodeCall(this.call)
    }

    /**
     * `origin` transfers `amount` of `asset` to `beneficiary` on the `parachain`
     * 
     * Note: `asset` needs to be registered as foreign token in destination parachain
     * 
     * - `para_id`: destination parachain
     * - `beneficiary`: account to receive `asset` in destination parachain
     * - `asset`: asset to transfer
     * - `amount`: amount of `asset` to transfer
     * - `dest_weight`: optional weight to be paid in destination chain, unlimited in case it's
     *   `None`
     * 
     * # Errors
     * 
     * - [`Error::InvalidAddress`]: `beneficiary` is invalid, i.e could not be converted to
     *   [`MultiLocation`]
     * - [`Error::NotTransferable`]: A corresponding multilocation could not be converted for
     *   the asset.
     */
    get isV500(): boolean {
        return this._chain.getCallHash('EfinityXcm.transfer_asset_to_parachain') === '6e0995af8a1271406f286250994b7e96ef4e950ec17addde0aa13d7dcf06db7e'
    }

    /**
     * `origin` transfers `amount` of `asset` to `beneficiary` on the `parachain`
     * 
     * Note: `asset` needs to be registered as foreign token in destination parachain
     * 
     * - `para_id`: destination parachain
     * - `beneficiary`: account to receive `asset` in destination parachain
     * - `asset`: asset to transfer
     * - `amount`: amount of `asset` to transfer
     * - `dest_weight`: optional weight to be paid in destination chain, unlimited in case it's
     *   `None`
     * 
     * # Errors
     * 
     * - [`Error::InvalidAddress`]: `beneficiary` is invalid, i.e could not be converted to
     *   [`MultiLocation`]
     * - [`Error::NotTransferable`]: A corresponding multilocation could not be converted for
     *   the asset.
     */
    get asV500(): {paraId: v500.ParachainId, beneficiary: v500.Account, currencyId: v500.AssetId, amount: bigint, destWeight: (bigint | undefined)} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }
}

export class EfinityXcmTransferAssetWithFeeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EfinityXcm.transfer_asset_with_fee')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * `origin` transfers `asset` to `beneficiary` at `parachain` using `fee_asset` for
     * the fee. This allows the transfer of custom assets like a non-fungible which
     * cannot be used to pay fees.
     * 
     * Note: each [`MultiAsset`] must be registered as a foreign asset at the destination
     * parachain.
     * 
     * - `asset`: asset to transfer
     * - `fee_asset`: asset to be used as fee
     * - `beneficiary`: account to receive `asset` in destination parachain
     * - `para_id`: destination parachain
     * - `dest_weight`: optional weight to be paid in destination chain, unlimited in case it's
     * 
     * # Errors
     * - [`Error::InvalidAddress`]: `beneficiary` is invalid, i.e could not be converted to
     *   [`MultiLocation`]
     */
    get isV500(): boolean {
        return this._chain.getCallHash('EfinityXcm.transfer_asset_with_fee') === '253afe02afbaf582b39ed2b492eb0493066e690147b56578b4e8b20fb470b444'
    }

    /**
     * `origin` transfers `asset` to `beneficiary` at `parachain` using `fee_asset` for
     * the fee. This allows the transfer of custom assets like a non-fungible which
     * cannot be used to pay fees.
     * 
     * Note: each [`MultiAsset`] must be registered as a foreign asset at the destination
     * parachain.
     * 
     * - `asset`: asset to transfer
     * - `fee_asset`: asset to be used as fee
     * - `beneficiary`: account to receive `asset` in destination parachain
     * - `para_id`: destination parachain
     * - `dest_weight`: optional weight to be paid in destination chain, unlimited in case it's
     * 
     * # Errors
     * - [`Error::InvalidAddress`]: `beneficiary` is invalid, i.e could not be converted to
     *   [`MultiLocation`]
     */
    get asV500(): {assetPair: v500.CurrencyIdAmountPair, feePair: v500.CurrencyIdAmountPair, paraId: v500.ParachainId, beneficiary: v500.Account, destWeight: (bigint | undefined)} {
        assert(this.isV500)
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

export class EfinityXcmTransferToParachainCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EfinityXcm.transfer_to_parachain')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * `origin` transfers `amount` of EFI to `beneficiary` on the `parachain`
     * 
     * Note: EFI needs to be registered as foreign token in destination parachain
     * 
     * - `para_id`: destination parachain
     * - `beneficiary`: account to receive EFI in destination parachain
     * - `amount`: amount of EFI to transfer
     * - `dest_weight`: optional weight to be paid in destination chain, unlimited in case it's
     *   `None`
     * 
     * # Errors
     * 
     * - `InvalidAccountId`: `beneficiary` is invalid, i.e could not be converted to
     *   `MultiLocation`
     */
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('EfinityXcm.transfer_to_parachain') === 'b78bfbeb395c8dfe84788045085ed4230266e12ad40559a5ed1fdf518db02770'
    }

    /**
     * `origin` transfers `amount` of EFI to `beneficiary` on the `parachain`
     * 
     * Note: EFI needs to be registered as foreign token in destination parachain
     * 
     * - `para_id`: destination parachain
     * - `beneficiary`: account to receive EFI in destination parachain
     * - `amount`: amount of EFI to transfer
     * - `dest_weight`: optional weight to be paid in destination chain, unlimited in case it's
     *   `None`
     * 
     * # Errors
     * 
     * - `InvalidAccountId`: `beneficiary` is invalid, i.e could not be converted to
     *   `MultiLocation`
     */
    get asEfinityV3012(): {paraId: efinityV3012.ParachainId, beneficiary: efinityV3012.Account, amount: bigint, destWeight: (bigint | undefined)} {
        assert(this.isEfinityV3012)
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
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('ExtrinsicPause.pause_extrinsic') === 'b37dbe061d4a0562ae51404fbe21b6c4717730dec3175a4a9eb0a9d9c3b8fdd6'
    }

    /**
     * Pause execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     */
    get asEfinityV3012(): {call: efinityV3012.Call, pauseOnlyExtrinsic: boolean} {
        assert(this.isEfinityV3012)
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
    get isRocfinityV3012(): boolean {
        return this._chain.getCallHash('ExtrinsicPause.pause_extrinsic') === '3a016ad7f8a510ffbc43c0afc3ffad3c5952120d62da1a066db102cef66f7678'
    }

    /**
     * Pause execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     */
    get asRocfinityV3012(): {call: rocfinityV3012.Call, pauseOnlyExtrinsic: boolean} {
        assert(this.isRocfinityV3012)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Pause execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    get isV500(): boolean {
        return this._chain.getCallHash('ExtrinsicPause.pause_extrinsic') === '0af39b1686ce411113718180a54f1772da531d4bc731f731597729aba3694beb'
    }

    /**
     * Pause execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    get asV500(): {call: v500.Call, pauseOnlyExtrinsic: boolean} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Pause execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    get isV600(): boolean {
        return this._chain.getCallHash('ExtrinsicPause.pause_extrinsic') === '4897a0ef7b113f6bf936cbfcbee3cb6fe6f782bf9a5a5c186cc0b506d4536dec'
    }

    /**
     * Pause execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    get asV600(): {call: v600.Call, pauseOnlyExtrinsic: boolean} {
        assert(this.isV600)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Pause execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    get isV601(): boolean {
        return this._chain.getCallHash('ExtrinsicPause.pause_extrinsic') === '454008567728b06c3d19b326c93ff0969da986eb0d8d3c79b78760b59eb0eea2'
    }

    /**
     * Pause execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    get asV601(): {call: v601.Call, pauseOnlyExtrinsic: boolean} {
        assert(this.isV601)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Pause execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    get isV602(): boolean {
        return this._chain.getCallHash('ExtrinsicPause.pause_extrinsic') === 'e639aa3f54af8bd93376fd3ad9cd38feab86a31aded929c4e4539f869dc7b524'
    }

    /**
     * Pause execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    get asV602(): {call: v602.Call, pauseOnlyExtrinsic: boolean} {
        assert(this.isV602)
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
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('ExtrinsicPause.resume_extrinsic') === 'b48556c3aef4fbd26171c9030409f263315953b71c391b239314576e968eed5f'
    }

    /**
     * Resume execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     */
    get asEfinityV3012(): {call: efinityV3012.Call, resumeOnlyExtrinsic: boolean} {
        assert(this.isEfinityV3012)
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
    get isRocfinityV3012(): boolean {
        return this._chain.getCallHash('ExtrinsicPause.resume_extrinsic') === 'd15b976dc282a1da37a10793b600afa144444807780acbfefdf726aa6e1b4db2'
    }

    /**
     * Resume execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     */
    get asRocfinityV3012(): {call: rocfinityV3012.Call, resumeOnlyExtrinsic: boolean} {
        assert(this.isRocfinityV3012)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Resume execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    get isV500(): boolean {
        return this._chain.getCallHash('ExtrinsicPause.resume_extrinsic') === '11ff68736a7d4fd2445620971a06eee53707f8e93687aba6c9324b8abe3cae67'
    }

    /**
     * Resume execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    get asV500(): {call: v500.Call, resumeOnlyExtrinsic: boolean} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Resume execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    get isV600(): boolean {
        return this._chain.getCallHash('ExtrinsicPause.resume_extrinsic') === '67dffb9d3fe304fa8cc899616105f644f4bfaca90ae1e92390030903a6c3c896'
    }

    /**
     * Resume execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    get asV600(): {call: v600.Call, resumeOnlyExtrinsic: boolean} {
        assert(this.isV600)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Resume execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    get isV601(): boolean {
        return this._chain.getCallHash('ExtrinsicPause.resume_extrinsic') === '11a49786b673dfab243c2c0bd817f8814a9c5f6ea21d734469cedd237d71807c'
    }

    /**
     * Resume execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    get asV601(): {call: v601.Call, resumeOnlyExtrinsic: boolean} {
        assert(this.isV601)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Resume execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    get isV602(): boolean {
        return this._chain.getCallHash('ExtrinsicPause.resume_extrinsic') === '56baa24c62d8a1ba4fb71f41a348b0e33e0806f0cb9ec4ce7db3293338e8299c'
    }

    /**
     * Resume execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    get asV602(): {call: v602.Call, resumeOnlyExtrinsic: boolean} {
        assert(this.isV602)
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
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('FuelTanks.create_fuel_tank') === 'fc5a47e144adec6f8826f18ccd640dfb8d3268c41e7c26b02d3923b9c85ac708'
    }

    /**
     * Creates a fuel tank, given a descriptor
     * 
     * # Errors
     * - `FuelTankAlreadyExists` if `tank_id` already exists
     * - `DuplicateRuleKinds` if a rule set has multiple rules of the same kind
     */
    get asEfinityV3012(): {descriptor: efinityV3012.FuelTankDescriptor} {
        assert(this.isEfinityV3012)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Creates a fuel tank, given a descriptor
     * 
     * # Errors
     * - `FuelTankAlreadyExists` if `tank_id` already exists
     * - `DuplicateRuleKinds` if a rule set has multiple rules of the same kind
     */
    get isRocfinityV3012(): boolean {
        return this._chain.getCallHash('FuelTanks.create_fuel_tank') === 'b80235e13db298392f2a78a9bcf83dd5d935e965474364a33a6a6323e42f6e5a'
    }

    /**
     * Creates a fuel tank, given a descriptor
     * 
     * # Errors
     * - `FuelTankAlreadyExists` if `tank_id` already exists
     * - `DuplicateRuleKinds` if a rule set has multiple rules of the same kind
     */
    get asRocfinityV3012(): {descriptor: rocfinityV3012.FuelTankDescriptor} {
        assert(this.isRocfinityV3012)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Creates a fuel tank, given a descriptor
     * 
     * # Errors
     * 
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    get isV500(): boolean {
        return this._chain.getCallHash('FuelTanks.create_fuel_tank') === '7ec8cf7f4479591fa8d8df81a83204729676ec97ce9d3fdd6908a443056cd0dc'
    }

    /**
     * Creates a fuel tank, given a descriptor
     * 
     * # Errors
     * 
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    get asV500(): {descriptor: v500.FuelTankDescriptor} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Creates a fuel tank, given a descriptor
     * 
     * # Errors
     * 
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    get isV600(): boolean {
        return this._chain.getCallHash('FuelTanks.create_fuel_tank') === 'da330f1f88996f57d435c67b491fb932b02ecfe8034bc55c42af256dc1e582ae'
    }

    /**
     * Creates a fuel tank, given a descriptor
     * 
     * # Errors
     * 
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    get asV600(): {descriptor: v600.FuelTankDescriptor} {
        assert(this.isV600)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Creates a fuel tank, given a descriptor
     * 
     * # Errors
     * 
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    get isV601(): boolean {
        return this._chain.getCallHash('FuelTanks.create_fuel_tank') === '3e3ac599e23537bde5e89f9fe09e243762fba2eb4fbf6f4407875f25399ad188'
    }

    /**
     * Creates a fuel tank, given a descriptor
     * 
     * # Errors
     * 
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    get asV601(): {descriptor: v601.FuelTankDescriptor} {
        assert(this.isV601)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Creates a fuel tank, given a descriptor
     * 
     * # Errors
     * 
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    get isV602(): boolean {
        return this._chain.getCallHash('FuelTanks.create_fuel_tank') === 'd52b14b52799457965a0bb0bc8cce79ae30c8cb95cc1fac2a41ea56b1d169147'
    }

    /**
     * Creates a fuel tank, given a descriptor
     * 
     * # Errors
     * 
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    get asV602(): {descriptor: v602.FuelTankDescriptor} {
        assert(this.isV602)
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
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('FuelTanks.dispatch') === '5f4496965f11ba828010b866bad042eced30482f066679ce1bf3b7f87b4664b9'
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
    get asEfinityV3012(): {tankId: efinityV3012.MultiAddress, ruleSetId: number, call: efinityV3012.Call, paysRemainingFee: boolean} {
        assert(this.isEfinityV3012)
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
    get isRocfinityV3012(): boolean {
        return this._chain.getCallHash('FuelTanks.dispatch') === '76e6c92bb834e2ab85b4edaac54aa7351f5d41f7e87f479eeee6d17dd4deb5e9'
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
    get asRocfinityV3012(): {tankId: rocfinityV3012.MultiAddress, ruleSetId: number, call: rocfinityV3012.Call, paysRemainingFee: boolean} {
        assert(this.isRocfinityV3012)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     * 
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
     * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
     *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
     * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
     */
    get isV500(): boolean {
        return this._chain.getCallHash('FuelTanks.dispatch') === 'dcc80be694c3cf26e67023f951da7862390eda86a944795bd4b5fa9fa37f1a1b'
    }

    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     * 
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
     * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
     *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
     * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
     */
    get asV500(): {tankId: v500.MultiAddress, ruleSetId: number, call: v500.Call, paysRemainingFee: boolean} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     * 
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
     * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
     *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
     * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
     */
    get isV600(): boolean {
        return this._chain.getCallHash('FuelTanks.dispatch') === 'cfaa28808a6c787caf418b03415b24d3d9b7c7ffdfa48439a15bc9cb3b936b67'
    }

    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     * 
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
     * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
     *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
     * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
     */
    get asV600(): {tankId: v600.MultiAddress, ruleSetId: number, call: v600.Call, paysRemainingFee: boolean} {
        assert(this.isV600)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     * 
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
     * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
     *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
     * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
     */
    get isV601(): boolean {
        return this._chain.getCallHash('FuelTanks.dispatch') === '33c3dea7e41ee95ee38dc5f9da10e787ce4fe8eafd493e2244c878e62bf696a2'
    }

    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     * 
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
     * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
     *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
     * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
     */
    get asV601(): {tankId: v601.MultiAddress, ruleSetId: number, call: v601.Call, paysRemainingFee: boolean} {
        assert(this.isV601)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     * 
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
     * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
     *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
     * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
     */
    get isV602(): boolean {
        return this._chain.getCallHash('FuelTanks.dispatch') === '9ec0b4d6b3bc8cf6c2a46cb688669119f38ecbdb89add4439b95091fc49c8055'
    }

    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     * 
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
     * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
     *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
     * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
     */
    get asV602(): {tankId: v602.MultiAddress, ruleSetId: number, call: v602.Call, paysRemainingFee: boolean} {
        assert(this.isV602)
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
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('FuelTanks.dispatch_and_touch') === '5f4496965f11ba828010b866bad042eced30482f066679ce1bf3b7f87b4664b9'
    }

    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     * # Errors
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    get asEfinityV3012(): {tankId: efinityV3012.MultiAddress, ruleSetId: number, call: efinityV3012.Call, paysRemainingFee: boolean} {
        assert(this.isEfinityV3012)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     * # Errors
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    get isRocfinityV3012(): boolean {
        return this._chain.getCallHash('FuelTanks.dispatch_and_touch') === '76e6c92bb834e2ab85b4edaac54aa7351f5d41f7e87f479eeee6d17dd4deb5e9'
    }

    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     * # Errors
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    get asRocfinityV3012(): {tankId: rocfinityV3012.MultiAddress, ruleSetId: number, call: rocfinityV3012.Call, paysRemainingFee: boolean} {
        assert(this.isRocfinityV3012)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     * 
     * # Errors
     * 
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    get isV500(): boolean {
        return this._chain.getCallHash('FuelTanks.dispatch_and_touch') === 'dcc80be694c3cf26e67023f951da7862390eda86a944795bd4b5fa9fa37f1a1b'
    }

    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     * 
     * # Errors
     * 
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    get asV500(): {tankId: v500.MultiAddress, ruleSetId: number, call: v500.Call, paysRemainingFee: boolean} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     * 
     * # Errors
     * 
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    get isV600(): boolean {
        return this._chain.getCallHash('FuelTanks.dispatch_and_touch') === 'cfaa28808a6c787caf418b03415b24d3d9b7c7ffdfa48439a15bc9cb3b936b67'
    }

    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     * 
     * # Errors
     * 
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    get asV600(): {tankId: v600.MultiAddress, ruleSetId: number, call: v600.Call, paysRemainingFee: boolean} {
        assert(this.isV600)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     * 
     * # Errors
     * 
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    get isV601(): boolean {
        return this._chain.getCallHash('FuelTanks.dispatch_and_touch') === '33c3dea7e41ee95ee38dc5f9da10e787ce4fe8eafd493e2244c878e62bf696a2'
    }

    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     * 
     * # Errors
     * 
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    get asV601(): {tankId: v601.MultiAddress, ruleSetId: number, call: v601.Call, paysRemainingFee: boolean} {
        assert(this.isV601)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     * 
     * # Errors
     * 
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    get isV602(): boolean {
        return this._chain.getCallHash('FuelTanks.dispatch_and_touch') === '9ec0b4d6b3bc8cf6c2a46cb688669119f38ecbdb89add4439b95091fc49c8055'
    }

    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     * 
     * # Errors
     * 
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    get asV602(): {tankId: v602.MultiAddress, ruleSetId: number, call: v602.Call, paysRemainingFee: boolean} {
        assert(this.isV602)
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
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('FuelTanks.insert_rule_set') === '2dee8991b5d117f3a1b4d45d6d2ed4b47c4cc5fab80992a3dc930f3a05cca56a'
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
    get asEfinityV3012(): {tankId: efinityV3012.MultiAddress, ruleSetId: number, rules: efinityV3012.DispatchRuleDescriptor[]} {
        assert(this.isEfinityV3012)
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
    get isRocfinityV3012(): boolean {
        return this._chain.getCallHash('FuelTanks.insert_rule_set') === 'adaef5dbdb3c21b8d78c03b4e121b7381a0a295fd289d43652c3a4b96f254680'
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
    get asRocfinityV3012(): {tankId: rocfinityV3012.MultiAddress, ruleSetId: number, rules: rocfinityV3012.DispatchRuleDescriptor[]} {
        assert(this.isRocfinityV3012)
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
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
     * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
     *   kind
     */
    get isV500(): boolean {
        return this._chain.getCallHash('FuelTanks.insert_rule_set') === '6c9324dc7fe32a89e904c65892c535ff8c0fe6a8d810975b6afe1ce3d32ba738'
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
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
     * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
     *   kind
     */
    get asV500(): {tankId: v500.MultiAddress, ruleSetId: number, rules: v500.DispatchRuleDescriptor[]} {
        assert(this.isV500)
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
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
     * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
     *   kind
     */
    get isV600(): boolean {
        return this._chain.getCallHash('FuelTanks.insert_rule_set') === 'afaa710b1a55ecf9550d3c02fc816f7de9199ed5aa025a2a7cb521e19ddd01d2'
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
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
     * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
     *   kind
     */
    get asV600(): {tankId: v600.MultiAddress, ruleSetId: number, rules: v600.DispatchRuleDescriptor[]} {
        assert(this.isV600)
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
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
     * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
     *   kind
     */
    get isV601(): boolean {
        return this._chain.getCallHash('FuelTanks.insert_rule_set') === '721235e6cb4eba79cba31829b4f5245a89ad23649a9c67179937314f2288b2a4'
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
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
     * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
     *   kind
     */
    get asV601(): {tankId: v601.MultiAddress, ruleSetId: number, rules: v601.DispatchRuleDescriptor[]} {
        assert(this.isV601)
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
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
     * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
     *   kind
     */
    get isV602(): boolean {
        return this._chain.getCallHash('FuelTanks.insert_rule_set') === '7f35a41099a46811e66683a36960c6bf7beb366563fb09ee6df173036827f357'
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
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
     * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
     *   kind
     */
    get asV602(): {tankId: v602.MultiAddress, ruleSetId: number, rules: v602.DispatchRuleDescriptor[]} {
        assert(this.isV602)
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
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('FuelTanks.mutate_fuel_tank') === '9c5fe3d87288410aa8a3827d63434bb6999ebb57c48bba28556304535ab68ca6'
    }

    /**
     * Apply `mutation` to fuel tank with `tank_id`.
     * 
     * # Errors
     * - `FuelTankNotFound` if `tank_id` does not exist.
     * - `NoPermission` if `origin` is not the fuel tank owner
     */
    get asEfinityV3012(): {tankId: efinityV3012.MultiAddress, mutation: efinityV3012.DefaultTankMutation} {
        assert(this.isEfinityV3012)
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
    get isEfinityV3012(): boolean {
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
    get asEfinityV3012(): {tankId: efinityV3012.MultiAddress, userId: efinityV3012.MultiAddress, ruleSetId: number, ruleKind: efinityV3012.DispatchRuleKind} {
        assert(this.isEfinityV3012)
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
     * `AccountId` and `MintParams`. A single mint failure will fail all of them in the batch.
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
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('MultiTokens.batch_mint') === '0c8f31ef9708128069f735e820a42408b1da004a78ff20d127fe9ab42533a690'
    }

    /**
     * Collection owner mints tokens of `collection_id` to `recipients` consisting of an
     * `AccountId` and `MintParams`. A single mint failure will fail all of them in the batch.
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
    get asEfinityV3012(): {collectionId: bigint, recipients: efinityV3012.Type_373[]} {
        assert(this.isEfinityV3012)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Collection owner mints tokens of `collection_id` to `recipients` consisting of an
     * [`AccountId`](frame_system::Config::AccountId) and [`MintParams`]. A single mint failure
     * will fail all of them in the batch.
     * 
     * # Errors
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::CollectionNotFound`] if `collection` does **not** exist.
     * - [`Error::NoPermission`] if `caller` is not allowed to mint the `collection`.
     * - [`Error::TokenMintCapExceeded`] if the mint policy TokenCap does not allow minting
     * - [`Error::MaxTokenCountExceeded`] if the mint policy max_token_count is exceeded
     * - [`Error::DepositReserveFailed`] if the issuer does not have sufficent balance for
     *   token deposit
     */
    get isV500(): boolean {
        return this._chain.getCallHash('MultiTokens.batch_mint') === '29da27258672c2da5f2de8b8556bdcc1d50aabfa348c95bc373b6e0ab30fc41d'
    }

    /**
     * Collection owner mints tokens of `collection_id` to `recipients` consisting of an
     * [`AccountId`](frame_system::Config::AccountId) and [`MintParams`]. A single mint failure
     * will fail all of them in the batch.
     * 
     * # Errors
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::CollectionNotFound`] if `collection` does **not** exist.
     * - [`Error::NoPermission`] if `caller` is not allowed to mint the `collection`.
     * - [`Error::TokenMintCapExceeded`] if the mint policy TokenCap does not allow minting
     * - [`Error::MaxTokenCountExceeded`] if the mint policy max_token_count is exceeded
     * - [`Error::DepositReserveFailed`] if the issuer does not have sufficent balance for
     *   token deposit
     */
    get asV500(): {collectionId: bigint, recipients: v500.Type_380[]} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Collection owner mints tokens of `collection_id` to `recipients` consisting of an
     * [`AccountId`](frame_system::Config::AccountId) and [`MintParams`]. A single mint failure
     * will fail all of them in the batch.
     * 
     * # Errors
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::CollectionNotFound`] if `collection` does **not** exist.
     * - [`Error::NoPermission`] if `caller` is not allowed to mint the `collection`.
     * - [`Error::TokenMintCapExceeded`] if the mint policy TokenCap does not allow minting
     * - [`Error::MaxTokenCountExceeded`] if the mint policy max_token_count is exceeded
     * - [`Error::DepositReserveFailed`] if the issuer does not have sufficent balance for
     *   token deposit
     */
    get isV600(): boolean {
        return this._chain.getCallHash('MultiTokens.batch_mint') === 'a16058ed34379e8771cf8a93bddd3cb8d2085ccd127fa7774deb7e52dcd8575d'
    }

    /**
     * Collection owner mints tokens of `collection_id` to `recipients` consisting of an
     * [`AccountId`](frame_system::Config::AccountId) and [`MintParams`]. A single mint failure
     * will fail all of them in the batch.
     * 
     * # Errors
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::CollectionNotFound`] if `collection` does **not** exist.
     * - [`Error::NoPermission`] if `caller` is not allowed to mint the `collection`.
     * - [`Error::TokenMintCapExceeded`] if the mint policy TokenCap does not allow minting
     * - [`Error::MaxTokenCountExceeded`] if the mint policy max_token_count is exceeded
     * - [`Error::DepositReserveFailed`] if the issuer does not have sufficent balance for
     *   token deposit
     */
    get asV600(): {collectionId: bigint, recipients: v600.Type_380[]} {
        assert(this.isV600)
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
     * - `CollectionNotFound` if `collection_id` does not exist.
     * - `TokenNotFound` if `token_id` is `Some` and does not exist.
     * - `NoPermission` if `source` account is not the owner of the collection.
     * - `Overflow` if an attribute counter overflows
     * - `DepositReserveFailed` if unable to reserve the deposit for the attribute storage.
     */
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('MultiTokens.batch_set_attribute') === '4cfb7f21da2d822f4ecafcb406f87d73d214d01ed04db425fb85b84a776512f4'
    }

    /**
     * Collection owner sets `attributes` to `collection_id`
     * 
     * If `token_id` is `None`, the attribute is added to the collection. If it is `Some`, the
     * attribute is added to the token.
     * 
     * # Errors
     * - `InvalidAttributeKey` if `key.len() == 0`
     * - `CollectionNotFound` if `collection_id` does not exist.
     * - `TokenNotFound` if `token_id` is `Some` and does not exist.
     * - `NoPermission` if `source` account is not the owner of the collection.
     * - `Overflow` if an attribute counter overflows
     * - `DepositReserveFailed` if unable to reserve the deposit for the attribute storage.
     */
    get asEfinityV3012(): {collectionId: bigint, tokenId: (bigint | undefined), attributes: efinityV3012.AttributeKeyValuePair[]} {
        assert(this.isEfinityV3012)
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

    /**
     * Transfers the specific amount of tokens of `collection` to `recipients` from `origin`
     * account. A single failure will fail all transfers.
     * 
     * # Errors
     * - `AmountZero` if `amount == 0`.
     * - `InvalidTargetAccount` if `source == target`.
     * - `BalanceLow` if `source` does not own enough amount of `collection`.
     * - `BalanceOverflow` if `target` balance of `collection` overflows.
     */
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('MultiTokens.batch_transfer') === 'b19d3917f5096e2cef3e73752e8a3bd0b5e30cadfc6a4ff16c68ce84082c1ce5'
    }

    /**
     * Transfers the specific amount of tokens of `collection` to `recipients` from `origin`
     * account. A single failure will fail all transfers.
     * 
     * # Errors
     * - `AmountZero` if `amount == 0`.
     * - `InvalidTargetAccount` if `source == target`.
     * - `BalanceLow` if `source` does not own enough amount of `collection`.
     * - `BalanceOverflow` if `target` balance of `collection` overflows.
     */
    get asEfinityV3012(): {collectionId: bigint, recipients: efinityV3012.Recipient[]} {
        assert(this.isEfinityV3012)
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
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('MultiTokens.create_collection') === '2c5ffb5fc94633dce91583fb29da64fdda08ce309e89734aab20a62a8cbb3250'
    }

    /**
     * Creates a new collection from `descriptor`
     * 
     * # Errors
     * - `DepositReserveFailed` if the deposit cannot be reserved
     */
    get asEfinityV3012(): {descriptor: efinityV3012.DefaultCollectionDescriptor} {
        assert(this.isEfinityV3012)
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
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('MultiTokens.force_create_collection') === '64f054ecc6931474221d23bfcfed0b8f345cfbdab3115fd062d513a374ecf698'
    }

    /**
     * Creates a new collection from `descriptor` at `collection_id`, origin must be root
     * 
     * # Errors
     * - `DepositReserveFailed` if the deposit cannot be reserved
     */
    get asEfinityV3012(): {owner: Uint8Array, collectionId: bigint, descriptor: efinityV3012.DefaultCollectionDescriptor} {
        assert(this.isEfinityV3012)
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
    get isEfinityV3012(): boolean {
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
    get asEfinityV3012(): {collectionId: bigint, mutation: efinityV3012.DefaultCollectionMutation} {
        assert(this.isEfinityV3012)
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
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('MultiTokens.force_set_token') === '5b7285ab60ef16b1bc066fab5d476a7be9743fed0ce10d505b35529a833b5f6a'
    }

    /**
     * Set the Tokens storage to the given `value`, origin must be root
     * 
     * # Errors
     * - `BadOrigin` if origin != root
     */
    get asEfinityV3012(): {collectionId: bigint, tokenId: bigint, value: (efinityV3012.Token | undefined)} {
        assert(this.isEfinityV3012)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Set the Tokens storage to the given `value`, origin must be root
     */
    get isV500(): boolean {
        return this._chain.getCallHash('MultiTokens.force_set_token') === '6e309a6623c66424fa2b051393f739db30a442cb48712f14fef0c24db32bf0bc'
    }

    /**
     * Set the Tokens storage to the given `value`, origin must be root
     */
    get asV500(): {collectionId: bigint, tokenId: bigint, value: (v500.Token | undefined)} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Set the Tokens storage to the given `value`, origin must be root
     */
    get isV600(): boolean {
        return this._chain.getCallHash('MultiTokens.force_set_token') === '6b0347ff9d005a8b25bcce6f0402078cf4f797f3978343bdd92c89b66bcd5dc9'
    }

    /**
     * Set the Tokens storage to the given `value`, origin must be root
     */
    get asV600(): {collectionId: bigint, tokenId: bigint, value: (v600.Token | undefined)} {
        assert(this.isV600)
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

    /**
     * Freeze collection, token or account
     */
    get isV500(): boolean {
        return this._chain.getCallHash('MultiTokens.freeze') === '91882af67a1b185551af07d0e9518d72ab08e8c353579842070f87fc1e425820'
    }

    /**
     * Freeze collection, token or account
     */
    get asV500(): {info: v500.Freeze} {
        assert(this.isV500)
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
     * - `ConflictingLocation` if the token is foreign and the location is already mapped to
     *   another asset in `AssetIdsByLocation`
     */
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('MultiTokens.mint') === '166a9a493c469412cddabceaf140321536c0e288eecfdb6506086a8a44c0451a'
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
     * - `ConflictingLocation` if the token is foreign and the location is already mapped to
     *   another asset in `AssetIdsByLocation`
     */
    get asEfinityV3012(): {recipient: efinityV3012.MultiAddress, collectionId: bigint, params: efinityV3012.DefaultMintParams} {
        assert(this.isEfinityV3012)
        return this._chain.decodeCall(this.call)
    }

    /**
     * `origin` mints to `recipient` for `collection_id` with `params` using the pallet's
     * [`MintPolicy`](traits::CollectionPolicy::Mint).
     * 
     * # Errors
     * 
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::CollectionNotFound`] if `Collection` does not exist.
     * - [`Error::TokenNotFound`] if `Token` does not exist.
     * - [`Error::TokenAlreadyExists`] if attempting to create a token that already exists
     * - [`Error::NoPermission`] if `caller` is not allowed to mint the `collection`.
     * - [`Error::TokenMintCapExceeded`] if the mint policy TokenCap does not allow minting
     * - `MaxTokenCountExceeded` if the mint policy max_token_count is exceeded
     * - [`Error::DepositReserveFailed`] if the issuer does not have sufficent balance for
     *   token deposit
     * - [`Error::ConflictingLocation`] if the token is foreign and the location is already
     *   mapped to another asset in `AssetIdsByLocation`
     */
    get isV500(): boolean {
        return this._chain.getCallHash('MultiTokens.mint') === '77fe7100fc7c7f01a60ba86298be60e67d2083b3b69c7b7178ef6e5c51c15ffc'
    }

    /**
     * `origin` mints to `recipient` for `collection_id` with `params` using the pallet's
     * [`MintPolicy`](traits::CollectionPolicy::Mint).
     * 
     * # Errors
     * 
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::CollectionNotFound`] if `Collection` does not exist.
     * - [`Error::TokenNotFound`] if `Token` does not exist.
     * - [`Error::TokenAlreadyExists`] if attempting to create a token that already exists
     * - [`Error::NoPermission`] if `caller` is not allowed to mint the `collection`.
     * - [`Error::TokenMintCapExceeded`] if the mint policy TokenCap does not allow minting
     * - `MaxTokenCountExceeded` if the mint policy max_token_count is exceeded
     * - [`Error::DepositReserveFailed`] if the issuer does not have sufficent balance for
     *   token deposit
     * - [`Error::ConflictingLocation`] if the token is foreign and the location is already
     *   mapped to another asset in `AssetIdsByLocation`
     */
    get asV500(): {recipient: v500.MultiAddress, collectionId: bigint, params: v500.DefaultMintParams} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

    /**
     * `origin` mints to `recipient` for `collection_id` with `params` using the pallet's
     * [`MintPolicy`](traits::CollectionPolicy::Mint).
     * 
     * # Errors
     * 
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::CollectionNotFound`] if `Collection` does not exist.
     * - [`Error::TokenNotFound`] if `Token` does not exist.
     * - [`Error::TokenAlreadyExists`] if attempting to create a token that already exists
     * - [`Error::NoPermission`] if `caller` is not allowed to mint the `collection`.
     * - [`Error::TokenMintCapExceeded`] if the mint policy TokenCap does not allow minting
     * - `MaxTokenCountExceeded` if the mint policy max_token_count is exceeded
     * - [`Error::DepositReserveFailed`] if the issuer does not have sufficent balance for
     *   token deposit
     * - [`Error::ConflictingLocation`] if the token is foreign and the location is already
     *   mapped to another asset in `AssetIdsByLocation`
     */
    get isV600(): boolean {
        return this._chain.getCallHash('MultiTokens.mint') === '17e3c370d4720b5760710bed81f54d7f476ae6c39d3849de9837b9f718be4f32'
    }

    /**
     * `origin` mints to `recipient` for `collection_id` with `params` using the pallet's
     * [`MintPolicy`](traits::CollectionPolicy::Mint).
     * 
     * # Errors
     * 
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::CollectionNotFound`] if `Collection` does not exist.
     * - [`Error::TokenNotFound`] if `Token` does not exist.
     * - [`Error::TokenAlreadyExists`] if attempting to create a token that already exists
     * - [`Error::NoPermission`] if `caller` is not allowed to mint the `collection`.
     * - [`Error::TokenMintCapExceeded`] if the mint policy TokenCap does not allow minting
     * - `MaxTokenCountExceeded` if the mint policy max_token_count is exceeded
     * - [`Error::DepositReserveFailed`] if the issuer does not have sufficent balance for
     *   token deposit
     * - [`Error::ConflictingLocation`] if the token is foreign and the location is already
     *   mapped to another asset in `AssetIdsByLocation`
     */
    get asV600(): {recipient: v600.MultiAddress, collectionId: bigint, params: v600.DefaultMintParams} {
        assert(this.isV600)
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
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('MultiTokens.mutate_collection') === '14654b078d9899c1c298781a09e325690f44d4eb607d8c69ff2f94e1c6b31069'
    }

    /**
     * Modify `Collection` with `id` by applying `mutation`
     * 
     * # Errors
     * - `NotFound`, if `collection_id` does not exist.
     * - `NoPermission`, if `origin` is not the owner of `collection`.
     */
    get asEfinityV3012(): {collectionId: bigint, mutation: efinityV3012.DefaultCollectionMutation} {
        assert(this.isEfinityV3012)
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
     * - `ConflictingLocation` if the new location is already occupied
     */
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('MultiTokens.mutate_token') === '24d5244e7196ae827f944238e5b6e1b1a354dab7b4a2d4e42abc785254c50da5'
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
     * - `ConflictingLocation` if the new location is already occupied
     */
    get asEfinityV3012(): {collectionId: bigint, tokenId: bigint, mutation: efinityV3012.DefaultTokenMutation} {
        assert(this.isEfinityV3012)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Modify [`Token`](ep_multi_tokens::Token) with `token_id`  from
     * [`Collection`](ep_multi_tokens::Collection) with `collection_id` by applying `mutation`
     * 
     * # Errors
     * 
     * - [`Error::CurrencyIncompatibleWithCollectionRoyalty`] if token has already been
     *   assigned a royalty
     * - [`Error::NoPermission`] if not the collection owner
     * - [`Error::TokenNotFound`] if Token does not exist
     * - [`Error::ConflictingLocation`] if the new location is already occupied
     */
    get isV500(): boolean {
        return this._chain.getCallHash('MultiTokens.mutate_token') === 'b1df46e912bd6082a6796b61e3d5451b698e752c5aa782392bb97d3c78d81f3c'
    }

    /**
     * Modify [`Token`](ep_multi_tokens::Token) with `token_id`  from
     * [`Collection`](ep_multi_tokens::Collection) with `collection_id` by applying `mutation`
     * 
     * # Errors
     * 
     * - [`Error::CurrencyIncompatibleWithCollectionRoyalty`] if token has already been
     *   assigned a royalty
     * - [`Error::NoPermission`] if not the collection owner
     * - [`Error::TokenNotFound`] if Token does not exist
     * - [`Error::ConflictingLocation`] if the new location is already occupied
     */
    get asV500(): {collectionId: bigint, tokenId: bigint, mutation: v500.DefaultTokenMutation} {
        assert(this.isV500)
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
    get isEfinityV3012(): boolean {
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
    get asEfinityV3012(): {collectionId: bigint, tokenId: (bigint | undefined), attributeCount: number} {
        assert(this.isEfinityV3012)
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

    /**
     * Thaw collection, token or account
     */
    get isV500(): boolean {
        return this._chain.getCallHash('MultiTokens.thaw') === '91882af67a1b185551af07d0e9518d72ab08e8c353579842070f87fc1e425820'
    }

    /**
     * Thaw collection, token or account
     */
    get asV500(): {info: v500.Freeze} {
        assert(this.isV500)
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

export class MultiTokensMigrationFinalizeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokensMigration.finalize')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Finalizes the migration process by unpausing all related pallets, setting the next
     * collection ID, updating the migration status, and emitting a `MigrationFinished` event.
     * 
     * # Arguments
     * 
     * * `origin` - The origin of the transaction.
     * * `next_collection_id` - The ID of the next collection.
     * 
     * # Errors
     * - [`Error::OnlyFinalizeOngoing`] if auction is not ongoing.
     */
    get isV601(): boolean {
        return this._chain.getCallHash('MultiTokensMigration.finalize') === '137977a56f38380f8d4ccd77b98084830ccd66df180fbb23d13a738621ab87b8'
    }

    /**
     * Finalizes the migration process by unpausing all related pallets, setting the next
     * collection ID, updating the migration status, and emitting a `MigrationFinished` event.
     * 
     * # Arguments
     * 
     * * `origin` - The origin of the transaction.
     * * `next_collection_id` - The ID of the next collection.
     * 
     * # Errors
     * - [`Error::OnlyFinalizeOngoing`] if auction is not ongoing.
     */
    get asV601(): {nextCollectionId: bigint} {
        assert(this.isV601)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensMigrationMigrateAttributesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokensMigration.migrate_attributes')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Migrates [`Attributes`] by setting attribute values for the specified list of attributes
     */
    get isV601(): boolean {
        return this._chain.getCallHash('MultiTokensMigration.migrate_attributes') === '38678b38b1093dceec6ad9eb431127466c58af938a8150a8c7ad7c37e5072de9'
    }

    /**
     * Migrates [`Attributes`] by setting attribute values for the specified list of attributes
     */
    get asV601(): {attributes: [bigint, (bigint | undefined), Uint8Array, v601.Attribute][]} {
        assert(this.isV601)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensMigrationMigrateCollectionAccountsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokensMigration.migrate_collection_accounts')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Migrates [`CollectionAccounts`] by setting values for the given accounts
     */
    get isV601(): boolean {
        return this._chain.getCallHash('MultiTokensMigration.migrate_collection_accounts') === '813084e51cd54ab7bfef8bf7e5059f31e0d2b9c12322cf69ce76a95e9699cac1'
    }

    /**
     * Migrates [`CollectionAccounts`] by setting values for the given accounts
     */
    get asV601(): {accounts: [bigint, Uint8Array, v601.CollectionAccount][]} {
        assert(this.isV601)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensMigrationMigrateCollectionsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokensMigration.migrate_collections')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Migrates [`Collections`] by setting values for the given collections
     */
    get isV601(): boolean {
        return this._chain.getCallHash('MultiTokensMigration.migrate_collections') === '37cd3868d6f3f9dbe259cd581888f07612dc8dd99faeda8210d75e8fac60889e'
    }

    /**
     * Migrates [`Collections`] by setting values for the given collections
     */
    get asV601(): {collections: [bigint, v601.Collection][]} {
        assert(this.isV601)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensMigrationMigrateTokenAccountsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokensMigration.migrate_token_accounts')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Migrates [`TokenAccounts`] by setting values for the given accounts
     */
    get isV601(): boolean {
        return this._chain.getCallHash('MultiTokensMigration.migrate_token_accounts') === 'a8273c032ee74f21d24abe2440c005682abdfed982744ce56f3d7dbb682df9d1'
    }

    /**
     * Migrates [`TokenAccounts`] by setting values for the given accounts
     */
    get asV601(): {accounts: [bigint, bigint, Uint8Array, v601.TokenAccount][]} {
        assert(this.isV601)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensMigrationMigrateTokensCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokensMigration.migrate_tokens')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Migrates [`Tokens`] by setting values for the given tokens
     */
    get isV601(): boolean {
        return this._chain.getCallHash('MultiTokensMigration.migrate_tokens') === '5a462e1cc4608c0590c2a56f5ea8ac6910e1ace1b917bfe39df97eff05101008'
    }

    /**
     * Migrates [`Tokens`] by setting values for the given tokens
     */
    get asV601(): {tokens: [bigint, bigint, v601.Token][]} {
        assert(this.isV601)
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
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('Multisig.approve_as_multi') === '88561668497d8fdee3be21d28e6e68bc1cd9568f418501a4b294fe2b9803acb4'
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
    get asEfinityV3012(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (efinityV3012.Timepoint | undefined), callHash: Uint8Array, maxWeight: efinityV3012.Weight} {
        assert(this.isEfinityV3012)
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
     *     - Reads: Multisig Storage, [Caller Account]
     *     - Writes: Multisig Storage, [Caller Account]
     * - Plus Call Weight
     * # </weight>
     */
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('Multisig.as_multi') === '2703e025075e120f3780a2e57bc9bd84c591773efa1a0b55b8c7266c624a4a3e'
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
     *     - Reads: Multisig Storage, [Caller Account]
     *     - Writes: Multisig Storage, [Caller Account]
     * - Plus Call Weight
     * # </weight>
     */
    get asEfinityV3012(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (efinityV3012.Timepoint | undefined), call: efinityV3012.Call, maxWeight: efinityV3012.Weight} {
        assert(this.isEfinityV3012)
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
     *     - Reads: Multisig Storage, [Caller Account]
     *     - Writes: Multisig Storage, [Caller Account]
     * - Plus Call Weight
     * # </weight>
     */
    get isRocfinityV3012(): boolean {
        return this._chain.getCallHash('Multisig.as_multi') === '22f1076e19a712198629d972d9c2531e9570a507fa7cfdcfaaf6650a820e1a21'
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
     *     - Reads: Multisig Storage, [Caller Account]
     *     - Writes: Multisig Storage, [Caller Account]
     * - Plus Call Weight
     * # </weight>
     */
    get asRocfinityV3012(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (rocfinityV3012.Timepoint | undefined), call: rocfinityV3012.Call, maxWeight: rocfinityV3012.Weight} {
        assert(this.isRocfinityV3012)
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
     *     - Reads: Multisig Storage, [Caller Account]
     *     - Writes: Multisig Storage, [Caller Account]
     * - Plus Call Weight
     * # </weight>
     */
    get isV500(): boolean {
        return this._chain.getCallHash('Multisig.as_multi') === '371d05f5e4e07f488e5d3155644987faec0f8d7bd75a674a65f957283b3d81be'
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
     *     - Reads: Multisig Storage, [Caller Account]
     *     - Writes: Multisig Storage, [Caller Account]
     * - Plus Call Weight
     * # </weight>
     */
    get asV500(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v500.Timepoint | undefined), call: v500.Call, maxWeight: v500.Weight} {
        assert(this.isV500)
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
     *     - Reads: Multisig Storage, [Caller Account]
     *     - Writes: Multisig Storage, [Caller Account]
     * - Plus Call Weight
     * # </weight>
     */
    get isV600(): boolean {
        return this._chain.getCallHash('Multisig.as_multi') === 'c7815718fcc26012c650c6a1c650866f2b8d9974629ec1bc977d515a2c006f01'
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
     *     - Reads: Multisig Storage, [Caller Account]
     *     - Writes: Multisig Storage, [Caller Account]
     * - Plus Call Weight
     * # </weight>
     */
    get asV600(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v600.Timepoint | undefined), call: v600.Call, maxWeight: v600.Weight} {
        assert(this.isV600)
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
     *     - Reads: Multisig Storage, [Caller Account]
     *     - Writes: Multisig Storage, [Caller Account]
     * - Plus Call Weight
     * # </weight>
     */
    get isV601(): boolean {
        return this._chain.getCallHash('Multisig.as_multi') === '89e1a5611f269f661a5d2ff7986a904e3b1f6f29bf5c37bfa287def921138b41'
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
     *     - Reads: Multisig Storage, [Caller Account]
     *     - Writes: Multisig Storage, [Caller Account]
     * - Plus Call Weight
     * # </weight>
     */
    get asV601(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v601.Timepoint | undefined), call: v601.Call, maxWeight: v601.Weight} {
        assert(this.isV601)
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
     * ## Complexity
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
     */
    get isV602(): boolean {
        return this._chain.getCallHash('Multisig.as_multi') === '1b8740cfcd16e554ca178a25cf7f6cee719d835f6afe16edd07ba004907fb0be'
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
     * ## Complexity
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
     */
    get asV602(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v602.Timepoint | undefined), call: v602.Call, maxWeight: v602.Weight} {
        assert(this.isV602)
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
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === 'aae1b2cf37f03d0d0555cac034b411d2930b77553520a564a0177d71f916d2b1'
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
    get asEfinityV3012(): {otherSignatories: Uint8Array[], call: efinityV3012.Call} {
        assert(this.isEfinityV3012)
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
    get isRocfinityV3012(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === '011310f636ffc0ad21b6033e9ff63b0bd443f85874e3a71b5f58bede65671b83'
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
    get asRocfinityV3012(): {otherSignatories: Uint8Array[], call: rocfinityV3012.Call} {
        assert(this.isRocfinityV3012)
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
    get isV500(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === '1464000ac9e2b89ca25c526bb2b352230fc2811890ca7fb640c05a3557a8ffdd'
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
    get asV500(): {otherSignatories: Uint8Array[], call: v500.Call} {
        assert(this.isV500)
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
    get isV600(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === 'abae266d775e2c38098b2d0ad1af143c5827224567f09dc6c96c0e5b985d03bc'
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
    get asV600(): {otherSignatories: Uint8Array[], call: v600.Call} {
        assert(this.isV600)
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
    get isV601(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === '1df05f9c21384080a8652ca61c90547f8e933b72535b3f47f3b8b634f1b3885c'
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
    get asV601(): {otherSignatories: Uint8Array[], call: v601.Call} {
        assert(this.isV601)
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
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    get isV602(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === 'a1890c4cc7893697a8c420d4a1acb1292f666ac5f0efe066ec3259f873621d2e'
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
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    get asV602(): {otherSignatories: Uint8Array[], call: v602.Call} {
        assert(this.isV602)
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

    /**
     * Send an XCM message as parachain sovereign.
     */
    get isV500(): boolean {
        return this._chain.getCallHash('OrmlXcm.send_as_sovereign') === '9c814457e6c06e355f17d8e2e59924a734ef38dfc7852490ba89fd5b845b6f48'
    }

    /**
     * Send an XCM message as parachain sovereign.
     */
    get asV500(): {dest: v500.VersionedMultiLocation, message: v500.VersionedXcm} {
        assert(this.isV500)
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

    /**
     * Authorize an upgrade to a given `code_hash` for the runtime. The runtime can be supplied
     * later.
     * 
     * The `check_version` parameter sets a boolean flag for whether or not the runtime's spec
     * version and name should be verified on upgrade. Since the authorization only has a hash,
     * it cannot actually perform the verification.
     * 
     * This call requires Root origin.
     */
    get isV602(): boolean {
        return this._chain.getCallHash('ParachainSystem.authorize_upgrade') === '5c55d10848d503323d2e442c7afe37bb9673cbd625584442853911cb797f840c'
    }

    /**
     * Authorize an upgrade to a given `code_hash` for the runtime. The runtime can be supplied
     * later.
     * 
     * The `check_version` parameter sets a boolean flag for whether or not the runtime's spec
     * version and name should be verified on upgrade. Since the authorization only has a hash,
     * it cannot actually perform the verification.
     * 
     * This call requires Root origin.
     */
    get asV602(): {codeHash: Uint8Array, checkVersion: boolean} {
        assert(this.isV602)
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
    get isEfinityV3012(): boolean {
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
    get asEfinityV3012(): {message: efinityV3012.Type_329, maxWeight: bigint} {
        assert(this.isEfinityV3012)
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
    get isV500(): boolean {
        return this._chain.getCallHash('PolkadotXcm.execute') === 'a1da862b5d9db8fd6f3072da00ea4e66052f97b5dcfb87e58d49ca1fd1f1ef90'
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
    get asV500(): {message: v500.Type_338, maxWeight: v500.Weight} {
        assert(this.isV500)
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

    /**
     * Ask a location to notify us regarding their XCM version and any changes to it.
     * 
     * - `origin`: Must be Root.
     * - `location`: The location to which we should subscribe for XCM version notifications.
     */
    get isV500(): boolean {
        return this._chain.getCallHash('PolkadotXcm.force_subscribe_version_notify') === '0448b7eed1a6d9cd0a489ea792df94cc3ce5a37e203f19b1a5a0c4516a8d696c'
    }

    /**
     * Ask a location to notify us regarding their XCM version and any changes to it.
     * 
     * - `origin`: Must be Root.
     * - `location`: The location to which we should subscribe for XCM version notifications.
     */
    get asV500(): {location: v500.VersionedMultiLocation} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }
}

export class PolkadotXcmForceSuspensionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PolkadotXcm.force_suspension')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set or unset the global suspension state of the XCM executor.
     * 
     * - `origin`: Must be an origin specified by AdminOrigin.
     * - `suspended`: `true` to suspend, `false` to resume.
     */
    get isV602(): boolean {
        return this._chain.getCallHash('PolkadotXcm.force_suspension') === '8ed7e51efeeeccee1e0e2e2dca71da38a9e5bdab470452a56d790711652babc1'
    }

    /**
     * Set or unset the global suspension state of the XCM executor.
     * 
     * - `origin`: Must be an origin specified by AdminOrigin.
     * - `suspended`: `true` to suspend, `false` to resume.
     */
    get asV602(): {suspended: boolean} {
        assert(this.isV602)
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

    /**
     * Require that a particular destination should no longer notify us regarding any XCM
     * version changes.
     * 
     * - `origin`: Must be Root.
     * - `location`: The location to which we are currently subscribed for XCM version
     *   notifications which we no longer desire.
     */
    get isV500(): boolean {
        return this._chain.getCallHash('PolkadotXcm.force_unsubscribe_version_notify') === '0448b7eed1a6d9cd0a489ea792df94cc3ce5a37e203f19b1a5a0c4516a8d696c'
    }

    /**
     * Require that a particular destination should no longer notify us regarding any XCM
     * version changes.
     * 
     * - `origin`: Must be Root.
     * - `location`: The location to which we are currently subscribed for XCM version
     *   notifications which we no longer desire.
     */
    get asV500(): {location: v500.VersionedMultiLocation} {
        assert(this.isV500)
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

    /**
     * Extoll that a particular destination can be communicated with through a particular
     * version of XCM.
     * 
     * - `origin`: Must be Root.
     * - `location`: The destination that is being described.
     * - `xcm_version`: The latest version of XCM that `location` supports.
     */
    get isV500(): boolean {
        return this._chain.getCallHash('PolkadotXcm.force_xcm_version') === '998b5a56e7662d76955b41c2526c2219fe8304fec6501afa115db1bd705e7ff6'
    }

    /**
     * Extoll that a particular destination can be communicated with through a particular
     * version of XCM.
     * 
     * - `origin`: Must be Root.
     * - `location`: The destination that is being described.
     * - `xcm_version`: The latest version of XCM that `location` supports.
     */
    get asV500(): {location: v500.V3MultiLocation, xcmVersion: number} {
        assert(this.isV500)
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

    /**
     * Transfer some assets from the local chain to the sovereign account of a destination
     * chain and forward a notification XCM.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
     * is needed than `weight_limit`, then the operation will fail and the assets send may be
     * at risk.
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
    get isV500(): boolean {
        return this._chain.getCallHash('PolkadotXcm.limited_reserve_transfer_assets') === 'c5f45c1775bd92c7b425f46c92a6891334f7df5ae2518cd2c0a106447da3bbd9'
    }

    /**
     * Transfer some assets from the local chain to the sovereign account of a destination
     * chain and forward a notification XCM.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
     * is needed than `weight_limit`, then the operation will fail and the assets send may be
     * at risk.
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
    get asV500(): {dest: v500.VersionedMultiLocation, beneficiary: v500.VersionedMultiLocation, assets: v500.VersionedMultiAssets, feeAssetItem: number, weightLimit: v500.V3WeightLimit} {
        assert(this.isV500)
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

    /**
     * Teleport some assets from the local chain to some destination chain.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
     * is needed than `weight_limit`, then the operation will fail and the assets send may be
     * at risk.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
     *   `dest` side. May not be empty.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
     */
    get isV500(): boolean {
        return this._chain.getCallHash('PolkadotXcm.limited_teleport_assets') === 'c5f45c1775bd92c7b425f46c92a6891334f7df5ae2518cd2c0a106447da3bbd9'
    }

    /**
     * Teleport some assets from the local chain to some destination chain.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
     * is needed than `weight_limit`, then the operation will fail and the assets send may be
     * at risk.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
     *   `dest` side. May not be empty.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
     */
    get asV500(): {dest: v500.VersionedMultiLocation, beneficiary: v500.VersionedMultiLocation, assets: v500.VersionedMultiAssets, feeAssetItem: number, weightLimit: v500.V3WeightLimit} {
        assert(this.isV500)
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

    /**
     * Transfer some assets from the local chain to the sovereign account of a destination
     * chain and forward a notification XCM.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
     * with all fees taken as needed from the asset.
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
    get isV500(): boolean {
        return this._chain.getCallHash('PolkadotXcm.reserve_transfer_assets') === 'ebd99cece75c1b0fc48830527bc513cf672b8d0c6c0c505498bba5c8c5e1617c'
    }

    /**
     * Transfer some assets from the local chain to the sovereign account of a destination
     * chain and forward a notification XCM.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
     * with all fees taken as needed from the asset.
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
    get asV500(): {dest: v500.VersionedMultiLocation, beneficiary: v500.VersionedMultiLocation, assets: v500.VersionedMultiAssets, feeAssetItem: number} {
        assert(this.isV500)
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

    get isV500(): boolean {
        return this._chain.getCallHash('PolkadotXcm.send') === '9c814457e6c06e355f17d8e2e59924a734ef38dfc7852490ba89fd5b845b6f48'
    }

    get asV500(): {dest: v500.VersionedMultiLocation, message: v500.VersionedXcm} {
        assert(this.isV500)
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

    /**
     * Teleport some assets from the local chain to some destination chain.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
     * with all fees taken as needed from the asset.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
     *   `dest` side. May not be empty.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     */
    get isV500(): boolean {
        return this._chain.getCallHash('PolkadotXcm.teleport_assets') === 'ebd99cece75c1b0fc48830527bc513cf672b8d0c6c0c505498bba5c8c5e1617c'
    }

    /**
     * Teleport some assets from the local chain to some destination chain.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
     * with all fees taken as needed from the asset.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
     *   `dest` side. May not be empty.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     */
    get asV500(): {dest: v500.VersionedMultiLocation, beneficiary: v500.VersionedMultiLocation, assets: v500.VersionedMultiAssets, feeAssetItem: number} {
        assert(this.isV500)
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

    /**
     * Cancel a named scheduled task.
     */
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('Scheduler.cancel_named') === '2a01c4c05d6bf45e0dc267bd7f6e27df3b3e4b23af7982734357c4de87ef690c'
    }

    /**
     * Cancel a named scheduled task.
     */
    get asEfinityV3012(): {id: Uint8Array} {
        assert(this.isEfinityV3012)
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
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === '3f57b09b959ad4813851a4c71f51b89b74c6f5e23d21d062d3a5152c519765e8'
    }

    /**
     * Anonymously schedule a task.
     */
    get asEfinityV3012(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: efinityV3012.Call} {
        assert(this.isEfinityV3012)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task.
     */
    get isRocfinityV3012(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === '5c09a6608ee8dc51aa46a33b155eb4986241ec0ace6f0c5334dbef395bc8c4bc'
    }

    /**
     * Anonymously schedule a task.
     */
    get asRocfinityV3012(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: rocfinityV3012.Call} {
        assert(this.isRocfinityV3012)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task.
     */
    get isV500(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === '6b5b00362b6e8ab49ccce9efed96fa17584732dae6bf66e4c0002de6ddccbdbf'
    }

    /**
     * Anonymously schedule a task.
     */
    get asV500(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v500.Call} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task.
     */
    get isV600(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === '937ede4d532becdf78680b0a2aad5c5ae0a9f8e015181140900c26530883e0e4'
    }

    /**
     * Anonymously schedule a task.
     */
    get asV600(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v600.Call} {
        assert(this.isV600)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task.
     */
    get isV601(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === '274e0ddf3b350286fb916d8a27bb459cdd43a7e9cd94f8af3e4bf5fc38928281'
    }

    /**
     * Anonymously schedule a task.
     */
    get asV601(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v601.Call} {
        assert(this.isV601)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task.
     */
    get isV602(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === '4341d2e25d51b16df59944be395bc67a56b8903ec5e8d9482e3bca6569fc0272'
    }

    /**
     * Anonymously schedule a task.
     */
    get asV602(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v602.Call} {
        assert(this.isV602)
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
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_after') === 'b25e585a855c8440818eaeac81a711fa425b7ec90f69704365d2fc1c310c5645'
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get asEfinityV3012(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: efinityV3012.Call} {
        assert(this.isEfinityV3012)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get isRocfinityV3012(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_after') === 'f9717f36b8f3c5bc5d686a2be3ffb8fdf780357d2f10cb29c0998644f1e14f80'
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get asRocfinityV3012(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: rocfinityV3012.Call} {
        assert(this.isRocfinityV3012)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get isV500(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_after') === 'd7c2bd45ed135abbcb449f7d587b5e33a97cf60617a3186310d4fede20de17f3'
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get asV500(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v500.Call} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get isV600(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_after') === 'c9d112c0db88d4e54c5ad790f9bc634de26644846f185a1576298b984e66e4bd'
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get asV600(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v600.Call} {
        assert(this.isV600)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get isV601(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_after') === 'db5a422a240b35f05e86e99d3597fca715d3ed4fbcd1479473e19fe22123e87a'
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get asV601(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v601.Call} {
        assert(this.isV601)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task after a delay.
     */
    get isV602(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_after') === '01602d72688debf53ae292218fab46efbd0b5ee1643f4e82371323753a065a58'
    }

    /**
     * Anonymously schedule a task after a delay.
     */
    get asV602(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v602.Call} {
        assert(this.isV602)
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
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === '814d60bc03b7378068b7e80f53ff9778dd5541a05497102d1d52630abff4dad6'
    }

    /**
     * Schedule a named task.
     */
    get asEfinityV3012(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: efinityV3012.Call} {
        assert(this.isEfinityV3012)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task.
     */
    get isRocfinityV3012(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === '99ad55ba3a89373087e9c496806101bfb344f1fea715a4b8690f50e3709c238f'
    }

    /**
     * Schedule a named task.
     */
    get asRocfinityV3012(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: rocfinityV3012.Call} {
        assert(this.isRocfinityV3012)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task.
     */
    get isV500(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === 'a769574b7ca2ea2e82898d0ba8c54e1ed628ecc5e784f7372c06644f51be4911'
    }

    /**
     * Schedule a named task.
     */
    get asV500(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v500.Call} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task.
     */
    get isV600(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === '1f1f0b701922d8f559cb7b7000bd51de0c3431b92f1e5d4e10c8e041301b4268'
    }

    /**
     * Schedule a named task.
     */
    get asV600(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v600.Call} {
        assert(this.isV600)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task.
     */
    get isV601(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === '5a7ebcffc466dda19795055512f20e3e1e2e39b1ef67d72625c7932fe5366c59'
    }

    /**
     * Schedule a named task.
     */
    get asV601(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v601.Call} {
        assert(this.isV601)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task.
     */
    get isV602(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === '4bc1685061026102f1434d99fff5d061999e935ccc51cfcdd6cb7bf2dfaf76b1'
    }

    /**
     * Schedule a named task.
     */
    get asV602(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v602.Call} {
        assert(this.isV602)
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
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named_after') === 'caa464b4aef5b78afef4bc9fee80ac6dd5b43712ed17b712fb8742789115eeda'
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get asEfinityV3012(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: efinityV3012.Call} {
        assert(this.isEfinityV3012)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get isRocfinityV3012(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named_after') === '42f85a6cd3071a5de843a227855667009e6987c77a36a8c1e9817808de32144c'
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get asRocfinityV3012(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: rocfinityV3012.Call} {
        assert(this.isRocfinityV3012)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get isV500(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named_after') === 'f0daa779f3a8b736abee47f049b9ca1f41fdcefdaf18bc6c52854d3f3d39f315'
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get asV500(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v500.Call} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get isV600(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named_after') === '5ae8c3cc677a001e7274aae46557c405a44f8cbcc8623107fee478b36c004642'
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get asV600(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v600.Call} {
        assert(this.isV600)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get isV601(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named_after') === '46bf91ec8f35d4d8216223c8db0e82ee4eb726b0418d9b850eb627f6c2e4ca07'
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get asV601(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v601.Call} {
        assert(this.isV601)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task after a delay.
     */
    get isV602(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named_after') === '74eb740d000b4b8829f6658865b2000ed9d0823a4f44082c2ac72378ce19fca3'
    }

    /**
     * Schedule a named task after a delay.
     */
    get asV602(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v602.Call} {
        assert(this.isV602)
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
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === '858507733a6a70817b3159b555facce0fa94a1cd0a0b310adf8e9c0760058207'
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
    get asEfinityV3012(): {call: efinityV3012.Call} {
        assert(this.isEfinityV3012)
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
    get isRocfinityV3012(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === 'abca980bf1016589013fe0614efe2dd23384abb1c388ab991938f365f60cf944'
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
    get asRocfinityV3012(): {call: rocfinityV3012.Call} {
        assert(this.isRocfinityV3012)
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
    get isV500(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === 'dc6a960e485548d27a1905ecd7699e6e72ce591ec0211a03a455e8ac78006198'
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
    get asV500(): {call: v500.Call} {
        assert(this.isV500)
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
    get isV600(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === '34015a629e6ca020d2f9645cc017ec5ce3c7c25c2bf5b589826a2a2592dff26c'
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
    get asV600(): {call: v600.Call} {
        assert(this.isV600)
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
    get isV601(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === 'ea350d4ed27fd053d26a50a70d9c6c3f428ca20cdf1858ee0b34ab93dfe62bec'
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
    get asV601(): {call: v601.Call} {
        assert(this.isV601)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV602(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === 'f2b9b4f3f2e8201567112690b1bb594f3e2ec38535701b4aa70351c8e1dc0a0b'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asV602(): {call: v602.Call} {
        assert(this.isV602)
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
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '4c038187a9f2172aa91ef7cc75309aea4a569435b15f1e5528f9476b63ac8ff5'
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
    get asEfinityV3012(): {who: efinityV3012.MultiAddress, call: efinityV3012.Call} {
        assert(this.isEfinityV3012)
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
    get isRocfinityV3012(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === 'a7eb144ee92988818dde525805e530d742c0e5f7d5694fda1a7e740f6dd85685'
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
    get asRocfinityV3012(): {who: rocfinityV3012.MultiAddress, call: rocfinityV3012.Call} {
        assert(this.isRocfinityV3012)
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
    get isV500(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '1d36d1ca78fd4b0b832eacf54f1bb1947723a6ab5601b863a49b289bdc0e9fe3'
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
    get asV500(): {who: v500.MultiAddress, call: v500.Call} {
        assert(this.isV500)
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
    get isV600(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '5de48594210248660cb6358aa0e5a62ab51858e25c1589a7e3ddf614da6afec0'
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
    get asV600(): {who: v600.MultiAddress, call: v600.Call} {
        assert(this.isV600)
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
    get isV601(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '62ac10da47d3f5018c9e380b05c897e8e0917d4f2aac08ebd23efc2916a8de07'
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
    get asV601(): {who: v601.MultiAddress, call: v601.Call} {
        assert(this.isV601)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV602(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '049919f288320607463893e5c6bddca5fd01295fdc6fd664b9b16c7adc001953'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asV602(): {who: v602.MultiAddress, call: v602.Call} {
        assert(this.isV602)
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
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '09565103a41b6cb972648eb15f261ca08ca9c24a8a881b025ceff4cf6de8b345'
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
    get asEfinityV3012(): {call: efinityV3012.Call, weight: efinityV3012.Weight} {
        assert(this.isEfinityV3012)
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
    get isRocfinityV3012(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === 'ef6fe7d0c636223dc7389e1d1924343af6b401774e910acdd681a5990f89da31'
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
    get asRocfinityV3012(): {call: rocfinityV3012.Call, weight: rocfinityV3012.Weight} {
        assert(this.isRocfinityV3012)
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
    get isV500(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '15b86c403edea0d4d0985082b714f1ef80d8d68858c939cc34cb14ab43e96f0a'
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
    get asV500(): {call: v500.Call, weight: v500.Weight} {
        assert(this.isV500)
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
    get isV600(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === 'b07e895ad1405b4f44d26aa90ee79296b038768c876f98f7c0529835566ff9bc'
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
    get asV600(): {call: v600.Call, weight: v600.Weight} {
        assert(this.isV600)
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
    get isV601(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '43efb9f5a3014ebfbd711fdca91967e5843c81504ab5e18cbc2a2b5b6e869973'
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
    get asV601(): {call: v601.Call, weight: v601.Weight} {
        assert(this.isV601)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV602(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '7eb0ab00c2f612a07bb7e31c065ec4cce63666967eecd7b73baddf70dcc17adf'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asV602(): {call: v602.Call, weight: v602.Weight} {
        assert(this.isV602)
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
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.close') === 'a88911953f51bddf0f0aeafa7caa7ca904d30cdb24f940ff177d2acf7088d3bd'
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
    get asEfinityV3012(): {proposalHash: Uint8Array, index: number, proposalWeightBound: efinityV3012.Weight, lengthBound: number} {
        assert(this.isEfinityV3012)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalCommitteeCloseOldWeightCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalCommittee.close_old_weight')
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
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.close_old_weight') === '45a5978a11ceb5a8b2c51f7152abaa939cd8bd4bcdc5e1162029cedba4b598ea'
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
    get asEfinityV3012(): {proposalHash: Uint8Array, index: number, proposalWeightBound: bigint, lengthBound: number} {
        assert(this.isEfinityV3012)
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
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.execute') === '4a0db1d1ac89bb23b5eb6dff03a9c85c941f2680ae90c9a9bdb4c8672c57c08d'
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
    get asEfinityV3012(): {proposal: efinityV3012.Call, lengthBound: number} {
        assert(this.isEfinityV3012)
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
    get isRocfinityV3012(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.execute') === '87f0281405450ee112b448908a3bcf42da7d893ad165d52a6d5c35b8c1ce9b66'
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
    get asRocfinityV3012(): {proposal: rocfinityV3012.Call, lengthBound: number} {
        assert(this.isRocfinityV3012)
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
    get isV500(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.execute') === 'b1684a10f9b4cbd7534a667396ce6712277f00f197eb4426bdcfed491ee864b7'
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
    get asV500(): {proposal: v500.Call, lengthBound: number} {
        assert(this.isV500)
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
    get isV600(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.execute') === 'd6901228f970a7ae2b377b38ce7fcbcc5ca8e570b8bb8a9074c730eb13c496e3'
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
    get asV600(): {proposal: v600.Call, lengthBound: number} {
        assert(this.isV600)
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
    get isV601(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.execute') === 'b28b68a3dd66badc21cb53ab1687c9791a0b29bd28740e3160ea03bcf21db8de'
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
    get asV601(): {proposal: v601.Call, lengthBound: number} {
        assert(this.isV601)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * ## Complexity:
     * - `O(B + M + P)` where:
     * - `B` is `proposal` size in bytes (length-fee-bounded)
     * - `M` members-count (code-bounded)
     * - `P` complexity of dispatching `proposal`
     */
    get isV602(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.execute') === '42200a96ca0ad3184e9591f0d7f5892aff66f9f12198fcb806e1d22b72d800bc'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * ## Complexity:
     * - `O(B + M + P)` where:
     * - `B` is `proposal` size in bytes (length-fee-bounded)
     * - `M` members-count (code-bounded)
     * - `P` complexity of dispatching `proposal`
     */
    get asV602(): {proposal: v602.Call, lengthBound: number} {
        assert(this.isV602)
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
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.propose') === 'eb8d9d9a45415f57c0dcfd377d320a6d62cba1fcab5ed714e29c38e28cf8a6db'
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
    get asEfinityV3012(): {threshold: number, proposal: efinityV3012.Call, lengthBound: number} {
        assert(this.isEfinityV3012)
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
    get isRocfinityV3012(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.propose') === '92e93213fc1be2618c82cb60eb5f08adc129866b15780fce524dab7d46bafcc9'
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
    get asRocfinityV3012(): {threshold: number, proposal: rocfinityV3012.Call, lengthBound: number} {
        assert(this.isRocfinityV3012)
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
    get isV500(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.propose') === '0421aa3212da1f969a95c3e263147e221be170c3d71c5640351252a233116229'
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
    get asV500(): {threshold: number, proposal: v500.Call, lengthBound: number} {
        assert(this.isV500)
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
    get isV600(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.propose') === '01c6baaf53b5331d0c41f0159db307f3aee5c6491ecfe4c33f046483b348303b'
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
    get asV600(): {threshold: number, proposal: v600.Call, lengthBound: number} {
        assert(this.isV600)
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
    get isV601(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.propose') === '4b61433e884dffa8d3067b5a199d91ba1d8ca839a709c084cf267410834076a1'
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
    get asV601(): {threshold: number, proposal: v601.Call, lengthBound: number} {
        assert(this.isV601)
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
     * ## Complexity
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     */
    get isV602(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.propose') === '76cf450a5e2cc8f4a9da4604e748109d1a44da950b89749a9b498ecc46913f7c'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * ## Complexity
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     */
    get asV602(): {threshold: number, proposal: v602.Call, lengthBound: number} {
        assert(this.isV602)
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
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === '67bff685dccf95f9675b5479542cb35f715f39a61373e8b96f534b28e7b94128'
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
    get asEfinityV3012(): {index: number, call: efinityV3012.Call} {
        assert(this.isEfinityV3012)
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
    get isRocfinityV3012(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === '711ce2cfecb3011fecb639d4e926dbb8d148da3879eefb1aa8f02b72c45647d3'
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
    get asRocfinityV3012(): {index: number, call: rocfinityV3012.Call} {
        assert(this.isRocfinityV3012)
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
    get isV500(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === '8228a867ebef820abe86288abff2f2e9d268d9dccb2584ea45bd75d68bfe4bc6'
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
    get asV500(): {index: number, call: v500.Call} {
        assert(this.isV500)
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
    get isV600(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === '1147bd5154a11c00b937d0fca1a2b3acb0c06adcb00fda9223a70bb4e8cb6e6b'
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
    get asV600(): {index: number, call: v600.Call} {
        assert(this.isV600)
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
    get isV601(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === '41703a82485ae02a56541e3acba156cae26fe3522e64e72826e528de96dd5e74'
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
    get asV601(): {index: number, call: v601.Call} {
        assert(this.isV601)
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
    get isV602(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === '777c66328007a5bd1015c953dd7e098af367a050f49bd831a747761a3150de2b'
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
    get asV602(): {index: number, call: v602.Call} {
        assert(this.isV602)
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
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
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
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('Utility.batch') === '222ffd43bae75721556738fad842fa5718a9c6335a3816e523f39e27fdb74706'
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
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
    get asEfinityV3012(): {calls: efinityV3012.Call[]} {
        assert(this.isEfinityV3012)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
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
    get isRocfinityV3012(): boolean {
        return this._chain.getCallHash('Utility.batch') === 'f97908bb421906e08491d3825b90a29fc8e46699eef714fc8e2bd30afafdbbbf'
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
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
    get asRocfinityV3012(): {calls: rocfinityV3012.Call[]} {
        assert(this.isRocfinityV3012)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
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
    get isV500(): boolean {
        return this._chain.getCallHash('Utility.batch') === '77b6387abaaa673a066a11d3d46131e65b783f9a461b86ffea319e50d3cc682c'
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
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
    get asV500(): {calls: v500.Call[]} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
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
    get isV600(): boolean {
        return this._chain.getCallHash('Utility.batch') === 'a36148a440a88395c9642f65ca9e63d795550ab21b598a88a66327bc41865bcd'
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
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
    get asV600(): {calls: v600.Call[]} {
        assert(this.isV600)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
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
    get isV601(): boolean {
        return this._chain.getCallHash('Utility.batch') === 'eb21e1c13388f4c532d8f59a1d531280aa72fd3f27c906d0558cec63d6e94380'
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
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
    get asV601(): {calls: v601.Call[]} {
        assert(this.isV601)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get isV602(): boolean {
        return this._chain.getCallHash('Utility.batch') === 'df0d2425faf8eea0424c70a79ce2869335e38bfeec9c28c3ec2db8b6d60ce3cb'
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get asV602(): {calls: v602.Call[]} {
        assert(this.isV602)
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
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === '222ffd43bae75721556738fad842fa5718a9c6335a3816e523f39e27fdb74706'
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asEfinityV3012(): {calls: efinityV3012.Call[]} {
        assert(this.isEfinityV3012)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isRocfinityV3012(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === 'f97908bb421906e08491d3825b90a29fc8e46699eef714fc8e2bd30afafdbbbf'
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asRocfinityV3012(): {calls: rocfinityV3012.Call[]} {
        assert(this.isRocfinityV3012)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isV500(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === '77b6387abaaa673a066a11d3d46131e65b783f9a461b86ffea319e50d3cc682c'
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asV500(): {calls: v500.Call[]} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isV600(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === 'a36148a440a88395c9642f65ca9e63d795550ab21b598a88a66327bc41865bcd'
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asV600(): {calls: v600.Call[]} {
        assert(this.isV600)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isV601(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === 'eb21e1c13388f4c532d8f59a1d531280aa72fd3f27c906d0558cec63d6e94380'
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asV601(): {calls: v601.Call[]} {
        assert(this.isV601)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get isV602(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === 'df0d2425faf8eea0424c70a79ce2869335e38bfeec9c28c3ec2db8b6d60ce3cb'
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get asV602(): {calls: v602.Call[]} {
        assert(this.isV602)
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
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === 'd9359800f063d0cdd8316b0050142f61c424d9625ea441519dbc5a27ef9859f3'
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
    get asEfinityV3012(): {asOrigin: efinityV3012.OriginCaller, call: efinityV3012.Call} {
        assert(this.isEfinityV3012)
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
    get isRocfinityV3012(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === '1d12132e6e70653f2d4123d7ae2d10da60a0e0ed8018d95550710be641d44458'
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
    get asRocfinityV3012(): {asOrigin: rocfinityV3012.OriginCaller, call: rocfinityV3012.Call} {
        assert(this.isRocfinityV3012)
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
    get isV500(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === '5646f15c4842be20985720c8c98d33539a96ec7ab1c96cebbd015f55bfe5284e'
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
    get asV500(): {asOrigin: v500.OriginCaller, call: v500.Call} {
        assert(this.isV500)
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
    get isV600(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === 'c2215b8c58688b20c5c816cb0e425ae942d19e380097162505663cef6c3460fc'
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
    get asV600(): {asOrigin: v600.OriginCaller, call: v600.Call} {
        assert(this.isV600)
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
    get isV601(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === '22172f67822fd04f3d24cfb58e0fffe21b278c6b5cfcce8c228488d1afe6f262'
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
    get asV601(): {asOrigin: v601.OriginCaller, call: v601.Call} {
        assert(this.isV601)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV602(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === '355e70d82fd1df9fe280bfd74a101b21b8620758f893c035034549df11ca4147'
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asV602(): {asOrigin: v602.OriginCaller, call: v602.Call} {
        assert(this.isV602)
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
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === '222ffd43bae75721556738fad842fa5718a9c6335a3816e523f39e27fdb74706'
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asEfinityV3012(): {calls: efinityV3012.Call[]} {
        assert(this.isEfinityV3012)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isRocfinityV3012(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === 'f97908bb421906e08491d3825b90a29fc8e46699eef714fc8e2bd30afafdbbbf'
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asRocfinityV3012(): {calls: rocfinityV3012.Call[]} {
        assert(this.isRocfinityV3012)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isV500(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === '77b6387abaaa673a066a11d3d46131e65b783f9a461b86ffea319e50d3cc682c'
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asV500(): {calls: v500.Call[]} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isV600(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === 'a36148a440a88395c9642f65ca9e63d795550ab21b598a88a66327bc41865bcd'
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asV600(): {calls: v600.Call[]} {
        assert(this.isV600)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isV601(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === 'eb21e1c13388f4c532d8f59a1d531280aa72fd3f27c906d0558cec63d6e94380'
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asV601(): {calls: v601.Call[]} {
        assert(this.isV601)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get isV602(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === 'df0d2425faf8eea0424c70a79ce2869335e38bfeec9c28c3ec2db8b6d60ce3cb'
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get asV602(): {calls: v602.Call[]} {
        assert(this.isV602)
        return this._chain.decodeCall(this.call)
    }
}

export class UtilityWithWeightCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Utility.with_weight')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get isV500(): boolean {
        return this._chain.getCallHash('Utility.with_weight') === '15b86c403edea0d4d0985082b714f1ef80d8d68858c939cc34cb14ab43e96f0a'
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get asV500(): {call: v500.Call, weight: v500.Weight} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get isV600(): boolean {
        return this._chain.getCallHash('Utility.with_weight') === 'b07e895ad1405b4f44d26aa90ee79296b038768c876f98f7c0529835566ff9bc'
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get asV600(): {call: v600.Call, weight: v600.Weight} {
        assert(this.isV600)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get isV601(): boolean {
        return this._chain.getCallHash('Utility.with_weight') === '43efb9f5a3014ebfbd711fdca91967e5843c81504ab5e18cbc2a2b5b6e869973'
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get asV601(): {call: v601.Call, weight: v601.Weight} {
        assert(this.isV601)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get isV602(): boolean {
        return this._chain.getCallHash('Utility.with_weight') === '7eb0ab00c2f612a07bb7e31c065ec4cce63666967eecd7b73baddf70dcc17adf'
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get asV602(): {call: v602.Call, weight: v602.Weight} {
        assert(this.isV602)
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

export class VestingRegistrarForceVestAllSchedulesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'VestingRegistrar.force_vest_all_schedules')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * For all registered accounts, it sets the vesting schedule expiration to the next block
     * number.
     * 
     * This is a privileged call and can only be called by the root origin.
     * 
     * It simply updates each schedule registered for `account` to expire in the next block.
     */
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('VestingRegistrar.force_vest_all_schedules') === '12886a7697ff37821fd3068ef982fe5fe78bd390b2f49b4ad09eb1856aa01e23'
    }

    /**
     * For all registered accounts, it sets the vesting schedule expiration to the next block
     * number.
     * 
     * This is a privileged call and can only be called by the root origin.
     * 
     * It simply updates each schedule registered for `account` to expire in the next block.
     */
    get asEfinityV3012(): {accounts: efinityV3012.VestedAccount[]} {
        assert(this.isEfinityV3012)
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
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('XTokens.transfer') === '79391a9017e3585a7001d474da89bbb6c7839b0a5da51df2b2acb37145309690'
    }

    /**
     * Transfer native currencies.
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    get asEfinityV3012(): {currencyId: efinityV3012.AssetId, amount: bigint, dest: efinityV3012.VersionedMultiLocation, destWeightLimit: efinityV3012.V2WeightLimit} {
        assert(this.isEfinityV3012)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Transfer native currencies.
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    get isV500(): boolean {
        return this._chain.getCallHash('XTokens.transfer') === '26df7f19916781e6746694066c0d24f7fef9a20367132a192147dc6c414af64c'
    }

    /**
     * Transfer native currencies.
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    get asV500(): {currencyId: v500.AssetId, amount: bigint, dest: v500.VersionedMultiLocation, destWeightLimit: v500.V3WeightLimit} {
        assert(this.isV500)
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
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('XTokens.transfer_multiasset') === '124b77e480550e2d7eac49ed107d76163c8e7e2864b828c843c249ef6ae8515f'
    }

    /**
     * Transfer `MultiAsset`.
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    get asEfinityV3012(): {asset: efinityV3012.VersionedMultiAsset, dest: efinityV3012.VersionedMultiLocation, destWeightLimit: efinityV3012.V2WeightLimit} {
        assert(this.isEfinityV3012)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Transfer `MultiAsset`.
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    get isV500(): boolean {
        return this._chain.getCallHash('XTokens.transfer_multiasset') === 'a87b2931a2da31f4548173df0d164afbd7f9413f0b0a9373582011906fdc8ac9'
    }

    /**
     * Transfer `MultiAsset`.
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    get asV500(): {asset: v500.VersionedMultiAsset, dest: v500.VersionedMultiLocation, destWeightLimit: v500.V3WeightLimit} {
        assert(this.isV500)
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
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
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
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('XTokens.transfer_multiasset_with_fee') === 'afea57197ed47389f761cf32ea9293aa35a8fb52ae656fb5a27162139197c988'
    }

    /**
     * Transfer `MultiAsset` specifying the fee and amount as separate.
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
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
    get asEfinityV3012(): {asset: efinityV3012.VersionedMultiAsset, fee: efinityV3012.VersionedMultiAsset, dest: efinityV3012.VersionedMultiLocation, destWeightLimit: efinityV3012.V2WeightLimit} {
        assert(this.isEfinityV3012)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Transfer `MultiAsset` specifying the fee and amount as separate.
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
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
    get isV500(): boolean {
        return this._chain.getCallHash('XTokens.transfer_multiasset_with_fee') === 'e1673c048436ca84c1278f4f2f8a12456b25e4911f3ec72d0295b843ed7a4c7f'
    }

    /**
     * Transfer `MultiAsset` specifying the fee and amount as separate.
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
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
    get asV500(): {asset: v500.VersionedMultiAsset, fee: v500.VersionedMultiAsset, dest: v500.VersionedMultiLocation, destWeightLimit: v500.V3WeightLimit} {
        assert(this.isV500)
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
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
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
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('XTokens.transfer_multiassets') === '3c0b0dac1e68352c618c2cea8b190730d35ccc04742093f63dff05648d32475d'
    }

    /**
     * Transfer several `MultiAsset` specifying the item to be used as fee
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
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
    get asEfinityV3012(): {assets: efinityV3012.VersionedMultiAssets, feeItem: number, dest: efinityV3012.VersionedMultiLocation, destWeightLimit: efinityV3012.V2WeightLimit} {
        assert(this.isEfinityV3012)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Transfer several `MultiAsset` specifying the item to be used as fee
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
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
    get isV500(): boolean {
        return this._chain.getCallHash('XTokens.transfer_multiassets') === 'b49a1a3bce05ffe02f0ac5efca4907e6bf7f963113419870a760a3013dc86495'
    }

    /**
     * Transfer several `MultiAsset` specifying the item to be used as fee
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
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
    get asV500(): {assets: v500.VersionedMultiAssets, feeItem: number, dest: v500.VersionedMultiLocation, destWeightLimit: v500.V3WeightLimit} {
        assert(this.isV500)
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
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
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
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('XTokens.transfer_multicurrencies') === '77355a13cd005f4800b70515631ea9dfd26d4731dea1d46661dec1ab7daa6814'
    }

    /**
     * Transfer several currencies specifying the item to be used as fee
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
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
    get asEfinityV3012(): {currencies: [efinityV3012.AssetId, bigint][], feeItem: number, dest: efinityV3012.VersionedMultiLocation, destWeightLimit: efinityV3012.V2WeightLimit} {
        assert(this.isEfinityV3012)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Transfer several currencies specifying the item to be used as fee
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
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
    get isV500(): boolean {
        return this._chain.getCallHash('XTokens.transfer_multicurrencies') === 'fa576588d6b62b5cf4c7bdd8bee764e1be7fc0c2fbe730e805ffd89ad1a3b1e6'
    }

    /**
     * Transfer several currencies specifying the item to be used as fee
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
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
    get asV500(): {currencies: [v500.AssetId, bigint][], feeItem: number, dest: v500.VersionedMultiLocation, destWeightLimit: v500.V3WeightLimit} {
        assert(this.isV500)
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
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
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
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('XTokens.transfer_with_fee') === '72ecf67644efd990972c23f37933a458240035fe8aa77c27202e5dcd5c919f1a'
    }

    /**
     * Transfer native currencies specifying the fee and amount as
     * separate.
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
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
    get asEfinityV3012(): {currencyId: efinityV3012.AssetId, amount: bigint, fee: bigint, dest: efinityV3012.VersionedMultiLocation, destWeightLimit: efinityV3012.V2WeightLimit} {
        assert(this.isEfinityV3012)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Transfer native currencies specifying the fee and amount as
     * separate.
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
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
    get isV500(): boolean {
        return this._chain.getCallHash('XTokens.transfer_with_fee') === 'c05a522029f57db9f9e4ceeff8427cc674dd992c069c7798b3625e3d55e588cb'
    }

    /**
     * Transfer native currencies specifying the fee and amount as
     * separate.
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
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
    get asV500(): {currencyId: v500.AssetId, amount: bigint, fee: bigint, dest: v500.VersionedMultiLocation, destWeightLimit: v500.V3WeightLimit} {
        assert(this.isV500)
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
    get isEfinityV3012(): boolean {
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
    get asEfinityV3012(): {index: bigint, weightLimit: bigint} {
        assert(this.isEfinityV3012)
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
    get isV500(): boolean {
        return this._chain.getCallHash('XcmpQueue.service_overweight') === '80fae8875bf513efc1e06b7dac547fccfc1e5fc45888cc8afd9b43812cf51bf5'
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
    get asV500(): {index: bigint, weightLimit: v500.Weight} {
        assert(this.isV500)
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

    /**
     * Overwrites the amount of remaining weight under which we stop processing messages.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.threshold_weight`
     */
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('XcmpQueue.update_threshold_weight') === '8768ae636c927ffed8b3cb5f0df1e15afb0921835e5bc84b9495f4b39ea663b7'
    }

    /**
     * Overwrites the amount of remaining weight under which we stop processing messages.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.threshold_weight`
     */
    get asEfinityV3012(): {new: bigint} {
        assert(this.isEfinityV3012)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Overwrites the amount of remaining weight under which we stop processing messages.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.threshold_weight`
     */
    get isV500(): boolean {
        return this._chain.getCallHash('XcmpQueue.update_threshold_weight') === '75eef6f2cd3523e44f50db837d1610f4db03539037986ac2704c4a043d58ba81'
    }

    /**
     * Overwrites the amount of remaining weight under which we stop processing messages.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.threshold_weight`
     */
    get asV500(): {new: v500.Weight} {
        assert(this.isV500)
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

    /**
     * Overwrites the speed to which the available weight approaches the maximum weight.
     * A lower number results in a faster progression. A value of 1 makes the entire weight available initially.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.weight_restrict_decay`.
     */
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('XcmpQueue.update_weight_restrict_decay') === '8768ae636c927ffed8b3cb5f0df1e15afb0921835e5bc84b9495f4b39ea663b7'
    }

    /**
     * Overwrites the speed to which the available weight approaches the maximum weight.
     * A lower number results in a faster progression. A value of 1 makes the entire weight available initially.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.weight_restrict_decay`.
     */
    get asEfinityV3012(): {new: bigint} {
        assert(this.isEfinityV3012)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Overwrites the speed to which the available weight approaches the maximum weight.
     * A lower number results in a faster progression. A value of 1 makes the entire weight available initially.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.weight_restrict_decay`.
     */
    get isV500(): boolean {
        return this._chain.getCallHash('XcmpQueue.update_weight_restrict_decay') === '75eef6f2cd3523e44f50db837d1610f4db03539037986ac2704c4a043d58ba81'
    }

    /**
     * Overwrites the speed to which the available weight approaches the maximum weight.
     * A lower number results in a faster progression. A value of 1 makes the entire weight available initially.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.weight_restrict_decay`.
     */
    get asV500(): {new: v500.Weight} {
        assert(this.isV500)
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

    /**
     * Overwrite the maximum amount of weight any individual message may consume.
     * Messages above this weight go into the overweight queue and may only be serviced explicitly.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.xcmp_max_individual_weight`.
     */
    get isEfinityV3012(): boolean {
        return this._chain.getCallHash('XcmpQueue.update_xcmp_max_individual_weight') === '8768ae636c927ffed8b3cb5f0df1e15afb0921835e5bc84b9495f4b39ea663b7'
    }

    /**
     * Overwrite the maximum amount of weight any individual message may consume.
     * Messages above this weight go into the overweight queue and may only be serviced explicitly.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.xcmp_max_individual_weight`.
     */
    get asEfinityV3012(): {new: bigint} {
        assert(this.isEfinityV3012)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Overwrite the maximum amount of weight any individual message may consume.
     * Messages above this weight go into the overweight queue and may only be serviced explicitly.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.xcmp_max_individual_weight`.
     */
    get isV500(): boolean {
        return this._chain.getCallHash('XcmpQueue.update_xcmp_max_individual_weight') === '75eef6f2cd3523e44f50db837d1610f4db03539037986ac2704c4a043d58ba81'
    }

    /**
     * Overwrite the maximum amount of weight any individual message may consume.
     * Messages above this weight go into the overweight queue and may only be serviced explicitly.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.xcmp_max_individual_weight`.
     */
    get asV500(): {new: v500.Weight} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }
}
