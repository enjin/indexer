"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiTokensTransferred = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var MultiTokensTransferred = /** @class */ (function () {
    function MultiTokensTransferred(props, json) {
        this.isTypeOf = 'MultiTokensTransferred';
        Object.assign(this, props);
        if (json != null) {
            this._collectionId = marshal.bigint.fromJSON(json.collectionId);
            this._tokenId = marshal.bigint.fromJSON(json.tokenId);
            this._token = json.token == null ? undefined : marshal.string.fromJSON(json.token);
            this._operator = marshal.string.fromJSON(json.operator);
            this._from = marshal.string.fromJSON(json.from);
            this._to = marshal.string.fromJSON(json.to);
            this._amount = marshal.bigint.fromJSON(json.amount);
        }
    }
    Object.defineProperty(MultiTokensTransferred.prototype, "collectionId", {
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
    Object.defineProperty(MultiTokensTransferred.prototype, "tokenId", {
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
    Object.defineProperty(MultiTokensTransferred.prototype, "token", {
        get: function () {
            return this._token;
        },
        set: function (value) {
            this._token = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MultiTokensTransferred.prototype, "operator", {
        get: function () {
            (0, assert_1.default)(this._operator != null, 'uninitialized access');
            return this._operator;
        },
        set: function (value) {
            this._operator = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MultiTokensTransferred.prototype, "from", {
        get: function () {
            (0, assert_1.default)(this._from != null, 'uninitialized access');
            return this._from;
        },
        set: function (value) {
            this._from = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MultiTokensTransferred.prototype, "to", {
        get: function () {
            (0, assert_1.default)(this._to != null, 'uninitialized access');
            return this._to;
        },
        set: function (value) {
            this._to = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MultiTokensTransferred.prototype, "amount", {
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
    MultiTokensTransferred.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            collectionId: marshal.bigint.toJSON(this.collectionId),
            tokenId: marshal.bigint.toJSON(this.tokenId),
            token: this.token,
            operator: this.operator,
            from: this.from,
            to: this.to,
            amount: marshal.bigint.toJSON(this.amount),
        };
    };
    return MultiTokensTransferred;
}());
exports.MultiTokensTransferred = MultiTokensTransferred;
