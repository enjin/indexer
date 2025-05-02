"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketplaceOfferCreated = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var MarketplaceOfferCreated = /** @class */ (function () {
    function MarketplaceOfferCreated(props, json) {
        this.isTypeOf = 'MarketplaceOfferCreated';
        Object.assign(this, props);
        if (json != null) {
            this._listing = marshal.string.fromJSON(json.listing);
        }
    }
    Object.defineProperty(MarketplaceOfferCreated.prototype, "listing", {
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
    MarketplaceOfferCreated.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            listing: this.listing,
        };
    };
    return MarketplaceOfferCreated;
}());
exports.MarketplaceOfferCreated = MarketplaceOfferCreated;
