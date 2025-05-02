"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CounterOfferResponseCounter = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var _counterOfferResponseType_1 = require("./_counterOfferResponseType");
var CounterOfferResponseCounter = /** @class */ (function () {
    function CounterOfferResponseCounter(props, json) {
        this.isTypeOf = 'CounterOfferResponseCounter';
        Object.assign(this, props);
        if (json != null) {
            this._kind = marshal.enumFromJson(json.kind, _counterOfferResponseType_1.CounterOfferResponseType);
            this._value = marshal.bigint.fromJSON(json.value);
        }
    }
    Object.defineProperty(CounterOfferResponseCounter.prototype, "kind", {
        get: function () {
            (0, assert_1.default)(this._kind != null, 'uninitialized access');
            return this._kind;
        },
        set: function (value) {
            this._kind = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CounterOfferResponseCounter.prototype, "value", {
        get: function () {
            (0, assert_1.default)(this._value != null, 'uninitialized access');
            return this._value;
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    CounterOfferResponseCounter.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            kind: this.kind,
            value: marshal.bigint.toJSON(this.value),
        };
    };
    return CounterOfferResponseCounter;
}());
exports.CounterOfferResponseCounter = CounterOfferResponseCounter;
