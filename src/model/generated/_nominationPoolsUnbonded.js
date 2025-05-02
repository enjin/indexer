"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NominationPoolsUnbonded = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var NominationPoolsUnbonded = /** @class */ (function () {
    function NominationPoolsUnbonded(props, json) {
        this.isTypeOf = 'NominationPoolsUnbonded';
        Object.assign(this, props);
        if (json != null) {
            this._account = marshal.string.fromJSON(json.account);
            this._unbondingPoints = marshal.bigint.fromJSON(json.unbondingPoints);
            this._balance = marshal.bigint.fromJSON(json.balance);
            this._pool = marshal.string.fromJSON(json.pool);
            this._era = marshal.int.fromJSON(json.era);
        }
    }
    Object.defineProperty(NominationPoolsUnbonded.prototype, "account", {
        get: function () {
            (0, assert_1.default)(this._account != null, 'uninitialized access');
            return this._account;
        },
        set: function (value) {
            this._account = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NominationPoolsUnbonded.prototype, "unbondingPoints", {
        get: function () {
            (0, assert_1.default)(this._unbondingPoints != null, 'uninitialized access');
            return this._unbondingPoints;
        },
        set: function (value) {
            this._unbondingPoints = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NominationPoolsUnbonded.prototype, "balance", {
        get: function () {
            (0, assert_1.default)(this._balance != null, 'uninitialized access');
            return this._balance;
        },
        set: function (value) {
            this._balance = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NominationPoolsUnbonded.prototype, "pool", {
        get: function () {
            (0, assert_1.default)(this._pool != null, 'uninitialized access');
            return this._pool;
        },
        set: function (value) {
            this._pool = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NominationPoolsUnbonded.prototype, "era", {
        get: function () {
            (0, assert_1.default)(this._era != null, 'uninitialized access');
            return this._era;
        },
        set: function (value) {
            this._era = value;
        },
        enumerable: false,
        configurable: true
    });
    NominationPoolsUnbonded.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            account: this.account,
            unbondingPoints: marshal.bigint.toJSON(this.unbondingPoints),
            balance: marshal.bigint.toJSON(this.balance),
            pool: this.pool,
            era: this.era,
        };
    };
    return NominationPoolsUnbonded;
}());
exports.NominationPoolsUnbonded = NominationPoolsUnbonded;
