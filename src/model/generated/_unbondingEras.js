"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnbondingEras = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var UnbondingEras = /** @class */ (function () {
    function UnbondingEras(props, json) {
        Object.assign(this, props);
        if (json != null) {
            this._era = marshal.int.fromJSON(json.era);
            this._balance = marshal.bigint.fromJSON(json.balance);
        }
    }
    Object.defineProperty(UnbondingEras.prototype, "era", {
        get: function () {
            (0, assert_1.default)(this._era != null, 'uninitialized access');
            return this._era;
        },
        set: function (value) {
            this._era = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UnbondingEras.prototype, "balance", {
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
    UnbondingEras.prototype.toJSON = function () {
        return {
            era: this.era,
            balance: marshal.bigint.toJSON(this.balance),
        };
    };
    return UnbondingEras;
}());
exports.UnbondingEras = UnbondingEras;
