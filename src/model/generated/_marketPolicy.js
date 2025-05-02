"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketPolicy = void 0;
var marshal = require("./marshal");
var _royalty_1 = require("./_royalty");
var _royaltyBeneficiary_1 = require("./_royaltyBeneficiary");
var MarketPolicy = /** @class */ (function () {
    function MarketPolicy(props, json) {
        Object.assign(this, props);
        if (json != null) {
            this._royalty = json.royalty == null ? undefined : new _royalty_1.Royalty(undefined, json.royalty);
            this._beneficiaries = json.beneficiaries == null ? undefined : marshal.fromList(json.beneficiaries, function (val) { return new _royaltyBeneficiary_1.RoyaltyBeneficiary(undefined, marshal.nonNull(val)); });
        }
    }
    Object.defineProperty(MarketPolicy.prototype, "royalty", {
        get: function () {
            return this._royalty;
        },
        set: function (value) {
            this._royalty = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MarketPolicy.prototype, "beneficiaries", {
        get: function () {
            return this._beneficiaries;
        },
        set: function (value) {
            this._beneficiaries = value;
        },
        enumerable: false,
        configurable: true
    });
    MarketPolicy.prototype.toJSON = function () {
        return {
            royalty: this.royalty == null ? undefined : this.royalty.toJSON(),
            beneficiaries: this.beneficiaries == null ? undefined : this.beneficiaries.map(function (val) { return val.toJSON(); }),
        };
    };
    return MarketPolicy;
}());
exports.MarketPolicy = MarketPolicy;
