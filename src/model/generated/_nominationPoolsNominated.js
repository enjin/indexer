"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NominationPoolsNominated = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var NominationPoolsNominated = /** @class */ (function () {
    function NominationPoolsNominated(props, json) {
        this.isTypeOf = 'NominationPoolsNominated';
        Object.assign(this, props);
        if (json != null) {
            this._pool = marshal.string.fromJSON(json.pool);
            this._validators = marshal.fromList(json.validators, function (val) { return val == null ? undefined : marshal.string.fromJSON(val); });
        }
    }
    Object.defineProperty(NominationPoolsNominated.prototype, "pool", {
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
    Object.defineProperty(NominationPoolsNominated.prototype, "validators", {
        get: function () {
            (0, assert_1.default)(this._validators != null, 'uninitialized access');
            return this._validators;
        },
        set: function (value) {
            this._validators = value;
        },
        enumerable: false,
        configurable: true
    });
    NominationPoolsNominated.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            pool: this.pool,
            validators: this.validators,
        };
    };
    return NominationPoolsNominated;
}());
exports.NominationPoolsNominated = NominationPoolsNominated;
