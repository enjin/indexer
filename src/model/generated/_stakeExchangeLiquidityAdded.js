"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StakeExchangeLiquidityAdded = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var StakeExchangeLiquidityAdded = /** @class */ (function () {
    function StakeExchangeLiquidityAdded(props, json) {
        this.isTypeOf = 'StakeExchangeLiquidityAdded';
        Object.assign(this, props);
        if (json != null) {
            this._offerId = marshal.bigint.fromJSON(json.offerId);
            this._account = marshal.string.fromJSON(json.account);
            this._amount = marshal.bigint.fromJSON(json.amount);
        }
    }
    Object.defineProperty(StakeExchangeLiquidityAdded.prototype, "offerId", {
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
    Object.defineProperty(StakeExchangeLiquidityAdded.prototype, "account", {
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
    Object.defineProperty(StakeExchangeLiquidityAdded.prototype, "amount", {
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
    StakeExchangeLiquidityAdded.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            offerId: marshal.bigint.toJSON(this.offerId),
            account: this.account,
            amount: marshal.bigint.toJSON(this.amount),
        };
    };
    return StakeExchangeLiquidityAdded;
}());
exports.StakeExchangeLiquidityAdded = StakeExchangeLiquidityAdded;
