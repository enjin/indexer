"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoyaltyBeneficiary = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var RoyaltyBeneficiary = /** @class */ (function () {
    function RoyaltyBeneficiary(props, json) {
        Object.assign(this, props);
        if (json != null) {
            this._accountId = marshal.string.fromJSON(json.accountId);
            this._percentage = marshal.float.fromJSON(json.percentage);
        }
    }
    Object.defineProperty(RoyaltyBeneficiary.prototype, "accountId", {
        get: function () {
            (0, assert_1.default)(this._accountId != null, 'uninitialized access');
            return this._accountId;
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RoyaltyBeneficiary.prototype, "percentage", {
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
    RoyaltyBeneficiary.prototype.toJSON = function () {
        return {
            accountId: this.accountId,
            percentage: this.percentage,
        };
    };
    return RoyaltyBeneficiary;
}());
exports.RoyaltyBeneficiary = RoyaltyBeneficiary;
