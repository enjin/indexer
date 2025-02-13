import { sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx } from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as matrixEnjinV1002 from '../matrixEnjinV1002'
import * as matrixEnjinV1012 from '../matrixEnjinV1012'

export const attributeDepositBase = {
    /**
     *  The base deposit required for setting an attribute
     */
    matrixEnjinV603: new ConstantType('MultiTokens.AttributeDepositBase', sts.bigint()),
}

export const attributeDepositPerByte = {
    /**
     *  Additional deposit per byte for setting an attribute
     */
    matrixEnjinV603: new ConstantType('MultiTokens.AttributeDepositPerByte', sts.bigint()),
}

export const maxRecipientsPerBatchTransfer = {
    /**
     *  The max number of recipients allowed in a batch transfer
     */
    matrixEnjinV603: new ConstantType('MultiTokens.MaxRecipientsPerBatchTransfer', sts.number()),
}

export const maxTokensPerBatchTransfer = {
    /**
     *  The max number of tokens allowed in a batch transfer
     */
    matrixEnjinV603: new ConstantType('MultiTokens.MaxTokensPerBatchTransfer', sts.number()),
}

export const maxBatchAttributesPerCall = {
    /**
     *  The max number of attributes to set in one call
     */
    matrixEnjinV603: new ConstantType('MultiTokens.MaxBatchAttributesPerCall', sts.number()),
}

export const maxRecipientsPerBatchMint = {
    /**
     *  The max number of recipients allowed in a batch mint
     */
    matrixEnjinV603: new ConstantType('MultiTokens.MaxRecipientsPerBatchMint', sts.number()),
}

export const collectionCreationDeposit = {
    /**
     *  Amount of [`Balance`](BalanceOf) reserved to create a collection
     */
    matrixEnjinV603: new ConstantType('MultiTokens.CollectionCreationDeposit', sts.bigint()),
}

export const tokenAccountDeposit = {
    /**
     *  The amount of [`Balance`](BalanceOf) that must be reserved for a token account to be
     *  maintained
     */
    matrixEnjinV603: new ConstantType('MultiTokens.TokenAccountDeposit', sts.bigint()),
}

export const maxIdleOperationQueueLength = {
    /**
     *  The maximum length of the idle operation queue
     */
    matrixEnjinV603: new ConstantType('MultiTokens.MaxIdleOperationQueueLength', sts.number()),
}

export const maxIdleOperationQueueWeight = {
    /**
     *  The maximum weight of the idle operation queue
     */
    matrixEnjinV603: new ConstantType('MultiTokens.MaxIdleOperationQueueWeight', matrixEnjinV603.Weight),
}

export const maxOperatorsPerAccount = {
    /**
     *  The max number of operators a [`TokenAccount`] and an [`CollectionAccount`] can have
     */
    matrixEnjinV603: new ConstantType('MultiTokens.MaxOperatorsPerAccount', sts.number()),
}

export const maxReserves = {
    /**
     *  The maximum number of named reserves that can exist on an account
     */
    matrixEnjinV603: new ConstantType('MultiTokens.MaxReserves', sts.number()),
}

export const maxLocks = {
    /**
     *  The maximum number of locks that can exist on a token account
     */
    matrixEnjinV603: new ConstantType('MultiTokens.MaxLocks', sts.number()),
}

export const maxExplicitRoyaltyCurrencies = {
    /**
     *  The maximum number of explicit royalty currencies
     */
    matrixEnjinV603: new ConstantType('MultiTokens.MaxExplicitRoyaltyCurrencies', sts.number()),
}

export const nativeAssetInfo = {
    /**
     *  The [`NativeAssetInfo`](ep_multi_tokens::NativeAssetInfo) for this pallet
     */
    matrixEnjinV603: new ConstantType('MultiTokens.NativeAssetInfo', matrixEnjinV603.NativeAssetInfo),
}

export const reserveIdentifier = {
    /**
     *  The id used for making reservations with this pallet
     */
    matrixEnjinV603: new ConstantType('MultiTokens.ReserveIdentifier', sts.bytes()),
}

export const tokenMetadataMaxNameLength = {
    /**
     *  Max length of name stored in [`TokenMetadata`]
     */
    matrixEnjinV603: new ConstantType('MultiTokens.TokenMetadataMaxNameLength', sts.number()),
}

export const tokenMetadataMaxSymbolLength = {
    /**
     *  Max length of symbol stored in [`TokenMetadata`]
     */
    matrixEnjinV603: new ConstantType('MultiTokens.TokenMetadataMaxSymbolLength', sts.number()),
}

