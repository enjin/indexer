"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NominationPoolsBonded = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var NominationPoolsBonded = /** @class */ (function () {
    function NominationPoolsBonded(props, json) {
        this.isTypeOf = 'NominationPoolsBonded';
        Object.assign(this, props);
        if (json != null) {
            this._pool = marshal.string.fromJSON(json.pool);
            this._account = marshal.string.fromJSON(json.account);
            this._bonded = marshal.bigint.fromJSON(json.bonded);
        }
    }
    Object.defineProperty(NominationPoolsBonded.prototype, "pool", {
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
    Object.defineProperty(NominationPoolsBonded.prototype, "account", {
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
    Object.defineProperty(NominationPoolsBonded.prototype, "bonded", {
        get: function () {
            (0, assert_1.default)(this._bonded != null, 'uninitialized access');
            return this._bonded;
        },
        set: function (value) {
            this._bonded = value;
        },
        enumerable: false,
        configurable: true
    });
    NominationPoolsBonded.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            pool: this.pool,
            account: this.account,
            bonded: marshal.bigint.toJSON(this.bonded),
        };
    };
    return NominationPoolsBonded;
}());
exports.NominationPoolsBonded = NominationPoolsBonded;
