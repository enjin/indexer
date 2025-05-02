"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiTokensCollectionCreated = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var MultiTokensCollectionCreated = /** @class */ (function () {
    function MultiTokensCollectionCreated(props, json) {
        this.isTypeOf = 'MultiTokensCollectionCreated';
        Object.assign(this, props);
        if (json != null) {
            this._collectionId = marshal.bigint.fromJSON(json.collectionId);
            this._owner = marshal.string.fromJSON(json.owner);
        }
    }
    Object.defineProperty(MultiTokensCollectionCreated.prototype, "collectionId", {
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
    Object.defineProperty(MultiTokensCollectionCreated.prototype, "owner", {
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
    MultiTokensCollectionCreated.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            collectionId: marshal.bigint.toJSON(this.collectionId),
            owner: this.owner,
        };
    };
    return MultiTokensCollectionCreated;
}());
exports.MultiTokensCollectionCreated = MultiTokensCollectionCreated;
