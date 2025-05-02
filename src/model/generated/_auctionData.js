"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuctionData = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var _listingType_1 = require("./_listingType");
var AuctionData = /** @class */ (function () {
    function AuctionData(props, json) {
        this.isTypeOf = 'AuctionData';
        Object.assign(this, props);
        if (json != null) {
            this._listingType = marshal.enumFromJson(json.listingType, _listingType_1.ListingType);
            this._startHeight = marshal.int.fromJSON(json.startHeight);
            this._endHeight = marshal.int.fromJSON(json.endHeight);
        }
    }
    Object.defineProperty(AuctionData.prototype, "listingType", {
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
    Object.defineProperty(AuctionData.prototype, "startHeight", {
        get: function () {
            (0, assert_1.default)(this._startHeight != null, 'uninitialized access');
            return this._startHeight;
        },
        set: function (value) {
            this._startHeight = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuctionData.prototype, "endHeight", {
        get: function () {
            (0, assert_1.default)(this._endHeight != null, 'uninitialized access');
            return this._endHeight;
        },
        set: function (value) {
            this._endHeight = value;
        },
        enumerable: false,
        configurable: true
    });
    AuctionData.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            listingType: this.listingType,
            startHeight: this.startHeight,
            endHeight: this.endHeight,
        };
    };
    return AuctionData;
}());
exports.AuctionData = AuctionData;
