"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommissionChangeRate = void 0;
var marshal = require("./marshal");
var CommissionChangeRate = /** @class */ (function () {
    function CommissionChangeRate(props, json) {
        Object.assign(this, props);
        if (json != null) {
            this._maxDelta = json.maxDelta == null ? undefined : marshal.float.fromJSON(json.maxDelta);
            this._minDelay = json.minDelay == null ? undefined : marshal.int.fromJSON(json.minDelay);
        }
    }
    Object.defineProperty(CommissionChangeRate.prototype, "maxDelta", {
        get: function () {
            return this._maxDelta;
        },
        set: function (value) {
            this._maxDelta = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CommissionChangeRate.prototype, "minDelay", {
        get: function () {
            return this._minDelay;
        },
        set: function (value) {
            this._minDelay = value;
        },
        enumerable: false,
        configurable: true
    });
    CommissionChangeRate.prototype.toJSON = function () {
        return {
            maxDelta: this.maxDelta,
            minDelay: this.minDelay,
        };
    };
    return CommissionChangeRate;
}());
exports.CommissionChangeRate = CommissionChangeRate;
