"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketplaceOfferSettled = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var MarketplaceOfferSettled = /** @class */ (function () {
    function MarketplaceOfferSettled(props, json) {
        this.isTypeOf = 'MarketplaceOfferSettled';
        Object.assign(this, props);
        if (json != null) {
            this._listing = marshal.string.fromJSON(json.listing);
            this._buyer = marshal.string.fromJSON(json.buyer);
            this._amount = json.amount == null ? undefined : marshal.bigint.fromJSON(json.amount);
            this._price = marshal.bigint.fromJSON(json.price);
        }
    }
    Object.defineProperty(MarketplaceOfferSettled.prototype, "listing", {
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
    Object.defineProperty(MarketplaceOfferSettled.prototype, "buyer", {
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
    Object.defineProperty(MarketplaceOfferSettled.prototype, "amount", {
        get: function () {
            return this._amount;
        },
        set: function (value) {
            this._amount = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MarketplaceOfferSettled.prototype, "price", {
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
    MarketplaceOfferSettled.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            listing: this.listing,
            buyer: this.buyer,
            amount: this.amount == null ? undefined : marshal.bigint.toJSON(this.amount),
            price: marshal.bigint.toJSON(this.price),
        };
    };
    return MarketplaceOfferSettled;
}());
exports.MarketplaceOfferSettled = MarketplaceOfferSettled;
