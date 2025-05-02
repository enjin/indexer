"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiTokensClaimedCollections = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var MultiTokensClaimedCollections = /** @class */ (function () {
    function MultiTokensClaimedCollections(props, json) {
        this.isTypeOf = 'MultiTokensClaimedCollections';
        Object.assign(this, props);
        if (json != null) {
            this._account = marshal.string.fromJSON(json.account);
            this._ethAccount = marshal.string.fromJSON(json.ethAccount);
            this._collectionIds = json.collectionIds == null ? undefined : marshal.fromList(json.collectionIds, function (val) { return marshal.bigint.fromJSON(val); });
        }
    }
    Object.defineProperty(MultiTokensClaimedCollections.prototype, "account", {
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
    Object.defineProperty(MultiTokensClaimedCollections.prototype, "ethAccount", {
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
    Object.defineProperty(MultiTokensClaimedCollections.prototype, "collectionIds", {
        get: function () {
            return this._collectionIds;
        },
        set: function (value) {
            this._collectionIds = value;
        },
        enumerable: false,
        configurable: true
    });
    MultiTokensClaimedCollections.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            account: this.account,
            ethAccount: this.ethAccount,
            collectionIds: this.collectionIds == null ? undefined : this.collectionIds.map(function (val) { return marshal.bigint.toJSON(val); }),
        };
    };
    return MultiTokensClaimedCollections;
}());
exports.MultiTokensClaimedCollections = MultiTokensClaimedCollections;
