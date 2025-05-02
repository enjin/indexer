"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiTokensMinted = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var MultiTokensMinted = /** @class */ (function () {
    function MultiTokensMinted(props, json) {
        this.isTypeOf = 'MultiTokensMinted';
        Object.assign(this, props);
        if (json != null) {
            this._collectionId = marshal.bigint.fromJSON(json.collectionId);
            this._tokenId = marshal.bigint.fromJSON(json.tokenId);
            this._token = json.token == null ? undefined : marshal.string.fromJSON(json.token);
            this._issuer = marshal.string.fromJSON(json.issuer);
            this._recipient = marshal.string.fromJSON(json.recipient);
            this._amount = marshal.bigint.fromJSON(json.amount);
        }
    }
    Object.defineProperty(MultiTokensMinted.prototype, "collectionId", {
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
    Object.defineProperty(MultiTokensMinted.prototype, "tokenId", {
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
    Object.defineProperty(MultiTokensMinted.prototype, "token", {
        get: function () {
            return this._token;
        },
        set: function (value) {
            this._token = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MultiTokensMinted.prototype, "issuer", {
        get: function () {
            (0, assert_1.default)(this._issuer != null, 'uninitialized access');
            return this._issuer;
        },
        set: function (value) {
            this._issuer = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MultiTokensMinted.prototype, "recipient", {
        get: function () {
            (0, assert_1.default)(this._recipient != null, 'uninitialized access');
            return this._recipient;
        },
        set: function (value) {
            this._recipient = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MultiTokensMinted.prototype, "amount", {
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
    MultiTokensMinted.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            collectionId: marshal.bigint.toJSON(this.collectionId),
            tokenId: marshal.bigint.toJSON(this.tokenId),
            token: this.token,
            issuer: this.issuer,
            recipient: this.recipient,
            amount: marshal.bigint.toJSON(this.amount),
        };
    };
    return MultiTokensMinted;
}());
exports.MultiTokensMinted = MultiTokensMinted;
