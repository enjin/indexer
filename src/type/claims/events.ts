import { sts, Block, Bytes, Option, Result, EventType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'
import * as v104 from '../v104'
import * as matrixV500 from '../matrixV500'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as matrixV1030 from '../matrixV1030'

export const claimRequested = {
    name: 'Claims.ClaimRequested',
    /**
     * Claim has been requested by an account through the Relayer. `[who, amount,
     * transaction_hash, is_efi_token]`
     */
    matrixEnjinV603: new EventType(
        'Claims.ClaimRequested',
        sts.struct({
            /**
             * The account which requests the claim through the Relayer
             */
            who: matrixEnjinV603.H160,
            /**
             * The amount of burned tokens
             */
            amountBurned: sts.bigint(),
            /**
             * Hash of the transaction in which the tokens were burnt
             */
            transactionHash: matrixEnjinV603.H256,
            /**
             * If the burnt token is EFI or not
             */
            isEfiToken: sts.boolean(),
            /**
             * ENJ amount claimable
             */
            amountClaimable: sts.bigint(),
        })
    ),
    /**
     * Claim has been requested by an account through the Relayer. `[who, amount,
     * transaction_hash, is_efi_token, is_early_bird]`
     */
    v104: new EventType(
        'Claims.ClaimRequested',
        sts.struct({
            /**
             * The account which requests the claim through the Relayer
             */
            who: v104.Account,
            /**
             * The amount of burned tokens
             */
            amount: sts.bigint(),
            /**
             * Hash of the transaction in which the tokens were burnt
             */
            transactionHash: v104.H256,
            /**
             * If the burnt token is EFI or not
             */
            isEfiToken: sts.boolean(),
            /**
             * If the claim requested is for early bird
             */
            isEarlyBird: sts.boolean(),
        })
    ),
    /**
     * Claim has been requested by an account through the Relayer. `[who, amount,
     * transaction_hash, is_efi_token]`
     */
    matrixV1030: new EventType(
        'Claims.ClaimRequested',
        sts.struct({
            /**
             * The account which requests the claim through the Relayer
             */
            who: matrixV1030.H160,
            /**
             * The amount of burned tokens
             */
            amountBurned: sts.bigint(),
            /**
             * Hash of the transaction in which the tokens were burnt
             */
            transactionHash: matrixV1030.H256,
            /**
             * If the burnt token is EFI or not
             */
            isEfiToken: sts.boolean(),
            /**
             * ENJ amount claimable
             */
            amountClaimable: sts.bigint(),
        })
    ),
}

export const claimed = {
    name: 'Claims.Claimed',
    /**
     * Someone claimed some ENJ2 from EFI. `[who, ethereum_address, amount]`
     */
    matrixEnjinV603: new EventType(
        'Claims.Claimed',
        sts.struct({
            /**
             * The account that received the claim
             */
            who: matrixEnjinV603.AccountId32,
            /**
             * The ethereum address, if the claim was made from Ethereum
             */
            ethereumAddress: sts.option(() => matrixEnjinV603.H160),
            /**
             * The amount that was claimed
             */
            amount: sts.bigint(),
        })
    ),
}

export const ethereumBlocksProcessed = {
    name: 'Claims.EthereumBlocksProcessed',
    /**
     * Claims have been processed for the Ethereum block by the Relayer.
     */
    matrixEnjinV603: new EventType(
        'Claims.EthereumBlocksProcessed',
        sts.struct({
            /**
             * Ethereum block number that contains the last burn transaction relayed by the
             * Relayer.
             */
            blockNumber: sts.number(),
        })
    ),
}

export const claimMinted = {
    name: 'Claims.ClaimMinted',
    /**
     * Claim has been minted for someone by the root. `[who, amount]`
     */
    matrixEnjinV603: new EventType(
        'Claims.ClaimMinted',
        sts.struct({
            /**
             * the address allowed to collect this claim
             */
            who: matrixEnjinV603.H160,
            /**
             * the number of ENJ2 tokens that will be claimed
             */
            amount: sts.bigint(),
        })
    ),
}

export const claimMoved = {
    name: 'Claims.ClaimMoved',
    /**
     * Someone's claim has been moved to another address. `[old, new]`
     */
    matrixEnjinV603: new EventType(
        'Claims.ClaimMoved',
        sts.struct({
            /**
             * old account address that has the claim
             */
            old: matrixEnjinV603.H160,
            /**
             * new account address
             */
            new: matrixEnjinV603.H160,
        })
    ),
}

export const exchangeRateSet = {
    name: 'Claims.ExchangeRateSet',
    /**
     * Exchange rate is set. `[exchange_rate]`
     */
    matrixEnjinV603: new EventType(
        'Claims.ExchangeRateSet',
        sts.struct({
            /**
             * the amount of ENJ equivalent to 1 EFI
             */
            exchangeRate: matrixEnjinV603.Perbill,
        })
    ),
}

export const delayTimeForClaimSet = {
    name: 'Claims.DelayTimeForClaimSet',
    /**
     * Delay time for claim is set. `[delay_time]`
     */
    matrixEnjinV603: new EventType(
        'Claims.DelayTimeForClaimSet',
        sts.struct({
            /**
             * the number of blocks the user has to wait to claim his ENJ2 once the claim for
             * which is requested
             */
            delayTime: sts.number(),
        })
    ),
}

export const claimRejected = {
    name: 'Claims.ClaimRejected',
    /**
     * Someone's claim has been rejected. `[account, transaction_hash]`
     */
    matrixEnjinV603: new EventType(
        'Claims.ClaimRejected',
        sts.struct({
            /**
             * account address for which the claim was requested by the relayer
             */
            account: matrixEnjinV603.H160,
            /**
             * Hash of the transaction for which the claim was requested by the relayer
             */
            transactionHash: matrixEnjinV603.H256,
        })
    ),
}

export const claimedEnj = {
    name: 'Claims.ClaimedEnj',
    /**
     * A user burned EFI in order to begin a claim of ENJ.
     */
    matrixV500: new EventType(
        'Claims.ClaimedEnj',
        sts.struct({
            who: matrixV500.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const earlyBirdRewardCreated = {
    name: 'Claims.EarlyBirdRewardCreated',
    /**
     * Someone got an early bird reward based on ENJ2 Staked in nomination pool `[who,
     * amount]`
     */
    enjinV100: new EventType(
        'Claims.EarlyBirdRewardCreated',
        sts.struct({
            /**
             * The account that received the early bird reward
             */
            who: enjinV100.AccountId32,
            /**
             * The early bird amount received by account
             */
            amount: sts.bigint(),
        })
    ),
}

export const claimedEarlyBirdReward = {
    name: 'Claims.ClaimedEarlyBirdReward',
    /**
     * Someone got an early bird reward `[who,
     * amount]`
     */
    v104: new EventType(
        'Claims.ClaimedEarlyBirdReward',
        sts.struct({
            /**
             * The account that received the early bird reward
             */
            who: v104.AccountId32,
            /**
             * The amount for early bird bonus received by account
             */
            amount: sts.bigint(),
        })
    ),
}
