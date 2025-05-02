"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketplaceListingCancelled = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var MarketplaceListingCancelled = /** @class */ (function () {
    function MarketplaceListingCancelled(props, json) {
        this.isTypeOf = 'MarketplaceListingCancelled';
        Object.assign(this, props);
        if (json != null) {
            this._listing = marshal.string.fromJSON(json.listing);
        }
    }
    Object.defineProperty(MarketplaceListingCancelled.prototype, "listing", {
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
    MarketplaceListingCancelled.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            listing: this.listing,
        };
    };
    return MarketplaceListingCancelled;
}());
exports.MarketplaceListingCancelled = MarketplaceListingCancelled;
