"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenCapSupply = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var _capType_1 = require("./_capType");
var TokenCapSupply = /** @class */ (function () {
    function TokenCapSupply(props, json) {
        this.isTypeOf = 'TokenCapSupply';
        Object.assign(this, props);
        if (json != null) {
            this._type = marshal.enumFromJson(json.type, _capType_1.CapType);
            this._supply = marshal.bigint.fromJSON(json.supply);
        }
    }
    Object.defineProperty(TokenCapSupply.prototype, "type", {
        get: function () {
            (0, assert_1.default)(this._type != null, 'uninitialized access');
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenCapSupply.prototype, "supply", {
        get: function () {
            (0, assert_1.default)(this._supply != null, 'uninitialized access');
            return this._supply;
        },
        set: function (value) {
            this._supply = value;
        },
        enumerable: false,
        configurable: true
    });
    TokenCapSupply.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            type: this.type,
            supply: marshal.bigint.toJSON(this.supply),
        };
    };
    return TokenCapSupply;
}());
exports.TokenCapSupply = TokenCapSupply;
