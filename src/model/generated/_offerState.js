"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfferState = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var _listingType_1 = require("./_listingType");
var OfferState = /** @class */ (function () {
    function OfferState(props, json) {
        this.isTypeOf = 'OfferState';
        Object.assign(this, props);
        if (json != null) {
            this._listingType = marshal.enumFromJson(json.listingType, _listingType_1.ListingType);
            this._counterOfferCount = marshal.int.fromJSON(json.counterOfferCount);
        }
    }
    Object.defineProperty(OfferState.prototype, "listingType", {
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
    Object.defineProperty(OfferState.prototype, "counterOfferCount", {
        get: function () {
            (0, assert_1.default)(this._counterOfferCount != null, 'uninitialized access');
            return this._counterOfferCount;
        },
        set: function (value) {
            this._counterOfferCount = value;
        },
        enumerable: false,
        configurable: true
    });
    OfferState.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            listingType: this.listingType,
            counterOfferCount: this.counterOfferCount,
        };
    };
    return OfferState;
}());
exports.OfferState = OfferState;
