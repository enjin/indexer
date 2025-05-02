"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketplaceBidPlaced = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var MarketplaceBidPlaced = /** @class */ (function () {
    function MarketplaceBidPlaced(props, json) {
        this.isTypeOf = 'MarketplaceBidPlaced';
        Object.assign(this, props);
        if (json != null) {
            this._listing = marshal.string.fromJSON(json.listing);
            this._bid = marshal.string.fromJSON(json.bid);
        }
    }
    Object.defineProperty(MarketplaceBidPlaced.prototype, "listing", {
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
    Object.defineProperty(MarketplaceBidPlaced.prototype, "bid", {
        get: function () {
            (0, assert_1.default)(this._bid != null, 'uninitialized access');
            return this._bid;
        },
        set: function (value) {
            this._bid = value;
        },
        enumerable: false,
        configurable: true
    });
    MarketplaceBidPlaced.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            listing: this.listing,
            bid: this.bid,
        };
    };
    return MarketplaceBidPlaced;
}());
exports.MarketplaceBidPlaced = MarketplaceBidPlaced;
