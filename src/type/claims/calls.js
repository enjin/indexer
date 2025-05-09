'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.claimEarlyBirdReward =
    exports.approveClaims =
    exports.mintEnjFromNativeEfi =
    exports.claimFromEfinity =
    exports.setDelayTime =
    exports.setExchangeRate =
    exports.rejectClaims =
    exports.requestClaims =
    exports.moveClaim =
    exports.mintClaim =
    exports.claim =
        void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var v101 = require('../v101')
var v102 = require('../v102')
var matrixV500 = require('../matrixV500')
var matrixEnjinV603 = require('../matrixEnjinV603')
var matrixV604 = require('../matrixV604')
exports.claim = {
    name: 'Claims.claim',
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
     * - `ethereum_signature`: The signature of an ethereum signed message matching the format
     *   described above.
     * - `ethereum_address` : The Ethereum address from which the message is signed.
     *
     * <weight>
     * The weight of this call is invariant over the input parameters.
     * Weight includes logic to validate unsigned `claim` call.
     *
     * Total Complexity: O(1)
     * </weight>
     */
    matrixEnjinV603: new support_1.CallType(
        'Claims.claim',
        support_1.sts.struct({
            dest: matrixEnjinV603.AccountId32,
            ethereumSignature: matrixEnjinV603.Signature,
            ethereumAddress: matrixEnjinV603.H160,
        })
    ),
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
     * - `ethereum_signature`: The signature of an ethereum signed message matching the format
     *   described above.
     *
     * <weight>
     * The weight of this call is invariant over the input parameters.
     * Weight includes logic to validate unsigned `claim` call.
     *
     * Total Complexity: O(1)
     * </weight>
     */
    matrixV500: new support_1.CallType(
        'Claims.claim',
        support_1.sts.struct({
            dest: matrixV500.AccountId32,
            ethereumSignature: matrixV500.Signature,
        })
    ),
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
     * - `ethereum_signature`: The signature of an ethereum signed message matching the format
     *   described above.
     * - `ethereum_address` : The Ethereum address from which the message is signed.
     *
     * <weight>
     * The weight of this call is invariant over the input parameters.
     * Weight includes logic to validate unsigned `claim` call.
     *
     * Total Complexity: O(1)
     * </weight>
     */
    matrixV604: new support_1.CallType(
        'Claims.claim',
        support_1.sts.struct({
            dest: matrixV604.AccountId32,
            ethereumSignature: matrixV604.Signature,
            ethereumAddress: matrixV604.H160,
        })
    ),
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
     * - `ethereum_signature`: The signature of an ethereum signed message matching the format
     *   described above.
     *
     * <weight>
     * The weight of this call is invariant over the input parameters.
     * Weight includes logic to validate unsigned `claim` call.
     *
     * Total Complexity: O(1)
     * </weight>
     */
    enjinV100: new support_1.CallType(
        'Claims.claim',
        support_1.sts.struct({
            dest: enjinV100.AccountId32,
            ethereumSignature: support_1.sts.bytes(),
        })
    ),
}
exports.mintClaim = {
    name: 'Claims.mint_claim',
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
    matrixEnjinV603: new support_1.CallType(
        'Claims.mint_claim',
        support_1.sts.struct({
            who: matrixEnjinV603.H160,
            value: support_1.sts.bigint(),
        })
    ),
}
exports.moveClaim = {
    name: 'Claims.move_claim',
    /**
     * `move_claim` moves the claim from one Ethereum address to another
     *
     * Arguments:
     *
     * * `old`: EthereumAddress,
     * * `new`: EthereumAddress,
     *
     * The weight of this call is invariant over the input parameters.
     *
     * Total Complexity: O(1)
     */
    matrixEnjinV603: new support_1.CallType(
        'Claims.move_claim',
        support_1.sts.struct({
            old: matrixEnjinV603.H160,
            new: matrixEnjinV603.H160,
        })
    ),
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
    matrixV500: new support_1.CallType(
        'Claims.move_claim',
        support_1.sts.struct({
            old: matrixV500.Account,
            new: matrixV500.Account,
        })
    ),
    /**
     * `move_claim` moves the claim from one Ethereum address to another
     *
     * Arguments:
     *
     * * `old`: EthereumAddress,
     * * `new`: EthereumAddress,
     *
     * The weight of this call is invariant over the input parameters.
     *
     * Total Complexity: O(1)
     */
    matrixV604: new support_1.CallType(
        'Claims.move_claim',
        support_1.sts.struct({
            old: matrixV604.H160,
            new: matrixV604.H160,
        })
    ),
    /**
     * `move_claim` moves the claim from one Ethereum address to another
     *
     * Arguments:
     *
     * * `old`: EthereumAddress,
     * * `new`: EthereumAddress,
     *
     * The weight of this call is invariant over the input parameters.
     *
     * Total Complexity: O(1)
     */
    enjinV100: new support_1.CallType(
        'Claims.move_claim',
        support_1.sts.struct({
            old: enjinV100.Account,
            new: enjinV100.Account,
        })
    ),
}
exports.requestClaims = {
    name: 'Claims.request_claims',
    /**
     * `request_claims` is a function that allows a relayer to request claims for a batch of
     * transactions
     *
     * Parameters:
     *
     * * `block_number`: The block number of Ethereum or Parachain block that contains the
     *   transaction.
     * * `batch_data`: A vector of EthereumTransactionDataOf structs.
     *
     * The weight of this call is invariant over the input parameters.
     * Weight includes logic to iterate over pending approval ETH transaction
     *
     * Total Complexity: O(N)
     */
    matrixEnjinV603: new support_1.CallType(
        'Claims.request_claims',
        support_1.sts.struct({
            blockNumber: support_1.sts.number(),
            batchData: support_1.sts.array(function () {
                return matrixEnjinV603.Claim
            }),
        })
    ),
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
    matrixV500: new support_1.CallType(
        'Claims.request_claims',
        support_1.sts.struct({
            blockNumber: support_1.sts.number(),
            batchData: support_1.sts.array(function () {
                return matrixV500.Claim
            }),
            chain: matrixV500.Chain,
        })
    ),
    /**
     * `request_claims` is a function that allows a relayer to request claims for a batch of
     * transactions
     *
     * Parameters:
     *
     * * `block_number`: The block number of Ethereum or Parachain block that contains the
     *   transaction.
     * * `batch_data`: A vector of EthereumTransactionDataOf structs.
     *
     * The weight of this call is invariant over the input parameters.
     * Weight includes logic to iterate over pending approval ETH transaction
     *
     * Total Complexity: O(N)
     */
    matrixV604: new support_1.CallType(
        'Claims.request_claims',
        support_1.sts.struct({
            blockNumber: support_1.sts.number(),
            batchData: support_1.sts.array(function () {
                return matrixV604.Claim
            }),
        })
    ),
    /**
     * `request_claims` is a function that allows a relayer to request claims for a batch of
     * transactions
     *
     * Parameters:
     *
     * * `block_number`: The block number of Ethereum or Parachain block that contains the
     *   transaction.
     * * `batch_data`: A vector of EthereumTransactionDataOf structs.
     * * `chain`: The chain that the transactions are from (Ethereum/Efinity Parachain).
     *
     * The weight of this call is invariant over the input parameters.
     * Weight includes logic to iterate over pending approval ETH transaction
     *
     * Total Complexity: O(N)
     */
    enjinV100: new support_1.CallType(
        'Claims.request_claims',
        support_1.sts.struct({
            blockNumber: support_1.sts.number(),
            batchData: support_1.sts.array(function () {
                return enjinV100.Claim
            }),
            chain: enjinV100.Chain,
        })
    ),
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
    v101: new support_1.CallType(
        'Claims.request_claims',
        support_1.sts.struct({
            blockNumber: support_1.sts.number(),
            batchData: support_1.sts.array(function () {
                return v101.Claim
            }),
            chain: v101.Chain,
        })
    ),
    /**
     * `request_claims` is a function that allows a relayer to request claims for a batch of
     * transactions
     *
     * Parameters:
     *
     * * `block_number`: The block number of Ethereum or Parachain block that contains the
     *   transaction.
     * * `batch_data`: A vector of EthereumTransactionDataOf structs.
     * * `chain`: The chain that the transactions are from (Ethereum/Efinity Parachain).
     *
     * The weight of this call is invariant over the input parameters.
     * Weight includes logic to iterate over pending approval ETH transaction
     *
     * Total Complexity: O(N)
     */
    v102: new support_1.CallType(
        'Claims.request_claims',
        support_1.sts.struct({
            blockNumber: support_1.sts.number(),
            batchData: support_1.sts.array(function () {
                return v102.Claim
            }),
            chain: v102.Chain,
        })
    ),
}
exports.rejectClaims = {
    name: 'Claims.reject_claims',
    /**
     * `reject_claims` is a function that is called by ForceOrigin and allows to reject a batch
     * of claims
     *
     * Arguments:
     *
     * * `batch_data`: A vector of user accounts and transaction hashes.
     *
     * The weight of this call is invariant over the input parameters.
     * Weight includes logic to iterate over pending approval ETH transaction
     * And REMOVE the pending ETH transaction
     *
     * Total Complexity: O(N)
     */
    matrixEnjinV603: new support_1.CallType(
        'Claims.reject_claims',
        support_1.sts.struct({
            batchData: support_1.sts.array(function () {
                return matrixEnjinV603.RejectData
            }),
        })
    ),
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
    matrixV500: new support_1.CallType(
        'Claims.reject_claims',
        support_1.sts.struct({
            batchData: support_1.sts.array(function () {
                return support_1.sts.tuple(function () {
                    return [
                        matrixV500.H256,
                        support_1.sts.option(function () {
                            return support_1.sts.number()
                        }),
                    ]
                })
            }),
        })
    ),
    /**
     * `reject_claims` is a function that is called by ForceOrigin and allows to reject a batch
     * of claims
     *
     * Arguments:
     *
     * * `batch_data`: A vector of user accounts and transaction hashes.
     *
     * The weight of this call is invariant over the input parameters.
     * Weight includes logic to iterate over pending approval ETH transaction
     * And REMOVE the pending ETH transaction
     *
     * Total Complexity: O(N)
     */
    matrixV604: new support_1.CallType(
        'Claims.reject_claims',
        support_1.sts.struct({
            batchData: support_1.sts.array(function () {
                return matrixV604.RejectData
            }),
        })
    ),
    /**
     * `reject_claims` is a function that lets us reject a batch of claims
     *
     * Arguments:
     *
     * * `batch_data`: A vector of transaction hashes.
     *
     * The weight of this call is invariant over the input parameters.
     * Weight includes logic to iterate over pending approval ETH transaction
     * And REMOVE the pending ETH transaction
     *
     * Total Complexity: O(N)
     */
    enjinV100: new support_1.CallType(
        'Claims.reject_claims',
        support_1.sts.struct({
            batchData: support_1.sts.array(function () {
                return enjinV100.RejectData
            }),
        })
    ),
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
    v101: new support_1.CallType(
        'Claims.reject_claims',
        support_1.sts.struct({
            batchData: support_1.sts.array(function () {
                return support_1.sts.tuple(function () {
                    return [
                        v101.H256,
                        support_1.sts.option(function () {
                            return support_1.sts.number()
                        }),
                    ]
                })
            }),
        })
    ),
    /**
     * `reject_claims` is a function that lets us reject a batch of claims
     *
     * Arguments:
     *
     * * `batch_data`: A vector of transaction hashes.
     *
     * The weight of this call is invariant over the input parameters.
     * Weight includes logic to iterate over pending approval ETH transaction
     * And REMOVE the pending ETH transaction
     *
     * Total Complexity: O(N)
     */
    v102: new support_1.CallType(
        'Claims.reject_claims',
        support_1.sts.struct({
            batchData: support_1.sts.array(function () {
                return v102.RejectData
            }),
        })
    ),
}
exports.setExchangeRate = {
    name: 'Claims.set_exchange_rate',
    /**
     * `set_exchange_rate` is a function that can be called by ForceOrigin and
     * it sets the exchange rate
     *
     * Parameters:
     *
     * * `numerator`: u128,
     * * `denominator`: u128,
     *
     * The weight of this call is invariant over the input parameters.
     *
     * Total Complexity: O(1)
     */
    matrixEnjinV603: new support_1.CallType(
        'Claims.set_exchange_rate',
        support_1.sts.struct({
            numerator: support_1.sts.bigint(),
            denominator: support_1.sts.bigint(),
        })
    ),
}
exports.setDelayTime = {
    name: 'Claims.set_delay_time',
    /**
     * This function sets a delay time for claims and requires a governance origin to execute.
     *
     * Arguments:
     *
     * * `delay_time`: The delay_time parameter is the number of blocks that must pass before a
     * certain action can be taken. In this case, it is being used to set the delay time for
     * claims in the governance pallet.
     *
     * Returns:
     *
     * either `Ok(())` if the delay time is successfully set, or an `Err` with a
     * `DispatchError` if the delay time is less than 24 hours.
     */
    matrixEnjinV603: new support_1.CallType(
        'Claims.set_delay_time',
        support_1.sts.struct({
            delayTime: support_1.sts.number(),
        })
    ),
}
exports.claimFromEfinity = {
    name: 'Claims.claim_from_efinity',
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
    matrixV500: new support_1.CallType(
        'Claims.claim_from_efinity',
        support_1.sts.struct({
            dest: support_1.sts.option(function () {
                return matrixV500.AccountId32
            }),
        })
    ),
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
    enjinV100: new support_1.CallType('Claims.claim_from_efinity', support_1.sts.unit()),
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
    v101: new support_1.CallType(
        'Claims.claim_from_efinity',
        support_1.sts.struct({
            dest: support_1.sts.option(function () {
                return v101.AccountId32
            }),
        })
    ),
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
    v102: new support_1.CallType('Claims.claim_from_efinity', support_1.sts.unit()),
}
exports.mintEnjFromNativeEfi = {
    name: 'Claims.mint_enj_from_native_efi',
    /**
     * Bridge EFI from the Efinity parachain to the Enjin Relay Chain
     *
     * Parameters:
     * - `origin`: The account initiating the claim and from which EFI will be burned.
     * - `amount`: Number of EFIs to burn in order to bridge to the Enjin Relay Chain. The
     * conversion rate will be according to the `ExchangeRate` storage on the Enjin Relay
     * Chain.
     */
    matrixV500: new support_1.CallType(
        'Claims.mint_enj_from_native_efi',
        support_1.sts.struct({
            amount: support_1.sts.bigint(),
        })
    ),
}
exports.approveClaims = {
    name: 'Claims.approve_claims',
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
    matrixV500: new support_1.CallType(
        'Claims.approve_claims',
        support_1.sts.struct({
            blockNumber: support_1.sts.number(),
            batchData: support_1.sts.array(function () {
                return support_1.sts.tuple(function () {
                    return [
                        matrixV500.H256,
                        support_1.sts.option(function () {
                            return support_1.sts.number()
                        }),
                    ]
                })
            }),
            chain: matrixV500.Chain,
        })
    ),
}
exports.claimEarlyBirdReward = {
    name: 'Claims.claim_early_bird_reward',
    /**
     * `claim_early_bird_reward` is a function that lets a user to claim early bird bonus for
     * his stake. User will be able to claim bonus only if he has staked previously and its
     * been 90 days since he staked.
     *
     * Caller must be the same as the account that has staked ENJ2.
     *
     * Returns:
     *
     * DispatchResult
     * Conditions:
     * - If there's no entry for the user in the `EarlyBirdRewards` mapping.
     * - If the user tries to claim early bird bonus for his stake before 90 days
     */
    enjinV100: new support_1.CallType('Claims.claim_early_bird_reward', support_1.sts.unit()),
}
