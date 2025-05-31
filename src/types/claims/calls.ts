import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as enjinV100 from '../enjinV100'
import * as v101 from '../v101'
import * as v102 from '../v102'
import * as matrixV500 from '../matrixV500'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as matrixV604 from '../matrixV604'

export const claim =  {
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
    matrixEnjinV603: new CallType(
        'Claims.claim',
        sts.struct({
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
    matrixV500: new CallType(
        'Claims.claim',
        sts.struct({
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
    matrixV604: new CallType(
        'Claims.claim',
        sts.struct({
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
    enjinV100: new CallType(
        'Claims.claim',
        sts.struct({
            dest: enjinV100.AccountId32,
            ethereumSignature: sts.bytes(),
        })
    ),
}

export const mintClaim =  {
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
    matrixEnjinV603: new CallType(
        'Claims.mint_claim',
        sts.struct({
            who: matrixEnjinV603.H160,
            value: sts.bigint(),
        })
    ),
}

export const moveClaim =  {
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
    matrixEnjinV603: new CallType(
        'Claims.move_claim',
        sts.struct({
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
    matrixV500: new CallType(
        'Claims.move_claim',
        sts.struct({
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
    matrixV604: new CallType(
        'Claims.move_claim',
        sts.struct({
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
    enjinV100: new CallType(
        'Claims.move_claim',
        sts.struct({
            old: enjinV100.Account,
            new: enjinV100.Account,
        })
    ),
}

export const requestClaims =  {
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
    matrixEnjinV603: new CallType(
        'Claims.request_claims',
        sts.struct({
            blockNumber: sts.number(),
            batchData: sts.array(() => matrixEnjinV603.Claim),
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
    matrixV500: new CallType(
        'Claims.request_claims',
        sts.struct({
            blockNumber: sts.number(),
            batchData: sts.array(() => matrixV500.Claim),
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
    matrixV604: new CallType(
        'Claims.request_claims',
        sts.struct({
            blockNumber: sts.number(),
            batchData: sts.array(() => matrixV604.Claim),
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
    enjinV100: new CallType(
        'Claims.request_claims',
        sts.struct({
            blockNumber: sts.number(),
            batchData: sts.array(() => enjinV100.Claim),
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
    v101: new CallType(
        'Claims.request_claims',
        sts.struct({
            blockNumber: sts.number(),
            batchData: sts.array(() => v101.Claim),
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
    v102: new CallType(
        'Claims.request_claims',
        sts.struct({
            blockNumber: sts.number(),
            batchData: sts.array(() => v102.Claim),
            chain: v102.Chain,
        })
    ),
}

export const rejectClaims =  {
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
    matrixEnjinV603: new CallType(
        'Claims.reject_claims',
        sts.struct({
            batchData: sts.array(() => matrixEnjinV603.RejectData),
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
    matrixV500: new CallType(
        'Claims.reject_claims',
        sts.struct({
            batchData: sts.array(() => sts.tuple(() => [matrixV500.H256, sts.option(() => sts.number())])),
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
    matrixV604: new CallType(
        'Claims.reject_claims',
        sts.struct({
            batchData: sts.array(() => matrixV604.RejectData),
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
    enjinV100: new CallType(
        'Claims.reject_claims',
        sts.struct({
            batchData: sts.array(() => enjinV100.RejectData),
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
    v101: new CallType(
        'Claims.reject_claims',
        sts.struct({
            batchData: sts.array(() => sts.tuple(() => [v101.H256, sts.option(() => sts.number())])),
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
    v102: new CallType(
        'Claims.reject_claims',
        sts.struct({
            batchData: sts.array(() => v102.RejectData),
        })
    ),
}

export const setExchangeRate =  {
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
    matrixEnjinV603: new CallType(
        'Claims.set_exchange_rate',
        sts.struct({
            numerator: sts.bigint(),
            denominator: sts.bigint(),
        })
    ),
}

export const setDelayTime =  {
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
    matrixEnjinV603: new CallType(
        'Claims.set_delay_time',
        sts.struct({
            delayTime: sts.number(),
        })
    ),
}

export const claimFromEfinity =  {
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
    matrixV500: new CallType(
        'Claims.claim_from_efinity',
        sts.struct({
            dest: sts.option(() => matrixV500.AccountId32),
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
    enjinV100: new CallType(
        'Claims.claim_from_efinity',
        sts.unit()
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
    v101: new CallType(
        'Claims.claim_from_efinity',
        sts.struct({
            dest: sts.option(() => v101.AccountId32),
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
    v102: new CallType(
        'Claims.claim_from_efinity',
        sts.unit()
    ),
}

export const mintEnjFromNativeEfi =  {
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
    matrixV500: new CallType(
        'Claims.mint_enj_from_native_efi',
        sts.struct({
            amount: sts.bigint(),
        })
    ),
}

export const approveClaims =  {
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
    matrixV500: new CallType(
        'Claims.approve_claims',
        sts.struct({
            blockNumber: sts.number(),
            batchData: sts.array(() => sts.tuple(() => [matrixV500.H256, sts.option(() => sts.number())])),
            chain: matrixV500.Chain,
        })
    ),
}

export const claimEarlyBirdReward =  {
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
    enjinV100: new CallType(
        'Claims.claim_early_bird_reward',
        sts.unit()
    ),
}
