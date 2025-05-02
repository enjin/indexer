"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NominationPoolsDestroyed = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var NominationPoolsDestroyed = /** @class */ (function () {
    function NominationPoolsDestroyed(props, json) {
        this.isTypeOf = 'NominationPoolsDestroyed';
        Object.assign(this, props);
        if (json != null) {
            this._pool = marshal.string.fromJSON(json.pool);
        }
    }
    Object.defineProperty(NominationPoolsDestroyed.prototype, "pool", {
        get: function () {
            (0, assert_1.default)(this._pool != null, 'uninitialized access');
            return this._pool;
        },
        set: function (value) {
            this._pool = value;
        },
        enumerable: false,
        configurable: true
    });
    NominationPoolsDestroyed.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            pool: this.pool,
        };
    };
    return NominationPoolsDestroyed;
}());
exports.NominationPoolsDestroyed = NominationPoolsDestroyed;
