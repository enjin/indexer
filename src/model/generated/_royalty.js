"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Royalty = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var Royalty = /** @class */ (function () {
    function Royalty(props, json) {
        Object.assign(this, props);
        if (json != null) {
            this._beneficiary = marshal.string.fromJSON(json.beneficiary);
            this._percentage = marshal.float.fromJSON(json.percentage);
        }
    }
    Object.defineProperty(Royalty.prototype, "beneficiary", {
        get: function () {
            (0, assert_1.default)(this._beneficiary != null, 'uninitialized access');
            return this._beneficiary;
        },
        set: function (value) {
            this._beneficiary = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Royalty.prototype, "percentage", {
        get: function () {
            (0, assert_1.default)(this._percentage != null, 'uninitialized access');
            return this._percentage;
        },
        set: function (value) {
            this._percentage = value;
        },
        enumerable: false,
        configurable: true
    });
    Royalty.prototype.toJSON = function () {
        return {
            beneficiary: this.beneficiary,
            percentage: this.percentage,
        };
    };
    return Royalty;
}());
exports.Royalty = Royalty;
