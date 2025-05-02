"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NominationPoolsEarlyBirdSharesCaptured = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var NominationPoolsEarlyBirdSharesCaptured = /** @class */ (function () {
    function NominationPoolsEarlyBirdSharesCaptured(props, json) {
        this.isTypeOf = 'NominationPoolsEarlyBirdSharesCaptured';
        Object.assign(this, props);
        if (json != null) {
            this._pool = marshal.string.fromJSON(json.pool);
            this._totalAccounts = marshal.int.fromJSON(json.totalAccounts);
        }
    }
    Object.defineProperty(NominationPoolsEarlyBirdSharesCaptured.prototype, "pool", {
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
    Object.defineProperty(NominationPoolsEarlyBirdSharesCaptured.prototype, "totalAccounts", {
        get: function () {
            (0, assert_1.default)(this._totalAccounts != null, 'uninitialized access');
            return this._totalAccounts;
        },
        set: function (value) {
            this._totalAccounts = value;
        },
        enumerable: false,
        configurable: true
    });
    NominationPoolsEarlyBirdSharesCaptured.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            pool: this.pool,
            totalAccounts: this.totalAccounts,
        };
    };
    return NominationPoolsEarlyBirdSharesCaptured;
}());
exports.NominationPoolsEarlyBirdSharesCaptured = NominationPoolsEarlyBirdSharesCaptured;
