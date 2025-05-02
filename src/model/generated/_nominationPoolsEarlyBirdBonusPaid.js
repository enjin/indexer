"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NominationPoolsEarlyBirdBonusPaid = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var NominationPoolsEarlyBirdBonusPaid = /** @class */ (function () {
    function NominationPoolsEarlyBirdBonusPaid(props, json) {
        this.isTypeOf = 'NominationPoolsEarlyBirdBonusPaid';
        Object.assign(this, props);
        if (json != null) {
            this._pool = marshal.string.fromJSON(json.pool);
            this._paymentId = marshal.int.fromJSON(json.paymentId);
            this._totalAccounts = marshal.int.fromJSON(json.totalAccounts);
        }
    }
    Object.defineProperty(NominationPoolsEarlyBirdBonusPaid.prototype, "pool", {
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
    Object.defineProperty(NominationPoolsEarlyBirdBonusPaid.prototype, "paymentId", {
        get: function () {
            (0, assert_1.default)(this._paymentId != null, 'uninitialized access');
            return this._paymentId;
        },
        set: function (value) {
            this._paymentId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NominationPoolsEarlyBirdBonusPaid.prototype, "totalAccounts", {
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
    NominationPoolsEarlyBirdBonusPaid.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            pool: this.pool,
            paymentId: this.paymentId,
            totalAccounts: this.totalAccounts,
        };
    };
    return NominationPoolsEarlyBirdBonusPaid;
}());
exports.NominationPoolsEarlyBirdBonusPaid = NominationPoolsEarlyBirdBonusPaid;
