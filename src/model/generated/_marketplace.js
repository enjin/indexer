"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Marketplace = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var Marketplace = /** @class */ (function () {
    function Marketplace(props, json) {
        Object.assign(this, props);
        if (json != null) {
            this._protocolFee = marshal.float.fromJSON(json.protocolFee);
            this._listingActiveDelay = marshal.int.fromJSON(json.listingActiveDelay);
            this._listingDeposit = marshal.bigint.fromJSON(json.listingDeposit);
            this._maxRoundingError = marshal.bigint.fromJSON(json.maxRoundingError);
            this._maxSaltLength = marshal.int.fromJSON(json.maxSaltLength);
            this._minimumBidIncreasePercentage = marshal.float.fromJSON(json.minimumBidIncreasePercentage);
        }
    }
    Object.defineProperty(Marketplace.prototype, "protocolFee", {
        get: function () {
            (0, assert_1.default)(this._protocolFee != null, 'uninitialized access');
            return this._protocolFee;
        },
        set: function (value) {
            this._protocolFee = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Marketplace.prototype, "listingActiveDelay", {
        get: function () {
            (0, assert_1.default)(this._listingActiveDelay != null, 'uninitialized access');
            return this._listingActiveDelay;
        },
        set: function (value) {
            this._listingActiveDelay = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Marketplace.prototype, "listingDeposit", {
        get: function () {
            (0, assert_1.default)(this._listingDeposit != null, 'uninitialized access');
            return this._listingDeposit;
        },
        set: function (value) {
            this._listingDeposit = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Marketplace.prototype, "maxRoundingError", {
        get: function () {
            (0, assert_1.default)(this._maxRoundingError != null, 'uninitialized access');
            return this._maxRoundingError;
        },
        set: function (value) {
            this._maxRoundingError = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Marketplace.prototype, "maxSaltLength", {
        get: function () {
            (0, assert_1.default)(this._maxSaltLength != null, 'uninitialized access');
            return this._maxSaltLength;
        },
        set: function (value) {
            this._maxSaltLength = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Marketplace.prototype, "minimumBidIncreasePercentage", {
        get: function () {
            (0, assert_1.default)(this._minimumBidIncreasePercentage != null, 'uninitialized access');
            return this._minimumBidIncreasePercentage;
        },
        set: function (value) {
            this._minimumBidIncreasePercentage = value;
        },
        enumerable: false,
        configurable: true
    });
    Marketplace.prototype.toJSON = function () {
        return {
            protocolFee: this.protocolFee,
            listingActiveDelay: this.listingActiveDelay,
            listingDeposit: marshal.bigint.toJSON(this.listingDeposit),
            maxRoundingError: marshal.bigint.toJSON(this.maxRoundingError),
            maxSaltLength: this.maxSaltLength,
            minimumBidIncreasePercentage: this.minimumBidIncreasePercentage,
        };
    };
    return Marketplace;
}());
exports.Marketplace = Marketplace;
