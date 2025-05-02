"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FixedPriceState = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var _listingType_1 = require("./_listingType");
var FixedPriceState = /** @class */ (function () {
    function FixedPriceState(props, json) {
        this.isTypeOf = 'FixedPriceState';
        Object.assign(this, props);
        if (json != null) {
            this._listingType = marshal.enumFromJson(json.listingType, _listingType_1.ListingType);
            this._amountFilled = marshal.bigint.fromJSON(json.amountFilled);
        }
    }
    Object.defineProperty(FixedPriceState.prototype, "listingType", {
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
    Object.defineProperty(FixedPriceState.prototype, "amountFilled", {
        get: function () {
            (0, assert_1.default)(this._amountFilled != null, 'uninitialized access');
            return this._amountFilled;
        },
        set: function (value) {
            this._amountFilled = value;
        },
        enumerable: false,
        configurable: true
    });
    FixedPriceState.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            listingType: this.listingType,
            amountFilled: marshal.bigint.toJSON(this.amountFilled),
        };
    };
    return FixedPriceState;
}());
exports.FixedPriceState = FixedPriceState;
