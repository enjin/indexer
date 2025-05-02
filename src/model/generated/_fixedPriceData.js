"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FixedPriceData = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var _listingType_1 = require("./_listingType");
var FixedPriceData = /** @class */ (function () {
    function FixedPriceData(props, json) {
        this.isTypeOf = 'FixedPriceData';
        Object.assign(this, props);
        if (json != null) {
            this._listingType = marshal.enumFromJson(json.listingType, _listingType_1.ListingType);
        }
    }
    Object.defineProperty(FixedPriceData.prototype, "listingType", {
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
    FixedPriceData.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            listingType: this.listingType,
        };
    };
    return FixedPriceData;
}());
exports.FixedPriceData = FixedPriceData;
