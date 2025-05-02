"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhitelistedCallers = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var WhitelistedCallers = /** @class */ (function () {
    function WhitelistedCallers(props, json) {
        this.isTypeOf = 'WhitelistedCallers';
        Object.assign(this, props);
        if (json != null) {
            this._value = marshal.fromList(json.value, function (val) { return marshal.string.fromJSON(val); });
        }
    }
    Object.defineProperty(WhitelistedCallers.prototype, "value", {
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
    WhitelistedCallers.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            value: this.value,
        };
    };
    return WhitelistedCallers;
}());
exports.WhitelistedCallers = WhitelistedCallers;
