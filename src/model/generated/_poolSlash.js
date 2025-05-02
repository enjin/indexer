"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoolSlash = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var PoolSlash = /** @class */ (function () {
    function PoolSlash(props, json) {
        Object.assign(this, props);
        if (json != null) {
            this._amount = marshal.bigint.fromJSON(json.amount);
            this._appliedAt = marshal.datetime.fromJSON(json.appliedAt);
            this._appliedBlock = marshal.int.fromJSON(json.appliedBlock);
        }
    }
    Object.defineProperty(PoolSlash.prototype, "amount", {
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
    Object.defineProperty(PoolSlash.prototype, "appliedAt", {
        get: function () {
            (0, assert_1.default)(this._appliedAt != null, 'uninitialized access');
            return this._appliedAt;
        },
        set: function (value) {
            this._appliedAt = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PoolSlash.prototype, "appliedBlock", {
        get: function () {
            (0, assert_1.default)(this._appliedBlock != null, 'uninitialized access');
            return this._appliedBlock;
        },
        set: function (value) {
            this._appliedBlock = value;
        },
        enumerable: false,
        configurable: true
    });
    PoolSlash.prototype.toJSON = function () {
        return {
            amount: marshal.bigint.toJSON(this.amount),
            appliedAt: marshal.datetime.toJSON(this.appliedAt),
            appliedBlock: this.appliedBlock,
        };
    };
    return PoolSlash;
}());
exports.PoolSlash = PoolSlash;
