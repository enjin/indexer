"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromJsonAccountRule = fromJsonAccountRule;
var _whitelistedCallers_1 = require("./_whitelistedCallers");
var _requireToken_1 = require("./_requireToken");
function fromJsonAccountRule(json) {
    switch (json === null || json === void 0 ? void 0 : json.isTypeOf) {
        case 'WhitelistedCallers': return new _whitelistedCallers_1.WhitelistedCallers(undefined, json);
        case 'RequireToken': return new _requireToken_1.RequireToken(undefined, json);
        default: throw new TypeError('Unknown json object passed as AccountRule');
    }
}
