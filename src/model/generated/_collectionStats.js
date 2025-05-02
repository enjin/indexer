"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionStats = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var CollectionStats = /** @class */ (function () {
    function CollectionStats(props, json) {
        Object.assign(this, props);
        if (json != null) {
            this._floorPrice = json.floorPrice == null ? undefined : marshal.bigint.fromJSON(json.floorPrice);
            this._lastSale = json.lastSale == null ? undefined : marshal.bigint.fromJSON(json.lastSale);
            this._highestSale = json.highestSale == null ? undefined : marshal.bigint.fromJSON(json.highestSale);
            this._supply = json.supply == null ? undefined : marshal.bigint.fromJSON(json.supply);
            this._tokenCount = marshal.int.fromJSON(json.tokenCount);
            this._salesCount = marshal.int.fromJSON(json.salesCount);
            this._marketCap = marshal.bigint.fromJSON(json.marketCap);
            this._volume = marshal.bigint.fromJSON(json.volume);
        }
    }
    Object.defineProperty(CollectionStats.prototype, "floorPrice", {
        get: function () {
            return this._floorPrice;
        },
        set: function (value) {
            this._floorPrice = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CollectionStats.prototype, "lastSale", {
        get: function () {
            return this._lastSale;
        },
        set: function (value) {
            this._lastSale = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CollectionStats.prototype, "highestSale", {
        get: function () {
            return this._highestSale;
        },
        set: function (value) {
            this._highestSale = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CollectionStats.prototype, "supply", {
        get: function () {
            return this._supply;
        },
        set: function (value) {
            this._supply = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CollectionStats.prototype, "tokenCount", {
        get: function () {
            (0, assert_1.default)(this._tokenCount != null, 'uninitialized access');
            return this._tokenCount;
        },
        set: function (value) {
            this._tokenCount = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CollectionStats.prototype, "salesCount", {
        get: function () {
            (0, assert_1.default)(this._salesCount != null, 'uninitialized access');
            return this._salesCount;
        },
        set: function (value) {
            this._salesCount = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CollectionStats.prototype, "marketCap", {
        get: function () {
            (0, assert_1.default)(this._marketCap != null, 'uninitialized access');
            return this._marketCap;
        },
        set: function (value) {
            this._marketCap = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CollectionStats.prototype, "volume", {
        get: function () {
            (0, assert_1.default)(this._volume != null, 'uninitialized access');
            return this._volume;
        },
        set: function (value) {
            this._volume = value;
        },
        enumerable: false,
        configurable: true
    });
    CollectionStats.prototype.toJSON = function () {
        return {
            floorPrice: this.floorPrice == null ? undefined : marshal.bigint.toJSON(this.floorPrice),
            lastSale: this.lastSale == null ? undefined : marshal.bigint.toJSON(this.lastSale),
            highestSale: this.highestSale == null ? undefined : marshal.bigint.toJSON(this.highestSale),
            supply: this.supply == null ? undefined : marshal.bigint.toJSON(this.supply),
            tokenCount: this.tokenCount,
            salesCount: this.salesCount,
            marketCap: marshal.bigint.toJSON(this.marketCap),
            volume: marshal.bigint.toJSON(this.volume),
        };
    };
    return CollectionStats;
}());
exports.CollectionStats = CollectionStats;
