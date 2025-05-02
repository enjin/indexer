"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiTokensUnapproved = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var MultiTokensUnapproved = /** @class */ (function () {
    function MultiTokensUnapproved(props, json) {
        this.isTypeOf = 'MultiTokensUnapproved';
        Object.assign(this, props);
        if (json != null) {
            this._collectionId = marshal.bigint.fromJSON(json.collectionId);
            this._tokenId = json.tokenId == null ? undefined : marshal.bigint.fromJSON(json.tokenId);
            this._owner = marshal.string.fromJSON(json.owner);
            this._operator = marshal.string.fromJSON(json.operator);
        }
    }
    Object.defineProperty(MultiTokensUnapproved.prototype, "collectionId", {
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
    Object.defineProperty(MultiTokensUnapproved.prototype, "tokenId", {
        get: function () {
            return this._tokenId;
        },
        set: function (value) {
            this._tokenId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MultiTokensUnapproved.prototype, "owner", {
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
    Object.defineProperty(MultiTokensUnapproved.prototype, "operator", {
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
    MultiTokensUnapproved.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            collectionId: marshal.bigint.toJSON(this.collectionId),
            tokenId: this.tokenId == null ? undefined : marshal.bigint.toJSON(this.tokenId),
            owner: this.owner,
            operator: this.operator,
        };
    };
    return MultiTokensUnapproved;
}());
exports.MultiTokensUnapproved = MultiTokensUnapproved;
