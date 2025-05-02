"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuelTankData = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var FuelTankData = /** @class */ (function () {
    function FuelTankData(props, json) {
        Object.assign(this, props);
        if (json != null) {
            this._id = marshal.string.fromJSON(json.id);
            this._name = marshal.string.fromJSON(json.name);
            this._ruleSetId = json.ruleSetId == null ? undefined : marshal.int.fromJSON(json.ruleSetId);
            this._paysRemainingFee = json.paysRemainingFee == null ? undefined : marshal.boolean.fromJSON(json.paysRemainingFee);
            this._useNoneOrigin = json.useNoneOrigin == null ? undefined : marshal.boolean.fromJSON(json.useNoneOrigin);
            this._feePaid = json.feePaid == null ? undefined : marshal.bigint.fromJSON(json.feePaid);
        }
    }
    Object.defineProperty(FuelTankData.prototype, "id", {
        get: function () {
            (0, assert_1.default)(this._id != null, 'uninitialized access');
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FuelTankData.prototype, "name", {
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
    Object.defineProperty(FuelTankData.prototype, "ruleSetId", {
        get: function () {
            return this._ruleSetId;
        },
        set: function (value) {
            this._ruleSetId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FuelTankData.prototype, "paysRemainingFee", {
        get: function () {
            return this._paysRemainingFee;
        },
        set: function (value) {
            this._paysRemainingFee = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FuelTankData.prototype, "useNoneOrigin", {
        get: function () {
            return this._useNoneOrigin;
        },
        set: function (value) {
            this._useNoneOrigin = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FuelTankData.prototype, "feePaid", {
        get: function () {
            return this._feePaid;
        },
        set: function (value) {
            this._feePaid = value;
        },
        enumerable: false,
        configurable: true
    });
    FuelTankData.prototype.toJSON = function () {
        return {
            id: this.id,
            name: this.name,
            ruleSetId: this.ruleSetId,
            paysRemainingFee: this.paysRemainingFee,
            useNoneOrigin: this.useNoneOrigin,
            feePaid: this.feePaid == null ? undefined : marshal.bigint.toJSON(this.feePaid),
        };
    };
    return FuelTankData;
}());
exports.FuelTankData = FuelTankData;
