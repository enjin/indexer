"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CounterOfferResponseAccept = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var _counterOfferResponseType_1 = require("./_counterOfferResponseType");
var CounterOfferResponseAccept = /** @class */ (function () {
    function CounterOfferResponseAccept(props, json) {
        this.isTypeOf = 'CounterOfferResponseAccept';
        Object.assign(this, props);
        if (json != null) {
            this._kind = marshal.enumFromJson(json.kind, _counterOfferResponseType_1.CounterOfferResponseType);
        }
    }
    Object.defineProperty(CounterOfferResponseAccept.prototype, "kind", {
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
    CounterOfferResponseAccept.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            kind: this.kind,
        };
    };
    return CounterOfferResponseAccept;
}());
exports.CounterOfferResponseAccept = CounterOfferResponseAccept;
