"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiTokensCollectionMutated = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var MultiTokensCollectionMutated = /** @class */ (function () {
    function MultiTokensCollectionMutated(props, json) {
        this.isTypeOf = 'MultiTokensCollectionMutated';
        Object.assign(this, props);
        if (json != null) {
            this._collectionId = marshal.bigint.fromJSON(json.collectionId);
        }
    }
    Object.defineProperty(MultiTokensCollectionMutated.prototype, "collectionId", {
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
    MultiTokensCollectionMutated.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            collectionId: marshal.bigint.toJSON(this.collectionId),
        };
    };
    return MultiTokensCollectionMutated;
}());
exports.MultiTokensCollectionMutated = MultiTokensCollectionMutated;
