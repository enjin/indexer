"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fee = void 0;
var marshal = require("./marshal");
var Fee = /** @class */ (function () {
    function Fee(props, json) {
        Object.assign(this, props);
        if (json != null) {
            this._amount = json.amount == null ? undefined : marshal.bigint.fromJSON(json.amount);
            this._who = json.who == null ? undefined : marshal.string.fromJSON(json.who);
        }
    }
    Object.defineProperty(Fee.prototype, "amount", {
        get: function () {
            return this._amount;
        },
        set: function (value) {
            this._amount = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fee.prototype, "who", {
        get: function () {
            return this._who;
        },
        set: function (value) {
            this._who = value;
        },
        enumerable: false,
        configurable: true
    });
    Fee.prototype.toJSON = function () {
        return {
            amount: this.amount == null ? undefined : marshal.bigint.toJSON(this.amount),
            who: this.who,
        };
    };
    return Fee;
}());
exports.Fee = Fee;
