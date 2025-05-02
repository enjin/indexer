"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StakeExchangeLiquidityConfigUpdated = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var StakeExchangeLiquidityConfigUpdated = /** @class */ (function () {
    function StakeExchangeLiquidityConfigUpdated(props, json) {
        this.isTypeOf = 'StakeExchangeLiquidityConfigUpdated';
        Object.assign(this, props);
        if (json != null) {
            this._account = marshal.string.fromJSON(json.account);
            this._tokenFilter = marshal.string.fromJSON(json.tokenFilter);
        }
    }
    Object.defineProperty(StakeExchangeLiquidityConfigUpdated.prototype, "account", {
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
    Object.defineProperty(StakeExchangeLiquidityConfigUpdated.prototype, "tokenFilter", {
        get: function () {
            (0, assert_1.default)(this._tokenFilter != null, 'uninitialized access');
            return this._tokenFilter;
        },
        set: function (value) {
            this._tokenFilter = value;
        },
        enumerable: false,
        configurable: true
    });
    StakeExchangeLiquidityConfigUpdated.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            account: this.account,
            tokenFilter: this.tokenFilter,
        };
    };
    return StakeExchangeLiquidityConfigUpdated;
}());
exports.StakeExchangeLiquidityConfigUpdated = StakeExchangeLiquidityConfigUpdated;
