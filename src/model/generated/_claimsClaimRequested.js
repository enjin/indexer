"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClaimsClaimRequested = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var _accountClaimType_1 = require("./_accountClaimType");
var ClaimsClaimRequested = /** @class */ (function () {
    function ClaimsClaimRequested(props, json) {
        this.isTypeOf = 'ClaimsClaimRequested';
        Object.assign(this, props);
        if (json != null) {
            this._who = marshal.string.fromJSON(json.who);
            this._accountType = marshal.enumFromJson(json.accountType, _accountClaimType_1.AccountClaimType);
            this._hash = json.hash == null ? undefined : marshal.string.fromJSON(json.hash);
            this._amountClaimable = marshal.bigint.fromJSON(json.amountClaimable);
            this._amountBurned = marshal.bigint.fromJSON(json.amountBurned);
            this._isEfiToken = marshal.boolean.fromJSON(json.isEfiToken);
        }
    }
    Object.defineProperty(ClaimsClaimRequested.prototype, "who", {
        get: function () {
            (0, assert_1.default)(this._who != null, 'uninitialized access');
            return this._who;
        },
        set: function (value) {
            this._who = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClaimsClaimRequested.prototype, "accountType", {
        get: function () {
            (0, assert_1.default)(this._accountType != null, 'uninitialized access');
            return this._accountType;
        },
        set: function (value) {
            this._accountType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClaimsClaimRequested.prototype, "hash", {
        get: function () {
            return this._hash;
        },
        set: function (value) {
            this._hash = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClaimsClaimRequested.prototype, "amountClaimable", {
        get: function () {
            (0, assert_1.default)(this._amountClaimable != null, 'uninitialized access');
            return this._amountClaimable;
        },
        set: function (value) {
            this._amountClaimable = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClaimsClaimRequested.prototype, "amountBurned", {
        get: function () {
            (0, assert_1.default)(this._amountBurned != null, 'uninitialized access');
            return this._amountBurned;
        },
        set: function (value) {
            this._amountBurned = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClaimsClaimRequested.prototype, "isEfiToken", {
        get: function () {
            (0, assert_1.default)(this._isEfiToken != null, 'uninitialized access');
            return this._isEfiToken;
        },
        set: function (value) {
            this._isEfiToken = value;
        },
        enumerable: false,
        configurable: true
    });
    ClaimsClaimRequested.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            who: this.who,
            accountType: this.accountType,
            hash: this.hash,
            amountClaimable: marshal.bigint.toJSON(this.amountClaimable),
            amountBurned: marshal.bigint.toJSON(this.amountBurned),
            isEfiToken: this.isEfiToken,
        };
    };
    return ClaimsClaimRequested;
}());
exports.ClaimsClaimRequested = ClaimsClaimRequested;
