"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiTokensClaimTokensCompleted = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var MultiTokensClaimTokensCompleted = /** @class */ (function () {
    function MultiTokensClaimTokensCompleted(props, json) {
        this.isTypeOf = 'MultiTokensClaimTokensCompleted';
        Object.assign(this, props);
        if (json != null) {
            this._account = marshal.string.fromJSON(json.account);
            this._ethAccount = marshal.string.fromJSON(json.ethAccount);
        }
    }
    Object.defineProperty(MultiTokensClaimTokensCompleted.prototype, "account", {
        get: function () {
            (0, assert_1.default)(this._account != null, 'uninitialized access');
            return this._account;
        },
        set: function (value) {
            this._account = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MultiTokensClaimTokensCompleted.prototype, "ethAccount", {
        get: function () {
            (0, assert_1.default)(this._ethAccount != null, 'uninitialized access');
            return this._ethAccount;
        },
        set: function (value) {
            this._ethAccount = value;
        },
        enumerable: false,
        configurable: true
    });
    MultiTokensClaimTokensCompleted.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            account: this.account,
            ethAccount: this.ethAccount,
        };
    };
    return MultiTokensClaimTokensCompleted;
}());
exports.MultiTokensClaimTokensCompleted = MultiTokensClaimTokensCompleted;
