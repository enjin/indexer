'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.identifierMaxLen = exports.cursorMaxLen = void 0
var support_1 = require('../support')
exports.cursorMaxLen = {
    /**
     *  The maximal length of an encoded cursor.
     *
     *  A good default needs to selected such that no migration will ever have a cursor with MEL
     *  above this limit. This is statically checked in `integrity_test`.
     */
    matrixEnjinV1012: new support_1.ConstantType('Migrations.CursorMaxLen', support_1.sts.number()),
}
exports.identifierMaxLen = {
    /**
     *  The maximal length of an encoded identifier.
     *
     *  A good default needs to selected such that no migration will ever have an identifier
     *  with MEL above this limit. This is statically checked in `integrity_test`.
     */
    matrixEnjinV1012: new support_1.ConstantType('Migrations.IdentifierMaxLen', support_1.sts.number()),
}
