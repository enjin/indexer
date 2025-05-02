"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaxFuelBurnPerTransaction = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var MaxFuelBurnPerTransaction = /** @class */ (function () {
    function MaxFuelBurnPerTransaction(props, json) {
        Object.assign(this, props);
        if (json != null) {
            this._value = marshal.bigint.fromJSON(json.value);
        }
    }
    Object.defineProperty(MaxFuelBurnPerTransaction.prototype, "value", {
        get: function () {
            (0, assert_1.default)(this._value != null, 'uninitialized access');
            return this._value;
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    MaxFuelBurnPerTransaction.prototype.toJSON = function () {
        return {
            value: marshal.bigint.toJSON(this.value),
        };
    };
    return MaxFuelBurnPerTransaction;
}());
exports.MaxFuelBurnPerTransaction = MaxFuelBurnPerTransaction;
