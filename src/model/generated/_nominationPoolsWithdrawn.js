"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NominationPoolsWithdrawn = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var NominationPoolsWithdrawn = /** @class */ (function () {
    function NominationPoolsWithdrawn(props, json) {
        this.isTypeOf = 'NominationPoolsWithdrawn';
        Object.assign(this, props);
        if (json != null) {
            this._account = marshal.string.fromJSON(json.account);
            this._balance = marshal.bigint.fromJSON(json.balance);
            this._points = marshal.bigint.fromJSON(json.points);
            this._numSlashingSpans = json.numSlashingSpans == null ? undefined : marshal.int.fromJSON(json.numSlashingSpans);
            this._pool = marshal.string.fromJSON(json.pool);
        }
    }
    Object.defineProperty(NominationPoolsWithdrawn.prototype, "account", {
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
    Object.defineProperty(NominationPoolsWithdrawn.prototype, "balance", {
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
    Object.defineProperty(NominationPoolsWithdrawn.prototype, "points", {
        get: function () {
            (0, assert_1.default)(this._points != null, 'uninitialized access');
            return this._points;
        },
        set: function (value) {
            this._points = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NominationPoolsWithdrawn.prototype, "numSlashingSpans", {
        get: function () {
            return this._numSlashingSpans;
        },
        set: function (value) {
            this._numSlashingSpans = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NominationPoolsWithdrawn.prototype, "pool", {
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
    NominationPoolsWithdrawn.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            account: this.account,
            balance: marshal.bigint.toJSON(this.balance),
            points: marshal.bigint.toJSON(this.points),
            numSlashingSpans: this.numSlashingSpans,
            pool: this.pool,
        };
    };
    return NominationPoolsWithdrawn;
}());
exports.NominationPoolsWithdrawn = NominationPoolsWithdrawn;
