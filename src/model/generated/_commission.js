"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Commission = void 0;
var marshal = require("./marshal");
var _commissionChangeRate_1 = require("./_commissionChangeRate");
var Commission = /** @class */ (function () {
    function Commission(props, json) {
        Object.assign(this, props);
        if (json != null) {
            this._current = json.current == null ? undefined : marshal.float.fromJSON(json.current);
            this._max = json.max == null ? undefined : marshal.float.fromJSON(json.max);
            this._changeRate = json.changeRate == null ? undefined : new _commissionChangeRate_1.CommissionChangeRate(undefined, json.changeRate);
            this._throttleFrom = json.throttleFrom == null ? undefined : marshal.int.fromJSON(json.throttleFrom);
        }
    }
    Object.defineProperty(Commission.prototype, "current", {
        get: function () {
            return this._current;
        },
        set: function (value) {
            this._current = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Commission.prototype, "max", {
        get: function () {
            return this._max;
        },
        set: function (value) {
            this._max = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Commission.prototype, "changeRate", {
        get: function () {
            return this._changeRate;
        },
        set: function (value) {
            this._changeRate = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Commission.prototype, "throttleFrom", {
        get: function () {
            return this._throttleFrom;
        },
        set: function (value) {
            this._throttleFrom = value;
        },
        enumerable: false,
        configurable: true
    });
    Commission.prototype.toJSON = function () {
        return {
            current: this.current,
            max: this.max,
            changeRate: this.changeRate == null ? undefined : this.changeRate.toJSON(),
            throttleFrom: this.throttleFrom,
        };
    };
    return Commission;
}());
exports.Commission = Commission;
