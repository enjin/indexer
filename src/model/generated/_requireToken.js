"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequireToken = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var RequireToken = /** @class */ (function () {
    function RequireToken(props, json) {
        this.isTypeOf = 'RequireToken';
        Object.assign(this, props);
        if (json != null) {
            this._collectionId = marshal.bigint.fromJSON(json.collectionId);
            this._tokenId = json.tokenId == null ? undefined : marshal.bigint.fromJSON(json.tokenId);
        }
    }
    Object.defineProperty(RequireToken.prototype, "collectionId", {
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
    Object.defineProperty(RequireToken.prototype, "tokenId", {
        get: function () {
            return this._tokenId;
        },
        set: function (value) {
            this._tokenId = value;
        },
        enumerable: false,
        configurable: true
    });
    RequireToken.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            collectionId: marshal.bigint.toJSON(this.collectionId),
            tokenId: this.tokenId == null ? undefined : marshal.bigint.toJSON(this.tokenId),
        };
    };
    return RequireToken;
}());
exports.RequireToken = RequireToken;
