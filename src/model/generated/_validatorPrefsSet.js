"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatorPrefsSet = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var ValidatorPrefsSet = /** @class */ (function () {
    function ValidatorPrefsSet(props, json) {
        this.isTypeOf = 'ValidatorPrefsSet';
        Object.assign(this, props);
        if (json != null) {
            this._validator = marshal.string.fromJSON(json.validator);
        }
    }
    Object.defineProperty(ValidatorPrefsSet.prototype, "validator", {
        get: function () {
            (0, assert_1.default)(this._validator != null, 'uninitialized access');
            return this._validator;
        },
        set: function (value) {
            this._validator = value;
        },
        enumerable: false,
        configurable: true
    });
    ValidatorPrefsSet.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            validator: this.validator,
        };
    };
    return ValidatorPrefsSet;
}());
exports.ValidatorPrefsSet = ValidatorPrefsSet;
