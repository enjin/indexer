"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NominationPoolsEraRewardsProcessed = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var NominationPoolsEraRewardsProcessed = /** @class */ (function () {
    function NominationPoolsEraRewardsProcessed(props, json) {
        this.isTypeOf = 'NominationPoolsEraRewardsProcessed';
        Object.assign(this, props);
        if (json != null) {
            this._pool = marshal.string.fromJSON(json.pool);
            this._era = marshal.int.fromJSON(json.era);
            this._eraReward = marshal.string.fromJSON(json.eraReward);
            this._rate = marshal.bigint.fromJSON(json.rate);
        }
    }
    Object.defineProperty(NominationPoolsEraRewardsProcessed.prototype, "pool", {
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
    Object.defineProperty(NominationPoolsEraRewardsProcessed.prototype, "era", {
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
    Object.defineProperty(NominationPoolsEraRewardsProcessed.prototype, "eraReward", {
        get: function () {
            (0, assert_1.default)(this._eraReward != null, 'uninitialized access');
            return this._eraReward;
        },
        set: function (value) {
            this._eraReward = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NominationPoolsEraRewardsProcessed.prototype, "rate", {
        get: function () {
            (0, assert_1.default)(this._rate != null, 'uninitialized access');
            return this._rate;
        },
        set: function (value) {
            this._rate = value;
        },
        enumerable: false,
        configurable: true
    });
    NominationPoolsEraRewardsProcessed.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            pool: this.pool,
            era: this.era,
            eraReward: this.eraReward,
            rate: marshal.bigint.toJSON(this.rate),
        };
    };
    return NominationPoolsEraRewardsProcessed;
}());
exports.NominationPoolsEraRewardsProcessed = NominationPoolsEraRewardsProcessed;
