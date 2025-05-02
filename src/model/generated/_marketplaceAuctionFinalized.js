"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketplaceAuctionFinalized = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var MarketplaceAuctionFinalized = /** @class */ (function () {
    function MarketplaceAuctionFinalized(props, json) {
        this.isTypeOf = 'MarketplaceAuctionFinalized';
        Object.assign(this, props);
        if (json != null) {
            this._listing = marshal.string.fromJSON(json.listing);
            this._winningBid = json.winningBid == null ? undefined : marshal.string.fromJSON(json.winningBid);
            this._protocolFee = marshal.bigint.fromJSON(json.protocolFee);
            this._royalty = marshal.bigint.fromJSON(json.royalty);
        }
    }
    Object.defineProperty(MarketplaceAuctionFinalized.prototype, "listing", {
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
    Object.defineProperty(MarketplaceAuctionFinalized.prototype, "winningBid", {
        get: function () {
            return this._winningBid;
        },
        set: function (value) {
            this._winningBid = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MarketplaceAuctionFinalized.prototype, "protocolFee", {
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
    Object.defineProperty(MarketplaceAuctionFinalized.prototype, "royalty", {
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
    MarketplaceAuctionFinalized.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            listing: this.listing,
            winningBid: this.winningBid,
            protocolFee: marshal.bigint.toJSON(this.protocolFee),
            royalty: marshal.bigint.toJSON(this.royalty),
        };
    };
    return MarketplaceAuctionFinalized;
}());
exports.MarketplaceAuctionFinalized = MarketplaceAuctionFinalized;
