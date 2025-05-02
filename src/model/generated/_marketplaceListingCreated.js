"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketplaceListingCreated = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var MarketplaceListingCreated = /** @class */ (function () {
    function MarketplaceListingCreated(props, json) {
        this.isTypeOf = 'MarketplaceListingCreated';
        Object.assign(this, props);
        if (json != null) {
            this._listing = marshal.string.fromJSON(json.listing);
        }
    }
    Object.defineProperty(MarketplaceListingCreated.prototype, "listing", {
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
    MarketplaceListingCreated.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            listing: this.listing,
        };
    };
    return MarketplaceListingCreated;
}());
exports.MarketplaceListingCreated = MarketplaceListingCreated;
