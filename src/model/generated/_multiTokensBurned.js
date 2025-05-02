"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiTokensBurned = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var MultiTokensBurned = /** @class */ (function () {
    function MultiTokensBurned(props, json) {
        this.isTypeOf = 'MultiTokensBurned';
        Object.assign(this, props);
        if (json != null) {
            this._collectionId = marshal.bigint.fromJSON(json.collectionId);
            this._tokenId = marshal.bigint.fromJSON(json.tokenId);
            this._token = json.token == null ? undefined : marshal.string.fromJSON(json.token);
            this._account = marshal.string.fromJSON(json.account);
            this._amount = marshal.bigint.fromJSON(json.amount);
        }
    }
    Object.defineProperty(MultiTokensBurned.prototype, "collectionId", {
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
    Object.defineProperty(MultiTokensBurned.prototype, "tokenId", {
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
    Object.defineProperty(MultiTokensBurned.prototype, "token", {
        get: function () {
            return this._token;
        },
        set: function (value) {
            this._token = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MultiTokensBurned.prototype, "account", {
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
    Object.defineProperty(MultiTokensBurned.prototype, "amount", {
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
    MultiTokensBurned.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            collectionId: marshal.bigint.toJSON(this.collectionId),
            tokenId: marshal.bigint.toJSON(this.tokenId),
            token: this.token,
            account: this.account,
            amount: marshal.bigint.toJSON(this.amount),
        };
    };
    return MultiTokensBurned;
}());
exports.MultiTokensBurned = MultiTokensBurned;
