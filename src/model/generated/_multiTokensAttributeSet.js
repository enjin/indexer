"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiTokensAttributeSet = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var MultiTokensAttributeSet = /** @class */ (function () {
    function MultiTokensAttributeSet(props, json) {
        this.isTypeOf = 'MultiTokensAttributeSet';
        Object.assign(this, props);
        if (json != null) {
            this._collectionId = marshal.bigint.fromJSON(json.collectionId);
            this._tokenId = json.tokenId == null ? undefined : marshal.bigint.fromJSON(json.tokenId);
            this._key = marshal.string.fromJSON(json.key);
            this._value = marshal.string.fromJSON(json.value);
        }
    }
    Object.defineProperty(MultiTokensAttributeSet.prototype, "collectionId", {
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
    Object.defineProperty(MultiTokensAttributeSet.prototype, "tokenId", {
        get: function () {
            return this._tokenId;
        },
        set: function (value) {
            this._tokenId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MultiTokensAttributeSet.prototype, "key", {
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
    Object.defineProperty(MultiTokensAttributeSet.prototype, "value", {
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
    MultiTokensAttributeSet.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            collectionId: marshal.bigint.toJSON(this.collectionId),
            tokenId: this.tokenId == null ? undefined : marshal.bigint.toJSON(this.tokenId),
            key: this.key,
            value: this.value,
        };
    };
    return MultiTokensAttributeSet;
}());
exports.MultiTokensAttributeSet = MultiTokensAttributeSet;
