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
Object.defineProperty(exports, '__esModule', { value: true })
exports.DataService = void 0
var contexts_1 = require('../contexts')
var model_1 = require('../model')
var DataService = /** @class */ (function () {
    function DataService() {
        this._isInitialized = false
    }
    DataService.getInstance = function () {
        if (!DataService.instance) {
            DataService.instance = new DataService()
        }
        return DataService.instance
    }
    DataService.prototype.initialize = function () {
        return __awaiter(this, void 0, void 0, function () {
            var em, config
            var _a
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this._isInitialized) return [2 /*return*/]
                        return [4 /*yield*/, (0, contexts_1.connectionManager)()]
                    case 1:
                        em = _b.sent()
                        return [
                            4 /*yield*/,
                            em.getRepository(model_1.Config).createQueryBuilder('config').where({ id: '0' }).getOne(),
                        ]
                    case 2:
                        config = _b.sent()
                        this._stateBlock =
                            (_a = config === null || config === void 0 ? void 0 : config.stateBlock) !== null &&
                            _a !== void 0
                                ? _a
                                : 0
                        this._isInitialized = true
                        return [2 /*return*/]
                }
            })
        })
    }
    DataService.prototype.dropAllTables = function () {
        return __awaiter(this, void 0, void 0, function () {
            var con, tablesQuery, tables, _i, tables_1, table, dropStatement
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        return [
                            4 /*yield*/,
                            (0, contexts_1.connectionManager)(),
                            // Get all tables from all schemas (excluding system schemas)
                        ]
                    case 1:
                        con = _a.sent()
                        tablesQuery =
                            "\n            SELECT schemaname, tablename \n            FROM pg_tables \n            WHERE schemaname NOT IN ('pg_catalog', 'information_schema', 'pg_toast')\n            ORDER BY schemaname, tablename\n        "
                        return [4 /*yield*/, con.query(tablesQuery)]
                    case 2:
                        tables = _a.sent()
                        if (tables.length === 0) {
                            console.log('No tables found to drop')
                            return [2 /*return*/]
                        }
                        // Disable foreign key checks temporarily
                        return [4 /*yield*/, con.query('SET session_replication_role = replica;')]
                    case 3:
                        // Disable foreign key checks temporarily
                        _a.sent()
                        _a.label = 4
                    case 4:
                        _a.trys.push([4, , 9, 11])
                        ;(_i = 0), (tables_1 = tables)
                        _a.label = 5
                    case 5:
                        if (!(_i < tables_1.length)) return [3 /*break*/, 8]
                        table = tables_1[_i]
                        dropStatement = 'DROP TABLE IF EXISTS "'
                            .concat(table.schemaname, '"."')
                            .concat(table.tablename, '" CASCADE')
                        return [4 /*yield*/, con.query(dropStatement)]
                    case 6:
                        _a.sent()
                        console.log('Dropped table: '.concat(table.schemaname, '.').concat(table.tablename))
                        _a.label = 7
                    case 7:
                        _i++
                        return [3 /*break*/, 5]
                    case 8:
                        console.log('Successfully dropped '.concat(tables.length, ' tables'))
                        return [3 /*break*/, 11]
                    case 9:
                        // Re-enable foreign key checks
                        return [4 /*yield*/, con.query('SET session_replication_role = DEFAULT;')]
                    case 10:
                        // Re-enable foreign key checks
                        _a.sent()
                        return [7 /*endfinally*/]
                    case 11:
                        return [2 /*return*/]
                }
            })
        })
    }
    DataService.prototype.setLastBlockNumber = function (blockNumber) {
        return __awaiter(this, void 0, void 0, function () {
            var em
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        return [4 /*yield*/, (0, contexts_1.connectionManager)()]
                    case 1:
                        em = _a.sent()
                        return [
                            4 /*yield*/,
                            em
                                .getRepository(model_1.Config)
                                .createQueryBuilder('config')
                                .insert()
                                .values({ id: '0', stateBlock: blockNumber })
                                .execute(),
                        ]
                    case 2:
                        _a.sent()
                        this._stateBlock = blockNumber
                        return [2 /*return*/]
                }
            })
        })
    }
    Object.defineProperty(DataService.prototype, 'lastBlockNumber', {
        get: function () {
            var _a
            if (!this._isInitialized) {
                throw new Error('DataService not initialized')
            }
            return (_a = this._stateBlock) !== null && _a !== void 0 ? _a : 0
        },
        enumerable: false,
        configurable: true,
    })
    return DataService
})()
exports.DataService = DataService
