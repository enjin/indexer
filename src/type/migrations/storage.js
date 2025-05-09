'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.historic = exports.cursor = void 0
var support_1 = require('../support')
var matrixEnjinV1012 = require('../matrixEnjinV1012')
exports.cursor = {
    /**
     *  The currently active migration to run and its cursor.
     *
     *  `None` indicates that no migration is running.
     */
    matrixEnjinV1012: new support_1.StorageType('Migrations.Cursor', 'Optional', [], matrixEnjinV1012.MigrationCursor),
}
exports.historic = {
    /**
     *  Set of all successfully executed migrations.
     *
     *  This is used as blacklist, to not re-execute migrations that have not been removed from the
     *  codebase yet. Governance can regularly clear this out via `clear_historic`.
     */
    matrixEnjinV1012: new support_1.StorageType(
        'Migrations.Historic',
        'Optional',
        [support_1.sts.bytes()],
        support_1.sts.unit()
    ),
}
