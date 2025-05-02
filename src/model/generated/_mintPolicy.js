"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MintPolicy = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var MintPolicy = /** @class */ (function () {
    function MintPolicy(props, json) {
        Object.assign(this, props);
        if (json != null) {
            this._maxTokenCount = json.maxTokenCount == null ? undefined : marshal.bigint.fromJSON(json.maxTokenCount);
            this._maxTokenSupply = json.maxTokenSupply == null ? undefined : marshal.bigint.fromJSON(json.maxTokenSupply);
            this._forceSingleMint = marshal.boolean.fromJSON(json.forceSingleMint);
        }
    }
    Object.defineProperty(MintPolicy.prototype, "maxTokenCount", {
        get: function () {
            return this._maxTokenCount;
        },
        set: function (value) {
            this._maxTokenCount = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MintPolicy.prototype, "maxTokenSupply", {
        get: function () {
            return this._maxTokenSupply;
        },
        set: function (value) {
            this._maxTokenSupply = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MintPolicy.prototype, "forceSingleMint", {
        get: function () {
            (0, assert_1.default)(this._forceSingleMint != null, 'uninitialized access');
            return this._forceSingleMint;
        },
        set: function (value) {
            this._forceSingleMint = value;
        },
        enumerable: false,
        configurable: true
    });
    MintPolicy.prototype.toJSON = function () {
        return {
            maxTokenCount: this.maxTokenCount == null ? undefined : marshal.bigint.toJSON(this.maxTokenCount),
            maxTokenSupply: this.maxTokenSupply == null ? undefined : marshal.bigint.toJSON(this.maxTokenSupply),
            forceSingleMint: this.forceSingleMint,
        };
    };
    return MintPolicy;
}());
exports.MintPolicy = MintPolicy;
