"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CounterOfferResponseReject = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var _counterOfferResponseType_1 = require("./_counterOfferResponseType");
var CounterOfferResponseReject = /** @class */ (function () {
    function CounterOfferResponseReject(props, json) {
        this.isTypeOf = 'CounterOfferResponseReject';
        Object.assign(this, props);
        if (json != null) {
            this._kind = marshal.enumFromJson(json.kind, _counterOfferResponseType_1.CounterOfferResponseType);
        }
    }
    Object.defineProperty(CounterOfferResponseReject.prototype, "kind", {
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
    CounterOfferResponseReject.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            kind: this.kind,
        };
    };
    return CounterOfferResponseReject;
}());
exports.CounterOfferResponseReject = CounterOfferResponseReject;
