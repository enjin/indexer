"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommissionPayment = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var CommissionPayment = /** @class */ (function () {
    function CommissionPayment(props, json) {
        Object.assign(this, props);
        if (json != null) {
            this._beneficiary = marshal.string.fromJSON(json.beneficiary);
            this._amount = marshal.bigint.fromJSON(json.amount);
        }
    }
    Object.defineProperty(CommissionPayment.prototype, "beneficiary", {
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
    Object.defineProperty(CommissionPayment.prototype, "amount", {
        get: function () {
            (0, assert_1.default)(this._amount != null, 'uninitialized access');
            return this._amount;
        },
        set: function (value) {
            this._amount = value;
        },
        enumerable: false,
        configurable: true
    });
    CommissionPayment.prototype.toJSON = function () {
        return {
            beneficiary: this.beneficiary,
            amount: marshal.bigint.toJSON(this.amount),
        };
    };
    return CommissionPayment;
}());
exports.CommissionPayment = CommissionPayment;
