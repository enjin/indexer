"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenCapSingleMint = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var _capType_1 = require("./_capType");
var TokenCapSingleMint = /** @class */ (function () {
    function TokenCapSingleMint(props, json) {
        this.isTypeOf = 'TokenCapSingleMint';
        Object.assign(this, props);
        if (json != null) {
            this._type = marshal.enumFromJson(json.type, _capType_1.CapType);
            this._supply = marshal.bigint.fromJSON(json.supply);
        }
    }
    Object.defineProperty(TokenCapSingleMint.prototype, "type", {
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
    Object.defineProperty(TokenCapSingleMint.prototype, "supply", {
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
    TokenCapSingleMint.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            type: this.type,
            supply: marshal.bigint.toJSON(this.supply),
        };
    };
    return TokenCapSingleMint;
}());
exports.TokenCapSingleMint = TokenCapSingleMint;
