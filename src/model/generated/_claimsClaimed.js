"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClaimsClaimed = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var ClaimsClaimed = /** @class */ (function () {
    function ClaimsClaimed(props, json) {
        this.isTypeOf = 'ClaimsClaimed';
        Object.assign(this, props);
        if (json != null) {
            this._account = marshal.string.fromJSON(json.account);
            this._ethAccount = json.ethAccount == null ? undefined : marshal.string.fromJSON(json.ethAccount);
            this._efiSum = marshal.bigint.fromJSON(json.efiSum);
            this._enjSum = marshal.bigint.fromJSON(json.enjSum);
            this._efiBurned = marshal.bigint.fromJSON(json.efiBurned);
            this._amount = marshal.bigint.fromJSON(json.amount);
        }
    }
    Object.defineProperty(ClaimsClaimed.prototype, "account", {
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
    Object.defineProperty(ClaimsClaimed.prototype, "ethAccount", {
        get: function () {
            return this._ethAccount;
        },
        set: function (value) {
            this._ethAccount = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClaimsClaimed.prototype, "efiSum", {
        get: function () {
            (0, assert_1.default)(this._efiSum != null, 'uninitialized access');
            return this._efiSum;
        },
        set: function (value) {
            this._efiSum = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClaimsClaimed.prototype, "enjSum", {
        get: function () {
            (0, assert_1.default)(this._enjSum != null, 'uninitialized access');
            return this._enjSum;
        },
        set: function (value) {
            this._enjSum = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClaimsClaimed.prototype, "efiBurned", {
        get: function () {
            (0, assert_1.default)(this._efiBurned != null, 'uninitialized access');
            return this._efiBurned;
        },
        set: function (value) {
            this._efiBurned = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClaimsClaimed.prototype, "amount", {
        get: function () {
            (0, assert_1.default)(this._amount != null, 'uninitialized access');
            return this._amount;
        },
        set: function (value) {
            this._amount = value;
        },
        enumerable: false,
        configurable: true
    });
    ClaimsClaimed.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            account: this.account,
            ethAccount: this.ethAccount,
            efiSum: marshal.bigint.toJSON(this.efiSum),
            enjSum: marshal.bigint.toJSON(this.enjSum),
            efiBurned: marshal.bigint.toJSON(this.efiBurned),
            amount: marshal.bigint.toJSON(this.amount),
        };
    };
    return ClaimsClaimed;
}());
exports.ClaimsClaimed = ClaimsClaimed;
