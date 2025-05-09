'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.tokenGroupCreated =
    exports.collectionAccountApprovalsMismatch =
    exports.collectionAccountApprovalsUpdated =
    exports.collectionUpgraded =
    exports.tokenUpgraded =
    exports.tokenAccountUpgraded =
    exports.collectionDepositUpdateCompleted =
    exports.collectionDepositRecalculationInProgress =
    exports.migrationStep =
    exports.infused =
    exports.tokenAccountDepositUpdated =
    exports.collectionTransferCancelled =
    exports.collectionTransferred =
    exports.claimTokensCompleted =
    exports.claimTokensInitiated =
    exports.claimedTokens =
    exports.claimedCollections =
    exports.migrationStatusUpdated =
    exports.tokenAccountUpdated =
    exports.collectionAccountUpdated =
    exports.nextCollectionIdUpdated =
    exports.tokenUpdated =
    exports.collectionUpdated =
    exports.slashed =
    exports.deposit =
    exports.withdraw =
    exports.balanceSet =
    exports.reserveRepatriated =
    exports.movedReserves =
    exports.unreserved =
    exports.reserved =
    exports.tokenAccountDestroyed =
    exports.collectionAccountDestroyed =
    exports.tokenAccountCreated =
    exports.collectionAccountCreated =
    exports.unapproved =
    exports.approved =
    exports.attributeRemoved =
    exports.attributeSet =
    exports.thawed =
    exports.frozen =
    exports.transferred =
    exports.tokenDestroyed =
    exports.burned =
    exports.tokenMutated =
    exports.tokenCreated =
    exports.minted =
    exports.collectionMutated =
    exports.collectionDestroyed =
    exports.collectionCreated =
        void 0
exports.tokenGroupAttributeRemoved =
    exports.tokenGroupAttributeSet =
    exports.tokenGroupsUpdated =
    exports.tokenGroupRemoved =
    exports.tokenGroupAdded =
    exports.tokenGroupDestroyed =
        void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var v100 = require('../v100')
