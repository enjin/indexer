"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketplaceCounterOfferAnswered = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var _counterOfferResponse_1 = require("./_counterOfferResponse");
var MarketplaceCounterOfferAnswered = /** @class */ (function () {
    function MarketplaceCounterOfferAnswered(props, json) {
        this.isTypeOf = 'MarketplaceCounterOfferAnswered';
        Object.assign(this, props);
        if (json != null) {
            this._listing = marshal.string.fromJSON(json.listing);
            this._creator = marshal.string.fromJSON(json.creator);
            this._response = (0, _counterOfferResponse_1.fromJsonCounterOfferResponse)(json.response);
        }
    }
    Object.defineProperty(MarketplaceCounterOfferAnswered.prototype, "listing", {
        get: function () {
            (0, assert_1.default)(this._listing != null, 'uninitialized access');
            return this._listing;
        },
        set: function (value) {
            this._listing = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MarketplaceCounterOfferAnswered.prototype, "creator", {
        get: function () {
            (0, assert_1.default)(this._creator != null, 'uninitialized access');
            return this._creator;
        },
        set: function (value) {
            this._creator = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MarketplaceCounterOfferAnswered.prototype, "response", {
        get: function () {
            (0, assert_1.default)(this._response != null, 'uninitialized access');
            return this._response;
        },
        set: function (value) {
            this._response = value;
        },
        enumerable: false,
        configurable: true
    });
    MarketplaceCounterOfferAnswered.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            listing: this.listing,
            creator: this.creator,
            response: this.response.toJSON(),
        };
    };
    return MarketplaceCounterOfferAnswered;
}());
exports.MarketplaceCounterOfferAnswered = MarketplaceCounterOfferAnswered;
