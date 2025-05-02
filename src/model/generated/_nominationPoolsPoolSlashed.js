"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NominationPoolsPoolSlashed = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var NominationPoolsPoolSlashed = /** @class */ (function () {
    function NominationPoolsPoolSlashed(props, json) {
        this.isTypeOf = 'NominationPoolsPoolSlashed';
        Object.assign(this, props);
        if (json != null) {
            this._pool = marshal.string.fromJSON(json.pool);
            this._balance = marshal.bigint.fromJSON(json.balance);
        }
    }
    Object.defineProperty(NominationPoolsPoolSlashed.prototype, "pool", {
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
    Object.defineProperty(NominationPoolsPoolSlashed.prototype, "balance", {
        get: function () {
            (0, assert_1.default)(this._balance != null, 'uninitialized access');
            return this._balance;
        },
        set: function (value) {
            this._balance = value;
        },
        enumerable: false,
        configurable: true
    });
    NominationPoolsPoolSlashed.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            pool: this.pool,
            balance: marshal.bigint.toJSON(this.balance),
        };
    };
    return NominationPoolsPoolSlashed;
}());
exports.NominationPoolsPoolSlashed = NominationPoolsPoolSlashed;
