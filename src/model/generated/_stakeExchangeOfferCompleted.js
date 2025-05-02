"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StakeExchangeOfferCompleted = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var StakeExchangeOfferCompleted = /** @class */ (function () {
    function StakeExchangeOfferCompleted(props, json) {
        this.isTypeOf = 'StakeExchangeOfferCompleted';
        Object.assign(this, props);
        if (json != null) {
            this._offerId = marshal.bigint.fromJSON(json.offerId);
        }
    }
    Object.defineProperty(StakeExchangeOfferCompleted.prototype, "offerId", {
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
    StakeExchangeOfferCompleted.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            offerId: marshal.bigint.toJSON(this.offerId),
        };
    };
    return StakeExchangeOfferCompleted;
}());
exports.StakeExchangeOfferCompleted = StakeExchangeOfferCompleted;
