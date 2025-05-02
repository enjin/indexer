'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.newSession = void 0
var support_1 = require('../support')
exports.newSession = {
    name: 'Session.NewSession',
    /**
     * New session has happened. Note that the argument is the session index, not the
     * block number as the type might suggest.
     */
    matrixEnjinV603: new support_1.EventType(
        'Session.NewSession',
        support_1.sts.struct({
            sessionIndex: support_1.sts.number(),
        })
    ),
}
