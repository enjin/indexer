"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketplaceCounterOfferPlaced = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var MarketplaceCounterOfferPlaced = /** @class */ (function () {
    function MarketplaceCounterOfferPlaced(props, json) {
        this.isTypeOf = 'MarketplaceCounterOfferPlaced';
        Object.assign(this, props);
        if (json != null) {
            this._listing = marshal.string.fromJSON(json.listing);
            this._accountId = marshal.string.fromJSON(json.accountId);
            this._buyerPrice = json.buyerPrice == null ? undefined : marshal.bigint.fromJSON(json.buyerPrice);
            this._sellerPrice = marshal.bigint.fromJSON(json.sellerPrice);
            this._depositAmount = marshal.bigint.fromJSON(json.depositAmount);
        }
    }
    Object.defineProperty(MarketplaceCounterOfferPlaced.prototype, "listing", {
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
    Object.defineProperty(MarketplaceCounterOfferPlaced.prototype, "accountId", {
        get: function () {
            (0, assert_1.default)(this._accountId != null, 'uninitialized access');
            return this._accountId;
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MarketplaceCounterOfferPlaced.prototype, "buyerPrice", {
        get: function () {
            return this._buyerPrice;
        },
        set: function (value) {
            this._buyerPrice = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MarketplaceCounterOfferPlaced.prototype, "sellerPrice", {
        get: function () {
            (0, assert_1.default)(this._sellerPrice != null, 'uninitialized access');
            return this._sellerPrice;
        },
        set: function (value) {
            this._sellerPrice = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MarketplaceCounterOfferPlaced.prototype, "depositAmount", {
        get: function () {
            (0, assert_1.default)(this._depositAmount != null, 'uninitialized access');
            return this._depositAmount;
        },
        set: function (value) {
            this._depositAmount = value;
        },
        enumerable: false,
        configurable: true
    });
    MarketplaceCounterOfferPlaced.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            listing: this.listing,
            accountId: this.accountId,
            buyerPrice: this.buyerPrice == null ? undefined : marshal.bigint.toJSON(this.buyerPrice),
            sellerPrice: marshal.bigint.toJSON(this.sellerPrice),
            depositAmount: marshal.bigint.toJSON(this.depositAmount),
        };
    };
    return MarketplaceCounterOfferPlaced;
}());
exports.MarketplaceCounterOfferPlaced = MarketplaceCounterOfferPlaced;
