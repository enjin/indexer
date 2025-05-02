"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuelTankDestroyed = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var FuelTankDestroyed = /** @class */ (function () {
    function FuelTankDestroyed(props, json) {
        this.isTypeOf = 'FuelTankDestroyed';
        Object.assign(this, props);
        if (json != null) {
            this._tank = marshal.string.fromJSON(json.tank);
        }
    }
    Object.defineProperty(FuelTankDestroyed.prototype, "tank", {
        get: function () {
            (0, assert_1.default)(this._tank != null, 'uninitialized access');
            return this._tank;
        },
        set: function (value) {
            this._tank = value;
        },
        enumerable: false,
        configurable: true
    });
    FuelTankDestroyed.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            tank: this.tank,
        };
    };
    return FuelTankDestroyed;
}());
exports.FuelTankDestroyed = FuelTankDestroyed;
