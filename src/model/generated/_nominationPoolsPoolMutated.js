"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NominationPoolsPoolMutated = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var NominationPoolsPoolMutated = /** @class */ (function () {
    function NominationPoolsPoolMutated(props, json) {
        this.isTypeOf = 'NominationPoolsPoolMutated';
        Object.assign(this, props);
        if (json != null) {
            this._pool = marshal.string.fromJSON(json.pool);
            this._mutation = json.mutation;
        }
    }
    Object.defineProperty(NominationPoolsPoolMutated.prototype, "pool", {
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
    Object.defineProperty(NominationPoolsPoolMutated.prototype, "mutation", {
        get: function () {
            (0, assert_1.default)(this._mutation != null, 'uninitialized access');
            return this._mutation;
        },
        set: function (value) {
            this._mutation = value;
        },
        enumerable: false,
        configurable: true
    });
    NominationPoolsPoolMutated.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            pool: this.pool,
            mutation: this.mutation,
        };
    };
    return NominationPoolsPoolMutated;
}());
exports.NominationPoolsPoolMutated = NominationPoolsPoolMutated;
