'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.resumed = exports.paused = exports.newAuthorities = void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
exports.newAuthorities = {
    name: 'Grandpa.NewAuthorities',
    /**
     * New authority set has been applied.
     */
    enjinV100: new support_1.EventType(
        'Grandpa.NewAuthorities',
        support_1.sts.struct({
            authoritySet: support_1.sts.array(function () {
                return support_1.sts.tuple(function () {
                    return [enjinV100.Public, support_1.sts.bigint()]
                })
            }),
        })
    ),
}
exports.paused = {
    name: 'Grandpa.Paused',
    /**
     * Current authority set has been paused.
     */
    enjinV100: new support_1.EventType('Grandpa.Paused', support_1.sts.unit()),
}
exports.resumed = {
    name: 'Grandpa.Resumed',
    /**
     * Current authority set has been resumed.
     */
    enjinV100: new support_1.EventType('Grandpa.Resumed', support_1.sts.unit()),
}
