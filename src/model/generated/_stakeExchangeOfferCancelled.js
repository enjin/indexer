"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StakeExchangeOfferCancelled = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var StakeExchangeOfferCancelled = /** @class */ (function () {
    function StakeExchangeOfferCancelled(props, json) {
        this.isTypeOf = 'StakeExchangeOfferCancelled';
        Object.assign(this, props);
        if (json != null) {
            this._offerId = marshal.bigint.fromJSON(json.offerId);
        }
    }
    Object.defineProperty(StakeExchangeOfferCancelled.prototype, "offerId", {
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
    StakeExchangeOfferCancelled.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            offerId: marshal.bigint.toJSON(this.offerId),
        };
    };
    return StakeExchangeOfferCancelled;
}());
exports.StakeExchangeOfferCancelled = StakeExchangeOfferCancelled;
