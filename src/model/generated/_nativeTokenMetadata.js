"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NativeTokenMetadata = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var NativeTokenMetadata = /** @class */ (function () {
    function NativeTokenMetadata(props, json) {
        Object.assign(this, props);
        if (json != null) {
            this._name = marshal.string.fromJSON(json.name);
            this._symbol = marshal.string.fromJSON(json.symbol);
            this._decimalCount = marshal.int.fromJSON(json.decimalCount);
        }
    }
    Object.defineProperty(NativeTokenMetadata.prototype, "name", {
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
    Object.defineProperty(NativeTokenMetadata.prototype, "symbol", {
        get: function () {
            (0, assert_1.default)(this._symbol != null, 'uninitialized access');
            return this._symbol;
        },
        set: function (value) {
            this._symbol = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NativeTokenMetadata.prototype, "decimalCount", {
        get: function () {
            (0, assert_1.default)(this._decimalCount != null, 'uninitialized access');
            return this._decimalCount;
        },
        set: function (value) {
            this._decimalCount = value;
        },
        enumerable: false,
        configurable: true
    });
    NativeTokenMetadata.prototype.toJSON = function () {
        return {
            name: this.name,
            symbol: this.symbol,
            decimalCount: this.decimalCount,
        };
    };
    return NativeTokenMetadata;
}());
exports.NativeTokenMetadata = NativeTokenMetadata;
