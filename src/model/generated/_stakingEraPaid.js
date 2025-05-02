"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StakingEraPaid = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var StakingEraPaid = /** @class */ (function () {
    function StakingEraPaid(props, json) {
        this.isTypeOf = 'StakingEraPaid';
        Object.assign(this, props);
        if (json != null) {
            this._eraIndex = marshal.int.fromJSON(json.eraIndex);
            this._validatorPayout = marshal.bigint.fromJSON(json.validatorPayout);
            this._remainder = marshal.bigint.fromJSON(json.remainder);
        }
    }
    Object.defineProperty(StakingEraPaid.prototype, "eraIndex", {
        get: function () {
            (0, assert_1.default)(this._eraIndex != null, 'uninitialized access');
            return this._eraIndex;
        },
        set: function (value) {
            this._eraIndex = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StakingEraPaid.prototype, "validatorPayout", {
        get: function () {
            (0, assert_1.default)(this._validatorPayout != null, 'uninitialized access');
            return this._validatorPayout;
        },
        set: function (value) {
            this._validatorPayout = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StakingEraPaid.prototype, "remainder", {
        get: function () {
            (0, assert_1.default)(this._remainder != null, 'uninitialized access');
            return this._remainder;
        },
        set: function (value) {
            this._remainder = value;
        },
        enumerable: false,
        configurable: true
    });
    StakingEraPaid.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            eraIndex: this.eraIndex,
            validatorPayout: marshal.bigint.toJSON(this.validatorPayout),
            remainder: marshal.bigint.toJSON(this.remainder),
        };
    };
    return StakingEraPaid;
}());
exports.StakingEraPaid = StakingEraPaid;
