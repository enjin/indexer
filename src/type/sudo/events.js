'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.keyRemoved = exports.sudoAsDone = exports.keyChanged = exports.sudid = void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var v100 = require('../v100')
var enjinV101 = require('../enjinV101')
var v104 = require('../v104')
var v105 = require('../v105')
var matrixV500 = require('../matrixV500')
var matrixV602 = require('../matrixV602')
var matrixV1000 = require('../matrixV1000')
var matrixV1010 = require('../matrixV1010')
var v1030 = require('../v1030')
var enjinV1032 = require('../enjinV1032')
exports.sudid = {
    name: 'Sudo.Sudid',
    /**
     * A sudo just took place. \[result\]
     */
    matrixV500: new support_1.EventType(
        'Sudo.Sudid',
        support_1.sts.struct({
            sudoResult: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return matrixV500.DispatchError
                }
            ),
        })
    ),
    /**
     * A sudo just took place. \[result\]
     */
    matrixV602: new support_1.EventType(
        'Sudo.Sudid',
        support_1.sts.struct({
            sudoResult: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return matrixV602.DispatchError
                }
            ),
        })
    ),
    /**
     * A sudo just took place. \[result\]
     */
    matrixV1000: new support_1.EventType(
        'Sudo.Sudid',
        support_1.sts.struct({
            sudoResult: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return matrixV1000.DispatchError
                }
            ),
        })
    ),
    /**
     * A sudo just took place. \[result\]
     */
    enjinV100: new support_1.EventType(
        'Sudo.Sudid',
        support_1.sts.struct({
            sudoResult: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return enjinV100.DispatchError
                }
            ),
        })
    ),
    /**
     * A sudo just took place. \[result\]
     */
    enjinV101: new support_1.EventType(
        'Sudo.Sudid',
        support_1.sts.struct({
            sudoResult: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return enjinV101.DispatchError
                }
            ),
        })
    ),
    /**
     * A sudo just took place. \[result\]
     */
    v100: new support_1.EventType(
        'Sudo.Sudid',
        support_1.sts.struct({
            sudoResult: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return v100.DispatchError
                }
            ),
        })
    ),
    /**
     * A sudo just took place. \[result\]
     */
    v104: new support_1.EventType(
        'Sudo.Sudid',
        support_1.sts.struct({
            sudoResult: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return v104.DispatchError
                }
            ),
        })
    ),
    /**
     * A sudo just took place. \[result\]
     */
    v105: new support_1.EventType(
        'Sudo.Sudid',
        support_1.sts.struct({
            sudoResult: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return v105.DispatchError
                }
            ),
        })
    ),
}
exports.keyChanged = {
    name: 'Sudo.KeyChanged',
    /**
     * The \[sudoer\] just switched identity; the old key is supplied if one existed.
     */
    matrixV500: new support_1.EventType(
        'Sudo.KeyChanged',
        support_1.sts.struct({
            oldSudoer: support_1.sts.option(function () {
                return matrixV500.AccountId32
            }),
        })
    ),
    /**
     * The sudo key has been updated.
     */
    matrixV1010: new support_1.EventType(
        'Sudo.KeyChanged',
        support_1.sts.struct({
            /**
             * The old sudo key (if one was previously set).
             */
            old: support_1.sts.option(function () {
                return matrixV1010.AccountId32
            }),
            /**
             * The new sudo key (if one was set).
             */
            new: matrixV1010.AccountId32,
        })
    ),
    /**
     * The \[sudoer\] just switched identity; the old key is supplied if one existed.
     */
    enjinV100: new support_1.EventType(
        'Sudo.KeyChanged',
        support_1.sts.struct({
            oldSudoer: support_1.sts.option(function () {
                return enjinV100.AccountId32
            }),
        })
    ),
    /**
     * The sudo key has been updated.
     */
    enjinV1032: new support_1.EventType(
        'Sudo.KeyChanged',
        support_1.sts.struct({
            /**
             * The old sudo key (if one was previously set).
             */
            old: support_1.sts.option(function () {
                return enjinV1032.AccountId32
            }),
            /**
             * The new sudo key (if one was set).
             */
            new: enjinV1032.AccountId32,
        })
    ),
    /**
     * The \[sudoer\] just switched identity; the old key is supplied if one existed.
     */
    v100: new support_1.EventType(
        'Sudo.KeyChanged',
        support_1.sts.struct({
            oldSudoer: support_1.sts.option(function () {
                return v100.AccountId32
            }),
        })
    ),
    /**
     * The sudo key has been updated.
     */
    v1030: new support_1.EventType(
        'Sudo.KeyChanged',
        support_1.sts.struct({
            /**
             * The old sudo key (if one was previously set).
             */
            old: support_1.sts.option(function () {
                return v1030.AccountId32
            }),
            /**
             * The new sudo key (if one was set).
             */
            new: v1030.AccountId32,
        })
    ),
}
exports.sudoAsDone = {
    name: 'Sudo.SudoAsDone',
    /**
     * A sudo just took place. \[result\]
     */
    matrixV500: new support_1.EventType(
        'Sudo.SudoAsDone',
        support_1.sts.struct({
            sudoResult: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return matrixV500.DispatchError
                }
            ),
        })
    ),
    /**
     * A sudo just took place. \[result\]
     */
    matrixV602: new support_1.EventType(
        'Sudo.SudoAsDone',
        support_1.sts.struct({
            sudoResult: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return matrixV602.DispatchError
                }
            ),
        })
    ),
    /**
     * A sudo just took place. \[result\]
     */
    matrixV1000: new support_1.EventType(
        'Sudo.SudoAsDone',
        support_1.sts.struct({
            sudoResult: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return matrixV1000.DispatchError
                }
            ),
        })
    ),
    /**
     * A sudo just took place. \[result\]
     */
    enjinV100: new support_1.EventType(
        'Sudo.SudoAsDone',
        support_1.sts.struct({
            sudoResult: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return enjinV100.DispatchError
                }
            ),
        })
    ),
    /**
     * A sudo just took place. \[result\]
     */
    enjinV101: new support_1.EventType(
        'Sudo.SudoAsDone',
        support_1.sts.struct({
            sudoResult: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return enjinV101.DispatchError
                }
            ),
        })
    ),
    /**
     * A sudo just took place. \[result\]
     */
    v100: new support_1.EventType(
        'Sudo.SudoAsDone',
        support_1.sts.struct({
            sudoResult: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return v100.DispatchError
                }
            ),
        })
    ),
    /**
     * A sudo just took place. \[result\]
     */
    v104: new support_1.EventType(
        'Sudo.SudoAsDone',
        support_1.sts.struct({
            sudoResult: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return v104.DispatchError
                }
            ),
        })
    ),
    /**
     * A sudo just took place. \[result\]
     */
    v105: new support_1.EventType(
        'Sudo.SudoAsDone',
        support_1.sts.struct({
            sudoResult: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return v105.DispatchError
                }
            ),
        })
    ),
}
exports.keyRemoved = {
    name: 'Sudo.KeyRemoved',
    /**
     * The key was permanently removed.
     */
    matrixV1010: new support_1.EventType('Sudo.KeyRemoved', support_1.sts.unit()),
}
