"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketplaceCounterOfferRemoved = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var MarketplaceCounterOfferRemoved = /** @class */ (function () {
    function MarketplaceCounterOfferRemoved(props, json) {
        this.isTypeOf = 'MarketplaceCounterOfferRemoved';
        Object.assign(this, props);
        if (json != null) {
            this._listing = marshal.string.fromJSON(json.listing);
            this._creator = marshal.string.fromJSON(json.creator);
        }
    }
    Object.defineProperty(MarketplaceCounterOfferRemoved.prototype, "listing", {
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
    Object.defineProperty(MarketplaceCounterOfferRemoved.prototype, "creator", {
        get: function () {
            (0, assert_1.default)(this._creator != null, 'uninitialized access');
            return this._creator;
        },
        set: function (value) {
            this._creator = value;
        },
        enumerable: false,
        configurable: true
    });
    MarketplaceCounterOfferRemoved.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            listing: this.listing,
            creator: this.creator,
        };
    };
    return MarketplaceCounterOfferRemoved;
}());
exports.MarketplaceCounterOfferRemoved = MarketplaceCounterOfferRemoved;
