'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.maxCollectionAccountUpdateCount =
    exports.maxUpgradeBatchSize =
    exports.maxKeyLength =
    exports.maxAttributesToRead =
    exports.maxTokensToRead =
    exports.maxRoyaltyBeneficiaries =
    exports.tokenGroupDeposit =
    exports.migrationReimburser =
    exports.maxDecimalCount =
    exports.maxTokenGroupsPerToken =
    exports.ethereumMigrationAccountId =
    exports.claimsAccountId =
    exports.claimTokensPrefix =
    exports.claimCollectionsPrefix =
    exports.maxClaimableTokensPerCall =
    exports.maxClaimableCollectionsPerAccount =
    exports.migrationExtrinsicsInfosToPause =
    exports.maxMigrationExtrinsicInfosToPause =
    exports.migrationWeightLimitPercentage =
    exports.maxMigrationKeyLength =
    exports.tokenMetadataMaxSymbolLength =
    exports.tokenMetadataMaxNameLength =
    exports.reserveIdentifier =
    exports.nativeAssetInfo =
    exports.maxExplicitRoyaltyCurrencies =
    exports.maxLocks =
    exports.maxReserves =
    exports.maxOperatorsPerAccount =
    exports.maxIdleOperationQueueWeight =
    exports.maxIdleOperationQueueLength =
    exports.tokenAccountDeposit =
    exports.collectionCreationDeposit =
    exports.maxRecipientsPerBatchMint =
    exports.maxBatchAttributesPerCall =
    exports.maxTokensPerBatchTransfer =
    exports.maxRecipientsPerBatchTransfer =
    exports.attributeDepositPerByte =
    exports.attributeDepositBase =
        void 0
