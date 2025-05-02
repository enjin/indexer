"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromJsonTokenCap = fromJsonTokenCap;
var _tokenCapSingleMint_1 = require("./_tokenCapSingleMint");
var _tokenCapSupply_1 = require("./_tokenCapSupply");
function fromJsonTokenCap(json) {
    switch (json === null || json === void 0 ? void 0 : json.isTypeOf) {
        case 'TokenCapSingleMint': return new _tokenCapSingleMint_1.TokenCapSingleMint(undefined, json);
        case 'TokenCapSupply': return new _tokenCapSupply_1.TokenCapSupply(undefined, json);
        default: throw new TypeError('Unknown json object passed as TokenCap');
    }
}
