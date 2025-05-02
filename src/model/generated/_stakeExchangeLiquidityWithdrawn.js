"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StakeExchangeLiquidityWithdrawn = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var StakeExchangeLiquidityWithdrawn = /** @class */ (function () {
    function StakeExchangeLiquidityWithdrawn(props, json) {
        this.isTypeOf = 'StakeExchangeLiquidityWithdrawn';
        Object.assign(this, props);
        if (json != null) {
            this._offerId = marshal.bigint.fromJSON(json.offerId);
            this._account = marshal.string.fromJSON(json.account);
            this._amount = marshal.bigint.fromJSON(json.amount);
        }
    }
    Object.defineProperty(StakeExchangeLiquidityWithdrawn.prototype, "offerId", {
        get: function () {
            (0, assert_1.default)(this._offerId != null, 'uninitialized access');
            return this._offerId;
        },
        set: function (value) {
            this._offerId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StakeExchangeLiquidityWithdrawn.prototype, "account", {
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
    Object.defineProperty(StakeExchangeLiquidityWithdrawn.prototype, "amount", {
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
    StakeExchangeLiquidityWithdrawn.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            offerId: marshal.bigint.toJSON(this.offerId),
            account: this.account,
            amount: marshal.bigint.toJSON(this.amount),
        };
    };
    return StakeExchangeLiquidityWithdrawn;
}());
exports.StakeExchangeLiquidityWithdrawn = StakeExchangeLiquidityWithdrawn;
