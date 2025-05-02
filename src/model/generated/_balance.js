"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Balance = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var Balance = /** @class */ (function () {
    function Balance(props, json) {
        Object.assign(this, props);
        if (json != null) {
            this._transferable = marshal.bigint.fromJSON(json.transferable);
            this._free = marshal.bigint.fromJSON(json.free);
            this._reserved = marshal.bigint.fromJSON(json.reserved);
            this._frozen = marshal.bigint.fromJSON(json.frozen);
            this._miscFrozen = marshal.bigint.fromJSON(json.miscFrozen);
            this._feeFrozen = marshal.bigint.fromJSON(json.feeFrozen);
        }
    }
    Object.defineProperty(Balance.prototype, "transferable", {
        get: function () {
            (0, assert_1.default)(this._transferable != null, 'uninitialized access');
            return this._transferable;
        },
        set: function (value) {
            this._transferable = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Balance.prototype, "free", {
        get: function () {
            (0, assert_1.default)(this._free != null, 'uninitialized access');
            return this._free;
        },
        set: function (value) {
            this._free = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Balance.prototype, "reserved", {
        get: function () {
            (0, assert_1.default)(this._reserved != null, 'uninitialized access');
            return this._reserved;
        },
        set: function (value) {
            this._reserved = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Balance.prototype, "frozen", {
        get: function () {
            (0, assert_1.default)(this._frozen != null, 'uninitialized access');
            return this._frozen;
        },
        set: function (value) {
            this._frozen = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Balance.prototype, "miscFrozen", {
        get: function () {
            (0, assert_1.default)(this._miscFrozen != null, 'uninitialized access');
            return this._miscFrozen;
        },
        set: function (value) {
            this._miscFrozen = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Balance.prototype, "feeFrozen", {
        get: function () {
            (0, assert_1.default)(this._feeFrozen != null, 'uninitialized access');
            return this._feeFrozen;
        },
        set: function (value) {
            this._feeFrozen = value;
        },
        enumerable: false,
        configurable: true
    });
    Balance.prototype.toJSON = function () {
        return {
            transferable: marshal.bigint.toJSON(this.transferable),
            free: marshal.bigint.toJSON(this.free),
            reserved: marshal.bigint.toJSON(this.reserved),
            frozen: marshal.bigint.toJSON(this.frozen),
            miscFrozen: marshal.bigint.toJSON(this.miscFrozen),
            feeFrozen: marshal.bigint.toJSON(this.feeFrozen),
        };
    };
    return Balance;
}());
exports.Balance = Balance;
