"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EarlyBirdBonus = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var EarlyBirdBonus = /** @class */ (function () {
    function EarlyBirdBonus(props, json) {
        Object.assign(this, props);
        if (json != null) {
            this._amount = marshal.bigint.fromJSON(json.amount);
            this._shareCaptureBlock = json.shareCaptureBlock == null ? undefined : marshal.int.fromJSON(json.shareCaptureBlock);
            this._lastPaymentId = json.lastPaymentId == null ? undefined : marshal.int.fromJSON(json.lastPaymentId);
            this._totalPaid = json.totalPaid == null ? undefined : marshal.bigint.fromJSON(json.totalPaid);
        }
    }
    Object.defineProperty(EarlyBirdBonus.prototype, "amount", {
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
    Object.defineProperty(EarlyBirdBonus.prototype, "shareCaptureBlock", {
        get: function () {
            return this._shareCaptureBlock;
        },
        set: function (value) {
            this._shareCaptureBlock = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EarlyBirdBonus.prototype, "lastPaymentId", {
        get: function () {
            return this._lastPaymentId;
        },
        set: function (value) {
            this._lastPaymentId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EarlyBirdBonus.prototype, "totalPaid", {
        get: function () {
            return this._totalPaid;
        },
        set: function (value) {
            this._totalPaid = value;
        },
        enumerable: false,
        configurable: true
    });
    EarlyBirdBonus.prototype.toJSON = function () {
        return {
            amount: marshal.bigint.toJSON(this.amount),
            shareCaptureBlock: this.shareCaptureBlock,
            lastPaymentId: this.lastPaymentId,
            totalPaid: this.totalPaid == null ? undefined : marshal.bigint.toJSON(this.totalPaid),
        };
    };
    return EarlyBirdBonus;
}());
exports.EarlyBirdBonus = EarlyBirdBonus;
