"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiTokensCollectionAccountDestroyed = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var MultiTokensCollectionAccountDestroyed = /** @class */ (function () {
    function MultiTokensCollectionAccountDestroyed(props, json) {
        this.isTypeOf = 'MultiTokensCollectionAccountDestroyed';
        Object.assign(this, props);
        if (json != null) {
            this._collectionId = marshal.bigint.fromJSON(json.collectionId);
            this._account = marshal.string.fromJSON(json.account);
        }
    }
    Object.defineProperty(MultiTokensCollectionAccountDestroyed.prototype, "collectionId", {
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
    Object.defineProperty(MultiTokensCollectionAccountDestroyed.prototype, "account", {
        get: function () {
            (0, assert_1.default)(this._account != null, 'uninitialized access');
            return this._account;
        },
        set: function (value) {
            this._account = value;
        },
        enumerable: false,
        configurable: true
    });
    MultiTokensCollectionAccountDestroyed.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            collectionId: marshal.bigint.toJSON(this.collectionId),
            account: this.account,
        };
    };
    return MultiTokensCollectionAccountDestroyed;
}());
exports.MultiTokensCollectionAccountDestroyed = MultiTokensCollectionAccountDestroyed;
