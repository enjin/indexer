'use strict'
var __awaiter =
    (this && this.__awaiter) ||
    function (thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P
                ? value
                : new P(function (resolve) {
                      resolve(value)
                  })
        }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value))
                } catch (e) {
                    reject(e)
                }
            }
            function rejected(value) {
                try {
                    step(generator['throw'](value))
                } catch (e) {
                    reject(e)
                }
            }
            function step(result) {
                result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected)
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next())
        })
    }
var __generator =
    (this && this.__generator) ||
    function (thisArg, body) {
        var _ = {
                label: 0,
                sent: function () {
                    if (t[0] & 1) throw t[1]
                    return t[1]
                },
                trys: [],
                ops: [],
            },
            f,
            y,
            t,
            g = Object.create((typeof Iterator === 'function' ? Iterator : Object).prototype)
        return (
            (g.next = verb(0)),
            (g['throw'] = verb(1)),
            (g['return'] = verb(2)),
            typeof Symbol === 'function' &&
                (g[Symbol.iterator] = function () {
                    return this
                }),
            g
        )
        function verb(n) {
            return function (v) {
                return step([n, v])
            }
        }
        function step(op) {
            if (f) throw new TypeError('Generator is already executing.')
            while ((g && ((g = 0), op[0] && (_ = 0)), _))
                try {
                    if (
                        ((f = 1),
                        y &&
                            (t =
                                op[0] & 2
                                    ? y['return']
                                    : op[0]
                                      ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                                      : y.next) &&
                            !(t = t.call(y, op[1])).done)
                    )
                        return t
                    if (((y = 0), t)) op = [op[0] & 2, t.value]
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op
                            break
                        case 4:
                            _.label++
                            return { value: op[1], done: false }
                        case 5:
                            _.label++
                            y = op[1]
                            op = [0]
                            continue
                        case 7:
                            op = _.ops.pop()
                            _.trys.pop()
                            continue
                        default:
                            if (
                                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                                (op[0] === 6 || op[0] === 2)
                            ) {
                                _ = 0
                                continue
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1]
                                break
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1]
                                t = op
                                break
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2]
                                _.ops.push(op)
                                break
                            }
                            if (t[2]) _.ops.pop()
                            _.trys.pop()
                            continue
                    }
                    op = body.call(thisArg, _)
                } catch (e) {
                    op = [6, e]
                    y = 0
                } finally {
                    f = t = 0
                }
            if (op[0] & 5) throw op[1]
            return { value: op[0] ? op[1] : void 0, done: true }
        }
    }
var __spreadArray =
    (this && this.__spreadArray) ||
    function (to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar) ar = Array.prototype.slice.call(from, 0, i)
                    ar[i] = from[i]
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from))
    }
