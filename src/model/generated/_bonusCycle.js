"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BonusCycle = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var BonusCycle = /** @class */ (function () {
    function BonusCycle(props, json) {
        Object.assign(this, props);
        if (json != null) {
            this._previousStart = json.previousStart == null ? undefined : marshal.int.fromJSON(json.previousStart);
            this._start = marshal.int.fromJSON(json.start);
            this._end = marshal.int.fromJSON(json.end);
            this._pendingDuration = json.pendingDuration == null ? undefined : marshal.int.fromJSON(json.pendingDuration);
        }
    }
    Object.defineProperty(BonusCycle.prototype, "previousStart", {
        get: function () {
            return this._previousStart;
        },
        set: function (value) {
            this._previousStart = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BonusCycle.prototype, "start", {
        get: function () {
            (0, assert_1.default)(this._start != null, 'uninitialized access');
            return this._start;
        },
        set: function (value) {
            this._start = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BonusCycle.prototype, "end", {
        get: function () {
            (0, assert_1.default)(this._end != null, 'uninitialized access');
            return this._end;
        },
        set: function (value) {
            this._end = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BonusCycle.prototype, "pendingDuration", {
        get: function () {
            return this._pendingDuration;
        },
        set: function (value) {
            this._pendingDuration = value;
        },
        enumerable: false,
        configurable: true
    });
    BonusCycle.prototype.toJSON = function () {
        return {
            previousStart: this.previousStart,
            start: this.start,
            end: this.end,
            pendingDuration: this.pendingDuration,
        };
    };
    return BonusCycle;
}());
exports.BonusCycle = BonusCycle;
