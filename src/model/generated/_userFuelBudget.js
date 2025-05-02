"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFuelBudget = void 0;
var marshal = require("./marshal");
var UserFuelBudget = /** @class */ (function () {
    function UserFuelBudget(props, json) {
        Object.assign(this, props);
        if (json != null) {
            this._amount = json.amount == null ? undefined : marshal.bigint.fromJSON(json.amount);
            this._resetPeriod = json.resetPeriod == null ? undefined : marshal.bigint.fromJSON(json.resetPeriod);
        }
    }
    Object.defineProperty(UserFuelBudget.prototype, "amount", {
        get: function () {
            return this._amount;
        },
        set: function (value) {
            this._amount = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserFuelBudget.prototype, "resetPeriod", {
        get: function () {
            return this._resetPeriod;
        },
        set: function (value) {
            this._resetPeriod = value;
        },
        enumerable: false,
        configurable: true
    });
    UserFuelBudget.prototype.toJSON = function () {
        return {
            amount: this.amount == null ? undefined : marshal.bigint.toJSON(this.amount),
            resetPeriod: this.resetPeriod == null ? undefined : marshal.bigint.toJSON(this.resetPeriod),
        };
    };
    return UserFuelBudget;
}());
exports.UserFuelBudget = UserFuelBudget;
