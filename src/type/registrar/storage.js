'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.nextFreeParaId = exports.paras = exports.pendingSwap = void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var v100 = require('../v100')
var v1030 = require('../v1030')
var enjinV1032 = require('../enjinV1032')
exports.pendingSwap = {
    /**
     *  Pending swap operations.
     */
    enjinV100: new support_1.StorageType('Registrar.PendingSwap', 'Optional', [enjinV100.Id], enjinV100.Id),
}
exports.paras = {
    /**
     *  Amount held on deposit for each para and the original depositor.
     *
     *  The given account ID is responsible for registering the code and initial head data, but may only do
     *  so if it isn't yet registered. (After that, it's up to governance to do so.)
     */
    enjinV100: new support_1.StorageType('Registrar.Paras', 'Optional', [enjinV100.Id], enjinV100.ParaInfo),
    /**
     *  Amount held on deposit for each para and the original depositor.
     *
     *  The given account ID is responsible for registering the code and initial head data, but may
     *  only do so if it isn't yet registered. (After that, it's up to governance to do so.)
     */
    enjinV1032: new support_1.StorageType('Registrar.Paras', 'Optional', [enjinV1032.Id], enjinV1032.ParaInfo),
    /**
     *  Amount held on deposit for each para and the original depositor.
     *
     *  The given account ID is responsible for registering the code and initial head data, but may only do
     *  so if it isn't yet registered. (After that, it's up to governance to do so.)
     */
    v100: new support_1.StorageType('Registrar.Paras', 'Optional', [v100.Id], v100.ParaInfo),
    /**
     *  Amount held on deposit for each para and the original depositor.
     *
     *  The given account ID is responsible for registering the code and initial head data, but may
     *  only do so if it isn't yet registered. (After that, it's up to governance to do so.)
     */
    v1030: new support_1.StorageType('Registrar.Paras', 'Optional', [v1030.Id], v1030.ParaInfo),
}
exports.nextFreeParaId = {
    /**
     *  The next free `ParaId`.
     */
    enjinV100: new support_1.StorageType('Registrar.NextFreeParaId', 'Default', [], enjinV100.Id),
}
