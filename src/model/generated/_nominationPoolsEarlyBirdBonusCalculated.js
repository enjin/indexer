"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NominationPoolsEarlyBirdBonusCalculated = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var NominationPoolsEarlyBirdBonusCalculated = /** @class */ (function () {
    function NominationPoolsEarlyBirdBonusCalculated(props, json) {
        this.isTypeOf = 'NominationPoolsEarlyBirdBonusCalculated';
        Object.assign(this, props);
        if (json != null) {
            this._totalAmount = marshal.bigint.fromJSON(json.totalAmount);
        }
    }
    Object.defineProperty(NominationPoolsEarlyBirdBonusCalculated.prototype, "totalAmount", {
        get: function () {
            (0, assert_1.default)(this._totalAmount != null, 'uninitialized access');
            return this._totalAmount;
        },
        set: function (value) {
            this._totalAmount = value;
        },
        enumerable: false,
        configurable: true
    });
    NominationPoolsEarlyBirdBonusCalculated.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            totalAmount: marshal.bigint.toJSON(this.totalAmount),
        };
    };
    return NominationPoolsEarlyBirdBonusCalculated;
}());
exports.NominationPoolsEarlyBirdBonusCalculated = NominationPoolsEarlyBirdBonusCalculated;