var enjinV101 = require('../enjinV101')
var v102 = require('../v102')
var v106 = require('../v106')
var matrixV500 = require('../matrixV500')
var matrixV600 = require('../matrixV600')
var matrixEnjinV603 = require('../matrixEnjinV603')
var matrixV604 = require('../matrixV604')
var matrixEnjinV1000 = require('../matrixEnjinV1000')
var matrixV1000 = require('../matrixV1000')
var matrixEnjinV1004 = require('../matrixEnjinV1004')
var matrixV1010 = require('../matrixV1010')
var matrixEnjinV1012 = require('../matrixEnjinV1012')
var matrixV1020 = require('../matrixV1020')
var enjinV1021 = require('../enjinV1021')
var v1021 = require('../v1021')
var matrixEnjinV1022 = require('../matrixEnjinV1022')
var v1030 = require('../v1030')
var enjinV1032 = require('../enjinV1032')
var enjinV1050 = require('../enjinV1050')
var v1050 = require('../v1050')
exports.collectionCreated = {
    name: 'MultiTokens.CollectionCreated',
    /**
     * A new collection was created
     */
    matrixEnjinV603: new support_1.EventType(
        'MultiTokens.CollectionCreated',
        support_1.sts.struct({
            /**
             * The id of the [`Collection`](ep_multi_tokens::Collection)
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The owner of the [`Collection`](ep_multi_tokens::Collection)
             */
            owner: matrixEnjinV603.AccountId32,
        })
    ),
}
exports.collectionDestroyed = {
    name: 'MultiTokens.CollectionDestroyed',
    /**
     * A collection was destroyed.
     */
    matrixEnjinV603: new support_1.EventType(
        'MultiTokens.CollectionDestroyed',
        support_1.sts.struct({
            /**
             * id of collection destroyed
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that destroyed the collection
             */
            caller: matrixEnjinV603.AccountId32,
        })
    ),
}
exports.collectionMutated = {
    name: 'MultiTokens.CollectionMutated',
    /**
     * A collection was mutated
     */
    matrixEnjinV603: new support_1.EventType(
        'MultiTokens.CollectionMutated',
        support_1.sts.struct({
            /**
             * [`CollectionId`](Config::CollectionId) of the
             * [`Collection`](ep_multi_tokens::Collection)
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The mutation that was applied to the collection
             */
            mutation: matrixEnjinV603.DefaultCollectionMutation,
        })
    ),
    /**
     * A collection was mutated
     */
    matrixEnjinV1022: new support_1.EventType(
        'MultiTokens.CollectionMutated',
        support_1.sts.struct({
            /**
             * collection id of the Collection
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The mutation that was applied to the collection
             */
            mutation: matrixEnjinV1022.DefaultCollectionMutation,
        })
    ),
    /**
     * A [`Collection`](ep_multi_tokens::Collection) was mutated
     */
    matrixV500: new support_1.EventType(
        'MultiTokens.CollectionMutated',
        support_1.sts.struct({
            /**
             * [`CollectionId`](Config::CollectionId) of the
             * [`Collection`](ep_multi_tokens::Collection)
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The mutation that was applied to the collection
             */
            mutation: matrixV500.DefaultCollectionMutation,
        })
    ),
    /**
     * A collection was mutated
     */
    matrixV1020: new support_1.EventType(
        'MultiTokens.CollectionMutated',
        support_1.sts.struct({
            /**
             * collection id of the Collection
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The mutation that was applied to the collection
             */
            mutation: matrixV1020.DefaultCollectionMutation,
        })
    ),
    /**
     * A [`Collection`](ep_multi_tokens::Collection) was mutated
     */
    enjinV100: new support_1.EventType(
        'MultiTokens.CollectionMutated',
        support_1.sts.struct({
            /**
             * [`CollectionId`](Config::CollectionId) of the
             * [`Collection`](ep_multi_tokens::Collection)
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The mutation that was applied to the collection
             */
            mutation: enjinV100.DefaultCollectionMutation,
        })
    ),
    /**
     * A collection was mutated
     */
    enjinV1050: new support_1.EventType(
        'MultiTokens.CollectionMutated',
        support_1.sts.struct({
            /**
             * [`CollectionId`](Config::CollectionId) of the
             * [`Collection`](ep_multi_tokens::Collection)
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The mutation that was applied to the collection
             */
            mutation: enjinV1050.DefaultCollectionMutation,
        })
    ),
    /**
     * A [`Collection`](ep_multi_tokens::Collection) was mutated
     */
    v100: new support_1.EventType(
        'MultiTokens.CollectionMutated',
        support_1.sts.struct({
            /**
             * [`CollectionId`](Config::CollectionId) of the
             * [`Collection`](ep_multi_tokens::Collection)
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The mutation that was applied to the collection
             */
            mutation: v100.DefaultCollectionMutation,
        })
    ),
    /**
     * A collection was mutated
     */
    v1050: new support_1.EventType(
        'MultiTokens.CollectionMutated',
        support_1.sts.struct({
            /**
             * [`CollectionId`](Config::CollectionId) of the
             * [`Collection`](ep_multi_tokens::Collection)
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The mutation that was applied to the collection
             */
            mutation: v1050.DefaultCollectionMutation,
        })
    ),
}
exports.minted = {
    name: 'MultiTokens.Minted',
    /**
     * Units of a token were minted
     */
    matrixEnjinV603: new support_1.EventType(
        'MultiTokens.Minted',
        support_1.sts.struct({
            /**
             * [`CollectionId`](Config::CollectionId) of minted token
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) minted
             */
            tokenId: support_1.sts.bigint(),
            /**
             * issuer of minted token
             */
            issuer: matrixEnjinV603.RootOrSigned,
            /**
             * The receiver of the token
             */
            recipient: matrixEnjinV603.AccountId32,
            /**
             * the amount of units minted
             */
            amount: support_1.sts.bigint(),
        })
    ),
}
exports.tokenCreated = {
    name: 'MultiTokens.TokenCreated',
    /**
     * A token was created
     */
    matrixEnjinV603: new support_1.EventType(
        'MultiTokens.TokenCreated',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) minted
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) minted
             */
            tokenId: support_1.sts.bigint(),
            /**
             * issuer of minted [`Token`](ep_multi_tokens::Token)
             */
            issuer: matrixEnjinV603.RootOrSigned,
            /**
             * the initial supply of the [`Token`](ep_multi_tokens::Token)
             */
            initialSupply: support_1.sts.bigint(),
        })
    ),
}
exports.tokenMutated = {
    name: 'MultiTokens.TokenMutated',
    /**
     * A token was mutated
     */
    matrixEnjinV603: new support_1.EventType(
        'MultiTokens.TokenMutated',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) [`Token`](ep_multi_tokens::Token)
             * belongs to
             */
            collectionId: support_1.sts.bigint(),
            /**
             * Id of the [`Token`](ep_multi_tokens::Token) mutated
             */
            tokenId: support_1.sts.bigint(),
            /**
             * mutation that was applied to the [`Token`](ep_multi_tokens::Token)
             */
            mutation: matrixEnjinV603.DefaultTokenMutation,
        })
    ),
    /**
     * A token was mutated
     */
    matrixEnjinV1012: new support_1.EventType(
        'MultiTokens.TokenMutated',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) [`Token`](ep_multi_tokens::Token)
             * belongs to
             */
            collectionId: support_1.sts.bigint(),
            /**
             * Id of the [`Token`](ep_multi_tokens::Token) mutated
             */
            tokenId: support_1.sts.bigint(),
            /**
             * mutation that was applied to the [`Token`](ep_multi_tokens::Token)
             */
            mutation: matrixEnjinV1012.DefaultTokenMutation,
        })
    ),
    /**
     * A token was mutated
     */
    matrixEnjinV1022: new support_1.EventType(
        'MultiTokens.TokenMutated',
        support_1.sts.struct({
            /**
             * The collection id where the Token belongs
             */
            collectionId: support_1.sts.bigint(),
            /**
             * Id of the Token mutated
             */
            tokenId: support_1.sts.bigint(),
            /**
             * mutation that was applied to the Token
             */
            mutation: matrixEnjinV1022.DefaultTokenMutation,
        })
    ),
    /**
     * A [`Token`](ep_multi_tokens::Token) was mutated
     */
    matrixV500: new support_1.EventType(
        'MultiTokens.TokenMutated',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) [`Token`](ep_multi_tokens::Token)
             * belongs to
             */
            collectionId: support_1.sts.bigint(),
            /**
             * Id of the [`Token`](ep_multi_tokens::Token) mutated
             */
            tokenId: support_1.sts.bigint(),
            /**
             * mutation that was applied to the [`Token`](ep_multi_tokens::Token)
             */
            mutation: matrixV500.DefaultTokenMutation,
        })
    ),
    /**
     * A token was mutated
     */
    matrixV1010: new support_1.EventType(
        'MultiTokens.TokenMutated',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) [`Token`](ep_multi_tokens::Token)
             * belongs to
             */
            collectionId: support_1.sts.bigint(),
            /**
             * Id of the [`Token`](ep_multi_tokens::Token) mutated
             */
            tokenId: support_1.sts.bigint(),
            /**
             * mutation that was applied to the [`Token`](ep_multi_tokens::Token)
             */
            mutation: matrixV1010.DefaultTokenMutation,
        })
    ),
    /**
     * A token was mutated
     */
    matrixV1020: new support_1.EventType(
        'MultiTokens.TokenMutated',
        support_1.sts.struct({
            /**
             * The collection id where the Token belongs
             */
            collectionId: support_1.sts.bigint(),
            /**
             * Id of the Token mutated
             */
            tokenId: support_1.sts.bigint(),
            /**
             * mutation that was applied to the Token
             */
            mutation: matrixV1020.DefaultTokenMutation,
        })
    ),
    /**
     * A [`Token`](ep_multi_tokens::Token) was mutated
     */
    enjinV100: new support_1.EventType(
        'MultiTokens.TokenMutated',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) [`Token`](ep_multi_tokens::Token)
             * belongs to
             */
            collectionId: support_1.sts.bigint(),
            /**
             * Id of the [`Token`](ep_multi_tokens::Token) mutated
             */
            tokenId: support_1.sts.bigint(),
            /**
             * mutation that was applied to the [`Token`](ep_multi_tokens::Token)
             */
            mutation: enjinV100.DefaultTokenMutation,
        })
    ),
    /**
     * A token was mutated
     */
    enjinV1032: new support_1.EventType(
        'MultiTokens.TokenMutated',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) [`Token`](ep_multi_tokens::Token)
             * belongs to
             */
            collectionId: support_1.sts.bigint(),
            /**
             * Id of the [`Token`](ep_multi_tokens::Token) mutated
             */
            tokenId: support_1.sts.bigint(),
            /**
             * mutation that was applied to the [`Token`](ep_multi_tokens::Token)
             */
            mutation: enjinV1032.DefaultTokenMutation,
        })
    ),
    /**
     * A token was mutated
     */
    enjinV1050: new support_1.EventType(
        'MultiTokens.TokenMutated',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) [`Token`](ep_multi_tokens::Token)
             * belongs to
             */
            collectionId: support_1.sts.bigint(),
            /**
             * Id of the [`Token`](ep_multi_tokens::Token) mutated
             */
            tokenId: support_1.sts.bigint(),
            /**
             * mutation that was applied to the [`Token`](ep_multi_tokens::Token)
             */
            mutation: enjinV1050.DefaultTokenMutation,
        })
    ),
    /**
     * A [`Token`](ep_multi_tokens::Token) was mutated
     */
    v100: new support_1.EventType(
        'MultiTokens.TokenMutated',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) [`Token`](ep_multi_tokens::Token)
             * belongs to
             */
            collectionId: support_1.sts.bigint(),
            /**
             * Id of the [`Token`](ep_multi_tokens::Token) mutated
             */
            tokenId: support_1.sts.bigint(),
            /**
             * mutation that was applied to the [`Token`](ep_multi_tokens::Token)
             */
            mutation: v100.DefaultTokenMutation,
        })
    ),
    /**
     * A token was mutated
     */
    v1030: new support_1.EventType(
        'MultiTokens.TokenMutated',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) [`Token`](ep_multi_tokens::Token)
             * belongs to
             */
            collectionId: support_1.sts.bigint(),
            /**
             * Id of the [`Token`](ep_multi_tokens::Token) mutated
             */
            tokenId: support_1.sts.bigint(),
            /**
             * mutation that was applied to the [`Token`](ep_multi_tokens::Token)
             */
            mutation: v1030.DefaultTokenMutation,
        })
    ),
    /**
     * A token was mutated
     */
    v1050: new support_1.EventType(
        'MultiTokens.TokenMutated',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) [`Token`](ep_multi_tokens::Token)
             * belongs to
             */
            collectionId: support_1.sts.bigint(),
            /**
             * Id of the [`Token`](ep_multi_tokens::Token) mutated
             */
            tokenId: support_1.sts.bigint(),
            /**
             * mutation that was applied to the [`Token`](ep_multi_tokens::Token)
             */
            mutation: v1050.DefaultTokenMutation,
        })
    ),
}
exports.burned = {
    name: 'MultiTokens.Burned',
    /**
     * Units of a token were burned
     */
    matrixEnjinV603: new support_1.EventType(
        'MultiTokens.Burned',
        support_1.sts.struct({
            /**
             * collection id of tokens burned
             */
            collectionId: support_1.sts.bigint(),
            /**
             * the token id that was burned
             */
            tokenId: support_1.sts.bigint(),
            /**
             * the account the tokens were burned from
             */
            accountId: matrixEnjinV603.AccountId32,
            /**
             * The amount that was burned for each token_id
             */
            amount: support_1.sts.bigint(),
        })
    ),
}
exports.tokenDestroyed = {
    name: 'MultiTokens.TokenDestroyed',
    /**
     * A token was destroyed
     */
    matrixEnjinV603: new support_1.EventType(
        'MultiTokens.TokenDestroyed',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) destroyed
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) destroyed
             */
            tokenId: support_1.sts.bigint(),
            /**
             * the [`AccountId`](frame_system::Config::AccountId) that destroyed the
             * [`Token`](ep_multi_tokens::Token)
             */
            caller: matrixEnjinV603.AccountId32,
        })
    ),
}
exports.transferred = {
    name: 'MultiTokens.Transferred',
    /**
     * Units of a token were transferred
     */
    matrixEnjinV603: new support_1.EventType(
        'MultiTokens.Transferred',
        support_1.sts.struct({
            /**
             * collection_id of transferred collection
             */
            collectionId: support_1.sts.bigint(),
            /**
             * [`TokenId`](Config::TokenId) transferred
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that performed the transfer
             */
            operator: matrixEnjinV603.AccountId32,
            /**
             * transaction sender
             */
            from: matrixEnjinV603.AccountId32,
            /**
             * transaction recipient
             */
            to: matrixEnjinV603.AccountId32,
            /**
             * number of units transferred
             */
            amount: support_1.sts.bigint(),
        })
    ),
}
exports.frozen = {
    name: 'MultiTokens.Frozen',
    /**
     * Collection, token or account was frozen
     */
    matrixEnjinV603: new support_1.EventType('MultiTokens.Frozen', matrixEnjinV603.Freeze),
}
exports.thawed = {
    name: 'MultiTokens.Thawed',
    /**
     * Collection, token or account was unfrozen
     */
    matrixEnjinV603: new support_1.EventType('MultiTokens.Thawed', matrixEnjinV603.Freeze),
}
exports.attributeSet = {
    name: 'MultiTokens.AttributeSet',
    /**
     * New attribute has been set
     */
    matrixEnjinV603: new support_1.EventType(
        'MultiTokens.AttributeSet',
        support_1.sts.struct({
            /**
             * collectionId of collection modified
             */
            collectionId: support_1.sts.bigint(),
            /**
             * [`TokenId`](Config::TokenId) of [`Token`](ep_multi_tokens::Token) modified
             */
            tokenId: support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
            /**
             * key of attribute set
             */
            key: support_1.sts.bytes(),
            /**
             * value of attribute set
             */
            value: support_1.sts.bytes(),
        })
    ),
}
exports.attributeRemoved = {
    name: 'MultiTokens.AttributeRemoved',
    /**
     * An attribute has been removed
     */
    matrixEnjinV603: new support_1.EventType(
        'MultiTokens.AttributeRemoved',
        support_1.sts.struct({
            /**
             * collectionId of collection modified
             */
            collectionId: support_1.sts.bigint(),
            /**
             * tokenid of token modified
             */
            tokenId: support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
            /**
             * key of attribute cleared
             */
            key: support_1.sts.bytes(),
        })
    ),
}
exports.approved = {
    name: 'MultiTokens.Approved',
    /**
     * An approval took place. If `token_id` is `None`, it applies to the whole collection.
     */
    matrixEnjinV603: new support_1.EventType(
        'MultiTokens.Approved',
        support_1.sts.struct({
            /**
             * The collection that was approved
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The token that was approved
             */
            tokenId: support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
            /**
             * The account that made the approval
             */
            owner: matrixEnjinV603.AccountId32,
            /**
             * The account that was approved to operate
             */
            operator: matrixEnjinV603.AccountId32,
            /**
             * The amount approved for
             */
            amount: support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
            /**
             * The expiration of the approval
             */
            expiration: support_1.sts.option(function () {
                return support_1.sts.number()
            }),
        })
    ),
}
exports.unapproved = {
    name: 'MultiTokens.Unapproved',
    /**
     * An unapproval took place. If `token_id` is `None`, it applies to the collection.
     */
    matrixEnjinV603: new support_1.EventType(
        'MultiTokens.Unapproved',
        support_1.sts.struct({
            /**
             * The collection that was unapproved
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The token that was unapproved
             */
            tokenId: support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
            /**
             * The account that `operator` was unapproved for
             */
            owner: matrixEnjinV603.AccountId32,
            /**
             * The account that was unapproved to operate
             */
            operator: matrixEnjinV603.AccountId32,
        })
    ),
}
exports.collectionAccountCreated = {
    name: 'MultiTokens.CollectionAccountCreated',
    /**
     * A new collection account was created
     */
    matrixEnjinV603: new support_1.EventType(
        'MultiTokens.CollectionAccountCreated',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the account is created
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the account
             */
            accountId: matrixEnjinV603.AccountId32,
        })
    ),
}
exports.tokenAccountCreated = {
    name: 'MultiTokens.TokenAccountCreated',
    /**
     * A new token account was created
     */
    matrixEnjinV603: new support_1.EventType(
        'MultiTokens.TokenAccountCreated',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the account is created
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) for which the account is created
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the account
             */
            accountId: matrixEnjinV603.AccountId32,
            /**
             * The balance that this account holds
             */
            balance: support_1.sts.bigint(),
        })
    ),
}
exports.collectionAccountDestroyed = {
    name: 'MultiTokens.CollectionAccountDestroyed',
    /**
     * A collection account was destroyed
     */
    matrixEnjinV603: new support_1.EventType(
        'MultiTokens.CollectionAccountDestroyed',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) of the destroyed account
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the destroyed account
             */
            accountId: matrixEnjinV603.AccountId32,
        })
    ),
}
exports.tokenAccountDestroyed = {
    name: 'MultiTokens.TokenAccountDestroyed',
    /**
     * A token account was destroyed
     */
    matrixEnjinV603: new support_1.EventType(
        'MultiTokens.TokenAccountDestroyed',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the account is created
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) fof the destroyed account
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the destroyed account
             */
            accountId: matrixEnjinV603.AccountId32,
        })
    ),
}
exports.reserved = {
    name: 'MultiTokens.Reserved',
    /**
     * Token units were reserved
     */
    matrixEnjinV603: new support_1.EventType(
        'MultiTokens.Reserved',
        support_1.sts.struct({
            /**
             * The collection in which token was reserved
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The token that was reserved
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The account that reserved the tokens
             */
            accountId: matrixEnjinV603.AccountId32,
            /**
             * The amount that was reserved
             */
            amount: support_1.sts.bigint(),
            /**
             * The identifier of the reserves
             */
            reserveId: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
        })
    ),
    /**
     * Token units were reserved
     */
    matrixEnjinV1022: new support_1.EventType(
        'MultiTokens.Reserved',
        support_1.sts.struct({
            /**
             * The collection in which token was reserved
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The token that was reserved
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The account that reserved the tokens
             */
            accountId: matrixEnjinV1022.AccountId32,
            /**
             * The amount that was reserved
             */
            amount: support_1.sts.bigint(),
            /**
             * The identifier of the reserves
             */
            reserveId: matrixEnjinV1022.RuntimeHoldReason,
        })
    ),
    /**
     * Token units were reserved
     */
    matrixV500: new support_1.EventType(
        'MultiTokens.Reserved',
        support_1.sts.struct({
            /**
             * The collection in which token was reserved
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The token that was reserved
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The account that reserved the tokens
             */
            accountId: matrixV500.AccountId32,
            /**
             * The amount that was reserved
             */
            amount: support_1.sts.bigint(),
            /**
             * The identifier of the reserves
             */
            reserveId: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
        })
    ),
    /**
     * Token units were reserved
     */
    matrixV1020: new support_1.EventType(
        'MultiTokens.Reserved',
        support_1.sts.struct({
            /**
             * The collection in which token was reserved
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The token that was reserved
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The account that reserved the tokens
             */
            accountId: matrixV1020.AccountId32,
            /**
             * The amount that was reserved
             */
            amount: support_1.sts.bigint(),
            /**
             * The identifier of the reserves
             */
            reserveId: matrixV1020.RuntimeHoldReason,
        })
    ),
    /**
     * Token units were reserved
     */
    enjinV100: new support_1.EventType(
        'MultiTokens.Reserved',
        support_1.sts.struct({
            /**
             * The collection in which token was reserved
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The token that was reserved
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The account that reserved the tokens
             */
            accountId: enjinV100.AccountId32,
            /**
             * The amount that was reserved
             */
            amount: support_1.sts.bigint(),
            /**
             * The identifier of the reserves
             */
            reserveId: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
        })
    ),
    /**
     * Token units were reserved
     */
    enjinV1050: new support_1.EventType(
        'MultiTokens.Reserved',
        support_1.sts.struct({
            /**
             * The collection in which token was reserved
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The token that was reserved
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The account that reserved the tokens
             */
            accountId: enjinV1050.AccountId32,
            /**
             * The amount that was reserved
             */
            amount: support_1.sts.bigint(),
            /**
             * The identifier of the reserves
             */
            reserveId: enjinV1050.RuntimeHoldReason,
        })
    ),
    /**
     * Token units were reserved
     */
    v100: new support_1.EventType(
        'MultiTokens.Reserved',
        support_1.sts.struct({
            /**
             * The collection in which token was reserved
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The token that was reserved
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The account that reserved the tokens
             */
            accountId: v100.AccountId32,
            /**
             * The amount that was reserved
             */
            amount: support_1.sts.bigint(),
            /**
             * The identifier of the reserves
             */
            reserveId: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
        })
    ),
    /**
     * Token units were reserved
     */
    v1050: new support_1.EventType(
        'MultiTokens.Reserved',
        support_1.sts.struct({
            /**
             * The collection in which token was reserved
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The token that was reserved
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The account that reserved the tokens
             */
            accountId: v1050.AccountId32,
            /**
             * The amount that was reserved
             */
            amount: support_1.sts.bigint(),
            /**
             * The identifier of the reserves
             */
            reserveId: v1050.RuntimeHoldReason,
        })
    ),
}
exports.unreserved = {
    name: 'MultiTokens.Unreserved',
    /**
     * Token units were unreserved
     */
    matrixEnjinV603: new support_1.EventType(
        'MultiTokens.Unreserved',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) in which token was unreserved
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) that was unreserved
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The account that unreserved the tokens
             */
            accountId: matrixEnjinV603.AccountId32,
            /**
             * The amount that was unreserved
             */
            amount: support_1.sts.bigint(),
            /**
             * The identifier of the unreserved tokens
             */
            reserveId: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
        })
    ),
    /**
     * Token units were unreserved
     */
    matrixEnjinV1022: new support_1.EventType(
        'MultiTokens.Unreserved',
        support_1.sts.struct({
            /**
             * The collection id in which token was unreserved
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The token id that was unreserved
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The account that unreserved the tokens
             */
            accountId: matrixEnjinV1022.AccountId32,
            /**
             * The amount that was unreserved
             */
            amount: support_1.sts.bigint(),
            /**
             * The identifier of the unreserved tokens
             */
            reserveId: matrixEnjinV1022.RuntimeHoldReason,
        })
    ),
    /**
     * Token units were unreserved
     */
    matrixV500: new support_1.EventType(
        'MultiTokens.Unreserved',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) in which token was unreserved
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) that was unreserved
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The account that unreserved the tokens
             */
            accountId: matrixV500.AccountId32,
            /**
             * The amount that was unreserved
             */
            amount: support_1.sts.bigint(),
            /**
             * The identifier of the unreserved tokens
             */
            reserveId: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
        })
    ),
    /**
     * Token units were unreserved
     */
    matrixV1020: new support_1.EventType(
        'MultiTokens.Unreserved',
        support_1.sts.struct({
            /**
             * The collection id in which token was unreserved
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The token id that was unreserved
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The account that unreserved the tokens
             */
            accountId: matrixV1020.AccountId32,
            /**
             * The amount that was unreserved
             */
            amount: support_1.sts.bigint(),
            /**
             * The identifier of the unreserved tokens
             */
            reserveId: matrixV1020.RuntimeHoldReason,
        })
    ),
    /**
     * Token units were unreserved
     */
    enjinV100: new support_1.EventType(
        'MultiTokens.Unreserved',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) in which token was unreserved
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) that was unreserved
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The account that unreserved the tokens
             */
            accountId: enjinV100.AccountId32,
            /**
             * The amount that was unreserved
             */
            amount: support_1.sts.bigint(),
            /**
             * The identifier of the unreserved tokens
             */
            reserveId: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
        })
    ),
    /**
     * Token units were unreserved
     */
    enjinV1050: new support_1.EventType(
        'MultiTokens.Unreserved',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) in which token was unreserved
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) that was unreserved
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The account that unreserved the tokens
             */
            accountId: enjinV1050.AccountId32,
            /**
             * The amount that was unreserved
             */
            amount: support_1.sts.bigint(),
            /**
             * The identifier of the unreserved tokens
             */
            reserveId: enjinV1050.RuntimeHoldReason,
        })
    ),
    /**
     * Token units were unreserved
     */
    v100: new support_1.EventType(
        'MultiTokens.Unreserved',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) in which token was unreserved
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) that was unreserved
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The account that unreserved the tokens
             */
            accountId: v100.AccountId32,
            /**
             * The amount that was unreserved
             */
            amount: support_1.sts.bigint(),
            /**
             * The identifier of the unreserved tokens
             */
            reserveId: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
        })
    ),
    /**
     * Token units were unreserved
     */
    v1050: new support_1.EventType(
        'MultiTokens.Unreserved',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) in which token was unreserved
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) that was unreserved
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The account that unreserved the tokens
             */
            accountId: v1050.AccountId32,
            /**
             * The amount that was unreserved
             */
            amount: support_1.sts.bigint(),
            /**
             * The identifier of the unreserved tokens
             */
            reserveId: v1050.RuntimeHoldReason,
        })
    ),
}
exports.movedReserves = {
    name: 'MultiTokens.MovedReserves',
    /**
     * Reserved token units were moved
     */
    matrixEnjinV603: new support_1.EventType(
        'MultiTokens.MovedReserves',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) in which token was moved
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) that was moved
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The account that reserves were moved from
             */
            source: matrixEnjinV603.AccountId32,
            /**
             * The account that received the moved reserves
             */
            destination: matrixEnjinV603.AccountId32,
            /**
             * The amount that was moved
             */
            amount: support_1.sts.bigint(),
            /**
             * The identifier of the moved reserves
             */
            reserveId: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
        })
    ),
    /**
     * Reserved token units were moved
     */
    matrixEnjinV1022: new support_1.EventType(
        'MultiTokens.MovedReserves',
        support_1.sts.struct({
            /**
             * The collection id in which token was moved
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The token id that was moved
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The account that reserves were moved from
             */
            source: matrixEnjinV1022.AccountId32,
            /**
             * The account that received the moved reserves
             */
            destination: matrixEnjinV1022.AccountId32,
            /**
             * The amount that was moved
             */
            amount: support_1.sts.bigint(),
            /**
             * The identifier of the moved reserves
             */
            reserveId: matrixEnjinV1022.RuntimeHoldReason,
        })
    ),
    /**
     * Reserved token units were moved
     */
    matrixV500: new support_1.EventType(
        'MultiTokens.MovedReserves',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) in which token was moved
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) that was moved
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The account that reserves were moved from
             */
            source: matrixV500.AccountId32,
            /**
             * The account that received the moved reserves
             */
            destination: matrixV500.AccountId32,
            /**
             * The amount that was moved
             */
            amount: support_1.sts.bigint(),
            /**
             * The identifier of the moved reserves
             */
            reserveId: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
        })
    ),
    /**
     * Reserved token units were moved
     */
    matrixV1020: new support_1.EventType(
        'MultiTokens.MovedReserves',
        support_1.sts.struct({
            /**
             * The collection id in which token was moved
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The token id that was moved
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The account that reserves were moved from
             */
            source: matrixV1020.AccountId32,
            /**
             * The account that received the moved reserves
             */
            destination: matrixV1020.AccountId32,
            /**
             * The amount that was moved
             */
            amount: support_1.sts.bigint(),
            /**
             * The identifier of the moved reserves
             */
            reserveId: matrixV1020.RuntimeHoldReason,
        })
    ),
    /**
     * Reserved token units were moved
     */
    enjinV100: new support_1.EventType(
        'MultiTokens.MovedReserves',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) in which token was moved
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) that was moved
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The account that reserves were moved from
             */
            source: enjinV100.AccountId32,
            /**
             * The account that received the moved reserves
             */
            destination: enjinV100.AccountId32,
            /**
             * The amount that was moved
             */
            amount: support_1.sts.bigint(),
            /**
             * The identifier of the moved reserves
             */
            reserveId: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
        })
    ),
    /**
     * Reserved token units were moved
     */
    enjinV1050: new support_1.EventType(
        'MultiTokens.MovedReserves',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) in which token was moved
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) that was moved
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The account that reserves were moved from
             */
            source: enjinV1050.AccountId32,
            /**
             * The account that received the moved reserves
             */
            destination: enjinV1050.AccountId32,
            /**
             * The amount that was moved
             */
            amount: support_1.sts.bigint(),
            /**
             * The identifier of the moved reserves
             */
            reserveId: enjinV1050.RuntimeHoldReason,
        })
    ),
    /**
     * Reserved token units were moved
     */
    v100: new support_1.EventType(
        'MultiTokens.MovedReserves',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) in which token was moved
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) that was moved
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The account that reserves were moved from
             */
            source: v100.AccountId32,
            /**
             * The account that received the moved reserves
             */
            destination: v100.AccountId32,
            /**
             * The amount that was moved
             */
            amount: support_1.sts.bigint(),
            /**
             * The identifier of the moved reserves
             */
            reserveId: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
        })
    ),
    /**
     * Reserved token units were moved
     */
    v1050: new support_1.EventType(
        'MultiTokens.MovedReserves',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) in which token was moved
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) that was moved
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The account that reserves were moved from
             */
            source: v1050.AccountId32,
            /**
             * The account that received the moved reserves
             */
            destination: v1050.AccountId32,
            /**
             * The amount that was moved
             */
            amount: support_1.sts.bigint(),
            /**
             * The identifier of the moved reserves
             */
            reserveId: v1050.RuntimeHoldReason,
        })
    ),
}
exports.reserveRepatriated = {
    name: 'MultiTokens.ReserveRepatriated',
    /**
     * Reserved token units were transferred
     */
    matrixEnjinV603: new support_1.EventType(
        'MultiTokens.ReserveRepatriated',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) in which token was moved
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) that was moved
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The account that reserves were moved from
             */
            source: matrixEnjinV603.AccountId32,
            /**
             * The account that received the moved reserves
             */
            destination: matrixEnjinV603.AccountId32,
            /**
             * The amount that was moved
             */
            amount: support_1.sts.bigint(),
            /**
             * The identifier of the moved reserves
             */
            reserveId: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
        })
    ),
    /**
     * Reserved token units were transferred
     */
    matrixEnjinV1022: new support_1.EventType(
        'MultiTokens.ReserveRepatriated',
        support_1.sts.struct({
            /**
             * The collection id in which token was moved
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The token id that was moved
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The account that reserves were moved from
             */
            source: matrixEnjinV1022.AccountId32,
            /**
             * The account that received the moved reserves
             */
            destination: matrixEnjinV1022.AccountId32,
            /**
             * The amount that was moved
             */
            amount: support_1.sts.bigint(),
            /**
             * The identifier of the moved reserves
             */
            reserveId: matrixEnjinV1022.RuntimeHoldReason,
        })
    ),
    /**
     * Reserved token units were transferred
     */
    matrixV500: new support_1.EventType(
        'MultiTokens.ReserveRepatriated',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) in which token was moved
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) that was moved
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The account that reserves were moved from
             */
            source: matrixV500.AccountId32,
            /**
             * The account that received the moved reserves
             */
            destination: matrixV500.AccountId32,
            /**
             * The amount that was moved
             */
            amount: support_1.sts.bigint(),
            /**
             * The identifier of the moved reserves
             */
            reserveId: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
        })
    ),
    /**
     * Reserved token units were transferred
     */
    matrixV1020: new support_1.EventType(
        'MultiTokens.ReserveRepatriated',
        support_1.sts.struct({
            /**
             * The collection id in which token was moved
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The token id that was moved
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The account that reserves were moved from
             */
            source: matrixV1020.AccountId32,
            /**
             * The account that received the moved reserves
             */
            destination: matrixV1020.AccountId32,
            /**
             * The amount that was moved
             */
            amount: support_1.sts.bigint(),
            /**
             * The identifier of the moved reserves
             */
            reserveId: matrixV1020.RuntimeHoldReason,
        })
    ),
    /**
     * Reserved token units were transferred
     */
    enjinV100: new support_1.EventType(
        'MultiTokens.ReserveRepatriated',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) in which token was moved
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) that was moved
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The account that reserves were moved from
             */
            source: enjinV100.AccountId32,
            /**
             * The account that received the moved reserves
             */
            destination: enjinV100.AccountId32,
            /**
             * The amount that was moved
             */
            amount: support_1.sts.bigint(),
            /**
             * The identifier of the moved reserves
             */
            reserveId: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
        })
    ),
    /**
     * Reserved token units were transferred
     */
    enjinV1050: new support_1.EventType(
        'MultiTokens.ReserveRepatriated',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) in which token was moved
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) that was moved
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The account that reserves were moved from
             */
            source: enjinV1050.AccountId32,
            /**
             * The account that received the moved reserves
             */
            destination: enjinV1050.AccountId32,
            /**
             * The amount that was moved
             */
            amount: support_1.sts.bigint(),
            /**
             * The identifier of the moved reserves
             */
            reserveId: enjinV1050.RuntimeHoldReason,
        })
    ),
    /**
     * Reserved token units were transferred
     */
    v100: new support_1.EventType(
        'MultiTokens.ReserveRepatriated',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) in which token was moved
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) that was moved
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The account that reserves were moved from
             */
            source: v100.AccountId32,
            /**
             * The account that received the moved reserves
             */
            destination: v100.AccountId32,
            /**
             * The amount that was moved
             */
            amount: support_1.sts.bigint(),
            /**
             * The identifier of the moved reserves
             */
            reserveId: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
        })
    ),
    /**
     * Reserved token units were transferred
     */
    v1050: new support_1.EventType(
        'MultiTokens.ReserveRepatriated',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) in which token was moved
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) that was moved
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The account that reserves were moved from
             */
            source: v1050.AccountId32,
            /**
             * The account that received the moved reserves
             */
            destination: v1050.AccountId32,
            /**
             * The amount that was moved
             */
            amount: support_1.sts.bigint(),
            /**
             * The identifier of the moved reserves
             */
            reserveId: v1050.RuntimeHoldReason,
        })
    ),
}
exports.balanceSet = {
    name: 'MultiTokens.BalanceSet',
    /**
     * The balance of an account was set
     */
    matrixEnjinV603: new support_1.EventType(
        'MultiTokens.BalanceSet',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which balance was set
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) for which balance was set
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that balance was set for
             */
            accountId: matrixEnjinV603.AccountId32,
            /**
             * The balance of the account
             */
            balance: support_1.sts.bigint(),
            /**
             * The reserved balance of the account
             */
            reservedBalance: support_1.sts.bigint(),
        })
    ),
}
exports.withdraw = {
    name: 'MultiTokens.Withdraw',
    /**
     * Token units were withdrawn
     */
    matrixEnjinV603: new support_1.EventType(
        'MultiTokens.Withdraw',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) of the tokens withdrawn
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) of the tokens withdrawn
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The [`AccountId`](frame_system::Config::AccountId) withdrawn from
             */
            accountId: matrixEnjinV603.AccountId32,
            /**
             * The amount of tokens withdrawn
             */
            amount: support_1.sts.bigint(),
        })
    ),
}
exports.deposit = {
    name: 'MultiTokens.Deposit',
    /**
     * Token units were deposited
     */
    matrixEnjinV603: new support_1.EventType(
        'MultiTokens.Deposit',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) of the tokens deposited
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) of the tokens deposited
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The [`AccountId`](frame_system::Config::AccountId) deposited to
             */
            accountId: matrixEnjinV603.AccountId32,
            /**
             * The amount of tokens deposited
             */
            amount: support_1.sts.bigint(),
        })
    ),
}
exports.slashed = {
    name: 'MultiTokens.Slashed',
    /**
     * An amount of tokens were slashed from account
     */
    matrixEnjinV603: new support_1.EventType(
        'MultiTokens.Slashed',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) of the tokens slashed
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) of the tokens slashed
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The [`AccountId`](frame_system::Config::AccountId) slashed
             */
            accountId: matrixEnjinV603.AccountId32,
            /**
             * The amount of tokens slashed
             */
            amount: support_1.sts.bigint(),
        })
    ),
}
exports.collectionUpdated = {
    name: 'MultiTokens.CollectionUpdated',
    /**
     * Collection storage was set to `value`
     */
    matrixEnjinV603: new support_1.EventType(
        'MultiTokens.CollectionUpdated',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: support_1.sts.bigint(),
            /**
             * new value of Collection storage
             */
            value: support_1.sts.option(function () {
                return matrixEnjinV603.Collection
            }),
        })
    ),
    /**
     * Collection storage was set to `value`
     */
    matrixEnjinV1012: new support_1.EventType(
        'MultiTokens.CollectionUpdated',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: support_1.sts.bigint(),
            /**
             * new value of Collection storage
             */
            value: support_1.sts.option(function () {
                return matrixEnjinV1012.Collection
            }),
        })
    ),
    /**
     * Collection storage was set to `value`
     */
    matrixEnjinV1022: new support_1.EventType(
        'MultiTokens.CollectionUpdated',
        support_1.sts.struct({
            /**
             * The collection id for which the value is set
             */
            collectionId: support_1.sts.bigint(),
            /**
             * new value of Collection storage
             */
            value: support_1.sts.option(function () {
                return matrixEnjinV1022.Collection
            }),
        })
    ),
    /**
     * Collection storage was set to `value`
     */
    matrixV500: new support_1.EventType(
        'MultiTokens.CollectionUpdated',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: support_1.sts.bigint(),
            /**
             * new value of Collection storage
             */
            value: support_1.sts.option(function () {
                return matrixV500.Collection
            }),
        })
    ),
    /**
     * Collection storage was set to `value`
     */
    matrixV1010: new support_1.EventType(
        'MultiTokens.CollectionUpdated',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: support_1.sts.bigint(),
            /**
             * new value of Collection storage
             */
            value: support_1.sts.option(function () {
                return matrixV1010.Collection
            }),
        })
    ),
    /**
     * Collection storage was set to `value`
     */
    matrixV1020: new support_1.EventType(
        'MultiTokens.CollectionUpdated',
        support_1.sts.struct({
            /**
             * The collection id for which the value is set
             */
            collectionId: support_1.sts.bigint(),
            /**
             * new value of Collection storage
             */
            value: support_1.sts.option(function () {
                return matrixV1020.Collection
            }),
        })
    ),
    /**
     * Collection storage was set to `value`
     */
    enjinV100: new support_1.EventType(
        'MultiTokens.CollectionUpdated',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: support_1.sts.bigint(),
            /**
             * new value of Collection storage
             */
            value: support_1.sts.option(function () {
                return enjinV100.Collection
            }),
        })
    ),
    /**
     * Collection storage was set to `value`
     */
    enjinV1032: new support_1.EventType(
        'MultiTokens.CollectionUpdated',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: support_1.sts.bigint(),
            /**
             * new value of Collection storage
             */
            value: support_1.sts.option(function () {
                return enjinV1032.Collection
            }),
        })
    ),
    /**
     * Collection storage was set to `value`
     */
    enjinV1050: new support_1.EventType(
        'MultiTokens.CollectionUpdated',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: support_1.sts.bigint(),
            /**
             * new value of Collection storage
             */
            value: support_1.sts.option(function () {
                return enjinV1050.Collection
            }),
        })
    ),
    /**
     * Collection storage was set to `value`
     */
    v100: new support_1.EventType(
        'MultiTokens.CollectionUpdated',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: support_1.sts.bigint(),
            /**
             * new value of Collection storage
             */
            value: support_1.sts.option(function () {
                return v100.Collection
            }),
        })
    ),
    /**
     * Collection storage was set to `value`
     */
    v1030: new support_1.EventType(
        'MultiTokens.CollectionUpdated',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: support_1.sts.bigint(),
            /**
             * new value of Collection storage
             */
            value: support_1.sts.option(function () {
                return v1030.Collection
            }),
        })
    ),
    /**
     * Collection storage was set to `value`
     */
    v1050: new support_1.EventType(
        'MultiTokens.CollectionUpdated',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: support_1.sts.bigint(),
            /**
             * new value of Collection storage
             */
            value: support_1.sts.option(function () {
                return v1050.Collection
            }),
        })
    ),
}
exports.tokenUpdated = {
    name: 'MultiTokens.TokenUpdated',
    /**
     * Token storage was set to `value`
     */
    matrixEnjinV603: new support_1.EventType(
        'MultiTokens.TokenUpdated',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) for which the value is set
             */
            tokenId: support_1.sts.bigint(),
            /**
             * new value of Token storage
             */
            value: support_1.sts.option(function () {
                return matrixEnjinV603.Token
            }),
        })
    ),
    /**
     * Token storage was set to `value`
     */
    matrixEnjinV1012: new support_1.EventType(
        'MultiTokens.TokenUpdated',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) for which the value is set
             */
            tokenId: support_1.sts.bigint(),
            /**
             * new value of Token storage
             */
            value: support_1.sts.option(function () {
                return matrixEnjinV1012.Token
            }),
        })
    ),
    /**
     * Token storage was set to `value`
     */
    matrixEnjinV1022: new support_1.EventType(
        'MultiTokens.TokenUpdated',
        support_1.sts.struct({
            /**
             * The collection id for which the value is set
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The token id for which the value is set
             */
            tokenId: support_1.sts.bigint(),
            /**
             * new value of Token storage
             */
            value: support_1.sts.option(function () {
                return matrixEnjinV1022.Token
            }),
        })
    ),
    /**
     * Token storage was set to `value`
     */
    matrixV500: new support_1.EventType(
        'MultiTokens.TokenUpdated',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) for which the value is set
             */
            tokenId: support_1.sts.bigint(),
            /**
             * new value of Token storage
             */
            value: support_1.sts.option(function () {
                return matrixV500.Token
            }),
        })
    ),
    /**
     * Token storage was set to `value`
     */
    matrixV600: new support_1.EventType(
        'MultiTokens.TokenUpdated',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) for which the value is set
             */
            tokenId: support_1.sts.bigint(),
            /**
             * new value of Token storage
             */
            value: support_1.sts.option(function () {
                return matrixV600.Token
            }),
        })
    ),
    /**
     * Token storage was set to `value`
     */
    matrixV1010: new support_1.EventType(
        'MultiTokens.TokenUpdated',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) for which the value is set
             */
            tokenId: support_1.sts.bigint(),
            /**
             * new value of Token storage
             */
            value: support_1.sts.option(function () {
                return matrixV1010.Token
            }),
        })
    ),
    /**
     * Token storage was set to `value`
     */
    matrixV1020: new support_1.EventType(
        'MultiTokens.TokenUpdated',
        support_1.sts.struct({
            /**
             * The collection id for which the value is set
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The token id for which the value is set
             */
            tokenId: support_1.sts.bigint(),
            /**
             * new value of Token storage
             */
            value: support_1.sts.option(function () {
                return matrixV1020.Token
            }),
        })
    ),
    /**
     * Token storage was set to `value`
     */
    enjinV100: new support_1.EventType(
        'MultiTokens.TokenUpdated',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) for which the value is set
             */
            tokenId: support_1.sts.bigint(),
            /**
             * new value of Token storage
             */
            value: support_1.sts.option(function () {
                return enjinV100.Token
            }),
        })
    ),
    /**
     * Token storage was set to `value`
     */
    enjinV1032: new support_1.EventType(
        'MultiTokens.TokenUpdated',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) for which the value is set
             */
            tokenId: support_1.sts.bigint(),
            /**
             * new value of Token storage
             */
            value: support_1.sts.option(function () {
                return enjinV1032.Token
            }),
        })
    ),
    /**
     * Token storage was set to `value`
     */
    enjinV1050: new support_1.EventType(
        'MultiTokens.TokenUpdated',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) for which the value is set
             */
            tokenId: support_1.sts.bigint(),
            /**
             * new value of Token storage
             */
            value: support_1.sts.option(function () {
                return enjinV1050.Token
            }),
        })
    ),
    /**
     * Token storage was set to `value`
     */
    v100: new support_1.EventType(
        'MultiTokens.TokenUpdated',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) for which the value is set
             */
            tokenId: support_1.sts.bigint(),
            /**
             * new value of Token storage
             */
            value: support_1.sts.option(function () {
                return v100.Token
            }),
        })
    ),
    /**
     * Token storage was set to `value`
     */
    v102: new support_1.EventType(
        'MultiTokens.TokenUpdated',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) for which the value is set
             */
            tokenId: support_1.sts.bigint(),
            /**
             * new value of Token storage
             */
            value: support_1.sts.option(function () {
                return v102.Token
            }),
        })
    ),
    /**
     * Token storage was set to `value`
     */
    v1030: new support_1.EventType(
        'MultiTokens.TokenUpdated',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) for which the value is set
             */
            tokenId: support_1.sts.bigint(),
            /**
             * new value of Token storage
             */
            value: support_1.sts.option(function () {
                return v1030.Token
            }),
        })
    ),
    /**
     * Token storage was set to `value`
     */
    v1050: new support_1.EventType(
        'MultiTokens.TokenUpdated',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) for which the value is set
             */
            tokenId: support_1.sts.bigint(),
            /**
             * new value of Token storage
             */
            value: support_1.sts.option(function () {
                return v1050.Token
            }),
        })
    ),
}
exports.nextCollectionIdUpdated = {
    name: 'MultiTokens.NextCollectionIdUpdated',
    /**
     * NextCollectionId storage was set to `collection_id`
     */
    matrixEnjinV603: new support_1.EventType(
        'MultiTokens.NextCollectionIdUpdated',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
        })
    ),
}
exports.collectionAccountUpdated = {
    name: 'MultiTokens.CollectionAccountUpdated',
    /**
     * TokenAccount storage was set to `value`
     */
    matrixEnjinV603: new support_1.EventType(
        'MultiTokens.CollectionAccountUpdated',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that owned the token account
             */
            accountId: matrixEnjinV603.AccountId32,
            /**
             * new value of TokenAccount storage
             */
            value: support_1.sts.option(function () {
                return matrixEnjinV603.CollectionAccount
            }),
        })
    ),
}
exports.tokenAccountUpdated = {
    name: 'MultiTokens.TokenAccountUpdated',
    /**
     * TokenAccount storage was set to `value`
     */
    matrixEnjinV603: new support_1.EventType(
        'MultiTokens.TokenAccountUpdated',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) of the destroyed account
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that owned the token account
             */
            accountId: matrixEnjinV603.AccountId32,
            /**
             * new value of TokenAccount storage
             */
            value: support_1.sts.option(function () {
                return matrixEnjinV603.TokenAccount
            }),
        })
    ),
    /**
     * TokenAccount storage was set to `value`
     */
    matrixEnjinV1012: new support_1.EventType(
        'MultiTokens.TokenAccountUpdated',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) of the destroyed account
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that owned the token account
             */
            accountId: matrixEnjinV1012.AccountId32,
            /**
             * new value of TokenAccount storage
             */
            value: support_1.sts.option(function () {
                return matrixEnjinV1012.TokenAccount
            }),
        })
    ),
    /**
     * TokenAccount storage was set to `value`
     */
    matrixEnjinV1022: new support_1.EventType(
        'MultiTokens.TokenAccountUpdated',
        support_1.sts.struct({
            /**
             * The collection id for which the value is set
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The token id of the updated account
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The account id that owned the token account
             */
            accountId: matrixEnjinV1022.AccountId32,
            /**
             * new value of TokenAccount storage
             */
            value: support_1.sts.option(function () {
                return matrixEnjinV1022.TokenAccount
            }),
        })
    ),
    /**
     * TokenAccount storage was set to `value`
     */
    matrixV500: new support_1.EventType(
        'MultiTokens.TokenAccountUpdated',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) of the destroyed account
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that owned the token account
             */
            accountId: matrixV500.AccountId32,
            /**
             * new value of TokenAccount storage
             */
            value: support_1.sts.option(function () {
                return matrixV500.TokenAccount
            }),
        })
    ),
    /**
     * TokenAccount storage was set to `value`
     */
    matrixV1010: new support_1.EventType(
        'MultiTokens.TokenAccountUpdated',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) of the destroyed account
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that owned the token account
             */
            accountId: matrixV1010.AccountId32,
            /**
             * new value of TokenAccount storage
             */
            value: support_1.sts.option(function () {
                return matrixV1010.TokenAccount
            }),
        })
    ),
    /**
     * TokenAccount storage was set to `value`
     */
    matrixV1020: new support_1.EventType(
        'MultiTokens.TokenAccountUpdated',
        support_1.sts.struct({
            /**
             * The collection id for which the value is set
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The token id of the updated account
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The account id that owned the token account
             */
            accountId: matrixV1020.AccountId32,
            /**
             * new value of TokenAccount storage
             */
            value: support_1.sts.option(function () {
                return matrixV1020.TokenAccount
            }),
        })
    ),
    /**
     * TokenAccount storage was set to `value`
     */
    enjinV100: new support_1.EventType(
        'MultiTokens.TokenAccountUpdated',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) of the destroyed account
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that owned the token account
             */
            accountId: enjinV100.AccountId32,
            /**
             * new value of TokenAccount storage
             */
            value: support_1.sts.option(function () {
                return enjinV100.TokenAccount
            }),
        })
    ),
    /**
     * TokenAccount storage was set to `value`
     */
    enjinV1032: new support_1.EventType(
        'MultiTokens.TokenAccountUpdated',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) of the destroyed account
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that owned the token account
             */
            accountId: enjinV1032.AccountId32,
            /**
             * new value of TokenAccount storage
             */
            value: support_1.sts.option(function () {
                return enjinV1032.TokenAccount
            }),
        })
    ),
    /**
     * TokenAccount storage was set to `value`
     */
    enjinV1050: new support_1.EventType(
        'MultiTokens.TokenAccountUpdated',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) of the destroyed account
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that owned the token account
             */
            accountId: enjinV1050.AccountId32,
            /**
             * new value of TokenAccount storage
             */
            value: support_1.sts.option(function () {
                return enjinV1050.TokenAccount
            }),
        })
    ),
    /**
     * TokenAccount storage was set to `value`
     */
    v100: new support_1.EventType(
        'MultiTokens.TokenAccountUpdated',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) of the destroyed account
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that owned the token account
             */
            accountId: v100.AccountId32,
            /**
             * new value of TokenAccount storage
             */
            value: support_1.sts.option(function () {
                return v100.TokenAccount
            }),
        })
    ),
    /**
     * TokenAccount storage was set to `value`
     */
    v1030: new support_1.EventType(
        'MultiTokens.TokenAccountUpdated',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) of the destroyed account
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that owned the token account
             */
            accountId: v1030.AccountId32,
            /**
             * new value of TokenAccount storage
             */
            value: support_1.sts.option(function () {
                return v1030.TokenAccount
            }),
        })
    ),
    /**
     * TokenAccount storage was set to `value`
     */
    v1050: new support_1.EventType(
        'MultiTokens.TokenAccountUpdated',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) of the destroyed account
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that owned the token account
             */
            accountId: v1050.AccountId32,
            /**
             * new value of TokenAccount storage
             */
            value: support_1.sts.option(function () {
                return v1050.TokenAccount
            }),
        })
    ),
}
exports.migrationStatusUpdated = {
    name: 'MultiTokens.MigrationStatusUpdated',
    /**
     * Migration stage updated
     */
    matrixEnjinV603: new support_1.EventType(
        'MultiTokens.MigrationStatusUpdated',
        support_1.sts.struct({
            stage: matrixEnjinV603.MigrationStage,
        })
    ),
}
exports.claimedCollections = {
    name: 'MultiTokens.ClaimedCollections',
    /**
     * Collections were claimed
     */
    matrixEnjinV603: new support_1.EventType(
        'MultiTokens.ClaimedCollections',
        support_1.sts.struct({
            /**
             * The account that received the claim
             */
            accountId: matrixEnjinV603.AccountId32,
            /**
             * The ethereum address
             */
            ethereumAddress: matrixEnjinV603.H160,
            /**
             * The collection ids that were claimed
             */
            collectionIds: support_1.sts.array(function () {
                return matrixEnjinV603.CollectionIdPair
            }),
        })
    ),
    /**
     * Collections were claimed
     */
    matrixEnjinV1000: new support_1.EventType(
        'MultiTokens.ClaimedCollections',
        support_1.sts.struct({
            /**
             * The account that received the claim
             */
            accountId: matrixEnjinV1000.AccountId32,
            /**
             * The ethereum address
             */
            ethereumAddress: matrixEnjinV1000.H160,
            /**
             * The collection ids that were claimed
             */
            collectionIds: support_1.sts.array(function () {
                return support_1.sts.bigint()
            }),
        })
    ),
    /**
     * Collections were claimed
     */
    matrixV604: new support_1.EventType(
        'MultiTokens.ClaimedCollections',
        support_1.sts.struct({
            /**
             * The account that received the claim
             */
            accountId: matrixV604.AccountId32,
            /**
             * The ethereum address
             */
            ethereumAddress: matrixV604.H160,
            /**
             * The collection ids that were claimed
             */
            collectionIds: support_1.sts.array(function () {
                return matrixV604.CollectionIdPair
            }),
        })
    ),
    /**
     * Collections were claimed
     */
    matrixV1000: new support_1.EventType(
        'MultiTokens.ClaimedCollections',
        support_1.sts.struct({
            /**
             * The account that received the claim
             */
            accountId: matrixV1000.AccountId32,
            /**
             * The ethereum address
             */
            ethereumAddress: matrixV1000.H160,
            /**
             * The collection ids that were claimed
             */
            collectionIds: support_1.sts.array(function () {
                return support_1.sts.bigint()
            }),
        })
    ),
    /**
     * Collections were claimed
     */
    enjinV101: new support_1.EventType(
        'MultiTokens.ClaimedCollections',
        support_1.sts.struct({
            /**
             * The account that received the claim
             */
            accountId: enjinV101.AccountId32,
            /**
             * The ethereum address
             */
            ethereumAddress: enjinV101.H160,
            /**
             * The collection ids that were claimed
             */
            collectionIds: support_1.sts.array(function () {
                return enjinV101.CollectionIdPair
            }),
        })
    ),
    /**
     * Collections were claimed
     */
    enjinV1021: new support_1.EventType(
        'MultiTokens.ClaimedCollections',
        support_1.sts.struct({
            /**
             * The account that received the claim
             */
            accountId: enjinV1021.AccountId32,
            /**
             * The ethereum address
             */
            ethereumAddress: enjinV1021.H160,
            /**
             * The collection ids that were claimed
             */
            collectionIds: support_1.sts.array(function () {
                return support_1.sts.bigint()
            }),
        })
    ),
    /**
     * Collections were claimed
     */
    v106: new support_1.EventType(
        'MultiTokens.ClaimedCollections',
        support_1.sts.struct({
            /**
             * The account that received the claim
             */
            accountId: v106.AccountId32,
            /**
             * The ethereum address
             */
            ethereumAddress: v106.H160,
            /**
             * The collection ids that were claimed
             */
            collectionIds: support_1.sts.array(function () {
                return v106.CollectionIdPair
            }),
        })
    ),
    /**
     * Collections were claimed
     */
    v1021: new support_1.EventType(
        'MultiTokens.ClaimedCollections',
        support_1.sts.struct({
            /**
             * The account that received the claim
             */
            accountId: v1021.AccountId32,
            /**
             * The ethereum address
             */
            ethereumAddress: v1021.H160,
            /**
             * The collection ids that were claimed
             */
            collectionIds: support_1.sts.array(function () {
                return support_1.sts.bigint()
            }),
        })
    ),
}
exports.claimedTokens = {
    name: 'MultiTokens.ClaimedTokens',
    /**
     * Tokens were claimed
     */
    matrixEnjinV603: new support_1.EventType(
        'MultiTokens.ClaimedTokens',
        support_1.sts.struct({
            /**
             * The account that received the tokens
             */
            accountId: matrixEnjinV603.AccountId32,
            /**
             * The ethereum address
             */
            ethereumAddress: matrixEnjinV603.H160,
            /**
             * The asset ids that were claimed
             */
            assetIds: support_1.sts.array(function () {
                return matrixEnjinV603.AssetIdWithEth
            }),
            /**
             * This is true if there are still more tokens to claim
             */
            moreTokensRemain: support_1.sts.boolean(),
        })
    ),
}
exports.claimTokensInitiated = {
    name: 'MultiTokens.ClaimTokensInitiated',
    /**
     * Claims tokens initiated
     */
    matrixEnjinV1000: new support_1.EventType(
        'MultiTokens.ClaimTokensInitiated',
        support_1.sts.struct({
            /**
             * The account that will receive the tokens
             */
            accountId: matrixEnjinV1000.AccountId32,
            /**
             * The ethereum address
             */
            ethereumAddress: matrixEnjinV1000.H160,
        })
    ),
}
exports.claimTokensCompleted = {
    name: 'MultiTokens.ClaimTokensCompleted',
    /**
     * Finished claiming the tokens
     */
    matrixEnjinV1000: new support_1.EventType(
        'MultiTokens.ClaimTokensCompleted',
        support_1.sts.struct({
            /**
             * The account that received the tokens
             */
            destination: matrixEnjinV1000.AccountId32,
            /**
             * The ethereum address that initiated the claim
             */
            ethereumAddress: matrixEnjinV1000.H160,
        })
    ),
}
exports.collectionTransferred = {
    name: 'MultiTokens.CollectionTransferred',
    /**
     * Collection ownership was transferred
     */
    matrixEnjinV1004: new support_1.EventType(
        'MultiTokens.CollectionTransferred',
        support_1.sts.struct({
            /**
             * The collection that was transferred
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The new owner of the collection
             */
            newOwner: matrixEnjinV1004.AccountId32,
        })
    ),
}
exports.collectionTransferCancelled = {
    name: 'MultiTokens.CollectionTransferCancelled',
    /**
     * A pending collection transfer was cancelled
     */
    matrixEnjinV1004: new support_1.EventType(
        'MultiTokens.CollectionTransferCancelled',
        support_1.sts.struct({
            /**
             * The collection id of the cancelled transfer
             */
            collectionId: support_1.sts.bigint(),
        })
    ),
}
exports.tokenAccountDepositUpdated = {
    name: 'MultiTokens.TokenAccountDepositUpdated',
    /**
     * The deposit for number of accounts supported by a token changed
     */
    matrixEnjinV1012: new support_1.EventType(
        'MultiTokens.TokenAccountDepositUpdated',
        support_1.sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the account is created
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) fof the destroyed account
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The account that deposited or removed deposit
             */
            depositor: matrixEnjinV1012.AccountId32,
            /**
             * The change in the number of accounts
             */
            deltaAccountCount: support_1.sts.number(),
        })
    ),
}
exports.infused = {
    name: 'MultiTokens.Infused',
    /**
     * The token was infused with ENJ
     */
    matrixEnjinV1012: new support_1.EventType(
        'MultiTokens.Infused',
        support_1.sts.struct({
            /**
             * The collection that was infused
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The token that was infused
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The account that infused the token
             */
            accountId: matrixEnjinV1012.AccountId32,
            /**
             * The amount that was infused
             */
            amount: support_1.sts.bigint(),
        })
    ),
    /**
     * The token was infused with ENJ
     */
    matrixEnjinV1022: new support_1.EventType(
        'MultiTokens.Infused',
        support_1.sts.struct({
            /**
             * The collection that was infused
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The token that was infused
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The account that infused the token
             */
            accountId: matrixEnjinV1022.RootOrSigned,
            /**
             * The amount that was infused
             */
            amount: support_1.sts.bigint(),
        })
    ),
    /**
     * The token was infused with ENJ
     */
    matrixV1010: new support_1.EventType(
        'MultiTokens.Infused',
        support_1.sts.struct({
            /**
             * The collection that was infused
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The token that was infused
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The account that infused the token
             */
            accountId: matrixV1010.AccountId32,
            /**
             * The amount that was infused
             */
            amount: support_1.sts.bigint(),
        })
    ),
    /**
     * The token was infused with ENJ
     */
    matrixV1020: new support_1.EventType(
        'MultiTokens.Infused',
        support_1.sts.struct({
            /**
             * The collection that was infused
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The token that was infused
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The account that infused the token
             */
            accountId: matrixV1020.RootOrSigned,
            /**
             * The amount that was infused
             */
            amount: support_1.sts.bigint(),
        })
    ),
    /**
     * The token was infused with ENJ
     */
    enjinV1032: new support_1.EventType(
        'MultiTokens.Infused',
        support_1.sts.struct({
            /**
             * The collection that was infused
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The token that was infused
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The account that infused the token
             */
            accountId: enjinV1032.AccountId32,
            /**
             * The amount that was infused
             */
            amount: support_1.sts.bigint(),
        })
    ),
    /**
     * The token was infused with ENJ
     */
    enjinV1050: new support_1.EventType(
        'MultiTokens.Infused',
        support_1.sts.struct({
            /**
             * The collection that was infused
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The token that was infused
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The account that infused the token
             */
            accountId: enjinV1050.RootOrSigned,
            /**
             * The amount that was infused
             */
            amount: support_1.sts.bigint(),
        })
    ),
    /**
     * The token was infused with ENJ
     */
    v1030: new support_1.EventType(
        'MultiTokens.Infused',
        support_1.sts.struct({
            /**
             * The collection that was infused
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The token that was infused
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The account that infused the token
             */
            accountId: v1030.AccountId32,
            /**
             * The amount that was infused
             */
            amount: support_1.sts.bigint(),
        })
    ),
    /**
     * The token was infused with ENJ
     */
    v1050: new support_1.EventType(
        'MultiTokens.Infused',
        support_1.sts.struct({
            /**
             * The collection that was infused
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The token that was infused
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The account that infused the token
             */
            accountId: v1050.RootOrSigned,
            /**
             * The amount that was infused
             */
            amount: support_1.sts.bigint(),
        })
    ),
}
exports.migrationStep = {
    name: 'MultiTokens.MigrationStep',
    /**
     * The migration step has completed
     */
    matrixEnjinV1012: new support_1.EventType(
        'MultiTokens.MigrationStep',
        support_1.sts.struct({
            /**
             * The number of items processed within this step
             */
            itemsProcessed: support_1.sts.number(),
            /**
             * The migration phase
             */
            phase: support_1.sts.number(),
        })
    ),
}
exports.collectionDepositRecalculationInProgress = {
    name: 'MultiTokens.CollectionDepositRecalculationInProgress',
    /**
     * Collection deposit update in progress
     */
    matrixEnjinV1022: new support_1.EventType(
        'MultiTokens.CollectionDepositRecalculationInProgress',
        support_1.sts.struct({
            /**
             * The collection id
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The number of tokens processed
             */
            processedTokens: support_1.sts.number(),
            /**
             * The number of attributes processed
             */
            processedAttributes: support_1.sts.number(),
        })
    ),
}
exports.collectionDepositUpdateCompleted = {
    name: 'MultiTokens.CollectionDepositUpdateCompleted',
    /**
     * Collection deposit update completed
     */
    matrixEnjinV1022: new support_1.EventType(
        'MultiTokens.CollectionDepositUpdateCompleted',
        support_1.sts.struct({
            /**
             * The collection id
             */
            collectionId: support_1.sts.bigint(),
        })
    ),
}
exports.tokenAccountUpgraded = {
    name: 'MultiTokens.TokenAccountUpgraded',
    /**
     * A token account was upgraded
     */
    matrixEnjinV1022: new support_1.EventType(
        'MultiTokens.TokenAccountUpgraded',
        support_1.sts.struct({
            /**
             * The account's collection id
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The account's token id
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The holder of the account
             */
            accountId: matrixEnjinV1022.AccountId32,
            /**
             * The version of the storage this element was migrated to
             */
            storageVersion: support_1.sts.number(),
        })
    ),
}
exports.tokenUpgraded = {
    name: 'MultiTokens.TokenUpgraded',
    /**
     * A token was upgraded
     */
    matrixEnjinV1022: new support_1.EventType(
        'MultiTokens.TokenUpgraded',
        support_1.sts.struct({
            /**
             * The collection id of the token
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The token id
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The version of the storage this element was migrated to
             */
            storageVersion: support_1.sts.number(),
        })
    ),
}
exports.collectionUpgraded = {
    name: 'MultiTokens.CollectionUpgraded',
    /**
     * A collection was upgraded
     */
    matrixEnjinV1022: new support_1.EventType(
        'MultiTokens.CollectionUpgraded',
        support_1.sts.struct({
            /**
             * The collection id
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The version of the storage this element was migrated to
             */
            storageVersion: support_1.sts.number(),
        })
    ),
}
exports.collectionAccountApprovalsUpdated = {
    name: 'MultiTokens.CollectionAccountApprovalsUpdated',
    /**
     * A collection was upgraded
     */
    matrixEnjinV1022: new support_1.EventType(
        'MultiTokens.CollectionAccountApprovalsUpdated',
        support_1.sts.struct({
            /**
             * The collection id
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The account that owns the collection
             */
            accountId: matrixEnjinV1022.AccountId32,
            /**
             * Approval expirations before the update call
             */
            oldApprovals: support_1.sts.array(function () {
                return support_1.sts.tuple(function () {
                    return [
                        matrixEnjinV1022.AccountId32,
                        support_1.sts.option(function () {
                            return support_1.sts.number()
                        }),
                    ]
                })
            }),
        })
    ),
}
exports.collectionAccountApprovalsMismatch = {
    name: 'MultiTokens.CollectionAccountApprovalsMismatch',
    /**
     * A given collection expiration list doesn't its current approvals
     */
    matrixEnjinV1022: new support_1.EventType(
        'MultiTokens.CollectionAccountApprovalsMismatch',
        support_1.sts.struct({
            /**
             * The collection id
             */
            collectionId: support_1.sts.bigint(),
            /**
             * The account that owns the collection
             */
            accountId: matrixEnjinV1022.AccountId32,
        })
    ),
}
exports.tokenGroupCreated = {
    name: 'MultiTokens.TokenGroupCreated',
    /**
     * A new token group was created
     */
    matrixEnjinV1022: new support_1.EventType(
        'MultiTokens.TokenGroupCreated',
        support_1.sts.struct({
            /**
             * collection where the token group belongs
             */
            collectionId: support_1.sts.bigint(),
            /**
             * id of the token group
             */
            tokenGroupId: support_1.sts.bigint(),
        })
    ),
}
exports.tokenGroupDestroyed = {
    name: 'MultiTokens.TokenGroupDestroyed',
    /**
     * A token group was destroyed
     */
    matrixEnjinV1022: new support_1.EventType(
        'MultiTokens.TokenGroupDestroyed',
        support_1.sts.struct({
            /**
             * id of the token group
             */
            tokenGroupId: support_1.sts.bigint(),
        })
    ),
}
exports.tokenGroupAdded = {
    name: 'MultiTokens.TokenGroupAdded',
    /**
     * A token was added to a group
     */
    matrixEnjinV1022: new support_1.EventType(
        'MultiTokens.TokenGroupAdded',
        support_1.sts.struct({
            /**
             * collection id of the token
             */
            collectionId: support_1.sts.bigint(),
            /**
             * id of the token
             */
            tokenId: support_1.sts.bigint(),
            /**
             * id of the token group
             */
            tokenGroupId: support_1.sts.bigint(),
        })
    ),
}
exports.tokenGroupRemoved = {
    name: 'MultiTokens.TokenGroupRemoved',
    /**
     * A token was removed from a group
     */
    matrixEnjinV1022: new support_1.EventType(
        'MultiTokens.TokenGroupRemoved',
        support_1.sts.struct({
            /**
             * collection id of the token
             */
            collectionId: support_1.sts.bigint(),
            /**
             * id of the token
             */
            tokenId: support_1.sts.bigint(),
            /**
             * id of the token group
             */
            tokenGroupId: support_1.sts.bigint(),
        })
    ),
}
exports.tokenGroupsUpdated = {
    name: 'MultiTokens.TokenGroupsUpdated',
    /**
     * A token's group list was set
     */
    matrixEnjinV1022: new support_1.EventType(
        'MultiTokens.TokenGroupsUpdated',
        support_1.sts.struct({
            /**
             * collection id of the group
             */
            collectionId: support_1.sts.bigint(),
            /**
             * token id of the groups
             */
            tokenId: support_1.sts.bigint(),
            /**
             * ids of the token groups
             */
            tokenGroups: support_1.sts.array(function () {
                return support_1.sts.bigint()
            }),
        })
    ),
}
exports.tokenGroupAttributeSet = {
    name: 'MultiTokens.TokenGroupAttributeSet',
    /**
     * New attribute has been set on a token group
     */
    matrixEnjinV1022: new support_1.EventType(
        'MultiTokens.TokenGroupAttributeSet',
        support_1.sts.struct({
            /**
             * id of the token group
             */
            tokenGroupId: support_1.sts.bigint(),
            /**
             * key of attribute set
             */
            key: support_1.sts.bytes(),
            /**
             * value of attribute set
             */
            value: support_1.sts.bytes(),
        })
    ),
}
exports.tokenGroupAttributeRemoved = {
    name: 'MultiTokens.TokenGroupAttributeRemoved',
    /**
     * An attribute has been removed from a token group
     */
    matrixEnjinV1022: new support_1.EventType(
        'MultiTokens.TokenGroupAttributeRemoved',
        support_1.sts.struct({
            /**
             * id of the token group
             */
            tokenGroupId: support_1.sts.bigint(),
            /**
             * key of attribute cleared
             */
            key: support_1.sts.bytes(),
        })
    ),
}
