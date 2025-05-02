"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketplaceListingFilled = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var MarketplaceListingFilled = /** @class */ (function () {
    function MarketplaceListingFilled(props, json) {
        this.isTypeOf = 'MarketplaceListingFilled';
        Object.assign(this, props);
        if (json != null) {
            this._listing = marshal.string.fromJSON(json.listing);
            this._buyer = marshal.string.fromJSON(json.buyer);
            this._amountFilled = marshal.bigint.fromJSON(json.amountFilled);
            this._amountRemaining = marshal.bigint.fromJSON(json.amountRemaining);
            this._protocolFee = marshal.bigint.fromJSON(json.protocolFee);
            this._price = marshal.bigint.fromJSON(json.price);
            this._royalty = marshal.bigint.fromJSON(json.royalty);
        }
    }
    Object.defineProperty(MarketplaceListingFilled.prototype, "listing", {
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
    Object.defineProperty(MarketplaceListingFilled.prototype, "buyer", {
        get: function () {
            (0, assert_1.default)(this._buyer != null, 'uninitialized access');
            return this._buyer;
        },
        set: function (value) {
            this._buyer = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MarketplaceListingFilled.prototype, "amountFilled", {
        get: function () {
            (0, assert_1.default)(this._amountFilled != null, 'uninitialized access');
            return this._amountFilled;
        },
        set: function (value) {
            this._amountFilled = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MarketplaceListingFilled.prototype, "amountRemaining", {
        get: function () {
            (0, assert_1.default)(this._amountRemaining != null, 'uninitialized access');
            return this._amountRemaining;
        },
        set: function (value) {
            this._amountRemaining = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MarketplaceListingFilled.prototype, "protocolFee", {
        get: function () {
            (0, assert_1.default)(this._protocolFee != null, 'uninitialized access');
            return this._protocolFee;
        },
        set: function (value) {
            this._protocolFee = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MarketplaceListingFilled.prototype, "price", {
        get: function () {
            (0, assert_1.default)(this._price != null, 'uninitialized access');
            return this._price;
        },
        set: function (value) {
            this._price = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MarketplaceListingFilled.prototype, "royalty", {
        get: function () {
            (0, assert_1.default)(this._royalty != null, 'uninitialized access');
            return this._royalty;
        },
        set: function (value) {
            this._royalty = value;
        },
        enumerable: false,
        configurable: true
    });
    MarketplaceListingFilled.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            listing: this.listing,
            buyer: this.buyer,
            amountFilled: marshal.bigint.toJSON(this.amountFilled),
            amountRemaining: marshal.bigint.toJSON(this.amountRemaining),
            protocolFee: marshal.bigint.toJSON(this.protocolFee),
            price: marshal.bigint.toJSON(this.price),
            royalty: marshal.bigint.toJSON(this.royalty),
        };
    };
    return MarketplaceListingFilled;
}());
exports.MarketplaceListingFilled = MarketplaceListingFilled;
