"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiTokensInfused = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var MultiTokensInfused = /** @class */ (function () {
    function MultiTokensInfused(props, json) {
        this.isTypeOf = 'MultiTokensInfused';
        Object.assign(this, props);
        if (json != null) {
            this._collectionId = marshal.bigint.fromJSON(json.collectionId);
            this._tokenId = json.tokenId == null ? undefined : marshal.bigint.fromJSON(json.tokenId);
            this._accountId = marshal.string.fromJSON(json.accountId);
            this._amount = marshal.bigint.fromJSON(json.amount);
        }
    }
    Object.defineProperty(MultiTokensInfused.prototype, "collectionId", {
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
    Object.defineProperty(MultiTokensInfused.prototype, "tokenId", {
        get: function () {
            return this._tokenId;
        },
        set: function (value) {
            this._tokenId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MultiTokensInfused.prototype, "accountId", {
        get: function () {
            (0, assert_1.default)(this._accountId != null, 'uninitialized access');
            return this._accountId;
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MultiTokensInfused.prototype, "amount", {
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
    MultiTokensInfused.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            collectionId: marshal.bigint.toJSON(this.collectionId),
            tokenId: this.tokenId == null ? undefined : marshal.bigint.toJSON(this.tokenId),
            accountId: this.accountId,
            amount: marshal.bigint.toJSON(this.amount),
        };
    };
    return MultiTokensInfused;
}());
exports.MultiTokensInfused = MultiTokensInfused;