var support_1 = require('../support')
var matrixEnjinV603 = require('../matrixEnjinV603')
var matrixEnjinV1002 = require('../matrixEnjinV1002')
var matrixEnjinV1012 = require('../matrixEnjinV1012')
exports.attributeDepositBase = {
    /**
     *  The base deposit required for setting an attribute
     */
    matrixEnjinV603: new support_1.ConstantType('MultiTokens.AttributeDepositBase', support_1.sts.bigint()),
}
exports.attributeDepositPerByte = {
    /**
     *  Additional deposit per byte for setting an attribute
     */
    matrixEnjinV603: new support_1.ConstantType('MultiTokens.AttributeDepositPerByte', support_1.sts.bigint()),
}
exports.maxRecipientsPerBatchTransfer = {
    /**
     *  The max number of recipients allowed in a batch transfer
     */
    matrixEnjinV603: new support_1.ConstantType('MultiTokens.MaxRecipientsPerBatchTransfer', support_1.sts.number()),
}
exports.maxTokensPerBatchTransfer = {
    /**
     *  The max number of tokens allowed in a batch transfer
     */
    matrixEnjinV603: new support_1.ConstantType('MultiTokens.MaxTokensPerBatchTransfer', support_1.sts.number()),
}
exports.maxBatchAttributesPerCall = {
    /**
     *  The max number of attributes to set in one call
     */
    matrixEnjinV603: new support_1.ConstantType('MultiTokens.MaxBatchAttributesPerCall', support_1.sts.number()),
}
exports.maxRecipientsPerBatchMint = {
    /**
     *  The max number of recipients allowed in a batch mint
     */
    matrixEnjinV603: new support_1.ConstantType('MultiTokens.MaxRecipientsPerBatchMint', support_1.sts.number()),
}
exports.collectionCreationDeposit = {
    /**
     *  Amount of [`Balance`](BalanceOf) reserved to create a collection
     */
    matrixEnjinV603: new support_1.ConstantType('MultiTokens.CollectionCreationDeposit', support_1.sts.bigint()),
}
exports.tokenAccountDeposit = {
    /**
     *  The amount of [`Balance`](BalanceOf) that must be reserved for a token account to be
     *  maintained
     */
    matrixEnjinV603: new support_1.ConstantType('MultiTokens.TokenAccountDeposit', support_1.sts.bigint()),
}
exports.maxIdleOperationQueueLength = {
    /**
     *  The maximum length of the idle operation queue
     */
    matrixEnjinV603: new support_1.ConstantType('MultiTokens.MaxIdleOperationQueueLength', support_1.sts.number()),
}
exports.maxIdleOperationQueueWeight = {
    /**
     *  The maximum weight of the idle operation queue
     */
    matrixEnjinV603: new support_1.ConstantType('MultiTokens.MaxIdleOperationQueueWeight', matrixEnjinV603.Weight),
}
exports.maxOperatorsPerAccount = {
    /**
     *  The max number of operators a [`TokenAccount`] and an [`CollectionAccount`] can have
     */
    matrixEnjinV603: new support_1.ConstantType('MultiTokens.MaxOperatorsPerAccount', support_1.sts.number()),
}
exports.maxReserves = {
    /**
     *  The maximum number of named reserves that can exist on an account
     */
    matrixEnjinV603: new support_1.ConstantType('MultiTokens.MaxReserves', support_1.sts.number()),
}
exports.maxLocks = {
    /**
     *  The maximum number of locks that can exist on a token account
     */
    matrixEnjinV603: new support_1.ConstantType('MultiTokens.MaxLocks', support_1.sts.number()),
}
exports.maxExplicitRoyaltyCurrencies = {
    /**
     *  The maximum number of explicit royalty currencies
     */
    matrixEnjinV603: new support_1.ConstantType('MultiTokens.MaxExplicitRoyaltyCurrencies', support_1.sts.number()),
}
exports.nativeAssetInfo = {
    /**
     *  The [`NativeAssetInfo`](ep_multi_tokens::NativeAssetInfo) for this pallet
     */
    matrixEnjinV603: new support_1.ConstantType('MultiTokens.NativeAssetInfo', matrixEnjinV603.NativeAssetInfo),
}
exports.reserveIdentifier = {
    /**
     *  The id used for making reservations with this pallet
     */
    matrixEnjinV603: new support_1.ConstantType('MultiTokens.ReserveIdentifier', support_1.sts.bytes()),
}
exports.tokenMetadataMaxNameLength = {
    /**
     *  Max length of name stored in [`TokenMetadata`]
     */
    matrixEnjinV603: new support_1.ConstantType('MultiTokens.TokenMetadataMaxNameLength', support_1.sts.number()),
}
exports.tokenMetadataMaxSymbolLength = {
    /**
     *  Max length of symbol stored in [`TokenMetadata`]
     */
    matrixEnjinV603: new support_1.ConstantType('MultiTokens.TokenMetadataMaxSymbolLength', support_1.sts.number()),
}
exports.maxMigrationKeyLength = {
    /**
     *  Max length for the [`Migrations`] storage
     */
    matrixEnjinV603: new support_1.ConstantType('MultiTokens.MaxMigrationKeyLength', support_1.sts.number()),
}
exports.migrationWeightLimitPercentage = {
    /**
     *  Percentage of block weight to consume during migration
     */
    matrixEnjinV603: new support_1.ConstantType('MultiTokens.MigrationWeightLimitPercentage', matrixEnjinV603.Perbill),
}
exports.maxMigrationExtrinsicInfosToPause = {
    /**
     *  Bound for the number of extrinsics to pause during multi block migration
     */
    matrixEnjinV603: new support_1.ConstantType(
        'MultiTokens.MaxMigrationExtrinsicInfosToPause',
        support_1.sts.number()
    ),
}
exports.migrationExtrinsicsInfosToPause = {
    /**
     *  List of extrinsics to pause during multi block migration (this pallet is excluded)
     */
    matrixEnjinV603: new support_1.ConstantType(
        'MultiTokens.MigrationExtrinsicsInfosToPause',
        support_1.sts.array(function () {
            return matrixEnjinV603.ExtrinsicInfo
        })
    ),
}
exports.maxClaimableCollectionsPerAccount = {
    /**
     *  Max number of collections that can be claimed by an account
     */
    matrixEnjinV603: new support_1.ConstantType(
        'MultiTokens.MaxClaimableCollectionsPerAccount',
        support_1.sts.number()
    ),
}
exports.maxClaimableTokensPerCall = {
    /**
     *  The max number of tokens that can be claimed in a single call to `claim_tokens`
     */
    matrixEnjinV603: new support_1.ConstantType('MultiTokens.MaxClaimableTokensPerCall', support_1.sts.number()),
}
exports.claimCollectionsPrefix = {
    /**
     *  The prefix of the message used to claim collections
     */
    matrixEnjinV603: new support_1.ConstantType('MultiTokens.ClaimCollectionsPrefix', support_1.sts.bytes()),
}
exports.claimTokensPrefix = {
    /**
     *  The prefix of the message used to claim tokens
     */
    matrixEnjinV603: new support_1.ConstantType('MultiTokens.ClaimTokensPrefix', support_1.sts.bytes()),
}
exports.claimsAccountId = {
    /**
     *  The account id that owns unclaimed collections and tokens. This account also pays
     *  deposits if needed when claiming.
     */
    matrixEnjinV603: new support_1.ConstantType('MultiTokens.ClaimsAccountId', matrixEnjinV603.AccountId32),
}
exports.ethereumMigrationAccountId = {
    /**
     *  The account id that provides the existential deposit when claiming collections
     */
    matrixEnjinV1002: new support_1.ConstantType(
        'MultiTokens.EthereumMigrationAccountId',
        matrixEnjinV1002.AccountId32
    ),
}
exports.maxTokenGroupsPerToken = {
    /**
     *  The max number of token groups allowed per token
     */
    matrixEnjinV1012: new support_1.ConstantType('MultiTokens.MaxTokenGroupsPerToken', support_1.sts.number()),
}
exports.maxDecimalCount = {
    /**
     *  Max number of decimals allowed for a token
     */
    matrixEnjinV1012: new support_1.ConstantType('MultiTokens.MaxDecimalCount', support_1.sts.number()),
}
exports.migrationReimburser = {
    /**
     *  The account that will reimburse reserves for accounts that have a higher deposit during
     *  the migration
     */
    matrixEnjinV1012: new support_1.ConstantType('MultiTokens.MigrationReimburser', matrixEnjinV1012.AccountId32),
}
exports.tokenGroupDeposit = {
    /**
     *  The amount of [`Balance`](BalanceOf) that must be reserved for a token group to be
     *  maintained
     */
    matrixEnjinV1022: new support_1.ConstantType('MultiTokens.TokenGroupDeposit', support_1.sts.bigint()),
}
exports.maxRoyaltyBeneficiaries = {
    /**
     *  The maximum number of beneficiaries for a royalty
     */
    matrixEnjinV1022: new support_1.ConstantType('MultiTokens.MaxRoyaltyBeneficiaries', support_1.sts.number()),
}
exports.maxTokensToRead = {
    /**
     *  The maximum number of tokens to read in a single call
     */
    matrixEnjinV1022: new support_1.ConstantType('MultiTokens.MaxTokensToRead', support_1.sts.number()),
}
exports.maxAttributesToRead = {
    /**
     *  The maximum number of attributes to read in a single call
     */
    matrixEnjinV1022: new support_1.ConstantType('MultiTokens.MaxAttributesToRead', support_1.sts.number()),
}
exports.maxKeyLength = {
    /**
     *  The maximum length of the key
     */
    matrixEnjinV1022: new support_1.ConstantType('MultiTokens.MaxKeyLength', support_1.sts.number()),
}
exports.maxUpgradeBatchSize = {
    /**
     *  Max number of elements that can be migrated in a single lazy migration call
     */
    matrixEnjinV1022: new support_1.ConstantType('MultiTokens.MaxUpgradeBatchSize', support_1.sts.number()),
}
exports.maxCollectionAccountUpdateCount = {
    /**
     *  Max number of elements that can be processed in a single call of
     *  [`update_collection_account_approvals`](Pallet::update_collection_account_approvals)
     */
    matrixEnjinV1022: new support_1.ConstantType('MultiTokens.MaxCollectionAccountUpdateCount', support_1.sts.number()),
}
