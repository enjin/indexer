"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromJsonTokenBehavior = fromJsonTokenBehavior;
var _tokenBehaviorHasRoyalty_1 = require("./_tokenBehaviorHasRoyalty");
var _tokenBehaviorIsCurrency_1 = require("./_tokenBehaviorIsCurrency");
function fromJsonTokenBehavior(json) {
    switch (json === null || json === void 0 ? void 0 : json.isTypeOf) {
        case 'TokenBehaviorHasRoyalty': return new _tokenBehaviorHasRoyalty_1.TokenBehaviorHasRoyalty(undefined, json);
        case 'TokenBehaviorIsCurrency': return new _tokenBehaviorIsCurrency_1.TokenBehaviorIsCurrency(undefined, json);
        default: throw new TypeError('Unknown json object passed as TokenBehavior');
    }
}
