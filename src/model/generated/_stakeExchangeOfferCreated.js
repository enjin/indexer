"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StakeExchangeOfferCreated = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var StakeExchangeOfferCreated = /** @class */ (function () {
    function StakeExchangeOfferCreated(props, json) {
        this.isTypeOf = 'StakeExchangeOfferCreated';
        Object.assign(this, props);
        if (json != null) {
            this._offerId = marshal.bigint.fromJSON(json.offerId);
            this._account = marshal.string.fromJSON(json.account);
            this._total = marshal.bigint.fromJSON(json.total);
            this._rate = marshal.bigint.fromJSON(json.rate);
            this._minAverageCommission = marshal.int.fromJSON(json.minAverageCommission);
            this._minAverageRewardRate = marshal.bigint.fromJSON(json.minAverageRewardRate);
        }
    }
    Object.defineProperty(StakeExchangeOfferCreated.prototype, "offerId", {
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
    Object.defineProperty(StakeExchangeOfferCreated.prototype, "account", {
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
    Object.defineProperty(StakeExchangeOfferCreated.prototype, "total", {
        get: function () {
            (0, assert_1.default)(this._total != null, 'uninitialized access');
            return this._total;
        },
        set: function (value) {
            this._total = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StakeExchangeOfferCreated.prototype, "rate", {
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
    Object.defineProperty(StakeExchangeOfferCreated.prototype, "minAverageCommission", {
        get: function () {
            (0, assert_1.default)(this._minAverageCommission != null, 'uninitialized access');
            return this._minAverageCommission;
        },
        set: function (value) {
            this._minAverageCommission = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StakeExchangeOfferCreated.prototype, "minAverageRewardRate", {
        get: function () {
            (0, assert_1.default)(this._minAverageRewardRate != null, 'uninitialized access');
            return this._minAverageRewardRate;
        },
        set: function (value) {
            this._minAverageRewardRate = value;
        },
        enumerable: false,
        configurable: true
    });
    StakeExchangeOfferCreated.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            offerId: marshal.bigint.toJSON(this.offerId),
            account: this.account,
            total: marshal.bigint.toJSON(this.total),
            rate: marshal.bigint.toJSON(this.rate),
            minAverageCommission: this.minAverageCommission,
            minAverageRewardRate: marshal.bigint.toJSON(this.minAverageRewardRate),
        };
    };
    return StakeExchangeOfferCreated;
}());
exports.StakeExchangeOfferCreated = StakeExchangeOfferCreated;
