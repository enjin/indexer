"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuelTankCreated = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var FuelTankCreated = /** @class */ (function () {
    function FuelTankCreated(props, json) {
        this.isTypeOf = 'FuelTankCreated';
        Object.assign(this, props);
        if (json != null) {
            this._tank = marshal.string.fromJSON(json.tank);
            this._name = marshal.string.fromJSON(json.name);
            this._owner = marshal.string.fromJSON(json.owner);
        }
    }
    Object.defineProperty(FuelTankCreated.prototype, "tank", {
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
    Object.defineProperty(FuelTankCreated.prototype, "name", {
        get: function () {
            (0, assert_1.default)(this._name != null, 'uninitialized access');
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FuelTankCreated.prototype, "owner", {
        get: function () {
            (0, assert_1.default)(this._owner != null, 'uninitialized access');
            return this._owner;
        },
        set: function (value) {
            this._owner = value;
        },
        enumerable: false,
        configurable: true
    });
    FuelTankCreated.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            tank: this.tank,
            name: this.name,
            owner: this.owner,
        };
    };
    return FuelTankCreated;
}());
exports.FuelTankCreated = FuelTankCreated;
