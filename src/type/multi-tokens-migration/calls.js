'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.finalize =
    exports.migrateAttributes =
    exports.migrateTokenAccounts =
    exports.migrateCollectionAccounts =
    exports.migrateTokens =
    exports.migrateCollections =
        void 0
var support_1 = require('../support')
var matrixEnjinV603 = require('../matrixEnjinV603')
exports.migrateCollections = {
    name: 'MultiTokensMigration.migrate_collections',
    /**
     * Migrates [`Collections`] by setting values for the given collections
     */
    matrixEnjinV603: new support_1.CallType(
        'MultiTokensMigration.migrate_collections',
        support_1.sts.struct({
            collections: support_1.sts.array(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.bigint(), matrixEnjinV603.Collection]
                })
            }),
        })
    ),
}
exports.migrateTokens = {
    name: 'MultiTokensMigration.migrate_tokens',
    /**
     * Migrates [`Tokens`] by setting values for the given tokens
     */
    matrixEnjinV603: new support_1.CallType(
        'MultiTokensMigration.migrate_tokens',
        support_1.sts.struct({
            tokens: support_1.sts.array(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.bigint(), support_1.sts.bigint(), matrixEnjinV603.Token]
                })
            }),
        })
    ),
}
exports.migrateCollectionAccounts = {
    name: 'MultiTokensMigration.migrate_collection_accounts',
    /**
     * Migrates [`CollectionAccounts`] by setting values for the given accounts
     */
    matrixEnjinV603: new support_1.CallType(
        'MultiTokensMigration.migrate_collection_accounts',
        support_1.sts.struct({
            accounts: support_1.sts.array(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.bigint(), matrixEnjinV603.AccountId32, matrixEnjinV603.CollectionAccount]
                })
            }),
        })
    ),
}
exports.migrateTokenAccounts = {
    name: 'MultiTokensMigration.migrate_token_accounts',
    /**
     * Migrates [`TokenAccounts`] by setting values for the given accounts
     */
    matrixEnjinV603: new support_1.CallType(
        'MultiTokensMigration.migrate_token_accounts',
        support_1.sts.struct({
            accounts: support_1.sts.array(function () {
                return support_1.sts.tuple(function () {
                    return [
                        support_1.sts.bigint(),
                        support_1.sts.bigint(),
                        matrixEnjinV603.AccountId32,
                        matrixEnjinV603.TokenAccount,
                    ]
                })
            }),
        })
    ),
}
exports.migrateAttributes = {
    name: 'MultiTokensMigration.migrate_attributes',
    /**
     * Migrates [`Attributes`] by setting attribute values for the specified list of attributes
     */
    matrixEnjinV603: new support_1.CallType(
        'MultiTokensMigration.migrate_attributes',
        support_1.sts.struct({
            attributes: support_1.sts.array(function () {
                return support_1.sts.tuple(function () {
                    return [
                        support_1.sts.bigint(),
                        support_1.sts.option(function () {
                            return support_1.sts.bigint()
                        }),
                        support_1.sts.bytes(),
                        matrixEnjinV603.Attribute,
                    ]
                })
            }),
        })
    ),
}
exports.finalize = {
    name: 'MultiTokensMigration.finalize',
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
    matrixEnjinV603: new support_1.CallType(
        'MultiTokensMigration.finalize',
        support_1.sts.struct({
            nextCollectionId: support_1.sts.bigint(),
        })
    ),
}
