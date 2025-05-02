"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketplaceOfferCancelled = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var MarketplaceOfferCancelled = /** @class */ (function () {
    function MarketplaceOfferCancelled(props, json) {
        this.isTypeOf = 'MarketplaceOfferCancelled';
        Object.assign(this, props);
        if (json != null) {
            this._listing = marshal.string.fromJSON(json.listing);
        }
    }
    Object.defineProperty(MarketplaceOfferCancelled.prototype, "listing", {
        get: function () {
            (0, assert_1.default)(this._listing != null, 'uninitialized access');
            return this._listing;
        },
        set: function (value) {
            this._listing = value;
        },
        enumerable: false,
        configurable: true
    });
    MarketplaceOfferCancelled.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            listing: this.listing,
        };
    };
    return MarketplaceOfferCancelled;
}());
exports.MarketplaceOfferCancelled = MarketplaceOfferCancelled;
