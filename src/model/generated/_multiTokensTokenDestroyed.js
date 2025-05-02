"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiTokensTokenDestroyed = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var MultiTokensTokenDestroyed = /** @class */ (function () {
    function MultiTokensTokenDestroyed(props, json) {
        this.isTypeOf = 'MultiTokensTokenDestroyed';
        Object.assign(this, props);
        if (json != null) {
            this._collectionId = marshal.bigint.fromJSON(json.collectionId);
            this._tokenId = marshal.bigint.fromJSON(json.tokenId);
            this._caller = marshal.string.fromJSON(json.caller);
        }
    }
    Object.defineProperty(MultiTokensTokenDestroyed.prototype, "collectionId", {
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
    Object.defineProperty(MultiTokensTokenDestroyed.prototype, "tokenId", {
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
    Object.defineProperty(MultiTokensTokenDestroyed.prototype, "caller", {
        get: function () {
            (0, assert_1.default)(this._caller != null, 'uninitialized access');
            return this._caller;
        },
        set: function (value) {
            this._caller = value;
        },
        enumerable: false,
        configurable: true
    });
    MultiTokensTokenDestroyed.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            collectionId: marshal.bigint.toJSON(this.collectionId),
            tokenId: marshal.bigint.toJSON(this.tokenId),
            caller: this.caller,
        };
    };
    return MultiTokensTokenDestroyed;
}());
exports.MultiTokensTokenDestroyed = MultiTokensTokenDestroyed;
