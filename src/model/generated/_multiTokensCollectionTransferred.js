"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiTokensCollectionTransferred = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var MultiTokensCollectionTransferred = /** @class */ (function () {
    function MultiTokensCollectionTransferred(props, json) {
        this.isTypeOf = 'MultiTokensCollectionTransferred';
        Object.assign(this, props);
        if (json != null) {
            this._collectionId = marshal.bigint.fromJSON(json.collectionId);
            this._owner = marshal.string.fromJSON(json.owner);
        }
    }
    Object.defineProperty(MultiTokensCollectionTransferred.prototype, "collectionId", {
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
    Object.defineProperty(MultiTokensCollectionTransferred.prototype, "owner", {
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
    MultiTokensCollectionTransferred.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            collectionId: marshal.bigint.toJSON(this.collectionId),
            owner: this.owner,
        };
    };
    return MultiTokensCollectionTransferred;
}());
exports.MultiTokensCollectionTransferred = MultiTokensCollectionTransferred;
