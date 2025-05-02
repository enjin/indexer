"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenBehaviorIsCurrency = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var _tokenBehaviorType_1 = require("./_tokenBehaviorType");
var TokenBehaviorIsCurrency = /** @class */ (function () {
    function TokenBehaviorIsCurrency(props, json) {
        this.isTypeOf = 'TokenBehaviorIsCurrency';
        Object.assign(this, props);
        if (json != null) {
            this._type = marshal.enumFromJson(json.type, _tokenBehaviorType_1.TokenBehaviorType);
        }
    }
    Object.defineProperty(TokenBehaviorIsCurrency.prototype, "type", {
        get: function () {
            (0, assert_1.default)(this._type != null, 'uninitialized access');
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    TokenBehaviorIsCurrency.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            type: this.type,
        };
    };
    return TokenBehaviorIsCurrency;
}());
exports.TokenBehaviorIsCurrency = TokenBehaviorIsCurrency;
