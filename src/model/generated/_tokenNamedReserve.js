"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenNamedReserve = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var TokenNamedReserve = /** @class */ (function () {
    function TokenNamedReserve(props, json) {
        Object.assign(this, props);
        if (json != null) {
            this._pallet = marshal.string.fromJSON(json.pallet);
            this._amount = marshal.bigint.fromJSON(json.amount);
        }
    }
    Object.defineProperty(TokenNamedReserve.prototype, "pallet", {
        get: function () {
            (0, assert_1.default)(this._pallet != null, 'uninitialized access');
            return this._pallet;
        },
        set: function (value) {
            this._pallet = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenNamedReserve.prototype, "amount", {
        get: function () {
            (0, assert_1.default)(this._amount != null, 'uninitialized access');
            return this._amount;
        },
        set: function (value) {
            this._amount = value;
        },
        enumerable: false,
        configurable: true
    });
    TokenNamedReserve.prototype.toJSON = function () {
        return {
            pallet: this.pallet,
            amount: marshal.bigint.toJSON(this.amount),
        };
    };
    return TokenNamedReserve;
}());
exports.TokenNamedReserve = TokenNamedReserve;
