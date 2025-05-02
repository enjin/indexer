"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiTokensTokenAccountDestroyed = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var MultiTokensTokenAccountDestroyed = /** @class */ (function () {
    function MultiTokensTokenAccountDestroyed(props, json) {
        this.isTypeOf = 'MultiTokensTokenAccountDestroyed';
        Object.assign(this, props);
        if (json != null) {
            this._collectionId = marshal.bigint.fromJSON(json.collectionId);
            this._tokenId = marshal.bigint.fromJSON(json.tokenId);
            this._accountId = marshal.string.fromJSON(json.accountId);
        }
    }
    Object.defineProperty(MultiTokensTokenAccountDestroyed.prototype, "collectionId", {
        get: function () {
            (0, assert_1.default)(this._collectionId != null, 'uninitialized access');
            return this._collectionId;
        },
        set: function (value) {
            this._collectionId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MultiTokensTokenAccountDestroyed.prototype, "tokenId", {
        get: function () {
            (0, assert_1.default)(this._tokenId != null, 'uninitialized access');
            return this._tokenId;
        },
        set: function (value) {
            this._tokenId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MultiTokensTokenAccountDestroyed.prototype, "accountId", {
        get: function () {
            (0, assert_1.default)(this._accountId != null, 'uninitialized access');
            return this._accountId;
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    MultiTokensTokenAccountDestroyed.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            collectionId: marshal.bigint.toJSON(this.collectionId),
            tokenId: marshal.bigint.toJSON(this.tokenId),
            accountId: this.accountId,
        };
    };
    return MultiTokensTokenAccountDestroyed;
}());
exports.MultiTokensTokenAccountDestroyed = MultiTokensTokenAccountDestroyed;
