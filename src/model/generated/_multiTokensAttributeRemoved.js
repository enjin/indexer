"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiTokensAttributeRemoved = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var MultiTokensAttributeRemoved = /** @class */ (function () {
    function MultiTokensAttributeRemoved(props, json) {
        this.isTypeOf = 'MultiTokensAttributeRemoved';
        Object.assign(this, props);
        if (json != null) {
            this._collectionId = marshal.bigint.fromJSON(json.collectionId);
            this._tokenId = json.tokenId == null ? undefined : marshal.bigint.fromJSON(json.tokenId);
            this._key = marshal.string.fromJSON(json.key);
        }
    }
    Object.defineProperty(MultiTokensAttributeRemoved.prototype, "collectionId", {
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
    Object.defineProperty(MultiTokensAttributeRemoved.prototype, "tokenId", {
        get: function () {
            return this._tokenId;
        },
        set: function (value) {
            this._tokenId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MultiTokensAttributeRemoved.prototype, "key", {
        get: function () {
            (0, assert_1.default)(this._key != null, 'uninitialized access');
            return this._key;
        },
        set: function (value) {
            this._key = value;
        },
        enumerable: false,
        configurable: true
    });
    MultiTokensAttributeRemoved.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            collectionId: marshal.bigint.toJSON(this.collectionId),
            tokenId: this.tokenId == null ? undefined : marshal.bigint.toJSON(this.tokenId),
            key: this.key,
        };
    };
    return MultiTokensAttributeRemoved;
}());
exports.MultiTokensAttributeRemoved = MultiTokensAttributeRemoved;