export const maxMigrationKeyLength = {
    /**
     *  Max length for the [`Migrations`] storage
     */
    matrixEnjinV603: new ConstantType('MultiTokens.MaxMigrationKeyLength', sts.number()),
}

export const migrationWeightLimitPercentage = {
    /**
     *  Percentage of block weight to consume during migration
     */
    matrixEnjinV603: new ConstantType('MultiTokens.MigrationWeightLimitPercentage', matrixEnjinV603.Perbill),
}

export const maxMigrationExtrinsicInfosToPause = {
    /**
     *  Bound for the number of extrinsics to pause during multi block migration
     */
    matrixEnjinV603: new ConstantType('MultiTokens.MaxMigrationExtrinsicInfosToPause', sts.number()),
}

export const migrationExtrinsicsInfosToPause = {
    /**
     *  List of extrinsics to pause during multi block migration (this pallet is excluded)
     */
    matrixEnjinV603: new ConstantType(
        'MultiTokens.MigrationExtrinsicsInfosToPause',
        sts.array(() => matrixEnjinV603.ExtrinsicInfo)
    ),
}

export const maxClaimableCollectionsPerAccount = {
    /**
     *  Max number of collections that can be claimed by an account
     */
    matrixEnjinV603: new ConstantType('MultiTokens.MaxClaimableCollectionsPerAccount', sts.number()),
}

export const maxClaimableTokensPerCall = {
    /**
     *  The max number of tokens that can be claimed in a single call to `claim_tokens`
     */
    matrixEnjinV603: new ConstantType('MultiTokens.MaxClaimableTokensPerCall', sts.number()),
}

export const claimCollectionsPrefix = {
    /**
     *  The prefix of the message used to claim collections
     */
    matrixEnjinV603: new ConstantType('MultiTokens.ClaimCollectionsPrefix', sts.bytes()),
}

export const claimTokensPrefix = {
    /**
     *  The prefix of the message used to claim tokens
     */
    matrixEnjinV603: new ConstantType('MultiTokens.ClaimTokensPrefix', sts.bytes()),
}

export const claimsAccountId = {
    /**
     *  The account id that owns unclaimed collections and tokens. This account also pays
     *  deposits if needed when claiming.
     */
    matrixEnjinV603: new ConstantType('MultiTokens.ClaimsAccountId', matrixEnjinV603.AccountId32),
}

export const ethereumMigrationAccountId = {
    /**
     *  The account id that provides the existential deposit when claiming collections
     */
    matrixEnjinV1002: new ConstantType('MultiTokens.EthereumMigrationAccountId', matrixEnjinV1002.AccountId32),
}

export const maxTokenGroupsPerToken = {
    /**
     *  The max number of token groups allowed per token
     */
    matrixEnjinV1012: new ConstantType('MultiTokens.MaxTokenGroupsPerToken', sts.number()),
}

export const maxDecimalCount = {
    /**
     *  Max number of decimals allowed for a token
     */
    matrixEnjinV1012: new ConstantType('MultiTokens.MaxDecimalCount', sts.number()),
}

export const migrationReimburser = {
    /**
     *  The account that will reimburse reserves for accounts that have a higher deposit during
     *  the migration
     */
    matrixEnjinV1012: new ConstantType('MultiTokens.MigrationReimburser', matrixEnjinV1012.AccountId32),
}

export const maxRoyaltyBeneficiaries = {
    /**
     *  The maximum number of beneficiaries for a royalty
     */
    v1050: new ConstantType('MultiTokens.MaxRoyaltyBeneficiaries', sts.number()),
}

export const maxTokensToRead = {
    /**
     *  The maximum number of tokens to read in a single call
     */
    v1050: new ConstantType('MultiTokens.MaxTokensToRead', sts.number()),
}

export const maxAttributesToRead = {
    /**
     *  The maximum number of attributes to read in a single call
     */
    v1050: new ConstantType('MultiTokens.MaxAttributesToRead', sts.number()),
}

export const maxKeyLength = {
    /**
     *  The maximum length of the key
     */
    v1050: new ConstantType('MultiTokens.MaxKeyLength', sts.number()),
}

export const maxUpgradeBatchSize = {
    /**
     *  Max number of elements that can be migrated in a single call of
     *  [`upgrade_token_accounts`](Pallet::upgrade_token_accounts)
     */
    v1050: new ConstantType('MultiTokens.MaxUpgradeBatchSize', sts.number()),
}
