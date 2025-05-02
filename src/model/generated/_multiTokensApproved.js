"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiTokensApproved = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var MultiTokensApproved = /** @class */ (function () {
    function MultiTokensApproved(props, json) {
        this.isTypeOf = 'MultiTokensApproved';
        Object.assign(this, props);
        if (json != null) {
            this._collectionId = marshal.bigint.fromJSON(json.collectionId);
            this._tokenId = json.tokenId == null ? undefined : marshal.bigint.fromJSON(json.tokenId);
            this._owner = marshal.string.fromJSON(json.owner);
            this._operator = marshal.string.fromJSON(json.operator);
            this._amount = json.amount == null ? undefined : marshal.bigint.fromJSON(json.amount);
            this._expiration = json.expiration == null ? undefined : marshal.int.fromJSON(json.expiration);
        }
    }
    Object.defineProperty(MultiTokensApproved.prototype, "collectionId", {
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
    Object.defineProperty(MultiTokensApproved.prototype, "tokenId", {
        get: function () {
            return this._tokenId;
        },
        set: function (value) {
            this._tokenId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MultiTokensApproved.prototype, "owner", {
        get: function () {
            (0, assert_1.default)(this._owner != null, 'uninitialized access');
            return this._owner;
        },
        set: function (value) {
            this._owner = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MultiTokensApproved.prototype, "operator", {
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
    Object.defineProperty(MultiTokensApproved.prototype, "amount", {
        get: function () {
            return this._amount;
        },
        set: function (value) {
            this._amount = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MultiTokensApproved.prototype, "expiration", {
        get: function () {
            return this._expiration;
        },
        set: function (value) {
            this._expiration = value;
        },
        enumerable: false,
        configurable: true
    });
    MultiTokensApproved.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            collectionId: marshal.bigint.toJSON(this.collectionId),
            tokenId: this.tokenId == null ? undefined : marshal.bigint.toJSON(this.tokenId),
            owner: this.owner,
            operator: this.operator,
            amount: this.amount == null ? undefined : marshal.bigint.toJSON(this.amount),
            expiration: this.expiration,
        };
    };
    return MultiTokensApproved;
}());
exports.MultiTokensApproved = MultiTokensApproved;
