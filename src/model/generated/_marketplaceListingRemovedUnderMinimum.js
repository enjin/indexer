"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketplaceListingRemovedUnderMinimum = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var MarketplaceListingRemovedUnderMinimum = /** @class */ (function () {
    function MarketplaceListingRemovedUnderMinimum(props, json) {
        this.isTypeOf = 'MarketplaceListingRemovedUnderMinimum';
        Object.assign(this, props);
        if (json != null) {
            this._listing = marshal.string.fromJSON(json.listing);
        }
    }
    Object.defineProperty(MarketplaceListingRemovedUnderMinimum.prototype, "listing", {
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
    MarketplaceListingRemovedUnderMinimum.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            listing: this.listing,
        };
    };
    return MarketplaceListingRemovedUnderMinimum;
}());
exports.MarketplaceListingRemovedUnderMinimum = MarketplaceListingRemovedUnderMinimum;
