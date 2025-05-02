"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NominationPoolsCreated = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var NominationPoolsCreated = /** @class */ (function () {
    function NominationPoolsCreated(props, json) {
        this.isTypeOf = 'NominationPoolsCreated';
        Object.assign(this, props);
        if (json != null) {
            this._pool = marshal.string.fromJSON(json.pool);
        }
    }
    Object.defineProperty(NominationPoolsCreated.prototype, "pool", {
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
    NominationPoolsCreated.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            pool: this.pool,
        };
    };
    return NominationPoolsCreated;
}());
exports.NominationPoolsCreated = NominationPoolsCreated;
