'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.claimedEarlyBirdReward =
    exports.earlyBirdRewardCreated =
    exports.claimedEnj =
    exports.claimRejected =
    exports.delayTimeForClaimSet =
    exports.exchangeRateSet =
    exports.claimMoved =
    exports.claimMinted =
    exports.ethereumBlocksProcessed =
    exports.claimed =
    exports.claimRequested =
        void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var v104 = require('../v104')
var matrixV500 = require('../matrixV500')
var matrixEnjinV603 = require('../matrixEnjinV603')
exports.claimRequested = {
    name: 'Claims.ClaimRequested',
    /**
     * Claim has been requested by an account through the Relayer. `[who, amount,
     * transaction_hash, is_efi_token]`
     */
    matrixEnjinV603: new support_1.EventType(
        'Claims.ClaimRequested',
        support_1.sts.struct({
            /**
             * The account which requests the claim through the Relayer
             */
            who: matrixEnjinV603.H160,
            /**
             * The amount of burned tokens
             */
            amountBurned: support_1.sts.bigint(),
            /**
             * Hash of the transaction in which the tokens were burnt
             */
            transactionHash: matrixEnjinV603.H256,
            /**
             * If the burnt token is EFI or not
             */
            isEfiToken: support_1.sts.boolean(),
            /**
             * ENJ amount claimable
             */
            amountClaimable: support_1.sts.bigint(),
        })
    ),
    /**
     * Claim has been requested by an account through the Relayer. `[who, amount,
     * transaction_hash, is_efi_token, is_early_bird]`
     */
    v104: new support_1.EventType(
        'Claims.ClaimRequested',
        support_1.sts.struct({
            /**
             * The account which requests the claim through the Relayer
             */
            who: v104.Account,
            /**
             * The amount of burned tokens
             */
            amount: support_1.sts.bigint(),
            /**
             * Hash of the transaction in which the tokens were burnt
             */
            transactionHash: v104.H256,
            /**
             * If the burnt token is EFI or not
             */
            isEfiToken: support_1.sts.boolean(),
            /**
             * If the claim requested is for early bird
             */
            isEarlyBird: support_1.sts.boolean(),
        })
    ),
}
exports.claimed = {
    name: 'Claims.Claimed',
    /**
     * Someone claimed some ENJ2 from EFI. `[who, ethereum_address, amount]`
     */
    matrixEnjinV603: new support_1.EventType(
        'Claims.Claimed',
        support_1.sts.struct({
            /**
             * The account that received the claim
             */
            who: matrixEnjinV603.AccountId32,
            /**
             * The ethereum address, if the claim was made from Ethereum
             */
            ethereumAddress: support_1.sts.option(function () {
                return matrixEnjinV603.H160
            }),
            /**
             * The amount that was claimed
             */
            amount: support_1.sts.bigint(),
        })
    ),
}
exports.ethereumBlocksProcessed = {
    name: 'Claims.EthereumBlocksProcessed',
    /**
     * Claims have been processed for the Ethereum block by the Relayer.
     */
    matrixEnjinV603: new support_1.EventType(
        'Claims.EthereumBlocksProcessed',
        support_1.sts.struct({
            /**
             * Ethereum block number that contains the last burn transaction relayed by the
             * Relayer.
             */
            blockNumber: support_1.sts.number(),
        })
    ),
}
exports.claimMinted = {
    name: 'Claims.ClaimMinted',
    /**
     * Claim has been minted for someone by the root. `[who, amount]`
     */
    matrixEnjinV603: new support_1.EventType(
        'Claims.ClaimMinted',
        support_1.sts.struct({
            /**
             * the address allowed to collect this claim
             */
            who: matrixEnjinV603.H160,
            /**
             * the number of ENJ2 tokens that will be claimed
             */
            amount: support_1.sts.bigint(),
        })
    ),
}
exports.claimMoved = {
    name: 'Claims.ClaimMoved',
    /**
     * Someone's claim has been moved to another address. `[old, new]`
     */
    matrixEnjinV603: new support_1.EventType(
        'Claims.ClaimMoved',
        support_1.sts.struct({
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
exports.exchangeRateSet = {
    name: 'Claims.ExchangeRateSet',
    /**
     * Exchange rate is set. `[exchange_rate]`
     */
    matrixEnjinV603: new support_1.EventType(
        'Claims.ExchangeRateSet',
        support_1.sts.struct({
            /**
             * the amount of ENJ equivalent to 1 EFI
             */
            exchangeRate: matrixEnjinV603.Perbill,
        })
    ),
}
exports.delayTimeForClaimSet = {
    name: 'Claims.DelayTimeForClaimSet',
    /**
     * Delay time for claim is set. `[delay_time]`
     */
    matrixEnjinV603: new support_1.EventType(
        'Claims.DelayTimeForClaimSet',
        support_1.sts.struct({
            /**
             * the number of blocks the user has to wait to claim his ENJ2 once the claim for
             * which is requested
             */
            delayTime: support_1.sts.number(),
        })
    ),
}
exports.claimRejected = {
    name: 'Claims.ClaimRejected',
    /**
     * Someone's claim has been rejected. `[account, transaction_hash]`
     */
    matrixEnjinV603: new support_1.EventType(
        'Claims.ClaimRejected',
        support_1.sts.struct({
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
exports.claimedEnj = {
    name: 'Claims.ClaimedEnj',
    /**
     * A user burned EFI in order to begin a claim of ENJ.
     */
    matrixV500: new support_1.EventType(
        'Claims.ClaimedEnj',
        support_1.sts.struct({
            who: matrixV500.AccountId32,
            amount: support_1.sts.bigint(),
        })
    ),
}
exports.earlyBirdRewardCreated = {
    name: 'Claims.EarlyBirdRewardCreated',
    /**
     * Someone got an early bird reward based on ENJ2 Staked in nomination pool `[who,
     * amount]`
     */
    enjinV100: new support_1.EventType(
        'Claims.EarlyBirdRewardCreated',
        support_1.sts.struct({
            /**
             * The account that received the early bird reward
             */
            who: enjinV100.AccountId32,
            /**
             * The early bird amount received by account
             */
            amount: support_1.sts.bigint(),
        })
    ),
}
exports.claimedEarlyBirdReward = {
    name: 'Claims.ClaimedEarlyBirdReward',
    /**
     * Someone got an early bird reward `[who,
     * amount]`
     */
    v104: new support_1.EventType(
        'Claims.ClaimedEarlyBirdReward',
        support_1.sts.struct({
            /**
             * The account that received the early bird reward
             */
            who: v104.AccountId32,
            /**
             * The amount for early bird bonus received by account
             */
            amount: support_1.sts.bigint(),
        })
    ),
}
