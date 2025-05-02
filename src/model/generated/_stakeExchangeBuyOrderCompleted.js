"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StakeExchangeBuyOrderCompleted = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var StakeExchangeBuyOrderCompleted = /** @class */ (function () {
    function StakeExchangeBuyOrderCompleted(props, json) {
        this.isTypeOf = 'StakeExchangeBuyOrderCompleted';
        Object.assign(this, props);
        if (json != null) {
            this._offerId = marshal.bigint.fromJSON(json.offerId);
            this._account = marshal.string.fromJSON(json.account);
            this._tokenId = marshal.bigint.fromJSON(json.tokenId);
            this._amount = marshal.bigint.fromJSON(json.amount);
            this._rate = marshal.bigint.fromJSON(json.rate);
            this._points = marshal.bigint.fromJSON(json.points);
        }
    }
    Object.defineProperty(StakeExchangeBuyOrderCompleted.prototype, "offerId", {
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
    Object.defineProperty(StakeExchangeBuyOrderCompleted.prototype, "account", {
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
    Object.defineProperty(StakeExchangeBuyOrderCompleted.prototype, "tokenId", {
        get: function () {
            (0, assert_1.default)(this._tokenId != null, 'uninitialized access');
            return this._tokenId;
        },
        set: function (value) {
            this._tokenId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StakeExchangeBuyOrderCompleted.prototype, "amount", {
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
    Object.defineProperty(StakeExchangeBuyOrderCompleted.prototype, "rate", {
        get: function () {
            (0, assert_1.default)(this._rate != null, 'uninitialized access');
            return this._rate;
        },
        set: function (value) {
            this._rate = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StakeExchangeBuyOrderCompleted.prototype, "points", {
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
    StakeExchangeBuyOrderCompleted.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            offerId: marshal.bigint.toJSON(this.offerId),
            account: this.account,
            tokenId: marshal.bigint.toJSON(this.tokenId),
            amount: marshal.bigint.toJSON(this.amount),
            rate: marshal.bigint.toJSON(this.rate),
            points: marshal.bigint.toJSON(this.points),
        };
    };
    return StakeExchangeBuyOrderCompleted;
}());
exports.StakeExchangeBuyOrderCompleted = StakeExchangeBuyOrderCompleted;
