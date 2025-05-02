"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeleportBalanceWithdrawn = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var TeleportBalanceWithdrawn = /** @class */ (function () {
    function TeleportBalanceWithdrawn(props, json) {
        this.isTypeOf = 'TeleportBalanceWithdrawn';
        Object.assign(this, props);
        if (json != null) {
            this._beneficiary = marshal.string.fromJSON(json.beneficiary);
            this._amount = marshal.bigint.fromJSON(json.amount);
            this._account = marshal.string.fromJSON(json.account);
            this._destination = marshal.string.fromJSON(json.destination);
        }
    }
    Object.defineProperty(TeleportBalanceWithdrawn.prototype, "beneficiary", {
        get: function () {
            (0, assert_1.default)(this._beneficiary != null, 'uninitialized access');
            return this._beneficiary;
        },
        set: function (value) {
            this._beneficiary = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TeleportBalanceWithdrawn.prototype, "amount", {
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
    Object.defineProperty(TeleportBalanceWithdrawn.prototype, "account", {
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
    Object.defineProperty(TeleportBalanceWithdrawn.prototype, "destination", {
        get: function () {
            (0, assert_1.default)(this._destination != null, 'uninitialized access');
            return this._destination;
        },
        set: function (value) {
            this._destination = value;
        },
        enumerable: false,
        configurable: true
    });
    TeleportBalanceWithdrawn.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            beneficiary: this.beneficiary,
            amount: marshal.bigint.toJSON(this.amount),
            account: this.account,
            destination: this.destination,
        };
    };
    return TeleportBalanceWithdrawn;
}());
exports.TeleportBalanceWithdrawn = TeleportBalanceWithdrawn;
