"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiTokensCollectionDestroyed = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var MultiTokensCollectionDestroyed = /** @class */ (function () {
    function MultiTokensCollectionDestroyed(props, json) {
        this.isTypeOf = 'MultiTokensCollectionDestroyed';
        Object.assign(this, props);
        if (json != null) {
            this._collectionId = marshal.bigint.fromJSON(json.collectionId);
            this._caller = marshal.string.fromJSON(json.caller);
        }
    }
    Object.defineProperty(MultiTokensCollectionDestroyed.prototype, "collectionId", {
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
    Object.defineProperty(MultiTokensCollectionDestroyed.prototype, "caller", {
        get: function () {
            (0, assert_1.default)(this._caller != null, 'uninitialized access');
            return this._caller;
        },
        set: function (value) {
            this._caller = value;
        },
        enumerable: false,
        configurable: true
    });
    MultiTokensCollectionDestroyed.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            collectionId: marshal.bigint.toJSON(this.collectionId),
            caller: this.caller,
        };
    };
    return MultiTokensCollectionDestroyed;
}());
exports.MultiTokensCollectionDestroyed = MultiTokensCollectionDestroyed;
