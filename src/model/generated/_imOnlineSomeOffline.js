"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImOnlineSomeOffline = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var ImOnlineSomeOffline = /** @class */ (function () {
    function ImOnlineSomeOffline(props, json) {
        this.isTypeOf = 'ImOnlineSomeOffline';
        Object.assign(this, props);
        if (json != null) {
            this._validators = marshal.fromList(json.validators, function (val) { return val == null ? undefined : marshal.string.fromJSON(val); });
        }
    }
    Object.defineProperty(ImOnlineSomeOffline.prototype, "validators", {
        get: function () {
            (0, assert_1.default)(this._validators != null, 'uninitialized access');
            return this._validators;
        },
        set: function (value) {
            this._validators = value;
        },
        enumerable: false,
        configurable: true
    });
    ImOnlineSomeOffline.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            validators: this.validators,
        };
    };
    return ImOnlineSomeOffline;
}());
exports.ImOnlineSomeOffline = ImOnlineSomeOffline;
