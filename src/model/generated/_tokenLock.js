"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenLock = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var TokenLock = /** @class */ (function () {
    function TokenLock(props, json) {
        Object.assign(this, props);
        if (json != null) {
            this._pallet = marshal.string.fromJSON(json.pallet);
            this._amount = marshal.bigint.fromJSON(json.amount);
        }
    }
    Object.defineProperty(TokenLock.prototype, "pallet", {
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
    Object.defineProperty(TokenLock.prototype, "amount", {
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
    TokenLock.prototype.toJSON = function () {
        return {
            pallet: this.pallet,
            amount: marshal.bigint.toJSON(this.amount),
        };
    };
    return TokenLock;
}());
exports.TokenLock = TokenLock;
