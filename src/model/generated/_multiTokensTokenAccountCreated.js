"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiTokensTokenAccountCreated = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var MultiTokensTokenAccountCreated = /** @class */ (function () {
    function MultiTokensTokenAccountCreated(props, json) {
        this.isTypeOf = 'MultiTokensTokenAccountCreated';
        Object.assign(this, props);
        if (json != null) {
            this._collectionId = marshal.bigint.fromJSON(json.collectionId);
            this._tokenId = marshal.bigint.fromJSON(json.tokenId);
            this._account = marshal.string.fromJSON(json.account);
            this._balance = marshal.bigint.fromJSON(json.balance);
        }
    }
    Object.defineProperty(MultiTokensTokenAccountCreated.prototype, "collectionId", {
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
    Object.defineProperty(MultiTokensTokenAccountCreated.prototype, "tokenId", {
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
    Object.defineProperty(MultiTokensTokenAccountCreated.prototype, "account", {
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
    Object.defineProperty(MultiTokensTokenAccountCreated.prototype, "balance", {
        get: function () {
            (0, assert_1.default)(this._balance != null, 'uninitialized access');
            return this._balance;
        },
        set: function (value) {
            this._balance = value;
        },
        enumerable: false,
        configurable: true
    });
    MultiTokensTokenAccountCreated.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            collectionId: marshal.bigint.toJSON(this.collectionId),
            tokenId: marshal.bigint.toJSON(this.tokenId),
            account: this.account,
            balance: marshal.bigint.toJSON(this.balance),
        };
    };
    return MultiTokensTokenAccountCreated;
}());
exports.MultiTokensTokenAccountCreated = MultiTokensTokenAccountCreated;
