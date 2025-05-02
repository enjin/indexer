"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NominationPoolsRewardPaid = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var NominationPoolsRewardPaid = /** @class */ (function () {
    function NominationPoolsRewardPaid(props, json) {
        this.isTypeOf = 'NominationPoolsRewardPaid';
        Object.assign(this, props);
        if (json != null) {
            this._pool = marshal.string.fromJSON(json.pool);
            this._era = marshal.int.fromJSON(json.era);
            this._validatorStash = marshal.string.fromJSON(json.validatorStash);
            this._reward = marshal.bigint.fromJSON(json.reward);
            this._bonus = marshal.bigint.fromJSON(json.bonus);
        }
    }
    Object.defineProperty(NominationPoolsRewardPaid.prototype, "pool", {
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
    Object.defineProperty(NominationPoolsRewardPaid.prototype, "era", {
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
    Object.defineProperty(NominationPoolsRewardPaid.prototype, "validatorStash", {
        get: function () {
            (0, assert_1.default)(this._validatorStash != null, 'uninitialized access');
            return this._validatorStash;
        },
        set: function (value) {
            this._validatorStash = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NominationPoolsRewardPaid.prototype, "reward", {
        get: function () {
            (0, assert_1.default)(this._reward != null, 'uninitialized access');
            return this._reward;
        },
        set: function (value) {
            this._reward = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NominationPoolsRewardPaid.prototype, "bonus", {
        get: function () {
            (0, assert_1.default)(this._bonus != null, 'uninitialized access');
            return this._bonus;
        },
        set: function (value) {
            this._bonus = value;
        },
        enumerable: false,
        configurable: true
    });
    NominationPoolsRewardPaid.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            pool: this.pool,
            era: this.era,
            validatorStash: this.validatorStash,
            reward: marshal.bigint.toJSON(this.reward),
            bonus: marshal.bigint.toJSON(this.bonus),
        };
    };
    return NominationPoolsRewardPaid;
}());
exports.NominationPoolsRewardPaid = NominationPoolsRewardPaid;
