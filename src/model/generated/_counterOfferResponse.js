"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromJsonCounterOfferResponse = fromJsonCounterOfferResponse;
var _counterOfferResponseAccept_1 = require("./_counterOfferResponseAccept");
var _counterOfferResponseCounter_1 = require("./_counterOfferResponseCounter");
var _counterOfferResponseReject_1 = require("./_counterOfferResponseReject");
function fromJsonCounterOfferResponse(json) {
    switch (json === null || json === void 0 ? void 0 : json.isTypeOf) {
        case 'CounterOfferResponseAccept': return new _counterOfferResponseAccept_1.CounterOfferResponseAccept(undefined, json);
        case 'CounterOfferResponseCounter': return new _counterOfferResponseCounter_1.CounterOfferResponseCounter(undefined, json);
        case 'CounterOfferResponseReject': return new _counterOfferResponseReject_1.CounterOfferResponseReject(undefined, json);
        default: throw new TypeError('Unknown json object passed as CounterOfferResponse');
    }
}
