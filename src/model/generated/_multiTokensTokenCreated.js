"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiTokensTokenCreated = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var MultiTokensTokenCreated = /** @class */ (function () {
    function MultiTokensTokenCreated(props, json) {
        this.isTypeOf = 'MultiTokensTokenCreated';
        Object.assign(this, props);
        if (json != null) {
            this._collectionId = marshal.bigint.fromJSON(json.collectionId);
            this._tokenId = marshal.bigint.fromJSON(json.tokenId);
            this._issuer = marshal.string.fromJSON(json.issuer);
            this._initialSupply = marshal.bigint.fromJSON(json.initialSupply);
        }
    }
    Object.defineProperty(MultiTokensTokenCreated.prototype, "collectionId", {
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
    Object.defineProperty(MultiTokensTokenCreated.prototype, "tokenId", {
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
    Object.defineProperty(MultiTokensTokenCreated.prototype, "issuer", {
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
    Object.defineProperty(MultiTokensTokenCreated.prototype, "initialSupply", {
        get: function () {
            (0, assert_1.default)(this._initialSupply != null, 'uninitialized access');
            return this._initialSupply;
        },
        set: function (value) {
            this._initialSupply = value;
        },
        enumerable: false,
        configurable: true
    });
    MultiTokensTokenCreated.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            collectionId: marshal.bigint.toJSON(this.collectionId),
            tokenId: marshal.bigint.toJSON(this.tokenId),
            issuer: this.issuer,
            initialSupply: marshal.bigint.toJSON(this.initialSupply),
        };
    };
    return MultiTokensTokenCreated;
}());
exports.MultiTokensTokenCreated = MultiTokensTokenCreated;
