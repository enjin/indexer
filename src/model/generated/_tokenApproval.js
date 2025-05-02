"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenApproval = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var TokenApproval = /** @class */ (function () {
    function TokenApproval(props, json) {
        Object.assign(this, props);
        if (json != null) {
            this._accountId = marshal.string.fromJSON(json.accountId);
            this._amount = marshal.bigint.fromJSON(json.amount);
            this._expiration = json.expiration == null ? undefined : marshal.int.fromJSON(json.expiration);
        }
    }
    Object.defineProperty(TokenApproval.prototype, "accountId", {
        get: function () {
            (0, assert_1.default)(this._accountId != null, 'uninitialized access');
            return this._accountId;
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenApproval.prototype, "amount", {
        get: function () {
            (0, assert_1.default)(this._amount != null, 'uninitialized access');
            return this._amount;
        },
        set: function (value) {
            this._amount = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenApproval.prototype, "expiration", {
        get: function () {
            return this._expiration;
        },
        set: function (value) {
            this._expiration = value;
        },
        enumerable: false,
        configurable: true
    });
    TokenApproval.prototype.toJSON = function () {
        return {
            accountId: this.accountId,
            amount: marshal.bigint.toJSON(this.amount),
            expiration: this.expiration,
        };
    };
    return TokenApproval;
}());
exports.TokenApproval = TokenApproval;
