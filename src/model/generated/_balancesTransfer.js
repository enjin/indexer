"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalancesTransfer = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var BalancesTransfer = /** @class */ (function () {
    function BalancesTransfer(props, json) {
        this.isTypeOf = 'BalancesTransfer';
        Object.assign(this, props);
        if (json != null) {
            this._from = marshal.string.fromJSON(json.from);
            this._to = marshal.string.fromJSON(json.to);
            this._amount = marshal.bigint.fromJSON(json.amount);
        }
    }
    Object.defineProperty(BalancesTransfer.prototype, "from", {
        get: function () {
            (0, assert_1.default)(this._from != null, 'uninitialized access');
            return this._from;
        },
        set: function (value) {
            this._from = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BalancesTransfer.prototype, "to", {
        get: function () {
            (0, assert_1.default)(this._to != null, 'uninitialized access');
            return this._to;
        },
        set: function (value) {
            this._to = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BalancesTransfer.prototype, "amount", {
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
    BalancesTransfer.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            from: this.from,
            to: this.to,
            amount: marshal.bigint.toJSON(this.amount),
        };
    };
    return BalancesTransfer;
}());
exports.BalancesTransfer = BalancesTransfer;
