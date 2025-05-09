'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.lastIteratedMigrationKey =
    exports.idleOperations =
    exports.upgradeBlockNumber =
    exports.collectionDepositRecalculationStatus =
    exports.tokenGroupAttributes =
    exports.tokenGroups =
    exports.nextTokenGroupId =
    exports.pendingCollectionTransfers =
    exports.claimableCollectionIds =
    exports.nativeCollectionIds =
    exports.unmintableTokenIds =
    exports.ethereumAccounts =
    exports.ethereumBalances =
    exports.ethereumTokens =
    exports.migrationStatus =
    exports.migrations =
    exports.assetIdsByLocation =
    exports.attributes =
    exports.collectionAccounts =
    exports.nextCollectionId =
    exports.tokens =
    exports.collections =
    exports.tokenAccounts =
        void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var v100 = require('../v100')
var v101 = require('../v101')
var enjinV101 = require('../enjinV101')
var v102 = require('../v102')
var v106 = require('../v106')
var matrixV500 = require('../matrixV500')
var matrixV600 = require('../matrixV600')
var matrixEnjinV603 = require('../matrixEnjinV603')
var matrixV604 = require('../matrixV604')
var matrixEnjinV1000 = require('../matrixEnjinV1000')
var matrixEnjinV1004 = require('../matrixEnjinV1004')
var matrixV1010 = require('../matrixV1010')
var matrixEnjinV1012 = require('../matrixEnjinV1012')
var matrixV1020 = require('../matrixV1020')
var matrixV1021 = require('../matrixV1021')
var matrixEnjinV1022 = require('../matrixEnjinV1022')
var v1030 = require('../v1030')
var enjinV1032 = require('../enjinV1032')
var enjinV1050 = require('../enjinV1050')
var v1050 = require('../v1050')
exports.tokenAccounts = {
    /**
     *  Accounts per token
     */
    matrixEnjinV603: new support_1.StorageType(
        'MultiTokens.TokenAccounts',
        'Optional',
        [support_1.sts.bigint(), support_1.sts.bigint(), matrixEnjinV603.AccountId32],
        matrixEnjinV603.TokenAccount
    ),
    /**
     *  Accounts per token
     */
    matrixEnjinV1012: new support_1.StorageType(
        'MultiTokens.TokenAccounts',
        'Optional',
        [support_1.sts.bigint(), support_1.sts.bigint(), matrixEnjinV1012.AccountId32],
        matrixEnjinV1012.TokenAccount
    ),
    /**
     *  Accounts per token (real storage)
     */
    matrixEnjinV1022: new support_1.StorageType(
        'MultiTokens.TokenAccounts',
        'Optional',
        [support_1.sts.bigint(), support_1.sts.bigint(), matrixEnjinV1022.AccountId32],
        matrixEnjinV1022.TokenAccount
    ),
    /**
     *  Accounts per token
     */
    matrixV500: new support_1.StorageType(
        'MultiTokens.TokenAccounts',
        'Optional',
        [support_1.sts.bigint(), support_1.sts.bigint(), matrixV500.AccountId32],
        matrixV500.TokenAccount
    ),
    /**
     *  Accounts per token
     */
    matrixV1010: new support_1.StorageType(
        'MultiTokens.TokenAccounts',
        'Optional',
        [support_1.sts.bigint(), support_1.sts.bigint(), matrixV1010.AccountId32],
        matrixV1010.TokenAccount
    ),
    /**
     *  Accounts per token (real storage)
     */
    matrixV1020: new support_1.StorageType(
        'MultiTokens.TokenAccounts',
        'Optional',
        [support_1.sts.bigint(), support_1.sts.bigint(), matrixV1020.AccountId32],
        matrixV1020.TokenAccount
    ),
    /**
     *  Accounts per token
     */
    enjinV100: new support_1.StorageType(
        'MultiTokens.TokenAccounts',
        'Optional',
        [support_1.sts.bigint(), support_1.sts.bigint(), enjinV100.AccountId32],
        enjinV100.TokenAccount
    ),
    /**
     *  Accounts per token
     */
    enjinV1032: new support_1.StorageType(
        'MultiTokens.TokenAccounts',
        'Optional',
        [support_1.sts.bigint(), support_1.sts.bigint(), enjinV1032.AccountId32],
        enjinV1032.TokenAccount
    ),
    /**
     *  Accounts per token (real storage)
     */
    enjinV1050: new support_1.StorageType(
        'MultiTokens.TokenAccounts',
        'Optional',
        [support_1.sts.bigint(), support_1.sts.bigint(), enjinV1050.AccountId32],
        enjinV1050.TokenAccount
    ),
    /**
     *  Accounts per token
     */
    v100: new support_1.StorageType(
        'MultiTokens.TokenAccounts',
        'Optional',
        [v100.AccountId32, support_1.sts.bigint(), support_1.sts.bigint()],
        v100.TokenAccount
    ),
    /**
     *  Accounts per token
     */
    v101: new support_1.StorageType(
        'MultiTokens.TokenAccounts',
        'Optional',
        [support_1.sts.bigint(), support_1.sts.bigint(), v101.AccountId32],
        v101.TokenAccount
    ),
    /**
     *  Accounts per token
     */
    v1030: new support_1.StorageType(
        'MultiTokens.TokenAccounts',
        'Optional',
        [support_1.sts.bigint(), support_1.sts.bigint(), v1030.AccountId32],
        v1030.TokenAccount
    ),
    /**
     *  Accounts per token (real storage)
     */
    v1050: new support_1.StorageType(
        'MultiTokens.TokenAccounts',
        'Optional',
        [support_1.sts.bigint(), support_1.sts.bigint(), v1050.AccountId32],
        v1050.TokenAccount
    ),
}
exports.collections = {
    /**
     *  The collections in existence and their ownership details.
     */
    matrixEnjinV603: new support_1.StorageType(
        'MultiTokens.Collections',
        'Optional',
        [support_1.sts.bigint()],
        matrixEnjinV603.Collection
    ),
    /**
     *  The collections in existence and their ownership details.
     */
    matrixEnjinV1012: new support_1.StorageType(
        'MultiTokens.Collections',
        'Optional',
        [support_1.sts.bigint()],
        matrixEnjinV1012.Collection
    ),
    /**
     *  The collections in existence and their ownership details.
     */
    matrixEnjinV1022: new support_1.StorageType(
        'MultiTokens.Collections',
        'Optional',
        [support_1.sts.bigint()],
        matrixEnjinV1022.Collection
    ),
    /**
     *  The collections in existence and their ownership details.
     */
    matrixV500: new support_1.StorageType(
        'MultiTokens.Collections',
        'Optional',
        [support_1.sts.bigint()],
        matrixV500.Collection
    ),
    /**
     *  The collections in existence and their ownership details.
     */
    matrixV1010: new support_1.StorageType(
        'MultiTokens.Collections',
        'Optional',
        [support_1.sts.bigint()],
        matrixV1010.Collection
    ),
    /**
     *  The collections in existence and their ownership details.
     */
    matrixV1020: new support_1.StorageType(
        'MultiTokens.Collections',
        'Optional',
        [support_1.sts.bigint()],
        matrixV1020.Collection
    ),
    /**
     *  The collections in existence and their ownership details.
     */
    enjinV100: new support_1.StorageType(
        'MultiTokens.Collections',
        'Optional',
        [support_1.sts.bigint()],
        enjinV100.Collection
    ),
    /**
     *  The collections in existence and their ownership details.
     */
    enjinV1032: new support_1.StorageType(
        'MultiTokens.Collections',
        'Optional',
        [support_1.sts.bigint()],
        enjinV1032.Collection
    ),
    /**
     *  The collections in existence and their ownership details.
     */
    enjinV1050: new support_1.StorageType(
        'MultiTokens.Collections',
        'Optional',
        [support_1.sts.bigint()],
        enjinV1050.Collection
    ),
    /**
     *  The collections in existence and their ownership details.
     */
    v100: new support_1.StorageType('MultiTokens.Collections', 'Optional', [support_1.sts.bigint()], v100.Collection),
    /**
     *  The collections in existence and their ownership details.
     */
    v1030: new support_1.StorageType('MultiTokens.Collections', 'Optional', [support_1.sts.bigint()], v1030.Collection),
    /**
     *  The collections in existence and their ownership details.
     */
    v1050: new support_1.StorageType('MultiTokens.Collections', 'Optional', [support_1.sts.bigint()], v1050.Collection),
}
exports.tokens = {
    /**
     *  Tokens storage
     */
    matrixEnjinV603: new support_1.StorageType(
        'MultiTokens.Tokens',
        'Optional',
        [support_1.sts.bigint(), support_1.sts.bigint()],
        matrixEnjinV603.Token
    ),
    /**
     *  Tokens storage
     */
    matrixEnjinV1012: new support_1.StorageType(
        'MultiTokens.Tokens',
        'Optional',
        [support_1.sts.bigint(), support_1.sts.bigint()],
        matrixEnjinV1012.Token
    ),
    /**
     *  Tokens storage
     */
    matrixEnjinV1022: new support_1.StorageType(
        'MultiTokens.Tokens',
        'Optional',
        [support_1.sts.bigint(), support_1.sts.bigint()],
        matrixEnjinV1022.Token
    ),
    /**
     *  Tokens storage
     */
    matrixV500: new support_1.StorageType(
        'MultiTokens.Tokens',
        'Optional',
        [support_1.sts.bigint(), support_1.sts.bigint()],
        matrixV500.Token
    ),
    /**
     *  Tokens storage
     */
    matrixV600: new support_1.StorageType(
        'MultiTokens.Tokens',
        'Optional',
        [support_1.sts.bigint(), support_1.sts.bigint()],
        matrixV600.Token
    ),
    /**
     *  Tokens storage
     */
    matrixV1010: new support_1.StorageType(
        'MultiTokens.Tokens',
        'Optional',
        [support_1.sts.bigint(), support_1.sts.bigint()],
        matrixV1010.Token
    ),
    /**
     *  Tokens storage
     */
    matrixV1020: new support_1.StorageType(
        'MultiTokens.Tokens',
        'Optional',
        [support_1.sts.bigint(), support_1.sts.bigint()],
        matrixV1020.Token
    ),
    /**
     *  Tokens storage
     */
    enjinV100: new support_1.StorageType(
        'MultiTokens.Tokens',
        'Optional',
        [support_1.sts.bigint(), support_1.sts.bigint()],
        enjinV100.Token
    ),
    /**
     *  Tokens storage
     */
    enjinV1032: new support_1.StorageType(
        'MultiTokens.Tokens',
        'Optional',
        [support_1.sts.bigint(), support_1.sts.bigint()],
        enjinV1032.Token
    ),
    /**
     *  Tokens storage
     */
    enjinV1050: new support_1.StorageType(
        'MultiTokens.Tokens',
        'Optional',
        [support_1.sts.bigint(), support_1.sts.bigint()],
        enjinV1050.Token
    ),
    /**
     *  Tokens storage
     */
    v100: new support_1.StorageType(
        'MultiTokens.Tokens',
        'Optional',
        [support_1.sts.bigint(), support_1.sts.bigint()],
        v100.Token
    ),
    /**
     *  Tokens storage
     */
    v102: new support_1.StorageType(
        'MultiTokens.Tokens',
        'Optional',
        [support_1.sts.bigint(), support_1.sts.bigint()],
        v102.Token
    ),
    /**
     *  Tokens storage
     */
    v1030: new support_1.StorageType(
        'MultiTokens.Tokens',
        'Optional',
        [support_1.sts.bigint(), support_1.sts.bigint()],
        v1030.Token
    ),
    /**
     *  Tokens storage
     */
    v1050: new support_1.StorageType(
        'MultiTokens.Tokens',
        'Optional',
        [support_1.sts.bigint(), support_1.sts.bigint()],
        v1050.Token
    ),
}
exports.nextCollectionId = {
    /**
     *  Sequencer for collectionID generators.
     */
    matrixEnjinV603: new support_1.StorageType('MultiTokens.NextCollectionId', 'Default', [], support_1.sts.bigint()),
}
exports.collectionAccounts = {
    /**
     *  Stores information for an account per collection
     */
    matrixEnjinV603: new support_1.StorageType(
        'MultiTokens.CollectionAccounts',
        'Optional',
        [support_1.sts.bigint(), matrixEnjinV603.AccountId32],
        matrixEnjinV603.CollectionAccount
    ),
}
exports.attributes = {
    /**
     *  Metadata of collections and tokens.
     */
    matrixEnjinV603: new support_1.StorageType(
        'MultiTokens.Attributes',
        'Optional',
        [
            support_1.sts.bigint(),
            support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
            support_1.sts.bytes(),
        ],
        matrixEnjinV603.Attribute
    ),
    /**
     *  Metadata of collections and tokens. Contains the attribute's value and the storage deposit.
     */
    matrixEnjinV1012: new support_1.StorageType(
        'MultiTokens.Attributes',
        'Optional',
        [
            support_1.sts.bigint(),
            support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
            support_1.sts.bytes(),
        ],
        matrixEnjinV1012.Attribute
    ),
    /**
     *  Metadata of collections and tokens.
     */
    matrixV500: new support_1.StorageType(
        'MultiTokens.Attributes',
        'Optional',
        [
            support_1.sts.bigint(),
            support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
            support_1.sts.bytes(),
        ],
        matrixV500.Attribute
    ),
    /**
     *  Metadata of collections and tokens.
     */
    matrixV1010: new support_1.StorageType(
        'MultiTokens.Attributes',
        'Optional',
        [
            support_1.sts.bigint(),
            support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
            support_1.sts.bytes(),
        ],
        matrixV1010.Attribute
    ),
    /**
     *  Metadata of collections and tokens.
     */
    enjinV100: new support_1.StorageType(
        'MultiTokens.Attributes',
        'Optional',
        [
            support_1.sts.bigint(),
            support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
            support_1.sts.bytes(),
        ],
        enjinV100.Attribute
    ),
    /**
     *  Metadata of collections and tokens. Contains the attribute's value and the storage deposit.
     */
    enjinV1032: new support_1.StorageType(
        'MultiTokens.Attributes',
        'Optional',
        [
            support_1.sts.bigint(),
            support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
            support_1.sts.bytes(),
        ],
        enjinV1032.Attribute
    ),
    /**
     *  Metadata of collections and tokens.
     */
    v100: new support_1.StorageType(
        'MultiTokens.Attributes',
        'Optional',
        [
            support_1.sts.bigint(),
            support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
            support_1.sts.bytes(),
        ],
        v100.Attribute
    ),
    /**
     *  Metadata of collections and tokens.
     */
    v1030: new support_1.StorageType(
        'MultiTokens.Attributes',
        'Optional',
        [
            support_1.sts.bigint(),
            support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
            support_1.sts.bytes(),
        ],
        v1030.Attribute
    ),
}
exports.assetIdsByLocation = {
    /**
     *  Map of Locations to AssetIds of Foreign Tokens
     */
    matrixEnjinV603: new support_1.StorageType(
        'MultiTokens.AssetIdsByLocation',
        'Optional',
        [matrixEnjinV603.V3MultiLocation],
        matrixEnjinV603.AssetId
    ),
    /**
     *  Map of Locations to AssetIds of Foreign Tokens
     */
    matrixEnjinV1012: new support_1.StorageType(
        'MultiTokens.AssetIdsByLocation',
        'Optional',
        [matrixEnjinV1012.V4Location],
        matrixEnjinV1012.AssetId
    ),
    /**
     *  Map of Locations to AssetIds of Foreign Tokens
     */
    matrixV500: new support_1.StorageType(
        'MultiTokens.AssetIdsByLocation',
        'Optional',
        [matrixV500.V3MultiLocation],
        matrixV500.AssetId
    ),
    /**
     *  Map of Locations to AssetIds of Foreign Tokens
     */
    matrixV1010: new support_1.StorageType(
        'MultiTokens.AssetIdsByLocation',
        'Optional',
        [matrixV1010.V4Location],
        matrixV1010.AssetId
    ),
    /**
     *  Map of Locations to AssetIds of Foreign Tokens
     */
    enjinV100: new support_1.StorageType(
        'MultiTokens.AssetIdsByLocation',
        'Optional',
        [enjinV100.V3MultiLocation],
        enjinV100.AssetId
    ),
    /**
     *  Map of Locations to AssetIds of Foreign Tokens
     */
    enjinV1032: new support_1.StorageType(
        'MultiTokens.AssetIdsByLocation',
        'Optional',
        [enjinV1032.V4Location],
        enjinV1032.AssetId
    ),
    /**
     *  Map of Locations to AssetIds of Foreign Tokens
     */
    v100: new support_1.StorageType('MultiTokens.AssetIdsByLocation', 'Optional', [v100.V3MultiLocation], v100.AssetId),
    /**
     *  Map of Locations to AssetIds of Foreign Tokens
     */
    v1030: new support_1.StorageType('MultiTokens.AssetIdsByLocation', 'Optional', [v1030.V4Location], v1030.AssetId),
}
exports.migrations = {
    /**
     *  Stores last iterated keys for migrations. Used by multi block migrations
     *  to resume from the last iterated key.
     *
     *  Key is the storage prefix, value is the status of migration and last iterated key, if any.
     *  i.e `["MultiTokens", "TokenAccounts"] -> (collection_id, token_id, account_id)`
     */
    matrixEnjinV603: new support_1.StorageType(
        'MultiTokens.Migrations',
        'Optional',
        [support_1.sts.bytes()],
        matrixEnjinV603.Migration
    ),
}
exports.migrationStatus = {
    /**
     *  Status of the current multi-block migration
     */
    matrixEnjinV603: new support_1.StorageType(
        'MultiTokens.MigrationStatus',
        'Default',
        [],
        matrixEnjinV603.MigrationStage
    ),
}
exports.ethereumTokens = {
    /**
     *  The token assets from ethereum
     */
    matrixEnjinV603: new support_1.StorageType(
        'MultiTokens.EthereumTokens',
        'Optional',
        [support_1.sts.bigint(), support_1.sts.bigint()],
        matrixEnjinV603.EthereumToken
    ),
}
exports.ethereumBalances = {
    /**
     *  Holds the ethereum balance for each token
     */
    matrixEnjinV603: new support_1.StorageType(
        'MultiTokens.EthereumBalances',
        'Optional',
        [matrixEnjinV603.H160, support_1.sts.bigint(), support_1.sts.bigint()],
        support_1.sts.bigint()
    ),
}
exports.ethereumAccounts = {
    /**
     *  Stores data for an ethereum address
     */
    matrixEnjinV603: new support_1.StorageType(
        'MultiTokens.EthereumAccounts',
        'Optional',
        [matrixEnjinV603.H160],
        matrixEnjinV603.EthereumAccount
    ),
}
exports.unmintableTokenIds = {
    /**
     *  These token ids can only be minted by calling `claim_token`
     */
    matrixEnjinV603: new support_1.StorageType(
        'MultiTokens.UnmintableTokenIds',
        'Optional',
        [support_1.sts.bigint()],
        matrixEnjinV603.RangeInclusive
    ),
    /**
     *  These token ids can only be minted by calling `force_mint`. The second key is an ethereum
     *  base token id, and the value is the highest token index that cannot be minted. All token
     *  indexes start from 1, so effectively it blocks token indexes from 1 to the value.
     */
    matrixEnjinV1000: new support_1.StorageType(
        'MultiTokens.UnmintableTokenIds',
        'Optional',
        [support_1.sts.bigint(), support_1.sts.bigint()],
        support_1.sts.bigint()
    ),
    /**
     *  These token ids can only be minted by calling `claim_token`
     */
    matrixV604: new support_1.StorageType(
        'MultiTokens.UnmintableTokenIds',
        'Optional',
        [support_1.sts.bigint()],
        matrixV604.RangeInclusive
    ),
    /**
     *  These token ids can only be minted by calling `force_mint`. The second key is an ethereum
     *  base token id, and the value is the highest token index that cannot be minted. All token
     *  indexes start from 1, so effectively it blocks token indexes from 1 to the value.
     */
    matrixV1000: new support_1.StorageType(
        'MultiTokens.UnmintableTokenIds',
        'Optional',
        [support_1.sts.bigint(), support_1.sts.bigint()],
        support_1.sts.bigint()
    ),
    /**
     *  These token ids can only be minted by calling `claim_token`
     */
    enjinV101: new support_1.StorageType(
        'MultiTokens.UnmintableTokenIds',
        'Optional',
        [support_1.sts.bigint()],
        enjinV101.RangeInclusive
    ),
    /**
     *  These token ids can only be minted by calling `force_mint`. The second key is an ethereum
     *  base token id, and the value is the highest token index that cannot be minted. All token
     *  indexes start from 1, so effectively it blocks token indexes from 1 to the value.
     */
    enjinV1021: new support_1.StorageType(
        'MultiTokens.UnmintableTokenIds',
        'Optional',
        [support_1.sts.bigint(), support_1.sts.bigint()],
        support_1.sts.bigint()
    ),
    /**
     *  These token ids can only be minted by calling `claim_token`
     */
    v106: new support_1.StorageType(
        'MultiTokens.UnmintableTokenIds',
        'Optional',
        [support_1.sts.bigint()],
        v106.RangeInclusive
    ),
    /**
     *  These token ids can only be minted by calling `force_mint`. The second key is an ethereum
     *  base token id, and the value is the highest token index that cannot be minted. All token
     *  indexes start from 1, so effectively it blocks token indexes from 1 to the value.
     */
    v1021: new support_1.StorageType(
        'MultiTokens.UnmintableTokenIds',
        'Optional',
        [support_1.sts.bigint(), support_1.sts.bigint()],
        support_1.sts.bigint()
    ),
}
exports.nativeCollectionIds = {
    /**
     *  Map of ethereum collection id to the native collection id
     */
    matrixEnjinV603: new support_1.StorageType(
        'MultiTokens.NativeCollectionIds',
        'Optional',
        [support_1.sts.bigint()],
        support_1.sts.bigint()
    ),
}
exports.claimableCollectionIds = {
    /**
     *  Stores data for an ethereum address
     */
    matrixEnjinV1000: new support_1.StorageType(
        'MultiTokens.ClaimableCollectionIds',
        'Optional',
        [matrixEnjinV1000.H160],
        support_1.sts.array(function () {
            return support_1.sts.bigint()
        })
    ),
}
exports.pendingCollectionTransfers = {
    /**
     *  Collections waiting to be transferred
     */
    matrixEnjinV1004: new support_1.StorageType(
        'MultiTokens.PendingCollectionTransfers',
        'Optional',
        [support_1.sts.bigint()],
        matrixEnjinV1004.AccountId32
    ),
}
exports.nextTokenGroupId = {
    /**
     *  Sequencer for token group id generators.
     */
    matrixEnjinV1022: new support_1.StorageType('MultiTokens.NextTokenGroupId', 'Default', [], support_1.sts.bigint()),
}
exports.tokenGroups = {
    /**
     *  Stores token group data, keeping track of the collection id where they belong, and the
     *  number of tokens and attributes in the group
     */
    matrixEnjinV1022: new support_1.StorageType(
        'MultiTokens.TokenGroups',
        'Optional',
        [support_1.sts.bigint()],
        matrixEnjinV1022.TokenGroup
    ),
}
exports.tokenGroupAttributes = {
    /**
     *  Metadata of token groups. Contains the attribute's value and the storage deposit.
     */
    matrixEnjinV1022: new support_1.StorageType(
        'MultiTokens.TokenGroupAttributes',
        'Optional',
        [support_1.sts.bigint(), support_1.sts.bytes()],
        matrixEnjinV1022.Attribute
    ),
}
exports.collectionDepositRecalculationStatus = {
    matrixEnjinV1022: new support_1.StorageType(
        'MultiTokens.CollectionDepositRecalculationStatus',
        'Optional',
        [],
        matrixEnjinV1022.CollectionDepositUpdateStatus
    ),
    matrixV1020: new support_1.StorageType(
        'MultiTokens.CollectionDepositRecalculationStatus',
        'Optional',
        [],
        matrixV1020.CollectionDepositUpdateStatus
    ),
    matrixV1021: new support_1.StorageType(
        'MultiTokens.CollectionDepositRecalculationStatus',
        'Optional',
        [],
        matrixV1021.CollectionDepositUpdateStatus
    ),
    enjinV1050: new support_1.StorageType(
        'MultiTokens.CollectionDepositRecalculationStatus',
        'Optional',
        [],
        enjinV1050.CollectionDepositUpdateStatus
    ),
}
exports.upgradeBlockNumber = {
    /**
     *  Block number when the last runtime upgrade occured. Used for recalculating block numbers.
     */
    matrixEnjinV1022: new support_1.StorageType(
        'MultiTokens.UpgradeBlockNumber',
        'Optional',
        [],
        support_1.sts.number()
    ),
}
exports.idleOperations = {
    /**
     *  Pending operations to be executed on [`Hooks::on_idle`].
     */
    matrixV500: new support_1.StorageType(
        'MultiTokens.IdleOperations',
        'Default',
        [],
        support_1.sts.array(function () {
            return matrixV500.WeightedIdleOperation
        })
    ),
}
exports.lastIteratedMigrationKey = {
    /**
     *  Stores last iterated key for migrations. Used by multi block migrations
     */
    v100: new support_1.StorageType('MultiTokens.LastIteratedMigrationKey', 'Optional', [], support_1.sts.bytes()),
}
