"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiTokensClaimTokensInitiated = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var MultiTokensClaimTokensInitiated = /** @class */ (function () {
    function MultiTokensClaimTokensInitiated(props, json) {
        this.isTypeOf = 'MultiTokensClaimTokensInitiated';
        Object.assign(this, props);
        if (json != null) {
            this._account = marshal.string.fromJSON(json.account);
            this._ethAccount = marshal.string.fromJSON(json.ethAccount);
        }
    }
    Object.defineProperty(MultiTokensClaimTokensInitiated.prototype, "account", {
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
    Object.defineProperty(MultiTokensClaimTokensInitiated.prototype, "ethAccount", {
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
    MultiTokensClaimTokensInitiated.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            account: this.account,
            ethAccount: this.ethAccount,
        };
    };
    return MultiTokensClaimTokensInitiated;
}());
exports.MultiTokensClaimTokensInitiated = MultiTokensClaimTokensInitiated;
