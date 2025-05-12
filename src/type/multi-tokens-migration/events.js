'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.migrationFinished =
    exports.migratedAttributes =
    exports.migratedTokenAccounts =
    exports.migratedCollectionAccounts =
    exports.migratedTokens =
    exports.migratedCollections =
        void 0
var support_1 = require('../support')
exports.migratedCollections = {
    name: 'MultiTokensMigration.MigratedCollections',
    /**
     * Number of collections that have been migrated
     */
    matrixEnjinV603: new support_1.EventType('MultiTokensMigration.MigratedCollections', support_1.sts.number()),
}
exports.migratedTokens = {
    name: 'MultiTokensMigration.MigratedTokens',
    /**
     * Number of tokens have been migrated
     */
    matrixEnjinV603: new support_1.EventType('MultiTokensMigration.MigratedTokens', support_1.sts.number()),
}
exports.migratedCollectionAccounts = {
    name: 'MultiTokensMigration.MigratedCollectionAccounts',
    /**
     * Number of collection accounts have been migrated
     */
    matrixEnjinV603: new support_1.EventType('MultiTokensMigration.MigratedCollectionAccounts', support_1.sts.number()),
}
exports.migratedTokenAccounts = {
    name: 'MultiTokensMigration.MigratedTokenAccounts',
    /**
     * Number of token accounts have been migrated
     */
    matrixEnjinV603: new support_1.EventType('MultiTokensMigration.MigratedTokenAccounts', support_1.sts.number()),
}
exports.migratedAttributes = {
    name: 'MultiTokensMigration.MigratedAttributes',
    /**
     * Number of attributes have been migrated
     */
    matrixEnjinV603: new support_1.EventType('MultiTokensMigration.MigratedAttributes', support_1.sts.number()),
}
exports.migrationFinished = {
    name: 'MultiTokensMigration.MigrationFinished',
    /**
     * Indicates that the migration is finished
     */
    matrixEnjinV603: new support_1.EventType('MultiTokensMigration.MigrationFinished', support_1.sts.unit()),
}
