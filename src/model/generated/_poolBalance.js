"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoolBalance = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var PoolBalance = /** @class */ (function () {
    function PoolBalance(props, json) {
        Object.assign(this, props);
        if (json != null) {
            this._stash = marshal.bigint.fromJSON(json.stash);
            this._reward = marshal.bigint.fromJSON(json.reward);
            this._bonus = marshal.bigint.fromJSON(json.bonus);
            this._active = marshal.bigint.fromJSON(json.active);
        }
    }
    Object.defineProperty(PoolBalance.prototype, "stash", {
        get: function () {
            (0, assert_1.default)(this._stash != null, 'uninitialized access');
            return this._stash;
        },
        set: function (value) {
            this._stash = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PoolBalance.prototype, "reward", {
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
    Object.defineProperty(PoolBalance.prototype, "bonus", {
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
    Object.defineProperty(PoolBalance.prototype, "active", {
        get: function () {
            (0, assert_1.default)(this._active != null, 'uninitialized access');
            return this._active;
        },
        set: function (value) {
            this._active = value;
        },
        enumerable: false,
        configurable: true
    });
    PoolBalance.prototype.toJSON = function () {
        return {
            stash: marshal.bigint.toJSON(this.stash),
            reward: marshal.bigint.toJSON(this.reward),
            bonus: marshal.bigint.toJSON(this.bonus),
            active: marshal.bigint.toJSON(this.active),
        };
    };
    return PoolBalance;
}());
exports.PoolBalance = PoolBalance;
