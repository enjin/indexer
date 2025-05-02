'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.swapped = exports.reserved = exports.deregistered = exports.registered = void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var enjinV101 = require('../enjinV101')
exports.registered = {
    name: 'Registrar.Registered',
    enjinV100: new support_1.EventType(
        'Registrar.Registered',
        support_1.sts.struct({
            paraId: enjinV100.Id,
            manager: enjinV100.AccountId32,
        })
    ),
}
exports.deregistered = {
    name: 'Registrar.Deregistered',
    enjinV100: new support_1.EventType(
        'Registrar.Deregistered',
        support_1.sts.struct({
            paraId: enjinV100.Id,
        })
    ),
}
exports.reserved = {
    name: 'Registrar.Reserved',
    enjinV100: new support_1.EventType(
        'Registrar.Reserved',
        support_1.sts.struct({
            paraId: enjinV100.Id,
            who: enjinV100.AccountId32,
        })
    ),
}
exports.swapped = {
    name: 'Registrar.Swapped',
    enjinV101: new support_1.EventType(
        'Registrar.Swapped',
        support_1.sts.struct({
            paraId: enjinV101.Id,
            otherId: enjinV101.Id,
        })
    ),
}
