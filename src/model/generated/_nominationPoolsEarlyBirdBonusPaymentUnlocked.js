"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NominationPoolsEarlyBirdBonusPaymentUnlocked = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var NominationPoolsEarlyBirdBonusPaymentUnlocked = /** @class */ (function () {
    function NominationPoolsEarlyBirdBonusPaymentUnlocked(props, json) {
        this.isTypeOf = 'NominationPoolsEarlyBirdBonusPaymentUnlocked';
        Object.assign(this, props);
        if (json != null) {
            this._paymentId = marshal.int.fromJSON(json.paymentId);
            this._nextPaymentBlock = marshal.int.fromJSON(json.nextPaymentBlock);
        }
    }
    Object.defineProperty(NominationPoolsEarlyBirdBonusPaymentUnlocked.prototype, "paymentId", {
        get: function () {
            (0, assert_1.default)(this._paymentId != null, 'uninitialized access');
            return this._paymentId;
        },
        set: function (value) {
            this._paymentId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NominationPoolsEarlyBirdBonusPaymentUnlocked.prototype, "nextPaymentBlock", {
        get: function () {
            (0, assert_1.default)(this._nextPaymentBlock != null, 'uninitialized access');
            return this._nextPaymentBlock;
        },
        set: function (value) {
            this._nextPaymentBlock = value;
        },
        enumerable: false,
        configurable: true
    });
    NominationPoolsEarlyBirdBonusPaymentUnlocked.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            paymentId: this.paymentId,
            nextPaymentBlock: this.nextPaymentBlock,
        };
    };
    return NominationPoolsEarlyBirdBonusPaymentUnlocked;
}());
exports.NominationPoolsEarlyBirdBonusPaymentUnlocked = NominationPoolsEarlyBirdBonusPaymentUnlocked;
