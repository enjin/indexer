"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfferData = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var _listingType_1 = require("./_listingType");
var OfferData = /** @class */ (function () {
    function OfferData(props, json) {
        this.isTypeOf = 'OfferData';
        Object.assign(this, props);
        if (json != null) {
            this._listingType = marshal.enumFromJson(json.listingType, _listingType_1.ListingType);
            this._expiration = json.expiration == null ? undefined : marshal.int.fromJSON(json.expiration);
        }
    }
    Object.defineProperty(OfferData.prototype, "listingType", {
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
    Object.defineProperty(OfferData.prototype, "expiration", {
        get: function () {
            return this._expiration;
        },
        set: function (value) {
            this._expiration = value;
        },
        enumerable: false,
        configurable: true
    });
    OfferData.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            listingType: this.listingType,
            expiration: this.expiration,
        };
    };
    return OfferData;
}());
exports.OfferData = OfferData;
