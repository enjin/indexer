"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenBehaviorHasRoyalty = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var _tokenBehaviorType_1 = require("./_tokenBehaviorType");
var _royalty_1 = require("./_royalty");
var TokenBehaviorHasRoyalty = /** @class */ (function () {
    function TokenBehaviorHasRoyalty(props, json) {
        this.isTypeOf = 'TokenBehaviorHasRoyalty';
        Object.assign(this, props);
        if (json != null) {
            this._type = marshal.enumFromJson(json.type, _tokenBehaviorType_1.TokenBehaviorType);
            this._royalty = json.royalty == null ? undefined : new _royalty_1.Royalty(undefined, json.royalty);
            this._beneficiaries = json.beneficiaries == null ? undefined : marshal.fromList(json.beneficiaries, function (val) { return val == null ? undefined : new _royalty_1.Royalty(undefined, val); });
        }
    }
    Object.defineProperty(TokenBehaviorHasRoyalty.prototype, "type", {
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
    Object.defineProperty(TokenBehaviorHasRoyalty.prototype, "royalty", {
        get: function () {
            return this._royalty;
        },
        set: function (value) {
            this._royalty = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenBehaviorHasRoyalty.prototype, "beneficiaries", {
        get: function () {
            return this._beneficiaries;
        },
        set: function (value) {
            this._beneficiaries = value;
        },
        enumerable: false,
        configurable: true
    });
    TokenBehaviorHasRoyalty.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            type: this.type,
            royalty: this.royalty == null ? undefined : this.royalty.toJSON(),
            beneficiaries: this.beneficiaries == null ? undefined : this.beneficiaries.map(function (val) { return val == null ? undefined : val.toJSON(); }),
        };
    };
    return TokenBehaviorHasRoyalty;
}());
exports.TokenBehaviorHasRoyalty = TokenBehaviorHasRoyalty;
