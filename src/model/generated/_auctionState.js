"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuctionState = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var _listingType_1 = require("./_listingType");
var AuctionState = /** @class */ (function () {
    function AuctionState(props, json) {
        this.isTypeOf = 'AuctionState';
        Object.assign(this, props);
        if (json != null) {
            this._listingType = marshal.enumFromJson(json.listingType, _listingType_1.ListingType);
            this._highBid = json.highBid == null ? undefined : marshal.string.fromJSON(json.highBid);
        }
    }
    Object.defineProperty(AuctionState.prototype, "listingType", {
        get: function () {
            (0, assert_1.default)(this._listingType != null, 'uninitialized access');
            return this._listingType;
        },
        set: function (value) {
            this._listingType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuctionState.prototype, "highBid", {
        get: function () {
            return this._highBid;
        },
        set: function (value) {
            this._highBid = value;
        },
        enumerable: false,
        configurable: true
    });
    AuctionState.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            listingType: this.listingType,
            highBid: this.highBid,
        };
    };
    return AuctionState;
}());
exports.AuctionState = AuctionState;