Object.defineProperty(exports, '__esModule', { value: true })
exports.StorageType = exports.ConstantType = exports.CallType = exports.EventType = exports.sts = void 0
var sts = require('@subsquid/substrate-runtime/lib/sts')
exports.sts = sts
var assert_1 = require('assert')
var EventType = /** @class */ (function () {
    function EventType(name, type) {
        this.name = name
        this.type = type
    }
    EventType.prototype.matches = function (block) {
        return block._runtime.events.checkType(this.name, this.type)
    }
    EventType.prototype.is = function (event) {
        return this.name == event.name && this.matches(event.block)
    }
    EventType.prototype.decode = function (event) {
        ;(0, assert_1.default)(this.is(event))
        return event.block._runtime.decodeJsonEventRecordArguments(event)
    }
    return EventType
})()
exports.EventType = EventType
var CallType = /** @class */ (function () {
    function CallType(name, type) {
        this.name = name
        this.type = type
    }
    CallType.prototype.matches = function (block) {
        return block._runtime.calls.checkType(this.name, this.type)
    }
    CallType.prototype.is = function (call) {
        return this.name == call.name && this.matches(call.block)
    }
    CallType.prototype.decode = function (call) {
        ;(0, assert_1.default)(this.is(call))
        return call.block._runtime.decodeJsonCallRecordArguments(call)
    }
    return CallType
})()
exports.CallType = CallType
var ConstantType = /** @class */ (function () {
    function ConstantType(name, type) {
        this.name = name
        this.type = type
    }
    ConstantType.prototype.is = function (block) {
        return block._runtime.checkConstantType(this.name, this.type)
    }
    ConstantType.prototype.get = function (block) {
        ;(0, assert_1.default)(this.is(block))
        return block._runtime.getConstant(this.name)
    }
    return ConstantType
})()
exports.ConstantType = ConstantType
var StorageType = /** @class */ (function () {
    function StorageType(name, modifier, key, value) {
        this.name = name
        this.modifier = modifier
        this.key = key
        this.value = value
    }
    StorageType.prototype.is = function (block) {
        return block._runtime.checkStorageType(this.name, this.modifier, this.key, this.value)
    }
    StorageType.prototype.get = function (block) {
        var key = []
        for (var _i = 1; _i < arguments.length; _i++) {
            key[_i - 1] = arguments[_i]
        }
        return __awaiter(this, void 0, void 0, function () {
            var _a
            return __generator(this, function (_b) {
                ;(0, assert_1.default)(this.is(block))
                return [
                    2 /*return*/,
                    (_a = block._runtime).getStorage.apply(_a, __spreadArray([block.hash, this.name], key, false)),
                ]
            })
        })
    }
    StorageType.prototype.getAll = function (block) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                ;(0, assert_1.default)(this.is(block))
                return [2 /*return*/, block._runtime.queryStorage(block.hash, this.name)]
            })
        })
    }
    StorageType.prototype.getMany = function (block, keys) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                ;(0, assert_1.default)(this.is(block))
                return [2 /*return*/, block._runtime.queryStorage(block.hash, this.name, keys)]
            })
        })
    }
    StorageType.prototype.getKeys = function (block) {
        var args = []
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i]
        }
        return __awaiter(this, void 0, void 0, function () {
            var _a
            return __generator(this, function (_b) {
                ;(0, assert_1.default)(this.is(block))
                return [
                    2 /*return*/,
                    (_a = block._runtime).getStorageKeys.apply(_a, __spreadArray([block.hash, this.name], args, false)),
                ]
            })
        })
    }
    StorageType.prototype.getRawKeys = function (block) {
        var args = []
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i]
        }
        return __awaiter(this, void 0, void 0, function () {
            var _a
            return __generator(this, function (_b) {
                ;(0, assert_1.default)(this.is(block))
                return [
                    2 /*return*/,
                    (_a = block._runtime).getStorageRawKeys.apply(
                        _a,
                        __spreadArray([block.hash, this.name], args, false)
                    ),
                ]
            })
        })
    }
    StorageType.prototype.getKeysPaged = function (pageSize, block) {
        var _a
        var args = []
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i]
        }
        ;(0, assert_1.default)(this.is(block))
        return (_a = block._runtime).getStorageKeysPaged.apply(
            _a,
            __spreadArray([pageSize, block.hash, this.name], args, false)
        )
    }
    StorageType.prototype.getPairs = function (block) {
        var args = []
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i]
        }
        return __awaiter(this, void 0, void 0, function () {
            var _a
            return __generator(this, function (_b) {
                ;(0, assert_1.default)(this.is(block))
                return [
                    2 /*return*/,
                    (_a = block._runtime).getStoragePairs.apply(
                        _a,
                        __spreadArray([block.hash, this.name], args, false)
                    ),
                ]
            })
        })
    }
    StorageType.prototype.getPairsPaged = function (pageSize, block) {
        var _a
        var args = []
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i]
        }
        ;(0, assert_1.default)(this.is(block))
        return (_a = block._runtime).getStoragePairsPaged.apply(
            _a,
            __spreadArray([pageSize, block.hash, this.name], args, false)
        )
    }
    StorageType.prototype.getDefault = function (block) {
        ;(0, assert_1.default)(this.modifier == 'Default')
        ;(0, assert_1.default)(this.is(block))
        return block._runtime.getStorageFallback(this.name)
    }
    return StorageType
})()
exports.StorageType = StorageType
